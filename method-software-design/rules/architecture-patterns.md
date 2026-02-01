# Architecture Patterns

## Rationale

Architecture patterns ช่วยวางโครงสร้างระบบที่ scalable, maintainable, และตรงกับ requirements

## Bad Practice

```typescript
// ❌ God object - ทำทุกอย่างในคลาสเดียว
class App {
  users: User[];
  orders: Order[];
  products: Product[];
  payments: Payment[];
  // ... 1000 lines
}

// ❌ No clear boundaries
// ทุกอย่างผูกกับทุกอย่าง
class OrderService {
  constructor(
    private db: Database,
    private email: EmailService,
    private payment: PaymentService,
    private inventory: InventoryService,
    // ... 10 more dependencies
  ) {}
}
```

## Good Practice

```typescript
// ✅ Modular architecture - clear boundaries
// modules/
// ├── user/
// ├── order/
// ├── payment/
// └── inventory/

// ✅ Layered architecture
// presentation/ -> business/ -> data/
class OrderController {
  constructor(private orderService: OrderService) {}
}

class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private paymentService: PaymentService
  ) {}
}

class OrderRepository {
  constructor(private db: Database) {}
}
```

## Architecture Types

### 1. Monolith
**When to use:**
- Small teams
- Simple requirements
- Fast time-to-market

**Pros:**
- Easy to develop
- Simple deployment
- Good performance

**Cons:**
- Hard to scale
- Single point of failure
- Technology lock-in

### 2. Modular Monolith
**When to use:**
- Medium-sized teams
- Need modularity but not microservices

**Pros:**
- Clear module boundaries
- Easier to refactor
- Shared database

**Cons:**
- Still single deployment
- Can become monolith over time

### 3. Microservices
**When to use:**
- Large teams
- Independent scaling
- Multiple technologies

**Pros:**
- Independent deployment
- Technology diversity
- Fault isolation

**Cons:**
- Complex infrastructure
- Network overhead
- Distributed transactions

## Best Practices

### 1. Start Simple
- **Monolith first**, microservices later
- **Modular design** แม้ใน monolith

### 2. Clear Boundaries
- Define **module boundaries**
- Use **interfaces** สำหรับ communication
- **Loose coupling** ระหว่าง modules

### 3. Data Ownership
- Each service owns its data
- No direct database access across services
- Use APIs for data sharing

## References

- [Building Microservices](https://www.oreilly.com/library/view/building-microservices/9781491950357/)
- [Monolithic vs Microservices](https://martinfowler.com/articles/microservices.html)
