---
name: kotlin
description: พัฒนาแอปพลิเคชันด้วยภาษา Kotlin ตาม best practices
goal: ให้นักพัฒนาสามารถเขียนโค้ด Kotlin ที่มีคุณภาพและปลอดภัย
outcome: เข้าใจหลักการ Kotlin และใช้งานได้อย่างมีประสิทธิภาพ
---

# Kotlin Development

## When to Use

- พัฒนา Android applications
- สร้าง backend services ด้วย Spring Boot
- เขียน multiplatform applications
- พัฒนา CLI tools หรือ utilities

## Quick Start

1. ติดตั้ง Kotlin compiler ผ่าน SDKMAN
2. สร้างโปรเจกต์ใหม่ด้วย `kotlin new project`
3. เขียนโค้ด Kotlin ในไฟล์ `.kt`
4. คอมไพล์ด้วย `kotlinc file.kt -include-runtime -d file.jar`
5. รันโปรแกรมด้วย `java -jar file.jar`

## Rules

- [1-setup.md](rules/1-setup.md) - การติดตั้งและตั้งค่าสภาพแวดล้อม
- [2-configuration.md](rules/2-configuration.md) - การกำหนดค่าโปรเจกต์
- [3-usage.md](rules/3-usage.md) - การใช้งาน Kotlin features

## Knowledge

- [core-concept.md](knowledge/core-concept.md) - แนวคิดพื้นฐานของ Kotlin
- [all-features.md](knowledge/all-features.md) - ฟีเจอร์ทั้งหมดของ Kotlin
- [best-practices/](knowledge/best-practices/) - แนวทางการพัฒนาที่ดีที่สุด

## Verification

1. ตรวจสอบว่ามี folder structure ครบถ้วน
2. ตรวจสอบว่าลิงก์ทั้งหมดใช้งานได้
3. ทดสอบ Quick Start ว่าทำได้จริง
4. ตรวจสอบว่าใช้ภาษาอังกฤษใน headings
5. ตรวจสอบว่าใช้ภาษาไทยใน content
