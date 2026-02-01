# React Components

## 1. Function Components
- **Default component type** ใน React สมัยใหม่
- ใช้ hooks สำหรับ state และ side effects
- มี lifecycle methods ผ่าน hooks
- รองรับ TypeScript อย่างเต็มที่

## 2. Class Components
- **Traditional component type** ใน React เก่า
- ใช้ state และ lifecycle methods โดยตรง
- มี this binding และ constructor
- ค่อยๆ ถูกแทนที่ด้วย function components

## 3. Component Composition
- **Composition over inheritance** เป็นหลักการของ React
- ใช้ props สำหรับส่งข้อมูลระหว่าง components
- ใช้ children props สำหรับ flexible composition
- สร้าง reusable components ผ่าน composition

## 4. Props and PropTypes
- **Props** สำหรับส่งข้อมูลจาก parent ไป child
- **PropTypes** สำหรับ type checking ใน runtime
- **Default props** สำหรับค่าเริ่มต้น
- **Props destructuring** สำหรับ cleaner code

## 5. State Management
- **Local state** ด้วย useState hook
- **Context API** สำหรอ global state
- **Reducer pattern** ด้วย useReducer hook
- **External libraries** สำหรอ complex state

## 6. Component Lifecycle
- **Mounting phase**: component ถูกสร้างและแสดง
- **Updating phase**: component ถูกอัปเดตเมื่อ props/state เปลี่ยน
- **Unmounting phase**: component ถูกลบจาก DOM
- **Error handling** ด้วย error boundaries

## 7. Performance Optimization
- **React.memo** สำหรับ component memoization
- **useMemo** สำหรับ expensive calculations
- **useCallback** สำหรอ function references
- **Code splitting** สำหรอ lazy loading

## 8. Component Patterns
- **Container/Presentational pattern** สำหรอ separation of concerns
- **Higher-order components** สำหรอ component enhancement
- **Render props** สำหรอ sharing logic
- **Custom hooks** สำหรอ reusable logic
