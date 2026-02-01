# React Hooks

## 1. useState Hook
- **State management** ใน function components
- รับค่าเริ่มต้นและคืน [state, setState]
- สามารถเก็บ primitive หรือ complex types
- ใช้ functional updates สำหรับ previous state

## 2. useEffect Hook
- **Side effects management** ใน function components
- รับ function และ dependency array
- ทำงานหลัง mount และ updates
- Cleanup function สำหรอ unmount

## 3. useContext Hook
- **Context consumption** ใน function components
- รับ context object และคืน current value
- หลีกเลี่ยง prop drilling
- ใช้ร่วมกับ Context Provider

## 4. useReducer Hook
- **Complex state management** สำหรอ function components
- คล้ายกับ Redux reducer pattern
- รับ reducer function และ initial state
- รองรับ complex state transitions

## 5. useCallback Hook
- **Function memoization** สำหรอ performance
- คืน memoized callback function
- ใช้กับ dependency array
- ป้องกัน unnecessary re-renders

## 6. useMemo Hook
- **Value memoization** สำหรอ expensive calculations
- คืน memoized value
- ใช้กับ dependency array
- ปรับปรุง performance ของ heavy computations

## 7. useRef Hook
- **Reference management** สำหรอ DOM elements
- คืน mutable ref object
- ไม่ทำให้ component re-render
- ใช้สำหรอ accessing DOM หรือ storing values

## 8. Custom Hooks
- **Reusable logic** สำหรอ component behavior
- ตั้งชื่อด้วย "use" prefix
- สามารถใช้ hooks ภายในได้
- แยก business logic จาก UI components
