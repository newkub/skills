# Code Quality

## Rationale

Code quality ที่ดีช่วยให้ codebase maintainable, readable, และ reduce bugs ในระยะยาว

## Bad Practice

```typescript
// ❌ Magic numbers
function calculatePrice(price: number): number {
  return price * 1.07; // ❌ 1.07 คืออะไร?
}

// ❌ Deep nesting
function processOrder(order: Order): void {
  if (order) {
    if (order.items) {
      if (order.items.length > 0) {
        for (const item of order.items) {
          if (item.price > 0) {
            // ... ยาวและซับซ้อน
          }
        }
      }
    }
  }
}

// ❌ Long functions
function processUser(user: User): void {
  // ... 200 lines
}

// ❌ Duplicate code
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUserEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

## Good Practice

```typescript
// ✅ Constants สำหรับ magic numbers
const TAX_RATE = 1.07;

function calculatePrice(price: number): number {
  return price * TAX_RATE;
}

// ✅ Early returns ลด nesting
function processOrder(order: Order | null): void {
  if (!order) return;
  if (!order.items || order.items.length === 0) return;

  for (const item of order.items) {
    if (item.price > 0) {
      processItem(item);
    }
  }
}

// ✅ Small, focused functions
function calculateTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function applyDiscount(total: number, discount: number): number {
  return total * (1 - discount);
}

// ✅ DRY - Don't Repeat Yourself
function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ✅ Use utility functions
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
```

## Best Practices

### 1. Function Length
- **Max 20-30 lines** ต่อ function
- แยก logic ที่ซับซ้อนออกเป็น functions ย่อย

### 2. Nesting Level
- **Max 3 levels** ของ nesting
- ใช้ **early returns** ลด nesting

### 3. Naming
- ใช้ **descriptive names** (calculatePrice ไม่ใช้ cp)
- ใช้ **verbs** สำหรับ functions (get, set, calculate)
- ใช้ **nouns** สำหรับ variables/classes

### 4. Comments
- **Comment "why"** ไม่ใช่ "what"
- หลีกเลี่ยง comments ที่ไม่จำเป็น

```typescript
// ❌ Bad comment - บอกสิ่งที่ชัดเจน
// Set the user's name
user.name = 'John';

// ✅ Good comment - บอกเหตุผล
// Use UTC timezone to avoid timezone issues
const date = new Date().toISOString();
```

### 5. Code Organization
- Group related functions ด้วยกัน
- ใช้ folders สำหรับ modules ที่แตกต่างกัน

## References

- [Clean Code by Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- [Refactoring by Martin Fowler](https://www.oreilly.com/library/view/refactoring-improving/9780201485677/)
