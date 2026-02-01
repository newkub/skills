# All Features

## Concepts

**Pipeline Configuration**
กำหนด tasks, dependencies, outputs และ cache settings ใน `turbo.json`

**Remote Caching**
เก็บ cache บน remote storage เช่น Vercel, AWS S3 หรือ local filesystem

**Filtering**
ใช้ `--filter` เพื่อรัน tasks เฉพาะบาง packages หรือที่เปลี่ยนแปลง

**Task Execution**
รัน tasks แบบ parallel หรือ sequential ตาม dependencies

**Output Hashing**
ใช้ hash ของ inputs เพื่อตรวจสอบ cache validity

## Best Practices

1. ใช้ remote caching สำหรับ teams
2. ใช้ `--filter=[HEAD~1]` สำหรับ CI/CD
3. ตั้งค่า outputs ให้ถูกต้องเพื่อ caching ทำงาน

## Examples

ตั้งค่า remote cache:
```json
{
  "remoteCache": {
    "url": "https://your-cache-url.com"
  }
}
```

ใช้ filter:
```bash
turbo build --filter=[HEAD~1]
turbo test --filter=packages/ui
```

## Verification

1. ตรวจสอบว่าเข้าใจ features ทั้งหมดของ Turborepo
2. ทดสอบตั้งค่า remote cache ตามตัวอย่าง
3. ตรวจสอบว่าสามารถใช้ `--filter` ได้อย่างถูกต้อง
