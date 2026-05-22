# tRPC Procedures

## Query

ใช้สำหรับดึงข้อมูล:

```typescript
const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return db.user.findUnique({ where: { id: input.id } })
    }),
})
```

## Mutation

ใช้สำหรับสร้าง/อัปเดต/ลบข้อมูล:

```typescript
const appRouter = t.router({
  createUser: t.procedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(({ input }) => {
      return db.user.create({ data: input })
    }),
})
```

## Subscription

ใช้สำหรับ real-time updates:

```typescript
const appRouter = t.router({
  onUserUpdate: t.procedure
    .input(z.object({ userId: z.string() }))
    .subscription(({ input }) => {
      return observable((emit) => {
        const onUpdate = (data) => emit.next(data)
        db.user.on('update', onUpdate)
        return () => db.user.off('update', onUpdate)
      })
    }),
})
```

## Input Validation

ใช้ Zod สำหรับ validation:

```typescript
const appRouter = t.router({
  createPost: t.procedure
    .input(z.object({
      title: z.string().min(1).max(100),
      content: z.string(),
      published: z.boolean().optional(),
    }))
    .mutation(({ input }) => {
      return db.post.create({ data: input })
    }),
})
```

## Output Validation

```typescript
const appRouter = t.router({
  getUser: t.procedure
    .output(z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    }))
    .query(({ input }) => {
      return db.user.findUnique({ where: { id: input.id } })
    }),
})
```
