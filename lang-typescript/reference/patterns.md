## Patterns

Design patterns ที่พบบ่อยใน TypeScript

### Singleton Pattern
```typescript
class Database {
  private static instance: Database;
  private connection: Connection;

  private constructor() {
    this.connection = createConnection();
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  query(sql: string): Promise<any[]> {
    return this.connection.query(sql);
  }
}

// Usage
const db = Database.getInstance();
```

### Factory Pattern
```typescript
interface Vehicle {
  drive(): void;
}

class Car implements Vehicle {
  drive() {
    console.log("Driving a car");
  }
}

class Motorcycle implements Vehicle {
  drive() {
    console.log("Riding a motorcycle");
  }
}

class VehicleFactory {
  static create(type: "car" | "motorcycle"): Vehicle {
    switch (type) {
      case "car":
        return new Car();
      case "motorcycle":
        return new Motorcycle();
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

// Usage
const car = VehicleFactory.create("car");
car.drive();
```

### Observer Pattern
```typescript
interface Observer<T> {
  update(data: T): void;
}

interface Subject<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(data: T): void;
}

class EventEmitter<T> implements Subject<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data: T): void {
    this.observers.forEach(observer => observer.update(data));
  }
}

// Usage
class UserObserver implements Observer<User> {
  update(user: User) {
    console.log(`User updated: ${user.name}`);
  }
}

const emitter = new EventEmitter<User>();
emitter.subscribe(new UserObserver());
```

### Repository Pattern
```typescript
interface Repository<T, Id = string> {
  findById(id: Id): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: Id): Promise<void>;
  findAll(): Promise<T[]>;
}

class InMemoryRepository<T extends { id: Id }, Id = string> 
  implements Repository<T, Id> {
  private entities = new Map<Id, T>();

  async findById(id: Id): Promise<T | null> {
    return this.entities.get(id) ?? null;
  }

  async save(entity: T): Promise<T> {
    this.entities.set(entity.id, entity);
    return entity;
  }

  async delete(id: Id): Promise<void> {
    this.entities.delete(id);
  }

  async findAll(): Promise<T[]> {
    return Array.from(this.entities.values());
  }
}

// Usage
interface User {
  id: string;
  name: string;
}

const userRepo = new InMemoryRepository<User>();
```

### Strategy Pattern
```typescript
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

class NumberValidator implements ValidationStrategy<number> {
  validate(value: unknown): value is number {
    return typeof value === "number" && !isNaN(value);
  }

  getErrorMessage(): string {
    return "Value must be a number";
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

// Usage
const stringValidator = new Validator(new StringValidator());
const name = stringValidator.validate("John"); // OK
// const invalid = stringValidator.validate(123); // Error
```
