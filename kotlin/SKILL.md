---
name: kotlin
description: Best practices for Kotlin development including language features, coroutines, and multiplatform development
goal: พัฒนา Kotlin applications ตาม best practices
outcome: Kotlin applications ที่มีคุณภาพสูง ปลอดภัย และ maintainable
---

# Kotlin

## When to Use

ใช้ Skill นี้เมื่อต้องการพัฒนา Kotlin applications ที่มีคุณภาพสูง

- เมื่อสร้าง Kotlin application ใหม่และต้องการโครงสร้างที่ถูกต้อง
- เมื่อต้องการใช้ Kotlin language features อย่างเหมาะสม
- เมื่อต้องการ implement coroutines และ asynchronous programming
- เมื่อต้องการพัฒนา multiplatform applications
- เมื่อต้องการ optimize performance และ memory usage

## Quick Start

1. สร้าง Kotlin project ใหม่ด้วย `gradle init --type kotlin-application`
2. ตั้งค่าโครงสร้างโปรเจกต์ตาม [1-kotlin-project-structure.md](./rules/1-kotlin-project-structure.md)
3. ใช้ Kotlin features ตาม [2-kotlin-language-features.md](./rules/2-kotlin-language-features.md)
4. implement coroutines ตาม [3-kotlin-coroutines.md](./rules/3-kotlin-coroutines.md)
5. รัน `./gradlew run` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-kotlin-project-structure.md](./rules/1-kotlin-project-structure.md) | Project Structure | โครงสร้าง Kotlin project ที่ถูกต้อง | `kotlin-` | เมื่อสร้าง project |
| 2 | `HIGH` | [2-kotlin-language-features.md](./rules/2-kotlin-language-features.md) | Language Features | ใช้ Kotlin language features อย่างเหมาะสม | `kotlin-` | เมื่อเขียนโค้ด |
| 3 | `HIGH` | [3-kotlin-coroutines.md](./rules/3-kotlin-coroutines.md) | Coroutines | การใช้ coroutines และ async programming | `kotlin-` | เมื่อใช้ async |
| 4 | `HIGH` | [4-kotlin-multiplatform.md](./rules/4-kotlin-multiplatform.md) | Multiplatform | พัฒนา multiplatform applications | `kotlin-` | เมื่อพัฒนา multiplatform |
| 5 | `HIGH` | [5-kotlin-performance.md](./rules/5-kotlin-performance.md) | Performance | การ optimize performance ของ Kotlin application | `kotlin-` | เมื่อ optimize |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concepts.md](./knowledge/core-concepts.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Kotlin | `kotlin-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Kotlin | `kotlin-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | best practices สำหรับ Kotlin development | `kotlin-` |

## Verification

1. ตรวจสอบว่า Kotlin ติดตั้งและตั้งค่าถูกต้องด้วย `kotlin -version`
2. ทดสอบด้วยการรัน `./gradlew run` และตรวจสอบว่า application ทำงานได้
3. ตรวจสอบว่า coroutines ทำงานได้ถูกต้องและไม่มี memory leaks
4. ตรวจสอบว่า multiplatform build ทำงานได้สำหรับทุก platforms
