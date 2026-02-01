# React Hooks

## Overview
Hooks เป็นฟังก์ชันที่ให้ใช้ React features ใน function components โดยไม่ต้องใช้ class components ทำให้ code กระชับและอ่านง่ายขึ้น

## Key Concepts

### 1. Built-in Hooks

**useState Hook**
สำหรับจัดการ local state ใน function components:
```tsx
const [state, setState] = useState(initialValue);
```

**useEffect Hook**
สำหรับจัดการ side effects:
```tsx
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup function
  };
}, [dependencies]);
```

**useContext Hook**
สำหรับใช้ React Context:
```tsx
const value = useContext(MyContext);
```

**useReducer Hook**
สำหรับจัดการ complex state logic:
```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**useCallback Hook**
สำหรับ memoizing functions:
```tsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**useMemo Hook**
สำหรับ memoizing values:
```tsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**useRef Hook**
สำหรับ accessing DOM elements หรือ persisting values:
```tsx
const refContainer = useRef(initialValue);
```

### 2. Custom Hooks
Custom hooks เป็นฟังก์ชันที่ขึ้นต้นด้วย "use" และใช้ hooks อื่นๆ ภายใน:
```tsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);
  
  return { count, increment, decrement };
}
```

### 3. Rules of Hooks
1. **Only Call Hooks at the Top Level**: ห้ามเรียก hooks ภายใน loops, conditions, หรือ nested functions
2. **Only Call Hooks from React Functions**: เรียก hooks ได้เฉพาะใน React function components หรือ custom hooks

## Examples

### useState Example
```tsx
import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');
  
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}
```

### useEffect Example
```tsx
import { useState, useEffect } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div>
      Window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}
```

### Custom Hook Example
```tsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'John');
  
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### useReducer Example
```tsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

## Best Practices

### 1. Hook Usage
- เรียก hooks ที่ top level เสมอ
- ใช้ ESLint plugin `eslint-plugin-react-hooks` เพื่อตรวจสอบ
- แยก logic ออกเป็น custom hooks

### 2. Performance
- ใช้ useCallback สำหรับ functions ที่ส่งไปยัง child components
- ใช้ useMemo สำหรับ expensive calculations
- ระมัดระวัง dependencies ใน useEffect

### 3. Custom Hooks
- ตั้งชื่อขึ้นต้นด้วย "use"
- ทำให้ reusable และ focused
- ใช้ TypeScript สำหรับ type safety

### 4. Error Handling
- ใช้ try-catch ใน useEffect สำหรับ async operations
- จัดการ cleanup อย่างถูกต้อง
- ใช้ Error Boundaries สำหรับ error handling

## References
- [Hooks Documentation](https://react.dev/reference/react)
- [Custom Hooks Documentation](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Hooks API Reference](https://react.dev/reference/react)
