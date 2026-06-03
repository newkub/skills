# tool-cursor

## Overview

Cursor เป็น AI-powered code editor ที่สร้างบน VS Code codebase พร้อมฟีเจอร์ AI สำหรับ autocomplete, chat, และ command generation ช่วยให้การเขียน code มีประสิทธิภาพมากขึ้น

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **guide/** | [key-concept.md](guide/key-concept.md) | แนวคิดหลักและ AI features |
| | [how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ Cursor |
| | [features.md](guide/features.md) | ฟีเจอร์หลักทั้งหมด |
| | [installation.md](guide/installation.md) | การติดตั้งและข้อกำหนด |
| | [configuration.md](guide/configuration.md) | การตั้งค่า Cursor |
| | [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| | [integration.md](guide/integration.md) | การรวมกับ tools อื่น |
| | [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| **references/** | [website.md](references/website.md) | เว็บไซต์และเอกสารอย่างเป็นทางการ |
| | [cli.md](references/cli.md) | CLI commands สำหรับ Cursor |
| | [configuration.md](references/configuration.md) | ตัวเลือก configuration ทั้งหมด |
| | [api.md](references/api.md) | Programmatic API reference |

## Quick Reference

```bash
# เปิด Cursor
cursor .

# เปิดไฟล์เฉพาะ
cursor index.ts

# Keyboard shortcuts
Ctrl+K    - AI command input
Ctrl+L    - AI chat
Ctrl+I    - Inline AI completion
Ctrl+Shift+P - Command Palette
Ctrl+`     - Toggle terminal
```

## AI Features

| Feature | Description |
|---------|-------------|
| **AI Autocomplete** | สร้าง code อัตโนมัติ |
| **AI Chat** | ถาม-ตอบเกี่ยวกับ code |
| **AI Commands** | สร้าง code ด้วยคำสั่ง |
| **Inline AI** | แก้ไข code ในไฟล์ |

## File Structure

```
tool-cursor/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   ├── integration.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
``` |