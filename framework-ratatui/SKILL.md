# framework-ratatui

## Overview

Ratatui เป็น Rust library สำหรับสร้าง terminal user interfaces (TUIs) ที่เร็ว เบา และมีความสามารถหลากหลาย ให้ widgets, layouts และ rendering สำหรับสร้าง TUI applications ได้อย่างมืออาชีพ

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักของ Ratatui |
| | [how-it-works.md](guide/how-it-works.md) | การทำงานของ Ratatui |
| | [features.md](guide/features.md) | Features ทั้งหมด |
| | [installation.md](guide/installation.md) | การติดตั้ง |
| | [configuration.md](guide/configuration.md) | การตั้งค่า |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| | [integration.md](guide/integration.md) | การรวมกับ tools อื่น |
| | [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ Ratatui |
| **references/** | [website.md](references/website.md) | แหล่งข้อมูลอย่างเป็นทางการ |
| | [api.md](references/api.md) | Rust API reference |
| | [configuration.md](references/configuration.md) | Configuration reference |

## Quick Reference

| Component | Description |
|-----------|-------------|
| `ratatui::run` | Main entry point |
| `Frame` | Drawing surface |
| `Backend` | Terminal backend |
| `Widget` | Base trait for all widgets |

## Key Concepts

| Concept | คำอธิบาย |
|---------|----------|
| **Widget** | Base trait for UI components |
| **Layout** | Constraint-based positioning |
| **Backend** | Terminal input/output (crossterm, termion) |
| **Style** | Colors, modifiers, text styling |
| **Block** | Border and padding container |

## File Structure

```
framework-ratatui/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── best-practices.md
│   ├── integration.md
│   └── architecture.md
└── references/
    ├── website.md
    ├── api.md
    └── configuration.md
```