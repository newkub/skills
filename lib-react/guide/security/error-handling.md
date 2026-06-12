# Error Handling

## ภาพรวม

วิธีการ handle errors อย่างปลอดภัยใน React applications

## 1. Error Boundaries

ใช้ Error Boundaries สำหรับ handle errors

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## 2. Safe Error Messages

ไม่แสดง sensitive information ใน error messages

```javascript
// ❌ Exposes sensitive info
catch (error) {
  alert(`Database error: ${error.message}`);
}

// ✅ Generic error message
catch (error) {
  alert('An error occurred. Please try again.');
  logErrorToService(error);
}
```

## สรุป

Error handling:
1. ใช้ Error Boundaries สำหรับ handle errors
2. ไม่แสดง sensitive information ใน error messages
