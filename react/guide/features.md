# All Features

## Hooks

| Hook | Description |
|------|-------------|
| useState | State management |
| useEffect | Side effects |
| useContext | Context access |
| useRef | DOM reference |
| useMemo | Memoization |
| useCallback | Callback memoization |

## useState

```tsx
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);
```

## useEffect

```tsx
useEffect(() => {
  const subscription = api.subscribe();
  return () => subscription.unsubscribe();
}, [dependencies]);
```

## useContext

```tsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
}

function Component() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}
```

## Custom Hooks

```tsx
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
```