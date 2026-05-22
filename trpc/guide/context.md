# tRPC Context

## การสร้าง Context

```typescript
import { initTRPC, context } from '@trpc/server'

const createContext = context.create<{
  user?: { id: string; name: string }
}>().create(async ({ req }) => {
  const user = await getUserFromRequest(req)
  return { user }
})

const t = initTRPC.context<typeof createContext>().create()
```

## การใช้ Context ใน Procedures

```typescript
const appRouter = t.router({
  me: t.procedure.query(({ ctx }) => {
    return ctx.user
  }),
})
```

## Context พร้อม Headers

```typescript
const createContext = context.create().create(async ({ req }) => {
  const token = req.headers.get('authorization')
  const user = await verifyToken(token)
  return { user }
})
```

## Context สำหรับ Server-Side

```typescript
const createContext = context.create().create(() => {
  return {
    db,
    logger,
  }
})
```
