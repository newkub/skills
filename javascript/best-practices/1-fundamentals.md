# API Integration Best Practices

## การเชื่อมต่อกับ API ใน JavaScript

### 1. HTTP Client Setup

```javascript
// Base HTTP client with interceptors
class HttpClient {
  constructor(baseURL = '', options = {}) {
    this.baseURL = baseURL;
    this.options = {
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      ...options
    };
    this.interceptors = {
      request: [],
      response: []
    };
  }

  addRequestInterceptor(interceptor) {
    this.interceptors.request.push(interceptor);
  }

  addResponseInterceptor(interceptor) {
    this.interceptors.response.push(interceptor);
  }

  async request(url, config = {}) {
    const fullUrl = `${this.baseURL}${url}`;

    // Apply request interceptors
    let requestConfig = {
      ...this.options,
      ...config,
      headers: {
        ...this.options.headers,
        ...config.headers
      }
    };

    for (const interceptor of this.interceptors.request) {
      requestConfig = await interceptor(requestConfig);
    }

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), requestConfig.timeout);

    try {
      const response = await fetch(fullUrl, {
        ...requestConfig,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Apply response interceptors
      let processedResponse = response;
      for (const interceptor of this.interceptors.response) {
        processedResponse = await interceptor(processedResponse);
      }

      return processedResponse;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async get(url, config = {}) {
    return this.request(url, { ...config, method: 'GET' });
  }

  async post(url, data, config = {}) {
    return this.request(url, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put(url, data, config = {}) {
    return this.request(url, {
      ...config,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async delete(url, config = {}) {
    return this.request(url, { ...config, method: 'DELETE' });
  }
}

// Usage with authentication
const apiClient = new HttpClient('https://api.example.com', {
  timeout: 15000
});

// Add authentication interceptor
apiClient.addRequestInterceptor(async (config) => {
  const token = await getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add error handling interceptor
apiClient.addResponseInterceptor(async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(error.message || 'Request failed', response.status, error);
  }
  return response;
});
```

### 2. Error Handling and Retry Logic

```javascript
// Custom API error class
class ApiError extends Error {
  constructor(message, status, data = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Retry utility with exponential backoff
class ApiClient {
  constructor(httpClient) {
    this.http = httpClient;
    this.retryConfig = {
      maxRetries: 3,
      baseDelay: 1000,
      maxDelay: 10000,
      retryCondition: (error) => {
        // Retry on network errors and 5xx status codes
        return !error.status || error.status >= 500;
      }
    };
  }

  async requestWithRetry(url, config = {}) {
    let lastError;

    for (let attempt = 1; attempt <= this.retryConfig.maxRetries + 1; attempt++) {
      try {
        const response = await this.http.request(url, config);
        return response;
      } catch (error) {
        lastError = error;

        // Don't retry on last attempt or if retry condition fails
        if (attempt > this.retryConfig.maxRetries || 
            !this.retryConfig.retryCondition(error)) {
          throw error;
        }

        // Calculate delay with exponential backoff
        const delay = Math.min(
          this.retryConfig.baseDelay * Math.pow(2, attempt - 1),
          this.retryConfig.maxDelay
        );

        console.log(`Request failed, retrying in ${delay}ms (attempt ${attempt})`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }

  async get(url, config = {}) {
    return this.requestWithRetry(url, { ...config, method: 'GET' });
  }

  async post(url, data, config = {}) {
    return this.requestWithRetry(url, {
      ...config,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}
```

### 3. Request Caching

```javascript
// API response cache
class ApiCache {
  constructor(maxSize = 100, ttl = 5 * 60 * 1000) { // 5 minutes default
    this.cache = new Map();
    this.maxSize = maxSize;
    this.ttl = ttl;
  }

  set(key, value) {
    // Remove oldest if cache is full
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;

    // Check if expired
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  clear() {
    this.cache.clear();
  }

  // Cache key generator
  static generateKey(method, url, data = null) {
    const dataStr = data ? JSON.stringify(data) : '';
    return `${method}:${url}:${dataStr}`;
  }
}

// Cached API client
class CachedApiClient {
  constructor(httpClient, cacheOptions = {}) {
    this.http = httpClient;
    this.cache = new ApiCache(cacheOptions.maxSize, cacheOptions.ttl);
    this.cacheableMethods = ['GET'];
  }

  async request(url, config = {}) {
    const method = config.method || 'GET';
    const cacheKey = ApiCache.generateKey(method, url, config.body);

    // Check cache for GET requests
    if (this.cacheableMethods.includes(method)) {
      const cached = this.cache.get(cacheKey);
      if (cached) {
        console.log('Returning cached response for:', cacheKey);
        return cached;
      }
    }

    const response = await this.http.request(url, config);

    // Cache GET responses
    if (this.cacheableMethods.includes(method) && response.ok) {
      this.cache.set(cacheKey, response);
    }

    return response;
  }

  invalidateCache(pattern) {
    const keys = Array.from(this.cache.cache.keys());
    keys.forEach(key => {
      if (key.includes(pattern)) {
        this.cache.cache.delete(key);
      }
    });
  }
}
```

### 4. Request Queue and Rate Limiting

```javascript
// Request queue for rate limiting
class RequestQueue {
  constructor(maxConcurrent = 5, rateLimit = 1000) {
    this.maxConcurrent = maxConcurrent;
    this.rateLimit = rateLimit;
    this.queue = [];
    this.running = 0;
    this.lastRequest = 0;
  }

  async add(requestFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        requestFn,
        resolve,
        reject
      });
      this.process();
    });
  }

  async process() {
    if (this.running >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }

    // Rate limiting
    const now = Date.now();
    if (now - this.lastRequest < this.rateLimit) {
      setTimeout(() => this.process(), this.rateLimit - (now - this.lastRequest));
      return;
    }

    this.running++;
    this.lastRequest = now;

    const { requestFn, resolve, reject } = this.queue.shift();

    try {
      const result = await requestFn();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.process();
    }
  }
}

// API client with request queue
class QueuedApiClient {
  constructor(httpClient, queueOptions = {}) {
    this.http = httpClient;
    this.queue = new RequestQueue(
      queueOptions.maxConcurrent || 5,
      queueOptions.rateLimit || 1000
    );
  }

  async request(url, config = {}) {
    return this.queue.add(() => this.http.request(url, config));
  }
}
```

### 5. API Response Transformation

```javascript
// Response transformer
class ResponseTransformer {
  constructor(transformers = {}) {
    this.transformers = transformers;
  }

  addTransformer(endpoint, transformer) {
    this.transformers[endpoint] = transformer;
  }

  transform(endpoint, data) {
    const transformer = this.transformers[endpoint];
    if (transformer) {
      return transformer(data);
    }
    return data;
  }
}

// Usage example
const transformer = new ResponseTransformer();

// Add transformers for different endpoints
transformer.addTransformer('/users', (data) => {
  return {
    users: data.map(user => ({
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      email: user.email.toLowerCase(),
      avatar: user.avatar_url
    }))
  };
});

transformer.addTransformer('/posts', (data) => {
  return {
    posts: data.map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.body.substring(0, 100) + '...',
      authorId: post.user_id,
      createdAt: new Date(post.created_at),
      tags: post.tags || []
    }))
  };
});

// API client with response transformation
class TransformingApiClient {
  constructor(httpClient, transformer) {
    this.http = httpClient;
    this.transformer = transformer;
  }

  async request(url, config = {}) {
    const response = await this.http.request(url, config);
    const data = await response.json();

    const transformedData = this.transformer.transform(url, data);

    return new Response(JSON.stringify(transformedData), {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }
}
```

### 6. GraphQL Client

```javascript
// Simple GraphQL client
class GraphQLClient {
  constructor(endpoint, options = {}) {
    this.endpoint = endpoint;
    this.options = options;
    this.cache = new Map();
  }

  async query(query, variables = {}, options = {}) {
    const key = JSON.stringify({ query, variables });

    // Check cache for queries
    if (!options.skipCache && this.cache.has(key)) {
      return this.cache.get(key);
    }

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.options.headers
      },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    // Cache successful queries
    if (!options.skipCache) {
      this.cache.set(key, data);
    }

    return data;
  }

  async mutate(mutation, variables = {}) {
    return this.query(mutation, variables, { skipCache: true });
  }

  clearCache() {
    this.cache.clear();
  }
}

// Usage
const gqlClient = new GraphQLClient('https://api.example.com/graphql');

// Query example
const GET_USERS = `
  query GetUsers($limit: Int) {
    users(limit: $limit) {
      id
      name
      email
      avatar
    }
  }
`;

const result = await gqlClient.query(GET_USERS, { limit: 10 });
console.log(result.data.users);

// Mutation example
const CREATE_USER = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`;

const newUser = await gqlClient.mutate(CREATE_USER, {
  input: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});
```

### 7. WebSocket Integration

```javascript
// WebSocket manager with reconnection
class WebSocketManager {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      reconnectInterval: 5000,
      maxReconnectAttempts: 10,
      ...options
    };
    this.ws = null;
    this.reconnectAttempts = 0;
    this.messageQueue = [];
    this.eventHandlers = new Map();
  }

  connect() {
    try {
      this.ws = new WebSocket(this.url);
      this.setupEventHandlers();
    } catch (error) {
      console.error('WebSocket connection failed:', error);
      this.scheduleReconnect();
    }
  }

  setupEventHandlers() {
    this.ws.onopen = () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0;

      // Send queued messages
      while (this.messageQueue.length > 0) {
        const message = this.messageQueue.shift();
        this.send(message);
      }

      this.emit('connected');
    };

    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.emit('message', data);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
      }
    };

    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
      this.emit('disconnected');
      this.scheduleReconnect();
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.emit('error', error);
    };
  }

  scheduleReconnect() {
    if (this.reconnectAttempts >= this.options.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      return;
    }

    this.reconnectAttempts++;
    console.log(`Scheduling reconnection attempt ${this.reconnectAttempts}`);

    setTimeout(() => {
      this.connect();
    }, this.options.reconnectInterval);
  }

  send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    } else {
      // Queue message for when connection is restored
      this.messageQueue.push(message);
    }
  }

  on(event, handler) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event).push(handler);
  }

  emit(event, data) {
    const handlers = this.eventHandlers.get(event) || [];
    handlers.forEach(handler => handler(data));
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}
```

### 8. API Testing Utilities

```javascript
// Mock API server for testing
class MockApiServer {
  constructor() {
    this.handlers = new Map();
    this.delay = 100;
  }

  addHandler(method, path, handler) {
    const key = `${method}:${path}`;
    this.handlers.set(key, handler);
  }

  setDelay(ms) {
    this.delay = ms;
  }

  async request(method, path, data = null) {
    const key = `${method}:${path}`;
    const handler = this.handlers.get(key);

    if (!handler) {
      throw new Error(`No handler for ${method} ${path}`);
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, this.delay));

    return handler(data);
  }
}

// Usage in tests
const mockApi = new MockApiServer();

mockApi.addHandler('GET', '/users', () => ({
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]
}));

mockApi.addHandler('POST', '/users', (data) => ({
  user: { id: 3, ...data }
}));

// Test example
test('should fetch users', async () => {
  const users = await mockApi.request('GET', '/users');
  expect(users.users).toHaveLength(2);
});

test('should create user', async () => {
  const newUser = { name: 'Test User', email: 'test@example.com' };
  const result = await mockApi.request('POST', '/users', newUser);
  expect(result.user.id).toBe(3);
});
```

## API Integration Best Practices Summary

1. **Use a centralized HTTP client** with interceptors for common functionality
2. **Implement proper error handling** with custom error classes
3. **Add retry logic** for transient failures with exponential backoff
4. **Cache responses** appropriately to reduce API calls
5. **Implement rate limiting** to respect API limits
6. **Transform responses** to match your application's data structure
7. **Handle authentication** securely with token refresh
8. **Use WebSocket** for real-time features with reconnection logic
9. **Mock APIs** for testing and development
10. **Monitor API performance** and usage patterns
