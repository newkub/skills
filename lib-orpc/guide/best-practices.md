# Best Practices

## Project Structure

```
src/
├── router/
│   ├── index.ts
│   ├── user.ts
│   └── post.ts
├── middleware/
│   └── auth.ts
└── server.ts
```

## Naming Conventions

| Pattern | Example |
|---------|---------|
| Router | `userRouter`, `postRouter` |
| Procedure | `getUser`, `createPost` |
| Middleware | `authMiddleware`, `logMiddleware` |

## Error Handling

```typescript
const app = router({
  getUser: {
    handler: async ({ id }) => {
      const user = await db.user.findUnique({ where: { id } });
      if (!user) throw new ORPCError({ code: 'NOT_FOUND' });
      return user;
    },
  },
});
```

## Validation

```typescript
import { z } from 'zod';

const app = router({
  createUser: {
    input: z.object({ name: z.string(), email: z.string().email() }),
    handler: async ({ input }) => {
      return db.user.create({ data: input });
    },
  },
});
```

## Performance

- Use streaming for large data
- Implement proper caching
- Optimize middleware chains
- Use pagination for lists

## Security

- Validate all inputs
- Use middleware for auth
- Implement rate limiting
- Sanitize outputs