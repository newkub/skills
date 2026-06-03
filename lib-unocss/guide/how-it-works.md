# UnoCSS ทำงานอย่างไร

## Pipeline ภาพรวม

UnoCSS ทำงานผ่าน pipeline 4 ขั้นตอน:

```
┌──────────────────────────────────────────────────────────────────┐
│                     UnoCSS Pipeline                              │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────┐    ┌──────────┐    ┌──────────┐    ┌────────────┐  │
│  │  Scan   │───▶│ Extract  │───▶│ Resolve  │───▶│  Generate  │  │
│  │ Content │    │ Classes  │    │  Rules   │    │    CSS     │  │
│  └─────────┘    └──────────┘    └──────────┘    └────────────┘  │
│       │              │               │               │           │
│  อ่านไฟล์       หา class names   match rules    สร้าง CSS      │
│  ทั้งหมด        จาก content      + presets      output          │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Step 1: Scan Content

UnoCSS scan ไฟล์ทั้งหมดที่กำหนดใน `content` config:

```typescript
export default defineConfig({
  content: {
    filesystem: ['src/**/*.{vue,jsx,tsx,html}'],
    inline: ['<div class="text-red">inline</div>'],
  },
})
```

- Scan จาก filesystem (glob patterns)
- Scan จาก inline content
- รองรับ custom extractors สำหรับ file types เฉพาะ

## Step 2: Extract Classes

Extractors หา class names จาก content:

```
┌─────────────────────────────────────────┐
│  Input HTML/Vue/JSX                     │
│  <div class="flex p-4 bg-blue-500">     │
├─────────────────────────────────────────┤
│  Extracted Tokens                       │
│  ["flex", "p-4", "bg-blue-500"]         │
└─────────────────────────────────────────┘
```

- Default extractor แยก tokens ด้วย whitespace
- Custom extractors สำหรับ special syntax (attributify, pug, etc.)
- ลบ duplicates ออกระหว่าง extraction

## Step 3: Resolve Rules

แต่ละ token ถูก match กับ rules ตามลำดับ:

```
┌──────────────────────────────────────────────────────────┐
│  Token: "bg-blue-500"                                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  1. Check static rules    → ไม่เจอ                       │
│  2. Check dynamic rules   → match /^bg-(.+)$/           │
│  3. Check presets         → presetUno color rule        │
│  4. Generate CSS          → { background-color: #3b82f6 }│
│                                                          │
└──────────────────────────────────────────────────────────┘
```

ลำดับการ resolve:
1. **Static rules** - exact match
2. **Dynamic rules** - regex match
3. **Presets** - preset-defined rules
4. **Shortcuts** - expand เป็น sub-tokens แล้ว resolve อีกครั้ง

## Step 4: Generate CSS

CSS ที่ resolve ได้ถูกประกอบเป็น output:

```
┌─────────────────────────────────────────┐
│  Resolved Rules                         │
│  flex     → { display: flex }           │
│  p-4      → { padding: 1rem }           │
│  bg-blue  → { background-color: #3b.. } │
├─────────────────────────────────────────┤
│  Generated CSS Output                   │
│  .flex { display: flex; }               │
│  .p-4 { padding: 1rem; }               │
│  .bg-blue-500 { background-color: .. }  │
└─────────────────────────────────────────┘
```

- เรียงลำดับตาม layers (pre, default, post)
- รองรับ CSS layers (`@layer`)
- Minify output ได้

## Transformers Pipeline

Transformers ทำงานแยกจาก main pipeline:

```
┌──────────────────────────────────────────────────────┐
│  Transformer Pipeline                                │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Source ──▶ transformerDirectives                     │
│             │ @apply flex p-4                        │
│             ▼                                        │
│         transformerVariantGroup                      │
│             │ hover:(bg-red text-white)              │
│             ▼                                        │
│         transformerCompileClass                      │
│             │ group multiple classes                 │
│             ▼                                        │
│         Final Source                                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

## Build Integration

UnoCSS integrate กับ build tools เป็น plugin:

| Build Tool | Integration | คำอธิบาย |
|------------|-------------|----------|
| **Vite** | `unocss/vite` | Plugin ใน Vite config |
| **Webpack** | `@unocss/webpack` | Webpack plugin |
| **PostCSS** | `@unocss/postcss` | PostCSS plugin |
| **CLI** | `@unocss/cli` | Standalone CLI |
| **Runtime** | `@unocss/runtime` | Browser runtime (dev only) |

## Performance

UnoCSS เร็วกว่า Tailwind CSS อย่างมีนัยสำคัญ:

- **ไม่มี parsing** - อ่าน raw text โดยตรง
- **ไม่มี AST** - ไม่ต้องสร้าง/transform AST
- **On-demand** - สร้างเฉพาะที่ใช้
- **Caching** - cache ผลลัพธ์ระหว่าง builds
