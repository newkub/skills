# Core Concepts

## Overview

การทดสอบเป็นกระบวนการตรวจสอบว่า software ทำงานตามที่คาดหวัง

## Key Concepts

### Test Pyramid

- **Unit Tests** - ทดสอบฟังก์ชัน/คอมโพเนนต์แยกตัว (70%)
- **Integration Tests** - ทดสอบการทำงานร่วมกัน (20%)
- **E2E Tests** - ทดสอบการทำงานจริงทั้งระบบ (10%)

### Test Types

- **Unit Tests** - ทดสอบส่วนย่อยที่สุด
- **Integration Tests** - ทดสอบการเชื่อมต่อระหว่าง components
- **E2E Tests** - ทดสอบ user flow จริง
- **Snapshot Tests** - ทดสอบ UI output
- **Performance Tests** - ทดสอบความเร็วและประสิทธิภาพ

### Testing Principles

- **AAA Pattern** - Arrange, Act, Assert
- **Test Isolation** - แต่ละ test ไม่พึ่งพา test อื่น
- **Fast Feedback** - tests ต้องรันเร็ว
- **Maintainability** - tests ต้องดูแลรักษาง่าย

## Examples

### AAA Pattern

```typescript
it('should add numbers', () => {
  // Arrange
  const a = 1
  const b = 2

  // Act
  const result = add(a, b)

  // Assert
  expect(result).toBe(3)
})
```

## Best Practices

1. เขียน tests ที่เป็น independent
2. เขียน test descriptions ที่ชัดเจน
3. ใช้ mocking อย่างระมัดระวัง
4. รัน tests อัตโนมัติใน CI/CD

## References

- [Vitest Documentation](https://vitest.dev/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
