---
name: OpenAPI Documentation
description: เปิดใช้ OpenAPI plugin สำหรับ auto-documentation
---

# OpenAPI Documentation

## Why

Elysia รองรับ OpenAPI โดย default ทำให้ generate API documentation เป็นเรื่องง่ายเพียงเพิ่ม plugin เดียว การมี API documentation ที่ถูกต้องและเป็นปัจจุบันช่วยให้:
- Team members เข้าใจ API ได้ง่ายขึ้น
- Generate client SDKs ได้อัตโนมัติ
- Test APIs ได้ง่ายขึ้น
- Maintain API consistency

## What

OpenAPI Documentation คือการใช้ `@elysiajs/openapi` plugin เพื่อ:
- Generate OpenAPI documentation จาก schema โดยอัตโนมัติ
- Provide Swagger UI สำหรับ explore APIs
- Generate API documentation ที่ถูกต้องและเป็นปัจจุบันเสมอ

## How

### 1. เปิดใช้ OpenAPI Plugin

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

### 2. Configure OpenAPI

```typescript
import { Elysia } from 'elysia'
import { openapi } from '@elysiajs/openapi'

new Elysia()
  .use(openapi({
    documentation: {
      info: {
        title: 'My API',
        version: '1.0.0'
      },
      tags: [
        { name: 'users', description: 'User endpoints' }
      ]
    }
  }))
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number()
    })
  })
  .listen(3000)
```

### 3. Access Swagger UI

เมื่อเปิดใช้ OpenAPI plugin คุณสามารถ access Swagger UI ได้ที่:
- `http://localhost:3000/swagger`
- `http://localhost:3000/docs`

### 4. Download OpenAPI Spec

คุณสามารถ download OpenAPI spec ได้ที่:
- `http://localhost:3000/swagger/json`
- `http://localhost:3000/swagger/yaml`

## Examples

### Correct Usage

```typescript
// ✅ เปิดใช้ OpenAPI plugin
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

### Incorrect Usage

```typescript
// ❌ ไม่เปิดใช้ OpenAPI plugin
import { Elysia } from 'elysia'

new Elysia()
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number()
    })
  })
  .listen(3000)
```

## Best Practices

1. **เปิดใช้ OpenAPI plugin เสมอ**: เพื่อให้มี API documentation ที่ถูกต้องและเป็นปัจจุบัน
2. **Configure documentation metadata**: เพิ่ม title, version, description ให้ชัดเจน
3. **ใช้ tags สำหรับ grouping endpoints**: จัดกลุ่ม endpoints ตาม functionality
4. **ใช้ description สำหรับ endpoints**: เพิ่ม description ให้ชัดเจน
5. **ใช้ examples สำหรับ endpoints**: เพิ่ม examples ให้ชัดเจน

## References

- [OpenAPI Plugin](https://elysiajs.com/plugins/openapi)
- [OpenAPI Documentation](https://elysiajs.com/essential/openapi)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
