---
title: Dioxus
description: Rust framework for cross-platform GUI development supporting web, desktop, mobile, and liveview. Includes component system, virtual DOM, signals, hooks, and multi-platform deployment.
auto_execution_mode: 3
---

## Goal

สร้าง cross-platform GUI applications ด้วย Rust สำหรับ web, desktop, mobile และ liveview

## Scope

ใช้สำหรับการพัฒนา GUI applications ด้วย Rust ที่รองรับหลาย platforms ใน codebase เดียว

## Directory Structure

```
framework-dioxus/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   └── ...
├── key-concepts/
├── principles/
├── references/
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    └── create-dioxus-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Dioxus skill |
| guide/ | architecture.md | Architecture ของ Dioxus |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-dioxus-app.md | Workflow สำหรับสร้าง Dioxus app |

## When to use

- เมื่อต้องการสร้าง cross-platform GUI applications ด้วย Rust
- เมื่อต้องการ web, desktop, mobile และ liveview ใน codebase เดียว
- เมื่อต้องการ performance สูงและ memory footprint ต่ำ
- เมื่อต้องการใช้ Rust ecosystem สำหรับ UI development

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lang-rust
- bun

## Execute

### 1. Create Project

```bash
cargo install dioxus-cli
dx create my-app
```

### 2. Develop Components

ใช้ Dioxus component system และ signals

### 3. Build for Target

Build สำหรับ platform ที่ต้องการ

### 4. Run

Run application บน target platform

## Rules

### Development
- ใช้ Rust สำหรับ type safety
- ใช้ signals สำหรับ state management
- Follow Dioxus component patterns

### Best Practices
- ใช้ hooks สำหรับ reusable logic
- Optimize re-renders
- Test บน target platforms

## Expected Outcome

- Cross-platform applications ที่ share code
- Performance สูงด้วย Rust
- Memory footprint ต่ำ

## References

- [Dioxus Docs](https://dioxuslabs.com)
- [Dioxus GitHub](https://github.com/DioxusLabs/dioxus)
- [Dioxus Book](https://dioxuslabs.com/docs)
