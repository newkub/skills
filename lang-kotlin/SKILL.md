---
name: lang-kotlin
description: แนวทางการพัฒนาด้วย Kotlin ตาม best practices สำหรับ modern software development ที่เน้น null safety, coroutines และ concise syntax
---

# lang-kotlin

## When to Use

- Android development (primary language)
- Server-side development (Ktor, Spring Boot)
- Multiplatform development (Kotlin Multiplatform)
- Scripting and automation
- Desktop applications (Compose Desktop, TornadoFX)
- โปรเจกต์ที่ต้องการ concise syntax และ null safety

## Skills Related

- `lang-java` - Java interoperability
- `lang-javascript` - Kotlin/JS for web

## หมวดหมู่ไฟล์

### knowledge/guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลักของ Kotlin (JVM, null safety, coroutines) |
| 2 | how-it-works.md | วิธีการทำงานของ Kotlin compiler และ bytecode generation |
| 3 | features.md | คุณสมบัติหลักของ Kotlin (data classes, sealed classes, extensions) |
| 4 | installation.md | วิธีติดตั้ง Kotlin และ tools ที่เกี่ยวข้อง |
| 5 | configuration.md | การตั้งค่า build.gradle.kts และ Kotlin options |
| 6 | quick-start.md | เริ่มต้นใช้งาน Kotlin อย่างรวดเร็ว |
| 7 | best-practices.md | best practices สำหรับ Kotlin (naming, null safety, coroutines) |
| 8 | integration.md | การเชื่อมต่อกับ frameworks และ tools |
| 9 | architecture.md | สถาปัตยกรรมของ Kotlin projects |

### knowledge/key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | null-safety.md | Null safety, safe calls, Elvis operator, not-null assertion |
| 2 | coroutines.md | Coroutines, suspend functions, Flow, channels |
| 3 | data-classes.md | Data classes, component functions, copy, equals/hashCode |
| 4 | extension-functions.md | Extension functions, extension properties |
| 5 | sealed-classes.md | Sealed classes, sealed interfaces, exhaustive when |

### knowledge/principles/

| No | File | Description |
|----|------|-------------|
| 1 | idiomatic-kotlin.md | Idiom การเขียน Kotlin ที่ดี (DRY, KISS, expressiveness) |
| 2 | solid-for-kotlin.md | SOLID principles ใน Kotlin (SRP, OCP, LSP, ISP, DIP) |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | cli.md | Kotlin CLI tools (kotlinc, kotlin) |
| 3 | configuration.md | Gradle configuration และ Kotlin compiler options |

## Core Features

- **Null Safety**: Compile-time null checking
- **Coroutines**: Asynchronous programming made simple
- **Data Classes**: Automatic equals, hashCode, toString, copy
- **Extension Functions**: Extend existing classes without inheritance
- **Sealed Classes**: Restricted class hierarchies
- **Smart Casts**: Automatic type casting
- **Default Arguments**: Function parameters with defaults
- **Coroutines & Flow**: Reactive streams