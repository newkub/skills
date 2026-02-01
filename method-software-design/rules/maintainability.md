# Maintainability

## Rationale

Maintainability ช่วยให้แก้โค้ดในอนาคตได้ง่าย, reduce technical debt, และ improve team velocity

## Bad Practice

```typescript
// ❌ Tight coupling
class OrderService {
  constructor(
    private stripe: StripeClient,
    private sendgrid: SendGridClient,
    private winston: WinstonLogger
  ) {}
}

// ❌ God classes
class UserService {
  // ... 1000 lines of code
  createUser() {}
  updateUser() {}
  deleteUser() {}
  sendEmail() {}
  logActivity() {}
  // ... 50 more methods
}

// ❌ No separation of concerns
app.get('/users/:id', async (req, res) => {
  // ❌ Business logic in controller
  const user = await db.findUser(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });

  // ❌ Database queries in controller
  const orders = await db.findOrders(user.id);
  const products = await db.findProducts(orders.map(o => o.productId));

  // ❌ Response formatting in controller
  res.json({ user, orders, products });
});
```

## Good Practice

```typescript
// ✅ Dependency injection
interface PaymentService {
  process(amount: number): Promise<void>;
}

class OrderService {
  constructor(
    private payment: PaymentService,
    private email: EmailService
  ) {}
}

// ✅ Single responsibility
class UserService {
  constructor(private db: UserRepository) {}

  async createUser(data: CreateUserInput): Promise<User> {
    return this.db.insertUser(data);
  }
}

class EmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    // send email
  }
}

// ✅ Layered architecture
// Controller -> Service -> Repository
app.get('/users/:id', async (req, res) => {
  const user = await userService.getUser(req.params.id);
  res.json(user);
});
```

## Maintainability Principles

### 1. Modularity
- **Single responsibility**: Each module does one thing
- **Clear boundaries**: Well-defined interfaces
- **Loose coupling**: Minimal dependencies

### 2. Code Organization
- **Layered architecture**: Controller, Service, Repository
- **Feature-based folders**: Group by feature, not type
- **Consistent naming**: Easy to find code

### 3. Documentation
- **Code comments**: Explain why, not what
- **API documentation**: Swagger/OpenAPI
- **README**: Project setup and usage

## Refactoring

### 1. When to Refactor
- **Code smells**: Duplicate code, long functions
- **New features**: Hard to add
- **Performance issues**: Slow queries

### 2. Refactoring Techniques
- **Extract method**: Break down long functions
- **Extract class**: Split large classes
- **Replace conditional with polymorphism**: Strategy pattern

### 3. Safe Refactoring
- **Write tests first**: Ensure behavior unchanged
- **Refactor in small steps**: Commit frequently
- **Review changes**: Get team approval

## Technical Debt

### 1. Identify Debt
- **Code smells**: Duplicate, complex code
- **Missing tests**: Untested code
- **Outdated dependencies**: Security risks

### 2. Manage Debt
- **Track debt**: Create tickets
- **Prioritize**: Fix high-impact debt
- **Allocate time**: Regular cleanup

### 3. Prevent Debt
- **Code reviews**: Catch issues early
- **Linting**: Enforce style
- **Testing**: Ensure quality

## References

- [Refactoring by Martin Fowler](https://www.oreilly.com/library/view/refactoring-improving/9780201485677/)
- [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
