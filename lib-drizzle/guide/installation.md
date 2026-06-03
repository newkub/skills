# Installation

## Purpose

แนะนำการติดตั้ง Drizzle ORM และ Drizzle Kit พร้อม database drivers

## Scope

- Drizzle ORM (runtime library)
- Drizzle Kit (CLI & migration tool)
- Database Drivers (pg, mysql2, better-sqlite3)
- TypeScript Configuration

## Packages Overview

| Package | คำอธิบาย | จำเป็น |
|---------|----------|--------|
| **drizzle-orm** | ORM library หลัก | ใช่ |
| **drizzle-kit** | CLI สำหรับ migrations และ studio | ใช่ (dev) |
| **pg** | PostgreSQL driver | สำหรับ PostgreSQL |
| **mysql2** | MySQL driver | สำหรับ MySQL |
| **better-sqlite3** | SQLite driver | สำหรับ SQLite |

## Install Drizzle ORM

### npm

```bash
npm install drizzle-orm
npm install -D drizzle-kit
```

### yarn

```bash
yarn add drizzle-orm
yarn add -D drizzle-kit
```

### pnpm

```bash
pnpm add drizzle-orm
pnpm add -D drizzle-kit
```

### bun

```bash
bun add drizzle-orm
bun add -D drizzle-kit
```

## Install Database Driver

เลือก driver ตาม database ที่ใช้งาน:

### PostgreSQL

```bash
# Node.js
npm install pg
npm install -D @types/pg

# Bun (built-in)
bun add drizzle-orm
```

### MySQL

```bash
npm install mysql2
```

### SQLite

```bash
# Node.js
npm install better-sqlite3
npm install -D @types/better-sqlite3

# Bun (built-in)
bun add better-sqlite3
```

### Serverless Drivers

```bash
# Neon (serverless PostgreSQL)
npm install @neondatabase/serverless

# PlanetScale (serverless MySQL)
npm install @planetscale/database

# Vercel Postgres
npm install @vercel/postgres

# Turso (serverless SQLite)
npm install @libsql/client
```

## TypeScript Configuration

เพิ่ม compiler options ใน `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "bundler"
  }
}
```

| Option | คำอธิบาย | จำเป็น |
|--------|----------|--------|
| `strict` | เปิด strict mode สำหรับ type safety | แนะนำ |
| `esModuleInterop` | รองรับ ES module imports | แนะนำ |
| `skipLibCheck` | ข้าม type checking ของ `.d.ts` | แนะนำ |
| `moduleResolution` | ใช้ `bundler` สำหรับ modern bundlers | แนะนำ |

## Verify Installation

```typescript
import { drizzle } from 'drizzle-orm/node-postgres'
import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
})

console.log('Drizzle ORM installed successfully!')
```

## Summary

| ขั้นตอน | Command |
|---------|---------|
| **Install ORM** | `npm install drizzle-orm` |
| **Install Kit** | `npm install -D drizzle-kit` |
| **Install Driver** | `npm install pg` (หรือ mysql2, better-sqlite3) |
| **Config TS** | เพิ่ม `strict: true` ใน tsconfig.json |
