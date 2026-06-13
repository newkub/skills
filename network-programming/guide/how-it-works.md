# How It Works

## Network Protocols ทำงานอย่างไร

### TCP Connection

### Three-Way Handshake

**How it works**:
1. Client sends SYN to server
2. Server responds with SYN-ACK
3. Client responds with ACK

**Example**:

```
Client                          Server
  |                               |
  |----------- SYN -------------->|
  |                               |
  |<--------- SYN-ACK -----------|
  |                               |
  |----------- ACK -------------->|
  |                               |
  |    Connection Established     |
```

### Data Transfer

**How it works**:
1. Data divided into segments
2. Each segment sequenced
3. Acknowledgments sent
4. Retransmission if lost

### UDP Communication

### Connectionless

**How it works**:
1. No connection establishment
2. Data sent immediately
3. No acknowledgment
4. No ordering guarantee

**Example**:

```
Client                          Server
  |                               |
  |----------- Data ------------>|
  |                               |
  |----------- Data ------------>|
  |                               |
  |    No acknowledgment          |
```

### HTTP Request/Response

### Request Structure

```
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json

[Body if POST/PUT]
```

### Response Structure

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 123

[Body]
```

### HTTP/2

### Multiplexing

**How it works**:
1. Single TCP connection
2. Multiple streams
3. Binary framing
4. Header compression

**Benefits**:
- Reduced latency
- Better resource utilization
- Server push

### WebSocket Handshake

### HTTP Upgrade

**How it works**:
1. Client sends HTTP upgrade request
2. Server responds with 101 Switching Protocols
3. Connection switches to WebSocket protocol

**Example**:

```
Client                          Server
  |                               |
  |--- HTTP Upgrade Request ---->|
  | GET /ws HTTP/1.1             |
  | Upgrade: websocket            |
  |                               |
  |<-- 101 Switching Protocols ---|
  | Connection: Upgrade           |
  |                               |
  |    WebSocket Established     |
```

### WebSocket Communication

### Frame Structure

**How it works**:
1. Data sent as frames
2. Frames can be text or binary
3. Control frames (ping/pong/close)
4. Bidirectional communication

**Example**:

```
Client                          Server
  |                               |
  |--- Text Frame -------------->|
  | "Hello"                       |
  |                               |
  |<-- Text Frame ---------------|
  | "Hi there"                    |
  |                               |
  |--- Ping Frame -------------->|
  |                               |
  |<-- Pong Frame --------------|
```

### REST API Flow

### Resource Access

**How it works**:
1. Client sends HTTP request to resource URL
2. Server processes request
3. Server returns response with resource data
4. Client parses response

**Example**:

```
Client                          Server
  |                               |
  |--- GET /api/users/1 -------->|
  |                               |
  |<-- 200 OK -------------------|
  | {"id": 1, "name": "John"}     |
```

### GraphQL Flow

### Query Execution

**How it works**:
1. Client sends GraphQL query to single endpoint
2. Server parses query
3. Server resolves fields
4. Server returns exactly requested data

**Example**:

```
Client                          Server
  |                               |
  |--- POST /graphql ----------->|
  | query { user(id: 1) { name } }|
  |                               |
  |<-- 200 OK -------------------|
  | {"data": {"user": {"name": "John"}}}
```

### DNS Resolution

### Domain to IP

**How it works**:
1. Client queries DNS resolver
2. Resolver checks cache
3. If not cached, queries authoritative server
4. Returns IP address

**Example**:

```
Client                          DNS Server
  |                               |
  |--- Query: example.com ------>|
  |                               |
  |<-- Response: 93.184.216.34 ---|
```

### Network Layers

### Encapsulation

**How it works**:
1. Application data
2. Transport layer adds header (TCP/UDP)
3. Network layer adds header (IP)
4. Data link layer adds header (Ethernet)
5. Physical layer transmits bits

**Example**:

```
Application: "Hello"
Transport: [TCP Header] "Hello"
Network: [IP Header] [TCP Header] "Hello"
Data Link: [Ethernet Header] [IP Header] [TCP Header] "Hello"
```

### Decapsulation

**How it works**:
1. Physical layer receives bits
2. Data link layer removes Ethernet header
3. Network layer removes IP header
4. Transport layer removes TCP header
5. Application receives data

### Routing

### Path Selection

**How it works**:
1. Router receives packet
2. Checks destination IP
3. Consults routing table
4. Forwards to next hop

**Example**:

```
Packet: Source 192.168.1.1 -> Dest 10.0.0.1
Router: Route to 10.0.0.0/24 via 192.168.1.254
Forward: Send to 192.168.1.254
```

### Load Balancing

### Distribution

**How it works**:
1. Load balancer receives request
2. Selects backend server
3. Forwards request
4. Returns response to client

**Algorithms**:
- Round robin
- Least connections
- IP hash
- Weighted
