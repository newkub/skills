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
2. ตั้งค่า schema validation
3. ตั้งค่า type safety ด้วย Elysia.t
4. เปิดใช้ OpenAPI documentation
5. รัน `bun dev` เพื่อเริ่มการพัฒนา

## Rules

| Priority | Impact | Reference | Name | Description | Prefix | Condition |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `CRITICAL` | Schema Validation | ใช้ schema เป็น single source of truth สำหรับ validation | `elysia-` | เมื่อต้องการ validate requests/responses |  |
| 2 | `HIGH` | Type Safety | ใช้ Elysia.t สำหรับ type safety ทั้ง runtime และ compile time | `elysia-` | เมื่อต้องการ strict typing |  |
| 3 | `HIGH` | OpenAPI Documentation | เปิดใช้ OpenAPI plugin สำหรับ auto-documentation | `elysia-` | เมื่อต้องการ API documentation |  |
| 4 | `MEDIUM` | Client-Server Communication | ใช้ Eden Treaty สำหรับ type-safe client-server communication | `elysia-` | เมื่อต้องการ share types ระหว่าง client และ server |  |

## Knowledge

| Reference | Name | Description | Prefix |
| :--- | :--- | :--- | :--- |
| Core Concepts | Core Concepts | ความรู้เกี่ยวกับ concepts หลักของ Elysia | `elysia-` |
| All Features | All Features | ความรู้เกี่ยวกับฟีเจอร์ทั้งหมดของ Elysia | `elysia-` |
| Best Practices | Best Practices | แนวทางปฏิบัติที่ดีที่สุดสำหรับ Elysia | `elysia-` |

## References

- [Official Documentation](https://elysiajs.com/)
- [GitHub Repository](https://github.com/elysiajs/elysia)
- [Quick Start Guide](https://elysiajs.com/quick-start)
- [At a Glance](https://elysiajs.com/at-glance)
