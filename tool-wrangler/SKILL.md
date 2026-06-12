---
title: Wrangler
description: CLI tool สำหรับ develop และ deploy Cloudflare Workers ด้วย edge computing
auto_execution_mode: 3
---

## Goal

ใช้งาน Wrangler สำหรับ develop และ deploy Cloudflare Workers

## Scope

ใช้สำหรับ:
- Develop และ deploy Cloudflare Workers
- Edge computing ด้วย JavaScript/TypeScript
- Serverless functions ที่ fast
- KV storage, D1 database, R2 storage

## Execute

### 1. Install Wrangler

ติดตั้ง Wrangler:
```bash
bun add -D wrangler
```

### 2. Initialize Project

Initialize project:
```bash
bunx wrangler init
```

### 3. Local Development

Local development:
```bash
bunx wrangler dev
```

### 4. Deploy

Deploy:
```bash
bunx wrangler deploy
```

## Rules

- ใช้ `bun add -D wrangler` สำหรับติดตั้ง
- ใช้ `bunx wrangler init` สำหรับ initialize
- ใช้ `bunx wrangler dev` สำหรับ local development
- ใช้ `bunx wrangler deploy` สำหรับ deploy

## Expected Outcome

- Cloudflare Workers ที่ deployed
- Edge computing ที่ fast
- Serverless functions ที่ efficient
- KV/D1/R2 ที่ integrated

## Skills Related

- `/lang-typescript` - TypeScript programming
- `/lang-javascript` - JavaScript programming

## โครงสร้าง Directory

```
tool-wrangler/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ wrangler.toml)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ Wrangler |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน Wrangler |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ wrangler.toml |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Edge, Workers, KV, D1 |
| [guide/how-it-works.md](guide/how-it-works.md) | สถาปัตยกรรม - Edge computing, Runtime |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - KV, D1, R2, Cron |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - npm, pnpm |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - wrangler.toml |
| [guide/quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งาน |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/cli.md](references/cli.md) | CLI commands - wrangler dev, wrangler deploy |
| [references/configuration.md](references/configuration.md) | Configuration options reference |
| [references/api.md](references/api.md) | Workers runtime API reference |
