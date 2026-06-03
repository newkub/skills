# framework-flutter

## Overview

แนวทางการพัฒนาแอปพลิเคชันด้วย Flutter SDK ตาม best practices สำหรับ cross-platform development (mobile, web, desktop)

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดพื้นฐานของ Flutter |
| | [how-it-works.md](guide/how-it-works.md) | หลักการทำงานและ architecture |
| | [features.md](guide/features.md) | ฟีเจอร์หลักทั้งหมด |
| | [installation.md](guide/installation.md) | การติดตั้ง Flutter SDK |
| | [configuration.md](guide/configuration.md) | การตั้งค่า project |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดีที่สุด |
| | [integration.md](guide/integration.md) | การรวมกับ tools อื่นๆ |
| | [architecture.md](guide/architecture.md) | Flutter architecture patterns |
| **references/** | [website.md](references/website.md) | เว็บไซต์และแหล่งข้อมูลที่เป็นประโยชน์ |
| | [cli.md](references/cli.md) | Flutter CLI commands |
| | [configuration.md](references/configuration.md) | ตัวเลือกการตั้งค่าทั้งหมด |

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

## File Structure

```
framework-flutter/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    ├── website.md
    ├── cli.md
    └── configuration.md
```