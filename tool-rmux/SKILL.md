---
title: RMUX
description: Terminal multiplexer สำหรับ automation ที่เขียนด้วย Rust เข้ากันได้กับ tmux และมี Rust SDK สำหรับ programmatic control
auto_execution_mode: 3
---

## Goal

ใช้งาน RMUX สำหรับ terminal multiplexer และ automation

## Scope

ใช้สำหรับ:
- ใช้ terminal multiplexer สำหรับ automation
- เขียน Rust code เพื่อ control tmux sessions
- Programmatic terminal management
- Session automation และ scripting

## Execute

### 1. Create Session

สร้าง session:
```bash
rmux new-session -s mysession
```

### 2. Attach to Session

Attach ไปยัง session:
```bash
rmux attach -t mysession
```

### 3. List Sessions

แสดง sessions:
```bash
rmux ls
```

## Rules

- ใช้ Rust SDK สำหรับ programmatic control
- เข้ากันได้กับ tmux
- ใช้สำหรับ automation และ scripting
- ใช้ session management ที่ efficient

## Expected Outcome

- Terminal multiplexer ที่ automated
- Rust code สำหรับ control tmux sessions
- Programmatic terminal management ที่ flexible
- Session automation ที่ reliable

## Skills Related

- `/lang-rust` - Rust programming
- `/follow-rust` - Rust best practices

## โครงสร้าง Directory

```
tool-rmux/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ configuration)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 5 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ RMUX |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน RMUX |
| [references/](references/) | 3 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ configuration |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลักของ RMUX |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| [guide/installation.md](guide/installation.md) | การติดตั้ง |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า |
| [guide/best-practices.md](guide/best-practices.md) | Best practices |

## Reference Files

| File | Description |
|------|-------------|
| [references/cli.md](references/cli.md) | CLI commands และ usage |
| [references/configuration.md](references/configuration.md) | Configuration options |
| [references/api.md](references/api.md) | Rust SDK API |
