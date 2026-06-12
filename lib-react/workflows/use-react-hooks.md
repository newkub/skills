# Use React Hooks

## Goal

ใช้ React hooks อย่างถูกต้องและมีประสิทธิภาพ

## Common Hooks

### useState

```javascript
const [count, setCount] = useState(0);
```

### useEffect

```javascript
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

### useContext

```javascript
const value = useContext(MyContext);
```

### useReducer

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### useCallback

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### useMemo

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef

```javascript
const ref = useRef(initialValue);
```

## Custom Hooks

สร้าง custom hooks สำหรับ reusable logic

```javascript
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
```

## Best Practices

1. เรียก hooks ใน top level เท่านั้น
2. เรียก hooks ใน React functions เท่านั้น
3. ใช้ dependency arrays อย่างถูกต้อง
4. ใช้ useCallback และ useMemo เมื่อจำเป็น
