# Mocking and Spying

## vi.fn()

สร้าง mock function:

```typescript
import { vi } from 'vitest'

const mockFn = vi.fn()

mockFn('hello')
expect(mockFn).toHaveBeenCalledWith('hello')
expect(mockFn).toHaveBeenCalledTimes(1)
```

### Mock Implementation

```typescript
const mockFn = vi.fn(() => 'default')
const mockFn = vi.fn((arg) => arg.toUpperCase())
```

### Mock Return Values

```typescript
mockFn.mockReturnValue(42)
mockFn.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValue(3)
mockFn.mockResolvedValue('async')
mockFn.mockRejectedValue(new Error('error'))
```

## vi.spyOn()

Spy บน existing object:

```typescript
const calculator = {
  add: (a: number, b: number) => a + b,
}

const spy = vi.spyOn(calculator, 'add')

calculator.add(1, 2)
expect(spy).toHaveBeenCalledWith(1, 2)

spy.mockRestore() // Restore original
```

## vi.mock()

Mock entire module:

```typescript
import { vi } from 'vitest'
import { fetchData } from './api'

vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked' })),
}))

test('uses mocked API', async () => {
  const data = await fetchData()
  expect(data).toEqual({ data: 'mocked' })
})
```

## Partial Mocks

Mock เฉพาะบาง functions:

```typescript
vi.mock('./api', () => ({
  ...vi.importActual('./api'),
  fetchData: vi.fn(() => Promise.resolve({ data: 'mocked' })),
}))
```

## Timers

### vi.useFakeTimers()

ใช้ fake timers:

```typescript
vi.useFakeTimers()

test('timer test', () => {
  const callback = vi.fn()
  setTimeout(callback, 1000)
  
  vi.advanceTimersByTime(1000)
  expect(callback).toHaveBeenCalledTimes(1)
})

vi.useRealTimers() // Restore real timers
```

### vi.runAllTimers()

รัน timers ทั้งหมด:

```typescript
vi.runAllTimers()
vi.runOnlyPendingTimers()
vi.advanceTimersToNextTimer()
```

## Dynamic Imports

Mock dynamic imports:

```typescript
vi.mock('./dynamic-module', () => ({
  default: vi.fn(() => 'mocked'),
}))
```
