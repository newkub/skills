# Error Handling

## Rationale

Error handling ที่ดีช่วยให้ debug ง่าย, improve user experience, และ prevent crashes

## Bad Practice

```typescript
// ❌ Silent errors
function getUser(id: string): User | null {
  try {
    return db.findUser(id);
  } catch (error) {
    // ❌ ไม่ทำอะไรเลย
    return null;
  }
}

// ❌ Generic error messages
function processOrder(order: Order): void {
  try {
    // ... logic
  } catch (error) {
    throw new Error('Something went wrong'); // ❌ ไม่ช่วย debug
  }
}

// ❌ Exposing internal errors
app.get('/users/:id', async (req, res) => {
  try {
    const user = await db.findUser(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message, // ❌ expose internal details
      stack: error.stack    // ❌ expose stack trace
    });
  }
});

// ❌ Not handling errors
async function createUser(data: any): Promise<User> {
  // ❌ ไม่ validate input
  return await db.insertUser(data);
}
```

## Good Practice

```typescript
// ✅ Custom error classes
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: any
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} with ID ${id} not found`);
    this.name = 'NotFoundError';
  }
}

// ✅ Validate inputs
function createUser(data: CreateUserInput): User {
  if (!data.email) {
    throw new ValidationError('Email is required', 'email', data.email);
  }

  if (!isValidEmail(data.email)) {
    throw new ValidationError('Invalid email format', 'email', data.email);
  }

  return db.insertUser(data);
}

// ✅ Meaningful error messages
function processOrder(order: Order): void {
  if (!order.items || order.items.length === 0) {
    throw new Error('Order must have at least one item');
  }

  if (order.status !== 'pending') {
    throw new Error(`Cannot process order with status: ${order.status}`);
  }

  // ... process order
}

// ✅ Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);

  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: err.message,
        field: err.field
      }
    });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({
      error: {
        code: 'NOT_FOUND',
        message: err.message
      }
    });
  }

  // Internal errors - ไม่ expose details
  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred'
    }
  });
});

// ✅ Logging
function logError(error: Error, context: any): void {
  console.error({
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString()
  });
}
```

## Best Practices

### 1. Error Classes
- สร้าง **custom error classes** สำหรับ error types ต่างๆ
- เพิ่ม **context information** ใน errors

### 2. Error Messages
- **Specific** - บอกว่าอะไรผิด
- **Actionable** - บอกว่าควรทำอย่างไร
- **User-friendly** - ไม่ expose internals

### 3. Logging
- Log **errors** สำหรับ debugging
- Log **context** (request ID, user ID, etc.)
- ไม่ log **sensitive data** (passwords, tokens)

### 4. Validation
- **Validate inputs** ก่อน process
- **Throw errors** สำหรับ invalid inputs
- **Provide clear messages** ว่าอะไร invalid

## References

- [Error Handling Best Practices](https://www.twilio.com/blog/error-handling-node-js)
- [MDN Web Docs - Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
