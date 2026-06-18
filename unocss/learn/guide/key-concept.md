# Key Concepts ของ UnoCSS

## Atomic CSS Engine

UnoCSS เป็น **atomic CSS engine** ที่สร้าง CSS classes ตามการใช้งานจริง (on-demand) โดยไม่พึ่ง pre-defined utilities

| คุณสมบัติ | คำอธิบาย |
|-----------|----------|
| **On-demand** | สร้างเฉพาะ classes ที่ใช้จริงเท่านั้น |
| **No Parsing** | ไม่มี parsing step ทำให้เร็วมาก |
| **No AST** | ไม่สร้าง Abstract Syntax Tree |
| **Engine-first** | ออกแบบเป็น engine ไม่ใช่ framework |

## Presets System

Presets คือชุดของ rules และ configuration ที่พร้อมใช้งาน:

| Preset | คำอธิบาย |
|--------|----------|
| `preset-uno` | Tailwind/Windi CSS compatible utilities |
| `preset-attributify` | ใช้ HTML attributes แทน classes |
| `preset-icons` | ใช้ Iconify icons เป็น CSS classes |
| `preset-typography` | Typography utilities (prose) |
| `preset-web-fonts` | Auto-loading web fonts |
| `preset-tagify` | ใช้ HTML tags เป็น utilities |

## Rules

Rules คือหัวใจของ UnoCSS - กำหนดว่า class name แปลงเป็น CSS อย่างไร:

```typescript
// Static rules
['flex', { display: 'flex' }]

// Dynamic rules (regex)
[/^text-(\d+)$/, ([, d]) => ({ fontSize: `${d}px` })]
```

## Shortcuts

Shortcuts คือการรวมหลาย classes เข้าด้วยกันภายใต้ชื่อเดียว:

```typescript
shortcuts: {
  'btn': 'px-4 py-2 rounded bg-blue-500 text-white',
  'btn-primary': 'btn hover:bg-blue-600',
}
```

## Theme System

Theme system รองรับ design tokens แบบ nested:

- **colors** - สีทั้งหมด (primary, secondary, brand)
- **spacing** - ระยะห่าง (xs, sm, md, lg, xl)
- **breakpoints** - responsive breakpoints
- **fontFamily** / **fontSize** - typography tokens

## Transformers

Transformers แปลง CSS ก่อน/หลัง generation:

| Transformer | หน้าที่ |
|-------------|---------|
| `transformerDirectives` | รองรับ `@apply`, `@screen` |
| `transformerVariantGroup` | Group variants: `hover:(bg-red text-white)` |
| `transformerCompileClass` | Compile multiple classes เป็น class เดียว |

## Safety & Extraction

- **Safelist** - บังคับให้สร้าง classes ที่ระบุ (สำหรับ dynamic classes)
- **Blocklist** - บล็อกไม่ให้สร้าง classes ที่ระบุ
- **Extractors** - กำหนดวิธี scan หา class names จาก content types ต่างๆ
