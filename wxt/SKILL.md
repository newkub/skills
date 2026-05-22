# WXT

WXT เป็น framework สำหรับสร้าง web extensions ที่รองรับหลาย browser (Chrome, Firefox, Edge, Safari) และทั้ง MV2 และ MV3 มี TypeScript และ auto-imports ให้โดย default

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน WXT |
| **Guide** | guide/entrypoints.md | การใช้ entrypoints |
| **Guide** | guide/content-scripts.md | การใช้ content scripts |
| **Guide** | guide/background.md | การใช้ background scripts |
| **Guide** | guide/auto-imports.md | การใช้ auto-imports |
| **Reference** | reference/config.md | Config reference |
| **Reference** | reference/manifest.md | Manifest options |
| **Reference** | reference/cli.md | CLI commands |

## คุณสมบัติหลัก

- **Multi-browser Support**: รองรับ Chrome, Firefox, Edge, Safari
- **MV2 & MV3**: สร้าง extensions สำหรับทั้ง Manifest V2 และ V3
- **Fast HMR**: Hot Module Replacement ที่รวดเร็ว
- **File-based Entrypoints**: Manifest ถูกสร้างจากไฟลในโปรเจกต์
- **TypeScript**: รองรับ TypeScript โดย default
- **Auto-imports**: Nuxt-like auto-imports
- **Framework Agnostic**: รองรับ Vue, React, Svelte, Solid, etc.

## การใช้งาน

ใช้ WXT เมื่อ:
- ต้องการสร้าง web extensions
- ต้องการ cross-browser support
- ต้องการ TypeScript support
- ต้องการ fast HMR
- ต้องการ auto-imports
- ต้องการ automated publishing

## ตัวอย่างเริ่มต้น

```bash
# Create project
bunx wxt@latest init
cd my-extension
bun install
bun run dev
```

```typescript
// entrypoints/background.ts
export default defineBackground(() => {
  console.log('Background script loaded')
})
```
