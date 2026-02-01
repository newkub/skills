---
name: flutter
description: Best practices for Flutter development including architecture, widgets, and performance optimization
goal: พัฒนา Flutter applications ตาม best practices
outcome: Flutter applications ที่มีคุณภาพสูง ประสิทธิภาพดี และ maintainable
---

# Flutter

## When to Execute
- เมื่อสร้าง Flutter application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการจัดการ widgets อย่างมีประสิทธิภาพ
- เมื่อต้องการ optimize performance ของ Flutter application
- เมื่อต้องการจัดการ state และ data flow อย่างเหมาะสม
- เมื่อต้องการตั้งค่า testing และ development environment

## Quick Start
1. สร้าง Flutter project ใหม่ด้วย `flutter create my_app`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [Project Structure](rules/1-setup.md)
3. จัดการ widgets ตาม [Widgets](rules/2-widgets.md)
4. ตั้งค่า state management ตาม [State Management](rules/3-state-management.md)
5. รัน `flutter run` เพื่อเริ่มการพัฒนา

## Execution Table

| Number | File | Condition |
|--------|------|-----------|
| 1 | [Setup](rules/1-setup.md) | เมื่อต้องการตั้งค่า Flutter ใหม่ |
| 2 | [Widgets](rules/2-widgets.md) | เมื่อต้องการจัดการ Flutter widgets |
| 3 | [State Management](rules/3-state-management.md) | เมื่อต้องการจัดการ state |
| 4 | [Performance](rules/4-performance.md) | เมื่อต้องการ optimize performance |
| 5 | [Testing](rules/5-testing.md) | เมื่อต้องการตั้งค่า testing |
| 6 | [Core Concept](knowledge/core-concept.md) | เมื่อต้องการทำความเข้าใจพื้นฐาน |
| 7 | [All Features](knowledge/all-features.md) | เมื่อต้องการดูฟีเจอร์ทั้งหมด |
| 8 | [Best Practices](knowledge/best-practices.md) | เมื่อต้องการทำตาม best practices |
| 9 | [CLI Commands](knowledge/cli.md) | เมื่อต้องการใช้ Flutter CLI |

## Verification

1. ตรวจสอบว่า Flutter ติดตั้งและตั้งค่าถูกต้องด้วย `flutter doctor`
2. ทดสอบด้วยการรัน `flutter run` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า widgets แสดงผลได้ถูกต้องบนหลาย platforms
4. ตรวจสอบว่า tests ทำงานได้ด้วย `flutter test`
