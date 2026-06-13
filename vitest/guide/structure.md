---
description: โครงสร้าง test files และ organization
---

## Test File Structure

### Naming Conventions

```text
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx       # Component tests
├── utils/
│   ├── math.ts
│   └── math.test.ts          # Utility tests
├── services/
│   ├── api.ts
│   └── api.test.ts           # Service tests
└── __tests__/                # หรือใช้ folder แยก
    ├── integration/
    └── e2e/
```

### Test File Patterns

```typescript
// Component test
Button.test.tsx
Button.spec.tsx

// Unit test
math.test.ts
math.spec.ts

// Integration test
api.integration.test.ts
```

## Test Organization

### By Feature

```text
tests/
├── auth/
│   ├── login.test.ts
│   ├── register.test.ts
│   └── auth.service.test.ts
├── users/
│   ├── user.service.test.ts
│   └── user.controller.test.ts
└── posts/
    ├── post.service.test.ts
    └── post.controller.test.ts
```

### By Type

```text
tests/
├── unit/
│   ├── services/
│   └── utils/
├── integration/
│   └── api/
└── e2e/
    └── flows/
```

## Test File Template

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

describe('FeatureName', () => {
  let sut: SystemUnderTest

  beforeEach(() => {
    // Setup
    sut = new SystemUnderTest()
  })

  afterEach(() => {
    // Cleanup
    sut.dispose()
  })

  describe('operation', () => {
    it('should do something', () => {
      // Arrange
      const input = 'test'

      // Act
      const result = sut.operation(input)

      // Assert
      expect(result).toBe('expected')
    })
  })
})
```

## Best Practices

- วาง test files ใกล้กับ source files
- ใช้ naming convention สม่ำเสมอ
- จัดกลุ่ม tests ตาม feature หรือ type
- ใช้ `__tests__` folder สำหรับ integration/e2e tests
