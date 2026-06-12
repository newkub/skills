# React Troubleshooting

## ภาพรวม

การแก้ไขปัญหาที่พบบ่อยใน React applications

## Common Issues

### 1. Infinite Re-renders

**Problem:** Component re-renders อย่างไม่มีที่สิ้นสุด

**Causes:**
- State update ใน render body
- Effect ที่ไม่มี dependencies ที่ถูกต้อง
- Callback ที่ trigger state update

**Solution:**
```javascript
// ❌ Infinite loop
function Counter() {
  const [count, setCount] = useState(0);
  setCount(count + 1); // Updates state on every render
  return <div>{count}</div>;
}

// ✅ Fixed
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(count + 1);
  }, []); // Run only once
  
  return <div>{count}</div>;
}
```

### 2. Stale Closure

**Problem:** Component ใช้ค่าเก่าของ state หรือ props

**Causes:**
- Closure ที่ capture ค่าเก่า
- Missing dependencies ใน useEffect

**Solution:**
```javascript
// ❌ Stale closure
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // Always logs 0
    }, 1000);
    
    return () => clearInterval(interval);
  }, []); // Missing count dependency
  
  return <div>{count}</div>;
}

// ✅ Fixed
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [count]); // Include count dependency
  
  return <div>{count}</div>;
}
```

### 3. Memory Leaks

**Problem:** Memory ไม่ถูก release หลัง component unmount

**Causes:**
- ไม่ cleanup subscriptions
- ไม่ cleanup timers
- ไม่ cleanup event listeners

**Solution:**
```javascript
// ❌ Memory leak
function DataFetcher() {
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    // No cleanup
  }, []);
  
  return <div>Data</div>;
}

// ✅ Fixed
function DataFetcher() {
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    
    return () => clearInterval(interval); // Cleanup
  }, []);
  
  return <div>Data</div>;
}
```

### 4. Hydration Mismatch

**Problem:** Server-side rendering ไม่ตรงกับ client-side

**Causes:**
- ใช้ APIs ที่ไม่มีบน server (window, localStorage)
- Random values ที่ต่างกันระหว่าง server และ client
- Time-based values

**Solution:**
```javascript
// ❌ Hydration mismatch
function Component() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  return <div>{window.innerWidth}</div>;
}

// ✅ Fixed
function Component() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return <div>{width}</div>;
}
```

## Performance Issues

### 1. Slow Rendering

**Problem:** Component render ช้า

**Causes:**
- Large component trees
- Expensive calculations ใน render
- Unnecessary re-renders

**Solution:**
```javascript
// ❌ Slow rendering
function ExpensiveList({ items }) {
  const sorted = items.sort((a, b) => a.value - b.value); // Sorts on every render
  return <ul>{sorted.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}

// ✅ Fixed with useMemo
function ExpensiveList({ items }) {
  const sorted = useMemo(() => 
    items.sort((a, b) => a.value - b.value),
    [items]
  );
  return <ul>{sorted.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}
```

### 2. Large Bundle Size

**Problem:** Bundle ใหญ่เกินไป

**Causes:**
- Import ทั้ง library แทนที่จะ import เฉพาะฟังก์ชัน
- ไม่ใช้ code splitting
- Large dependencies

**Solution:**
```javascript
// ❌ Import entire library
import _ from 'lodash';

// ✅ Import specific functions
import { debounce } from 'lodash-es';

// ❌ No code splitting
import HeavyComponent from './HeavyComponent';

// ✅ Code splitting
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

## State Management Issues

### 1. Props Drilling

**Problem:** Props ต้องผ่านหลาย levels

**Solution:**
```javascript
// ❌ Props drilling
function App() {
  const [theme, setTheme] = useState('light');
  return <Header theme={theme} setTheme={setTheme} />;
}

function Header({ theme, setTheme }) {
  return <Nav theme={theme} setTheme={setTheme} />;
}

function Nav({ theme, setTheme }) {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}

// ✅ Using Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    Toggle Theme
  </button>;
}
```

### 2. State Synchronization

**Problem:** State ไม่ sync กันระหว่าง components

**Solution:**
```javascript
// ❌ Duplicate state
function Parent() {
  const [value, setValue] = useState('');
  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }) {
  const [localValue, setLocalValue] = useState(value);
  // Need to sync localValue with value
}

// ✅ Single source of truth
function Parent() {
  const [value, setValue] = useState('');
  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}
```

## Debugging Tools

### 1. React DevTools

ใช้ React DevTools สำหรับ:
- Inspect component tree
- View props and state
- Profile performance
- Debug hooks

### 2. Console Logging

```javascript
useEffect(() => {
  console.log('Component mounted');
  console.log('Props:', props);
  console.log('State:', state);
  
  return () => console.log('Component unmounted');
}, []);
```

### 3. Error Boundaries

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}
```

## สรุป

Troubleshooting best practices:
1. ใช้ React DevTools สำหรับ debugging
2. เขียน clean code และ avoid anti-patterns
3. ใช้ Error Boundaries สำหรับ handle errors
4. Profile performance อย่างสม่ำเสมอ
5. Monitor memory usage และ bundle size
6. Test thoroughly ก่อน deploy
