# Project Structure

## Description
กำหนดโครงสร้างโปรเจกต์ Vite ที่ถูกต้องและเป็นมาตรฐานเพื่อการบำรุงรักษาที่ง่ายและการพัฒนาที่มีประสิทธิภาพ

## Examples

### Standard Project Structure
```
project/
├── src/
│   ├── assets/          # Static files
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout components
│   ├── pages/           # Page components
│   ├── composables/     # Composable functions
│   ├── utils/           # Utility functions
│   └── main.js          # Entry point
├── public/              # Public assets
├── tests/               # Test files
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

### Good Examples
✅ **Component organization**: `src/components/Button.vue` - component อยู่ใน folder ที่ถูกต้อง
✅ **Shared logic**: `src/composables/useAuth.js` - shared logic อยู่ใน composables
✅ **Utility functions**: `src/utils/format.js` - utility functions อยู่ใน utils

### Bad Examples
❌ **Wrong location**: `components/Button.vue` - อยู่ผิด folder ควรอยู่ใน src/
❌ **Misplaced logic**: `src/auth.js` - ควรอยู่ใน composables/ ไม่ใช่ src/
❌ **Root files**: `utils.js` - ควรอยู่ใน src/ ไม่ใช่ root

## Anti-patterns

❌ **Root files without folders**: วางไฟล์ตรง root โดยไม่มีการจัดกลุ่ม
✅ **Organized structure**: ใช้ folder structure ตามมาตรฐาน

❌ **Mixed concerns**: ผสม logic หลายประเภทในไฟล์เดียว
✅ **Single responsibility**: แยกไฟล์ตามหน้าที่และความรับผิดชอบ

❌ **Unclear naming**: ใช้ชื่อไฟล์ที่ไม่บอกหน้าที่
✅ **Descriptive naming**: ใช้ชื่อที่บอกหน้าที่ชัดเจน

❌ **Deep nesting**: สร้าง folder ลึกเกิน 3 levels
✅ **Shallow structure**: จำกัดความลึกไม่เกิน 3 levels

## Verification

1. ตรวจสอบว่าโครงสร้างตรงตามมาตรฐานที่กำหนด
2. รัน `tree` หรือ `eza --tree` เพื่อดูโครงสร้าง folder
3. ตรวจสอบว่าไม่มีไฟล์ที่วางผิดที่ใน root directory
4. ยืนยันว่าแต่ละ folder มีหน้าที่ที่ชัดเจน
5. ตรวจสอบว่าไม่มี folder ที่ลึกเกิน 3 levels
