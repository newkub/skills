---
name: Schema Validation
description: ใช้ schema เป็น single source of truth สำหรับ validation ทั้ง requests และ responses
---

# Schema Validation

## Why

Schema เป็น single source of truth สำหรับทุกอย่างใน Elysia server ตั้งแต่ request validation, type inference, OpenAPI documentation, ไปจนถึง client-server communication การใช้ schema ที่ถูกต้องจะช่วยให้มั่นใจได้ว่าทุกส่วนของ application มี type integrity ที่สมบูรณ์

## What

Schema validation คือการใช้ Elysia schema builder (`Elysia.t`) หรือ Standard Schema (Zod, Valibot, etc.) เพื่อ:

- Validate requests ที่เข้ามา
- Normalize data ให้อยู่ใน format ที่ถูกต้อง
- Infer types โดยอัตโนมัติสำหรับ TypeScript
- Generate OpenAPI documentation โดยอัตโนมัติ

## How

### 1. ใช้ Elysia.t Schema Builder

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

### 2. ใช้ Standard Schema (Zod)

```typescript
import { Elysia } from 'elysia'
import { z } from 'zod'

new Elysia()
  .get('/user/:id', ({ params: { id } }) => id, {
    params: z.object({
      id: z.coerce.number()
    })
  })
  .listen(3000)
```

### 3. Validate Body

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .post('/upload', ({ body: { file } }) => file, {
    body: t.Object({
      file: t.File({ type: 'image' })
    })
  })
  .listen(3000)
```

### 4. Validate Query Parameters

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .get('/search', ({ query: { q, limit } }) => ({ q, limit }), {
    query: t.Object({
      q: t.String(),
      limit: t.Optional(t.Number())
    })
  })
  .listen(3000)
```

## Examples

### Correct Usage

```typescript
// ✅ ใช้ schema สำหรับ validation
new Elysia()
  .post('/users', ({ body: { name, email } }) => {
    return { id: 1, name, email }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: 'email' })
    })
  })
```

### Incorrect Usage

```typescript
// ❌ ไม่ใช้ schema สำหรับ validation
new Elysia()
  .post('/users', ({ body }) => {
    return { id: 1, name: body.name, email: body.email }
  })
```

## Best Practices

1. **ใช้ schema สำหรับทุก request**: params, query, body, headers, cookies
2. **ใช้ schema สำหรับทุก response**: ใช้ `response` schema สำหรับ validation
3. **ใช้ schema ที่เฉพาะเจาะจง**: หลีกเลี่ยงการใช้ `t.Any()` หรือ schema ที่กว้างเกินไป
4. **ใช้ schema ที่ reusable**: สร้าง schema ที่ใช้ซ้ำได้และ export ออกไปใช้ในหลายที่
5. **ใช้ schema ที่ descriptive**: ตั้งชื่อ schema และ fields ให้ชัดเจน

## References

- [Elysia Schema Builder](https://elysiajs.com/essential/schema)
- [Standard Schema Support](https://elysiajs.com/essential/schema#standard-schema)
- [Request Validation](https://elysiajs.com/essential/request-validation)
