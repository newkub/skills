---
title: Ratatui
description: Rust TUI framework for building terminal user interfaces. Includes widgets, layouts, styling, and terminal backends for cross-platform CLI applications.
auto_execution_mode: 3
---

## Goal

สร้าง terminal user interfaces (TUIs) ด้วย Rust สำหรับ cross-platform CLI applications

## Scope

ใช้สำหรับการพัฒนา CLI tools ที่ต้องการ performance สูงและ memory footprint ต่ำ

## Directory Structure

```
framework-ratatui/
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
    └── create-ratatui-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Ratatui skill |
| guide/ | architecture.md | Architecture ของ Ratatui |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-ratatui-app.md | Workflow สำหรับสร้าง Ratatui app |

## When to use

- เมื่อต้องการสร้าง terminal user interfaces (TUIs) ด้วย Rust
- เมื่อต้องการ performance สูงและ memory footprint ต่ำ
- เมื่อต้องการ cross-platform terminal applications
- เมื่อต้องการ rich widgets และ layouts สำหรับ CLI tools

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lang-rust

## Execute

### 1. Create Project

```bash
cargo new my-tui
cargo add ratatui crossterm
```

### 2. Setup Terminal

ตั้งค่า terminal backend ด้วย crossterm

### 3. Build UI

ใช้ widgets และ layouts สำหรับสร้าง UI

### 4. Run

Run TUI application ใน terminal

## Rules

### Development
- ใช้ Rust สำหรับ type safety
- ใช้ widgets สำหรับ UI components
- Follow Ratatui patterns

### Best Practices
- ใช้ proper error handling
- Optimize rendering performance
- Test บน multiple terminals

## Expected Outcome

- Cross-platform TUI applications
- Performance สูงและ memory footprint ต่ำ
- Rich widgets และ layouts

## References

- [Ratatui Docs](https://ratatui.rs)
- [Ratatui GitHub](https://github.com/ratatui-org/ratatui)
- [Crossterm Docs](https://docs.rs/crossterm)
