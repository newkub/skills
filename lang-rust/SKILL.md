---
name: lang-rust
description: แนวทางการพัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector
---

# lang-rust

## When to Use

- Systems programming (OS, drivers, embedded systems)
- WebAssembly development
- CLI tools และ command-line applications
- Network services และ high-performance servers
- Game development
- Blockchain และ cryptocurrency projects
- โปรเจกต์ที่ต้องการ memory safety และ zero-cost abstractions

## Skills Related

- `lang-c` - C interoperability
- `lang-cpp` - C++ interoperability

## โครงสร้าง Directory

```text
lang-rust/
├── SKILL.md
├── knowledge/
│   ├── guide/
│   │   ├── key-concept.md
│   │   ├── how-it-works.md
│   │   ├── features.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   ├── quick-start.md
│   │   ├── best-practices.md
│   │   ├── integration.md
│   │   ├── architecture.md
│   │   └── troubleshooting.md
│   └── key-concepts/
│       ├── ownership.md
│       ├── borrowing.md
│       └── lifetimes.md
└── references/
    ├── website.md
    ├── sitemap.md
    ├── cli.md
    └── configuration.md
```

## หมวดหมู่ไฟล์

### knowledge/guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลักของ Rust (Ownership, Borrowing, Lifetimes) |
| 2 | how-it-works.md | วิธีการทำงานของ Rust compiler และ borrow checker |
| 3 | features.md | คุณสมบัติหลักของ Rust (Pattern Matching, Traits, Error Handling) |
| 4 | installation.md | วิธีติดตั้ง Rust และ tools ที่เกี่ยวข้อง |
| 5 | configuration.md | การตั้งค่า Cargo.toml และ rustfmt |
| 6 | quick-start.md | เริ่มต้นใช้งาน Rust อย่างรวดเร็ว |
| 7 | best-practices.md | best practices สำหรับ Rust (naming, safety, patterns) |
| 8 | integration.md | การเชื่อมต่อกับ C, WebAssembly และ tools |
| 9 | architecture.md | สถาปัตยกรรมของ Rust projects |
| 10 | troubleshooting.md | การแก้ปัญหาที่พบบ่อยใน Rust |

### knowledge/key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | ownership.md | Ownership system และ move semantics |
| 2 | borrowing.md | Borrowing rules และ references |
| 3 | lifetimes.md | Lifetime annotations และ subtyping |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| 2 | sitemap.md | แผนผังเอกสารและทรัพยากรที่เกี่ยวข้อง |
| 3 | cli.md | Cargo CLI commands และ options |
| 4 | configuration.md | Cargo.toml configuration options |

## Core Features

- **Memory Safety**: Ownership, borrowing, lifetimes
- **Zero-Cost Abstractions**: High-level features without runtime overhead
- **Pattern Matching**: Powerful pattern matching with exhaustiveness checking
- **Traits**: Interface-like system for polymorphism
- **Algebraic Data Types**: Enums with data (like sum types)
- **Concurrency**: Fearless parallelism with ownership model
- **Crate Ecosystem**: Cargo package manager
- **Fearless Refactoring**: Compiler guarantees correctness