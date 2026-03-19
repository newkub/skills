## Examples

ตัวอย่างโค้ด TypeScript ที่ใช้บ่อย

### Basic Usage

```typescript
// Interface definition
interface User {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

// Function with types
function createUser(name: string, email?: string): User {
  return {
    id: Math.random(),
    name,
    email,
    createdAt: new Date(),
  };
}

// Usage
const user = createUser("John Doe", "john@example.com");
console.log(user.name);
```

### Generic Functions

```typescript
// Generic repository
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

// Generic API client
class ApiClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
```

### Advanced Types

```typescript
// Branded types
type UserId = string & { readonly brand: unique symbol };
type Email = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Mapped types
type Partial<T> = { [P in keyof T]?: T[P] };
type Required<T> = { [P in keyof T]-?: T[P] };
```

### Error Handling

```typescript
// Result type
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

async function safeFetch<T>(url: string): Promise<Result<T>> {
  try {
    const data = await fetch(url).then(res => res.json());
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

// Usage
const result = await safeFetch<User>("/api/user/1");
if (result.success) {
  console.log(result.data.name);
} else {
  console.error(result.error.message);
}
```

### Validation

```typescript
// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value
  );
}

// Usage
function processValue(value: unknown) {
  if (isUser(value)) {
    // TypeScript knows value is User here
    console.log(value.name);
  }
}
```

### Decorators

```typescript
// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`${propertyKey} returned:`, result);
    return result;
  };
}

class UserService {
  @log
  getUser(id: number): User {
    return { id, name: "John", createdAt: new Date() };
  }
}
```
