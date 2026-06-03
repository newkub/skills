# Key Concept

## What is bunup?

bunup เป็น build tool สำหรับ TypeScript/React libraries ที่สร้างบน Bun's native bundler ให้ความเร็วในการ build สูงมาก

## Core Features

### 1. Instant Builds

- ใช้ Bun's native speed
- เหมาะสำหรับ monorepos
- Fast feedback loops

### 2. TypeScript Declarations

- สร้าง .d.ts files อัตโนมัติ
- Declaration splitting สำหรับ cleaner bundles
- รองรับ complex types

### 3. CSS Support

- Import CSS directly
- CSS Modules support
- Tailwind CSS support

### 4. Auto-exports

- สร้าง export maps อัตโนมัติ
- Unused dependency detection
- Smart bundling

## How It Works

```
Source Code (TypeScript/React)
        ↓
    Bun Bundler
        ↓
    Optimization
        ↓
Output (ESM, CJS, .d.ts)
```

## Build Formats

| Format | Description | Use Case |
|--------|-------------|----------|
| ESM | ECMAScript Modules | Modern applications |
| CJS | CommonJS | Legacy compatibility |
| IIFE | Immediately Invoked | Browser globals |

## Declaration Splitting

แยก type declarations ตาม exports:

```typescript
// src/index.ts
export { Button } from './Button';
export { Input } from './Input';
```

```bash
# Output
dist/
├── index.d.ts
├── Button.d.ts
└── Input.d.ts
```

## Workspace Support

Build หลาย packages ใน workspace:

```yaml
# bunup.config.ts
export default defineConfig({
  workspace: {
    packages: ['packages/*'],
  },
});
```

```bash
bunx bunup --workspace
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| entry | string | `./src/index.ts` | Entry point |
| formats | string[] | `['esm']` | Output formats |
| dts | boolean | `true` | Generate types |
| minify | boolean | `false` | Minify output |
| external | string[] | `[]` | External packages |
| target | string | `browser` | Build target |

## When to Use

| Use Case | Recommendation |
|----------|----------------|
| TypeScript library | ✅ แนะนำ |
| React component library | ✅ แนะนำ |
| Node.js package | ⚠️ ระวัง bundling |
| Monorepo | ✅ แนะนำ |

## Next Steps

- ดู [all-features.md](all-features.md) สำหรับ features ทั้งหมด
- ดู [best-practices.md](best-practices.md) สำหรับแนวทางปฏิบัติ