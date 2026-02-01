# React Testing

## Description
การตั้งค่าและเขียน tests สำหรับ React applications เพื่อให้มั่นใจในความถูกต้องของ code

## Why
Testing ช่วยให้มั่นใจว่า application ทำงานถูกต้อง ลด bugs และทำให้การ refactor ปลอดภัยขึ้น

## Anti-patterns
❌ ทดสอบ implementation details แทนการทดสอบ behavior
❌ ไม่ทดสอบ edge cases
❌ ใช้ testing library ผิดวิธี

## Best Practices
✅ ทดสอบ user behavior ไม่ใช่ implementation
✅ เขียน tests ที่อ่านง่ายและ maintainable
✅ ใช้ appropriate testing tools สำหรับแต่ละกรณี

## Rules

### 1. Testing Tools
**React Testing Library:**
- ทดสอบ components จากมุมมองผู้ใช้
- ใช้ queries ที่เข้าถึงได้จริง

**Jest:**
- Testing framework หลัก
- Mock functions และ modules

**MSW (Mock Service Worker):**
- Mock API responses
- ทดสอบ network requests

### 2. Component Testing
ทดสอบ components ด้วย React Testing Library:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 3. Custom Hooks Testing
ทดสอบ custom hooks ด้วย @testing-library/react-hooks:

```tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('initializes with initial value', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  test('increments count', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
});
```

### 4. Integration Testing
ทดสอบการทำงานร่วมกันของ components:

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { UserForm } from './UserForm';

describe('UserForm Integration', () => {
  test('submits form successfully', async () => {
    render(<UserForm />);
    
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    
    await waitFor(() => {
      expect(screen.getByText('Form submitted successfully')).toBeInTheDocument();
    });
  });
});
```

### 5. API Testing
ทดสอบ API calls ด้วย MSW:

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../mocks/server';
import { UserList } from './UserList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserList', () => {
  test('displays users from API', async () => {
    render(<UserList />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
});
```

### 6. Testing Best Practices
- ใช้ `data-testid` เฉพาะกรณีที่จำเป็น
- ทดสอบ accessibility ด้วย `@testing-library/jest-dom`
- ใช้ `waitFor` สำหรับ async operations
- Mock external dependencies อย่างเหมาะสม

## Impact
ถ้าไม่ทำตาม:
- Bugs ไม่ถูกตรวจพบ
- Refactor มีความเสี่ยงสูง
- Code quality ลดลง

## Verification
1. ตรวจสอบ test coverage ด้วย Jest coverage
2. รัน tests ใน CI/CD pipeline
3. ตรวจสอบว่า tests ไม่ซับซ้อนเกินไป

## References
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [MSW Documentation](https://mswjs.io/docs/)
