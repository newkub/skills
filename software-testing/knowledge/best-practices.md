# Best Practices

## Overview

แนวทางปฏิบัติที่ดีสำหรับการเขียน tests

## Key Concepts

### Test Organization

- **Grouping** - ใช้ `describe` blocks เพื่อจัดกลุ่ม tests
- **Naming** - ใช้ชื่อที่อธิบาย behavior อย่างชัดเจน
- **Structure** - เรียง tests ตาม logical order

### Test Quality

- **Independence** - แต่ละ test ไม่ควรพึ่งพา test อื่น
- **Simplicity** - tests ต้องเขียนง่ายและอ่านง่าย
- **Speed** - tests ต้องรันเร็ว

### Maintenance

- **Avoid Duplication** - ใช้ helper functions และ fixtures
- **Keep Tests Updated** - อัปเดต tests เมื่อ code เปลี่ยน
- **Document Edge Cases** - บันทึก edge cases ที่พบ

## Examples

### Good Test Structure

```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid data', () => {
      const user = createUser({ name: 'John', email: 'john@example.com' })
      expect(user.id).toBeDefined()
    })

    it('should throw error with invalid email', () => {
      expect(() => createUser({ name: 'John', email: 'invalid' }))
        .toThrow('Invalid email')
    })
  })
})
```

### Using Fixtures

```typescript
const createUserFixture = () => ({
  name: 'Test User',
  email: 'test@example.com'
})

it('should handle user creation', () => {
  const data = createUserFixture()
  const user = createUser(data)
  expect(user).toBeDefined()
})
```

## Best Practices

1. เขียน tests ที่อ่านง่ายและเข้าใจง่าย
2. ใช้ `describe` blocks เพื่อจัดกลุ่ม tests
3. หลีกเลี่ยง hardcoded values ใน tests
4. ใช้ helper functions สำหรับ setup ที่ซ้ำซ้อน
5. ทดสอบ behavior ไม่ใช่ implementation
6. รัน tests บน CI/CD pipeline

## References

- [Testing Best Practices](https://testingjavascript.com/)
- [Vitest Best Practices](https://vitest.dev/guide/)
