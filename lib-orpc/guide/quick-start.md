# Quick Start

## Basic Server

```typescript
import { orpc, router } from 'orpc';

const app = router({
  greeting: () => {
    return 'Hello, World!';
  },
});

export default app;
```

## Client Usage

```typescript
import { createORPCClient } from 'orpc/client';

const client = createORPCClient<typeof app>('http://localhost:3000');

const result = await client.greeting();
console.log(result);
```

## With Parameters

```typescript
const app = router({
  greet: ({ name }: { name: string }) => {
    return `Hello, ${name}!`;
  },
});
```

## With Async

```typescript
const app = router({
  getUser: async ({ id }: { id: string }) => {
    const user = await db.users.findUnique({ where: { id } });
    return user;
  },
});
```

## Middleware

```typescript
const app = router({
  greet: {
    handler: ({ name }: { name: string }) => `Hello, ${name}!`,
    middlewares: [authMiddleware, rateLimitMiddleware],
  },
});
```

## Running Server

```typescript
import { createServer } from 'http';
import { ORPCServer } from 'orpc';

const server = new ORPCServer({ router: app });
createServer(server.handle).listen(3000);
```

## Next Steps

- [Key Concepts](key-concept.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)