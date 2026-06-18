---
title: Ratatui
description: Rust TUI library for building terminal user interfaces with immediate-mode rendering
auto_execution_mode: 3
---

## Goal

สร้าง terminal user interfaces (TUIs) ด้วย Rust สำหรับ cross-platform CLI applications

## Scope

ใช้สำหรับการพัฒนา CLI tools ที่ต้องการ performance สูงและ memory footprint ต่ำ

## Directory Structure

```
ratatui/
├── SKILL.md
├── learn/
│   ├── guide/
│   ├── key-concepts/
│   └── principles/
├── references/
│   ├── api-widgets.md
│   ├── api.md
│   ├── cli.md
│   ├── update-configuration.md
│   └── update-website.md
├── scripts/
├── templates/
│   ├── app-template.rs
│   ├── hello-world.rs
│   ├── layout-example.rs
│   └── list-example.rs
└── workflows/
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Ratatui skill |
| learn/guide/ | update-architecture.md | Architecture ของ Ratatui |
| learn/guide/ | update-best-practices.md | Best practices สำหรับ development |
| learn/guide/ | update-configuration.md | Configuration และ setup |
| learn/guide/ | update-features.md | Features ของ Ratatui |
| learn/guide/ | update-how-it-works.md | วิธีการทำงาน |
| learn/guide/ | update-installation.md | วิธีติดตั้ง |
| learn/guide/ | update-integration.md | การเชื่อมต่อกับ libraries อื่น |
| learn/guide/ | update-key-concept.md | Key concepts หลัก |
| learn/guide/ | update-quick-start.md | เริ่มต้นอย่างรวดเร็ว |
| learn/key-concepts/ | update-terminal-lifecycle.md | Terminal lifecycle management |
| learn/key-concepts/ | update-event-handling.md | Event handling patterns |
| learn/key-concepts/ | update-state-management.md | State management ใน TUI |
| learn/key-concepts/ | update-backends.md | Terminal backends (Crossterm, Termion, Termwiz) |
| learn/key-concepts/ | update-custom-widgets.md | สร้าง custom widgets |
| learn/key-concepts/ | update-buffer-rendering.md | Buffer และ rendering |
| learn/key-concepts/ | update-layout-system.md | Layout system และ constraints |
| learn/principles/ | update-performance.md | Performance optimization |
| learn/principles/ | update-accessibility.md | Accessibility best practices |
| learn/principles/ | update-error-handling.md | Error handling patterns |
| references/ | api-widgets.md | Widgets API reference |
| references/ | api.md | Core API reference |
| references/ | cli.md | CLI documentation |
| references/ | update-configuration.md | Configuration reference |
| references/ | update-website.md | เว็บไซต์และ resources |
| templates/ | app-template.rs | Full application template |
| templates/ | hello-world.rs | Hello World example |
| templates/ | layout-example.rs | Complex layout example |
| templates/ | list-example.rs | List widget example |

## When to use

- เมื่อต้องการสร้าง terminal user interfaces (TUIs) ด้วย Rust
- เมื่อต้องการ performance สูงและ memory footprint ต่ำ
- เมื่อต้องการ cross-platform terminal applications
- เมื่อต้องการ rich widgets และ layouts สำหรับ CLI tools

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- `/follow-rust` - Rust development guidelines

## Execute

### 1. Create Project

```bash
cargo new my-tui
cd my-tui
cargo add ratatui crossterm
```

### 2. Setup Terminal

ใช้ `ratatui::run()` สำหรับ auto-setup หรือ `init()/restore()` สำหรับ manual control

### 3. Build UI

ใช้ widgets และ layouts สำหรับสร้าง UI ดู examples ใน `templates/`

### 4. Handle Events

ใช้ backend event handling (เช่น `crossterm::event`) สำหรับ keyboard และ mouse input

### 5. Run

Run TUI application ใน terminal

### 6. Learn More

- อ่าน `learn/guide/update-quick-start.md` สำหรับเริ่มต้น
- ดู `learn/key-concepts/` สำหรับ concepts ละเอียด
- ดู `learn/principles/` สำหรับ best practices
- ใช้ `templates/` เป็น reference สำหรับ implementation

## Rules

### Development
- ใช้ Rust สำหรับ type safety
- ใช้ widgets สำหรับ UI components
- Follow Ratatui patterns
- ใช้ `ratatui::run()` เป็น default สำหรับ normal applications
- ใช้ `init()/restore()` เมื่อต้องการ manual control หรือ custom setup
- ใช้ `init_with_options()` เมื่อต้องการ custom Viewport

### Best Practices
- ใช้ proper error handling ด้วย `try_init()` / `try_restore()`
- Optimize rendering performance ด้วย minimal redraws
- Test บน multiple terminals และ terminal sizes
- Follow accessibility principles สำหรับ high contrast และ keyboard navigation
- ใช้ StatefulWidget สำหรับ stateful widgets
- Reuse widgets และ state แทนการ recreate
- ใช้ immediate rendering model (render all widgets per frame)
- Handle terminal resize events และ redraw automatically

### Crate Organization (0.30.0+)
- ใช้ `ratatui` crate สำหรับ applications (recommended)
- ใช้ `ratatui-core` สำหรับ widget libraries และ custom integrations
- ใช้ `ratatui-widgets` เมื่อต้องการ widgets เท่านั้น
- เลือก backend crates: `ratatui-crossterm`, `ratatui-termion`, `ratatui-termwiz`
- ใช้ `ratatui-macros` สำหรับลด boilerplate

### Widget System
- ใช้ `Widget` trait สำหรับ stateless, short-lived UI components
- ใช้ `StatefulWidget` trait สำหรับ widgets ที่ต้อง maintain state
- State ของ StatefulWidget ถูก manage โดย application
- Widget library authors ควร depend บน `ratatui-core` สำหรับ API stability

## Expected Outcome

- Cross-platform TUI applications
- Performance สูงและ memory footprint ต่ำ
- Rich widgets และ layouts
- Modular workspace organization
- Support embedded targets (no_std)

## References

- [Ratatui Docs](https://ratatui.rs)
- [Ratatui GitHub](https://github.com/ratatui/ratatui)
- [Crossterm Docs](https://docs.rs/crossterm)
