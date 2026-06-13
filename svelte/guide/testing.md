# Testing

## ภาพรวม

การทดสอบ Svelte applications

## Unit Testing

### Vitest Setup

```bash
bun add -D vitest @testing-library/svelte
```

### vitest.config.js

```javascript
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    environment: 'jsdom'
  }
});
```

### Component Test

```javascript
import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Counter from './Counter.svelte';

describe('Counter', () => {
  it('renders initial count', () => {
    render(Counter, { count: 0 });
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  it('increments on click', async () => {
    render(Counter, { count: 0 });
    const button = screen.getByRole('button');
    
    await button.click();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
```

## Integration Testing

### Testing User Interactions

```javascript
import { render, screen, fireEvent } from '@testing-library/svelte';
import Form from './Form.svelte';

test('submits form', async () => {
  render(Form);
  
  const input = screen.getByLabelText('Name');
  await fireEvent.input(input, { target: { value: 'John' } });
  
  const button = screen.getByText('Submit');
  await button.click();
  
  expect(screen.getByText('Submitted: John')).toBeInTheDocument();
});
```

## E2E Testing

### Playwright Setup

```bash
bun add -D @playwright/test
bunx playwright install
```

### Playwright Test

```javascript
import { test, expect } from '@playwright/test';

test('counter increments', async ({ page }) => {
  await page.goto('http://localhost:5173');
  
  const button = page.getByRole('button');
  await button.click();
  
  await expect(page.getByText('1')).toBeVisible();
});
```

## Testing Stores

### Store Test

```javascript
import { writable } from 'svelte/store';
import { describe, it, expect } from 'vitest';

describe('Counter Store', () => {
  it('increments value', () => {
    const store = writable(0);
    
    store.update(n => n + 1);
    
    let value;
    store.subscribe(v => value = v);
    
    expect(value).toBe(1);
  });
});
```

## Testing Async Code

### Async Component Test

```javascript
import { render, screen, waitFor } from '@testing-library/svelte';
import AsyncComponent from './AsyncComponent.svelte';

test('loads data', async () => {
  render(AsyncComponent);
  
  await waitFor(() => {
    expect(screen.getByText('Data loaded')).toBeInTheDocument();
  });
});
```

## Mocking

### Mocking API

```javascript
import { vi } from 'vitest';

vi.mock('./api', () => ({
  fetchData: vi.fn(() => Promise.resolve({ data: 'mock' }))
}));
```

### Mocking Stores

```javascript
import { writable } from 'svelte/store';

const mockStore = writable(0);
```

## Test Coverage

### Coverage Report

```bash
bunx vitest --coverage
```

### Coverage Configuration

```javascript
// vitest.config.js
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
});
```

## Best Practices

### Test Structure

```javascript
describe('Component', () => {
  describe('Rendering', () => {
    it('renders correctly');
  });
  
  describe('Interactions', () => {
    it('handles click');
    it('handles input');
  });
  
  describe('Edge Cases', () => {
    it('handles empty state');
    it('handles error state');
  });
});
```

### Test Naming

- **Descriptive**: `increments counter when button clicked`
- **Not**: `test1`, `test button`

## Summary

Testing approaches:
- **Unit**: Vitest + Testing Library
- **Integration**: User interaction tests
- **E2E**: Playwright
- **Stores**: Direct store testing
- **Async**: waitFor for async operations
- **Mocking**: vi.mock for dependencies
- **Coverage**: Built-in coverage reporting
