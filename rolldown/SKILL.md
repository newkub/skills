---
title: Rolldown
description: Fast JavaScript bundler ที่เขียนด้วย Rust ใช้ Rollup-compatible API
auto_execution_mode: 3
---

## Goal

ใช้งาน Rolldown สำหรับ bundle JavaScript/TypeScript ด้วยความเร็วสูง

## Scope

ใช้สำหรับ:
- Bundle JavaScript/TypeScript ด้วยความเร็วสูง
- Migration จาก Rollup ไปยัง Rust-based bundler
- Code splitting และ tree-shaking
- Plugin system ที่ compatible กับ Rollup

## Execute

### 1. Install Rolldown

ติดตั้ง Rolldown:
```bash
bun add -D rolldown
```

### 2. Build

Build:
```bash
bunx rolldown
```

### 3. Watch Mode

Watch mode:
```bash
bunx rolldown --watch
```

### 4. Config

Config:
```bash
bunx rolldown --config rolldown.config.js
```

## Rules

- ใช้ `bun add -D rolldown` สำหรับติดตั้ง
- ใช้ `bunx rolldown` สำหรับ build
- ใช้ `--watch` สำหรับ watch mode
- ใช้ `--config` สำหรับ config file

## Expected Outcome

- JavaScript/TypeScript ที่ bundled ด้วยความเร็วสูง
- Migration จาก Rollup ที่ smooth
- Code splitting ที่ efficient
- Tree-shaking ที่ effective
- Plugin system ที่ compatible

## Skills Related

- `/lib-vite` - Vite build tool
- `/follow-vite` - Vite best practices

## โครงสร้าง Directory

```
rolldown/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ rolldown.config.js)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Rolldown |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Rolldown |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ rolldown.config.js |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |
