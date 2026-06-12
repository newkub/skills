# Configuration

## Purpose

แนวทางการเลือก architectural patterns ตาม context และ constraints ต่างๆ

## Pattern Selection Criteria

### By Team Size

| Team Size | Recommended Architecture |
|------------|-------------------------|
| 1-5 people | Monolithic or Modular |
| 5-15 people | Modular Monolith or Few Microservices |
| 15+ people | Microservices or Event-Driven |

### By Scale Requirements

| Scale | Architecture |
|-------|--------------|
| Small (< 1K users) | Monolithic |
| Medium (1K - 100K) | Modular Monolith |
| Large (100K - 1M) | Microservices |
| Enterprise (1M+) | Distributed Microservices |

### By Domain Complexity

| Domain | Architecture |
|--------|--------------|
| Simple CRUD | Monolithic |
| Business Logic | Layered / Clean |
| Complex Domain | Hexagonal / Event-Driven |
| High Throughput | Event-Driven / CQRS |

## Technology Selection

### Backend Options

| Requirement | Technology |
|-------------|------------|
| REST APIs | Express, NestJS, FastAPI |
| High Performance | Go, Rust, Java |
| Real-time | Socket.io, GraphQL Subscriptions |
| Event Processing | Kafka, RabbitMQ |

### Database Selection

| Use Case | Database |
|----------|----------|
| Relational data | PostgreSQL |
| Documents | MongoDB |
| Key-value | Redis |
| Time-series | InfluxDB |
| Graph | Neo4j |
| Search | Elasticsearch |

### Cloud Services

| Need | AWS | GCP | Azure |
|------|-----|-----|-------|
| Compute | EC2, Lambda | Compute Engine, Cloud Functions | VM, Functions |
| Containers | ECS, EKS | GKE | AKS |
| Database | RDS, DynamoDB | Cloud SQL, Firestore | SQL Database, CosmosDB |
| Messaging | SQS, SNS | Pub/Sub | Service Bus |

## Migration Strategy

### Strangler Fig Pattern

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Strangler Fig Migration                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Old System ─────────────────────────────────────────────┐          │
│       │                                                  │          │
│       │                    ┌────────────────────────┐   │          │
│       │                    │    API Gateway         │   │          │
│       │                    │    (Router)            │   │          │
│       │                    └────────┬───────┬────────┘   │          │
│       │                             │       │            │          │
│       ▼                             ▼       ▼            │          │
│   ┌─────────────┐           ┌──────────┐ ┌───────────┐ │          │
│   │ Legacy      │           │ New      │ │ Legacy    │ │          │
│   │ System      │           │ Service  │ │ Features  │ │          │
│   └─────────────┘           └──────────┘ └───────────┘ │          │
│                                                          │          │
│   Migrate features one by one until legacy is "strangled"│          │
└─────────────────────────────────────────────────────────┘          │
```

### Patterns for Migration

| Phase | Pattern |
|-------|---------|
| 1 | Extract data (Shared DB → Separate DB) |
| 2 | Extract functionality (New Service → Legacy) |
| 3 | Route traffic (Gateway → New Service) |
| 4 | Decommission legacy (Remove old code) |

## Configuration Management

### Environment Configuration

```typescript
// config/index.ts
const config = {
  env: process.env.NODE_ENV ?? 'development',
  api: {
    port: parseInt(process.env.PORT ?? '3000'),
    rateLimit: process.env.RATE_LIMIT === 'true',
  },
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '5432'),
  },
  cache: {
    enabled: process.env.CACHE_ENABLED === 'true',
    ttl: parseInt(process.env.CACHE_TTL ?? '3600'),
  },
};
```

### Feature Flags

```typescript
interface FeatureFlags {
  newCheckout: boolean;
  darkMode: boolean;
  betaFeatures: boolean;
}

const flags: FeatureFlags = {
  newCheckout: process.env.FEATURE_NEW_CHECKOUT === 'true',
  darkMode: true,
  betaFeatures: process.env.NODE_ENV === 'development',
};
```

## Architecture Decisions Log

### Documenting ADRs

| Section | Content |
|---------|---------|
| Title | Clear, descriptive title |
| Status | Proposed, Accepted, Deprecated |
| Context | Background and problem |
| Decision | Chosen solution |
| Consequences | Pros, cons, trade-offs |

### Example ADR

```markdown
# ADR-001: Use PostgreSQL as Primary Database

## Status
Accepted

## Context
We need a database that provides:
- ACID compliance for financial transactions
- Complex query capabilities
- JSON support for flexible schemas

## Decision
We will use PostgreSQL as our primary database.

## Consequences
- Pro: Strong consistency
- Pro: Rich SQL features
- Con: Vertical scaling limits
- Con: Schema migrations required
```

## Next Steps

| File | Description |
|------|-------------|
| [quick-start.md](quick-start.md) | Quick selection guide |
| [best-practices.md](best-practices.md) | Architecture best practices |