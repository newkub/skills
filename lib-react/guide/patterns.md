# React Design Patterns

## ภาพรวม

Design patterns ที่ใช้กับ React เพื่อเขียน code ที่ maintainable และ scalable

## Component Patterns

### 1. Container/Presentational Pattern

แยก logic จาก presentation

```javascript
// Container Component
function UserListContainer() {
  const { users, loading, error } = useUsers();
  
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  
  return <UserList users={users} />;
}

// Presentational Component
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 2. Higher-Order Components (HOC)

Wrap components ด้วย additional functionality

```javascript
function withLoading(WrappedComponent) {
  return function({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

const UserListWithLoading = withLoading(UserList);
```

### 3. Render Props

Share code ผ่าน render prop

```javascript
function Mouse({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

<Mouse render={({ x, y }) => <p>Position: {x}, {y}</p>} />
```

### 4. Custom Hooks Pattern

Extract logic ไปเป็น reusable hooks

```javascript
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

function ResponsiveComponent() {
  const { width } = useWindowSize();
  return width > 768 ? <Desktop /> : <Mobile />;
}
```

## State Patterns

### 1. State Reducer Pattern

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

### 2. State Colocation

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

### 3. Lifting State Up

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

## Composition Patterns

### 1. Compound Components

สร้าง components ที่ work ร่วมกัน

```javascript
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabList({ children }) {
  return <div>{children}</div>;
}

function Tab({ index, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  
  return (
    <button
      onClick={() => setActiveTab(index)}
      style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
}

function TabPanels({ children }) {
  return <div>{children}</div>;
}

function TabPanel({ index, children }) {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== index) return null;
  return <div>{children}</div>;
}

// Usage
<Tabs>
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Content 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

### 2. Slot Pattern

ใช้ slots สำหรับ flexible composition

```javascript
function Card({ header, body, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{body}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Usage
<Card
  header={<h2>Title</h2>}
  body={<p>Content</p>}
  footer={<button>Action</button>}
/>
```

## Performance Patterns

### 1. Memoization Pattern

ใช้ memo เพื่อ prevent unnecessary re-renders

```javascript
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* expensive rendering */}</div>;
});
```

### 2. Lazy Loading Pattern

Lazy load components

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

### 3. Virtual Scrolling Pattern

ใช้ virtual scrolling สำหรับ long lists

```javascript
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
}
```

## Data Fetching Patterns

### 1. SWR Pattern

Stale-While-Revalidate pattern

```javascript
function useSWR(key, fetcher) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetcher(key);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [key, fetcher]);
  
  return { data, error, isLoading };
}
```

### 2. Query Invalidation Pattern

Invalidate queries หลัง mutations

```javascript
function useCreateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
}
```

## สรุป

Design patterns ช่วยให้:
- Code มีความ organized และ maintainable
- Reusable logic ผ่าน hooks และ HOCs
- Flexible composition ผ่าน compound components
- Performance optimization ผ่าน memoization
- Consistent data handling patterns
