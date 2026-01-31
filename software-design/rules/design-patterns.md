# Design Patterns

## Rationale

Design patterns คือ solutions ที่ผ่านการพิสูจน์แล้วสำหรับปัญหาที่พบบ่อย ช่วยให้ code maintainable และ reusable

## Bad Practice

```typescript
// ❌ Reinventing the wheel
class Cache {
  data: Map<string, any> = new Map();

  get(key: string): any {
    return this.data.get(key);
  }

  set(key: string, value: any): void {
    this.data.set(key, value);
  }
}

// ❌ Tight coupling
class OrderService {
  private payment = new StripePayment();
  private email = new SendGridEmail();
}

// ❌ God object
class App {
  users: User[];
  products: Product[];
  orders: Order[];
  payments: Payment[];
}
```

## Good Practice

```typescript
// ✅ Singleton - มี instance เดียว
class DatabaseConnection {
  private static instance: DatabaseConnection;

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
}

// ✅ Factory - สร้าง objects โดยไม่ต้องรู้ implementation
interface PaymentProcessor {
  process(amount: number): Promise<void>;
}

class PaymentProcessorFactory {
  static create(type: 'stripe' | 'paypal'): PaymentProcessor {
    switch (type) {
      case 'stripe': return new StripeProcessor();
      case 'paypal': return new PayPalProcessor();
    }
  }
}

// ✅ Strategy - เปลี่ยน behavior ได้ runtime
interface SortStrategy {
  sort(items: Product[]): Product[];
}

class PriceSortStrategy implements SortStrategy {
  sort(items: Product[]): Product[] {
    return items.sort((a, b) => a.price - b.price);
  }
}

class ProductSorter {
  constructor(private strategy: SortStrategy) {}

  sort(items: Product[]): Product[] {
    return this.strategy.sort(items);
  }
}

// ✅ Observer - react to changes
class EventEmitter {
  private listeners: Map<string, Function[]> = new Map();

  on(event: string, callback: Function): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  emit(event: string, data: any): void {
    const callbacks = this.listeners.get(event) || [];
    callbacks.forEach(cb => cb(data));
  }
}
```

## Common Patterns

### Creational Patterns
- **Singleton**: มี instance เดียว
- **Factory**: สร้าง objects โดยไม่ต้องรู้ implementation
- **Builder**: สร้าง complex objects step-by-step

### Structural Patterns
- **Adapter**: แปลง interface ที่ไม่เข้ากัน
- **Facade**: ซ่อนความซับซ้อน
- **Decorator**: เพิ่ม functionality แบบ dynamic

### Behavioral Patterns
- **Strategy**: เปลี่ยน behavior ได้ runtime
- **Observer**: reactive programming
- **Command**: encapsulate operations

## When to Use

- **Singleton**: Database connections, logger, config
- **Factory**: ไม่รู้ล่วงหน้าว่าจะสร้าง object ประเภทไหน
- **Strategy**: เปลี่ยน algorithms ได้ runtime
- **Observer**: Event-driven systems

## References

- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.oreilly.com/library/view/design-patterns-elements/0201633612/)
- [Refactoring to Patterns](https://www.oreilly.com/library/view/refactoring-to-patterns/0201485672/)
