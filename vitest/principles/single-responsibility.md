---
description: Single Responsibility - แต่ละ test ควร test สิ่งเดียว
---

## Principle

แต่ละ test ควร test สิ่งเดียว (one assertion per test หรือ closely related assertions)

## Why

- Test ที่ test หลายสิ่งยากต่อการ debug
- ยากต่อการรู้ว่า assertion ไหนล้มเหลว
- Test ที่ล้มเหลวอาจบอกหลายปัญหาพร้อมกัน

## Examples

### ❌ Bad - Test หลายสิ่ง

```typescript
it('should handle user operations', () => {
  const user = service.create({ name: 'John' })
  expect(user.name).toBe('John')        // Test creation

  const updated = service.update(user.id, { name: 'Jane' })
  expect(updated.name).toBe('Jane')     // Test update

  service.delete(user.id)
  expect(service.find(user.id)).toBeNull() // Test deletion
})
```

### ✅ Good - Test สิ่งเดียว

```typescript
it('should create user with correct name', () => {
  const user = service.create({ name: 'John' })
  expect(user.name).toBe('John')
})

it('should update user name', () => {
  const user = service.create({ name: 'John' })
  const updated = service.update(user.id, { name: 'Jane' })
  expect(updated.name).toBe('Jane')
})

it('should delete user', () => {
  const user = service.create({ name: 'John' })
  service.delete(user.id)
  expect(service.find(user.id)).toBeNull()
})
```

## Closely Related Assertions

สามารถมีหลาย assertions ถ้าเกี่ยวข้องกันและ test สิ่งเดียว

```typescript
it('should return user with all fields', () => {
  const user = service.create({
    name: 'John',
    email: 'john@example.com',
    age: 30
  })

  expect(user.name).toBe('John')
  expect(user.email).toBe('john@example.com')
  expect(user.age).toBe(30)
  // ✅ All assertions test สิ่งเดียว: user creation
})
```

## Tips

- ใช้ describe จัดกลุ่ม tests ที่เกี่ยวข้องกัน
- ถ้า test มีหลาย assertions พิจารณาแยกเป็นหลาย tests
- ใช้ `describe.each` สำหรับ test หลาย cases ที่คล้ายกัน
