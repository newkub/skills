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


## References


## โครงสร้าง Directory

```text
lib-drizzle/
├── SKILL.md
├── 
│   ├── guide/
│   │   ├── update-key-concept.md
│   │   ├── update-how-it-works.md
│   │   ├── update-features.md
│   │   ├── update-installation.md
│   │   ├── update-configuration.md
│   │   ├── update-quick-start.md
│   │   ├── update-best-practices.md
│   │   ├── update-integration.md
│   │   ├── update-architecture.md
│   │   ├── update-structure.md
│   │   ├── update-performance.md
│   │   ├── update-security.md
│   │   ├── update-migration.md
│   │   ├── update-ecosystem.md
│   │   ├── update-testing.md
│   │   ├── update-patterns.md
│   │   └── update-troubleshooting.md
│   ├── key-concepts/
│   │   ├── schema-definition.md
│   │   ├── query-builder.md
│   │   ├── migrations.md
│   │   └── relations.md
│   └── principles/
│       ├── type-safety.md
│       └── sql-like-syntax.md
└── references/
    ├── update-website.md
    ├── update-sitemap.md
    ├── update-api.md
    ├── update-cli.md
    └── update-configuration.md
```

## หมวดหมู่ไฟล์

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | update-key-concept.md | Core concepts: schema, queries, relations, migrations, SQL-like API |
| 2 | update-how-it-works.md | Internal workings: query flow, migration pipeline, relation loading |
| 3 | update-features.md | All features: CRUD, relations, transactions, indexes, enums, views |
| 4 | update-installation.md | Installation for drizzle-orm, drizzle-kit, and database drivers |
| 5 | update-configuration.md | drizzle.config.ts setup for all dialects and credentials |
| 6 | update-quick-start.md | Step-by-step guide from install to first query and migration |
| 7 | update-best-practices.md | Schema organization, type safety, query patterns, performance |
| 8 | update-integration.md | Integration with Next.js, Hono, Express, Zod, tRPC, serverless |
| 9 | update-architecture.md | Core architecture layers, dialects, drivers, Drizzle Kit |
| 10 | update-structure.md | โครงสร้างโปรเจกต์ Drizzle |
| 11 | update-performance.md | เทคนิคการปรับปรุง performance |
| 12 | update-security.md | ความปลอดภัยและ security considerations |
| 13 | update-migration.md | วิธี migration จาก ORMs อื่นๆ |
| 14 | update-ecosystem.md | Ecosystem และ integrations |
| 15 | update-testing.md | การทดสอบ Drizzle applications |
| 16 | update-patterns.md | Patterns ที่ใช้บ่อย |
| 17 | update-troubleshooting.md | การแก้ปัญหาที่พบบ่อย |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | update-website.md | Official links: docs, GitHub, npm, Discord, community resources |
| 2 | update-sitemap.md | แผนผังเอกสารและทรัพยากรที่เกี่ยวข้อง |
| 3 | update-api.md | Query methods, schema helpers, operators, relations API, aggregation |
| 4 | update-cli.md | Drizzle Kit CLI commands: generate, push, pull, studio, check, drop |
| 5 | update-configuration.md | drizzle.config.ts options, dialect credentials, SSL, environment |

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