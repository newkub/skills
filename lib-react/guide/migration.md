# React Migration Guide

## ภาพรวม

วิธีการ migrate ระหว่าง React versions และการอัปเกรด project

## Version Migration

### React 17 to 18

#### 1. Update Dependencies

```bash
bun add react@18 react-dom@18
```

#### 2. Update Root Render

```javascript
// ❌ React 17
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// ✅ React 18
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

#### 3. New Features

**Concurrent Rendering:**
```javascript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**Automatic Batching:**
```javascript
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React 18 batches these updates automatically
}
```

**Transitions:**
```javascript
import { startTransition } from 'react';

startTransition(() => {
  setSearchQuery(query);
});
```

### Class Components to Hooks

#### 1. State to useState

```javascript
// ❌ Class Component
class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}

// ✅ Functional Component with Hooks
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  
  return <button onClick={increment}>{count}</button>;
}
```

#### 2. Lifecycle to useEffect

```javascript
// ❌ Class Component
class UserList extends React.Component {
  state = { users: [] };
  
  componentDidMount() {
    this.fetchUsers();
  }
  
  fetchUsers = async () => {
    const users = await fetch('/api/users').then(r => r.json());
    this.setState({ users });
  };
  
  render() {
    return <ul>{this.state.users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
  }
}

// ✅ Functional Component with Hooks
function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function fetchUsers() {
      const data = await fetch('/api/users').then(r => r.json());
      setUsers(data);
    }
    fetchUsers();
  }, []);
  
  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}
```

#### 3. Context to useContext

```javascript
// ❌ Class Component
class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  
  render() {
    const theme = this.context;
    return <button style={{ background: theme }}>Click</button>;
  }
}

// ✅ Functional Component with Hooks
function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme }}>Click</button>;
}
```

## Build Tool Migration

### Create React App to Vite

#### 1. Install Vite

```bash
bun create vite my-app --template react
```

#### 2. Move Files

```
Move src/ from CRA to Vite project
Move public/ to Vite project
```

#### 3. Update Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
```

#### 4. Update Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Webpack to Vite

#### 1. Install Vite

```bash
bun add -D vite @vitejs/plugin-react
```

#### 2. Create vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
```

#### 3. Update Imports

```javascript
// ❌ Webpack
import logo from '@/assets/logo.png';

// ✅ Vite
import logo from '@/assets/logo.png';
```

## State Management Migration

### Redux to Zustand

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

### Context API to Zustand

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

## TypeScript Migration

### JavaScript to TypeScript

#### 1. Install TypeScript

```bash
bun add -D typescript @types/react @types/react-dom
```

#### 2. Create tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### 3. Rename Files

```bash
# Rename .js to .tsx
mv App.js App.tsx
mv index.js index.tsx
```

#### 4. Add Types

```typescript
// ❌ JavaScript
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// ✅ TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

## Testing Migration

### Jest to Vitest

#### 1. Install Vitest

```bash
bun add -D vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom
```

#### 2. Update Configuration

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
  }
});
```

#### 3. Update Tests

```javascript
// ❌ Jest
test('renders button', () => {
  render(<Button>Click</Button>);
  expect(screen.getByText('Click')).toBeInTheDocument();
});

// ✅ Vitest (same syntax)
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders text', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
});
```

## สรุป

Migration เป็น process ที่ต้องวางแผน:
1. Backup project ก่อนเริ่ม
2. Test migration ใน staging environment ก่อน
3. Migrate ทีละส่วน (version, build tool, state management)
4. Test thoroughly หลังจากแต่ละ migration
5. Monitor และ fix issues ที่เกิดขึ้น
