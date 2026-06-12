# Key Concept

## Purpose

อธิบายแนวคิดหลักของ Vitest สำหรับ unit testing

## Scope

- Test File Pattern
- Test Suite (describe)
- Test Case (it/test)
- Expect & Matchers
- vi Utilities
- Mock & Spy

## Test File Pattern

ไฟล์ test ต้องมี suffix ตามรูปแบบนี้:

| Pattern | คำอธิบาย | ตัวอย่าง |
|---------|----------|---------|
| `.test.ts` | Unit test | `sum.test.ts` |
| `.spec.ts` | Specification | `sum.spec.ts` |

```typescript
// src/utils/sum.ts
export function sum(a: number, b: number): number {
  return a + b
}

// src/utils/sum.test.ts
import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```

## Test Suite — describe

`describe` ใช้จัดกลุ่ม tests ที่เกี่ยวข้องกัน:

```typescript
describe('Calculator', () => {
  describe('add', () => {
    it('adds positive numbers', () => {})
    it('adds negative numbers', () => {})
  })
  
  describe('subtract', () => {
    it('subtracts positive numbers', () => {})
  })
})
```

| Option | Type | Description |
|--------|------|-------------|
| `skip` | - | ข้าม suite นี้ |
| `only` | - | รันเฉพาะ suite นี้ |
| `each` | `table` | Parameterized tests |

## Test Case — it / test

`it` และ `test` เป็น alias กัน:

```typescript
// ใช้ได้ทั้งสองแบบ
it('should add numbers', () => {})
test('adds numbers', () => {})
```

### Test Options

```typescript
it('async operation', async () => {
  // async/await support
}, {
  timeout: 5000,  // custom timeout
  retry: 3,       // retry on failure
})
```

## Expect & Matchers

### Common Matchers

| Matcher | คำอธิบาย | ตัวอย่าง |
|---------|----------|---------|
| `toBe(value)` | เปรียบเทียบด้วย `===` | `expect(1 + 1).toBe(2)` |
| `toEqual(value)` | เปรียบเทียบ deep equality | `expect({a:1}).toEqual({a:1})` |
| `toBeNull()` | ตรวจสอบ null | `expect(null).toBeNull()` |
| `toBeTruthy()` | ตรวจสอบ truthy | `expect(true).toBeTruthy()` |
| `toBeFalsy()` | ตรวจสอบ falsy | `expect(false).toBeFalsy()` |
| `toContain(item)` | ตรวจสอบ array/string contains | `expect([1,2]).toContain(1)` |
| `toHaveLength(n)` | ตรวจสอบ length | `expect([1,2]).toHaveLength(2)` |
| `toThrow()` | ตรวจสอบ throw error | `expect(fn).toThrow()` |

### Async Matchers

```typescript
// Promise
await expect(Promise.resolve(1)).resolves.toBe(1)
await expect(Promise.reject(Error())).rejects.toThrow()

// Async/await
await expect(asyncFn()).resolves.toEqual(expected)
```

### Snapshot Matchers

```typescript
it('renders correctly', () => {
  expect(render()).toMatchSnapshot()
})
```

## vi Utilities

`vi` เป็น global object สำหรับ Vitest utilities:

| Function | คำอธิบาย | ตัวอย่าง |
|----------|----------|---------|
| `vi.fn()` | สร้าง mock function | `vi.fn(() => 42)` |
| `vi.spyOn(obj, method)` | สร้าง spy | `vi.spyOn(console, 'log')` |
| `vi.mock(path)` | Mock module | `vi.mock('./api')` |
| `vi.mocked(obj)` | Type helper | `vi.mocked(fetch).mockResolvedValue` |
| `vi.hoisted()` | Hoist imports | `const { fn } = vi.hoisted(() => vi.fn())` |
| `vi.useFakeTimers()` | Fake timers | `vi.useFakeTimers()` |
| `vi.restoreAllMocks()` | Restore all | `vi.restoreAllMocks()` |

### Mock Function

```typescript
const callback = vi.fn()
callback()  // tracks calls

expect(callback).toHaveBeenCalled()
expect(callback).toHaveBeenCalledWith('arg')
expect(callback).toHaveBeenCalledTimes(1)
```

### Mock Module

```typescript
vi.mock('./api', () => ({
  fetchData: vi.fn().mockResolvedValue({ data: 'test' }),
}))

// Dynamic import
vi.mock('./utils', async (importOriginal) => {
  const actual = await importOriginal()
  return { ...actual, fetch: vi.fn() }
})
```

## Summary

| Concept | Purpose |
|---------|---------|
| `describe` | จัดกลุ่ม tests |
| `it/test` | สร้าง test case |
| `expect` | Assertion |
| `vi.fn()` | Mock function |
| `vi.mock()` | Mock module |
| `vi.spyOn()` | Spy on method |