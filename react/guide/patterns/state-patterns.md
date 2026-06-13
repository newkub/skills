# State Patterns

## ภาพรวม

Design patterns สำหรับ state management ใน React

## 1. State Reducer Pattern

ใช้ reducer สำหรับ complex state

```javascript
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

## 2. State Colocation

วาง state ใกล้กับที่ใช้มากที่สุด

```javascript
// ❌ State อยู่ไกลเกินไป
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

// ✅ State อยู่ใกล้กับที่ใช้
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

## 3. Lifting State Up

ย้าย state ขึ้นไป shared parent

```javascript
function Parent() {
  const [value, setValue] = useState('');
  
  return (
    <>
      <ChildA value={value} onChange={setValue} />
      <ChildB value={value} />
    </>
  );
}
```

## สรุป

State patterns ช่วยให้:
- State management มีความ organized
- Predictable state updates
- ลดการใช้ props drilling
