# Handle Async Operations

## Overview

วิธีจัดการ asynchronous operations ใน JavaScript ด้วย Promises, async/await และ patterns ต่างๆ

## Promises

### 1. Create Promise

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'John' };
      resolve(data);
    }, 1000);
  });
};
```

### 2. Consume Promise

```javascript
fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

### 3. Promise Chaining

```javascript
fetchData()
  .then(data => {
    return processData(data);
  })
  .then(processedData => {
    return saveData(processedData);
  })
  .then(savedData => {
    console.log('Saved:', savedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Async/Await

### 1. Basic Usage

```javascript
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### 2. Sequential Operations

```javascript
async function loadMultiple() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return { user, posts, comments };
  } catch (error) {
    console.error(error);
  }
}
```

### 3. Parallel Operations

```javascript
async function loadMultipleParallel() {
  try {
    const [user, posts, comments] = await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments()
    ]);
    return { user, posts, comments };
  } catch (error) {
    console.error(error);
  }
}
```

### 4. Race Conditions

```javascript
async function fetchWithTimeout(url, timeout = 5000) {
  try {
    const result = await Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
      )
    ]);
    return result;
  } catch (error) {
    console.error(error);
  }
}
```

## Error Handling

### 1. Try-Catch-Finally

```javascript
async function operation() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error('Operation failed:', error);
    throw error;
  } finally {
    console.log('Cleanup');
  }
}
```

### 2. Error Propagation

```javascript
async function parent() {
  try {
    await child();
  } catch (error) {
    console.error('Parent caught:', error);
  }
}

async function child() {
  await grandchild();
}

async function grandchild() {
  throw new Error('Grandchild error');
}
```

### 3. Custom Error Handling

```javascript
class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

async function fetchWithRetry(url, maxRetries = 3) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new NetworkError('Request failed', response.status);
      }
      return await response.json();
    } catch (error) {
      retries++;
      if (retries >= maxRetries) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * retries));
    }
  }
}
```

## Common Patterns

### 1. Parallel Execution with Error Handling

```javascript
async function loadAllWithErrorHandling() {
  const results = await Promise.allSettled([
    fetchUser(),
    fetchPosts(),
    fetchComments()
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

### 2. Sequential with Concurrency Limit

```javascript
async function processBatch(items, concurrency = 5) {
  const results = [];
  const batches = [];

  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(item => processItem(item))
    );
    results.push(...batchResults);
  }

  return results;
}
```

### 3. Caching with Promises

```javascript
const cache = new Map();

async function getCachedData(key, fetcher) {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const promise = fetcher(key).then(data => {
    cache.set(key, data);
    return data;
  });

  cache.set(key, promise);
  return promise;
}
```

### 4. Debounce Async Operations

```javascript
function debounceAsync(fn, delay) {
  let timeoutId;
  let pendingPromise;

  return function(...args) {
    clearTimeout(timeoutId);

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(async () => {
        try {
          const result = await fn.apply(this, args);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}
```

## Best Practices

### 1. ใช้ async/await แทน .then()

```javascript
// ✅ ถูก
async function loadData() {
  const data = await fetchData();
  return processData(data);
}

// ❌ ผิด
function loadData() {
  return fetchData()
    .then(data => processData(data));
}
```

### 2. ใช้ try-catch สำหรับ error handling

```javascript
// ✅ ถูก
async function operation() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// ❌ ผิด
async function operation() {
  const result = await riskyOperation();
  return result;
}
```

### 3. ใช้ Promise.all() สำหรับ parallel operations

```javascript
// ✅ ถูก
async function loadAll() {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
  return { users, posts };
}

// ❌ ผิด
async function loadAll() {
  const users = await fetchUsers();
  const posts = await fetchPosts();
  return { users, posts };
}
```

### 4. ใช้ Promise.allSettled() เมื่อต้องการ results ทั้งหมด

```javascript
// ✅ ถูก
const results = await Promise.allSettled([
  fetchUser(),
  fetchPosts()
]);

// ❌ ผิด - จะ stop เมื่อมี error
const results = await Promise.all([
  fetchUser(),
  fetchPosts()
]);
```

## Common Pitfalls

### 1. ลืม await

```javascript
// ❌ ผิด
async function operation() {
  const result = fetchData(); // ไม่ await
  console.log(result); // Promise
}

// ✅ ถูก
async function operation() {
  const result = await fetchData();
  console.log(result);
}
```

### 2. ใช้ await ใน loop โดยไม่จำเป็น

```javascript
// ❌ ผิด - sequential
async function processItems(items) {
  for (const item of items) {
    await processItem(item);
  }
}

// ✅ ถูก - parallel
async function processItems(items) {
  await Promise.all(items.map(item => processItem(item)));
}
```

### 3. ไม่ handle errors ใน promises

```javascript
// ❌ ผิด
fetchData().then(data => console.log(data));

// ✅ ถูก
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## References

- [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN: Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
