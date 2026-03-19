# Core Concepts

## Concepts

**Pipeline**
Pipeline คือการกำหนดลำดับการทำงานของ tasks ใน monorepo แต่ละ task มี dependencies และ outputs ที่กำหนดไว้

**Caching**
Caching คือการเก็บผลลัพธ์จาก tasks ที่รันไปแล้ว เพื่อใช้ใหม่ในครั้งถัดไป ลดเวลา build และ test

**Dependencies**
Dependencies คือการกำหนดว่า task ไหนต้องรันก่อน task ไหน ใช้ `^` สำหรับ dependencies ใน packages อื่น

**Outputs**
Outputs คือไฟล์ที่ task สร้างขึ้น เช่น `dist/**`, `.next/**` ใช้สำหรับ caching

## Best Practices

1. ระบุ outputs สำหรับ build tasks เสมอ
2. ใช้ dependsOn เพื่อกำหนดลำดับ tasks
3. ใช้ `--filter` เพื่อรันเฉพาะที่เปลี่ยนแปลง

## Examples

ตัวอย่าง pipeline พื้นฐาน:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": []
    }
  }
}
```

## Verification

1. ตรวจสอบว่าเข้าใจ concepts ของ Turborepo
2. ทดสอบสร้าง pipeline พื้นฐานตามตัวอย่าง
3. ตรวจสอบว่าสามารถอธิบายการทำงานของ caching ได้
