# React Best Practices

## Overview

Best practices สำหรับ React development เพื่อให้ได้ applications ที่มีคุณภาพสูง maintainable และ performant

## Key Concepts

### 1. Component Architecture

**Single Responsibility Principle**
แต่ละ component ควรมีความรับผิดชอบเดียว:

```tsx
// Good: Focused component
const UserAvatar = ({ user, size }) => (
  <img src={user.avatar} alt={user.name} width={size} height={size} />
);

// Bad: Component doing too much
const UserProfile = ({ user }) => (
  <div>
    <img src={user.avatar} alt={user.name} />
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <button onClick={() => updateUser(user)}>Update</button>
  </div>
);
```

**Composition over Inheritance**
ใช้ composition แทน inheritance:

```tsx
// Good: Using composition
const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

// Usage
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

### 2. State Management

**Lift State Up**
ยก state ขึ้นไปให้สูงที่สุดที่จำเป็น:

```tsx
// Good: State lifted to parent
const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Child count={count} onIncrement={() => setCount(c => c + 1)} />
    </div>
  );
};

// Bad: State in child when parent needs it
const Child = () => {
  const [count, setCount] = useState(0);
  return <div>Count: {count}</div>;
};
```

**Use Appropriate State Solution**
เลือก state management solution ที่เหมาะสม:

- Local state: สำหรับ UI state ที่ไม่ต้องแชร์
- Context API: สำหรับ global state ที่ไม่ซับซ้อน
- State libraries: สำหรับ complex state management

### 3. Performance Optimization

**Memoization**
ใช้ memoization อย่างเหมาะสม:

```tsx
// Good: Memoized component
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);

  return <div>{processedData}</div>;
});

// Bad: Unnecessary memoization
const SimpleComponent = React.memo(({ text }) => (
  <div>{text}</div>
));
```

**Code Splitting**
ใช้ lazy loading สำหรับ large components:

```tsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

### 4. Code Organization

**File Structure**
จัดโครงสร้างไฟล์อย่างเป็นระเบียบ:

```text
src/
├── components/
│   ├── common/
│   ├── features/
│   └── layout/
├── hooks/
├── utils/
├── services/
└── types/
```

**Naming Conventions**
ใช้ naming conventions ที่สอดคล้องกัน:

- Components: PascalCase
- Files: PascalCase สำหรับ components, camelCase สำหรับ utilities
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

## Examples

### Good Component Example

```tsx
interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  const handleEdit = useCallback(() => {
    onEdit(user);
  }, [user, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete(user.id);
  }, [user.id, onDelete]);

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div className="user-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
```

### Custom Hook Example

```tsx
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

## Best Practices

### 1. Development Practices

- ใช้ TypeScript สำหรับ type safety
- เขียน tests สำหรับ components และ hooks
- ใช้ ESLint และ Prettier สำหรับ code consistency
- ใช้ Git hooks สำหรับ pre-commit checks

### 2. Performance Practices

- ใช้ React.memo สำหรับ pure components
- ใช้ useMemo และ useCallback อย่างระมัดระวัง
- ใช้ lazy loading สำหรับ code splitting
- Optimize bundle size ด้วย tree shaking

### 3. Accessibility Practices

- ใช้ semantic HTML elements
- เพิ่ม ARIA labels และ roles
- ทดสอบด้วย screen readers
- ใช้ keyboard navigation

### 4. Security Practices

- แสดงข้อมูลที่ได้รับอนุญาตเท่านั้น
- ใช้ HTTPS สำหรับ production
- ตรวจสอบ input จากผู้ใช้
- ใช้ Content Security Policy (CSP)

## References

- [React Documentation](https://react.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
