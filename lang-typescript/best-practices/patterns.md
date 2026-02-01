## Patterns

Design patterns ที่พบบ่อยใน TypeScript

### Builder Pattern
```typescript
// ✅ Good - Type-safe builder
class QueryBuilder<T = {}> {
  constructor(private query: Partial<T> = {}) {}

  select<K extends keyof T>(fields: K[]): QueryBuilder<Pick<T, K>> {
    return new QueryBuilder(this.query);
  }

  where(condition: Partial<T>): QueryBuilder<T> {
    Object.assign(this.query, condition);
    return this;
  }

  build(): T {
    return this.query as T;
  }
}

// Usage
const query = new QueryBuilder<User>()
  .where({ status: "active" })
  .build();
```

### Factory Pattern
```typescript
// ✅ Good - Generic factory
interface Constructor<T = {}> {
  new (...args: any[]): T;
}

class ServiceFactory {
  static create<T extends Constructor>(
    Type: T,
    ...args: ConstructorParameters<T>
  ): InstanceType<T> {
    return new Type(...args);
  }
}

// Usage
const userService = ServiceFactory.create(UserService, logger);
```

### Repository Pattern
```typescript
// ✅ Good - Generic repository
interface Repository<T, Id = string> {
  findById(id: Id): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: Id): Promise<void>;
}

class InMemoryRepository<T, Id = string> implements Repository<T, Id> {
  private entities = new Map<Id, T>();

  async findById(id: Id): Promise<T | null> {
    return this.entities.get(id) ?? null;
  }

  async save(entity: T & { id: Id }): Promise<T> {
    this.entities.set(entity.id, entity);
    return entity;
  }

  async delete(id: Id): Promise<void> {
    this.entities.delete(id);
  }
}
```

### Observer Pattern
```typescript
// ✅ Good - Type-safe events
type EventMap = Record<string, any>;

class EventEmitter<T extends EventMap = {}> {
  private listeners = new Map<keyof T, Set<(data: any) => void>>();

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    const listeners = this.listeners.get(event) ?? new Set();
    listeners.add(listener);
    this.listeners.set(event, listeners);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
}

// Usage
interface UserEvents {
  created: User;
  updated: { id: string; changes: Partial<User> };
}

const emitter = new EventEmitter<UserEvents>();
emitter.on("created", user => console.log("User created:", user));
```

### Strategy Pattern
```typescript
// ✅ Good - Strategy with types
interface ValidationStrategy<T> {
  validate(value: unknown): value is T;
  getErrorMessage(): string;
}

class StringValidator implements ValidationStrategy<string> {
  validate(value: unknown): value is string {
    return typeof value === "string";
  }

  getErrorMessage(): string {
    return "Value must be a string";
  }
}

class Validator<T> {
  constructor(private strategy: ValidationStrategy<T>) {}

  validate(value: unknown): T {
    if (this.strategy.validate(value)) {
      return value;
    }
    throw new Error(this.strategy.getErrorMessage());
  }
}
```
