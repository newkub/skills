---
name: When to Use
description: คู่มือการเลือกใช้ Elysia ในสถานการณ์ที่เหมาะสม
---

# When to Use Elysia

## Best Use Cases

### 1. TypeScript Backend API

Elysia เหมาะสมที่สุดสำหรับ:
- REST API ที่ต้องการ type safety ทั้ง client และ server
- Microservices ที่ต้องการ performance สูง
- Backend ที่ต้องการ strict typing และ validation

### 2. Full-Stack Applications

เหมาะสำหรับ:
- Applications ที่ใช้ TypeScript ทั้ง frontend และ backend
- ต้องการ share types ระหว่าง client และ server
- ต้องการ type-safe API calls เหมือน tRPC

### 3. High-Performance Services

เหมาะสำหรับ:
- Services ที่ต้องการ performance สูง
- Real-time applications
- High-throughput APIs

## When NOT to Use

### 1. JavaScript-Only Projects

หากคุณไม่ใช้ TypeScript:
- Elysia ถูกออกแบบมาสำหรับ TypeScript
- จะไม่ได้ประโยชน์จาก type safety ทั้งหมด

### 2. Simple Static Sites

หากต้องการ:
- Static content เท่านั้น
- ไม่มี backend logic
- ใช้ framework ที่เหมาะสมกับ static sites แทน

### 3. Non-Bun Runtimes

หากต้องการ:
- Run บน Node.js หรือ runtimes อื่น
- Elysia ถูก optimize สำหรับ Bun เท่านั้น

## Comparison with Other Frameworks

| Framework | Type Safety | Performance | Runtime |
|-----------|-------------|-------------|---------|
| **Elysia** | ✅ End-to-End | ⚡ Highest | Bun only |
| Express | ❌ Manual | 🐢 Lower | Node.js |
| Fastify | ⚠️ Partial | ⚡ High | Node.js |
| tRPC | ✅ End-to-End | 🚀 High | Any |

## Decision Tree

```
START
  │
  ├─→ ใช้ TypeScript หรือไม่?
  │   ├─ NO → USE อื่น (Express, Fastify)
  │   └─ YES → ต่อไป
  │
  ├─→ ต้องการ End-to-End Type Safety หรือไม่?
  │   ├─ NO → USE Express/Fastify
  │   └─ YES → ต่อไป
  │
  ├─→ ใช้ Bun หรือสามารถใช้ Bun ได้หรือไม่?
  │   ├─ NO → USE tRPC
  │   └─ YES → USE Elysia
  │
  END
```
