---
name: framework-flutter
description: แนวทางการพัฒนาแอปพลิเคชันด้วย Flutter SDK ตาม best practices สำหรับ cross-platform development (mobile, web, desktop)
---

# framework-flutter

## When to use

- เมื่อต้องการสร้าง cross-platform applications (mobile, web, desktop)
- เมื่อต้องการ performance สูงและ native-like experience
- เมื่อต้องการ single codebase สำหรับหลาย platforms
- เมื่อต้องการ rich UI และ animations

## Skills Related

- `lang-dart` - Dart programming language

## หมวดหมู่ไฟล์

| No | File | Description |
|----|------|-------------|
| 1 | [knowledge/guide/key-concept.md](knowledge/guide/key-concept.md) | แนวคิดพื้นฐานของ Flutter |
| 2 | [knowledge/guide/how-it-works.md](knowledge/guide/how-it-works.md) | หลักการทำงานและ architecture |
| 3 | [knowledge/guide/features.md](knowledge/guide/features.md) | ฟีเจอร์หลักทั้งหมด |
| 4 | [knowledge/guide/installation.md](knowledge/guide/installation.md) | การติดตั้ง Flutter SDK |
| 5 | [knowledge/guide/configuration.md](knowledge/guide/configuration.md) | การตั้งค่า project |
| 6 | [knowledge/guide/quick-start.md](knowledge/guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| 7 | [knowledge/guide/best-practices.md](knowledge/guide/best-practices.md) | แนวทางปฏิบัติที่ดีที่สุด |
| 8 | [knowledge/guide/integration.md](knowledge/guide/integration.md) | การรวมกับ tools อื่นๆ |
| 9 | [knowledge/guide/architecture.md](knowledge/guide/architecture.md) | Flutter architecture patterns |
| 10 | [references/website.md](references/website.md) | เว็บไซต์และแหล่งข้อมูลที่เป็นประโยชน์ |
| 11 | [references/cli.md](references/cli.md) | Flutter CLI commands |
| 12 | [references/configuration.md](references/configuration.md) | ตัวเลือกการตั้งค่าทั้งหมด |

## Quick Reference

```bash
# ตรวจสอบเวอร์ชัน
flutter --version

# สร้างโปรเจกต์ใหม่
flutter create my_app

# Run โปรเจกต์
flutter run

# Build APK
flutter build apk --release

# Build iOS
flutter build ios --release
```