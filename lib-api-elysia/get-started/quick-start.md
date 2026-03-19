---
name: Getting Started
description: คู่มือเริ่มต้นใช้งาน Elysia
---

# Getting Started

## Prerequisites

- **Bun**: Elysia ถูก optimize สำหรับ Bun
- **TypeScript**: เพื่อใช้ประโยชน์จาก type safety ทั้งหมด

## Installation

### สร้าง Project ใหม่

```bash
bun create elysia app
cd app
```

### ติดตั้งใน Project ที่มีอยู่

```bash
bun add elysia
```

## Quick Start

### Basic Server

```typescript
import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .listen(3000)

console.log(`🦊 Elysia is running at http://localhost:${app.server?.port}`)
```

### Run Development Server

```bash
bun run dev
```

## Project Structure

```text
elysia-app/
├── src/
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Next Steps

- เรียนรู้เกี่ยวกับ [Schema Validation](./rules/1-elysia-schema-validation.md)
- ดู [Core Concepts](./knowledge/elysia-concepts.md)
- ศึกษา [Design Patterns](./knowledge/elysia-patterns.md)
