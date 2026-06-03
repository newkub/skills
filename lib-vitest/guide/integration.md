# Integration

## Purpose

แนะนำการ integrate Vitest กับ frameworks และ tools อื่นๆ

## Scope

- Vite
- React
- Vue
- TypeScript
- CI/CD

## Vite Integration

Vitest สร้างมาบน Vite อยู่แล้ว เพียงแค่ติดตั้งและสร้าง config:

```bash
npm install -D vitest
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ตั้งค่าต่างๆ
  },
})
```

### Shared Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})

// vitest.config.ts - ใช้ config เดียวกัน
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
  },
})
```

## React Integration

### Setup

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
})
```

### Setup File

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom'
```

```typescript
// src/test/setup.ts (with cleanup)
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
```

### Component Test Example

```typescript
// src/components/Counter.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('increments count', () => {
    render(<Counter />)
    
    const button = screen.getByRole('button', { name: /increment/i })
    fireEvent.click(button)
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
```

## Vue Integration

### Setup

```bash
npm install -D vitest jsdom @vue/test-utils
```

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
```

### Vue Test Example

```typescript
// src/components/Counter.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Counter } from './Counter.vue'

describe('Counter', () => {
  it('renders count', () => {
    const wrapper = mount(Counter, {
      props: { initialCount: 5 },
    })
    
    expect(wrapper.text()).toContain('Count: 5')
  })

  it('emits increment event', async () => {
    const wrapper = mount(Counter)
    
    await wrapper.find('button').trigger('click')
    
    expect(wrapper.emitted('increment')).toBeTruthy()
  })
})
```

## TypeScript Integration

### Setup

Vitest รองรับ TypeScript out-of-the-box:

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

### Type Checking

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      tsconfigPath: './tsconfig.json',
    },
  },
})
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "types": ["vitest/globals"]
  },
  "include": ["src"]
}
```

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:ci
      
      - name: Upload coverage
        uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/
```

### GitLab CI

```yaml
# .gitlab-ci.yml
test:
  image: node:20
  script:
    - npm ci
    - npm run test:ci
  coverage: '/All files[^|]*\|[^|]*\|[^|]*\s+([\d\.]+)/'
```

### package.json Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:ci": "vitest run --reporter=dot --coverage"
  }
}
```

## Summary

| Integration | Setup |
|-------------|-------|
| **Vite** | `npm install -D vitest` |
| **React** | + `@testing-library/react` + jsdom |
| **Vue** | + `@vue/test-utils` + jsdom |
| **TypeScript** | Built-in support |
| **CI/CD** | `vitest run --coverage` |