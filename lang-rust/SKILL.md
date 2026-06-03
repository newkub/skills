# lang-rust

## Overview

แนวทางการพัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector

## Directory Structure

```
lang-rust/
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
│   ├── ownership.md
│   ├── borrowing.md
│   └── lifetimes.md
└── references/
    └── website.md
```

## File Categories

### guide/

| File | Description |
|------|-------------|
| key-concept.md | แนวคิดหลักของ Rust (Ownership, Borrowing, Lifetimes) |
| how-it-works.md | วิธีการทำงานของ Rust compiler และ borrow checker |
| features.md | คุณสมบัติหลักของ Rust (Pattern Matching, Traits, Error Handling) |
| installation.md | วิธีติดตั้ง Rust และ tools ที่เกี่ยวข้อง |
| configuration.md | การตั้งค่า Cargo.toml และ rustfmt |
| quick-start.md | เริ่มต้นใช้งาน Rust อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ Rust (naming, safety, patterns) |
| integration.md | การเชื่อมต่อกับ C, WebAssembly และ tools |
| architecture.md | สถาปัตยกรรมของ Rust projects |

### key-concepts/

| File | Description |
|------|-------------|
| ownership.md | Ownership system และ move semantics |
| borrowing.md | Borrowing rules และ references |
| lifetimes.md | Lifetime annotations และ subtyping |

### references/

| File | Description |
|------|-------------|
| website.md | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |

## When to Use

- Systems programming (OS, drivers, embedded systems)
- WebAssembly development
- CLI tools และ command-line applications
- Network services และ high-performance servers
- Game development
- Blockchain และ cryptocurrency projects
- โปรเจกต์ที่ต้องการ memory safety และ zero-cost abstractions

## Core Features

- **Memory Safety**: Ownership, borrowing, lifetimes
- **Zero-Cost Abstractions**: High-level features without runtime overhead
- **Pattern Matching**: Powerful pattern matching with exhaustiveness checking
- **Traits**: Interface-like system for polymorphism
- **Algebraic Data Types**: Enums with data (like sum types)
- **Concurrency**: Fearless parallelism with ownership model
- **Crate Ecosystem**: Cargo package manager
- **Fearless Refactoring**: Compiler guarantees correctness