# Drizzle Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| drizzle-orm | TypeScript ORM | `bun add drizzle-orm` |
| drizzle-kit | CLI สำหรับ migrations | `bun add -d drizzle-kit` |
| drizzle-zod | Zod integration | `bun add drizzle-zod` |
| drizzle-valibot | Valibot integration | `bun add drizzle-valibot` |

## Database Drivers

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @libsql/client | Turso/LibSQL | `bun add @libsql/client` |
| better-sqlite3 | SQLite (sync) | `bun add better-sqlite3` |
| bun:sqlite | Bun SQLite (native) | (built-in) |
| pg | PostgreSQL | `bun add pg` |
| postgres | PostgreSQL (modern) | `bun add postgres` |
| mysql2 | MySQL | `bun add mysql2` |
| @planetscale/database | PlanetScale | `bun add @planetscale/database` |
| @vercel/postgres | Vercel Postgres | `bun add @vercel/postgres` |

## Extensions & Tools

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| drizzle-cuid2 | CUID2 generator | `bun add drizzle-cuid2` |
| drizzle-seed | Database seeding | `bun add drizzle-seed` |
| drizzle-orm-pg | PostgreSQL helpers | `bun add drizzle-orm-pg` |
| drizzle-orm-proxy | Proxy queries | `bun add drizzle-orm-proxy` |

## Integration

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/drizzle | Elysia integration | `bun add @elysiajs/drizzle` |
| trpc-drizzle | tRPC integration | `bun add trpc-drizzle` |
| next-drizzle | Next.js integration | `bun add next-drizzle` |

## Migration Tools

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| drizzle-kit | Migrations & introspection | `bun add -d drizzle-kit` |
| drizzle-seed | Seeding | `bun add drizzle-seed` |

## การตั้งค่า

### drizzle.config.ts

```typescript
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite', // หรือ 'postgresql', 'mysql'
  dbCredentials: {
    url: process.env.DATABASE_URL
  }
})
```

### ตัวอย่าง Schema

```typescript
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { createId } from '@paralleldrive/cuid2'

export const users = sqliteTable('users', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
})
```

## คำแนะนำ

| ฐานข้อมูล | แนะนำ | เหตุผล |
|---------|-------|--------|
| **SQLite** | bun:sqlite | Native, fastest |
| **Edge** | @libsql/client | Turso, global edge |
| **Postgres** | postgres | Modern, fast |
| **MySQL** | mysql2 | Most popular |
| **Serverless** | @vercel/postgres | Vercel optimized |

## คำสั่ง CLI

```bash
# Generate migrations
bun drizzle-kit generate

# Push schema to database
bun drizzle-kit push

# Introspect existing database
bun drizzle-kit introspect

# Studio (GUI)
bun drizzle-kit studio

# Check
bun drizzle-kit check
```
