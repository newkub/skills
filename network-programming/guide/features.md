# Features

## Features ของ Network Protocols

### TCP Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Reliability** | Acknowledgments and retransmission | Data integrity |
| **Ordering** | Sequenced delivery | Correct order |
| **Flow Control** | Prevents overwhelming receiver | Stability |
| **Congestion Control** | Adjusts to network conditions | Fairness |
| **Connection-Oriented** | Established connection | Stateful communication |

### UDP Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Low Overhead** | Minimal header | Speed |
| **Connectionless** | No connection setup | Low latency |
| **Broadcast/Multicast** | Send to multiple recipients | Efficiency |
| **No Ordering** | No sequencing | Simplicity |
| **No Retransmission** | Fire and forget | Speed |

### HTTP/1.1 Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Persistent Connections** | Reuse connections | Performance |
| **Pipelining** | Multiple requests without waiting | Latency reduction |
| **Chunked Transfer** | Stream data | Flexibility |
| **Compression** | Compress responses | Bandwidth savings |
| **Caching** | Cache responses | Performance |

### HTTP/2 Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Multiplexing** | Multiple streams over one connection | Performance |
| **Header Compression** | HPACK compression | Bandwidth savings |
| **Server Push** | Proactively send resources | Latency reduction |
| **Binary Protocol** | Binary framing | Efficiency |
| **Stream Prioritization** | Prioritize important streams | User experience |

### HTTP/3 Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **QUIC Transport** | UDP-based transport | Performance |
| **Connection Migration** | Change IP without breaking connection | Mobility |
| **0-RTT** | Send data immediately on connection | Latency reduction |
| **Improved Congestion Control** | Better network adaptation | Performance |
| **No Head-of-Line Blocking** | Independent streams | Reliability |

### WebSocket Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Full-Duplex** | Bidirectional communication | Real-time |
| **Low Overhead** | Minimal framing | Performance |
| **Real-Time** | Instant message delivery | Responsiveness |
| **Binary Data** | Send binary data | Flexibility |
| **Subprotocols** | Custom protocols | Extensibility |

### REST Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Stateless** | No server state | Scalability |
| **Cacheable** | HTTP caching support | Performance |
| **Uniform Interface** | Consistent API | Simplicity |
| **Layered System** | Clear separation of concerns | Maintainability |
| **Code on Demand** | Optional code transfer | Flexibility |

### GraphQL Features

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Single Endpoint** | One URL for all queries | Simplicity |
| **Fetch What You Need** | Precise data fetching | Efficiency |
| **Strongly Typed** | Schema validation | Type safety |
| **Introspection** | Query schema | Developer experience |
| **Subscriptions** | Real-time updates | Real-time features |

### Security Features

### SSL/TLS

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Encryption** | Data encryption | Privacy |
| **Authentication** | Server identity | Trust |
| **Integrity** | Data integrity | Security |
| **Perfect Forward Secrecy** | Key compromise protection | Security |
| **Certificate Validation** | Certificate chain verification | Trust |

### Authentication

| Method | Description | Use Case |
|--------|-------------|----------|
| **Basic Auth** | Base64 encoded credentials | Simple apps |
| **Bearer Token** | Token-based authentication | Modern APIs |
| **API Key** | Key-based authentication | Public APIs |
| **OAuth 2.0** | Authorization framework | Third-party access |
| **JWT** | Self-contained tokens | Stateless auth |

### Performance Features

### Caching

| Type | Description | Use Case |
|------|-------------|----------|
| **Browser Cache** | Client-side caching | Static assets |
| **CDN Cache** | Edge caching | Global distribution |
| **Application Cache** | Server-side caching | Dynamic content |
| **Database Cache** | Query result caching | Database optimization |

### Compression

| Type | Description | Benefit |
|------|-------------|---------|
| **Gzip** | Text compression | Bandwidth savings |
| **Brotli** | Better compression | Better performance |
| **HTTP/2 HPACK** | Header compression | Efficiency |
| **Binary Protocols** | Binary data formats | Performance |
