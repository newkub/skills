---
name: wrangler
description: "CLI tool สำหรับ develop และ deploy Cloudflare Workers ด้วย edge computing"
triggers: ['user', 'model']
allowed-tools: ['read', 'edit', 'grep', 'glob', 'exec']
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
