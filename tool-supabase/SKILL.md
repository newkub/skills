---
title: Supabase
description: Open source Firebase alternative สำหรับ build applications ด้วย PostgreSQL, Auth, Storage
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- Build applications ด้วย PostgreSQL database
- Authentication และ authorization
- File storage และ edge functions
- Realtime subscriptions
- Vector embeddings ด้วย pgvector

## Skills Related

- `/cloudflare` - Cloudflare Workers integration
- `/guide-database-design` - Database design principles

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลัก - Postgres, Auth, Storage |
| 2 | how-it-works.md | การทำงาน - Local dev stack |
| 3 | features.md | ฟีเจอร์ทั้งหมด - Database, Auth |
| 4 | installation.md | การติดตั้ง - CLI, Docker |
| 5 | configuration.md | การตั้งค่า - config.toml |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดี |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official links และ resources |
| 2 | cli.md | CLI commands |
| 3 | configuration.md | Configuration options reference |
| 4 | api.md | API reference |

## Quick Start

```bash
# Install
npm install -g supabase

# Login
supabase login

# Initialize
supabase init

# Start local dev
supabase start

# Link to project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push

# Generate types
supabase gen types typescript --linked
```
