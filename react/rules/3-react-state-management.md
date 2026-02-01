# React State Management

## Description
การจัดการ state และ data flow ใน React applications อย่างมีประสิทธิภาพ

## Why
State management ที่ดีช่วยให้ application ทำงานได้อย่างถูกต้อง ง่ายต่อการ debug และ maintain

## Anti-patterns
❌ ใช้ state ที่ไม่จำเป็น (over-optimization)
❌ ผ่าน props ลึกเกินไป (prop drilling)
❌ ไม่มีการแบ่งแยก state ตามความรับผิดชอบ

## Best Practices
✅ เลือก state management solution ที่เหมาะสมกับขนาด application
✅ แบ่ง state เป็น local และ global อย่างเหมาะสม
✅ ใช้ Context API สำหรับ global state ที่ไม่ซับซ้อน

## Rules

### 1. State Types
แบ่ง state เป็น 3 ประเภท:

**Local State:**
- ใช้ `useState` หรือ `useReducer`
- จำกัดอยู่ใน component นั้นๆ
- ใช้สำหรับ UI state ที่ไม่ต้องแชร์

**Global State:**
- ใช้ Context API หรือ state management library
- แชร์ระหว่าง components หลายๆ ตัว
- ใช้สำหรับ application state

**Server State:**
- ใช้ React Query หรือ SWR
- จัดการ data จาก server
- มี caching และ synchronization

### 2. When to Use Each Solution

**useState:**
```tsx
const [count, setCount] = useState(0);
```

**useReducer:**
```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**Context API:**
```tsx
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 3. State Structure
- แบ่ง state ตามความรับผิดชอบ
- หลีกเลี่ยง nested state ที่ซับซ้อน
- ใช้ TypeScript สำหรับ state types

### 4. Performance Optimization
- ใช้ `useMemo` สำหรับ expensive calculations
- ใช้ `useCallback` สำหรับ function references
- แบ่ง components เพื่อลด re-renders

## Impact
ถ้าไม่ทำตาม:
- Application ทำงานช้า
- State ไม่สอดคล้องกัน
- Code ยากต่อการ debug และ maintain

## Verification
1. ตรวจสอบว่า state แบ่งตามความรับผิดชอบ
2. ทดสอบว่า state อัพเดตถูกต้อง
3. ตรวจสอบว่าไม่มี unnecessary re-renders

## References
- [React State Management](https://react.dev/learn/state-a-components-memory)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Context API Best Practices](https://react.dev/learn/passing-data-deeply-with-context)
