# All Features

## Core Features

| Feature | Description |
|---------|-------------|
| Router | Define procedures and group them |
| Procedures | Query, Mutation, Subscription |
| Input/Output | Schema validation with Zod |
| Middleware | Pre/post processing |
| Context | Shared request data |

## Procedure Types

```typescript
// Query - Read operations
router({ getUser: () => User })

// Mutation - Write operations
router({ createUser: (input) => User })

// Subscription - Real-time
router({ onMessage: () => Stream<Message> })
```

## Validation

```typescript
import { z } from 'zod';

router({
  createPost: {
    input: z.object({
      title: z.string().min(1).max(200),
      content: z.string().min(1),
    }),
    output: z.object({
      id: z.string(),
      title: z.string(),
    }),
    handler: async ({ input }) => {
      return db.post.create({ data: input });
    },
  },
});
```

## Middleware

```typescript
const authMiddleware = router.middleware(async ({ context, next }) => {
  const user = await validateToken(context.token);
  return next({ context: { ...context, user } });
});
```

## Streaming

```typescript
router({
  messages: () => {
    return new Stream(async (emit) => {
      for await (const msg of messageQueue) {
        emit(msg);
      }
    });
  },
});
```

## OpenAPI

```typescript
const app = router({
  greet: {
    summary: 'Greet a user',
    description: 'Returns a greeting message',
    handler: ({ name }: { name: string }) => `Hello ${name}!`,
  },
});
```