---
name: lib-drizzle
description: แนวทางการพัฒนา Drizzle ORM ตาม best practices สำหรับ TypeScript database ORM ที่มี type safety, SQL-like API และรองรับหลาย database (PostgreSQL, MySQL, SQLite)
---

## When to use

- เมื่อต้องการ TypeScript database ORM
- เมื่อต้องการ type-safe database operations
- เมื่อต้องการ SQL-like API
- เมื่อต้องการรองรับหลาย database (PostgreSQL, MySQL, SQLite)

## Skills Related

- `/lang-typescript` - TypeScript programming language
- `/lib-nitro` - Nitro framework

## หมวดหมู่ไฟล์

### knowledge/guide/

| File | Description | Level |
|------|-------------|-------|
| update-key-concept.md | Core concepts: schema, queries, relations, migrations, SQL-like API | Basic |
| update-how-it-works.md | Internal workings: query flow, migration pipeline, relation loading | Basic |
| update-features.md | All features: CRUD, relations, transactions, indexes, enums, views | Basic |
| update-installation.md | Installation for drizzle-orm, drizzle-kit, and database drivers | Basic |
| update-configuration.md | drizzle.config.ts setup for all dialects and credentials | Basic |
| update-quick-start.md | Step-by-step guide from install to first query and migration | Basic |
| update-best-practices.md | Schema organization, type safety, query patterns, performance | Intermediate |
| update-integration.md | Integration with Next.js, Hono, Express, Zod, tRPC, serverless | Intermediate |
| update-architecture.md | Core architecture layers, dialects, drivers, Drizzle Kit | Intermediate |

### references/

| File | Description | Language |
|------|-------------|----------|
| update-api.md | Query methods, schema helpers, operators, relations API, aggregation | English |
| update-cli.md | Drizzle Kit CLI commands: generate, push, pull, studio, check, drop | English |
| update-configuration.md | drizzle.config.ts options, dialect credentials, SSL, environment | English |
| update-website.md | Official links: docs, GitHub, npm, Discord, community resources | English |