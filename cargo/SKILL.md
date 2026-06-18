---
title: Tool Cargo
description: แนวทางการใช้งาน Cargo สำหรับ Rust package management และ build tool
auto_execution_mode: 3
---

## Goal

ใช้งาน Cargo สำหรับ Rust package management และ build tool

## Scope

ใช้สำหรับ dependencies (crates) management, building projects, compiling code, publishing packages, และ version management

## โครงสร้าง Directory

```
cargo/
├── SKILL.md
├── learn/
│   ├── guide/              # Guides สำหรับการใช้งาน
│   │   ├── installation.md
│   │   ├── quick-start.md
│   │   ├── key-concept.md
│   │   ├── how-it-works.md
│   │   ├── features.md
│   │   ├── patterns.md
│   │   ├── best-practices.md
│   │   ├── integration.md
│   │   ├── architecture.md
│   │   ├── structure.md
│   │   └── troubleshooting.md
│   ├── key-concepts/       # แนวคิดหลักของ Cargo
│   │   ├── crates.md
│   │   ├── workspaces.md
│   │   ├── dependency-resolution.md
│   │   ├── features.md
│   │   └── profiles.md
│   └── principles/         # Best practices และ principles
│       ├── semantic-versioning.md
│       ├── code-organization.md
│       ├── testing-strategy.md
│       └── documentation.md
├── workflows/              # Workflows สำหรับงานทั่วไป
│   ├── setup-project.md
│   ├── build-project.md
│   ├── add-dependency.md
│   ├── test-project.md
│   └── publish-crate.md
├── references/            # References และ documentation
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   └── website.md
├── templates/              # Templates สำหรับ projects
└── scripts/                # Scripts สำหรับ automation
```

## หมวดหมู่ไฟล์

### Guides (learn/guide/)

| ไฟล์ | คำอธิบาย |
|------|-------------|
| installation.md | วิธีการติดตั้ง Cargo |
| quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| key-concept.md | แนวคิดหลักของ Cargo |
| how-it-works.md | วิธีการทำงานของ Cargo |
| features.md | Features ทั้งหมดของ Cargo |
| patterns.md | Patterns ทั่วไปในการใช้ Cargo |
| best-practices.md | Best practices สำหรับการใช้ Cargo |
| integration.md | Tool integration กับ Cargo |
| architecture.md | System architecture ของ Cargo |
| structure.md | Project structure มาตรฐาน |
| troubleshooting.md | การแก้ปัญหาทั่วไป |

### Key Concepts (learn/key-concepts/)

| ไฟล์ | คำอธิบาย |
|------|-------------|
| crates.md | แนวคิดเกี่ยวกับ Crates |
| workspaces.md | แนวคิดเกี่ยวกับ Workspaces |
| dependency-resolution.md | แนวคิดเกี่ยวกับ Dependency Resolution |
| features.md | แนวคิดเกี่ยวกับ Features |
| profiles.md | แนวคิดเกี่ยวกับ Profiles |

### Principles (learn/principles/)

| ไฟล์ | คำอธิบาย |
|------|-------------|
| semantic-versioning.md | หลักการ Semantic Versioning |
| code-organization.md | หลักการจัดระเบียบ Code |
| testing-strategy.md | หลักการ Testing |
| documentation.md | หลักการ Documentation |

### Workflows (workflows/)

| ไฟล์ | คำอธิบาย |
|------|-------------|
| setup-project.md | สร้างและตั้งค่า Project ใหม่ |
| build-project.md | Build Project ด้วย Cargo |
| add-dependency.md | เพิ่ม Dependency ด้วย Cargo |
| test-project.md | Test Project ด้วย Cargo |
| publish-crate.md | Publish Crate ไป crates.io |

### References (references/)

| ไฟล์ | คำอธิบาย |
|------|-------------|
| api.md | Programmatic API reference |
| cli.md | CLI commands reference |
| configuration.md | Configuration reference |
| website.md | Official websites |

## Execute

### เริ่มต้นใช้งาน

1. อ่าน `learn/guide/installation.md` สำหรับการติดตั้ง
2. อ่าน `learn/guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
3. อ่าน `learn/guide/key-concept.md` สำหรับแนวคิดหลัก

### การพัฒนา

1. อ่าน `workflows/setup-project.md` สำหรับ setup project
2. อ่าน `workflows/build-project.md` สำหรับการ build
3. อ่าน `workflows/add-dependency.md` สำหรับเพิ่ม dependencies
4. อ่าน `workflows/test-project.md` สำหรับการ test

### การเข้าใจลึกซึ้ง

1. อ่าน `learn/key-concepts/` สำหรับแนวคิดหลัก
2. อ่าน `learn/principles/` สำหรับ best practices
3. อ่าน `learn/guide/how-it-works.md` สำหรับวิธีการทำงาน
4. อ่าน `learn/guide/architecture.md` สำหรับ architecture

### การ Publish

1. อ่าน `workflows/publish-crate.md` สำหรับการ publish
2. อ่าน `learn/principles/semantic-versioning.md` สำหรับ versioning

### การแก้ปัญหา

1. อ่าน `learn/guide/troubleshooting.md` สำหรับปัญหาทั่วไป
2. อ่าน `references/cli.md` สำหรับ CLI commands
3. อ่าน `references/configuration.md` สำหรับ configuration

## Rules

- ใช้ `cargo new` สำหรับ create project
- ใช้ `cargo build` สำหรับ build
- ใช้ `cargo run` สำหรับ run
- ใช้ `cargo test` สำหรับ test
- ใช้ `cargo build --release` สำหรับ release build
- ใช้ backticks สำหรับ commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- Rust projects ที่ build ได้อย่างมีประสิทธิภาพ
- Dependencies ที่ managed อย่างเหมาะสม
- Tests ที่ comprehensive
- Release builds ที่ optimized
- Code ที่มี organization ดี
- Documentation ที่ครบถ้วน
