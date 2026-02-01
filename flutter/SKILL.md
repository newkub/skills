---
name: flutter
description: Best practices for Flutter development including architecture, widgets, and performance optimization
goal: พัฒนา Flutter applications ตาม best practices
outcome: Flutter applications ที่มีคุณภาพสูง ประสิทธิภาพดี และ maintainable
---

# Flutter

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา Flutter applications ที่มีคุณภาพสูง

- เมื่อสร้าง Flutter application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการจัดการ widgets อย่างมีประสิทธิภาพ
- เมื่อต้องการ optimize performance ของ Flutter application
- เมื่อต้องการจัดการ state และ data flow อย่างเหมาะสม
- เมื่อต้องการตั้งค่า testing และ development environment

## Quick Start

1. สร้าง Flutter project ใหม่ด้วย `flutter create my_app`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-flutter-project-structure.md](./rules/1-flutter-project-structure.md)
3. จัดการ widgets ตาม [2-flutter-widgets.md](./rules/2-flutter-widgets.md)
4. ตั้งค่า state management ตาม [3-flutter-state-management.md](./rules/3-flutter-state-management.md)
5. รัน `flutter run` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-flutter-project-structure.md](./rules/1-flutter-project-structure.md) | Project Structure | โครงสร้าง Flutter project ที่ถูกต้อง | `flutter-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-flutter-widgets.md](./rules/2-flutter-widgets.md) | Widgets | การจัดการ Flutter widgets อย่างมีประสิทธิภาพ | `flutter-` | เมื่อสร้าง widgets |
| 3 | `HIGH` | [3-flutter-state-management.md](./rules/3-flutter-state-management.md) | State Management | การจัดการ state และ data flow | `flutter-` | เมื่อจัดการ state |
| 4 | `HIGH` | [4-flutter-performance.md](./rules/4-flutter-performance.md) | Performance | การ optimize performance ของ Flutter application | `flutter-` | เมื่อ optimize |
| 5 | `HIGH` | [5-flutter-testing.md](./rules/5-flutter-testing.md) | Testing | การตั้งค่าและเขียน tests สำหรับ Flutter | `flutter-` | เมื่อทดสอบ |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Flutter | `flutter-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Flutter | `flutter-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ Flutter development | `flutter-` |

## Verification

1. ตรวจสอบว่า Flutter ติดตั้งและตั้งค่าถูกต้องด้วย `flutter doctor`
2. ทดสอบด้วยการรัน `flutter run` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า widgets แสดงผลได้ถูกต้องบนหลาย platforms
4. ตรวจสอบว่า tests ทำงานได้ด้วย `flutter test`
