# Native ESM

Native ESM (ES Modules) เป็นหัวใจหลักที่ทำให้ Vite เร็ว

---

## ปัญหาของ Bundle-based Dev Servers

```text
Webpack/Parcel:
1. อ่าน entry file
2. ตามหา dependencies (import statements)
3. Bundle ทุกอย่างเป็นไฟล์ใหญ่
4. Serve bundle
5. แก้ไขไฟล์นึง → bundle ใหม่ทั้งหมด

Result: ช้า, รอ bundle ทุกครั้ง
```

---

## วิธีแก้ของ Vite: Native ESM

```text
Vite:
1. Serve files ผ่าน HTTP
2. Browser ใช้ native ES modules โหลด
3. Transform on-demand เฉพาะที่จำเป็น

Result: ไม่ต้องรอ bundle → เร็วมาก
```

---

## การทำงาน

### Development

```html
<!-- Browser request files -->
<script type="module" src="/src/main.ts"></script>
```

```javascript
// Browser requests
GET /src/main.ts     → Vite transform → Browser
GET /src/App.vue     → Vite transform → Browser
GET /src/utils.ts    → Vite transform → Browser
```

### Dependencies

```text
node_modules/lodash-es     → esbuild pre-bundle
node_modules/.vite/deps/   → cached
```

ทำครั้งเดียวตอน cold start แล้ว cache ไว้

---

## Hot Module Replacement

```javascript
// Browser loads module
import App from './App.vue'

// File changed → Vite sends update
// Browser replaces module (instant)
```

ไม่ต้อง reload หน้า ไม่สูญเสีย state

---

## Production

Development ใช้ ESM แต่ Production ต้อง bundle:

| ปัญหา | แก้ไข |
|-------|--------|
| HTTP requests มาก | Bundle → ลด requests |
| No tree shaking | Rollup → tree shake |
| No minification | Rollup → minify |

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 61+ |
| Firefox | 60+ |
| Safari | 10.1+ |
| Edge | 16+ |

รองรับทุก modern browser

---

## Bare Module Imports

ESM ใน browser ไม่รองรับ:

```javascript
// ❌ ไม่ทำงานใน browser
import { ref } from 'vue'

// ✅ Vite rewrite ให้
import { ref } from '/node_modules/.vite/deps/vue.js'
```
