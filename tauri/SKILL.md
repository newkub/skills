---
title: Tauri
description: Framework for building desktop and mobile applications with Rust backend and web technologies frontend. Includes WebView, IPC, system APIs, and cross-platform deployment.
auto_execution_mode: 3
---

## Goal

สร้าง desktop และ mobile applications ด้วย Rust backend และ web technologies frontend

## Scope

ใช้สำหรับการพัฒนา applications ที่ต้องการ performance สูง, security และ cross-platform deployment

## โครงสร้าง Directory

```
tauri/
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

## หมวดหมู่ไฟล์

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

## Execute

- อ่าน `guide/installation.md` สำหรับการติดตั้งและ setup
- อ่าน `guide/quick-start.md` สำหรับเริ่มต้นใช้งาน
- อ่าน `guide/key-concept.md` สำหรับแนวคิดหลัก
- อ่าน `guide/how-it-works.md` สำหรับวิธีการทำงาน
- อ่าน `key-concepts/` สำหรับแนวคิดเฉพาะทาง (IPC, WebView, System APIs)
- อ่าน `guide/architecture.md` สำหรับ system architecture
- อ่าน `guide/structure.md` สำหรับ project structure
- อ่าน `guide/configuration.md` สำหรับการตั้งค่า
- อ่าน `references/configuration.md` สำหรับ configuration reference
- ตั้งค่า `tauri.conf.json`
- อ่าน `guide/features.md` สำหรับ features ที่มี
- อ่าน `guide/patterns.md` สำหรับ patterns ทั่วไป
- อ่าน `guide/best-practices.md` สำหรับ best practices
- อ่าน `principles/` สำหรับหลักการพัฒนา
- อ่าน `guide/security.md` สำหรับ security best practices
- อ่าน `guide/performance.md` สำหรับ performance optimization
- อ่าน `guide/testing.md` สำหรับ testing strategies
- อ่าน `guide/integration.md` สำหรับ framework integration
- อ่าน `guide/ecosystem.md` สำหรับ Tauri ecosystem
- อ่าน `guide/migration.md` สำหรับ migration guide
- อ่าน `guide/troubleshooting.md` สำหรับปัญหาทั่วไป
- อ่าน `workflows/create-tauri-app.md` สำหรับสร้าง Tauri app
- อ่าน `references/cli.md` สำหรับ CLI documentation
- อ่าน `references/api.md` สำหรับ API reference
- อ่าน `references/website.md` สำหรับ resources

## Rules

- ใช้ Rust สำหรับ backend logic
- ใช้ web technologies สำหรับ frontend
- ใช้ IPC สำหรับ secure communication
- ใช้ proper IPC validation
- ไม่ hardcode secrets
- Optimize bundle size
- Test บน target platforms
- Use Tauri plugins สำหรับ common tasks
- ใช้ backticks สำหรับ `tauri`, commands, APIs
- ใช้ code blocks สำหรับ configuration examples
- ใช้ ansi markdown diagrams สำหรับ flow และ architecture

## Expected Outcome

- Desktop และ mobile applications ที่มีขนาดเล็กและเร็ว
- Rust backend และ web technologies frontend
- Cross-platform deployment
- Security และ performance สูง
