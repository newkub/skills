# Rendering Optimization

## ภาพรวม

Techniques สำหรับ optimize rendering ใน React applications

## 1. React.memo

ใช้สำหรับ prevent unnecessary re-renders

```javascript
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* expensive rendering */}</div>;
});
```

**เมื่อใช้:**
- Component ที่ render ช้า
- Component ที่ได้ props เหมือนเดิมบ่อยๆ
- Pure components

## 2. useMemo

Cache ผลลัพธ์ของ expensive calculations

```javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**เมื่อใช้:**
- Calculations ที่ใช้เวลานาน
- Object/Array ที่ใช้ใน dependency arrays
- Derived state

## 3. useCallback

Cache function references

```javascript
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**เมื่อใช้:**
- Functions ที่ส่งเป็น props ไป child components
- Functions ที่ใช้ใน dependency arrays
- Event handlers

## สรุป

Rendering optimization:
1. React.memo - Prevent unnecessary re-renders
2. useMemo - Cache expensive calculations
3. useCallback - Cache function references
