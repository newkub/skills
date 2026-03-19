---
name: javascript-error-handling-summary
description: สรุป best practices สำหรับ error handling ใน JavaScript
goal: ให้นักพัฒนาจัดการ errors ใน JavaScript ได้อย่างมีประสิทธิภาพ
outcome: สามารถเขียน JavaScript code ที่ robust และ handle errors ได้อย่างเหมาะสม
---

# Error Handling Best Practices

## Overview

Best practices สำหรับการจัดการ errors ใน JavaScript ทั้ง synchronous และ asynchronous operations

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use try-catch for async operations | Handle errors gracefully | High | `try { await riskyOperation() } catch (error) { ... }` |
| Provide meaningful error messages | Help with debugging | Medium | `throw new Error('Failed to fetch user data')` |
| Use custom error classes | Better error categorization | Medium | `class ValidationError extends Error` |
| Log errors appropriately | Monitor application health | Medium | `console.error('Database error:', error)` |
| Handle promise rejections | Prevent unhandled rejections | High | `promise.catch(error => console.error(error))` |
| Use error boundaries | Catch React component errors | High | `<ErrorBoundary>` component |
| Implement graceful degradation | Fallback functionality | Medium | Default values, error states |
| Validate inputs early | Fail fast principle | High | Input validation before processing |
| Use global error handlers | Catch unexpected errors | Medium | `window.onerror`, `process.on('uncaughtException')` |
| Provide user feedback | Inform users about errors | Medium | Error messages, toast notifications |

## Implementation Guidelines

### High Priority Practices

1. **Handle async operations properly** - Always use try-catch with async/await
2. **Handle promise rejections** - Prevent unhandled rejections
3. **Validate inputs early** - Fail fast principle
4. **Use error boundaries** - Catch React component errors

### Medium Priority Practices

1. **Use custom error classes** - Better error categorization
2. **Log errors appropriately** - Monitor application health
3. **Provide user feedback** - Inform users about errors
4. **Implement graceful degradation** - Fallback functionality

### Error Handling Checklist

#### Prevention

- [ ] Validate all inputs
- [ ] Check for null/undefined values
- [ ] Verify required dependencies
- [ ] Use TypeScript when possible

#### Detection

- [ ] Use try-catch blocks
- [ ] Handle promise rejections
- [ ] Implement error boundaries
- [ ] Use global error handlers

#### Recovery

- [ ] Provide meaningful error messages
- [ ] Implement fallback mechanisms
- [ ] Log errors for debugging
- [ ] Inform users appropriately

## Common Error Patterns

| Error Type | Cause | Solution |
|------------|-------|----------|
| TypeError | Invalid type operation | Type checking, validation |
| ReferenceError | Undefined variable | Proper variable declaration |
| NetworkError | Failed network requests | Retry logic, offline handling |
| ValidationError | Invalid input data | Input validation, sanitization |
| AsyncError | Unhandled promise rejection | Proper async/await usage |

## Error Handling Patterns

### Try-Catch Pattern

```javascript
// Good: Comprehensive error handling
async function fetchUserData(userId) {
  try {
    // Input validation
    if (!userId || typeof userId !== 'string') {
      throw new ValidationError('Invalid user ID');
    }

    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new NetworkError(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();

    // Data validation
    if (!userData.id || !userData.name) {
      throw new ValidationError('Invalid user data structure');
    }

    return userData;
  } catch (error) {
    // Log error for debugging
    console.error('Failed to fetch user data:', error);

    // Re-throw with additional context
    throw new Error(`Failed to fetch user ${userId}: ${error.message}`);
  }
}

// Usage
try {
  const user = await fetchUserData('123');
  console.log('User data:', user);
} catch (error) {
  // Handle error at higher level
  showErrorMessage(error.message);
  logErrorToService(error);
}
```

### Custom Error Classes

```javascript
// Custom error classes
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message, field = null) {
    super(message, 400);
    this.field = field;
  }
}

class NetworkError extends AppError {
  constructor(message, statusCode = 500) {
    super(message, statusCode);
  }
}

class AuthenticationError extends AppError {
  constructor(message = 'Authentication failed') {
    super(message, 401);
  }
}

// Usage
function validateEmail(email) {
  if (!email || !email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
  return true;
}

try {
  validateEmail(userInput);
} catch (error) {
  if (error instanceof ValidationError) {
    showFieldError(error.field, error.message);
  } else {
    showGenericError(error.message);
  }
}
```

### Promise Error Handling

```javascript
// Good: Promise error handling
async function fetchMultipleData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers().catch(error => {
        console.error('Failed to fetch users:', error);
        return []; // Fallback to empty array
      }),
      fetchPosts().catch(error => {
        console.error('Failed to fetch posts:', error);
        return []; // Fallback to empty array
      }),
      fetchComments().catch(error => {
        console.error('Failed to fetch comments:', error);
        return []; // Fallback to empty array
      })
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { users: [], posts: [], comments: [] };
  }
}

// Alternative: Promise.allSettled
async function fetchMultipleDataSettled() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);

  return {
    users: results[0].status === 'fulfilled' ? results[0].value : [],
    posts: results[1].status === 'fulfilled' ? results[1].value : [],
    comments: results[2].status === 'fulfilled' ? results[2].value : []
  };
}
```

### Global Error Handling

```javascript
// Browser global error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  logErrorToService({
    message: event.error.message,
    stack: event.error.stack,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  logErrorToService({
    message: event.reason?.message || 'Unhandled promise rejection',
    stack: event.reason?.stack
  });
  event.preventDefault(); // Prevent default behavior
});

// Node.js global error handling
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  logErrorToService(error);
  process.exit(1); // Exit with error code
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  logErrorToService({
    message: reason?.message || 'Unhandled promise rejection',
    stack: reason?.stack
  });
});
```

### React Error Boundaries

```javascript
// React Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    logErrorToService({
      error: error.toString(),
      errorInfo: errorInfo.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
```

### Graceful Degradation

```javascript
// Good: Graceful degradation with fallbacks
function loadUserData(userId) {
  // Try localStorage first
  try {
    const cachedData = localStorage.getItem(`user_${userId}`);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  } catch (error) {
    console.warn('LocalStorage not available:', error);
  }

  // Fallback to API call
  return fetchUserDataFromAPI(userId)
    .then(data => {
      // Cache the data for future use
      try {
        localStorage.setItem(`user_${userId}`, JSON.stringify(data));
      } catch (error) {
        console.warn('Failed to cache data:', error);
      }
      return data;
    })
    .catch(error => {
      console.error('Failed to fetch user data:', error);
      // Return default user data
      return {
        id: userId,
        name: 'Unknown User',
        avatar: '/default-avatar.png'
      };
    });
}

// Usage with error handling
loadUserData('123')
  .then(user => {
    displayUserProfile(user);
  })
  .catch(error => {
    showErrorMessage('Failed to load user profile');
    displayDefaultProfile();
  });
```

### Retry Pattern

```javascript
// Retry pattern with exponential backoff
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} failed:`, error.message);

      if (attempt < maxRetries) {
        const backoffDelay = delay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
      }
    }
  }

  throw lastError;
}

// Usage
async function fetchWithRetry(url) {
  return retryOperation(async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}
```

## Error Logging and Monitoring

### Structured Error Logging

```javascript
// Structured error logging
function logError(error, context = {}) {
  const errorLog = {
    timestamp: new Date().toISOString(),
    message: error.message,
    stack: error.stack,
    context: {
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: getCurrentUserId(),
      ...context
    },
    level: 'error'
  };

  // Send to logging service
  sendToLoggingService(errorLog);

  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error:', errorLog);
  }
}

// Usage
try {
  await riskyOperation();
} catch (error) {
  logError(error, {
    operation: 'riskyOperation',
    userId: '123',
    additionalData: { /* ... */ }
  });
}
```

## Verification

1. ตรวจสอบว่า async operations มี try-catch
2. ทดสอบว่ามี input validation
3. ยืนยันว่ามี custom error classes
4. ตรวจสอบว่ามี proper error logging
5. ทดสอบว่ามี global error handlers
6. ยืนยันว่ามี graceful degradation
7. ตรวจสอบว่าผู้ใช้ได้รับ error feedback
8. ทดสอบว่ามี retry logic สำหรับ network operations
