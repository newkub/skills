# React Testing

## ภาพรวม

การทดสอบ React applications เพื่อให้มั่นใจในคุณภาพและความถูกต้องของ code

## Testing Libraries

### React Testing Library

```bash
bun add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**ตัวอย่าง:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Vitest

```bash
bun add -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom
```

**ตัวอย่าง:**
```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Playwright

```bash
bun add -D @playwright/test
```

**ตัวอย่าง:**
```javascript
import { test, expect } from '@playwright/test';

test('button click', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('button');
  await expect(page).toHaveURL('http://localhost:3000/success');
});
```

## Testing Strategies

### Unit Testing

ทดสอบ components แยกจากกัน

```javascript
test('Counter increments', () => {
  const { getByText } = render(<Counter />);
  const button = getByText('Increment');
  
  fireEvent.click(button);
  
  expect(getByText('Count: 1')).toBeInTheDocument();
});
```

### Integration Testing

ทดสอบการทำงานร่วมกันของ components

```javascript
test('Form submission', () => {
  const { getByLabelText, getByText } = render(<LoginForm />);
  
  fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(getByLabelText('Password'), { target: { value: 'password' } });
  fireEvent.click(getByText('Submit'));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password'
  });
});
```

### E2E Testing

ทดสอบ user flows แบบเต็ม

```javascript
test('user login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

## Testing Hooks

### Custom Hooks

```javascript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('increments counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```

### Context

```javascript
import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';

function renderWithTheme(ui, theme = 'light') {
  return render(
    <ThemeProvider value={{ theme, setTheme: jest.fn() }}>
      {ui}
    </ThemeProvider>
  );
}

test('renders with theme', () => {
  renderWithTheme(<Button />, 'dark');
  // assertions
});
```

## Mocking

### API Calls

```javascript
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays users', async () => {
  render(<UserList />);
  
  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
```

### Components

```javascript
jest.mock('./ChildComponent', () => ({
  ChildComponent: () => <div>Mocked Child</div>
  )
}));

test('renders with mocked child', () => {
  render(<ParentComponent />);
  expect(screen.getByText('Mocked Child')).toBeInTheDocument();
});
```

## Testing Best Practices

### 1. Test User Behavior

```javascript
// ❌ Testing implementation
test('useState is called', () => {
  const useStateSpy = jest.spyOn(React, 'useState');
  render(<Counter />);
  expect(useStateSpy).toHaveBeenCalled();
});

// ✅ Testing behavior
test('counter increments when button clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

### 2. Use Accessible Queries

```javascript
// ❌ Using class names
expect(screen.getByClassName('btn-primary')).toBeInTheDocument();

// ✅ Using accessible queries
expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
```

### 3. Test Async Code

```javascript
test('async data loading', async () => {
  render(<UserList />);
  
  // Wait for async operation
  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
```

## Coverage

### Vitest Coverage

```javascript
// vitest.config.js
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/']
    }
  }
});
```

### Jest Coverage

```javascript
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/test/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    statements: 80
    }
  }
};
```

## สรุป

Testing best practices:
1. Test behavior ไม่ใช่ implementation
2. Use accessible queries
3. Mock external dependencies
4. Test async code properly
5. Maintain good coverage
6. Run tests in CI/CD
