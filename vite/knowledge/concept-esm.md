---
title: Knowledge - ES Modules in Vite
description: ความรู้พื้นฐานเกี่ยวกับ ES Modules และบทบาทใน Vite
---

# ES Modules in Vite

## ES Modules คืออะไร

ES Modules (ESM) คือมาตรฐาน JavaScript สำหรับการ import/export modules ระหว่างไฟล์ ถูก introduce ใน ES2015 (ES6)

### Import Syntax

```javascript
// Named imports
import { foo, bar } from './module.js'

// Default import
import MyModule from './module.js'

// Namespace import
import * as utils from './utils.js'

// Dynamic import
const module = await import('./dynamic-module.js')
```

### Export Syntax

```javascript
// Named exports
export const foo = 'bar'
export function helper() { }

// Default export
export default function main() { }

// Re-exports
export { foo, bar } from './other.js'
```

---

## ความแตกต่างระหว่าง ESM และ CommonJS

| ESM | CommonJS |
|-----|----------|
| Static analysis | Dynamic |
| Tree-shakeable | Not tree-shakeable |
| Top-level await | No top-level await |
| Browser native | Requires bundler |
| Async loading | Synchronous |

### CommonJS

```javascript
// CJS syntax
const module = require('./module')
module.exports = { foo: 'bar' }
```

### ES Modules

```javascript
// ESM syntax
import module from './module.js'
export const foo = 'bar'
```

---

## ESM ใน Browser

### Native Browser Support

```html
<script type="module">
  import { createApp } from '/src/main.js'
  createApp()
</script>

<!-- With import map -->
<script type="importmap">
{
  "imports": {
    "vue": "/node_modules/vue/dist/vue.esm-browser.js"
  }
}
</script>
```

### Module Preloading

```html
<link rel="modulepreload" href="/src/main.js">
<link rel="modulepreload" href="/src/app.js">
```

---

## Vite ใช้ ESM อย่างไร

### Dev Mode - Native ESM

```
Browser → Request /src/main.ts
        → Vite transform on-demand
        → Browser receives ESM
```

Vite ไม่ต้อง bundle ทั้ง project ใน dev mode แต่ serve ไฟล์เป็น ESM โดยตรง

### ข้อดีของ Native ESM

1. **Fast cold start** - ไม่ต้อง bundle ก่อน
2. **On-demand compilation** - compile เฉพาะไฟล์ที่ browser ขอ
3. **Efficient caching** - browser cache modules
4. **Native HMR** - เปลี่ยนแปลงเฉพาะ module ที่แก้ไข

---

## Module Graph

### คืออะไร

Module graph คือ data structure ที่เก็บความสัมพันธ์ระหว่าง modules ทั้งหมดใน project

```
src/main.ts
├── src/App.vue
│   ├── src/components/Header.vue
│   └── src/components/Footer.vue
├── src/router/index.ts
│   └── src/views/Home.vue
└── src/stores/counter.ts
```

### การทำงาน

1. Vite สร้าง module graph ตอน dev server start
2. Track dependencies ระหว่าง modules
3. เมื่อไฟล์เปลี่ยน รู้ว่าไฟล์ไหนได้รับผลกระทบบ้าง
4. ส่ง HMR update เฉพาะส่วนที่จำเป็น

---

## Interoperability

### ESM เรียก CJS

```javascript
// ESM file import CJS
import cjsModule from 'cjs-package'
// หรือ
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const cjs = require('cjs-package')
```

### CJS เรียก ESM

```javascript
// CJS file import ESM
async function loadESM() {
  const esm = await import('esm-package')
  return esm
}
```

### Vite Pre-bundling

Vite pre-bundle CJS dependencies เป็น ESM เพื่อให้ใช้งานได้ใน browser

```typescript
export default defineConfig({
  optimizeDeps: {
    include: ['cjs-library-1', 'cjs-library-2']
  }
})
```

---

## Best Practices

### ใช้ ESM อย่างมีประสิทธิภาพ

```javascript
// ✅ Named exports (tree-shakeable)
export { helper, utils }

// ✅ Dynamic imports สำหรับ code splitting
const HeavyComponent = () => import('./Heavy.vue')

// ❌ Avoid barrel files (index.ts ที่ re-export เยอะ)
// ทำให้ tree shaking ไม่ effective
```

### Package Exports

```json
{
  "name": "my-library",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  }
}
```

---

## Vite ESM Features

### Import Meta

```javascript
// ข้อมูลเกี่ยวกับ current module
console.log(import.meta.url)        // file:///path/to/module.js
console.log(import.meta.env)        // Environment variables
console.log(import.meta.hot)        // HMR API (dev only)
console.log(import.meta.glob)       // Glob imports
```

### Glob Imports

```javascript
// Import หลายไฟล์พร้อมกัน
const modules = import.meta.glob('./components/*.vue')

// Lazy loaded
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}

// Eager import
const modules = import.meta.glob('./components/*.vue', { eager: true })
```
