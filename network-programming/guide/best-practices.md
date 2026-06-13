# Best Practices

## Best Practices สำหรับ Network Programming

### Connection Management

### 1. Use Connection Pooling

```rust
// ✅ Good: Connection pool
use reqwest::Client;

async fn connection_pool() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::builder()
        .pool_max_idle_per_host(10)
        .build()?;
    
    // Use client
    Ok(())
}

// ❌ Bad: New connection each request
let client = Client::new();
```

### 2. Set Timeouts

````

### 3. Close Connections

```rust
// ✅ Good: Close response body (auto with RAII)
let resp = client.get(url).await?;
// Response body is auto-closed when dropped

// ❌ Bad: Not closing body (resource leak)
// In Rust, RAII handles this automatically
```

### Error Handling

### 4. Handle Network Errors

````

### 5. Retry with Backoff

````

### Security

### 6. Use HTTPS

````

### 7. Validate Certificates

````

### 8. Use Secure Authentication

```python
# ✅ Good: Use Bearer token
headers = {'Authorization': f'Bearer {token}'}

# ❌ Bad: Send credentials in URL
requests.get(f'https://api.example.com?user={user}&pass={pass}')
```

### API Design

### 9. Use Proper HTTP Methods

```http
# ✅ Good: Correct method usage
GET /api/users
POST /api/users
PUT /api/users/1
DELETE /api/users/1

# ❌ Bad: Wrong method usage
GET /api/users/1  # Should use DELETE
POST /api/users/1  # Should use PUT/PATCH
```

### 10. Use Appropriate Status Codes

````

### 11. Version Your API

```
# ✅ Good: Versioned API
/api/v1/users
/api/v2/users

# ❌ Bad: No versioning
/api/users
```

### Performance

### 12. Use Compression

````

### 13. Cache Responses

````

### 14. Use HTTP/2

````

### WebSocket

### 15. Handle Disconnects

```javascript
// ✅ Good: Handle disconnects
ws.onclose = (event) => {
    console.log('Disconnected:', event.code);
    // Reconnect logic
    setTimeout(() => connect(), 1000);
};

// ❌ Bad: No disconnect handling
// No onclose handler
```

### 16. Use Heartbeat

```javascript
// ✅ Good: Use heartbeat
setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send('ping');
    }
}, 30000);

// ❌ Bad: No heartbeat
// No keepalive mechanism
```

### REST vs GraphQL

### 17. Choose Appropriate API Type

| Scenario | Recommended |
|----------|-------------|
| **Simple CRUD** | REST |
| **Complex queries** | GraphQL |
| **Mobile apps** | GraphQL (reduce overfetching) |
| **Public APIs** | REST (standard) |
| **Real-time** | GraphQL subscriptions |

### 18. GraphQL Best Practices

```graphql
# ✅ Good: Specific fields
query {
  user(id: 1) {
    name
    email
  }
}

# ❌ Bad: Too many fields
query {
  user(id: 1) {
    name
    email
    posts {
      title
      content
      author {
        name
        email
      }
    }
  }
}
```

### Logging

### 19. Log Requests

````

### 20. Log Errors

````

### Testing

### 21. Test Network Failures

````

### 22. Test Timeouts

````

### Documentation

### 23. Document API Endpoints

```markdown
# API Documentation

## Get Users

Retrieve all users.

**Endpoint**: `GET /api/users`

**Response**:
```json
[
  {"id": 1, "name": "John"},
  {"id": 2, "name": "Jane"}
]
```
```

### 24. Document WebSocket Events

```markdown
# WebSocket Events

## Message

Server sends message event.

**Format**:
```json
{
  "type": "message",
  "data": "Hello"
}
```
```

