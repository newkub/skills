# Debugging Tools

## ภาพรวม

Tools สำหรับ debugging React applications

## 1. React DevTools

ใช้ React DevTools สำหรับ:
- Inspect component tree
- View props and state
- Profile performance
- Debug hooks

## 2. Console Logging

```javascript
useEffect(() => {
  console.log('Component mounted');
  console.log('Props:', props);
  console.log('State:', state);
  
  return () => console.log('Component unmounted');
}, []);
```

## 3. Error Boundaries

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}
```

## สรุป

Debugging tools ที่มีประโยชน์:
1. React DevTools - Inspect components และ state
2. Console logging - Debug logic และ data flow
3. Error Boundaries - Handle errors อย่าง graceful
