# tRPC

tRPC is an end-to-end typesafe API framework for TypeScript applications. It provides automatic type inference from server to client without code generation, enabling fully type-safe API calls with excellent developer experience.

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน tRPC |
| **Guide** | guide/server-setup.md | การตั้งค่า server |
| **Guide** | guide/client-setup.md | การตั้งค่า client |
| **Guide** | guide/procedures.md | การสร้าง procedures |
| **Guide** | guide/middleware.md | การใช้ middleware |
| **Guide** | guide/context.md | การจัดการ context |
| **Reference** | reference/api.md | API reference |
| **Reference** | reference/react-query.md | React Query integration |
| **Reference** | reference/subscriptions.md | Real-time subscriptions |

## คุณสมบัติหลัก

- **End-to-End Type Safe**: Types flow from server to client automatically
- **No Code Generation**: Types work without build step
- **Lightweight**: Small bundle size, minimal overhead
- **React Query Integration**: Use with TanStack Query
- **Subscriptions**: Built-in WebSocket support
- **Error Handling**: Type-safe error handling
- **Framework Agnostic**: Works with Next.js, Express, Fastify, etc.

## การใช้งาน

ใช้ tRPC เมื่อ:
- Building full-stack TypeScript applications
- Need end-to-end type safety without GraphQL
- Want automatic type inference from server to client
- Using Next.js, Express, or Fastify backend
- Need subscription/real-time support
- Want excellent developer experience without code generation

## ตัวอย่างเริ่มต้น

```bash
# Install
npm install @trpc/server @trpc/client @trpc/react-query @tanstack/react-query
```

```typescript
// Server router
import { initTRPC } from '@trpc/server'

const t = initTRPC.create()

const appRouter = t.router({
  getUser: t.procedure.query(({ input }) => {
    return { id: input.id, name: 'John' }
  }),
})

// Client call
const { data } = trpc.getUser.useQuery({ id: '1' })
```
