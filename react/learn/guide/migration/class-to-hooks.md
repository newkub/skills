# Class Components to Hooks Migration

## ภาพรวม

วิธีการ migrate จาก class components เป็น functional components ด้วย hooks

## 1. State to useState

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

## 2. Lifecycle to useEffect

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

## 3. Context to useContext

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

## สรุป

Class to hooks migration:
1. Convert state to useState
2. Convert lifecycle methods to useEffect
3. Convert context to useContext
4. Convert other lifecycle methods ตามความเหมาะสม
