# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีที่สุดสำหรับการออกแบบ software architecture

## Scope

- Design Principles
- Communication
- Reliability
- Security

## Design Principles

### Keep it Simple

| Do | Don't |
|----|-------|
| Start with monolith | Over-engineer at start |
| Add complexity when needed | Build for imaginary future |
| Use proven patterns | Reinvent the wheel |
| Document decisions | Skip architecture docs |

### Boundaries

| Practice | Description |
|----------|-------------|
| **Define clear APIs** | Contracts between services |
| **Separate concerns** | Each service one responsibility |
| **Hide implementation** | Don't expose internals |
| **Version APIs** | Breaking changes need versioning |

### Dependency Management

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Dependency Rules                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   High-level modules should not depend on low-level modules          │
│                                                                      │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                                                             │   │
│   │   ┌──────────┐              ┌──────────┐                    │   │
│   │   │  Domain  │              │   Data   │                    │   │
│   │   │ (Policy) │              │ (Mechanism)│                   │   │
│   │   └────┬─────┘              └─────┬────┘                    │   │
│   │        │        depends on        │                          │   │
│   │        └──────────────────────────┘                          │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│   Domain should depend on abstractions, not implementations          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Communication Patterns

### Service Communication

| Pattern | Use When |
|---------|----------|
| **Sync (REST/gRPC)** | Low latency, immediate response |
| **Async (Events)** | Decoupling, high throughput |
| **Hybrid** | Mix of both |

### API Design

| Practice | Description |
|----------|-------------|
| **Use nouns, not verbs** | `/users` not `/getUsers` |
| **Version APIs** | `/v1/users`, `/v2/users` |
| **Consistent errors** | Same error format everywhere |
| **Pagination** | For large collections |
| **Filtering** | Query parameters for filtering |

```typescript
// Good API design
GET /api/v1/users?page=1&limit=20&status=active
POST /api/v1/orders
GET /api/v1/orders/:id
DELETE /api/v1/orders/:id

// Error response
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [
      { "field": "email", "message": "Invalid email format" }
    ]
  }
}
```

## Reliability Patterns

### Circuit Breaker

```typescript
class CircuitBreaker {
  private failures = 0;
  private lastFailure: Date | null = null;
  private state: 'closed' | 'open' | 'half-open' = 'closed';

  async call(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      if (this.shouldAttemptReset()) {
        this.state = 'half-open';
      } else {
        throw new Error('Circuit open');
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = 'closed';
  }

  private onFailure() {
    this.failures++;
    this.lastFailure = new Date();
    if (this.failures >= this.threshold) {
      this.state = 'open';
    }
  }
}
```

### Retry Strategy

| Strategy | Use When |
|----------|----------|
| **Immediate** | Non-critical operations |
| **Exponential backoff** | Network failures |
| **Jitter** | Avoid thundering herd |
| **Circuit breaker** | Repeated failures |

```typescript
const retryWithBackoff = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await sleep(Math.pow(2, i) * 1000 + Math.random() * 1000);
    }
  }
};
```

### Bulkhead Pattern

```
┌─────────────────────────────────────────────────────────────────────┐
│                          Bulkhead                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Connection Pool A (10 connections) ──────> Service A             │
│                                                                      │
│   Connection Pool B (10 connections) ──────> Service B             │
│                                                                      │
│   Connection Pool C (10 connections) ──────> Service C             │
│                                                                      │
│   Failure in Service A doesn't affect Service B and C              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Security Best Practices

### Defense in Depth

| Layer | Protection |
|-------|------------|
| **Network** | Firewall, VPN, private subnets |
| **Transport** | TLS, mTLS |
| **Application** | Auth, validation, rate limiting |
| **Data** | Encryption at rest |

### Authentication & Authorization

```typescript
// Use established protocols
// JWT for stateless auth
// OAuth 2.0 for authorization
// OpenID Connect for identity

interface AuthConfig {
  jwtSecret: string;
  tokenExpiry: string;
  refreshTokenExpiry: string;
  oauthProviders: string[];
}
```

## Monitoring & Observability

### The Three Pillars

| Pillar | Tools | Metrics |
|--------|-------|---------|
| **Logs** | ELK, Loki | Structured events |
| **Metrics** | Prometheus, Datadog | Quantities |
| **Traces** | Jaeger, Zipkin | Request flow |

### Alerting

| Severity | Response Time | Example |
|----------|---------------|---------|
| **Critical** | Immediate | Service down |
| **High** | 15 minutes | High latency |
| **Medium** | 1 hour | Resource usage |
| **Low** | 24 hours | Non-critical |

## Documentation

### Architecture Decision Records

```markdown
# ADR-XXX: Title

## Context
Describe the situation

## Decision
What was decided

## Consequences
- Positive
- Negative
```

### System Documentation

| Document | Update Frequency |
|----------|------------------|
| Architecture diagram | On major changes |
| API documentation | On each release |
| Runbooks | Monthly review |
| ADRs | When decisions made |

## Summary Checklist

- [ ] Keep architecture simple
- [ ] Define clear boundaries
- [ ] Use proven patterns
- [ ] Implement reliability patterns
- [ ] Follow security best practices
- [ ] Monitor and document
- [ ] Review and iterate

## Next Steps

| File | Description |
|------|-------------|
| [integration.md](integration.md) | System integration |
| [features.md](features.md) | All patterns |