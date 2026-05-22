---
title: Key Concepts
description: แนวคิดหลักที่ต้องเข้าใจก่อนใช้งาน Vite
---

# Key Concepts

## Native ESM (ES Modules)

### การทำงานของ ESM

Vite ใช้ Native ES Modules ของ browser โดยตรง:

```html
<script type="module">
  import { createApp } from '/src/main.js'
</script>
```

### ข้อดีของ ESM

- **No bundling needed** - Browser load modules on-demand
- **Tree-shaking** - ใช้เฉพาะ code ที่ใช้จริง
- **Static analysis** - รู้ว่า dependencies อะไรบ้างก่อน execute
- **Standard format** - ใช้ได้ทุก modern browser

### Import Maps

```html
<script type="importmap">
{
  "imports": {
    "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js",
    "lodash": "/node_modules/lodash-es/lodash.js"
  }
}
</script>
```

---

## Dev vs Production

### Development Mode

```text
Request → Vite Dev Server → Transform → Browser
```

- ไม่ต้อง bundle ทั้ง project
- Transform on-demand เท่าที่ browser ขอ
- HMR เปลี่ยนเฉพาะ module ที่แก้ไข

### Production Mode

```text
Source → Rollup/Rolldown → Bundle → Optimized Output
```

- Bundle ด้วย Rollup (Vite 5) หรือ Rolldown (Vite 6+)
- Code splitting, tree shaking
- Minification, optimization

---

## Dependency Pre-bundling

### ทำไมต้อง pre-bundle

Dependencies ส่วนใหญ่เป็น CommonJS หรือ UMD:

```javascript
// CommonJS (Node.js style)
const lodash = require('lodash')

// UMD (Universal Module Definition)
(function (root, factory) { ... })
```

Browser ไม่เข้าใจรูปแบบนี้ ต้องแปลงเป็น ESM ก่อน

### esbuild Pre-bundling

Vite ใช้ esbuild (Go-based) เพื่อ:

1. แปลง CJS/UMD → ESM
2. Bundle dependencies เข้าด้วยกัน
3. ลด HTTP requests

```typescript
export default defineConfig({
  optimizeDeps: {
    include: ['lodash-es', 'axios'],
    exclude: ['already-esm-lib']
  }
})
```

---

## Hot Module Replacement (HMR)

### How HMR Works

```
1. Edit file → Vite detect change
2. Re-transform affected module
3. Send update via WebSocket
4. Browser replace module (no reload)
```

### HMR API

```typescript
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    // Handle update
  })
  
  import.meta.hot.dispose(() => {
    // Cleanup
  })
}
```

---

## Module Graph

### Vite's Module Graph

```
src/main.ts
├── src/App.vue
│   ├── src/components/Header.vue
│   └── src/components/Footer.vue
├── src/router/index.ts
│   └── src/views/Home.vue
└── src/stores/counter.ts
```

- Vite รู้ว่า module ไหน depend กัน
- เมื่อแก้ไขไฟล์ รู้ว่าต้อง update อะไรบ้าง

---

## Build Targets

### Browser Support

```typescript
export default defineConfig({
  build: {
    target: 'esnext',     // Latest features (modern browsers)
    // หรือ
    target: 'es2020',     // Wider support
    // หรือ
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
  }
})
```

### Legacy Support

```bash
# ติดตั้ง legacy plugin
bun add -D @vitejs/plugin-legacy
```

```typescript
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
```

---

## Virtual Modules

### คืออะไร

Modules ที่ไม่มีอยู่จริงใน filesystem แต่ถูก generate โดย plugins:

```typescript
// Virtual module
import manifest from 'virtual:manifest'
import config from 'virtual:config'
```

### Plugin สร้าง Virtual Module

```typescript
const virtualModulePlugin = (): Plugin => ({
  name: 'virtual-module',
  resolveId(id) {
    if (id === 'virtual:config') {
      return '\0' + id
    }
  },
  load(id) {
    if (id === '\0virtual:config') {
      return `export default ${JSON.stringify(config)}`
    }
  }
})
```
