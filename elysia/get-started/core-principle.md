---
name: Core Principles
description: หลักการสำคัญของ Elysia
---

# Core Principles

## Schema as Single Source of Truth

Elysia ใช้ schema เป็นแหล่งข้อมูลเดียวสำหรับทุกอย่างใน server:

- **Request Validation**: Validate params, query, body, headers, cookies ตาม schema
- **Response Typing**: Type-safe responses ที่ถูก infer จาก schema
- **OpenAPI Documentation**: Generate API docs จาก schema โดยอัตโนมัติ
- **Client-Server Communication**: Share types ระหว่าง client และ server

## End-to-End Type Safety

Elysia มั่นใจได้ว่า types ถูกต้องทั้ง runtime และ compile time:

- **Runtime Validation**: Validate requests ตาม schema โดยอัตโนมัติ
- **Compile-Time Type Safety**: Infer types จาก schema โดยอัตโนมัติ
- **Type-Safe API Calls**: Share types ระหว่าง client และ server

## Performance First

Elysia ถูก optimize สำหรับ Bun:

- **Static Code Analysis**: Analyze code ที่ compile time
- **Optimized Code Generation**: Generate code ที่มีประสิทธิภาพ
- **Minimal Overhead**: Validation ที่มี overhead ต่ำ
- **Outperform Frameworks**: Match performance ของ Golang และ Rust frameworks

## Developer Experience

Elysia มุ่งเน้นที่ DX:

- **Write Less TypeScript**: Framework จัดการ complex types ให้
- **Focus on Business Logic**: ไม่ต้องกังวลเรื่อง types
- **Ergonomic Design**: Intuitive API และ great DX
- **Auto-Completion**: Auto-completion ทั้ง client และ server

## Standard Schema Support

Elysia รองรับ validation libraries ที่คุณชอบ:

- Zod
- Valibot
- ArkType
- Effect Schema
- Yup
- Joi
- และอื่นๆ

## Plugin System

Elysia มี plugin system ที่ type-safe:

- **Modular**: Plugins สำหรับฟีเจอร์เพิ่มเติม
- **Type-Safe**: Plugins ที่มี type safety
- **Extensible**: สร้าง custom plugins ได้
