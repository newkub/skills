---
description: "Code Search: เครื่องมือและเทคนิคสำหรับการค้นหาโค้ดอย่างมีประสิทธิภาพด้วย ast-grep, ripgrep (rg), และ fd"
---

# Code Search Tools

## When to Apply

ใช้ Skill นี้เมื่อต้องการค้นหาโค้ด, ไฟล์, หรือโครงสร้างโค้ดภายในโปรเจกต์อย่างรวดเร็วและมีประสิทธิภาพ

- เมื่อต้องการค้นหาตามโครงสร้างโค้ด (AST) แทนการค้นหาแบบข้อความธรรมดา
- เมื่อต้องการค้นหาข้อความในไฟล์จำนวนมากอย่างรวดเร็ว
- เมื่อต้องการค้นหาไฟล์หรือไดเรกทอรีด้วยวิธีที่ง่ายและเร็วกว่า `find`

## Tool Categories

| Category | Tool | Prefix |
| :--- | :--- | :--- |
| Structural Search | `ast-grep` | `cs-` |
| Text Search | `ripgrep` | `cs-` |
| File Search | `fd` | `cs-` |

## Quick Reference

### 1. Code & Text Search

-   `cs-ast-grep` - ค้นหาโค้ดตามโครงสร้าง (AST) สำหรับการค้นหาที่ซับซ้อนและ refactor
-   `cs-ripgrep` - ค้นหาข้อความในไฟล์อย่างรวดเร็ว โดยเคารพ `.gitignore`

### 2. File Search

-   `cs-fd` - ค้นหาไฟล์และไดเรกทอรีที่ใช้งานง่ายและรวดเร็ว

## How to Use

รายละเอียดและตัวอย่างการใช้งานของแต่ละเครื่องมืออยู่ในไฟล์แยกในไดเรกทอรี `rules/`

-   [`./rules/cs-ast-grep.md`](./rules/cs-ast-grep.md)
-   [`./rules/cs-ripgrep.md`](./rules/cs-ripgrep.md)
-   [`./rules/cs-fd.md`](./rules/cs-fd.md)
