# JSPM

JSPM เป็น ES Module Package Manager และ CDN ที่ใช้มาตรฐาน native ES modules พร้อม import maps สำหรับการพัฒนาเว็บแบบไม่ต้อง bundle

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/key-concept.md | แนวคิดหลักเกี่ยวกับ import maps และ ESM |
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน JSPM |
| **Guide** | guide/installation.md | การติดตั้งและ initialize project |
| **Guide** | guide/configuration.md | การตั้งค่า package.json และ importmap.js |
| **Guide** | guide/all-features.md | คุณสมบัติทั้งหมดของ JSPM |
| **Guide** | guide/best-practices.md | แนวทางปฏิบัติที่ดีที่สุด |
| **Guide** | guide/troubleshooting.md | การแก้ปัญหาที่พบบ่อย |
| **Reference** | reference/official.md | Official resources และ links |
| **Changelog** | changelog/v4.0.0.md | JSPM 4.0 release notes |

## คุณสมบัติหลัก

- **Standards-Based**: ใช้ native ES modules โดยไม่ต้อง bundle
- **Import Maps**: จัดการ module resolution ด้วย web standard import maps
- **Zero Config**: เริ่มต้น project ได้ทันทีโดยไม่ต้องตั้งค่าซับซ้อน
- **TypeScript Support**: Type stripping โดยไม่ต้อง compile
- **Hot Reloading**: Development server พร้อม hot module replacement
- **CDN Integration**: โหลด dependencies จาก JSPM.io CDN
- **Production Build**: Build สำหรับ production ด้วย jspm build

## การใช้งาน

ใช้ JSPM เมื่อ:
- ต้องการพัฒนาเว็บด้วย native ESM โดยไม่ต้อง bundle
- ต้องการใช้ CDN สำหรับโหลด dependencies
- ต้องการ import maps สำหรับ bare module specifiers
- ต้องการ TypeScript โดยไม่ต้อง compile step
- ต้องการ hot reloading ที่รวดเร็วใน development
- ต้องการ AI sandbox หรือ static HTML deployment

## CLI Commands

```bash
# Install globally
npm install -g jspm

# Initialize new project
jspm init my-project

# Start development server
jspm serve

# Static server (no hot reload)
jspm serve --static

# Install dependencies
jspm install

# Build for production
jspm build
```

## โครงสร้าง Project

my-project/
├── .gitignore
├── index.html           # Main HTML entry
├── importmap.js         # Generated import map (like lockfile)
├── package.json         # Project manifest
├── tsconfig.json        # TypeScript config (when enabled)
└── src/
    └── index.ts         # Main entry point
