---
name: lib-elysia
description: แนวทางการพัฒนา Elysia ตาม best practices สำหรับ ergonomic web framework สำหรับ Bun ที่มี type-safe, high performance และ plugin system
---

# lib-elysia

## When to use

- เมื่อต้องการสร้าง web applications ด้วย Bun runtime
- เมื่อต้องการ type-safe ตั้งแต่ server ถึง client
- เมื่อต้องการ performance สูงด้วย minimal overhead
- เมื่อต้องการ ergonomic API ที่เขียนง่าย
- เมื่อต้องการ plugin system ที่ flexible
- เมื่อต้องการ validation ด้วย TypeBox schemas
- เมื่อต้องการ WebSocket support แบบ native

## Skills Related

- `runtime-bun` - Bun runtime สำหรับ run Elysia
- `lib-effect-ts` - Effect programming patterns
- `lib-zod` - Schema validation alternatives
- `lib-drizzle` - Database ORM integration
- `cloud-vercel` - Deployment บน Vercel
- `cloud-cloudflare` - Deployment บน Cloudflare Workers

## โครงสร้าง Directory

โครงสร้างโฟลเดอร์สำหรับ Library Skills

```
lib-elysia/
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

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | [installation.md](guide/installation.md) | วิธีติดตั้งและ setup Elysia |
| 2 | [key-concept.md](guide/key-concept.md) | Concepts หลัก: Routing, Plugin, Lifecycle, Validation, Type Safety |
| 3 | [how-it-works.md](guide/how-it-works.md) | Request lifecycle, plugin composition, type inference |
| 4 | [features.md](guide/features.md) | Features ทั้งหมด: Routing, Validation, WebSocket, Eden Treaty |
| 5 | [configuration.md](guide/configuration.md) | Server options, context extension, plugins |
| 6 | [quick-start.md](guide/quick-start.md) | Quick start guide จาก install ถึง REST API |
| 7 | [best-practices.md](guide/best-practices.md) | Code organization, performance, security, error handling |
| 8 | [integration.md](guide/integration.md) | Database, auth, frontend, deployment integration |
| 9 | [architecture.md](guide/architecture.md) | Framework architecture และ project structure |
| 10 | [structure.md](guide/structure.md) | โครงสร้างโปรเจกต์ที่เหมาะสม |
| 11 | [performance.md](guide/performance.md) | Performance optimization และ benchmarks |
| 12 | [security.md](guide/security.md) | Security best practices และ vulnerability prevention |
| 13 | [migration.md](guide/migration.md) | Migration จาก frameworks อื่น (Express, Fastify, Hono) |
| 14 | [ecosystem.md](guide/ecosystem.md) | Ecosystem: plugins, tools, community resources |
| 15 | [testing.md](guide/testing.md) | Testing strategies และ tools |
| 16 | [patterns.md](guide/patterns.md) | Design patterns สำหรับ Elysia |
| 17 | [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหาที่พบบบ่อย |

### key-concepts/

| No | File | Description |
|----|------|-------------|
| 1 | [routing.md](key-concepts/routing.md) | ระบบ routing ด้วย Trie tree |
| 2 | [plugins.md](key-concepts/plugins.md) | Plugin system สำหรับ reusable logic |
| 3 | [lifecycle.md](key-concepts/lifecycle.md) | Request lifecycle hooks |
| 4 | [validation.md](key-concepts/validation.md) | Validation ด้วย TypeBox schemas |
| 5 | [type-safety.md](key-concepts/type-safety.md) | Type safety ด้วย TypeScript และ Eden Treaty |

### principles/

| No | File | Description |
|----|------|-------------|
| 1 | [ergonomic-design.md](principles/ergonomic-design.md) | หลักการ ergonomic design |
| 2 | [performance-first.md](principles/performance-first.md) | หลักการ performance first |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | [website.md](references/website.md) | Official documentation links |
| 2 | [sitemap.md](references/sitemap.md) | โครงสร้าง documentation |
| 3 | [api.md](references/api.md) | API reference ครบถ้วน |
| 4 | [cli.md](references/cli.md) | Bun CLI commands สำหรับ Elysia |
| 5 | [configuration.md](references/configuration.md) | Full configuration reference |

### workflows/

| No | File | Description |
|----|------|-------------|
| 1 | [setup-elysia.md](workflows/setup-elysia.md) | ติดตั้งและ setup Elysia project ใหม่ |
| 2 | [use-elysia.md](workflows/use-elysia.md) | การใช้งาน Elysia พื้นฐาน |
| 3 | [create-plugin.md](workflows/create-plugin.md) | สร้าง custom plugin |
| 4 | [deploy-elysia.md](workflows/deploy-elysia.md) | Deployment ไปยัง platforms ต่างๆ |

## Quick Reference

### Basic Server

```typescript
import { Elysia } from 'elysia'

new Elysia()
  .get('/', () => 'Hello')
  .listen(3000)
```

### With Validation

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .post('/user', ({ body }) => body, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
    })
  })
```

### With Plugin

```typescript
import { cors } from '@elysia/cors'

new Elysia()
  .use(cors())
  .get('/', () => 'Hello')
  .listen(3000)
```