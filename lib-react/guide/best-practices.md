# Best Practices

## Component Structure

```tsx
// Good: Single responsibility
function UserProfile({ userId }: { userId: string }) {
  const { data: user } = useUser(userId);

  if (!user) return <Loading />;
  return <div>{user.name}</div>;
}
```

## State Management

| Approach | Use Case |
|----------|----------|
| useState | Simple local state |
| useReducer | Complex state logic |
| Context | Shared state |
| Zustand | Global state |

## Hooks Patterns

```tsx
// Custom hook
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// Usage
const { count, increment } = useCounter(0);
```

## Performance

- Use `React.memo` for expensive components
- Use `useMemo` for expensive calculations
- Use `useCallback` for callback references
- Avoid inline objects/arrays as props