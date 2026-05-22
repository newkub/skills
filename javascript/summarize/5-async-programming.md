---
name: javascript-async-programming-summary
description: สรุป best practices สำหรับ async programming ใน JavaScript
goal: ให้นักพัฒนาเขียน asynchronous JavaScript code ได้อย่างมีประสิทธิภาพ
outcome: สามารถใช้ async/await, promises และ event-driven programming ได้อย่างถูกต้อง
---

# Async Programming Best Practices

## Overview

Best practices สำหรับการเขียน asynchronous JavaScript code ที่มีประสิทธิภาพและ maintainable

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use async/await | Better than callbacks | High | `const data = await fetchData()` |
| Handle promise rejections | Prevent unhandled rejections | High | `promise.catch(error => console.error(error))` |
| Use Promise.all for parallel operations | Improve performance | Medium | `const results = await Promise.all(promises)` |
| Avoid callback hell | Use async/await or Promise chains | High | `fetch().then().then().catch()` |
| Use Promise.allSettled for partial failures | Handle mixed success/failure | Medium | `const results = await Promise.allSettled(promises)` |
| Implement proper error handling | Handle async errors gracefully | High | `try { await operation() } catch (error) { ... }` |
| Use async generators for streams | Process large data efficiently | Medium | `async function* processStream()` |
| Debounce async operations | Prevent duplicate requests | Medium | `const debouncedFetch = debounce(fetchData, 300)` |
| Use async IIFE for top-level async | Execute async code immediately | Medium | `(async () => { await init(); })();` |
| Implement timeout handling | Prevent hanging operations | High | `Promise.race([operation, timeout])` |

## Implementation Guidelines

### High Priority Practices

1. **Use async/await** - Better readability than callbacks
2. **Handle promise rejections** - Prevent unhandled rejections
3. **Avoid callback hell** - Use modern async patterns
4. **Implement proper error handling** - Handle async errors gracefully
5. **Use timeout handling** - Prevent hanging operations

### Medium Priority Practices

1. **Use Promise.all for parallel operations** - Improve performance
2. **Use Promise.allSettled** - Handle mixed success/failure
3. **Debounce async operations** - Prevent duplicate requests
4. **Use async generators** - Process large data efficiently

### Async Programming Checklist

#### Before Writing Async Code

- [ ] Plan the async flow
- [ ] Consider error scenarios
- [ ] Think about performance implications
- [ ] Plan timeout strategies

#### While Writing Async Code

- [ ] Use async/await instead of callbacks
- [ ] Handle all promise rejections
- [ ] Implement proper error handling
- [ ] Consider parallel operations

#### After Writing Async Code

- [ ] Test error scenarios
- [ ] Verify timeout handling
- [ ] Check for unhandled rejections
- [ ] Monitor performance

## Common Async Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Sequential async | Operations must run in order | `await op1(); await op2();` |
| Parallel async | Independent operations | `Promise.all([op1, op2])` |
| Race conditions | First response wins | `Promise.race([op1, op2])` |
| Partial failures | Some operations may fail | `Promise.allSettled([op1, op2])` |
| Streaming | Large data processing | `async function* stream()` |

## Async Programming Examples

### Basic Async/Await

```javascript
// Good: Modern async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}

// Usage
try {
  const user = await fetchUserData('123');
  console.log('User:', user);
} catch (error) {
  showErrorMessage(error.message);
}

// Bad: Callback hell
fetchUser('123', (user, error) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  fetchUserPosts(user.id, (posts, error) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

    fetchUserComments(posts[0].id, (comments, error) => {
      if (error) {
        console.error('Error:', error);
        return;
      }

      console.log('Comments:', comments);
    });
  });
});
```

### Parallel Operations

```javascript
// Good: Parallel operations with Promise.all
async function fetchUserCompleteData(userId) {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(userId),
      fetchUserPosts(userId),
      fetchUserComments(userId)
    ]);

    return {
      user,
      posts,
      comments
    };
  } catch (error) {
    console.error('Failed to fetch complete user data:', error);
    throw error;
  }
}

// Good: Partial failures with Promise.allSettled
async function fetchUserCompleteDataSafe(userId) {
  const [userResult, postsResult, commentsResult] = await Promise.allSettled([
    fetchUser(userId),
    fetchUserPosts(userId),
    fetchUserComments(userId)
  ]);

  return {
    user: userResult.status === 'fulfilled' ? userResult.value : null,
    posts: postsResult.status === 'fulfilled' ? postsResult.value : [],
    comments: commentsResult.status === 'fulfilled' ? commentsResult.value : [],
    errors: [
      userResult.status === 'rejected' ? userResult.reason : null,
      postsResult.status === 'rejected' ? postsResult.reason : null,
      commentsResult.status === 'rejected' ? commentsResult.reason : null
    ].filter(Boolean)
  };
}
```

### Timeout Handling

```javascript
// Good: Timeout with Promise.race
function withTimeout(promise, timeoutMs) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Operation timed out')), timeoutMs);
  });

  return Promise.race([promise, timeout]);
}

// Usage
async function fetchWithTimeout(url, timeoutMs = 5000) {
  try {
    const response = await withTimeout(fetch(url), timeoutMs);
    return await response.json();
  } catch (error) {
    if (error.message === 'Operation timed out') {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }
    throw error;
  }
}

// Alternative: AbortController
async function fetchWithAbort(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }
    throw error;
  }
}
```

### Debouncing Async Operations

```javascript
// Good: Debounced async function
function debounceAsync(fn, delay) {
  let timeoutId;
  let latestPromise;

  return function debouncedFunction(...args) {
    clearTimeout(timeoutId);

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          const result = await fn(...args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

// Usage
const debouncedSearch = debounceAsync(async (query) => {
  const response = await fetch(`/api/search?q=${query}`);
  return response.json();
}, 300);

// In component
searchInput.addEventListener('input', async (e) => {
  const results = await debouncedSearch(e.target.value);
  displayResults(results);
});
```

### Async Generators

```javascript
// Good: Async generator for processing streams
async function* processLargeFile(filePath) {
  const file = await openFile(filePath);
  const reader = file.createReadStream();

  for await (const chunk of reader) {
    const processedChunk = await processChunk(chunk);
    yield processedChunk;
  }

  await file.close();
}

// Usage
async function processFile() {
  const results = [];

  for await (const chunk of processLargeFile('large-file.txt')) {
    results.push(chunk);

    // Process in batches to avoid memory issues
    if (results.length >= 100) {
      await saveBatch(results);
      results.length = 0; // Clear array
    }
  }

  // Save remaining chunks
  if (results.length > 0) {
    await saveBatch(results);
  }
}

// Async generator for API pagination
async function* fetchAllPages(url) {
  let nextPage = url;

  while (nextPage) {
    const response = await fetch(nextPage);
    const data = await response.json();

    yield* data.results;
    nextPage = data.next;
  }
}

// Usage
async function getAllUsers() {
  const users = [];

  for await (const user of fetchAllPages('/api/users')) {
    users.push(user);
  }

  return users;
}
```

### Error Handling in Async Context

```javascript
// Good: Comprehensive async error handling
class AsyncOperation {
  constructor(retryCount = 3, retryDelay = 1000) {
    this.retryCount = retryCount;
    this.retryDelay = retryDelay;
  }

  async execute(operation, context = {}) {
    let lastError;

    for (let attempt = 1; attempt <= this.retryCount; attempt++) {
      try {
        const result = await operation();
        return { success: true, result };
      } catch (error) {
        lastError = error;

        console.warn(`Attempt ${attempt} failed:`, error.message);

        if (attempt < this.retryCount) {
          await this.delay(this.retryDelay * attempt);
        }
      }
    }

    return {
      success: false,
      error: lastError,
      context
    };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage
const asyncOp = new AsyncOperation();

const result = await asyncOp.execute(
  () => fetch('/api/data'),
  { operation: 'fetchData', userId: '123' }
);

if (result.success) {
  console.log('Data:', result.result);
} else {
  console.error('All attempts failed:', result.error);
}
```

### Async IIFE for Top-Level Async

```javascript
// Good: Async IIFE for module initialization
(async () => {
  try {
    // Initialize database connection
    await connectDatabase();

    // Load configuration
    const config = await loadConfig();

    // Start server
    const server = await startServer(config);

    console.log('Application started successfully');

    // Handle graceful shutdown
    process.on('SIGTERM', async () => {
      console.log('Shutting down gracefully...');
      await server.close();
      await disconnectDatabase();
      process.exit(0);
    });

  } catch (error) {
    console.error('Failed to start application:', error);
    process.exit(1);
  }
})();

// Alternative: Top-level await (ES2022+)
// Note: Requires module type and modern Node.js
try {
  await initializeApp();
  console.log('App initialized');
} catch (error) {
  console.error('Initialization failed:', error);
}
```

## Async Performance Tips

### Memory Management

```javascript
// Good: Process large datasets in chunks
async function processLargeDataset(data, chunkSize = 1000) {
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    await processChunk(chunk);

    // Allow garbage collection
    if (i % (chunkSize * 10) === 0) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
}

// Bad: Process all at once (memory intensive)
async function processLargeDatasetBad(data) {
  const results = await Promise.all(
    data.map(item => processItem(item))
  );
  return results;
}
```

## Verification

1. ตรวจสอบว่าใช้ async/await แทน callbacks
2. ทดสอบว่ามี proper error handling
3. ยืนยันว่ามี timeout handling
4. ตรวจสอบว่าไม่มี unhandled rejections
5. ทดสอบว่าใช้ parallel operations เมื่อเหมาะสม
6. ยืนยันว่ามี debouncing สำหรับ user interactions
7. ตรวจสอบว่า memory usage มีประสิทธิภาพ
8. ทดสอบว่ามี proper cleanup
