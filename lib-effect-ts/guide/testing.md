# Testing

## Testing Effect Apps

### Unit Testing

```typescript
import { describe, it, expect } from 'vitest';
import { Effect } from 'effect';

describe('Effect', () => {
  it('should succeed', async () => {
    const result = await Effect.succeed(42).runPromise();
    expect(result).toBe(42);
  });
});
```

### Integration Testing

- Test effect composition
- Test error handling
- Test service integration

### Mocking

- Mock services สำหรับ testing
- Use test runtime สำหรับ isolated tests
