---
name: lang-rust
description: แนวทางการพัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector
---

# lang-rust

## When to use

- Systems programming (OS, drivers, embedded systems)
- WebAssembly development
- CLI tools และ command-line applications
- Network services และ high-performance servers
- Game development
- Blockchain และ cryptocurrency projects
- โปรเจกต์ที่ต้องการ memory safety และ zero-cost abstractions

## Skills Related

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Programming Language Skills

```
lang-rust/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญของภาษา
├── references/                   # เอกสารอ้างอิง
└── workflows/                    # Workflows สำหรับ automation
```

## หมวดหมู่ไฟล์

### guide/

| File | Description |
|------|-------------|
| installation.md | วิธีติดตั้ง Rust และ tools ที่เกี่ยวข้อง |
| key-concept.md | แนวคิดหลักของ Rust (Ownership, Borrowing, Lifetimes) |
| how-it-works.md | วิธีการทำงานของ Rust compiler และ borrow checker |
| features.md | คุณสมบัติหลักของ Rust (Pattern Matching, Traits, Error Handling) |
| configuration.md | การตั้งค่า Cargo.toml และ rustfmt |
| quick-start.md | เริ่มต้นใช้งาน Rust อย่างรวดเร็ว |
| best-practices.md | best practices สำหรับ Rust (naming, safety, patterns) |
| integration.md | การเชื่อมต่อกับ C, WebAssembly และ tools |
| architecture.md | สถาปัตยกรรมของ Rust projects |
| troubleshooting.md | การแก้ปัญหาที่พบบ่อยใน Rust |

### key-concepts/

| File | Description |
|------|-------------|
| ownership.md | Ownership system และ move semantics |
| borrowing.md | Borrowing rules และ references |
| lifetimes.md | Lifetime annotations และ subtyping |

### references/

| File | Description |
|------|-------------|
| website.md | Official Rust website และ documentation |
| sitemap.md | Documentation sitemap และ navigation |
| api.md | Rust API reference และ standard library |
| cli.md | Cargo commands และ tools |
| configuration.md | Cargo.toml configuration options |

### workflows/

| File | Description |
|------|-------------|
| setup-rust-project.md | สร้าง Rust project ใหม่ด้วย Cargo |
| use-rust-features.md | ใช้ Rust features อย่างถูกต้อง

## Core Features

- **Memory Safety**: Ownership, borrowing, lifetimes
- **Zero-Cost Abstractions**: High-level features without runtime overhead
- **Pattern Matching**: Powerful pattern matching with exhaustiveness checking
- **Traits**: Interface-like system for polymorphism
- **Algebraic Data Types**: Enums with data (like sum types)
- **Concurrency**: Fearless parallelism with ownership model
- **Crate Ecosystem**: Cargo package manager
- **Fearless Refactoring**: Compiler guarantees correctness
