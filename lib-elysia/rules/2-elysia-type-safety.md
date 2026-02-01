---
name: Type Safety
description: ใช้ Elysia.t สำหรับ type safety ทั้ง runtime และ compile time
---

# Type Safety

## Why

Elysia ถูกออกแบบมาเพื่อช่วยคุณเขียน TypeScript น้อยลง โดยใช้ Type System ที่ปรับแต่งมาอย่างดีเพื่อ infer types จาก code ของคุณโดยอัตโนมัติ โดยไม่ต้องเขียน TypeScript อย่างชัดเจน ในขณะที่ยังคง type-safety ทั้ง runtime และ compile time

## What

Type safety คือการใช้ Elysia.t schema builder เพื่อ:
- Infer types จาก schema โดยอัตโนมัติ
- Provide type-safety ทั้ง runtime และ compile time
- Create single source of truth สำหรับ data types
- Ensure type integrity ทั้งหมด

## How

### 1. Infer Types จาก Schema

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number()
    })
  })
  .listen(3000)

// id จะถูก infer เป็น number โดยอัตโนมัติ
```

### 2. ใช้ Type Guards

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .get('/user/:id', ({ params: { id } }) => {
    // TypeScript รู้ว่า id เป็น number
    return id.toFixed(2)
  }, {
    params: t.Object({
      id: t.Number()
    })
  })
  .listen(3000)
```

### 3. ใช้ Custom Types

```typescript
import { Elysia, t } from 'elysia'

const UserSchema = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String({ format: 'email' })
})

new Elysia()
  .get('/user/:id', ({ params: { id } }) => {
    return { id, name: 'John', email: 'john@example.com' }
  }, {
    params: t.Object({
      id: t.Number()
    }),
    response: UserSchema
  })
  .listen(3000)
```

### 4. ใช้ Type Inference สำหรับ Response

```typescript
import { Elysia, t } from 'elysia'

new Elysia()
  .get('/users', () => {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
  }, {
    response: t.Array(
      t.Object({
        id: t.Number(),
        name: t.String()
      })
    )
  })
  .listen(3000)
```

## Examples

### Correct Usage

```typescript
// ✅ ใช้ schema สำหรับ type safety
new Elysia()
  .get('/user/:id', ({ params: { id } }) => {
    // TypeScript รู้ว่า id เป็น number
    return id * 2
  }, {
    params: t.Object({
      id: t.Number()
    })
  })
```

### Incorrect Usage

```typescript
// ❌ ไม่ใช้ schema สำหรับ type safety
new Elysia()
  .get('/user/:id', ({ params }) => {
    // TypeScript ไม่รู้ว่า id เป็นอะไร
    return params.id * 2
  })
```

## Best Practices

1. **ใช้ schema สำหรับทุก input**: params, query, body, headers, cookies
2. **ใช้ schema สำหรับ response**: ใช้ `response` schema สำหรับ type safety
3. **ใช้ schema ที่เฉพาะเจาะจง**: หลีกเลี่ยงการใช้ `t.Any()` หรือ schema ที่กว้างเกินไป
4. **ใช้ schema ที่ descriptive**: ตั้งชื่อ schema และ fields ให้ชัดเจน
5. **ใช้ schema ที่ reusable**: สร้าง schema ที่ใช้ซ้ำได้และ export ออกไปใช้ในหลายที่

## References

- [Elysia Type System](https://elysiajs.com/essential/type-integrity)
- [Type Inference](https://elysiajs.com/essential/type-integrity#type-inference)
- [Schema Builder](https://elysiajs.com/essential/schema)
