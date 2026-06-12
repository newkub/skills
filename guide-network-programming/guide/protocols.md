# Protocols

## TCP/UDP, HTTP/HTTPS Protocols

### TCP (Transmission Control Protocol)

### Characteristics

- **Reliable**: Guaranteed delivery
- **Ordered**: Sequenced packets
- **Connection-oriented**: Three-way handshake
- **Flow control**: Prevents overwhelming receiver
- **Congestion control**: Adapts to network conditions

### Use Cases

- Web browsing (HTTP)
- Email (SMTP)
- File transfer (FTP)
- SSH
- Database connections

### Example (Go)

````

### UDP (User Datagram Protocol)

### Characteristics

- **Unreliable**: No guaranteed delivery
- **Connectionless**: No handshake
- **No ordering**: Packets may arrive out of order
- **Low overhead**: Minimal header
- **Fast**: No acknowledgment overhead

### Use Cases

- DNS queries
- Streaming media
- Online gaming
- VoIP
- IoT sensors

### Example (Go)

````

### HTTP (Hypertext Transfer Protocol)

### HTTP/1.1

**Features**:
- Persistent connections
- Pipelining
- Chunked transfer encoding
- Compression
- Caching

**Example Request**:

```http
GET /api/users HTTP/1.1
Host: api.example.com
User-Agent: MyApp/1.0
Accept: application/json
```

**Example Response**:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 123

[
  {"id": 1, "name": "John"},
  {"id": 2, "name": "Jane"}
]
```

### HTTP/2

**Features**:
- Multiplexing (multiple streams)
- Header compression (HPACK)
- Server push
- Binary framing
- Stream prioritization

**Benefits**:
- Reduced latency
- Better resource utilization
- Improved performance

### HTTP/3

**Features**:
- QUIC transport (UDP-based)
- Connection migration
- 0-RTT (zero round-trip time)
- Improved congestion control
- No head-of-line blocking

**Benefits**:
- Better performance on unreliable networks
- Faster connection establishment
- Improved mobility

### HTTPS (HTTP Secure)

### SSL/TLS Handshake

**How it works**:
1. Client sends ClientHello
2. Server responds with ServerHello + Certificate
3. Client verifies certificate
4. Client sends ClientKeyExchange
5. Server responds with ServerKeyExchange
6. Secure connection established

**Example (Go)**:

````

### WebSocket

### Handshake

**How it works**:
1. Client sends HTTP upgrade request
2. Server responds with 101 Switching Protocols
3. Connection switches to WebSocket protocol
4. Full-duplex communication begins

**Example Request**:

```http
GET /ws HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsbGUBsb3RoZQ==
Sec-WebSocket-Version: 13
```

**Example Response**:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

### WebSocket Frame

**Structure**:
- FIN (1 bit): Final fragment
- RSV1-3 (3 bits): Reserved
- Opcode (4 bits): Frame type
- MASK (1 bit): Masked flag
- Payload length (7/7+16/7+64 bits)
- Masking key (0 or 4 bytes)
- Payload data

**Example (Go)**:

````

### Protocol Comparison

| Protocol | Reliable | Ordered | Connection | Speed | Use Case |
|----------|----------|---------|------------|-------|----------|
| **TCP** | Yes | Yes | Yes | Medium | Web, Email, FTP |
| **UDP** | No | No | No | Fast | DNS, Gaming, Streaming |
| **HTTP/1.1** | Yes (TCP) | Yes (TCP) | Yes (TCP) | Medium | Web APIs |
| **HTTP/2** | Yes (TCP) | Yes (TCP) | Yes (TCP) | Fast | Modern web |
| **HTTP/3** | Yes (QUIC) | Yes (QUIC) | Yes (QUIC) | Fastest | Modern web |
| **WebSocket** | Yes (TCP) | Yes (TCP) | Yes (TCP) | Fast | Real-time |

