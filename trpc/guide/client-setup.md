# tRPC Client Setup

## React Client

### สร้าง Client

```typescript
import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '../server/router'

export const trpc = createTRPCReact<AppRouter>()
```

### ตั้งค่า Links

```typescript
import { httpBatchLink } from '@trpc/client'

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})
```

### ตั้งค่า Provider

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpc } from './trpc'

const queryClient = new QueryClient()

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

## Vanilla JavaScript Client

```typescript
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../server/router'

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
})

// Use
const user = await client.getUser.query({ id: '1' })
```

## Server-Side Client

```typescript
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../server/router'

export function createServerClient() {
  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: process.env.INTERNAL_API_URL,
      }),
    ],
  })
}
```
