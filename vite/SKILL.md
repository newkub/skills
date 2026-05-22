# Vite

Vite เป็น next-generation frontend build tool ที่ใช้ native ES modules สำหรับ instant server start และ HMR (Hot Module Replacement) ที่รวดเร็ว

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน Vite |
| **Guide** | guide/configuration.md | การตั้งค่า vite.config |
| **Guide** | guide/plugins.md | การใช้ plugins |
| **Guide** | guide/hmr.md | Hot Module Replacement |
| **Guide** | guide/build.md | Production build |
| **Reference** | reference/cli.md | CLI commands |
| **Reference** | reference/config-api.md | Config API reference |
| **Reference** | reference/plugins-api.md | Plugin API reference |

## คุณสมบัติหลัก

- **Instant Server Start**: เริ่ม dev server ทันทีไม่ต้อง bundle
- **Lightning Fast HMR**: Hot Module Replacement ที่รวดเร็ว
- **Rich Features**: TypeScript, JSX, CSS, PostCSS, etc.
- **Optimized Build**: Rollup-based production build
- **Plugin System**: Extensible plugin architecture
- **Framework Agnostic**: รองรับ Vue, React, Svelte, Solid, etc.

## การใช้งาน

ใช้ Vite เมื่อ:
- ต้องการ dev server ที่รวดเร็ว
- ต้องการ HMR ที่ทำงานดี
- ต้องการ modern build tool
- ต้องการ TypeScript support
- ต้องการ plugin ecosystem ที่ดี

## ตัวอย่างเริ่มต้น

```bash
# Create project
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
```
