# How It Works

## Purpose

อธิบายกลไกการทำงานของ architectural patterns และวิธีการตัดสินใจทาง architecture

## Scope

- Architecture Decision Process
- Component Interaction
- Data Flow Patterns

## Architecture Decision Process

### ADRs (Architecture Decision Records)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        ADR Structure                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   # ADR-001: Use PostgreSQL for User Data                           │
│                                                                      │
│   ## Status: Accepted                                               │
│   ## Date: 2024-01-15                                                │
│                                                                      │
│   ## Context                                                        │
│   We need to store user data with strong consistency...            │
│                                                                      │
│   ## Decision                                                       │
│   We will use PostgreSQL as our primary database...                │
│                                                                      │
│   ## Consequences                                                   │
│   - Pro: ACID compliance                                            │
│   - Pro: Rich query capabilities                                    │
│   - Con: More operational overhead                                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Decision Criteria

| Factor | Question |
|--------|----------|
| **Suitability** | Does it solve the problem? |
| **Feasibility** | Can we build it with resources? |
| **Supportability** | Can we maintain it long-term? |
| **Scalability** | Can it grow with requirements? |
| **Risk** | What could go wrong? |

## Layered Architecture Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                       Request Flow                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Browser/Client                                                     │
│       │                                                              │
│       ▼                                                              │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                    Presentation Layer                       │   │
│   │              (Controllers, API endpoints)                    │   │
│   │                         │                                    │   │
│   │                         ▼                                    │   │
│   │   ┌─────────────────────────────────────────────────────────┐│   │
│   │   │                Application Layer                       ││   │
│   │   │              (Use Cases, Application Services)         ││   │
│   │   │                         │                              ││   │
│   │   │                         ▼                              ││   │
│   │   │   ┌─────────────────────────────────────────────────────┐││   │
│   │   │   │                  Domain Layer                     │││   │
│   │   │   │            (Entities, Business Rules)             │││   │
│   │   │   │                         │                          │││   │
│   │   │   │                         ▼                          │││   │
│   │   │   │   ┌───────────────────────────────────────────────┐│││   │
│   │   │   │   │              Infrastructure Layer            ││││   │
│   │   │   │   │         (Database, External APIs)              │││   │
│   │   │   │   └───────────────────────────────────────────────┘│││   │
│   │   │   └─────────────────────────────────────────────────────┘│   │
│   │   └─────────────────────────────────────────────────────────┘   │
│   └─────────────────────────────────────────────────────────────┘   │
│       │                                                              │
│       ▼                                                              │
│   Response to Client                                                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Microservices Communication

### Synchronous (REST/gRPC)

```
┌─────────┐    HTTP     ┌─────────┐    HTTP     ┌─────────┐
│ Service │ ─────────> │ Service │ ─────────> │ Service │
│    A    │             │    B    │             │    C    │
└─────────┘             └─────────┘             └─────────┘
```

| Pattern | Use When |
|---------|----------|
| **REST** | Simple CRUD, low latency acceptable |
| **gRPC** | High performance, bidirectional streaming |
| **GraphQL** | Flexible queries, multiple clients |

### Asynchronous (Message Queue)

```
┌─────────┐    Publish     ┌────────────┐    Consume    ┌─────────┐
│ Service │ ─────────────> │   Kafka    │ ────────────> │ Consumer│
│    A    │                │   (Queue)  │              │         │
└─────────┘                └────────────┘              └─────────┘
```

| Pattern | Use When |
|---------|----------|
| **Kafka** | High throughput, event streaming |
| **RabbitMQ** | Task queues, priority messaging |
| **Redis Pub/Sub** | Simple pub/sub, low latency |

## Event-Driven Flow

### Event Sourcing

```
┌─────────────────────────────────────────────────────────────────────┐
│                       Event Sourcing Flow                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Command → Validate → Store Events → Update Read Model              │
│                    │               │               │                │
│                    ▼               ▼               ▼                │
│              ┌───────────┐   ┌───────────┐   ┌───────────┐           │
│              │ Business │   │   Event   │   │   Read    │           │
│              │  Rules    │   │   Store   │   │   Model   │           │
│              └───────────┘   └───────────┘   └───────────┘           │
│                                                                      │
│   Events:                                                            │
│   - UserCreated { id, name }                                        │
│   - UserUpdated { id, changes }                                     │
│   - UserDeleted { id }                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### CQRS Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CQRS Flow                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   WRITE SIDE                         READ SIDE                       │
│                                                                      │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐      │
│   │ Command  │ -> │  Domain  │ -> │  Events  │ -> │   Read   │      │
│   │          │    │  Logic   │    │          │    │  Model   │      │
│   └──────────┘    └──────────┘    └─────┬────┘    └──────────┘      │
│                                        │                             │
│                                        │ Project                    │
│                                        │                            │
│                                   ┌────────┐                        │
│                                   │  Sync  │                        │
│                                   └────────┘                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Data Flow Patterns

### Request-Response

```
Client ─────> API Gateway ─────> Service ─────> Database
    <───────────────────────────── Response
```

### Pub/Sub

```
Publisher ─────────> Topic ─────────> Subscriber 1
                                ─────> Subscriber 2
                                ─────> Subscriber 3
```

### Saga Pattern

```
┌─────────────────────────────────────────────────────────────────────┐
│                     Saga: Choreography                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Step 1        Step 2        Step 3        Step 4                  │
│   ┌─────┐      ┌─────┐      ┌─────┐      ┌─────┐                    │
│   │ S1  │ ───> │ S2  │ ───> │ S3  │ ───> │ S4  │                    │
│   └──┬──┘      └─────┘      └─────┘      └─────┘                    │
│      │ Compensation if failure:                                       │
│      ▼ S1.compensate() <- S2.compensate() <- S3.compensate()       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Summary

| Pattern | Mechanism | Use Case |
|---------|-----------|----------|
| **Layered** | Top-down dependency | Traditional apps |
| **Microservices** | Independent services | Large scale systems |
| **Event-Driven** | Async events | High throughput |
| **CQRS** | Separate read/write | Complex queries |
| **Saga** | Distributed transactions | Multi-service operations |