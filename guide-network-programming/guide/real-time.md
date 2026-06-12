# Real-Time

## WebSocket และ Real-Time Communication

### WebSocket Basics

### Connection Establishment

**HTTP Upgrade Request**:

```http
GET /ws HTTP/1.1
Host: localhost:8080
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsbGUBsb3RoZQ==
Sec-WebSocket-Version: 13
```

**Server Response**:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

### WebSocket Server (Go)

````

### WebSocket Client (JavaScript)

```javascript
const ws = new WebSocket('ws://localhost:8080/ws');

ws.onopen = () => {
    console.log('Connected');
    ws.send('Hello, server!');
};

ws.onmessage = (event) => {
    console.log('Received:', event.data);
};

ws.onerror = (error) => {
    console.error('Error:', error);
};

ws.onclose = (event) => {
    console.log('Disconnected:', event.code);
};
```

### WebSocket Client (Python)

```python
import asyncio
import websockets

async def websocket_client():
    uri = "ws://localhost:8080/ws"
    async with websockets.connect(uri) as ws:
        await ws.send("Hello, server!")
        
        response = await ws.recv()
        print(f"Received: {response}")

asyncio.run(websocket_client())
```

### Real-Time Patterns

### Broadcast

**Server (Go)**:

````

### Room-Based Communication

**Server (Go)**:

````

### Heartbeat/Ping-Pong

**Client (JavaScript)**:

```javascript
setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('ping');
    }
}, 30000);

ws.onmessage = (event) => {
    if (event.data === 'pong') {
        console.log('Pong received');
    }
};
```

**Server (Go)**:

````

### Reconnection

**Client (JavaScript)**:

```javascript
function connect() {
    const ws = new WebSocket('ws://localhost:8080/ws');
    
    ws.onopen = () => {
        console.log('Connected');
    };
    
    ws.onclose = (event) => {
        console.log('Disconnected, reconnecting in 3s...');
        setTimeout(connect, 3000);
    };
    
    ws.onerror = (error) => {
        console.error('Error:', error);
    };
}

connect();
```

### Authentication

### Token-Based Auth

**Client (JavaScript)**:

```javascript
const token = localStorage.getItem('token');
const ws = new WebSocket(`ws://localhost:8080/ws?token=${token}`);
```

**Server (Go)**:

````

### Error Handling

**Client (JavaScript)**:

```javascript
ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    // Reconnect logic
    setTimeout(connect, 5000);
};

ws.onclose = (event) => {
    if (event.code !== 1000) {
        console.log('Unexpected close, reconnecting');
        setTimeout(connect, 3000);
    }
};
```

### Binary Data

**Client (JavaScript)**:

```javascript
// Send binary data
const arrayBuffer = new ArrayBuffer(8);
const dataView = new DataView(arrayBuffer);
dataView.setInt32(0, 12345);

ws.send(arrayBuffer);

// Receive binary data
ws.onmessage = (event) => {
    if (event.data instanceof ArrayBuffer) {
        const dataView = new DataView(event.data);
        console.log('Number:', dataView.getInt32(0));
    }
};
```

**Server (Go)**:

````

### Scaling

### Load Balancing

**Sticky Sessions**:

```nginx
upstream websocket {
    ip_hash;
    server 192.168.1.1:8080;
    server 192.168.1.2:8080;
}

server {
    location /ws {
        proxy_pass http://websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

### Redis Pub/Sub

**Publisher (Go)**:

````

**Subscriber (Go)**:

````

### Best Practices

### 1. Use Heartbeat

```javascript
// Keep connection alive
setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('ping');
    }
}, 30000);
```

### 2. Handle Reconnection

```javascript
// Automatic reconnection
function connect() {
    const ws = new WebSocket(url);
    
    ws.onclose = () => {
        setTimeout(connect, 3000);
    };
}
```

### 3. Validate Input

````

### 4. Use Subprotocols

```javascript
// Specify subprotocol
const ws = new WebSocket(url, ['chat', 'superchat']);
```

### 5. Limit Message Size

````

