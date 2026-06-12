---
title: Tool Nextest
description: Next-generation test runner for Rust with faster execution, per-test isolation, and CI support
auto_execution_mode: 3
---

## Goal

ใช้งาน Nextest สำหรับ test runner ที่เร็วกว่า cargo test

## Scope

ใช้สำหรับ test runner ที่เร็วกว่า cargo test, per-test isolation, CI support ระดับหนึ่ง, retry policies และ test groups

## Execute

- ติดตั้ง Nextest ตาม guide/installation.md
- รัน tests ด้วย Nextest
- ตั้งค่า Nextest ตาม guide/configuration.md
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/integration.md` สำหรับ tool integration
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป

## Rules

- ใช้ Nextest แทน cargo test สำหรับ performance
- ใช้ per-test isolation สำหรับ reliability
- ใช้ retry policies สำหรับ flaky tests
- ใช้ test groups สำหรับ organization
- ใช้ backticks สำหรับ commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- Test runner ที่เร็วกว่า cargo test
- Per-test isolation สำหรับ reliability
- CI support ระดับหนึ่ง
- Retry policies และ test groups ที่ efficient
