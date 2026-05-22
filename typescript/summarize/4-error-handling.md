## Error Handling

สรุปเทคนิคการจัดการ errors ใน TypeScript

| หมวดหมู่ | เทคนิค | ตัวอย่าง | ผลกระทบ |
|-----------|---------|-----------|----------|
| **Result Types** | Union result types | `type Result<T> = { success: true; data: T } | { success: false; error: string }` | Type-safe error handling |
| **Result Types** | Either pattern | `type Either<L, R> = { left: L } | { right: R }` | Functional error handling |
| **Exceptions** | Custom error classes | `class ValidationError extends Error {}` | Structured error types |
| **Exceptions** | Error type guards | `function isValidationError(error: unknown): error is ValidationError {}` | Runtime error checking |
| **Async Errors** | Promise result types | `Promise<Result<T>>` | Type-safe async operations |
| **Async Errors** | Try-catch with types | `try { ... } catch (error) { if (error instanceof Error) { ... } }` | Safe error handling |
| **Validation** | Schema validation errors | `zod.safeParse(input)` | Detailed validation feedback |
| **Validation** | Type guard validation | `function isValidUser(data: unknown): data is User {}` | Runtime type validation |
| **Logging** | Typed error logging | `function logError(error: Error, context: unknown): void {}` | Structured logging |
| **Recovery** | Fallback types | `type WithFallback<T, F> = T | F` | Graceful degradation |

### Error Handling Patterns

```typescript
// ✅ Result type pattern
class Result<T, E = Error> {
  constructor(
    public success: boolean,
    public data?: T,
    public error?: E
  ) {}

  static success<T>(data: T): Result<T> {
    return new Result(true, data);
  }

  static failure<E>(error: E): Result<never, E> {
    return new Result(false, undefined, error);
  }
}

// ✅ Async result pattern
async function fetchUser(id: number): Promise<Result<User>> {
  try {
    const response = await fetch(`/users/${id}`);
    if (!response.ok) {
      return Result.failure(new Error(`HTTP ${response.status}`));
    }
    const user = await response.json();
    return Result.success(user);
  } catch (error) {
    return Result.failure(error as Error);
  }
}

// ✅ Validation with detailed errors
function validateUser(data: unknown): Result<User, ValidationError[]> {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== "object") {
    errors.push(new ValidationError("Data must be an object"));
    return Result.failure(errors);
  }

  const user = data as Record<string, unknown>;
  if (typeof user.id !== "number") {
    errors.push(new ValidationError("id must be a number"));
  }

  return errors.length > 0 ? Result.failure(errors) : Result.success(user as User);
}
```

### Best Practices

1. **Use Result types** สำหรับ operations ที่อาจ fail
2. **Create custom error classes** สำหรับ domain-specific errors
3. **Implement type guards** สำหรับ runtime error checking
4. **Log errors with context** สำหรับ debugging
5. **Provide fallback values** เมื่อเป็นไปได้
