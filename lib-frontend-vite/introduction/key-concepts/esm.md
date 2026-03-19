# ES Modules (ESM)

## คืออะไร?

ES Modules (ESM) เป็นมาตรฐาน JavaScript module system ที่ถูกนำเข้ามาใน ECMAScript 2015 (ES6):

```javascript
// Export
export const myFunction = () => {}
export default MyComponent

// Import
import { myFunction } from './module.js'
import MyComponent from './component.vue'
```

---

## ทำไม Vite ถึงใช้ ESM?

### การทำงานของ Bundlers เก่า (Webpack, etc.)

```text
1. อ่าน entry file
2. หา dependencies ทั้งหมด (import statements)
3. แปลง/Bundle ทุกอย่างเป็น few files
4. Serve bundled files

ผล: ต้องรอ bundle ก่อน serve → ช้า
```

### การทำงานของ Vite (ESM)

```text
1. Serve files ผ่าน HTTP
2. Browser request files ผ่าน ESM
3. Transform on-demand เท่าที่ browser ขอ

ผล: ไม่ต้องรอ bundle → เร็วมาก
```

---

## การทำงานใน Development

### 1. Dependencies Pre-bundling

```text
node_modules/lodash-es → node_modules/.vite/deps/lodash-es.js
```

- ทำครั้งเดียวตอน cold start
- ใช้ esbuild (Go) เร็วมาก
- แคชไว้ใช้ครั้งต่อไป

### 2. Source Code Serving

```html
<!-- index.html -->
<script type="module" src="/src/main.ts"></script>
```

```javascript
// Browser requests
GET /src/main.ts
GET /src/App.vue
GET /src/components/Button.vue
```

### 3. On-Demand Transformation

Vite แปลงไฟล์ตาม type:

```text
.ts     → esbuild (fast transpile)
.vue    → @vitejs/plugin-vue
.tsx    → esbuild + framework plugin
.css    → PostCSS (ถ้ามี config)
```

---

## ข้อดีของ ESM Approach

| ข้อดี | คำอธิบาย |
|--------|----------|
| **No Bundle Step** | ไม่ต้องรอ build ตอน dev |
| **Lazy Compilation** | แปลงเฉพาะไฟล์ที่ถูก request |
| **Persistent Cache** | Dependencies แคชไว้แล้ว |
| **Native Browser** | ใช้ browser's native module loader |

---

## ข้อจำกัดของ ESM

### Browser Support

รองรับทุก modern browser:

| Browser | Version |
|---------|---------|
| Chrome | 61+ |
| Firefox | 60+ |
| Safari | 10.1+ |
| Edge | 16+ |

### Production Build

Development ใช้ ESM แต่ Production ต้อง bundle เพื่อ:

1. **Network Requests** - ลดจำนวน HTTP requests
2. **Tree Shaking** - ลบ unused code
3. **Minification** - ลด file size
4. **Code Splitting** - โหลดแบบ async

Vite ใช้ Rollup สำหรับ production build

---

## Bare Module Imports

ESM ใน browser ไม่รองรับ bare imports:

```javascript
// ❌ ทำงานไม่ได้ใน browser
import { ref } from 'vue'

// ✅ Vite จัดการให้
// Rewrite เป็น:
import { ref } from '/node_modules/.vite/deps/vue.js'
```

---

## Hot Module Replacement (HMR)

ESM ทำให้ HMR ทำงานได้:

```javascript
// Browser loads module
import App from './App.vue'

// File changed → Vite pushes update
// Browser replaces module (ไม่ reload)
```

```text
Webpack HMR: Full reload หรือ complex HMR runtime
Vite HMR:    Native ESM replacement (instant)
```
