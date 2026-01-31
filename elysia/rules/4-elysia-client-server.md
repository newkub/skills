---
name: Client-Server Communication
description: ใช้ Eden Treaty สำหรับ type-safe client-server communication
---

# Client-Server Communication

## Why

Elysia สามารถ share types ระหว่าง client และ server คล้ายกับ tRPC ทำให้มั่นใจได้ว่าทั้งสองฝั่งอยู่ใน sync เสมอ การใช้ Eden Treaty ช่วยให้:
- Client และ server มี types ที่เหมือนกันเสมอ
- Handle multiple HTTP status ได้ง่ายขึ้น
- Auto-completion ทั้ง client และ server
- Type-safe API calls

## What

Client-Server Communication คือการใช้ Eden Treaty (`@elysiajs/eden`) เพื่อ:
- Share types ระหว่าง client และ server
- Handle multiple HTTP status ด้วย discriminated union
- Provide type-safe API calls
- Auto-completion ทั้ง client และ server

## How

### 1. Server Side

```typescript
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
  .get('/user/:id', ({ params: { id } }) => {
    return { id, name: 'John', email: 'john@example.com' }
  }, {
    params: t.Object({
      id: t.Number()
    }),
    response: t.Object({
      id: t.Number(),
      name: t.String(),
      email: t.String()
    })
  })
  .listen(3000)

export type App = typeof app
```

### 2. Client Side

```typescript
// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from './server'

const api = treaty<App>('http://localhost:3000')

// Type-safe API call
const { data } = await api.user[':id'].get({
  $params: { id: 1 }
})
```

### 3. Handle Multiple Status

```typescript
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
  .get('/user/:id', ({ params: { id }, set }) => {
    if (id === 0) {
      set.status = 404
      return { error: 'User not found' }
    }
    return { id, name: 'John' }
  }, {
    params: t.Object({
      id: t.Number()
    }),
    response: {
      200: t.Object({
        id: t.Number(),
        name: t.String()
      }),
      404: t.Object({
        error: t.String()
      })
    }
  })
  .listen(3000)

export type App = typeof app
```

```typescript
// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from './server'

const api = treaty<App>('http://localhost:3000')

const response = await api.user[':id'].get({
  $params: { id: 1 }
})

if (response.error) {
  console.error(response.error)
} else if (response.data) {
  console.log(response.data)
}
```

## Examples

### Correct Usage

```typescript
// ✅ ใช้ Eden Treaty สำหรับ type-safe communication
// server.ts
import { Elysia, t } from 'elysia'

const app = new Elysia()
  .get('/user/:id', ({ params: { id } }) => {
    return { id, name: 'John' }
  }, {
    params: t.Object({
      id: t.Number()
    }),
    response: t.Object({
      id: t.Number(),
      name: t.String()
    })
  })
  .listen(3000)

export type App = typeof app
```

```typescript
// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from './server'

const api = treaty<App>('http://localhost:3000')

const { data } = await api.user[':id'].get({
  $params: { id: 1 }
})
```

### Incorrect Usage

```typescript
// ❌ ไม่ใช้ Eden Treaty
// client.ts
const response = await fetch('http://localhost:3000/user/1')
const data = await response.json()

// TypeScript ไม่รู้ว่า data เป็นอะไร
console.log(data.name)
```

## Best Practices

1. **ใช้ Eden Treaty สำหรับทุก client-server communication**: เพื่อ type safety
2. **Export App type จาก server**: เพื่อให้ client ใช้ได้
3. **ใช้ response schema สำหรับทุก endpoint**: เพื่อ type safety
4. **Handle multiple status ด้วย discriminated union**: เพื่อความชัดเจน
5. **ใช้ error handling ที่ถูกต้อง**: จัดการ errors อย่างเหมาะสม

## References

- [Eden Treaty](https://elysiajs.com/eden/treaty)
- [Client-Server Communication](https://elysiajs.com/essential/client-server)
- [Type-Safe API Calls](https://elysiajs.com/essential/client-server#type-safe-api-calls)
