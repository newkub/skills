# Setup Kotlin Environment

## Description
ติดตั้งและตั้งค่าสภาพแวดล้อมสำหรับการพัฒนา Kotlin

## Examples
```bash
# ติดตั้งผ่าน SDKMAN
curl -s "https://get.sdkman.io" | bash
sdk install kotlin

# ติดตั้งผ่าน Homebrew
brew install kotlin

# ตรวจสอบเวอร์ชัน
kotlin -version
```

## Anti-patterns
- ติดตั้ง Kotlin โดยไม่ตรวจสอบ Java version
- ใช้เวอร์ชันเก่าเกินไปที่ไม่รองรับ features ใหม่
- ไม่ตั้งค่า PATH ให้ถูกต้อง

## Verification
1. ตรวจสอบว่าติดตั้ง Kotlin ได้สำเร็จ
2. ตรวจสอบว่าสามารถรันคำสั่ง kotlin ได้
3. ตรวจสอบว่ามี examples อย่างน้อย 1 ตัวอย่าง
