# tRPC API Reference

## Core APIs

### initTRPC

```typescript
import { initTRPC } from '@trpc/server'

const t = initTRPC.create()
const t = initTRPC.context<Context>().create()
const t = initTRPC.meta<Meta>().create()
```

### t.procedure

```typescript
t.procedure
t.procedure.input(schema)
t.procedure.output(schema)
t.procedure.use(middleware)
t.procedure.query(handler)
t.procedure.mutation(handler)
t.procedure.subscription(handler)
```

### t.router

```typescript
t.router({
  procedure1: t.procedure.query(() => {}),
  procedure2: t.procedure.mutation(() => {}),
})
```

## Client APIs

### createTRPCReact

```typescript
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<AppRouter>()
```

### createTRPCProxyClient

```typescript
import { createTRPCProxyClient } from '@trpc/client'

const client = createTRPCProxyClient<AppRouter>({ links: [...] })
```

## Links

### httpBatchLink

```typescript
import { httpBatchLink } from '@trpc/client'

httpBatchLink({ url: 'http://localhost:3000/trpc' })
```

### wsLink

```typescript
import { wsLink, createWSClient } from '@trpc/client'

const wsClient = createWSClient({ url: 'ws://localhost:3000' })
const ws = wsLink({ client: wsClient })
```

## React Hooks

### useQuery

```typescript
const { data, isLoading, error } = trpc.procedure.useQuery(input)
```

### useMutation

```typescript
const mutation = trpc.procedure.useMutation()
mutation.mutate(input)
```

### useSubscription

```typescript
trpc.procedure.useSubscription(input, {
  onData: (data) => console.log(data),
})
```
