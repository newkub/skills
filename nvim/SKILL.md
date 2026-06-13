---
title: Tool Nvim
description: แนวทางการใช้งาน Neovim - Modern, extensible text editor ที่พัฒนาจาก Vim
auto_execution_mode: 3
---

## Goal

ใช้งาน Neovim สำหรับ text editing ที่ highly customizable

## Scope

ใช้สำหรับ text editor ที่ highly customizable, modal editing สำหรับ efficiency, built-in terminal และ LSP support, Lua plugin system, และ remote development

## Execute

- ติดตั้ง Neovim ตาม `workflows/install-neovim.md`
- ตั้งค่า Neovim ตาม `workflows/configure-neovim.md`
- อ่าน `guide/installation.md` สำหรับวิธีติดตั้ง
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/modal-editing.md` สำหรับ modal editing
- อ่าน `key-concepts/macros.md` สำหรับ macros
- อ่าน `key-concepts/registers.md` สำหรับ registers
- อ่าน `principles/key-mappings.md` สำหรับ key mappings
- อ่าน `principles/plugin-management.md` สำหรับ plugin management
- อ่าน `references/api.md` สำหรับ Lua API
- อ่าน `references/cli.md` สำหรับ CLI commands
- อ่าน `references/configuration.md` สำหรับ configuration options
- อ่าน `references/website.md` สำหรับ official website

## โครงสร้าง Directory

```
nvim/
├── SKILL.md
├── guide/
│   ├── installation.md
│   ├── configuration.md
│   ├── best-practices.md
│   ├── features.md
│   └── how-it-works.md
├── key-concepts/
│   ├── modal-editing.md
│   ├── macros.md
│   └── registers.md
├── principles/
│   ├── key-mappings.md
│   └── plugin-management.md
├── references/
│   ├── api.md
│   ├── cli.md
│   ├── configuration.md
│   └── website.md
└── workflows/
    ├── install-neovim.md
    └── configure-neovim.md
```

## หมวดหมู่ไฟล์

| หมวดหมู่ | คำอธิบาย |
|-----------|-----------|
| `guide/` | คู่มือการใช้งานและ best practices |
| `key-concepts/` | แนวคิดสำคัญ (เขียนเป็นภาษาไทย) |
| `principles/` | หลักการ (เขียนเป็นภาษาไทย) |
| `references/` | API docs, CLI commands, configuration |
| `workflows/` | Workflows สำหรับ automation |

## Rules

- ใช้ modal editing สำหรับ efficiency
- ใช้ Lua สำหรับ configuration
- ใช้ LSP สำหรับ language support
- ใช้ Treesitter สำหรับ syntax highlighting
- ใช้ backticks สำหรับ commands
- ใช้ code blocks สำหรับ examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- Text editor ที่ highly customizable
- Modal editing ที่ efficient
- Built-in terminal และ LSP support
- Lua plugin system ที่ modern
- Remote development ที่ seamless
