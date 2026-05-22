# Test Usage

## Description

เขียน tests ที่ชัดเจนและดูแลรักษาง่าย

## Examples

### Unit Test

```typescript
describe('Calculator', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
```

### Integration Test

```typescript
describe('API Integration', () => {
  it('should fetch user data', async () => {
    const response = await fetch('/api/users/1')
    const data = await response.json()
    expect(data.name).toBe('John')
  })
})
```

### E2E Test

```typescript
test('user can login', async ({ page }) => {
  await page.goto('/login')
  await page.fill('[name="username"]', 'testuser')
  await page.fill('[name="password"]', 'password')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/dashboard')
})
```

## Anti-patterns

❌ เขียน tests ที่ซับซ้อนเกินไป
❌ ไม่ใช้ describe blocks
❌ Test descriptions ไม่ชัดเจน
❌ ทดสอบหลายสิ่งใน test เดียว

## Verification

1. ตรวจสอบว่าแต่ละ test ทดสอบสิ่งเดียว
2. ตรวจสอบว่ามี describe blocks
3. ตรวจสอบว่า test descriptions ชัดเจน
4. รัน tests และตรวจสอบว่าผ่านทั้งหมด
