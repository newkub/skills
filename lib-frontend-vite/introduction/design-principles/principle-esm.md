---
title: Design Principle - Native ESM
description: หลักการออกแบบที่ใช้ Native ES Modules เป็น core architecture
---

# Design Principle: Native ESM

## หลักการพื้นฐาน

Vite ถูกออกแบบมาบนพื้นฐานของ **Native ES Modules (ESM)** ซึ่งเป็นมาตรฐาน JavaScript ที่ modern browsers รองรับโดยตรง

### ทำไมถึงเลือก ESM

1. **Browser Native Support** - ไม่ต้องแปลงโค้ดให้ซับซ้อน
2. **Static Analysis** - รู้ dependencies ก่อน execute
3. **Tree Shaking** - เอาเฉพาะ code ที่ใช้จริง
4. **Dynamic Imports** - Load code เมื่อจำเป็น
5. **Standard** - ใช้ได้ทุกที่ในระยะยาว

---

## Dev Mode: Unbundled ESM

### การทำงาน

```
传统 Bundler (Webpack/Parcel):
[所有文件] → [Bundle 全部] → [Serve] → 修改 → [重新 Bundle 全部]

Vite (Native ESM):
[文件1] ──┐
[文件2] ──┼──→ [Serve 直接] → 修改 → [更新เฉพาะไฟล์]
[文件3] ──┘
```

### ข้อดี

- **No Bundle Step** - ไม่ต้องรอ bundle ตอน dev
- **On-Demand** - Transform เฉพาะไฟล์ที่ browser ขอ
- **Efficient HMR** - Update เฉพาะ module ที่เปลี่ยน
- **Persistent Cache** - Browser cache modules ได้

---

## Production: Bundled with Rollup

### ทำไม Production ต้อง Bundle

| Dev | Production |
|-----|------------|
| Native ESM | Bundled + Optimized |
| Fast iteration | Best performance |
| Many HTTP requests | Fewer requests |
| No optimization | Minified + Tree-shaken |

### Rollup ทำอะไร

1. **Code Splitting** - แบ่ง code เป็น chunks
2. **Tree Shaking** - ลบ unused code
3. **Minification** - ลด file size
4. **Module Merging** - รวม modules

---

## ESM vs CommonJS

### เปรียบเทียบ

| Feature | ESM | CommonJS |
|---------|-----|----------|
| Syntax | `import/export` | `require/module.exports` |
| Static | ใช่ | ไม่ |
| Async | ใช่ | ไม่ |
| Tree-shaking | ได้ | ไม่ได้ |
| Browser | Native | ไม่รองรับ |

### Interoperability

Vite จัดการ interoperability ให้:

```typescript
// Vite แปลง CJS → ESM โดยอัตโนมัติ
import lodash from 'lodash' // CJS package ทำงานได้
```

```typescript
// optimizeDeps pre-bundle CJS dependencies
export default defineConfig({
  optimizeDeps: {
    include: ['lodash', 'axios'] // CJS libraries
  }
})
```

---

## Module Graph

### คืออะไร

Module graph คือ data structure ที่เก็บความสัมพันธ์ระหว่าง modules

```
main.ts
├── App.vue
│   ├── Header.vue
│   └── Button.vue
├── router.ts
│   └── Home.vue
└── store.ts
```

### ประโยชน์

- รู้ว่าไฟล์ไหน depend กัน
- HMR รู้ว่าต้อง update อะไรบ้าง
- ตรวจจับ circular dependencies

---

## Best Practices

### ใช้ ESM อย่างไร

```javascript
// ✅ Named exports (tree-shakeable)
export { helper, utils }

// ✅ Default export
export default Component

// ✅ Dynamic imports (code splitting)
const Admin = () => import('./Admin.vue')

// ❌ หลีกเลี่ยง mixed exports
export default Component
export { helper } // ทำให้ confusing
```

### Package Configuration

```json
{
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

## Performance Benefits

### Dev Server

| Metric | Bundler | Vite ESM |
|--------|---------|----------|
| Cold Start | 2-5s | <100ms |
| HMR | 1-3s | <50ms |
| Memory | High | Low |

### Browser Loading

- **Parallel Loading** - Browser load modules concurrently
- **Incremental** - โหลดเฉพาะส่วนที่จำเป็น
- **Caching** - Cache modules ได้ดี

---

## Future Proof

### ESM เป็น Standard

- ECMAScript official spec
- All modern browsers support
- Node.js native support
- Deno ใช้ ESM เป็น default

### Migration Path

```
现在 → 未来
CJS → ESM
 Bundler → Native ESM (dev) + Bundled (prod)
```
