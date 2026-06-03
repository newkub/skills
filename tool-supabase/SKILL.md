# tool-supabase

แนวทางการใช้งาน Supabase CLI - Open source Firebase alternative สำหรับ build applications

## Overview

Supabase เป็น open source Firebase alternative ที่ใช้ PostgreSQL ให้ database, authentication, storage, edge functions, realtime subscriptions, และ vector embeddings CLI ช่วยให้ develop ท้องถิ่นและ deploy ไปยัง Supabase Platform ได้

## File Structure

```
tool-supabase/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - Postgres, Auth, Storage |
| **Guide** | how-it-works.md | การทำงาน - Local dev stack |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - Database, Auth |
| **Guide** | installation.md | การติดตั้ง - CLI, Docker |
| **Guide** | configuration.md | การตั้งค่า - config.toml |
| **Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | website.md | Official links และ resources |
| **Reference** | cli.md | CLI commands |
| **Reference** | configuration.md | Configuration options reference |
| **Reference** | api.md | API reference |

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

## Key Features

| Feature | Description |
|---------|-------------|
| **PostgreSQL** | Full-featured Postgres database |
| **Auth** | Row-level security (RLS) |
| **Storage** | File storage with buckets |
| **Realtime** | Live subscriptions |
| **Edge Functions** | Serverless functions |
| **Vector** | pgvector for embeddings |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/key-concept.md`
2. **Learn**: `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md` → `references/api.md`
5. **Best Practices**: `guide/best-practices.md`