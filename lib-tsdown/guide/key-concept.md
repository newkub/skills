# Key Concept

## What is tsdown?

tsdown เป็น TypeScript bundler ที่ใช้ Rolldown (Rust-based bundler) เพื่อสร้าง bundle สำหรับ library อย่างรวดเร็ว รองรับ ESM, CJS, DTS generation และ TypeScript declarations อัตโนมัติ

## Core Features

| Feature | Description |
|---------|-------------|
| **Fast Bundling** | ใช้ Rust-based Rolldown สำหรับความเร็ว |
| **Multi-format** | ESM, CJS, IIFE, UMD output |
| **DTS Generation** | สร้าง TypeScript declarations อัตโนมัติ |
| **Plugin Support** | รองรับ Vite plugins |
| **Tree-shaking** | Loosen dead code อัตโนมัติ |
| **Watch Mode** | พัฒนาด้วย hot reload |

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         tsdown Flow                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Source Files                                                       │
│        │                                                             │
│        ▼                                                             │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Rolldown (Rust)                            │   │
│   │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │   │
│   │  │ Resolver │→ │  Parser  │→ │  Bundler │→ │ Emitter  │      │   │
│   │  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │   │
│   └─────────────────────────────────────────────────────────────┘   │
│        │                                                             │
│        ▼                                                             │
│   Output Formats                                                     │
│   ├── index.mjs (ES Module)                                         │
│   ├── index.cjs (CommonJS)                                         │
│   └── index.d.ts (TypeScript declarations)                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Why tsdown?

| Aspect | tsdown | tsc | rollup | esbuild |
|--------|--------|-----|--------|--------|
| **Speed** | Very Fast | Slow | Fast | Very Fast |
| **DTS** | Built-in | Slow | Plugin | Plugin |
| **Plugins** | Vite plugins | No | Native | Limited |
| **Output** | ESM + CJS | ESM only | Configurable | Configurable |
| **TypeScript** | Native | Native | Plugin | Native |

## Key Concepts

### Entry Point

```typescript
// tsdown.config.ts
export default defineConfig({
  entry: ['./src/index.ts', './src/utils.ts'],
})
```

### Output Formats

```typescript
export default defineConfig({
  format: ['esm', 'cjs'], // Output both formats
})
```

### DTS Generation

```typescript
export default defineConfig({
  dts: true, // Generate .d.ts files
})
```

## Comparison with Other Bundlers

| Feature | tsdown | rollup | tsup |
|---------|--------|--------|------|
| Engine | Rolldown (Rust) | Rollup (JS) | esbuild (Go) |
| DTS | Built-in | @rollup/plugin-dts | Plugin |
| Plugins | Vite ecosystem | Native | Limited |
| Config | Simple | More complex | Simple |

## When to Use tsdown

| Use Case | Recommendation |
|----------|---------------|
| Library development | Perfect |
| Component library | Perfect |
| npm package | Perfect |
| Large application | Consider Vite |
| SSR framework | Consider Vite |

## Next Steps

| File | Description |
|------|-------------|
| [how-it-works.md](how-it-works.md) | กลไกการทำงานภายใน |
| [quick-start.md](quick-start.md) | เริ่มต้นใช้งาน |
| [features.md](features.md) | Features ทั้งหมด |