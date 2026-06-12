# State Management Issues

## ภาพรวม

ปัญหา state management ที่พบบ่อยใน React applications

## 1. Props Drilling

**Problem:** Props ต้องผ่านหลาย levels

**Solution:**
```javascript
// ❌ Props drilling
function App() {
  const [theme, setTheme] = useState('light');
  return <Header theme={theme} setTheme={setTheme} />;
}

function Header({ theme, setTheme }) {
  return <Nav theme={theme} setTheme={setTheme} />;
}

function Nav({ theme, setTheme }) {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}

// ✅ Using Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    Toggle Theme
  </button>;
}
```

## 2. State Synchronization

**Problem:** State ไม่ sync กันระหว่าง components

**Solution:**
```javascript
// ❌ Duplicate state
function Parent() {
  const [value, setValue] = useState('');
  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }) {
  const [localValue, setLocalValue] = useState(value);
  // Need to sync localValue with value
}

// ✅ Single source of truth
function Parent() {
  const [value, setValue] = useState('');
  return <Child value={value} onChange={setValue} />;
}

function Child({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}
```

## สรุป

State management issues ที่พบบ่อย:
1. Props drilling - ใช้ Context API สำหรับ global state
2. State synchronization - ใช้ single source of truth
