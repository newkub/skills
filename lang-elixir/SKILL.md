# lang-elixir

## Overview

แนวทางการพัฒนา Elixir ตาม best practices สำหรับ functional programming ที่เน้น concurrency, fault tolerance และ extensibility บน BEAM virtual machine

## Directory Structure

```
lang-elixir/
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
    └── api.md
```

## File Categories

### guide/

| File | Description |
|------|-------------|
| key-concept.md | แนวคิดหลักของ Elixir (Pattern Matching, Recursion, Processes) |
| how-it-works.md | วิธีการทำงานของ BEAM และ OTP |
| features.md | คุณสมบัติหลักของ Elixir (Metaprogramming, Protocols, Structs) |
| installation.md | วิธีติดตั้ง Elixir และ tools ที่เกี่ยวข้อง |
| configuration.md | การตั้งค่า Mix, .exs files และ project config |
| quick-start.md | เริ่มต้นใช้งาน Elixir อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ Elixir (naming, patterns, testing) |
| integration.md | การเชื่อมต่อกับ databases, APIs และ external systems |
| architecture.md | สถาปัตยกรรมของ Elixir projects และ umbrella apps |

### references/

| File | Description |
|------|-------------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| api.md | Elixir standard library และ commonly used modules |

## When to Use

- Web applications (Phoenix framework)
- Distributed systems และ microservices
- Real-time applications (chat, gaming, IoT)
- Data pipelines และ stream processing
- High-concurrency servers
- Embedded systems (Nerves)
- โปรเจกต์ที่ต้องการ fault tolerance และ self-healing

## Core Features

- **Functional Programming**: Immutable data structures, pure functions
- **Pattern Matching**: Powerful matching on data structures
- **Concurrency**: Lightweight processes via BEAM
- **Fault Tolerance**: OTP supervisors, "let it crash" philosophy
- **Metaprogramming**: Macros และ AST manipulation
- **Polymorphism**: Protocols (like interfaces)
- **Data Types**: Tuples, lists, maps, structs, binaries
- **Tooling**: Mix build tool, ExUnit testing