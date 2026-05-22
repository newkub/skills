# tRPC Server Setup

## การสร้าง Router

```typescript
import { initTRPC } from '@trpc/server'

const t = initTRPC.create()

export const appRouter = t.router({
  // procedures
})

export type AppRouter = typeof appRouter
```

## การสร้าง Procedures

### Query

```typescript
const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return db.user.findUnique({ where: { id: input.id } })
    }),
})
```

### Mutation

```typescript
const appRouter = t.router({
  createUser: t.procedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(({ input }) => {
      return db.user.create({ data: input })
    }),
})
```

## การใช้ Context

```typescript
import { initTRPC, context } from '@trpc/server'

const createContext = context.create<{
  user?: { id: string }
}>().create(async ({ req }) => {
  const user = await getUserFromRequest(req)
  return { user }
})

const t = initTRPC.context<typeof createContext>().create()
```

## การตั้งค่า Server Adapter

### Next.js App Router

```typescript
// app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/server/router'
import { createContext } from '@/server/context'

export const runtime = 'edge'

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  })
}

export { handler as GET, handler as POST }
```

### Express

```typescript
import { trpcExpress } from '@trpc/server/adapters/express'
import express from 'express'
import { appRouter } from './router'
import { createContext } from './context'

const app = express()

app.use(
  '/trpc',
  trpcExpress.create({
    router: appRouter,
    createContext,
  })
)

app.listen(3000)
```
