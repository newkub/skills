---
name: tool-nvim
description: แนวทางการใช้งาน Neovim - Modern, extensible text editor ที่พัฒนาจาก Vim
---

แนวทางการใช้งาน Neovim - Modern, extensible text editor ที่พัฒนาจาก Vim

## Overview

Neovim (nvim) เป็น modern fork ของ Vim ที่เน้น extensibility และ usability รองรับ Lua scripting, built-in terminal, และ async plugin system ทำให้เป็น editor ที่ power สำหรับ developers


## When to use



## Skills Related



## References


## File Structure

```text
tool-nvim/
├── SKILL.md
├── 
│   ├── guide/
│   │   ├── key-concept.md
│   │   ├── how-it-works.md
│   │   ├── features.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   ├── quick-start.md
│   │   ├── best-practices.md
│   │   └── integration.md
│   ├── key-concepts/
│   └── principles/
├── references/
│   ├── website.md
│   ├── cli.md
│   └── configuration.md
└── workflows/
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide** | key-concept.md | แนวคิดหลัก - Modal editing, Registers, Macros |
| **guide** | how-it-works.md | สถาปัตยกรรม - Neovim architecture, Plugins, UI |
| **guide** | features.md | ฟีเจอร์ทั้งหมด - LSP, Treesitter, Terminal |
| **guide** | installation.md | การติดตั้ง - Various installation methods |
| **guide** | configuration.md | การตั้งค่า - init.lua, plugins, options |
| **guide** | quick-start.md | เริ่มต้นใช้งานอย่างรวดเร็ว |
| **guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **guide** | integration.md | การเชื่อมต่อกับ tools อื่นๆ |
| **references** | website.md | Official website และ resources |
| **references** | cli.md | CLI commands - nvim, nvim --help |
| **references** | configuration.md | Configuration - init.vim, init.lua |

## Quick Start

```bash
# Open file
nvim file.txt

# Open with line number
nvim +12 file.txt

# Ex mode
nvim -e file.txt

# Diff mode
nvim -d file1.txt file2.txt
```

## Key Features

| Feature | Description |
|---------|-------------|
| **Modal Editing** | Normal, Insert, Visual, Command modes |
| **LSP Native** | Built-in Language Server Protocol support |
| **Treesitter** | Syntax highlighting with Treesitter |
| **Terminal** | Built-in terminal emulator |
| **Lua Plugins** | Modern plugin system with Lua |

## Usage Order

1. **Start**: Learn basic modes and commands
2. **Configure**: Set up init.lua with basic options
3. **Install Plugins**: Add essential plugins (lazy.nvim, telescope)
4. **Learn Advanced**: Mappings, macros, registers
5. **Reference**: `references/cli.md` for all commands