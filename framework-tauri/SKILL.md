---
title: Tauri
description: Framework for building desktop and mobile applications with Rust backend and web technologies frontend. Includes WebView, IPC, system APIs, and cross-platform deployment.
auto_execution_mode: 3
---

## Goal

สร้าง desktop และ mobile applications ด้วย Rust backend และ web technologies frontend

## Scope

ใช้สำหรับการพัฒนา applications ที่ต้องการ performance สูง, security และ cross-platform deployment

## Directory Structure

```
framework-tauri/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   └── ...
├── key-concepts/
├── principles/
├── references/
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
└── workflows/
    └── create-tauri-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Tauri skill |
| guide/ | architecture.md | Architecture ของ Tauri |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-tauri-app.md | Workflow สำหรับสร้าง Tauri app |

## When to use

- เมื่อต้องการ desktop applications ที่มีขนาดเล็กและเร็ว
- เมื่อต้องการ Rust backend และ web technologies frontend
- เมื่อต้องการ cross-platform (Windows, macOS, Linux, Android, iOS)
- เมื่อต้องการ security และ performance สูง

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lang-rust
- lib-vite
- lib-react

## Execute

### 1. Create Project

```bash
bun create tauri-app
```

### 2. Configure Rust Backend

ตั้งค่า Rust backend ใน `src-tauri/`

### 3. Implement Frontend

Develop UI ด้วย web technologies (React, Vue, Svelte, etc.)

### 4. Setup IPC

Configure IPC สำหรับ communication ระหว่าง Rust และ frontend

## Rules

### Development
- ใช้ Rust สำหรับ backend logic
- ใช้ web technologies สำหรับ frontend
- ใช้ IPC สำหรับ secure communication

### Security
- ใช้ proper IPC validation
- ไม่ hardcode secrets
- Follow security best practices

### Best Practices
- Optimize bundle size
- Test บน target platforms
- Use Tauri plugins สำหรับ common tasks

## Expected Outcome

- Desktop และ mobile applications ที่มีขนาดเล็กและเร็ว
- Rust backend และ web technologies frontend
- Cross-platform deployment

## References

- [Tauri Docs](https://tauri.app)
- [Tauri GitHub](https://github.com/tauri-apps/tauri)
- [Tauri Plugins](https://tauri.app/plugins)
