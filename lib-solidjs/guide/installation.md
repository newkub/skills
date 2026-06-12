# Installation

วิธีติดตั้ง SolidJS ใน project ของคุณ

## Vite

สร้าง project ใหม่ด้วย Vite template:

```bash
bun create vite my-app --template solid-ts
cd my-app
bun install
```

## Solid Playground

ใช้ template จาก SolidJS:

```bash
bunx degit solidjs/templates/ts my-app
cd my-app
bun install
```

## Manual Setup

ติดตั้งใน project ที่มีอยู่:

```bash
bun init -y
bun add solid-js
bun add -D vite vite-plugin-solid typescript
```

## Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
});
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "types": ["vite/client"],
    "noEmit": true,
    "isolatedModules": true
  }
}
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)