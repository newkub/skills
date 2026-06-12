# Integration

## Purpose

แนวทางการจัดการ cross-cutting concerns และ system integration

## Scope

- Cross-Cutting Concerns
- System Integration Patterns
- Data Integration

## Cross-Cutting Concerns

### Logging

```typescript
// Structured logging
const logger = {
  info: (message: string, context?: object) => {
    console.log(JSON.stringify({
      level: 'info',
      timestamp: new Date().toISOString(),
      message,
      ...context,
    }));
  },
  error: (message: string, error?: Error) => {
    console.error(JSON.stringify({
      level: 'error',
      timestamp: new Date().toISOString(),
      message,
      stack: error?.stack,
    }));
  },
};

// Usage
logger.info('User logged in', { userId: '123', ip: '192.168.1.1' });
```

### Authentication & Authorization

| Pattern | Description |
|---------|-------------|
| **JWT** | Stateless tokens |
| **Session** | Server-side state |
| **OAuth 2.0** | Delegated authorization |
| **API Keys** | Simple authentication |

```typescript
// Middleware pattern
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const decoded = verifyJWT(token);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

### Caching

| Strategy | Description |
|----------|-------------|
| **Cache-Aside** | Check cache, then DB |
| **Write-Through** | Write to cache and DB |
| **Write-Behind** | Write to cache, async DB |
| **Refresh-Ahead** | Proactively refresh |

```typescript
// Cache-aside pattern
async function getUser(id: string): Promise<User> {
  const cached = await cache.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  const user = await db.users.findById(id);
  await cache.set(`user:${id}`, JSON.stringify(user), { ttl: 300 });
  return user;
}
```

### Rate Limiting

```typescript
const rateLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // requests per window
});

app.use('/api', async (req, res, next) => {
  const allowed = await rateLimiter.check(req.ip);
  if (!allowed) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  next();
});
```

## System Integration

### API Gateway

```
┌────────────────────────────────────────────────────────────────────┐
│                          API Gateway                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐            │
│   │  /auth │    │ /users │    │/orders │    │/products│            │
│   └────────┘    └────────┘    └────────┘    └────────┘            │
│                                                                     │
│   Features:                                                         │
│   - Authentication                                                  │
│   - Rate limiting                                                   │
│   - Request routing                                                 │
│   - Response transformation                                         │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Backend for Frontend (BFF)

| Client | API Version | Special Needs |
|--------|-------------|---------------|
| Web | Full featured | SEO, SSR |
| Mobile | Lightweight | Offline, battery |
| Third-party | Stable | Rate limiting |

### Message Queue Integration

```
┌─────────┐      Publish       ┌────────────┐      Consume      ┌─────────┐
│ Service │ ───────────────> │   Kafka    │ ────────────────> │ Consumer│
└─────────┘                   └────────────┘                  └─────────┘

Patterns:
- Point-to-point (competing consumers)
- Pub/Sub (multiple consumers)
- Dead letter queue (failed messages)
```

## Data Integration

### Database Per Service

```
┌─────────────┐          ┌─────────────┐          ┌─────────────┐
│  User DB    │          │  Order DB   │          │  Product DB │
│ (PostgreSQL)│          │  (MySQL)    │          │  (MongoDB)  │
└─────────────┘          └─────────────┘          └─────────────┘
       │                        │                        │
       └────────────────────────┼────────────────────────┘
                                │
                      ┌─────────┴─────────┐
                      │   Event Bus        │
                      │   (Data Changes)   │
                      └───────────────────┘
```

### Data Consistency Patterns

| Pattern | Description | Use When |
|---------|-------------|----------|
| **Saga** | Distributed transactions | Multiple services |
| **Eventual Consistency** | Accept delays | High availability |
| **Two-Phase Commit** | Synchronized commit | Strong consistency |
| **Outbox Pattern** | Reliable events | Transactional outbox |

### Event Schema

```typescript
interface DomainEvent {
  eventId: string;
  eventType: string;
  timestamp: string;
  aggregateId: string;
  payload: object;
  metadata: {
    correlationId: string;
    causationId: string;
  };
}

// Example
{
  "eventId": "evt-123",
  "eventType": "order.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "aggregateId": "order-456",
  "payload": {
    "customerId": "cust-789",
    "total": 99.99,
    "items": [...]
  }
}
```

## Monitoring & Observability

### Distributed Tracing

```typescript
// OpenTelemetry
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('my-service');

async function processOrder(orderId: string) {
  const span = tracer.startSpan('processOrder', {
    attributes: { orderId },
  });

  try {
    const order = await fetchOrder(orderId);
    await processPayment(order);
    await fulfillOrder(order);
    span.setStatus({ code: SpanStatusCode.OK });
  } catch (error) {
    span.recordException(error);
    span.setStatus({ code: SpanStatusCode.ERROR });
  } finally {
    span.end();
  }
}
```

### Health Checks

```typescript
// Health check endpoint
app.get('/health', async (req, res) => {
  const checks = {
    database: await checkDB(),
    cache: await checkCache(),
    external: await checkExternal(),
  };

  const healthy = Object.values(checks).every(c => c.status === 'healthy');
  res.status(healthy ? 200 : 503).json({
    status: healthy ? 'healthy' : 'unhealthy',
    checks,
    timestamp: new Date().toISOString(),
  });
});
```

## Summary

| Concern | Pattern | Implementation |
|---------|---------|----------------|
| **Logging** | Structured logging | ELK, Loki |
| **Auth** | JWT, OAuth | Middleware |
| **Caching** | Cache-aside | Redis |
| **Rate Limit** | Token bucket | API Gateway |
| **Tracing** | OpenTelemetry | Jaeger |
| **Health** | Health endpoint | /health |

## Next Steps

| File | Description |
|------|-------------|
| [best-practices.md](best-practices.md) | Architecture best practices |
| [features.md](features.md) | All patterns |