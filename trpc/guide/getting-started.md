# Getting Started with tRPC

## การติดตั้ง

ติดตั้ง dependencies สำหรับ server และ client:

```bash
npm install @trpc/server @trpc/client @trpc/react-query @tanstack/react-query
# หรือ
pnpm add @trpc/server @trpc/client @trpc/react-query @tanstack/react-query
```

## การตั้งค่า Server

สร้าง tRPC router:

```typescript
// server/router.ts
import { initTRPC } from '@trpc/server'

const t = initTRPC.create()

export const appRouter = t.router({
  greeting: t.procedure.query(() => {
    return 'Hello from tRPC!'
  }),
})

export type AppRouter = typeof appRouter
```

## การตั้งค่า Client

สร้าง tRPC client:

```typescript
// client/trpc.ts
import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '../server/router'

export const trpc = createTRPCReact<AppRouter>()
```

## การใช้งานกับ React

ตั้งค่า tRPC Provider:

```typescript
// app/providers.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { trpc } from './client/trpc'
import { AppRouter } from '../server/router'

const queryClient = new QueryClient()
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}
```

## การเรียกใช้ Procedures

ใช้ใน component:

```typescript
import { trpc } from '../client/trpc'

export function Greeting() {
  const { data, isLoading } = trpc.greeting.useQuery()

  if (isLoading) return <div>Loading...</div>

  return <div>{data}</div>
}
```
