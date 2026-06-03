# Key Concept

## What is dprint?

dprint เป็น pluggable และ configurable code formatting platform ที่รวดเร็วมาก

## Core Features

| Feature | Description |
|---------|-------------|
| **Pluggable** | รองรับ plugins หลายภาษา |
| **Fast** | ใช้ Rust ทำให้เร็วมาก |
| **Configurable** | ปรับแต่งได้ตามต้องการ |
| **Multiple Languages** | TypeScript, JavaScript, JSON, Markdown, Rust และอื่นๆ |
| **Incremental** | format เฉพาะไฟล์ที่เปลี่ยน |

## Key Terms

| Term | Description |
|------|-------------|
| **Plugin** | Extension สำหรับรองรับภาษาต่างๆ |
| **Configuration** | dprint.json สำหรับตั้งค่า |
| **fmt** | คำสั่ง format code |
| **check** | คำสั่งตรวจสอบว่า format ถูกต้องหรือไม่ |

## Supported Languages

- TypeScript / JavaScript
- JSON / JSONC
- Markdown
- Rust
- TOML
- Biome (via plugin)

## When to Use

- เมื่อต้องการ fast code formatter
- เมื่อต้องการรองรับหลายภาษาใน tool เดียว
- เมื่อต้องการ deterministic formatting