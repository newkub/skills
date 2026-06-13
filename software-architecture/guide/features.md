# Features

## Purpose

สรุป features ของ architectural styles และ patterns หลัก

## Scope

- Architectural Styles
- Architectural Patterns
- Communication Patterns

## Architectural Styles

### Monolithic Architecture

| Feature | Description |
|---------|-------------|
| **Structure** | Single deployable unit |
| **Complexity** | Low initially |
| **Deployment** | All-or-nothing |
| **Technology** | Single stack |
| **Scaling** | Vertical only |
| **Team** | Small teams |
| **Pros** | Simple, fast development |
| **Cons** | Limited scaling, single failure point |

### Modular Monolith

| Feature | Description |
|---------|-------------|
| **Structure** | Single deploy, but modular |
| **Boundaries** | Well-defined modules |
| **Deployment** | Single unit, modules separate |
| **Technology** | Single stack |
| **Benefits** | Clear separation, easier migration |

### Microservices

| Feature | Description |
|---------|-------------|
| **Structure** | Independent services |
| **Deployment** | Each service independently |
| **Technology** | Polyglot (different per service) |
| **Scaling** | Horizontal per service |
| **Team** | Team per service (Two Pizza Rule) |
| **Pros** | Scalability, fault isolation |
| **Cons** | Complexity, operational overhead |

### Event-Driven

| Feature | Description |
|---------|-------------|
| **Structure** | Producers, brokers, consumers |
| **Communication** | Async events |
| **Scaling** | Independent scaling |
| **Coupling** | Loose via events |
| **Pros** | High throughput, decoupling |
| **Cons** | Complexity, eventual consistency |

### Serverless (FaaS)

| Feature | Description |
|---------|-------------|
| **Structure** | Functions as building blocks |
| **Deployment** | Automatic |
| **Scaling** | Automatic |
| **Cost** | Pay-per-use |
| **Pros** | Low cost, no server management |
| **Cons** | Cold start, vendor lock-in |

## Architectural Patterns

### Layered Architecture

| Layer | Responsibility |
|-------|----------------|
| Presentation | UI, API endpoints |
| Application | Use cases, orchestration |
| Domain | Business rules, entities |
| Infrastructure | DB, external services |

### Hexagonal (Ports & Adapters)

| Component | Description |
|-----------|-------------|
| **Core Domain** | Pure business logic |
| **Primary Ports** | Input interfaces |
| **Secondary Ports** | Output interfaces |
| **Primary Adapters** | Web, API, CLI |
| **Secondary Adapters** | DB, external APIs |

### Clean Architecture

| Layer | Contains |
|-------|----------|
| Entities | Enterprise business rules |
| Use Cases | Application business rules |
| Interface Adapters | Controllers, presenters |
| Frameworks & Drivers | DB, web, UI |

### Onion Architecture

```
┌─────────────────────────────────────┐
│        External Infrastructure       │
│           (DB, Web, etc.)           │
├─────────────────────────────────────┤
│              Adapters                │
├─────────────────────────────────────┤
│           Application               │
├─────────────────────────────────────┤
│              Domain                  │
│         (Core, Entities)             │
└─────────────────────────────────────┘
```

## Data Patterns

### Repository Pattern

| Feature | Description |
|---------|-------------|
| **Purpose** | Abstract data access |
| **Interface** | CRUD operations |
| **Implementation** | DB-specific code |
| **Benefits** | Testable, decoupled |

### CQRS (Command Query Responsibility Segregation)

| Side | Purpose | Optimization |
|------|---------|--------------|
| **Command** | Write operations | Validation, business rules |
| **Query** | Read operations | Fast reads, denormalized |

### Event Sourcing

| Feature | Description |
|---------|-------------|
| **Storage** | Events, not state |
| **Benefits** | Complete audit trail |
| **Replay** | Rebuild state from events |
| **Complexity** | Eventual consistency |

## Communication Patterns

### Synchronous Communication

| Pattern | Description |
|---------|-------------|
| **REST** | HTTP-based, stateless |
| **gRPC** | High performance, binary |
| **GraphQL** | Flexible queries |

### Asynchronous Communication

| Pattern | Description |
|---------|-------------|
| **Message Queue** | Reliable delivery |
| **Event Bus** | Pub/sub pattern |
| **Webhooks** | HTTP callbacks |

### Integration Patterns

| Pattern | Use Case |
|---------|----------|
| **API Gateway** | Single entry point |
| **Backend for Frontend** | Specialized APIs per client |
| **Service Mesh** | Cross-service communication |

## Reliability Patterns

### Circuit Breaker

```
Normal Operation:
Service A ─────> Service B

Circuit Open:
Service A ──X──> Service B (fallback response)
```

### Retry Pattern

| Strategy | Description |
|----------|-------------|
| **Immediate** | Retry once immediately |
| **Exponential Backoff** | Wait 1s, 2s, 4s... |
| **Jitter** | Random delay to avoid thundering herd |

### Load Balancing

| Strategy | Description |
|----------|-------------|
| **Round Robin** | Sequential distribution |
| **Least Connections** | Send to least busy |
| **Weighted** | Based on capacity |
| **Health-based** | Only healthy instances |

## Summary Table

| Pattern | Best For | Complexity |
|---------|----------|------------|
| Monolithic | Small teams, MVPs | Low |
| Modular Monolith | Migration path | Medium |
| Microservices | Large scale, multiple teams | High |
| Event-Driven | High throughput, async | High |
| Serverless | Variable load, low cost | Medium |
| Layered | Traditional apps | Low |
| Hexagonal | Testable domain | Medium |
| Clean | Complex domain | Medium |
| CQRS | Complex queries | High |