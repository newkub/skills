# Key Concept

## What is Software Architecture?

Software Architecture เป็นโครงสร้างพื้นฐานของระบบซอฟต์แวร์ที่กำหนดว่า components ต่างๆ จะจัดวางและเชื่อมต่อกันอย่างไร เลือก architecture ที่เหมาะสมจะช่วยให้ระบบ scalable, maintainable, และ resilient

## Quality Attributes

### Non-Functional Requirements

| Attribute | Description | Measurement |
|-----------|-------------|-------------|
| **Scalability** | รองรับการเติบโต | Users, requests/sec |
| **Performance** | ความเร็วในการตอบสนอง | Latency, throughput |
| **Availability** | Uptime percentage | 99.9%, 99.99% |
| **Security** | การป้องกัน threats | Vulnerabilities fixed |
| **Maintainability** | ความง่ายในการแก้ไข | Time to change |
| **Testability** | ความง่ายในการ test | Coverage % |

### Trade-offs

| Attribute A | Attribute B | Trade-off |
|-------------|-------------|-----------|
| Consistency | Availability | CAP theorem |
| Performance | Security | Encryption overhead |
| Scalability | Complexity | More components |
| Flexibility | Simplicity | Abstractions |

## Architectural Styles

### Layered Architecture

```
┌──────────────────────────────────────┐
│            Presentation              │
│         (UI, Controllers)            │
├──────────────────────────────────────┤
│            Application               │
│           (Use Cases, APIs)           │
├──────────────────────────────────────┤
│              Domain                   │
│        (Business Logic)               │
├──────────────────────────────────────┤
│          Infrastructure               │
│     (Database, External Services)     │
└──────────────────────────────────────┘
```

| Layer | Responsibility |
|-------|----------------|
| Presentation | User interface, API endpoints |
| Application | Orchestration, use cases |
| Domain | Business rules, entities |
| Infrastructure | Persistence, external systems |

### Monolithic vs Microservices

| Aspect | Monolithic | Microservices |
|--------|------------|---------------|
| Deployment | Single unit | Independent services |
| Scaling | Vertical | Horizontal per service |
| Complexity | Low initially | High operational cost |
| Technology | Single stack | Polyglot |
| Team | Small team | Multiple teams |
| Fault Isolation | Shared | Isolated |

### Event-Driven Architecture

```
┌─────────┐      Event       ┌─────────────┐
│ Producer│ ──────────────> │ Event Broker│
└─────────┘                 └──────┬──────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ▼              ▼              ▼
              ┌─────────┐  ┌─────────┐  ┌─────────┐
              │Consumer1│  │Consumer2│  │Consumer3│
              └─────────┘  └─────────┘  └─────────┘
```

## Architectural Patterns

### Hexagonal Architecture (Ports & Adapters)

```
                    ┌─────────────┐
                    │    Core     │
                    │   Domain    │
                    │   Logic     │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              ▼                         ▼
        ┌───────────┐            ┌───────────┐
        │   Ports   │            │  Adapters │
        │ (Interfaces)│         │ (Implementations)│
        └───────────┘            └───────────┘
```

| Component | Description |
|-----------|-------------|
| **Core/Domain** | Pure business logic |
| **Ports** | Interfaces for input/output |
| **Adapters** | Implementations (DB, API, UI) |

### Clean Architecture

| Layer | Dependency Direction |
|-------|---------------------|
| Entities | None |
| Use Cases | Entities |
| Interface Adapters | Use Cases |
| Frameworks & Drivers | Interface Adapters |

### CQRS (Command Query Responsibility Segregation)

```
┌─────────────┐     Command     ┌─────────────────┐
│   Client    │ ──────────────> │   Command Side   │
└─────────────┘                 └────────┬────────┘
                                         │
                                         │ Update
                                         ▼
                                   ┌───────────┐
                                   │  Database │
                                   └─────┬─────┘
                                         │ Sync
                                         ▼
                                   ┌───────────┐
                                   │ Read DB   │
                                   └─────┬─────┘
                                         │
┌─────────────┐     Query     ┌────────┴────────┐
│   Client    │ <───────────── │   Query Side    │
└─────────────┘                 └────────────────┘
```

## Design Principles

### SOLID in Architecture

| Principle | Architecture Impact |
|-----------|---------------------|
| **Single Responsibility** | Services have focused responsibilities |
| **Open/Closed** | Extend behavior without modifying core |
| **Liskov Substitution** | Swap implementations via interfaces |
| **Interface Segregation** | Small, focused APIs |
| **Dependency Inversion** | Depend on abstractions, not implementations |

### Other Principles

| Principle | Description |
|-----------|-------------|
| **Loose Coupling** | Minimize dependencies between components |
| **High Cohesion** | Keep related functionality together |
| **Single Source of Truth** | One place for each piece of data |
| **Boundaries** | Clear interfaces between systems |

## Decision Framework

```
┌─────────────────────────────────────────────────────────────┐
│                   Architecture Decision                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   1. Requirements → What are functional needs?              │
│          │                                                  │
│          ▼                                                  │
│   2. Quality Attributes → What matters most?                 │
│          │ (Scalability, Performance, Security?)            │
│          ▼                                                  │
│   3. Team Size → How big is the team?                       │
│          │                                                  │
│          ▼                                                  │
│   4. Constraints → Timeline, Budget, Tech?                  │
│          │                                                  │
│          ▼                                                  │
│   5. Trade-offs → What can we compromise?                   │
│          │                                                  │
│          ▼                                                  │
│   6. Decision → Choose architecture style                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Summary

| Concept | Key Takeaway |
|---------|-------------|
| **Quality Attributes** | Define what "good" means for system |
| **Layered Architecture** | Good for traditional apps |
| **Microservices** | Good for large, distributed teams |
| **Event-Driven** | Good for async, decoupled systems |
| **Hexagonal** | Good for testable, flexible domain |