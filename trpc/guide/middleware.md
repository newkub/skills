# tRPC Middleware

## การสร้าง Middleware

```typescript
const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({ ctx: { ...ctx, user: ctx.user } })
})
```

## การใช้ Middleware

```typescript
const protectedProcedure = t.procedure.use(isAuthed)

const appRouter = t.router({
  getUser: protectedProcedure.query(({ ctx }) => {
    return ctx.user
  }),
})
```

## Middleware Chain

```typescript
const appRouter = t.router({
  createUser: t.procedure
    .use(loggingMiddleware)
    .use(rateLimitMiddleware)
    .mutation(({ input }) => {
      return db.user.create({ data: input })
    }),
})
```

## Context ใน Middleware

```typescript
const appRouter = t.router({
  hello: t.procedure
    .use(({ next, ctx }) => {
      console.log('Request from:', ctx.user?.name)
      return next()
    })
    .query(() => {
      return 'Hello!'
    }),
})
```
