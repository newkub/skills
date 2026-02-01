## Advanced

เทคนิคขั้นสูงสำหรับ TypeScript development

### Advanced Type Patterns
```typescript
// ✅ Good - Branded types for type safety
type UserId = string & { readonly brand: unique symbol };
type Email = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

// ✅ Good - Recursive types
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

// ✅ Good - Conditional types with inference
type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
```

### Performance Optimization
```typescript
// ✅ Good - Type guards for performance
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
}

// ✅ Good - Efficient generic constraints
interface HasId {
  id: string | number;
}

function findById<T extends HasId>(items: T[], id: string | number): T | undefined {
  return items.find(item => item.id === id);
}
```

### Module Architecture
```typescript
// ✅ Good - Barrel exports
// types/index.ts
export { User, Product } from "./user";
export { ApiResponse, PaginatedResponse } from "./common";

// ✅ Good - Dependency injection with types
interface Logger {
  log(message: string): void;
}

class UserService {
  constructor(
    private logger: Logger,
    private apiClient: ApiClient
  ) {}
}
```

### Advanced Generics
```typescript
// ✅ Good - Variadic generics
function merge<T extends object[]>(...objects: T): T[number] {
  return Object.assign({}, ...objects);
}

// ✅ Good - Template literal types
type EventName<T extends string> = `on${Capitalize<T>}`;
type EventHandler<T extends string> = (event: { type: T }) => void;

interface EventHandlers {
  onClick: EventHandler<"click">;
  onSubmit: EventHandler<"submit">;
}
```

### Runtime Validation
```typescript
// ✅ Good - Type-safe runtime validation
type Validator<T> = (value: unknown) => value is T;

function createValidator<T>(
  check: (value: unknown) => boolean
): Validator<T> {
  return check as Validator<T>;
}

const isUser = createValidator<User>(
  (value): value is User => 
    typeof value === "object" && 
    value !== null && 
    "id" in value && 
    "name" in value
);
```
