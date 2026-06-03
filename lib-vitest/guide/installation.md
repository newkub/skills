# Installation

## Purpose

แนะนำการติดตั้ง Vitest พร้อม environments และ frameworks

## Scope

- Package Installation
- Test Environments
- Framework Integration
- Project Scaffolding
- TypeScript Configuration

## Package Installation

### npm

```bash
npm install -D vitest
```

### yarn

```bash
yarn add -D vitest
```

### pnpm

```bash
pnpm add -D vitest
```

### bun

```bash
bun add -D vitest
```

## Test Environments

Vitest ต้องการ environment package:

| Environment | Package | Command |
|-------------|---------|---------|
| **node** | Built-in | - |
| **jsdom** | `jsdom` | `npm install -D jsdom` |
| **happy-dom** | `happy-dom` | `npm install -D happy-dom` |

```bash
# DOM testing
npm install -D jsdom

# หรือ lightweight alternative
npm install -D happy-dom
```

## Framework Integration

### React

```bash
npm install -D @vitejs/plugin-react jsdom
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
```

### Vue

```bash
npm install -D @vitejs/plugin-vue jsdom @vue/test-utils
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
  },
})
```

### Svelte

```bash
npm install -D @sveltejs/vite-plugin-svelte jsdom
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
```

## Project Scaffolding

### With Vite

```bash
# React + TypeScript
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```

```bash
# Vue + TypeScript
npm create vite@latest my-app -- --template vue-ts
cd my-app
npm install
npm install -D vitest jsdom @vue/test-utils @testing-library/jest-dom
```

### Manual Setup

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',  // หรือ 'jsdom', 'happy-dom'
  },
})
```

## Package.json Scripts

เพิ่ม scripts ใน `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui"
  }
}
```

## TypeScript Configuration

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Vitest Types

```typescript
// vite-env.d.ts
/// <reference types="vitest" />
/// <reference types="vite/client" />
```

## Verify Installation

รัน version check:

```bash
vitest --version
# vitest v1.x.x
```

รัน test แรก:

```bash
vitest run
```

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D vitest` |
| **Environment** | `npm install -D jsdom` |
| **Config** | สร้าง `vitest.config.ts` |
| **Script** | เพิ่ม `"test": "vitest"` ใน package.json |
| **Run** | `npm test` |