# Setup Turborepo

## Description
ติดตั้งและตั้งค่า Turborepo ใน monorepo เบื้องต้น

## Examples

ติดตั้ง Turborepo ใน root directory:
```bash
npm install turbo -D
```

สร้าง `turbo.json` ใน root directory:
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

## Anti-Patterns

❌ ติดตั้ง Turborepo ในแต่ละ package
✅ ติดตั้ง Turborepo เฉพาะใน root directory

❌ ไม่ระบุ outputs ใน pipeline
✅ ระบุ outputs เพื่อให้ caching ทำงานได้

## Verification

1. ตรวจสอบว่า `turbo` ติดตั้งสำเร็จด้วย `npx turbo --version`
2. ตรวจสอบว่า `turbo.json` มีอยู่ใน root directory
3. ทดสอบรัน `turbo build` และตรวจสอบว่าไม่มี error
