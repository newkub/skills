# Design Principles

## Rationale

Design principles ช่วยให้ code ยืดหยุ่น, maintainable, และลด complexity ในระยะยาว

## Bad Practice

```typescript
// ❌ Violates SRP - ทำหลายอย่างในคลาสเดียว
class UserService {
  createUser(data: any) { /* ... */ }
  sendEmail(user: User) { /* ... */ } // ❌ ไม่เกี่ยวกับ user service
  logActivity(user: User) { /* ... */ } // ❌ logging ไม่ใช่หน้าที่ของ user service
}

// ❌ Violates DRY - duplicate code
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUserEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ❌ Violates KISS - ซับซ้อนเกินไป
function isEven(num: number): boolean {
  return num % 2 === 0 ? true : false;
}

// ❌ Violates YAGNI - implement features ที่ยังไม่ต้องการ
class UserService {
  constructor(
    private emailService: EmailService,
    private smsService: SMSService, // ❌ ยังไม่ต้องใช้
    private pushService: PushService, // ❌ ยังไม่ต้องใช้
    private webhookService: WebhookService // ❌ ยังไม่ต้องใช้
  ) {}
}
```

## Good Practice

```typescript
// ✅ SRP - Single Responsibility
class UserService {
  constructor(
    private db: UserRepository,
    private emailService: EmailService
  ) {}

  async createUser(data: CreateUserInput): Promise<User> {
    return this.db.insertUser(data);
  }
}

class EmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    // send email
  }
}

// ✅ DRY - Don't Repeat Yourself
function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ✅ KISS - Keep It Simple, Stupid
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// ✅ YAGNI - You Aren't Gonna Need It
class UserService {
  constructor(
    private db: UserRepository,
    private emailService: EmailService
  ) {}
  // เพิ่ม services ใหม่เมื่อจำเป็นจริงๆ
}
```

## SOLID Principles

### 1. Single Responsibility Principle (SRP)

แต่ละ class/module ควรมีหน้าที่เดียว

### 2. Open/Closed Principle (OCP)

Open for extension, closed for modification

```typescript
// ✅ Use interfaces/abstract classes
interface PaymentProcessor {
  process(amount: number): Promise<void>;
}

class StripeProcessor implements PaymentProcessor {
  async process(amount: number): Promise<void> {
    // stripe implementation
  }
}
```

### 3. Liskov Substitution Principle (LSP)

Subtypes ต้อง replaceable กับ base types ได้

### 4. Interface Segregation Principle (ISP)

Interfaces ควร small และ specific

### 5. Dependency Inversion Principle (DIP)

Depend on abstractions, not concretions

## Other Principles

### KISS (Keep It Simple, Stupid)

เขียนโค้ดให้เรียบง่าย ไม่ซับซ้อน

### DRY (Don't Repeat Yourself)

หลีกเลี่ยง duplicate code

### YAGNI (You Aren't Gonna Need It)

ไม่ implement features ที่ยังไม่ต้องการ

## References

- [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
