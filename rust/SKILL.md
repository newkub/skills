---
title: Lang Rust
description: แนวทางการพัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector
auto_execution_mode: 3
related_workflows:
  - /follow-rust
  - /follow-clean-architecture
  - /follow-functional-programming
---

## Goal

พัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector

## Scope

ใช้สำหรับการพัฒนา Rust ทุกประเภท เช่น systems programming, WebAssembly development, CLI tools, network services, game development, และ blockchain projects

## โครงสร้าง Directory

```
rust/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   ├── features.md
│   ├── how-it-works.md
│   ├── installation.md
│   ├── integration.md
│   ├── key-concept.md
│   ├── quick-start.md
│   └── troubleshooting.md
├── key-concepts/
│   ├── borrowing.md
│   ├── lifetimes.md
│   └── ownership.md
├── principles/
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   └── website.md
└── workflows/
```

## Execute

### 1. Install Rust Toolchain

ติดตั้ง Rust toolchain ด้วย rustup

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### 2. Configure Cargo

ตั้งค่า Cargo package manager และ workspace

### 3. Create Project

สร้าง project ใหม่ด้วย cargo

```bash
cargo new project-name
cd project-name
```

### 4. Configure Project

ตั้งค่า `Cargo.toml` สำหรับ project

### 5. Install IDE Plugins

ติดตั้ง IDE plugins (rust-analyzer)

### 6. Understand Ownership System

ทำความเข้าใจ ownership system อ่าน `key-concepts/ownership.md`

### 7. Learn Borrowing and Lifetimes

เรียนรู้ borrowing และ lifetimes อ่าน `key-concepts/borrowing.md` และ `key-concepts/lifetimes.md`

### 8. Study Traits and Generics

ศึกษา traits และ generics

### 9. Understand Error Handling

ทำความเข้าใจ error handling ด้วย Result

### 10. Use Ownership System

ใช้ ownership system อย่างถูกต้อง

### 11. Use Borrowing and Lifetimes

ใช้ borrowing และ lifetimes อย่างเหมาะสม

### 12. Use Traits

ใช้ traits สำหรับ polymorphism

### 13. Use Generics

ใช้ generics สำหรับ reusable code

### 14. Use Result

ใช้ Result สำหรับ error handling

### 15. Use Pattern Matching

ใช้ pattern matching อย่างเหมาะสม

### 16. Write Unit Tests

เขียน unit tests ด้วย built-in test framework

### 17. Run Tests

ใช้ cargo test สำหรับ running tests

```bash
cargo test
```

### 18. Use Debugging Tools

ใช้ debugging tools (gdb, lldb)

### 19. Check Memory Safety

ตรวจสอบ memory safety ด้วย compiler

```bash
cargo clippy
cargo check
```

## หมวดหมู่ไฟล์

### Guide

- **Installation Guide** - อ่าน `guide/installation.md` สำหรับการติดตั้ง
- **Quick Start** - อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- **Key Concept** - อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- **How It Works** - อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- **Features** - อ่าน `guide/features.md` สำหรับ features ที่มี
- **Architecture** - อ่าน `guide/architecture.md` สำหรับ system architecture
- **Configuration** - อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- **Best Practices** - อ่าน `guide/best-practices.md` สำหรับ best practices
- **Integration** - อ่าน `guide/integration.md` สำหรับ tool integration
- **Troubleshooting** - อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

### Key Concepts

- **Ownership** - อ่าน `key-concepts/ownership.md` สำหรับ ownership
- **Borrowing** - อ่าน `key-concepts/borrowing.md` สำหรับ borrowing
- **Lifetimes** - อ่าน `key-concepts/lifetimes.md` สำหรับ lifetimes

### References

- **API Documentation** - อ่าน `references/api.md` สำหรับ API documentation
- **CLI Commands** - อ่าน `references/cli.md` สำหรับ CLI commands
- **Configuration Options** - อ่าน `references/configuration.md` สำหรับ configuration options
- **Official Website** - อ่าน `references/website.md` สำหรับ official website

## Rules

- ใช้ `let` สำหรับ immutable variables
- ใช้ `let mut` เฉพาะเมื่อจำเป็น
- ใช้ snake_case สำหรับ variables และ functions
- ใช้ PascalCase สำหรับ types
- ใช้ SCREAMING_SNAKE_CASE สำหรับ constants
- ใช้ ownership rules อย่างเคร่งครัด
- ใช้ borrowing สำหรับ temporary access
- ใช้ lifetimes annotations เมื่อจำเป็น
- หลีกเลี่ยง cloning เมื่อเป็นไปได้
- ใช้ references แทน ownership transfer
- ใช้ `Result<T, E>` สำหรับ recoverable errors
- ใช้ `Option<T>` สำหรับ optional values
- ใช้ `?` operator สำหรับ error propagation
- ใช้ `unwrap()` เฉพาะใน tests
- ใช้ custom error types สำหรับ specific errors
- ใช้ threads สำหรับ parallel execution
- ใช้ channels สำหรับ message passing
- ใช้ mutex สำหรับ shared state
- ใช้ atomic types สำหรับ lock-free programming
- หลีกเลี่ยง data races

## Expected Outcome

- Rust code ที่เป็นมาตรฐานและ maintainable
- Memory safety ที่รับประกันโดย compiler
- High performance ด้วย zero-cost abstractions
- Fearless concurrency
- Error handling ที่เหมาะสม
- Code ที่ผ่านการทดสอบและ debug แล้ว
- Understanding ที่ลึกซึ้งเกี่ยวกับ ownership, borrowing, และ lifetimes
