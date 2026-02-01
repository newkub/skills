---
name: rust-sdk
description: แนวทางการพัฒนา SDK ด้วย Rust ตาม Best Practices
goal: สร้าง Rust SDK ที่เป็นมาตรฐาน ใช้งานง่าย และบำรุงรักษาได้
outcome: Rust SDK ที่มีคุณภาพ มี API ชัดเจน และมีเอกสารครบถ้วน
---

## When to Use
ใช้เมื่อพัฒนา SDK ด้วย Rust สำหรับให้ผู้อื่นใช้งาน

## Quick Start
1. สร้าง project ใหม่ด้วย `cargo new --lib my-sdk`
2. ติดตั้ง dependencies ที่จำเป็น
3. ตั้งค่า Cargo.toml ตาม standard
4. เขียน public API ที่ชัดเจน
5. เพิ่ม documentation และ examples

## Rules
- [Project Structure](rules/1-project-structure.md)
- [API Design](rules/2-api-design.md)
- [Error Handling](rules/3-error-handling.md)
- [Documentation](rules/4-documentation.md)
- [Testing](rules/5-testing.md)

## Knowledge
- [Core Concepts](knowledge/core-concepts.md)
- [Best Practices](knowledge/best-practices.md)
- [Examples](knowledge/examples.md)
