---
name: elysia
description: TypeScript backend framework for Bun with end-to-end type safety
goal: พัฒนา backend ด้วย Elysia ตาม best practices
outcome: Backend มี type safety และคุณภาพตามมาตรฐาน
---

# Elysia

## When to Apply

ใช้ Skill นี้เมื่อพัฒนา backend ด้วย Elysia

- เมื่อต้องการ validate requests/responses
- เมื่อต้องการ strict typing
- เมื่อต้องการ API documentation
- เมื่อต้องการ share types ระหว่าง client และ server

## Quick Start

1. สร้างโปรเจกต์ Elysia ใหม่ด้วย `bun create elysia app`
2. ตั้งค่า schema validation ตาม [1-elysia-schema-validation.md](./rules/1-elysia-schema-validation.md)
3. ตั้งค่า type safety ด้วย Elysia.t ตาม [2-elysia-type-safety.md](./rules/2-elysia-type-safety.md)
4. เปิดใช้ OpenAPI documentation ตาม [3-elysia-openapi.md](./rules/3-elysia-openapi.md)
5. รัน `bun dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | [1-elysia-schema-validation.md](./rules/1-elysia-schema-validation.md) | Schema Validation | ใช้ schema เป็น single source of truth สำหรับ validation | `elysia-` | เมื่อต้องการ validate requests/responses |
| 2 | `HIGH` | [2-elysia-type-safety.md](./rules/2-elysia-type-safety.md) | Type Safety | ใช้ Elysia.t สำหรับ type safety ทั้ง runtime และ compile time | `elysia-` | เมื่อต้องการ strict typing |
| 3 | `HIGH` | [3-elysia-openapi.md](./rules/3-elysia-openapi.md) | OpenAPI Documentation | เปิดใช้ OpenAPI plugin สำหรับ auto-documentation | `elysia-` | เมื่อต้องการ API documentation |
| 4 | `MEDIUM` | [4-elysia-client-server.md](./rules/4-elysia-client-server.md) | Client-Server Communication | ใช้ Eden Treaty สำหรับ type-safe client-server communication | `elysia-` | เมื่อต้องการ share types ระหว่าง client และ server |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| [core-concept.md](./knowledge/core-concept.md) | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Elysia | `elysia-` |
| [all-features.md](./knowledge/all-features.md) | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Elysia | `elysia-` |
| [best-practices.md](./knowledge/best-practices.md) | Best Practices | แนวทางปฏิบัติที่ดีที่สุดสำหรับ Elysia | `elysia-` |

## References

- [Official Documentation](https://elysiajs.com/)
- [GitHub Repository](https://github.com/elysiajs/elysia)
- [Quick Start Guide](https://elysiajs.com/quick-start)
- [At a Glance](https://elysiajs.com/at-glance)
