# tRPC Subscriptions

## Server-side Subscription

```typescript
import { observable } from '@trpc/server/observable'
import { EventEmitter } from 'events'

const ee = new EventEmitter()

const appRouter = t.router({
  onHello: t.procedure.subscription(() => {
    return observable((emit) => {
      const onHello = (data) => emit.next(data)
      ee.on('hello', onHello)
      return () => ee.off('hello', onHello)
    })
  }),
})
```

## Client-side Subscription

```typescript
trpc.onHello.useSubscription(undefined, {
  onData: (data) => {
    console.log('Received:', data)
  },
  onError: (error) => {
    console.error('Error:', error)
  },
})
```

## WebSocket Link

```typescript
import { wsLink, createWSClient } from '@trpc/client'

const wsClient = createWSClient({
  url: 'ws://localhost:3000',
})

const wsLink = wsLink({
  client: wsClient,
})

const client = createTRPCProxyClient<AppRouter>({
  links: [wsLink],
})
```

## Split Links

```typescript
import { splitLink } from '@trpc/client'

const link = splitLink({
  condition: (op) => op.type === 'subscription',
  true: wsLink,
  false: httpBatchLink,
})
```
