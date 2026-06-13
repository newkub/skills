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

- อ่าน `references/cli.md` สำหรับ CLI commands
- อ่าน `references/configuration.md` สำหรับ configuration reference
- อ่าน `references/api.md` สำหรับ Client SDK API reference
- อ่าน `references/website.md` สำหรับ official links และ resources

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

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/cli.md](references/cli.md) | CLI commands - supabase start, stop |
| [references/configuration.md](references/configuration.md) | Configuration options reference |
| [references/api.md](references/api.md) | Client SDK API reference |
