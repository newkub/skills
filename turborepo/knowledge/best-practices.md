# Best Practices

## Concepts

**Incremental Builds**
รัน tasks เฉพาะสำหรับ packages ที่เปลี่ยนแปลง ลดเวลา build และ test

**Pipeline Optimization**
ตั้งค่า pipeline ให้มี dependencies และ outputs ที่ถูกต้อง

**Cache Strategy**
ใช้ caching ทั้ง local และ remote เพื่อเร่งความเร็ว

**Dependency Management**
จัดการ dependencies ระหว่าง packages อย่างชัดเจน

## Best Practices

1. ตั้งค่า outputs ให้ถูกต้องสำหรับ build tasks
2. ใช้ `--filter` สำหรับ incremental builds
3. ใช้ remote caching สำหรับ teams
4. กำหนด dependencies ใน pipeline อย่างชัดเจน
5. ไม่ระบุ outputs สำหรับ test tasks

## Examples

ตั้งค่า pipeline ที่ดี:
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
    },
    "lint": {
      "outputs": []
    }
  }
}
```

ใช้ incremental builds:
```bash
turbo build --filter=[HEAD~1]
turbo test --filter=[HEAD~1]
```

## Verification

1. ตรวจสอบว่าเข้าใจ best practices ของ Turborepo
2. ทดสอบตั้งค่า pipeline ตาม best practices
3. ตรวจสอบว่าสามารถใช้ incremental builds ได้
