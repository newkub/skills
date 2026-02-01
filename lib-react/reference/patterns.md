# React Design Patterns

## 1. Container/Presentational Pattern
```tsx
// Presentational Component
interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

// Container Component
import { useState, useEffect } from 'react'
import TodoList from './TodoList'

export default function TodoListContainer() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    // Fetch todos from API
    fetchTodos().then(setTodos)
  }, [])
  
  const handleToggle = (id: number) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  
  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
  
  return (
    <TodoList
      todos={todos}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  )
}
```

## 2. Higher-Order Component Pattern
```tsx
import React from 'react'

interface WithAuthProps {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

function withAuth<P extends object>(
  Component: React.ComponentType<P & WithAuthProps>
) {
  return function WithAuthComponent(props: P) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const login = () => setIsAuthenticated(true)
    const logout = () => setIsAuthenticated(false)
    
    if (!isAuthenticated) {
      return <button onClick={login}>Login</button>
    }
    
    return (
      <div>
        <button onClick={logout}>Logout</button>
        <Component {...props} isAuthenticated={isAuthenticated} login={login} logout={logout} />
      </div>
    )
  }
}

// Usage
function Dashboard({ isAuthenticated, logout }: WithAuthProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are authenticated.</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withAuth(Dashboard)
```

## 3. Render Props Pattern
```tsx
import React, { useState } from 'react'

interface DataFetcherProps {
  url: string
  children: (data: any, loading: boolean, error: string | null) => React.ReactNode
}

export default function DataFetcher({ url, children }: DataFetcherProps) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [url])
  
  return children(data, loading, error)
}

// Usage
export default function UserProfile() {
  return (
    <DataFetcher url="/api/user">
      {(user, loading, error) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error: {error}</div>
        return (
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        )
      }}
    </DataFetcher>
  )
}
```

## 4. Compound Components Pattern
```tsx
import React, { createContext, useContext } from 'react'

interface TabsContextType {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

function useTabs() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within Tabs provider')
  }
  return context
}

interface TabsProps {
  defaultActiveTab: string
  children: React.ReactNode
}

export default function Tabs({ defaultActiveTab, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  )
}

interface TabListProps {
  children: React.ReactNode
}

export function TabList({ children }: TabListProps) {
  return <div className="tab-list">{children}</div>
}

interface TabProps {
  label: string
  children: React.ReactNode
}

export function Tab({ label, children }: TabProps) {
  const { activeTab, setActiveTab } = useTabs()
  const isActive = activeTab === label
  
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => setActiveTab(label)}
    >
      {children}
    </button>
  )
}

interface TabPanelsProps {
  children: React.ReactNode
}

export function TabPanels({ children }: TabPanelsProps) {
  return <div className="tab-panels">{children}</div>
}

interface TabPanelProps {
  label: string
  children: React.ReactNode
}

export function TabPanel({ label, children }: TabPanelProps) {
  const { activeTab } = useTabs()
  
  if (activeTab !== label) return null
  
  return <div className="tab-panel">{children}</div>
}

// Usage
export default function App() {
  return (
    <Tabs defaultActiveTab="profile">
      <TabList>
        <Tab label="profile">Profile</Tab>
        <Tab label="settings">Settings</Tab>
        <Tab label="notifications">Notifications</Tab>
      </TabList>
      <TabPanels>
        <TabPanel label="profile">
          <h2>Profile Information</h2>
          <p>User profile details...</p>
        </TabPanel>
        <TabPanel label="settings">
          <h2>Settings</h2>
          <p>Application settings...</p>
        </TabPanel>
        <TabPanel label="notifications">
          <h2>Notifications</h2>
          <p>Notification preferences...</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
```

## 5. Custom Hook Pattern
```tsx
import { useState, useEffect } from 'react'

interface UseLocalStorageReturn<T> {
  value: T
  setValue: (value: T) => void
  removeValue: () => void
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): UseLocalStorageReturn<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }
  
  const removeValue = () => {
    try {
      setStoredValue(initialValue)
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }
  
  return { value: storedValue, setValue, removeValue }
}

// Usage
export default function ThemeToggle() {
  const { value: theme, setValue: setTheme } = useLocalStorage<'light' | 'dark'>('theme', 'light')
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  )
}
```
