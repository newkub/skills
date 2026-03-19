# ทำไมถึงใช้ Vite?

## ปัญหาของเครื่องมือเก่า

### Webpack, Parcel, Rollup

- **Dev server start ช้า** - ต้อง bundle ทั้ง project ก่อน
- **HMR ช้า** - แก้ไขไฟล์นึง reload ทั้งหมด
- **Build time นาน** - bundle ใหม่ทั้งหมดทุกครั้ง

---

## Vite แก้ปัญหาอย่างไร

### 1. Native ESM in Development

```text
Webpack: Bundle → Serve → Update Bundle → Serve
Vite:     Serve directly → HMR (instant)
```

- ไม่ต้อง bundle ตอน dev
- ใช้ native ES modules ของ browser
- Transform on-demand เท่าที่จำเป็น

### 2. esbuild for Pre-bundling

- Pre-bundle dependencies ด้วย Go
- เร็วกว่า JavaScript-based bundler 10-100x

### 3. Rollup for Production

- Production build ใช้ Rollup (optimized)
- Code splitting, tree shaking
- Multi-page support

---

## ข้อดีหลัก

| Feature | คำอธิบาย |
|---------|----------|
| **Instant Server Start** | ไม่ต้องรอ bundle |
| **Lightning Fast HMR** | เปลี่ยนแปลงทันที ไม่ reload หน้า |
| **Optimized Build** | Rollup + esbuild = fast & optimized |
| **Universal** | รองรับทุก framework |
| **TypeScript** | Built-in ไม่ต้องตั้งค่า |

---

## Performance Comparison

| Tool | Dev Start | HMR | Build |
|------|-----------|-----|-------|
| Webpack | 2-5s | 200ms+ | 10-30s |
| Parcel | 3-8s | 150ms+ | 15-40s |
| Vite | <100ms | <50ms | 5-15s |

---

## เมื่อไหร่ควรใช้ Vite?

### ✅ เหมาะสม

- Modern web applications
- Single Page Applications (SPA)
- Multi Page Applications (MPA)
- JavaScript Libraries
- โปรเจกต์ใหม่

### ⚠️ พิจารณา

- ต้องการ features เฉพาะของ Webpack ecosystem
- Legacy browser support (IE11) - ต้องใช้ `@vitejs/plugin-legacy`

---

## Real-world Usage

Vite ใช้โดย:

- Vue 3 (official)
- SvelteKit (official)
- Nuxt 3 (official)
- Astro (official)
- Laravel (official integration)
- และอีกหลาย framework
