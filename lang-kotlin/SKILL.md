# lang-kotlin

## Overview

แนวทางการพัฒนาด้วย Kotlin ตาม best practices สำหรับ modern software development ที่เน้น null safety, coroutines และ concise syntax

## Directory Structure

```
lang-kotlin/
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
├── key-concepts/
│   ├── null-safety.md
│   ├── coroutines.md
│   ├── data-classes.md
│   ├── extension-functions.md
│   └── sealed-classes.md
├── principles/
│   ├── idiomatic-kotlin.md
│   └── solid-for-kotlin.md
└── references/
    ├── website.md
    └── cli.md
```

## File Categories

### guide/

| File | Description |
|------|-------------|
| key-concept.md | แนวคิดหลักของ Kotlin (JVM, null safety, coroutines) |
| how-it-works.md | วิธีการทำงานของ Kotlin compiler และ bytecode generation |
| features.md | คุณสมบัติหลักของ Kotlin (data classes, sealed classes, extensions) |
| installation.md | วิธีติดตั้ง Kotlin และ tools ที่เกี่ยวข้อง |
| configuration.md | การตั้งค่า build.gradle.kts และ Kotlin options |
| quick-start.md | เริ่มต้นใช้งาน Kotlin อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ Kotlin (naming, null safety, coroutines) |
| integration.md | การเชื่อมต่อกับ frameworks และ tools |
| architecture.md | สถาปัตยกรรมของ Kotlin projects |

### key-concepts/

| File | Description |
|------|-------------|
| null-safety.md | Null safety, safe calls, Elvis operator, not-null assertion |
| coroutines.md | Coroutines, suspend functions, Flow, channels |
| data-classes.md | Data classes, component functions, copy, equals/hashCode |
| extension-functions.md | Extension functions, extension properties |
| sealed-classes.md | Sealed classes, sealed interfaces, exhaustive when |

### principles/

| File | Description |
|------|-------------|
| idiomatic-kotlin.md | Idiom การเขียน Kotlin ที่ดี (DRY, KISS, expressiveness) |
| solid-for-kotlin.md | SOLID principles ใน Kotlin (SRP, OCP, LSP, ISP, DIP) |

### references/

| File | Description |
|------|-------------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| cli.md | Kotlin CLI tools (kotlinc, kotlin) |

## When to Use

- Android development (primary language)
- Server-side development (Ktor, Spring Boot)
- Multiplatform development (Kotlin Multiplatform)
- Scripting and automation
- Desktop applications (Compose Desktop, TornadoFX)
- โปรเจกต์ที่ต้องการ concise syntax และ null safety

## Core Features

- **Null Safety**: Compile-time null checking
- **Coroutines**: Asynchronous programming made simple
- **Data Classes**: Automatic equals, hashCode, toString, copy
- **Extension Functions**: Extend existing classes without inheritance
- **Sealed Classes**: Restricted class hierarchies
- **Smart Casts**: Automatic type casting
- **Default Arguments**: Function parameters with defaults
- **Coroutines & Flow**: Reactive streams