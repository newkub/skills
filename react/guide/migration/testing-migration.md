# Testing Migration

## ภาพรวม

วิธีการ migrate ระหว่าง testing frameworks

## Jest to Vitest

### 1. Install Vitest

```bash
bun add -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom
```

### 2. Update Configuration

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
});
```

### 3. Update Tests

```javascript
// ❌ Jest
test('renders button', () => {
  render(<Button>Click</Button>);
  expect(screen.getByText('Click')).toBeInTheDocument();
});

// ✅ Vitest (same syntax)
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders text', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
});
```

## สรุป

Testing migration:
1. Install new testing framework
2. Update configuration
3. Update test syntax ถ้าจำเป็น
4. Run tests และ fix issues
