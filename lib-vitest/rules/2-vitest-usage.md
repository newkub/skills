# Vitest Usage

## Description
เขียน tests ด้วย Vitest ตาม best practices สำหรับ TypeScript และ JavaScript

## Examples
```typescript
// src/__tests__/calculator.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { Calculator } from '@/calculator'

describe('Calculator', () => {
  let calculator: Calculator

  beforeEach(() => {
    calculator = new Calculator()
  })

  it('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5)
  })

  it('should throw error for invalid input', () => {
    expect(() => calculator.add(NaN, 5)).toThrow('Invalid input')
  })

  it('should handle async operations', async () => {
    const result = await calculator.asyncAdd(2, 3)
    expect(result).toBe(5)
  })
})
```

## Anti-patterns
❌ ไม่ใช้ `describe` และ `it` สำหรับ grouping tests
❌ ไม่ตั้งชื่อ tests ที่ชัดเจน
❌ ไม่ cleanup หลังจาก tests
❌ ใช้ `any` ใน TypeScript tests

## Rules
1. ใช้ `describe` สำหรับ grouping related tests
2. ตั้งชื่อ tests ที่บอกว่าทำอะไรและคาดหวังผลลัพธ์อะไร
3. ใช้ `beforeEach` สำหรับ setup ก่อนแต่ละ test
4. ใช้ `expect` กับ matchers ที่เหมาะสม
5. เขียน tests สำหรับ edge cases และ error cases

## Verification
1. ตรวจสอบว่า tests รันผ่านทั้งหมด
2. ทดสอบด้วย `npx vitest run --coverage`
3. ตรวจสอบว่า TypeScript types ถูกต้อง
