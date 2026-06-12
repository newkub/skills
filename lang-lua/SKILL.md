---
name: lang-lua
description: แนวทางการพัฒนา Lua ตาม best practices สำหรับ embedded scripting และ lightweight automation
---

# lang-lua

## When to use

- Game development (Roblox, World of Warcraft, Love2D)
- Embedded systems
- Scripting within applications
- Rapid prototyping
- Configuration files
- Lightweight automation

## Skills Related

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Programming Language Skills

```
lang-lua/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── references/                   # เอกสารอ้างอิง
└── workflows/                    # Workflows สำหรับ automation
```

## หมวดหมู่ไฟล์

### guide/

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง Lua และ tools ที่เกี่ยวข้อง |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักของ Lua (tables, metatables, coroutines) |
| [how-it-works.md](guide/how-it-works.md) | วิธีการทำงานของ Lua VM และ garbage collection |
| [features.md](guide/features.md) | คุณสมบัติหลักของ Lua (tables, functions, modules) |
| [configuration.md](guide/configuration.md) | การตั้งค่า Lua และ LuaRocks |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน Lua อย่างรวดเร็ว |
| [best-practices.md](guide/best-practices.md) | best practices สำหรับ Lua (naming, patterns) |
| [integration.md](guide/integration.md) | การเชื่อมต่อกับ C/C++ และ applications |
| [architecture.md](guide/architecture.md) | สถาปัตยกรรมของ Lua projects |
| [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหาที่พบบ่อย |

### references/

| File | Description |
|------|-------------|
| [website.md](references/website.md) | ลิงก์ไปยังเว็บไซต์และเอกสารอย่างเป็นทางการ |
| [sitemap.md](references/sitemap.md) | แผนที่เอกสารทั้งหมด |
| [api.md](references/api.md) | API reference สำหรับ standard library |
| [cli.md](references/cli.md) | Lua CLI commands และ options |
| [configuration.md](references/configuration.md) | Lua configuration options reference |

### workflows/

| File | Description |
|------|-------------|
| [setup-lua-project.md](workflows/setup-lua-project.md) | ตั้งค่าโปรเจกต์ Lua ตามมาตรฐาน |
| [create-lua-module.md](workflows/create-lua-module.md) | สร้าง Lua module ตามมาตรฐาน |
