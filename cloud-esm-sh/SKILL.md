# esm.sh

esm.sh เป็น CDN สำหรับ ES Modules ที่ให้บริการโหลด npm packages ผ่าน ESM format โดยตรงบน browser รองรับ tree-shaking, การ bundle และ optimize อัตโนมัติ

## Directory Structure

```text
cloud-esm-sh/
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   └── integration.md
├── references/
│   ├── website.md
│   └── api.md
└── SKILL.md
```

## File Categories

| Folder | Description |
|--------|-------------|
| **guide/** | คู่มือการใช้งานและ best practices |
| **references/** | เอกสารอ้างอิง API และ configuration |

## คุณสมบัติหลัก

- **Native ESM**: รองรับ ES Modules โดยตรง
- **Tree Shaking**: ลบ code ที่ไม่ได้ใช้อัตโนมัติ
- **Auto Bundle**: Bundle และ optimize อัตโนมัติ
- **TypeScript Support**: รองรับ TypeScript types
- **Deno Compatible**: ทำงานได้กับ Deno
- **Zero Config**: ใช้งานได้ทันทีโดยไม่ต้องตั้งค่า
- **Version Pinning**: รองรับ semver versioning
- **Hot Module Replacement**: Development experience ที่ดี

## เมื่อใดควรใช้

- ต้องการใช้ ES Modules บน browser โดยไม่ต้อง bundler
- ต้องการ tree-shaking เพื่อลด bundle size
- ต้องการ import จาก npm โดยตรง
- ต้องการ TypeScript support
- ต้องการโหลด modules แบบ lazy loading

## ลิงก์อ้างอิง

- [หน้าเว็บหลัก](https://esm.sh)
- [เอกสาร](https://esm.sh/docs)
- [Package Browser](https://esm.sh/package)
- [Status](https://esm.sh/status)