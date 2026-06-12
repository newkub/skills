# React Architecture

## ภาพรวมของสถาปัตยกรรม

React เป็น library สำหรับสร้าง UI ด้วย component-based architecture ที่เน้นการจัดการ state และ lifecycle

## Component Architecture

### 1. Component Types

```
┌─────────────────────────────────┐
│       Component Types            │
├─────────────────────────────────┤
│  Functional Components          │
│  - Modern approach              │
│  - Hooks support                │
│  - Preferred                    │
├─────────────────────────────────┤
│  Class Components               │
│  - Legacy approach              │
│  - Lifecycle methods            │
│  - Less common                  │
└─────────────────────────────────┘
```

### 2. Component Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   └── Navigation
│   ├── Main
│   │   ├── HomePage
│   │   │   └── FeatureCards
│   │   └── AboutPage
│   └── Footer
└── Modals
    └── ErrorModal
```

## Data Flow Architecture

### Unidirectional Data Flow

```
┌──────────────┐
│   Parent     │
│  Component   │
└──────┬───────┘
       │ props
       ▼
┌──────────────┐
│   Child      │
│  Component   │
└──────┬───────┘
       │ events
       ▼
┌──────────────┐
│   Parent     │
│  Component   │
└──────────────┘
```

### State Management Patterns

| Pattern | Use Case | Complexity |
|---------|----------|------------|
| Local State | Component-specific state | Low |
| Props Drilling | Simple parent-child | Low-Medium |
| Context API | Global state, themes | Medium |
| State Library | Complex app state | High |

## File Structure

### Standard Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── Input/
│   ├── layout/
│   │   ├── Header/
│   │   └── Footer/
│   └── features/
│       └── UserProfile/
├── hooks/
│   ├── useAuth.ts
│   └── useFetch.ts
├── context/
│   └── ThemeContext.tsx
├── services/
│   └── api.ts
├── utils/
│   └── helpers.ts
├── types/
│   └── index.ts
├── styles/
│   └── global.css
└── App.tsx
```

### Feature-Based Structure

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── index.ts
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       └── services/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── App.tsx
```

## Design Patterns

### 1. Container/Presentational Pattern

**Container Component:**
```javascript
function UserListContainer() {
  const users = useUsers();
  return <UserList users={users} />;
}
```

**Presentational Component:**
```javascript
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

### 2. Higher-Order Components (HOC)

```javascript
function withLoading(WrappedComponent) {
  return function(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);
```

### 3. Render Props

```javascript
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  return (
    <div onMouseMove={e => setPosition({ x: e.clientX, y: e.clientY })}>
      {render(position)}
    </div>
  );
}

<Mouse render={({ x, y }) => <p>Position: {x}, {y}</p>} />
```

### 4. Custom Hooks Pattern

```javascript
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
```

## Performance Architecture

### 1. Component Optimization

```javascript
// Memoization
const MemoizedComponent = React.memo(Component);

// Lazy loading
const LazyComponent = React.lazy(() => import('./Component'));

// Code splitting
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

### 2. State Optimization

```javascript
// Split state
const [name, setName] = useState('');
const [age, setAge] = useState(0);

// Use reducer for complex state
const [state, dispatch] = useReducer(reducer, initialState);
```

### 3. Render Optimization

```javascript
// useMemo for expensive calculations
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// useCallback for functions
const handleClick = useCallback(() => doSomething(a, b), [a, b]);
```

## Scalability Patterns

### 1. Atomic Design

```
Atoms (Button, Input)
    ↓
Molecules (FormField, Card)
    ↓
Organisms (Header, Sidebar)
    ↓
Templates (PageLayout)
    ↓
Pages (HomePage, AboutPage)
```

### 2. Module Federation

สำหรับ micro-frontends และ code sharing ระหว่าง applications

### 3. Monorepo Structure

ใช้ Turborepo หรือ Nx สำหรับ manage multiple React applications

## สรุป

React architecture เน้น component-based design, unidirectional data flow, และ flexibility ในการจัดการ state เลือก pattern ที่เหมาะสมกับขนาดและความซับซ้อนของ project
