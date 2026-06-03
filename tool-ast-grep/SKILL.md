# tool-ast-grep

## Overview

แนวทางการใช้งาน ast-grep สำหรับ code structural search, lint และ rewriting โดยใช้ AST patterns

## What is ast-grep?

ast-grep (sg) เป็น CLI tool สำหรับค้นหาและแก้ไข code โดยอาศัย Abstract Syntax Tree (AST) แทนการ search แบบ text ธรรมดา ทำให้สามารถเขียน patterns ได้เหมือนเขียน code ตามปกติ

## Quick Start

```bash
# Install
npm install -g @ast-grep/cli

# Search pattern
ast-grep --pattern '$PROP && $PROP()' --lang ts ./src

# Rewrite with pattern
ast-grep -p '$A && $A()' -l ts -r '$A?.()' --interactive
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| Pattern | เขียน code ที่ต้องการค้นหา ระบบจะ match AST structure |
| Metavariable | `$VAR` - match any AST node (เหมือน regex `.`) |
| Rewrite | แทนที่ matched code ด้วย pattern ใหม่ |
| Rule | YAML configuration สำหรับ lint rules |

## Content

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 7 files | Guides และ tutorials สำหรับการใช้งาน |
| [references/](references/) | 3 files | CLI, configuration และ API reference |

### guide/

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง ast-grep |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน ast-grep |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักและหลักการทำงาน |
| [how-it-works.md](guide/how-it-works.md) | หลักการทำงานภายในพร้อม diagram |
| [features.md](guide/features.md) | Features ทั้งหมดของ ast-grep |
| [configuration.md](guide/configuration.md) | การตั้งค่า ast-grep |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

### references/

| File | Description |
|------|-------------|
| [cli.md](references/cli.md) | CLI commands reference |
| [configuration.md](references/configuration.md) | Configuration options |
| [api.md](references/api.md) | Programmatic API |

## Version

- Current: v0.20+
- Repository: [ast-grep/ast-grep](https://github.com/ast-grep/ast-grep)