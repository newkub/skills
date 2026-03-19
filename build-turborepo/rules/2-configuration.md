# Configuration

## Description

ตั้งค่า `turbo.json` สำหรับจัดการ pipeline และ caching

## Examples

ตั้งค่า pipeline พื้นฐาน:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": []
    }
  }
}
```

ตั้งค่า cache:

```json
{
  "pipeline": {
    "build": {
      "cache": true,
      "outputs": ["dist/**"]
    }
  }
}
```

## Anti-Patterns

❌ ไม่ระบุ outputs สำหรับ build tasks
✅ ระบุ outputs เพื่อให้ caching ทำงานได้

❌ ระบุ outputs สำหรับ test tasks
✅ ไม่ระบุ outputs สำหรับ test tasks

## Verification

1. ตรวจสอบว่า `turbo.json` มี pipeline ที่ถูกต้อง
2. ทดสอบรัน `turbo build` และตรวจสอบ caching
3. ตรวจสอบว่า dependsOn ทำงานถูกต้อง
