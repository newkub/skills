# lib-drizzle

## Overview

แนวทางการพัฒนา Drizzle ORM ตาม best practices สำหรับ TypeScript database ORM ที่มี type safety, SQL-like API และรองรับหลาย database (PostgreSQL, MySQL, SQLite)

## File Index

### guide/

| File | Description | Level |
|------|-------------|-------|
| key-concept.md | Core concepts: schema, queries, relations, migrations, SQL-like API | Basic |
| how-it-works.md | Internal workings: query flow, migration pipeline, relation loading | Basic |
| features.md | All features: CRUD, relations, transactions, indexes, enums, views | Basic |
| installation.md | Installation for drizzle-orm, drizzle-kit, and database drivers | Basic |
| configuration.md | drizzle.config.ts setup for all dialects and credentials | Basic |
| quick-start.md | Step-by-step guide from install to first query and migration | Basic |
| best-practices.md | Schema organization, type safety, query patterns, performance | Intermediate |
| integration.md | Integration with Next.js, Hono, Express, Zod, tRPC, serverless | Intermediate |
| architecture.md | Core architecture layers, dialects, drivers, Drizzle Kit | Intermediate |

### references/

| File | Description | Language |
|------|-------------|----------|
| api.md | Query methods, schema helpers, operators, relations API, aggregation | English |
| cli.md | Drizzle Kit CLI commands: generate, push, pull, studio, check, drop | English |
| configuration.md | drizzle.config.ts options, dialect credentials, SSL, environment | English |
| website.md | Official links: docs, GitHub, npm, Discord, community resources | English |