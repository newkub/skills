# How React Works

## ภาพรวมของการทำงาน

React ใช้ Virtual DOM และ Reconciliation Process เพื่อจัดการการอัปเดต UI อย่างมีประสิทธิภาพ

## ส่วนประกอบหลัก

### 1. Virtual DOM

Virtual DOM เป็น JavaScript object representation ของ DOM จริง

```javascript
// Virtual DOM
const element = {
  type: 'div',
  props: {
    className: 'container',
    children: ['Hello World']
  }
}
```

**ข้อดี:**
- เร็วกว่าการจัดการ DOM จริง
- สามารถ diff และ patch ได้ง่าย
- ทำงานได้บน server-side rendering

### 2. Reconciliation Process

ขั้นตอนการเปรียบเทียบ Virtual DOM เก่ากับใหม่

```
┌─────────────────┐
│  Render Phase   │
│  (JavaScript)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Diffing        │
│  (Compare)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Commit Phase   │
│  (DOM Update)   │
└─────────────────┘
```

**ขั้นตอน:**
1. **Render Phase** - สร้าง Virtual DOM tree ใหม่
2. **Diffing** - เปรียบเทียบ Virtual DOM เก่ากับใหม่
3. **Commit Phase** - อัปเดต DOM จริงเฉพาะส่วนที่เปลี่ยนแปลง

### 3. Component Lifecycle

```
┌──────────────┐
│  Mounting    │
│  constructor │
│  render      │
│  componentDidMount │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Updating   │
│  render      │
│  componentDidUpdate │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Unmounting  │
│  componentWillUnmount │
└──────────────┘
```

## Fiber Architecture

Fiber เป็น reimplementation ของ React's core algorithm

**คุณสมบัติ:**
- สามารถ pause, resume, และ abort work ได้
- กำหนด priority ของการอัปเดตได้
- รองรับ concurrent rendering

## Rendering Pipeline

```
User Action
    │
    ▼
setState / useState
    │
    ▼
Schedule Update
    │
    ▼
Render Phase (Work Loop)
    │
    ▼
Commit Phase
    │
    ▼
DOM Update
```

## Key Concepts

### 1. Immutability

React ใช้ immutable data patterns

```javascript
// ❌ ไม่ถูกต้อง
state.items.push(newItem);
setState(state);

// ✅ ถูกต้อง
setState({
  ...state,
  items: [...state.items, newItem]
});
```

### 2. Unidirectional Data Flow

ข้อมูลไหลจาก parent ไป child เท่านั้น

```
Parent Component
    │ (props)
    ▼
Child Component
```

### 3. Composition

สร้าง components จาก components อื่นๆ

```javascript
function App() {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
}
```

## Performance Optimization

### 1. Memoization

ใช้ `useMemo` และ `useCallback` เพื่อลดการ re-render

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

### 2. Code Splitting

ใช้ `React.lazy` และ `Suspense`

```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
```

## สรุป

React ใช้ Virtual DOM และ Reconciliation เพื่อจัดการ UI updates อย่างมีประสิทธิภาพ ด้วย Fiber architecture ที่รองรับ concurrent rendering และ performance optimization
