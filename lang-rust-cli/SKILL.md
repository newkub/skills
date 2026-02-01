---
name: rust-cli
description: แนวทางการพัฒนา CLI applications ด้วย Rust ตาม Best Practices
goal: สร้าง CLI tools ที่ปลอดภัย และ performant
outcome: CLI application ที่มี error handling ดีและ user-friendly
---

## When to Use
ใช้เมื่อพัฒนา CLI tools ด้วย Rust

## Quick Start
1. สร้าง project ใหม่ด้วย `cargo new my-cli --bin`
2. เพิ่ม clap และ dependencies ที่จำเป็นใน Cargo.toml
3. ตั้งค่า CLI arguments ด้วย clap derive macros
4. เขียน business logic ด้วย proper error handling
5. ทดสอบด้วย integration tests และ build

## Rules
- [Project Setup](rules/1-setup.md)
- [Configuration](rules/2-configuration.md)
- [Usage Patterns](rules/3-usage.md)

## Knowledge
- [Core Concepts](knowledge/core-concept.md)
- [All Features](knowledge/all-features.md)
- [Best Practices](knowledge/best-practices.md)

## Key Dependencies
- **clap**: Command line argument parsing (v4.x)
- **anyhow**: Error handling with context
- **thiserror**: Custom error types
- **tokio**: Async runtime (optional)

## Common Workflows
- [learn-from-web-and-write-skills](learn-from-web-and-write-skills.md) - สำหรับเรียนรู้และเขียน skills ใหม่
- [follow-typescript](follow-typescript.md) - สำหรับ TypeScript integration
- [refactor-code](refactor-code.md) - สำหรับ refactoring CLI code
