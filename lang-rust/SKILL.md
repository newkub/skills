---
title: Lang Rust
description: แนวทางการพัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector
auto_execution_mode: 3
---

## Goal

พัฒนา Rust ตาม best practices สำหรับ systems programming ที่เน้น memory safety, performance และ concurrency โดยไม่ต้องมี garbage collector

## Scope

ใช้สำหรับการพัฒนา Rust ทุกประเภท เช่น systems programming, WebAssembly development, CLI tools, network services, game development, และ blockchain projects

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
