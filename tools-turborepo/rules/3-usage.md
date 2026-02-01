# Usage

## Description
ใช้ Turborepo สำหรับ build, test และจัดการ monorepo

## Examples

Build ทุก packages:
```bash
turbo build
```

Build เฉพาะ package ที่เปลี่ยนแปลง:
```bash
turbo build --filter=[HEAD~1]
```

Test ทุก packages:
```bash
turbo test
```

รัน script หลาย tasks:
```bash
turbo run build lint test
```

## Anti-Patterns

❌ รันทุก tasks เสมอ
✅ ใช้ `--filter` เพื่อรันเฉพาะที่เปลี่ยนแปลง

❌ ไม่ใช้ caching
✅ ใช้ caching เพื่อเร่ง build

## Verification

1. ทดสอบรัน `turbo build` และตรวจสอบ output
2. ทดสอบรัน `turbo build --filter=[HEAD~1]` และตรวจสอบว่ารันเฉพาะที่เปลี่ยน
3. ตรวจสอบว่า caching ทำงานด้วย `turbo build` ซ้ำ
