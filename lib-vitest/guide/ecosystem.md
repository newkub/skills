---
description: Ecosystem และ tools ที่เกี่ยวข้องกับ Vitest
---

## Core Ecosystem

### @vitest/ui

UI interface สำหรับ browsing tests

```bash
bun add -D @vitest/ui
vitest --ui
```

### @vitest/coverage-v8

Coverage reporting ด้วย V8

```bash
bun add -D @vitest/coverage-v8
vitest run --coverage
```

### @vitest/browser

Browser testing ด้วย Vitest

```bash
bun add -D @vitest/browser
vitest --browser
```

## Integrations

### React Testing Library

```bash
bun add -D @testing-library/react @testing-library/jest-dom
```

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('should render', () => {
    render(<Button>Click</Button>)
    expect(screen.getByText('Click')).toBeInTheDocument()
  })
})
```

### Vue Test Utils

```bash
bun add -D @vue/test-utils
```

```typescript
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('Button', () => {
  it('should render', () => {
    const wrapper = mount(Button, { slots: { default: 'Click' } })
    expect(wrapper.text()).toBe('Click')
  })
})
```

### MSW (Mock Service Worker)

```bash
bun add -D msw
```

```typescript
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json({ users: [] }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

## VS Code Extension

ติดตั้ง Vitest extension สำหรับ:
- Run tests จาก editor
- Debug tests
- View coverage

## CI/CD Integration

### GitHub Actions

```yaml
- name: Run tests
  run: bun run test:run

- name: Coverage
  run: bun run test:coverage
```

### Vercel

```json
{
  "buildCommand": "bun run build",
  "testCommand": "bun run test:run"
}
```

## Tools

- **vitest-mock-external** - Mock external dependencies
- **@vitest/expect** - Custom matchers
- **vitest-coverage-istanbul** - Istanbul coverage provider
