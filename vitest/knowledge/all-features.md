# Vitest All Features

## Concepts
Vitest มีฟีเจอร์ครบครันสำหรับการทดสอบสมัยใหม่ รองรับทุกความต้องการจาก unit tests ไปจนถึง E2E tests

**Core Features:**
- Jest-compatible API สำหรับการย้ายมาใช้ง่าย
- TypeScript/JSX support โดยไม่ต้อง configuration
- In-source testing สำหรับ testing ใกล้ source code
- Snapshot testing สำหรับ UI testing
- Mocking และ stubbing ที่ยืดหยุ่น

**Performance Features:**
- Smart และ instant watch mode
- Parallel test execution
- File-based dependency tracking
- Hot Module Replacement ใน tests

**Integration Features:**
- Vite plugin ecosystem
- Multiple test environments (node, jsdom, happy-dom)
- Coverage reporting (c8, v8, istanbul)
- CI/CD integration

## Best Practices
1. ใช้ in-source testing สำหรับ tests ที่เกี่ยวข้องกับ implementation
2. ตั้งค่า multiple test environments สำหรับ different use cases
3. ใช้ snapshot testing สำหรับ UI components
4. ตั้งค่า coverage thresholds สำหรับ quality gates
5. ใช้ mocking สำหรับ external dependencies

## Examples
```typescript
// In-source testing
import { test, expect } from 'vitest'

function sum(a: number, b: number): number {
  return a + b
}

if (import.meta.vitest) {
  test('sum', () => {
    expect(sum(1, 2)).toBe(3)
  })
}

// Snapshot testing
import { test, expect } from 'vitest'
import { render } from './renderer'

test('renderer snapshot', () => {
  const result = render({ title: 'Hello' })
  expect(result).toMatchSnapshot()
})

// Mocking
import { vi, test, expect } from 'vitest'
import { fetchUser } from './api'

test('fetchUser', async () => {
  vi.mock('./api', () => ({
    fetchUser: vi.fn().mockResolvedValue({ id: 1, name: 'John' })
  }))
  
  const user = await fetchUser(1)
  expect(user.name).toBe('John')
})
```
