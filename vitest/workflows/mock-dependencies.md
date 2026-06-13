---
title: Mock Dependencies
description: Mock dependencies สำหรับ unit testing
auto_execution_mode: 3
---

## Goal

Mock dependencies และ external services สำหรับ unit testing

## Scope

- Mock functions ด้วย vi.fn()
- Mock modules ด้วย vi.mock()
- Mock API calls
- Mock timers
- Mock file system

## Execute

### 1. Mock Functions

```typescript
import { vi } from 'vitest'

// Basic mock
const mockFn = vi.fn()

// Mock return value
mockFn.mockReturnValue(42)

// Mock async return
mockFn.mockResolvedValue('data')

// Mock implementation
mockFn.mockImplementation((a, b) => a + b)

// Reset mock
mockFn.mockReset()
mockFn.mockClear()
```

### 2. Mock Modules

```typescript
// Mock entire module
vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve('mocked'))
}))

// Mock with partial implementation
vi.mock('./api', () => ({
  ...vi.importActual('./api'),
  fetchData: vi.fn()
}))

// Use mocked function
import { fetchData } from './api'
vi.mocked(fetchData).mockResolvedValue('data')
```

### 3. Mock API Calls

```typescript
import { vi } from 'vitest'

// Mock fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'test' })
  } as Response)
)

// Mock axios
vi.mock('axios')
import axios from 'axios'
vi.mocked(axios.get).mockResolvedValue({ data: 'test' })
```

### 4. Mock Timers

```typescript
import { vi, beforeEach, afterEach } from 'vitest'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

it('should call callback after timeout', () => {
  const callback = vi.fn()
  setTimeout(callback, 1000)
  vi.advanceTimersByTime(1000)
  expect(callback).toHaveBeenCalled()
})
```

### 5. Mock File System

```typescript
import { vi } from 'vitest'
import { readFileSync } from 'fs'

vi.mock('fs', () => ({
  readFileSync: vi.fn(() => 'mocked content')
}))

import { readFileSync as mockedRead } from 'fs'
expect(mockedRead('file.txt')).toBe('mocked content')
```

## Rules

- ใช้ `vi.mocked()` สำหรับ type-safe mocking
- ใช้ `vi.useFakeTimers()` สำหรับ test timer-dependent code
- ใช้ `vi.restoreAllMocks()` ใน afterEach เพื่อ cleanup

## Expected Outcome

- Functions ที่ mock ได้อย่างถูกต้อง
- Modules ที่ mock ได้อย่างเหมาะสม
- API calls ที่ mock ได้สำเร็จ
- Timers ที่ test ได้อย่างถูกต้อง
- File system ที่ mock ได้เพื่อ isolated testing
