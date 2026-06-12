# Component Patterns

## ภาพรวม

Design patterns สำหรับ React components

## 1. Container/Presentational Pattern

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

## 2. Higher-Order Components (HOC)

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

## 3. Render Props

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

## 4. Custom Hooks Pattern

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

## สรุป

Component patterns ช่วยให้:
- Code มีความ organized และ maintainable
- Reusable logic ผ่าน hooks และ HOCs
- Separation of concerns
