---
title: Turborepo
description: High-performance build system สำหรับ JavaScript/TypeScript monorepos ด้วย caching และ parallel execution
auto_execution_mode: 3
---

## Goal

ใช้งาน Turborepo สำหรับ build JavaScript/TypeScript monorepos ด้วยความเร็วสูง

## Scope

ใช้สำหรับ:
- Build JavaScript/TypeScript monorepos ด้วยความเร็วสูง
- Remote caching สำหรับ teams
- Parallel execution สำหรับ efficiency
- Incremental builds สำหรับ speed

## Execute

### 1. Install Turborepo

ติดตั้ง Turborepo:
```bash
bun add -D turbo
```

### 2. Initialize Turborepo

Initialize Turborepo:
```bash
bunx turbo init
```

### 3. Run Build

รัน build:
```bash
bunx turbo run build
```

### 4. Run with Filter

รันด้วย filter:
```bash
bunx turbo run build --filter=myapp
```

## Rules

- ใช้ `bun add -D turbo` สำหรับติดตั้ง
- ใช้ `bunx turbo init` สำหรับ initialize
- ใช้ `bunx turbo run` สำหรับรัน tasks
- ใช้ `--filter` สำหรับ filter packages

## Expected Outcome

- Monorepo builds ที่ fast
- Remote caching ที่ efficient
- Parallel execution ที่ optimized
- Incremental builds ที่ fast

## Skills Related

- `/follow-turborepo` - Turborepo best practices
- `/guide-monorepo` - Monorepo architecture

## โครงสร้าง Directory

```
tool-turborepo/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ turbo.json)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Turborepo |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Turborepo |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ turbo.json |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Caching, Parallel, Monorepo |
| [guide/how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรม - Task graph, Hashing |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Remote cache, Filters |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - npm, pnpm |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - turbo.json |
| [guide/quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งาน |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/cli.md](references/cli.md) | CLI commands - turbo run, turbo build |
| [references/configuration.md](references/configuration.md) | Configuration options reference |
| [references/api.md](references/api.md) | Programmatic API reference |
