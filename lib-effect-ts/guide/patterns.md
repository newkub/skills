# Patterns

## Common Patterns

## Effect Definition

```typescript
import { Effect } from 'effect';

const getUser = (id: number) =>
  Effect.tryPromise({
    try: () => fetchUser(id),
    catch: (error) => new FetchError(error),
  });
```

## Effect Composition

```typescript
const program = Effect.gen(function* () {
  const user = yield* getUser(1);
  const posts = yield* getPosts(user.id);
  return { user, posts };
});
```

## Error Handling

```typescript
const program = Effect.gen(function* () {
  const result = yield* Effect.either(getUser(1));
  if (result._tag === 'Left') {
    return yield* Effect.log('User not found');
  }
  return result.right;
});
```
