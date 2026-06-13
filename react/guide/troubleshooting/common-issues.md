# Common React Issues

## ภาพรวม

ปัญหาที่พบบ่อยใน React applications และวิธีแก้ไข

## 1. Infinite Re-renders

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

## 2. Stale Closure

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

## 3. Memory Leaks

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

## 4. Hydration Mismatch

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

## สรุป

Common issues ที่พบบ่อย:
1. Infinite re-renders - ตรวจสอบ state updates และ effect dependencies
2. Stale closure - ใส่ dependencies ที่ถูกต้องใน useEffect
3. Memory leaks - Cleanup subscriptions, timers, และ event listeners
4. Hydration mismatch - ใช้ useEffect สำหรับ client-only APIs
