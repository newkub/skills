# Elysia Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| elysia | Bun-native web framework | `bun add elysia` |

## Type Safety

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/eden | End-to-end type safety | `bun add @elysiajs/eden` |
| @sinclair/typebox | JSON Schema type builder | `bun add @sinclair/typebox` |

## Validation

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/valibot | Valibot validator | `bun add @elysiajs/valibot` |
| @elysiajs/zod | Zod validator | `bun add @elysiajs/zod` |
| @elysiajs/typebox | TypeBox validator | `bun add @elysiajs/typebox` |
| @elysiajs/yup | Yup validator | `bun add @elysiajs/yup` |

## Authentication

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/jwt | JWT authentication | `bun add @elysiajs/jwt` |
| @elysiajs/bearer | Bearer token | `bun add @elysiajs/bearer` |
| @elysiajs/basic-auth | Basic auth | `bun add @elysiajs/basic-auth` |
| @elysiajs/better-auth | Better auth integration | `bun add @elysiajs/better-auth` |
| lucia | Lucia auth | `bun add lucia` |
| arctic | OAuth providers | `bun add arctic` |
| oslo | Auth utilities | `bun add oslo` |

## Database

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/drizzle | Drizzle ORM | `bun add @elysiajs/drizzle` |
| @elysiajs/prisma | Prisma ORM | `bun add @elysiajs/prisma` |
| @elysiajs/better-sqlite3 | Better SQLite3 | `bun add @elysiajs/better-sqlite3` |
| @elysiajs/mongoose | MongoDB | `bun add @elysiajs/mongoose` |
| @elysiajs/redis | Redis | `bun add @elysiajs/redis` |

## Session & Cache

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/server-timing | Server timing | `bun add @elysiajs/server-timing` |
| @elysiajs/cookie | Cookie handling | `bun add @elysiajs/cookie` |
| @elysiajs/html | HTML response | `bun add @elysiajs/html` |
| @elysiajs/stream | Streaming | `bun add @elysiajs/stream` |
| @elysiajs/websocket | WebSocket | `bun add @elysiajs/websocket` |
| @elysiajs/static | Static files | `bun add @elysiajs/static` |
| @elysiajs/swagger | Swagger/OpenAPI | `bun add @elysiajs/swagger` |

## Security

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/cors | CORS | `bun add @elysiajs/cors` |
| @elysiajs/helmet | Security headers | `bun add @elysiajs/helmet` |
| @elysiajs/rate-limit | Rate limiting | `bun add @elysiajs/rate-limit` |
| @elysiajs/ip | IP utilities | `bun add @elysiajs/ip` |
| @elysiajs/compression | Compression | `bun add @elysiajs/compression` |

## Logging & Monitoring

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/opentelemetry | OpenTelemetry | `bun add @elysiajs/opentelemetry` |
| @elysiajs/trace | Tracing | `bun add @bun add @elysiajs/trace` |
| @elysiajs/logger | Logger | `bun add @elysiajs/logger` |
| @elysiajs/apollo | Apollo GraphQL | `bun add @elysiajs/apollo` |

## Testing

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @elysiajs/testing | Elysia testing | `bun add -d @elysiajs/testing` |
| bun:test | Bun built-in test | (built-in) |
| vitest | Unit testing | `bun add -d vitest` |

## คำแนะนำ

| หมวดหมู่ | แนะนำ | เหตุผล |
|---------|-------|--------|
| **Validation** | @elysiajs/valibot | 6x เร็วกว่า Zod, bundle size เล็ก |
| **Auth** | @elysiajs/jwt + Lucia | Modern, type-safe |
| **DB** | Drizzle + @elysiajs/drizzle | SQL-like, type-safe |
| **API Docs** | @elysiajs/swagger | Auto OpenAPI |
| **Type Safety** | @elysiajs/eden | End-to-end types |

## ตัวอย่างการใช้งาน

```typescript
import { Elysia } from 'elysia'
import { valibot } from '@elysiajs/valibot'
import { jwt } from '@elysiajs/jwt'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(jwt({
    secret: process.env.JWT_SECRET
  }))
  .use(valibot())
  .get('/api', () => 'Hello Elysia')
  .listen(3000)
```
