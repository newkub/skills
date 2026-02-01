# Testing Strategies

## Overview

กลยุทธ์การทดสอบที่เหมาะสมกับแต่ละสถานการณ์

## Key Concepts

### When to Test
- **Before Implementation** - TDD (Test-Driven Development)
- **After Implementation** - เพิ่ม tests สำหรับ code ที่มีอยู่
- **During Refactoring** - ทดสอบว่า behavior ไม่เปลี่ยน

### Test Coverage
- **Line Coverage** - บรรทัด code ที่ถูกทดสอบ
- **Branch Coverage** - branches ที่ถูกทดสอบ
- **Function Coverage** - functions ที่ถูกทดสอบ
- **Statement Coverage** - statements ที่ถูกทดสอบ

### Testing Approaches
- **TDD** - เขียน tests ก่อน code
- **BDD** - เขียน tests จาก user perspective
- **Property-Based Testing** - ทดสอบด้วย random inputs

## Examples

### TDD Workflow
```typescript
// 1. Write failing test
it('should calculate discount', () => {
  expect(calculateDiscount(100, 0.1)).toBe(10)
})

// 2. Write minimal code to pass
function calculateDiscount(price, rate) {
  return price * rate
}

// 3. Refactor
function calculateDiscount(price: number, rate: number): number {
  return Math.round(price * rate)
}
```

### BDD Example
```typescript
describe('Shopping Cart', () => {
  it('allows user to add items', () => {
    // Given
    const cart = new ShoppingCart()
    
    // When
    cart.addItem({ id: 1, price: 100 })
    
    // Then
    expect(cart.total).toBe(100)
  })
})
```

## Best Practices

1. ใช้ TDD สำหรับ logic ที่ซับซ้อน
2. ใช้ BDD สำหรับ user-facing features
3. ตั้งเป้า coverage ที่สมเหตุสมผล (80%+)
4. เขียน tests สำหรับ edge cases

## References

- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [BDD Introduction](https://cucumber.io/docs/bdd/)
