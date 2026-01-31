---
name: Elysia
description: TypeScript backend framework for Bun with end-to-end type safety
---

# Elysia

Elysia เป็น TypeScript backend framework ที่ออกแบบมาเพื่อ Bun โดยมีจุดเด่นคือ end-to-end type safety, performance ที่ดีเยี่ยม และ developer experience ที่ยอดเยี่ยม

## Overview

Elysia เป็น framework ที่ใช้ schema เป็น single source of truth สำหรับทุกอย่างใน server ตั้งแต่ request validation, type inference, OpenAPI documentation, ไปจนถึง client-server communication ทำให้มั่นใจได้ว่าทุกส่วนของ Elysia ถูกออกแบบมาเพื่อ type integrity ที่สมบูรณ์

### Key Features

- **End-to-End Type Safety**: มั่นใจได้ว่า types ถูกต้องทั้ง runtime และ compile time
- **Schema as Single Source of Truth**: ใช้ schema เป็นแหล่งข้อมูลเดียวสำหรับทุกอย่าง
- **Request Validation**: Validate และ normalize requests ตาม schema โดยอัตโนมัติ
- **Advance Type Inference**: Infer types จาก schema โดยอัตโนมัติ พร้อม auto-completion
- **Client-Server Communication**: Share types ระหว่าง client และ server คล้าย tRPC
- **OpenAPI Documentation**: Generate OpenAPI docs จาก schema ใน 1 บรรทัด
- **Standard Schema Support**: รองรับ Zod, Valibot, ArkType, Effect Schema, Yup, Joi และอื่นๆ

## Quick Start

```bash
bun create elysia app
cd app
bun dev
```

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | CRITICAL | 1-elysia-schema-validation.md | Schema Validation | ใช้ schema เป็น single source of truth สำหรับ validation | elysia- | เมื่อต้องการ validate requests/responses |
| 2 | HIGH | 2-elysia-type-safety.md | Type Safety | ใช้ Elysia.t สำหรับ type safety ทั้ง runtime และ compile time | elysia- | เมื่อต้องการ strict typing |
| 3 | HIGH | 3-elysia-openapi.md | OpenAPI Documentation | เปิดใช้ OpenAPI plugin สำหรับ auto-documentation | elysia- | เมื่อต้องการ API documentation |
| 4 | MEDIUM | 4-elysia-client-server.md | Client-Server Communication | ใช้ Eden Treaty สำหรับ type-safe client-server communication | elysia- | เมื่อต้องการ share types ระหว่าง client และ server |

## Templates

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| elysia-app-template.md | Elysia App Template | Template สำหรับสร้าง Elysia app พื้นฐาน | elysia- |

## Additional Files

| File | Description |
| :--- | :--- |
| when-to-use.md | คู่มือการเลือกใช้ Elysia ในสถานการณ์ที่เหมาะสม |

## File Structure

```
elysia/
├── rules/
│   ├── 1-elysia-schema-validation.md
│   ├── 2-elysia-type-safety.md
│   ├── 3-elysia-openapi.md
│   └── 4-elysia-client-server.md
├── get-started/
│   ├── quick-start.md
│   ├── features.md
│   ├── core-principle.md
│   └── cli.md
├── templates/
│   └── elysia-app-template.md
├── when-to-use.md
└── SKILL.md
```

## Examples

### Basic Route with Type Safety

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number()
    })
  })
  .listen(3000)
```

### Request Validation

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .put('/', ({ body: { file } }) => file, {
    body: t.Object({
      file: t.File({ type: 'image' })
    })
  })
  .listen(3000)
```

### OpenAPI Documentation

```typescript
import { Elysia } from 'elysia'
import { openapi } from '@elysiajs/openapi'

new Elysia()
  .use(openapi())
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number()
    })
  })
  .listen(3000)
```

### Client-Server Communication

```typescript
import { treaty } from '@elysiajs/eden'
import type { App } from 'server'

const api = treaty<App>('api.elysiajs.com')
const { data } = await api.profile.patch({ age: 21 })
```

## References

- [Official Documentation](https://elysiajs.com/)
- [GitHub Repository](https://github.com/elysiajs/elysia)
- [Quick Start Guide](https://elysiajs.com/quick-start)
- [At a Glance](https://elysiajs.com/at-glance)
