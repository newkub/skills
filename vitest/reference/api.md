# Vitest API Reference

## Context API

### describe

```typescript
describe(name: string, fn: () => void)
describe.each(cases)(name, fn)
describe.skip(name, fn)
describe.only(name, fn)
```

### it / test

```typescript
it(name: string, fn: () => void)
it.each(cases)(name, fn)
it.skip(name, fn)
it.only(name, fn)
it.todo(name, fn)
```

### beforeAll / afterAll

```typescript
beforeAll(fn: () => void)
beforeAll(fn: () => Promise<void>)
afterAll(fn: () => void)
afterAll(fn: () => Promise<void>)
```

### beforeEach / afterEach

```typescript
beforeEach(fn: () => void)
beforeEach(fn: () => Promise<void>)
afterEach(fn: () => void)
afterEach(fn: () => Promise<void>)
```

## Expect API

### Basic Matchers

```typescript
expect(value).toBe(expected)
expect(value).toEqual(expected)
expect(value).toStrictEqual(expected)
expect(value).toBeDefined()
expect(value).toBeUndefined()
expect(value).toBeNull()
expect(value).toBeTruthy()
expect(value).toBeFalsy()
expect(value).toBeGreaterThan(number)
expect(value).toBeGreaterThanOrEqual(number)
expect(value).toBeLessThan(number)
expect(value).toBeLessThanOrEqual(number)
expect(value).toBeCloseTo(number, precision?)
expect(value).toMatch(regexp | string)
expect(value).toContain(expected)
expect(value).toHaveLength(number)
expect(value).toHaveProperty(key, value?)
expect(value).toMatchObject(properties)
```

### Async Matchers

```typescript
await expect(promise).resolves.toBe(expected)
await expect(promise).rejects.toThrow(error?)
await expect(promise).rejects.toThrowError(message?)
```

### Type Matchers

```typescript
expect(value).toBeTypeOf('string')
expect(value).toBeInstanceOf(Class)
```

## vi API

### vi.fn()

```typescript
vi.fn(implementation?)
vi.fn().mockReturnValue(value)
vi.fn().mockResolvedValue(value)
vi.fn().mockRejectedValue(error)
```

### vi.spyOn()

```typescript
vi.spyOn(object, method)
vi.spyOn(object, method, accessType?)
```

### vi.mock()

```typescript
vi.mock(modulePath, factory?, options?)
vi.mocked(module)
```

### vi.unmock()

```typescript
vi.unmock(modulePath)
```

### vi.doMock()

```typescript
vi.doMock(modulePath, factory?)
```

### vi.resetModules()

```typescript
vi.resetModules()
```

### vi.clearAllMocks()

```typescript
vi.clearAllMocks()
```

### vi.restoreAllMocks()

```typescript
vi.restoreAllMocks()
```

### vi.useFakeTimers()

```typescript
vi.useFakeTimers()
vi.useRealTimers()
```

### vi.runAllTimers()

```typescript
vi.runAllTimers()
vi.runOnlyPendingTimers()
vi.advanceTimersByTime(ms)
vi.advanceTimersToNextTimer()
```

## Fixture API

```typescript
import { test } from 'vitest'

test('with fixture', async ({ page, browser }) => {
  // Use fixtures
})
```
