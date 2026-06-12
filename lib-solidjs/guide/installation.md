# Installation

## Vite

```bash
npm create vite@latest my-app -- --template solid-ts
cd my-app
npm install
```

## Solid Playground

```bash
bunx degit solidjs/templates/ts my-app
cd my-app
npm install
```

## Manual Setup

```bash
npm init -y
npm install solid-js
npm install -D vite vite-plugin-solid typescript
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