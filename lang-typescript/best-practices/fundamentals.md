## Fundamentals

หลักการพื้นฐานของการเขียน TypeScript ที่ดี

### Type Safety First
```typescript
// ✅ Good - Explicit types
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

// ❌ Bad - Using any
function calculateTotal(price: any, quantity: any): any {
  return price * quantity;
}
```

### Interface vs Type
```typescript
// ✅ Good - Use interface for objects
interface User {
  id: number;
  name: string;
  email?: string;
}

// ✅ Good - Use type for unions and computed types
type Status = "active" | "inactive";
type UserWithStatus = User & { status: Status };
```

### Naming Conventions
```typescript
// ✅ Good - PascalCase for types
interface UserProfile {}
type ApiResponse<T> = {}

// ✅ Good - camelCase for variables and functions
const userName: string = "john";
function getUserData(): UserProfile {}

// ✅ Good - Descriptive names
interface HttpRequestConfig {
  timeoutMs: number;
  retryAttempts: number;
}
```

### Error Handling
```typescript
// ✅ Good - Type-safe error handling
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

async function fetchUser(id: number): Promise<Result<User>> {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### Function Design
```typescript
// ✅ Good - Clear input and output types
function formatCurrency(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

// ✅ Good - Generic functions for reusability
function createApiResponse<T>(data: T, status: number = 200): ApiResponse<T> {
  return { data, status, timestamp: Date.now() };
}
```
