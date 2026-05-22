# Test Configuration

## Description

ตั้งค่าการทดสอบให้เหมาะสมกับ project

## Examples

### TypeScript Configuration

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
}
```

### Coverage Threshold

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    coverage: {
    thresholds: {
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    }
    }
  }
})
```

## Anti-patterns

❌ ไม่ตั้งค่า coverage thresholds
❌ ไม่ include types ที่จำเป็น
❌ ตั้งค่า thresholds สูงเกินไป

## Verification

1. ตรวจสอบว่ามี TypeScript types ที่เหมาะสม
2. รัน tests และตรวจสอบ coverage
3. ตรวจสอบว่า thresholds ถูกต้อง
