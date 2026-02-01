---
name: javascript-browser-apis
description: Browser APIs สำหรับการพัฒนา web applications
goal: ให้นักพัฒนาใช้ Browser APIs สำหรับ HTTP requests, storage, และ real-time communication
outcome: สามารถใช้ Fetch API, LocalStorage, SessionStorage, และ WebSocket ได้อย่างมีประสิทธิภาพ
---

# Browser APIs

## Concepts
Browser APIs คือ interfaces ที่ browser ให้มาให้ JavaScript สามารถ interact กับ browser features ต่างๆ เช่น HTTP requests, local storage, real-time communication

## Best Practices
- ใช้ Fetch API แทน XMLHttpRequest สำหรับ HTTP requests
- ใช้ LocalStorage สำหรับ persistent data
- ใช้ SessionStorage สำหรับ session-based data
- ใช้ WebSocket สำหรับ real-time communication
- จัดการ errors ใน asynchronous operations
- ใช้ async/await สำหรับ readable code

## Examples

### Fetch API
```javascript
// Basic GET request
async function getData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Usage
getData('https://api.example.com/users')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST request
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}

// Usage
postData('https://api.example.com/users', {
  name: 'John Doe',
  email: 'john@example.com'
})
  .then(result => console.log(result))
  .catch(error => console.error(error));

// PUT request
async function updateData(url, id, data) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

// DELETE request
async function deleteData(url, id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return 'Data deleted successfully';
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}

// Fetch with query parameters
async function searchUsers(query, page = 1) {
  const url = new URL('https://api.example.com/users');
  url.searchParams.append('q', query);
  url.searchParams.append('page', page);
  
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
}
```

### LocalStorage
```javascript
// Save data to LocalStorage
function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    console.log('Data saved to LocalStorage');
  } catch (error) {
    console.error('Error saving to LocalStorage:', error);
  }
}

// Get data from LocalStorage
function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting from LocalStorage:', error);
    return null;
  }
}

// Remove data from LocalStorage
function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    console.log('Data removed from LocalStorage');
  } catch (error) {
    console.error('Error removing from LocalStorage:', error);
  }
}

// Clear all LocalStorage
function clearLocalStorage() {
  try {
    localStorage.clear();
    console.log('LocalStorage cleared');
  } catch (error) {
    console.error('Error clearing LocalStorage:', error);
  }
}

// Check LocalStorage availability
function isLocalStorageAvailable() {
  try {
    const test = '__test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// Usage examples
const userSettings = {
  theme: 'dark',
  language: 'en',
  notifications: true
};

saveToLocalStorage('userSettings', userSettings);

const settings = getFromLocalStorage('userSettings');
console.log(settings); // { theme: 'dark', language: 'en', notifications: true }

// Working with arrays
const todos = getFromLocalStorage('todos') || [];

function addTodo(todo) {
  todos.push(todo);
  saveToLocalStorage('todos', todos);
}

function removeTodo(index) {
  todos.splice(index, 1);
  saveToLocalStorage('todos', todos);
}
```

### SessionStorage
```javascript
// Save data to SessionStorage
function saveToSessionStorage(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
    console.log('Data saved to SessionStorage');
  } catch (error) {
    console.error('Error saving to SessionStorage:', error);
  }
}

// Get data from SessionStorage
function getFromSessionStorage(key) {
  try {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting from SessionStorage:', error);
    return null;
  }
}

// Usage examples
const sessionData = {
  loginTime: new Date().toISOString(),
  pageViews: 0,
  lastPage: '/'
};

saveToSessionStorage('sessionData', sessionData);

// Track page views
function trackPageView(page) {
  const data = getFromSessionStorage('sessionData') || {};
  data.pageViews = (data.pageViews || 0) + 1;
  data.lastPage = page;
  saveToSessionStorage('sessionData', data);
}

// Form data persistence
function saveFormData(formId) {
  const form = document.getElementById(formId);
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  saveToSessionStorage(`formData_${formId}`, data);
}

function restoreFormData(formId) {
  const data = getFromSessionStorage(`formData_${formId}`);
  if (data) {
    const form = document.getElementById(formId);
    Object.keys(data).forEach(key => {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) {
        input.value = data[key];
      }
    });
  }
}
```

### WebSocket
```javascript
// Create WebSocket connection
function createWebSocket(url) {
  const socket = new WebSocket(url);
  
  socket.onopen = (event) => {
    console.log('WebSocket connection opened:', event);
    // Send initial message
    socket.send(JSON.stringify({
      type: 'join',
      data: 'Hello Server!'
    }));
  };
  
  socket.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      console.log('Message received:', message);
      handleWebSocketMessage(message);
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  };
  
  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
  
  socket.onclose = (event) => {
    console.log('WebSocket connection closed:', event);
    if (event.code === 1000) {
      console.log('Normal closure');
    } else {
      console.log('Abnormal closure, attempting to reconnect...');
      setTimeout(() => createWebSocket(url), 3000);
    }
  };
  
  return socket;
}

// Send message through WebSocket
function sendMessage(socket, type, data) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: type,
      data: data,
      timestamp: new Date().toISOString()
    }));
  } else {
    console.error('WebSocket is not open');
  }
}

// Handle incoming messages
function handleWebSocketMessage(message) {
  switch (message.type) {
    case 'chat':
      displayChatMessage(message.data);
      break;
    case 'notification':
      showNotification(message.data);
      break;
    case 'update':
      updateUI(message.data);
      break;
    default:
      console.log('Unknown message type:', message.type);
  }
}

// Chat application example
const socket = createWebSocket('wss://chat.example.com');

function sendMessageToChat(message) {
  sendMessage(socket, 'chat', {
    text: message,
    user: currentUser,
    room: currentRoom
  });
}

function displayChatMessage(data) {
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.innerHTML = `
    <strong>${data.user}:</strong> ${data.text}
    <small>${new Date(data.timestamp).toLocaleTimeString()}</small>
  `;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Real-time collaboration example
function sendCursorPosition(x, y) {
  sendMessage(socket, 'cursor', {
    x: x,
    y: y,
    user: currentUser
  });
}

function updateCursor(data) {
  const cursor = document.getElementById(`cursor-${data.user}`);
  if (cursor) {
    cursor.style.left = `${data.x}px`;
    cursor.style.top = `${data.y}px`;
  }
}
```

### Error Handling and Best Practices
```javascript
// Robust fetch with retry mechanism
async function fetchWithRetry(url, options = {}, retries = 3) {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return fetchWithRetry(url, options, retries - 1);
    } else {
      throw error;
    }
  }
}

// Storage with error handling and fallback
function safeLocalStorageOperation(operation, key, data) {
  try {
    if (!isLocalStorageAvailable()) {
      console.warn('LocalStorage not available, using fallback');
      return fallbackStorage(operation, key, data);
    }
    
    switch (operation) {
      case 'set':
        localStorage.setItem(key, JSON.stringify(data));
        break;
      case 'get':
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      case 'remove':
        localStorage.removeItem(key);
        break;
    }
  } catch (error) {
    console.error('LocalStorage operation failed:', error);
    return fallbackStorage(operation, key, data);
  }
}

// Fallback storage (in-memory)
const fallbackStorage = {
  data: {},
  set(key, value) {
    this.data[key] = value;
  },
  get(key) {
    return this.data[key] || null;
  },
  remove(key) {
    delete this.data[key];
  }
};

// WebSocket connection manager
class WebSocketManager {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectInterval = 1000;
  }
  
  connect() {
    this.socket = new WebSocket(this.url);
    
    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0;
    };
    
    this.socket.onclose = () => {
      console.log('WebSocket disconnected');
      this.attemptReconnect();
    };
    
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
  
  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        this.connect();
      }, this.reconnectInterval * this.reconnectAttempts);
    }
  }
  
  send(data) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error('WebSocket not ready');
    }
  }
  
  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
```

## Verification
1. ตรวจสอบว่า Fetch API ทำงานได้
2. ทดสอบ LocalStorage operations
3. ยืนยันว่า SessionStorage ทำงานได้
4. ตรวจสอบ WebSocket connection
5. ทดสอบ error handling mechanisms
6. ยืนยันว่า retry logic ทำงานได้
