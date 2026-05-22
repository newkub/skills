# Testing API

## Test Definition

### describe

จัดกลุ่ม tests:

```typescript
describe('Math', () => {
  describe('add', () => {
    it('should add numbers', () => {
      expect(add(1, 2)).toBe(3)
    })
  })
})
```

### it / test

กำหนด test case:

```typescript
it('should work', () => {
  expect(true).toBe(true)
})

test('also works', () => {
  expect(true).toBe(true)
})
```

### describe.skip / describe.only

Skip หรือ run เฉพาะ suite:

```typescript
describe.skip('skipped suite', () => {
  // ไม่ถูกรัน
})

describe.only('only this suite', () => {
  // รันเฉพาะ suite นี้
})
```

## Assertions

### expect

ใช้ assertions:

```typescript
expect(value).toBe(expected)       // Strict equality
expect(value).toEqual(expected)     // Deep equality
expect(value).toStrictEqual(expected) // Strict deep equality
expect(value).toContain(expected)   // Array contains
expect(value).toMatch(expected)     // String matches regex
expect(value).toHaveLength(n)       // Array length
expect(value).toHaveProperty('key') // Object has property
```

### Common Matchers

```typescript
// Numbers
expect(value).toBeGreaterThan(5)
expect(value).toBeLessThanOrEqual(10)
expect(value).toBeCloseTo(0.3, 2) // 0.30 ± 0.005

// Booleans
expect(value).toBeTruthy()
expect(value).toBeFalsy()
expect(value).toBeDefined()
expect(value).toBeNull()
expect(value).toBeUndefined()

// Types
expect(value).toBeTypeOf('string')
expect(value).toBeInstanceOf(Date)

// Async
await expect(promise).resolves.toBe(expected)
await expect(promise).rejects.toThrow()
```

## Lifecycle Hooks

### beforeAll / afterAll

รันก่อน/หลังทุก tests ใน suite:

```typescript
describe('Database', () => {
  beforeAll(async () => {
    await connectToDatabase()
  })

  afterAll(async () => {
    await disconnectFromDatabase()
  })
})
```

### beforeEach / afterEach

รันก่อน/หลังแต่ละ test:

```typescript
describe('Counter', () => {
  beforeEach(() => {
    counter.reset()
  })

  afterEach(() => {
    counter.cleanup()
  })
})
```

## Async Tests

### async/await

```typescript
it('should fetch data', async () => {
  const data = await fetchData()
  expect(data).toBeDefined()
})
```

### Promises

```typescript
it('should resolve', () => {
  return expect(promise).resolves.toBe(expected)
})
```

### Callbacks

```typescript
it('should callback', (done) => {
  fetchData((data) => {
    expect(data).toBe(expected)
    done()
  })
})
```
