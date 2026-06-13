# Key Concept

## Network Programming Fundamentals

### OSI Model

### 7 Layers

| Layer | Name | Protocol Example |
|-------|------|-----------------|
| 7 | Application | HTTP, FTP, SMTP |
| 6 | Presentation | SSL/TLS, SSH |
| 5 | Session | RPC, NetBIOS |
| 4 | Transport | TCP, UDP |
| 3 | Network | IP, ICMP |
| 2 | Data Link | Ethernet, Wi-Fi |
| 1 | Physical | Cables, Radio waves |

### TCP vs UDP

| Aspect | TCP | UDP |
|--------|-----|-----|
| **Reliability** | Reliable (acknowledgments) | Unreliable (no ack) |
| **Ordering** | Ordered delivery | No ordering |
| **Connection** | Connection-oriented | Connectionless |
| **Speed** | Slower (overhead) | Faster (less overhead) |
| **Use Case** | Web, Email, File transfer | Streaming, Gaming, DNS |

**Example**:

```rust
// TCP (reliable)
use tokio::net::TcpStream;

async fn tcp_example() -> Result<(), Box<dyn std::error::Error>> {
    let mut stream = TcpStream::connect("example.com:80").await?;
    // Use stream
    Ok(())
}

// UDP (unreliable)
use tokio::net::UdpSocket;

async fn udp_example() -> Result<(), Box<dyn std::error::Error>> {
    let socket = UdpSocket::bind("0.0.0.0:0").await?;
    socket.connect("example.com:53").await?;
    // Use socket
    Ok(())
}
```

### HTTP/HTTPS

### HTTP Methods

| Method | Description | Idempotent |
|--------|-------------|------------|
| **GET** | Retrieve resource | Yes |
| **POST** | Create resource | No |
| **PUT** | Update resource | Yes |
| **DELETE** | Delete resource | Yes |
| **PATCH** | Partial update | No |

### HTTP Status Codes

| Code | Category | Description |
|------|----------|-------------|
| **2xx** | Success | Request succeeded |
| **3xx** | Redirection | Further action needed |
| **4xx** | Client Error | Bad request |
| **5xx** | Server Error | Server failed |

### HTTPS

**Purpose**: Encrypted HTTP using TLS/SSL

**Benefits**:
- Data encryption
- Server authentication
- Data integrity

**Example**:

```rust
// HTTP
use reqwest::Client;

async fn http_example() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let resp = client.get("http://example.com").await?;
    // Use response
    Ok(())
}

// HTTPS
async fn https_example() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let resp = client.get("https://example.com").await?;
    // Use response
    Ok(())
}
```

### WebSocket

### Definition

Full-duplex communication over single TCP connection

**Benefits**:
- Real-time communication
- Low overhead
- Bidirectional

**Use Cases**:
- Chat applications
- Real-time updates
- Gaming
- Live streaming

**Example**:

```rust
// Client-side WebSocket (using tungstenite)
use tungstenite::tungstenite::ClientMessage;
use tungstenite::tungstenite::protocol::Message;

async fn websocket_example() -> Result<(), Box<dyn std::error::Error>> {
    let (mut socket, _) = tungstenite::connect_async("ws://localhost:8080").await?;
    
    socket.send(Message::Text("Hello, server!")).await?;
    
    while let Some(message) = socket.next().await {
        println!("Received: {:?}", message);
    }
    
    Ok(())
}
```

### REST vs GraphQL

### REST

**Definition**: Representational State Transfer

**Principles**:
- Resource-based URLs
- HTTP methods
- Stateless
- Cacheable

**Example**:

```
GET /api/users
GET /api/users/1
POST /api/users
PUT /api/users/1
DELETE /api/users/1
```

### GraphQL

**Definition**: Query language for APIs

**Benefits**:
- Fetch exactly what you need
- Single endpoint
- Strongly typed schema
- Real-time updates (subscriptions)

**Example**:

```graphql
query {
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}
```

### Network Security

### SSL/TLS

**Purpose**: Encrypt network traffic

**Components**:
- Certificate
- Private key
- Public key

**Example**:

````

### Authentication

### Basic Auth

```http
Authorization: Basic base64(username:password)
```

### Bearer Token

```http
Authorization: Bearer <token>
```

### API Key

```http
X-API-Key: <api-key>
```

### Network Performance

### Latency

**Definition**: Time for data to travel from source to destination

**Factors**:
- Physical distance
- Network congestion
- Routing
- Protocol overhead

### Throughput

**Definition**: Amount of data transferred per time unit

**Factors**:
- Bandwidth
- Network conditions
- Protocol efficiency

### Bandwidth

**Definition**: Maximum data transfer rate

**Optimization**:
- Compression
- Caching
- CDN
- Protocol optimization

