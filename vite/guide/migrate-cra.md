---
title: Migration from Create React App
description: คู่มือการย้ายโปรเจกต์จาก Create React App มาใช้ Vite
---

# Migration from Create React App

## ทำไมต้องย้าย?

| CRA | Vite |
|-----|------|
| Dev server start ช้า (~30s) | Dev server start เร็ว (<1s) |
| HMR ช้า | HMR ทันที |
| Build ช้า | Build เร็วกว่า 10-20x |
| Dependencies เก่า | Dependencies อัพเดท |

---

## ขั้นตอน Migration

### Step 1: ลบ CRA Dependencies

```bash
# ลบ react-scripts
bun remove react-scripts

# ลบไฟล์ CRA ที่ไม่จำเป็น
rm -f src/setupTests.js src/reportWebVitals.js src/logo.svg
```

### Step 2: ติดตั้ง Vite

```bash
bun add -D vite @vitejs/plugin-react

# ถ้าใช้ TypeScript (แนะนำ)
bun add -D @types/react @types/react-dom
```

### Step 3: สร้าง vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'  // CRA ใช้ 'build' แทน 'dist'
  }
})
```

### Step 4: อัพเดท index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using Vite" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
```

หมายเหตุ: ย้าย `public/index.html` → `index.html` (root)

### Step 5: ย้าย Environment Variables

```text
# .env
# แก้ทุกตัวแปรจาก REACT_APP_ → VITE_

# Before (CRA)
REACT_APP_API_URL=https://api.example.com
REACT_APP_DEBUG=true

# After (Vite)
VITE_API_URL=https://api.example.com
VITE_DEBUG=true
```

```typescript
// Before (CRA)
const apiUrl = process.env.REACT_APP_API_URL

// After (Vite)
const apiUrl = import.meta.env.VITE_API_URL
```

### Step 6: อัพเดท tsconfig.json (ถ้าใช้ TypeScript)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Step 7: สร้าง tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### Step 8: อัพเดท package.json

```json
{
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "test": "vitest",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## แก้ไขปัญหาทั่วไป

### Issue 1: SVG imports

```typescript
// CRA (default)
import { ReactComponent as Logo } from './logo.svg'

// Vite - ติดตั้ง plugin
// bun add -D vite-plugin-svgr

import Logo from './logo.svg?react'
```

vite.config.ts:
```typescript
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()]
})
```

### Issue 2: Absolute imports

```typescript
// CRA (jsconfig.json/tsconfig.json paths)
import Button from 'components/Button'

// Vite - ต้องกำหนด alias
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components'
    }
  }
})
```

### Issue 3: Jest → Vitest

```bash
# ลบ Jest
bun remove @testing-library/jest-dom jest

# ติดตั้ง Vitest
bun add -D vitest @testing-library/react jsdom
```

vitest.config.ts:
```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true
  }
})
```

---

## Verification

```bash
# 1. Dev server
bun run dev

# 2. Build
bun run build

# 3. Preview production
bun run serve

# 4. Test
bun run test
```

---

## Performance Comparison

| Metric | CRA | Vite | Improvement |
|--------|-----|------|-------------|
| Cold Start | ~30s | ~300ms | 100x faster |
| HMR | ~3s | ~50ms | 60x faster |
| Build | ~60s | ~10s | 6x faster |
