---
name: Features
description: รายการฟีเจอร์และความสามารถของ Elysia
---

# Features

## Core Features

### 1. End-to-End Type Safety

- **Runtime Validation**: Validate requests ตาม schema โดยอัตโนมัติ
- **Compile-Time Type Safety**: Infer types จาก schema โดยอัตโนมัติ
- **Type-Safe API Calls**: Share types ระหว่าง client และ server

### 2. Schema as Single Source of Truth

- **Request Validation**: Validate params, query, body, headers, cookies
- **Response Typing**: Type-safe responses
- **OpenAPI Documentation**: Generate API docs จาก schema โดยอัตโนมัติ
- **Client-Server Communication**: Type-safe communication คล้าย tRPC

### 3. Performance

- **Optimized for Bun**: Static code analysis และ optimized code generation
- **Minimal Overhead**: Validation ที่มี overhead ต่ำ
- **Outperform Frameworks**: Match performance ของ Golang และ Rust frameworks

### 4. Developer Experience

- **Write Less TypeScript**: Framework จัดการ complex types ให้
- **Focus on Business Logic**: ไม่ต้องกังวลเรื่อง types
- **Ergonomic Design**: Intuitive API และ great DX

## Advanced Features

### 5. Standard Schema Support

รองรับ validation libraries ที่คุณชอบ:

- Zod
- Valibot
- ArkType
- Effect Schema
- Yup
- Joi
- และอื่นๆ

### 6. OpenAPI Support

- **Auto-Generate**: Generate OpenAPI documentation จาก schema
- **Swagger UI**: Explore APIs ด้วย Swagger UI
- **Keep Updated**: Documentation ถูกต้องและเป็นปัจจุบันเสมอ

### 7. Plugin System

- **Modular**: Plugins สำหรับฟีเจอร์เพิ่มเติม
- **Type-Safe**: Plugins ที่มี type safety
- **Extensible**: สร้าง custom plugins ได้

### 8. Eden Treaty

- **Type-Safe Client**: Type-safe client สำหรับ API calls
- **Auto-Completion**: Auto-completion ทั้ง client และ server
- **Multiple Status**: Handle multiple HTTP status ด้วย discriminated union

## Ecosystem

### Official Plugins

- `@elysiajs/openapi` - OpenAPI documentation
- `@elysiajs/swagger` - Swagger UI
- `@elysiajs/eden` - Type-safe client
- `@elysiajs/cors` - CORS support
- `@elysiajs/jwt` - JWT authentication
- `@elysiajs/cookie` - Cookie management
- `@elysiajs/session` - Session management
- และอื่นๆ

### Community Plugins

- Plugins จาก community
- Third-party integrations
- Custom solutions

## Use Cases

- **REST APIs**: Type-safe REST APIs
- **Microservices**: High-performance microservices
- **Full-Stack**: TypeScript full-stack applications
- **Real-Time**: Real-time applications
- **GraphQL**: GraphQL integrations
