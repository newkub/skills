# Async Programming Best Practices

## การเขียนโปรแกรมแบบ Asynchronous ใน JavaScript

### 1. Promises Fundamentals

```javascript
// Creating promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Promise chaining
fetchData('/api/user/1')
  .then(user => {
    console.log('User:', user);
    return fetchData(`/api/posts/${user.id}`);
  })
  .then(posts => {
    console.log('Posts:', posts);
    return processData(posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### 2. Async/Await Best Practices

```javascript
// Basic async/await
async function getUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Parallel async operations
async function fetchUserAndPosts(userId) {
  try {
    const [user, posts] = await Promise.all([
      fetch(`/api/users/${userId}`).then(r => r.json()),
      fetch(`/api/posts/${userId}`).then(r => r.json())
    ]);

    return { user, posts };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

// Sequential vs Parallel
async function sequential() {
  const user = await fetchUser(1);
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
  return { user, posts, comments };
}

async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);
  return { user, posts, comments };
}
```

### 3. Error Handling in Async Code

```javascript
// Error handling with Promise.allSettled
async function fetchMultipleData(urls) {
  const promises = urls.map(url => 
    fetch(url).then(r => r.json()).catch(error => ({ error, url }))
  );

  const results = await Promise.allSettled(promises);

  const successful = [];
  const failed = [];

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      if (result.value.error) {
        failed.push({ url: urls[index], error: result.value.error });
      } else {
        successful.push(result.value);
      }
    } else {
      failed.push({ url: urls[index], error: result.reason });
    }
  });

  return { successful, failed };
}

// Error boundaries for async operations
class AsyncErrorBoundary {
  constructor() {
    this.errorHandlers = new Map();
  }

  register(operation, handler) {
    this.errorHandlers.set(operation, handler);
  }

  async execute(operation, ...args) {
    try {
      return await operation(...args);
    } catch (error) {
      const handler = this.errorHandlers.get(operation);
      if (handler) {
        return handler(error, ...args);
      }
      throw error;
    }
  }
}

// Usage
const boundary = new AsyncErrorBoundary();
boundary.register(fetchUser, (error, userId) => {
  console.error(`Failed to fetch user ${userId}:`, error);
  return { id: userId, name: 'Unknown', error: true };
});

const user = await boundary.execute(fetchUser, 123);
```

### 4. Async Utilities and Helpers

```javascript
// Debounce for async functions
function asyncDebounce(fn, delay) {
  let timeoutId;
  let latestResolve;
  let latestReject;

  return function(...args) {
    return new Promise((resolve, reject) => {
      // Cancel previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Store latest promise handlers
      latestResolve = resolve;
      latestReject = reject;

      timeoutId = setTimeout(async () => {
        try {
          const result = await fn.apply(this, args);
          latestResolve(result);
        } catch (error) {
          latestReject(error);
        }
      }, delay);
    });
  };
}

// Throttle for async functions
function asyncThrottle(fn, limit) {
  let inThrottle = false;
  let lastResult;
  let lastError;

  return async function(...args) {
    if (inThrottle) {
      return lastResult;
    }

    inThrottle = true;

    try {
      lastResult = await fn.apply(this, args);
      setTimeout(() => { inThrottle = false; }, limit);
      return lastResult;
    } catch (error) {
      lastError = error;
      setTimeout(() => { inThrottle = false; }, limit);
      throw lastError;
    }
  };
}

// Retry with exponential backoff
async function retryAsync(fn, options = {}) {
  const {
    maxAttempts = 3,
    delay = 1000,
    backoff = 2,
    shouldRetry = () => true
  } = options;

  let lastError;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt === maxAttempts || !shouldRetry(error)) {
        throw error;
      }

      const waitTime = delay * Math.pow(backoff, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }

  throw lastError;
}

// Timeout for async operations
function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)
    )
  ]);
}

// Usage examples
const debouncedSearch = asyncDebounce(async (query) => {
  const response = await fetch(`/api/search?q=${query}`);
  return response.json();
}, 300);

const throttledSave = asyncThrottle(async (data) => {
  const response = await fetch('/api/save', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  return response.json();
}, 1000);

const result = await retryAsync(
  () => fetch('/api/data'),
  { maxAttempts: 3, delay: 1000 }
);

const timedResult = await withTimeout(
  fetch('/api/slow-endpoint'),
  5000
);
```

### 5. Async Iterators and Generators

```javascript
// Async generator for paginated data
async function* fetchPaginatedData(url) {
  let nextPage = url;

  while (nextPage) {
    const response = await fetch(nextPage);
    const data = await response.json();

    yield data.items;

    nextPage = data.nextPage;
  }
}

// Usage
async function processAllPages() {
  for await (const items of fetchPaginatedData('/api/data')) {
    console.log('Processing items:', items.length);
    await processItems(items);
  }
}

// Async iterator for real-time data
async function* streamData(url) {
  const response = await fetch(url);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split('\n').filter(line => line.trim());

    for (const line of lines) {
      try {
        yield JSON.parse(line);
      } catch (error) {
        console.error('Failed to parse line:', line);
      }
    }
  }
}

// Usage
async function handleRealTimeData() {
  for await (const data of streamData('/api/stream')) {
    console.log('Received:', data);
    await processData(data);
  }
}
```

### 6. Async State Management

```javascript
// Async state manager
class AsyncStateManager {
  constructor(initialState = {}) {
    this.state = { ...initialState };
    this.listeners = new Set();
    this.loading = new Set();
    this.errors = new Map();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(listener => listener(this.getState()));
  }

  getState() {
    return {
      ...this.state,
      loading: new Set(this.loading),
      errors: new Map(this.errors)
    };
  }

  async load(key, asyncFn) {
    this.loading.add(key);
    this.errors.delete(key);
    this.notify();

    try {
      const result = await asyncFn();
      this.state[key] = result;
      return result;
    } catch (error) {
      this.errors.set(key, error);
      throw error;
    } finally {
      this.loading.delete(key);
      this.notify();
    }
  }

  async reload(key) {
    if (this.state[key] && this.state[key].reloadFn) {
      return this.load(key, this.state[key].reloadFn);
    }
  }

  clearError(key) {
    this.errors.delete(key);
    this.notify();
  }
}

// Usage
const stateManager = new AsyncStateManager();

// Load user data
const user = await stateManager.load('user', async () => {
  const response = await fetch('/api/user');
  const userData = await response.json();
  userData.reloadFn = () => fetch('/api/user').then(r => r.json());
  return userData;
});

// Subscribe to state changes
stateManager.subscribe((state) => {
  console.log('State updated:', state);
  updateUI(state);
});
```

### 7. Async Queue and Pool Management

```javascript
// Async queue for managing concurrent operations
class AsyncQueue {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  async add(asyncFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        asyncFn,
        resolve,
        reject
      });
      this.process();
    });
  }

  async process() {
    if (this.running >= this.concurrency || this.queue.length === 0) {
      return;
    }

    this.running++;
    const { asyncFn, resolve, reject } = this.queue.shift();

    try {
      const result = await asyncFn();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.process();
    }
  }
}

// Connection pool for database connections
class ConnectionPool {
  constructor(createConnection, maxConnections = 10) {
    this.createConnection = createConnection;
    this.maxConnections = maxConnections;
    this.pool = [];
    this.waiting = [];
  }

  async acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }

    if (this.pool.length + this.waiting.length < this.maxConnections) {
      return this.createConnection();
    }

    return new Promise((resolve) => {
      this.waiting.push(resolve);
    });
  }

  release(connection) {
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift();
      resolve(connection);
    } else {
      this.pool.push(connection);
    }
  }

  async close() {
    const connections = [...this.pool];
    this.pool = [];
    this.waiting = [];

    await Promise.all(connections.map(conn => conn.close()));
  }
}

// Usage
const queue = new AsyncQueue(3); // Max 3 concurrent operations

const results = await Promise.all([
  queue.add(() => fetch('/api/data1')),
  queue.add(() => fetch('/api/data2')),
  queue.add(() => fetch('/api/data3')),
  queue.add(() => fetch('/api/data4')),
  queue.add(() => fetch('/api/data5'))
]);
```

### 8. Async Testing Patterns

```javascript
// Testing async functions with Jest
describe('Async operations', () => {
  test('should fetch user data', async () => {
    const mockUser = { id: 1, name: 'John' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockUser
    });

    const user = await fetchUser(1);
    expect(user).toEqual(mockUser);
    expect(fetch).toHaveBeenCalledWith('/api/users/1');
  });

  test('should handle fetch errors', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    await expect(fetchUser(1)).rejects.toThrow('Network error');
  });

  test('should timeout long operations', async () => {
    const slowPromise = new Promise(resolve => 
      setTimeout(() => resolve('done'), 2000)
    );

    await expect(withTimeout(slowPromise, 1000))
      .rejects.toThrow('Operation timed out');
  });
});

// Testing async iterators
test('should handle async iterator', async () => {
  const mockData = [1, 2, 3];
  const asyncGenerator = async function*() {
    for (const item of mockData) {
      yield item;
    }
  };

  const results = [];
  for await (const item of asyncGenerator()) {
    results.push(item);
  }

  expect(results).toEqual(mockData);
});
```

## Async Programming Best Practices Summary

1. **Prefer async/await** over promise chains for better readability
2. **Handle errors properly** with try-catch blocks
3. **Use Promise.all** for parallel operations when order doesn't matter
4. **Implement timeouts** for potentially long-running operations
5. **Use debouncing/throttling** for frequent async operations
6. **Implement retry logic** for transient failures
7. **Manage concurrency** with queues and pools
8. **Test async code** thoroughly with proper async test patterns
9. **Avoid callback hell** by using modern async patterns
10. **Consider memory usage** with long-running async operations
