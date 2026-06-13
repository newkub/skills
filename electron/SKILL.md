---
title: Electron
description: Framework for building cross-platform desktop applications using web technologies (HTML, CSS, JavaScript) with Node.js and Chromium. Includes main process, renderer process, IPC, and native APIs.
auto_execution_mode: 3
---

## Goal

สร้าง cross-platform desktop applications ด้วย web technologies

## Scope

ใช้สำหรับการสร้าง desktop applications ด้วย HTML, CSS, JavaScript และ Node.js integration

## Directory Structure

```
electron/
├── SKILL.md
├── guide/
│   ├── architecture.md
│   ├── best-practices.md
│   ├── configuration.md
│   ├── features.md
│   ├── how-it-works.md
│   ├── installation.md
│   ├── integration.md
│   └── quick-start.md
├── key-concepts/
│   └── key-concept.md
├── principles/
├── references/
│   ├── cli.md
│   ├── configuration.md
│   ├── sitemap.md
│   └── website.md
├── scripts/
├── templates/
└── workflows/
    └── create-electron-app.md
```

## File Categories

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|-----------|------|-----------|
| Root Files | SKILL.md | Index file สำหรับ Electron skill |
| guide/ | architecture.md | Architecture ของ Electron |
| guide/ | best-practices.md | Best practices สำหรับ development |
| guide/ | configuration.md | Configuration และ setup |
| guide/ | features.md | Features ของ Electron |
| guide/ | how-it-works.md | วิธีการทำงานของ Electron |
| guide/ | installation.md | วิธีการติดตั้ง |
| guide/ | integration.md | Integration กับ frameworks อื่น |
| guide/ | quick-start.md | Quick start guide |
| key-concepts/ | key-concept.md | Key concepts พื้นฐาน |
| references/ | cli.md | CLI documentation |
| references/ | configuration.md | Configuration reference |
| references/ | sitemap.md | Sitemap ของ documentation |
| references/ | website.md | เว็บไซต์และ resources |
| workflows/ | create-electron-app.md | Workflow สำหรับสร้าง Electron app |

## When to use

- เมื่อต้องการสร้าง cross-platform desktop applications
- เมื่อต้องการใช้ web technologies (HTML, CSS, JavaScript) สำหรับ desktop
- เมื่อต้องการ Node.js integration สำหรับ backend logic
- เมื่อต้องการ native features ของ desktop applications

## Skills Related

- `/write-skills` - มาตรฐานการเขียน skills
- lang-javascript
- lang-typescript
- runtime-bun

## Execute

### 1. Create Project

```bash
bun create electron-app
```

### 2. Configure Main Process

ตั้งค่า main process และ window

### 3. Implement Renderer

Develop UI ด้วย web technologies

### 4. Setup IPC

Configure IPC สำหรับ communication ระหว่าง processes

## Rules

### Development
- ใช้ TypeScript สำหรับ type safety
- Separate main และ renderer processes
- ใช้ IPC สำหรับ secure communication

### Security
- ใช้ context isolation
- Disable node integration ใน renderer
- Validate IPC messages

### Best Practices
- ใช้ preload scripts สำหรับ secure APIs
- Optimize bundle size
- Test บน target platforms

## Expected Outcome

- Cross-platform desktop applications
- Secure IPC communication
- Native features integration

## References

- [Electron Docs](https://www.electronjs.org/docs)
- [Electron GitHub](https://github.com/electron/electron)
- [Electron Fiddle](https://www.electronjs.org/fiddle)
