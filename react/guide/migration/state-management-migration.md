# State Management Migration

## ภาพรวม

วิธีการ migrate ระหว่าง state management solutions

## Redux to Zustand

```javascript
// ❌ Redux
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const store = createStore(reducer);

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch({ type: 'INCREMENT' })}>{count}</button>;
}

// ✅ Zustand
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}
```

## Context API to Zustand

```javascript
// ❌ Context API
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ✅ Zustand
const useTheme = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme })
}));
```

## สรุป

State management migration:
1. เลือก solution ที่เหมาะสมกับ project
2. Migrate state ทีละส่วน
3. Update components ที่ใช้ state
4. Test thoroughly
