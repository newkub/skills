# React Core Concepts

## Overview

React เป็น JavaScript library สำหรับสร้าง user interfaces ที่พัฒนาโดย Facebook ใช้ component-based architecture และ virtual DOM สำหรับการจัดการ UI อย่างมีประสิทธิภาพ

## Key Concepts

### 1. Components

Components เป็นหน่วยพื้นฐานของ React applications แบ่งได้เป็น:

- **Function Components**: ใช้ฟังก์ชัน JavaScript ปกติ
- **Class Components**: ใช้ ES6 classes (ถูก deprecated ใน React 18+)

### 2. JSX

JSX เป็น syntax extension สำหรับ JavaScript ที่ให้เขียน HTML-like code ใน JavaScript:

```tsx
const element = <h1>Hello, world!</h1>;
```

### 3. Props

Props เป็นข้อมูลที่ส่งจาก parent component ไปยัง child components:

```tsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 4. State

State เป็นข้อมูลภายใน component ที่สามารถเปลี่ยนแปลงได้:

```tsx
const [count, setCount] = useState(0);
```

### 5. Lifecycle

Components มี lifecycle ที่แตกต่างกัน:

- **Mounting**: เมื่อ component ถูกสร้าง
- **Updating**: เมื่อ props หรือ state เปลี่ยน
- **Unmounting**: เมื่อ component ถูกทำลาย

### 6. Hooks

Hooks เป็นฟังก์ชันที่ให้ใช้ React features ใน function components:

- `useState`: สำหรับจัดการ state
- `useEffect`: สำหรับ side effects
- `useContext`: สำหรับ context API
- `useReducer`: สำหรับ complex state logic

### 7. Virtual DOM

Virtual DOM เป็น JavaScript object ที่เป็น representation ของ real DOM ช่วยให้การอัพเดต UI รวดเร็วขึ้น

## Examples

### Basic Component

```tsx
function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="World" />
```

### State Management

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Effect Hook

```tsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}
```

## Best Practices

### 1. Component Design

- ทำให้ components มีขนาดเล็กและ focused
- ใช้ composition มากกว่า inheritance
- แบ่ง components ตามความรับผิดชอบ

### 2. State Management

- ยก state ขึ้นไปให้สูงที่สุดที่จำเป็น
- ใช้ local state สำหรับ UI state
- ใช้ global state สำหรับ application state

### 3. Performance

- ใช้ React.memo สำหรับ component optimization
- ใช้ useMemo และ useCallback อย่างระมัดระวัง
- ใช้ lazy loading สำหรับ large components

### 4. Code Organization

- แยก logic ออกจาก presentation
- ใช้ custom hooks สำหรับ reusable logic
- จัดการ imports อย่างเป็นระเบียบ

## References

- [React Official Documentation](https://react.dev/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Patterns](https://reactpatterns.com/)
