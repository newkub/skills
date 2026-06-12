# Error Handling

## Overview

Error handling เป็นส่วนสำคัญของ JavaScript development ที่ช่วยให้ application ทำงานได้อย่างเสถียรและ debug ได้ง่ายขึ้น

## Error Types

### 1. Built-in Errors

```javascript
// SyntaxError - ผิด syntax
try {
  eval('1 + '); // SyntaxError
} catch (error) {
  console.error(error instanceof SyntaxError); // true
}

// ReferenceError - อ้างอิงตัวแปรที่ไม่มี
try {
  console.log(undefinedVariable); // ReferenceError
} catch (error) {
  console.error(error instanceof ReferenceError); // true
}

// TypeError - ผิด type
try {
  null.toString(); // TypeError
} catch (error) {
  console.error(error instanceof TypeError); // true
}

// RangeError - ค่าอยู่นอก range
try {
  new Array(-1); // RangeError
} catch (error) {
  console.error(error instanceof RangeError); // true
}
```

### 2. Custom Errors

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

function validateUser(user) {
  if (!user.name) {
    throw new ValidationError('Name is required', 'name');
  }
  if (!user.email) {
    throw new ValidationError('Email is required', 'email');
  }
}
```

## Try-Catch-Finally

### Basic Usage

```javascript
try {
  // code ที่อาจเกิด error
  const data = JSON.parse(jsonString);
} catch (error) {
  // จัดการ error
  console.error('Failed to parse JSON:', error.message);
} finally {
  // ทำเสมอ ไม่ว่าจะ error หรือไม่
  console.log('Parsing attempt completed');
}
```

### Nested Try-Catch

```javascript
try {
  try {
    const data = fetchData();
    processData(data);
  } catch (error) {
    if (error instanceof NetworkError) {
      retryFetch();
    } else {
      throw error; // re-throw
    }
  }
} catch (error) {
  logError(error);
}
```

## Async Error Handling

### 1. Promise.catch()

```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => processData(data))
  .catch(error => {
    console.error('Fetch failed:', error);
    showError('Failed to load data');
  });
```

### 2. Async/Await with Try-Catch

```javascript
async function loadData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return processData(data);
  } catch (error) {
    console.error('Load failed:', error);
    throw new Error('Failed to load data');
  }
}
```

### 3. Promise.all() Error Handling

```javascript
async function loadMultiple() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    return { users, posts, comments };
  } catch (error) {
    console.error('One of the requests failed:', error);
    throw error;
  }
}
```

### 4. Promise.allSettled()

```javascript
async function loadMultipleWithErrors() {
  const results = await Promise.allSettled([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);

  const successful = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);

  const failed = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);

  return { successful, failed };
}
```

## Error Boundaries (React)

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## Best Practices

### 1. ใช้ try-catch สำหรับ operations ที่อาจ fail

```javascript
// ✅ ถูก
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Invalid JSON:', error);
    return null;
  }
}

// ❌ ผิด - ไม่ handle error
function parseJSON(jsonString) {
  return JSON.parse(jsonString);
}
```

### 2. Throw meaningful errors

```javascript
// ✅ ถูก
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// ❌ ผิด - error ไม่ชัดเจน
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error');
  }
  return a / b;
}
```

### 3. Log errors อย่างเหมาะสม

```javascript
// ✅ ถูก
try {
  await riskyOperation();
} catch (error) {
  console.error('Operation failed:', {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString()
  });
  // ส่ง error ไปยัง monitoring service
  sendToMonitoring(error);
}
```

### 4. ใช้ custom errors สำหรับ business logic

```javascript
// ✅ ถูก
class InsufficientFundsError extends Error {
  constructor(amount, balance) {
    super(`Insufficient funds: ${amount} > ${balance}`);
    this.name = 'InsufficientFundsError';
    this.amount = amount;
    this.balance = balance;
  }
}

function withdraw(amount, balance) {
  if (amount > balance) {
    throw new InsufficientFundsError(amount, balance);
  }
  return balance - amount;
}
```

### 5. Handle errors ใน async functions

```javascript
// ✅ ถูก
async function fetchData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    return null; // หรือ throw error ต่อ
  }
}

// ❌ ผิด - ไม่ handle error
async function fetchData() {
  const response = await fetch(url);
  return await response.json();
}
```

## Common Pitfalls

### 1. ลืม catch ใน promises

```javascript
// ❌ ผิด - ไม่มี catch
fetch('/api/data')
  .then(response => response.json());

// ✅ ถูก
fetch('/api/data')
  .then(response => response.json())
  .catch(error => console.error(error));
```

### 2. กลืน error โดยไม่จำเป็น

```javascript
// ❌ ผิด - กลืน error โดยไม่ log
try {
  await riskyOperation();
} catch (error) {
  // ไม่ทำอะไร
}

// ✅ ถูก
try {
  await riskyOperation();
} catch (error) {
  console.error(error);
  // หรือ re-throw
  throw error;
}
```

### 3. ใช้ try-catch ในที่ที่ไม่จำเป็น

```javascript
// ❌ ผิด - ไม่จำเป็นต้อง try-catch
try {
  const sum = a + b;
} catch (error) {
  console.error(error);
}

// ✅ ถูก
const sum = a + b;
```

## Error Monitoring

### 1. Console Logging

```javascript
console.error('Error occurred:', error);
console.warn('Warning:', warning);
console.info('Info:', info);
```

### 2. Error Tracking Services

```javascript
// Sentry
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'your-dsn'
});

try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}
```

### 3. Custom Error Logger

```javascript
class ErrorLogger {
  static log(error, context = {}) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
      timestamp: new Date().toISOString()
    };

    console.error(errorData);
    this.sendToService(errorData);
  }

  static sendToService(errorData) {
    // ส่งไปยัง error tracking service
  }
}
```

## References

- [MDN: Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info: Error Handling](https://javascript.info/try-catch)
