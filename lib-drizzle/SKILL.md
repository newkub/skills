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

- `lang-typescript` - TypeScript programming language
- `lib-nitro` - Nitro framework

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-drizzle/
├── SKILL.md                      # ไฟล์ index หลัก
├── guide/                        # เนื้อหาแนะนำและ best practices
├── key-concepts/                 # แนวคิดสำคัญ (optional)
├── principles/                   # หลักการ (optional)
├── references/                   # เอกสารอ้างอิง
├── workflows/                    # Workflows สำหรับ automation
├── templates/                    # Templates สำหรับเริ่มต้น (optional)
├── scripts/                      # Scripts สำหรับ automation (optional)
└── .devin/                       # Rules และ configurations
    ├── goal.md                  # เป้าหมายของ skill
    ├── scope.md                 # Scope และ execute steps
    ├── execute.md               # Execute steps ทั้งหมด
    ├── expected.md              # Expected outcome
    ├── rules/
    │   ├── always-on/           # Structure files ที่ต้องมีเสมอ
    │   │   └── structure-lib.md
    │   ├── glob/                # Files ที่ใช้ glob patterns
    │   └── model_decision/      # Template files สำหรับ model decision
    └── workflows/               # Workflow files สำหรับ task automation
```

## หมวดหมู่ไฟล์


## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | Core concepts: schema, queries, relations, migrations, SQL-like API |
| 2 | how-it-works.md | Internal workings: query flow, migration pipeline, relation loading |
| 3 | features.md | All features: CRUD, relations, transactions, indexes, enums, views |
| 4 | installation.md | Installation for drizzle-orm, drizzle-kit, and database drivers |
| 5 | configuration.md | drizzle.config.ts setup for all dialects and credentials |
| 6 | quick-start.md | Step-by-step guide from install to first query and migration |
| 7 | best-practices.md | Schema organization, type safety, query patterns, performance |
| 8 | integration.md | Integration with Next.js, Hono, Express, Zod, tRPC, serverless |
| 9 | architecture.md | Core architecture layers, dialects, drivers, Drizzle Kit |
| 10 | structure.md | โครงสร้างโปรเจกต์ Drizzle |
| 11 | performance.md | เทคนิคการปรับปรุง performance |
| 12 | security.md | ความปลอดภัยและ security considerations |
| 13 | migration.md | วิธี migration จาก ORMs อื่นๆ |
| 14 | ecosystem.md | Ecosystem และ integrations |
| 15 | testing.md | การทดสอบ Drizzle applications |
| 16 | patterns.md | Patterns ที่ใช้บ่อย |
| 17 | troubleshooting.md | การแก้ปัญหาที่พบบ่อย |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official links: docs, GitHub, npm, Discord, community resources |
| 2 | sitemap.md | แผนผังเอกสารและทรัพยากรที่เกี่ยวข้อง |
| 3 | api.md | Query methods, schema helpers, operators, relations API, aggregation |
| 4 | cli.md | Drizzle Kit CLI commands: generate, push, pull, studio, check, drop |
| 5 | configuration.md | drizzle.config.ts options, dialect credentials, SSL, environment |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | schema-definition.md | Schema definitions และ TypeScript types |
| 2 | query-builder.md | Query builder API และ operations |
| 3 | migrations.md | Database migrations และ version control |
| 4 | relations.md | Table relations และ relationships |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | type-safety.md | Type safety principle และ TypeScript support |
| 2 | sql-like-syntax.md | SQL-like syntax principle และ familiar patterns |