# Performance

## Performance Tips

- **Lazy Evaluation** - ใช้ lazy evaluation สำหรับ effects
- **Memoization** - memoize results
- **Batch Operations** - batch operations สำหรับ efficiency
- **Async/Await** - ใช้ async/await อย่างถูกต้อง

## Optimization

### Memoization

```typescript
import { Effect } from 'effect';

const memoized = Effect.memoize(() => {
  return expensiveOperation();
});
```

### Batch Operations

```typescript
const batch = Effect.all([
  Effect.succeed(1),
  Effect.succeed(2),
  Effect.succeed(3),
]);
```
