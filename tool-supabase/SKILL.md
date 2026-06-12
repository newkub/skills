---
title: Supabase
description: Open source Firebase alternative สำหรับ build backend ด้วย PostgreSQL, Auth, Edge Functions, และ Realtime
auto_execution_mode: 3
---

## Goal

ใช้งาน Supabase สำหรับ build backend ด้วย PostgreSQL, Auth, Edge Functions, และ Realtime

## Scope

ใช้สำหรับ:
- Build backend ด้วย PostgreSQL, Auth, Edge Functions, Realtime
- Database management ด้วย PostgreSQL
- Authentication และ authorization
- Realtime subscriptions
- Edge functions ด้วย Deno

## Execute

### 1. Install Supabase CLI

ติดตั้ง Supabase CLI:
```bash
bunx supabase --version
```

### 2. Initialize Project

Initialize project:
```bash
bunx supabase init
```

### 3. Start Local Development

Start local development:
```bash
bunx supabase start
```

### 4. Generate Types

Generate types:
```bash
bunx supabase gen types typescript
```

## Rules

- ใช้ `bunx supabase init` สำหรับ initialize project
- ใช้ `bunx supabase start` สำหรับ start local development
- ใช้ `bunx supabase gen types` สำหรับ generate types
- ใช้ migrations สำหรับ database schema

## Expected Outcome

- Backend ที่ built ด้วย Supabase
- PostgreSQL database ที่ managed
- Authentication ที่ integrated
- Realtime subscriptions ที่ enabled
- Edge functions ที่ deployed

## Skills Related

- `/tool-postgres` - PostgreSQL database
- `/lang-typescript` - TypeScript programming

## โครงสร้าง Directory

```
tool-supabase/
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
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Supabase |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Supabase |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ configuration |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - PostgreSQL, Auth, Realtime |
| [guide/how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรม - Client, Database, Edge |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Auth, Storage, Functions |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - CLI, Docker |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - supabase/config.toml |
| [guide/quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งานอย่างรวดเร็ว |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/cli.md](references/cli.md) | CLI commands - supabase start, stop |
| [references/configuration.md](references/configuration.md) | Configuration options reference |
| [references/api.md](references/api.md) | Client SDK API reference |
