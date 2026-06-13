---
title: Lang Rust
description: แนวทางการพัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector
auto_execution_mode: 3
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
│   ├── installation.md
│   ├── quick-start.md
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── architecture.md
│   ├── configuration.md
│   ├── best-practices.md
│   ├── integration.md
│   └── troubleshooting.md
├── key-concepts/
│   ├── ownership.md
│   ├── borrowing.md
│   └── lifetimes.md
└── references/
    ├── api.md
    ├── cli.md
    ├── configuration.md
    ├── sitemap.md
    └── website.md
```

## Execute

- ทำความเข้าใจ ownership system
- เรียนรู้ borrowing และ lifetimes
- ศึกษา traits และ generics
- ทำความเข้าใจ error handling ด้วย Result
- ติดตั้ง Rust toolchain ด้วย rustup
- ตั้งค่า Cargo package manager
- ตั้งค่า `Cargo.toml` สำหรับ project
- ติดตั้ง IDE plugins (rust-analyzer)
- ใช้ ownership system อย่างถูกต้อง
- ใช้ borrowing และ lifetimes อย่างเหมาะสม
- ใช้ traits สำหรับ polymorphism
- ใช้ generics สำหรับ reusable code
- ใช้ Result สำหรับ error handling
- ใช้ pattern matching อย่างเหมาะสม
- เขียน unit tests ด้วย built-in test framework
- ใช้ cargo test สำหรับ running tests
- ใช้ debugging tools (gdb, lldb)
- ตรวจสอบ memory safety ด้วย compiler
- อ่าน `guide/installation.md` สำหรับการติดตั้ง
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/integration.md` สำหรับ tool integration
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป
- อ่าน `key-concepts/ownership.md` สำหรับ ownership
- อ่าน `key-concepts/borrowing.md` สำหรับ borrowing
- อ่าน `key-concepts/lifetimes.md` สำหรับ lifetimes
- อ่าน `references/api.md` สำหรับ API documentation
- อ่าน `references/cli.md` สำหรับ CLI commands
- อ่าน `references/configuration.md` สำหรับ configuration options
- อ่าน `references/sitemap.md` สำหรับ documentation sitemap
- อ่าน `references/website.md` สำหรับ official website

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
