---
name: javascript-browser-apis-summary
description: สรุป best practices สำหรับ browser APIs ใน JavaScript
goal: ให้นักพัฒนาใช้ browser APIs ได้อย่างมีประสิทธิภาพและปลอดภัย
outcome: สามารถใช้ Fetch API, LocalStorage, SessionStorage, WebSocket และ browser APIs อื่นๆ ได้อย่างถูกต้อง
---

# Browser APIs Best Practices

## Overview
Best practices สำหรับการใช้ browser APIs ใน JavaScript รวมถึง HTTP requests, storage, real-time communication และ browser features

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use Fetch API over XMLHttpRequest | Modern HTTP requests | High | `await fetch(url)` |
| Use LocalStorage for persistent data | Client-side storage | Medium | `localStorage.setItem('key', JSON.stringify(data))` |
| Use SessionStorage for session data | Temporary storage | Medium | `sessionStorage.setItem('key', value)` |
| Handle WebSocket errors | Robust real-time communication | Medium | `socket.onerror = (error) => ...` |
| Use Service Workers for caching | Offline functionality | High | Service Worker caching strategies |
| Implement proper error handling | Handle API failures gracefully | High | `try { await fetch() } catch (error) { ... }` |
| Use request timeouts | Prevent hanging requests | High | `Promise.race([fetch(), timeout])` |
| Validate API responses | Ensure data integrity | Medium | Response validation |
| Use CORS properly | Secure cross-origin requests | High | Proper CORS configuration |
| Implement retry logic | Handle network failures | Medium | Exponential backoff retry |

## Implementation Guidelines

### High Priority Practices
1. **Use Fetch API** - Modern HTTP requests
2. **Implement proper error handling** - Handle API failures
3. **Use request timeouts** - Prevent hanging requests
4. **Use CORS properly** - Secure cross-origin requests
5. **Use Service Workers** - Offline functionality

### Medium Priority Practices
1. **Use appropriate storage** - LocalStorage vs SessionStorage
2. **Handle WebSocket errors** - Robust real-time communication
3. **Implement retry logic** - Handle network failures
4. **Validate API responses** - Ensure data integrity

### Browser APIs Checklist

#### HTTP Requests
- [ ] Use Fetch API instead of XMLHttpRequest
- [ ] Implement proper error handling
- [ ] Use request timeouts
- [ ] Handle different response types
- [ ] Implement retry logic

#### Storage
- [ ] Use appropriate storage type
- [ ] Handle storage quota limits
- [ ] Implement data validation
- [ ] Handle storage errors

#### Real-time Communication
- [ ] Handle WebSocket errors
- [ ] Implement reconnection logic
- [ ] Use proper message formatting
- [ ] Handle connection states

## Common Browser API Patterns

| API | Use Case | Example |
|-----|---------|---------|
| Fetch API | HTTP requests | `await fetch(url)` |
| LocalStorage | Persistent data | `localStorage.setItem()` |
| SessionStorage | Session data | `sessionStorage.setItem()` |
| WebSocket | Real-time communication | `new WebSocket(url)` |
| Service Worker | Offline functionality | Caching strategies |
| Geolocation | Location data | `navigator.geolocation` |
| Web Workers | Background processing | `new Worker()` |

## Browser API Examples

### Fetch API Best Practices
```javascript
// Good: Comprehensive fetch with error handling
class APIClient {
  constructor(baseURL, timeout = 5000) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new APIError(
          `HTTP error! status: ${response.status}`,
          response.status,
          response.statusText
        );
      }
      
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new APIError('Request timeout', 408, 'Request Timeout');
      }
      
      throw new APIError(error.message, 0, 'Network Error');
    }
  }
  
  async get(endpoint) {
    return this.request(endpoint);
  }
  
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE'
    });
  }
}

class APIError extends Error {
  constructor(message, status, statusText) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.statusText = statusText;
  }
}

// Usage
const api = new APIClient('https://api.example.com');

try {
  const users = await api.get('/users');
  console.log('Users:', users);
} catch (error) {
  if (error instanceof APIError) {
    console.error(`API Error ${error.status}: ${error.message}`);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### Retry Logic with Exponential Backoff
```javascript
// Good: Retry logic for network requests
async function fetchWithRetry(url, options = {}, maxRetries = 3, baseDelay = 1000) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      lastError = error;
      
      if (attempt < maxRetries) {
        const delay = baseDelay * Math.pow(2, attempt - 1);
        console.warn(`Attempt ${attempt} failed, retrying in ${delay}ms:`, error.message);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}

// Usage
try {
  const data = await fetchWithRetry('https://api.example.com/data');
  console.log('Data:', data);
} catch (error) {
  console.error('All attempts failed:', error);
}
```

### Storage Best Practices
```javascript
// Good: Safe storage operations with validation
class StorageManager {
  constructor() {
    this.isLocalStorageAvailable = this.checkStorageAvailability('localStorage');
    this.isSessionStorageAvailable = this.checkStorageAvailability('sessionStorage');
  }
  
  checkStorageAvailability(type) {
    try {
      const storage = window[type];
      const testKey = '__storage_test__';
      storage.setItem(testKey, 'test');
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      console.warn(`${type} not available:`, error);
      return false;
    }
  }
  
  setLocal(key, value) {
    if (!this.isLocalStorageAvailable) {
      console.warn('LocalStorage not available');
      return false;
    }
    
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        console.error('Storage quota exceeded');
        this.cleanupOldStorage();
      } else {
        console.error('Failed to save to localStorage:', error);
      }
      return false;
    }
  }
  
  getLocal(key, defaultValue = null) {
    if (!this.isLocalStorageAvailable) {
      return defaultValue;
    }
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to read from localStorage:', error);
      return defaultValue;
    }
  }
  
  removeLocal(key) {
    if (!this.isLocalStorageAvailable) {
      return false;
    }
    
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
      return false;
    }
  }
  
  cleanupOldStorage() {
    const keysToRemove = [];
    const cutoffTime = Date.now() - (7 * 24 * 60 * 60 * 1000); // 7 days ago
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('cache_')) {
        try {
          const item = JSON.parse(localStorage.getItem(key));
          if (item.timestamp && item.timestamp < cutoffTime) {
            keysToRemove.push(key);
          }
        } catch (error) {
          keysToRemove.push(key); // Remove invalid items
        }
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
    console.log(`Cleaned up ${keysToRemove.length} old storage items`);
  }
  
  // Session storage methods
  setSession(key, value) {
    if (!this.isSessionStorageAvailable) {
      console.warn('SessionStorage not available');
      return false;
    }
    
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Failed to save to sessionStorage:', error);
      return false;
    }
  }
  
  getSession(key, defaultValue = null) {
    if (!this.isSessionStorageAvailable) {
      return defaultValue;
    }
    
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to read from sessionStorage:', error);
      return defaultValue;
    }
  }
}

// Usage
const storage = new StorageManager();

// Save user preferences
storage.setLocal('userPreferences', {
  theme: 'dark',
  language: 'en',
  notifications: true,
  timestamp: Date.now()
});

// Get user preferences
const preferences = storage.getLocal('userPreferences', {
  theme: 'light',
  language: 'en',
  notifications: false
});

// Session-specific data
storage.setSession('currentPage', '/dashboard');
const currentPage = storage.getSession('currentPage', '/home');
```

### WebSocket Best Practices
```javascript
// Good: Robust WebSocket implementation
class WebSocketManager {
  constructor(url, options = {}) {
    this.url = url;
    this.options = {
      reconnectInterval: 3000,
      maxReconnectAttempts: 5,
      messageTimeout: 10000,
      ...options
    };
    
    this.socket = null;
    this.reconnectAttempts = 0;
    this.messageQueue = [];
    this.eventHandlers = new Map();
    this.isConnecting = false;
    this.isDestroyed = false;
  }
  
  connect() {
    if (this.isConnecting || this.isDestroyed) {
      return;
    }
    
    this.isConnecting = true;
    
    try {
      this.socket = new WebSocket(this.url);
      this.setupEventHandlers();
    } catch (error) {
      console.error('Failed to create WebSocket:', error);
      this.isConnecting = false;
      this.scheduleReconnect();
    }
  }
  
  setupEventHandlers() {
    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.isConnecting = false;
      this.reconnectAttempts = 0;
      
      // Send queued messages
      this.flushMessageQueue();
      
      this.emit('connected');
    };
    
    this.socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.emit('message', message);
      } catch (error) {
        console.error('Failed to parse WebSocket message:', error);
        this.emit('error', { type: 'parse_error', error });
      }
    };
    
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.emit('error', { type: 'socket_error', error });
    };
    
    this.socket.onclose = (event) => {
      console.log('WebSocket disconnected:', event.code, event.reason);
      this.isConnecting = false;
      
      if (!this.isDestroyed && event.code !== 1000) {
        this.scheduleReconnect();
      }
      
      this.emit('disconnected', { code: event.code, reason: event.reason });
    };
  }
  
  send(data) {
    const message = typeof data === 'string' ? data : JSON.stringify(data);
    
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      // Queue message for when connection is restored
      this.messageQueue.push(message);
      
      if (!this.isConnecting) {
        this.connect();
      }
    }
  }
  
  flushMessageQueue() {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      this.socket.send(message);
    }
  }
  
  scheduleReconnect() {
    if (this.reconnectAttempts >= this.options.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      this.emit('maxReconnectAttemptsReached');
      return;
    }
    
    this.reconnectAttempts++;
    const delay = this.options.reconnectInterval * this.reconnectAttempts;
    
    console.log(`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts})`);
    
    setTimeout(() => {
      if (!this.isDestroyed) {
        this.connect();
      }
    }, delay);
  }
  
  on(event, handler) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }
    this.eventHandlers.get(event).push(handler);
  }
  
  off(event, handler) {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }
  
  emit(event, data) {
    const handlers = this.eventHandlers.get(event);
    if (handlers) {
      handlers.forEach(handler => {
        try {
          handler(data);
        } catch (error) {
          console.error(`Error in ${event} handler:`, error);
        }
      });
    }
  }
  
  destroy() {
    this.isDestroyed = true;
    
    if (this.socket) {
      this.socket.close(1000, 'Client destroyed');
      this.socket = null;
    }
    
    this.messageQueue = [];
    this.eventHandlers.clear();
  }
}

// Usage
const wsManager = new WebSocketManager('wss://chat.example.com');

wsManager.on('connected', () => {
  console.log('Connected to chat server');
  wsManager.send({ type: 'join', room: 'general' });
});

wsManager.on('message', (message) => {
  console.log('Received message:', message);
  displayChatMessage(message);
});

wsManager.on('disconnected', ({ code, reason }) => {
  console.log('Disconnected from chat server');
  showConnectionStatus('disconnected');
});

wsManager.on('error', (error) => {
  console.error('WebSocket error:', error);
  showErrorMessage(error);
});

// Send message
function sendMessage(text) {
  wsManager.send({
    type: 'message',
    text: text,
    timestamp: Date.now()
  });
}
```

### Service Worker for Caching
```javascript
// Good: Service Worker for offline functionality
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Network request
        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone response for caching
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(event.request, responseToCache));
          
          return response;
        });
      })
  );
});
```

## Verification
1. ตรวจสอบว่าใช้ Fetch API แทน XMLHttpRequest
2. ทดสอบว่ามี proper error handling
3. ยืนยันว่ามี request timeouts
4. ตรวจสอบว่ามี retry logic
5. ทดสอบว่าใช้ storage อย่างเหมาะสม
6. ยืนยันว่า WebSocket มี error handling
7. ตรวจสอบว่ามี CORS configuration ที่ถูกต้อง
8. ทดสอบว่ามี Service Worker สำหรับ offline functionality
