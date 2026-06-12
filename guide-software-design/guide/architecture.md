# Architecture

## Software Architecture Patterns

### Layered Architecture

### Overview

```
┌─────────────────────────────────┐
│      Presentation Layer         │
│  (Controllers, Views, APIs)      │
├─────────────────────────────────┤
│      Application Layer           │
│  (Use Cases, Services)           │
├─────────────────────────────────┤
│      Domain Layer                │
│  (Entities, Value Objects)       │
├─────────────────────────────────┤
│      Infrastructure Layer        │
│  (Database, External APIs)       │
└─────────────────────────────────┘
```

### Responsibilities

| Layer | Responsibility | Examples |
|-------|---------------|----------|
| **Presentation** | Handle HTTP requests/responses | Controllers, Views, DTOs |
| **Application** | Orchestrate business logic | Services, Use Cases |
| **Domain** | Core business logic | Entities, Value Objects |
| **Infrastructure** | External integrations | Database, File System, APIs |

### Rules

- Dependencies flow downward only
- Domain layer has no dependencies
- Each layer only knows about the layer below

### Clean Architecture

### Overview

```
┌─────────────────────────────────┐
│      Application Layer           │
│  (Use Cases, DTOs)               │
├─────────────────────────────────┤
│      Domain Layer                │
│  (Entities, Interfaces)          │
├─────────────────────────────────┤
│      Infrastructure Layer        │
│  (Implementations)               │
└─────────────────────────────────┘
```

### Key Principles

1. **Dependency Rule**: Dependencies point inward
2. **Domain Independence**: Domain has no dependencies
3. **Framework Independence**: Business logic independent of frameworks

### Example

```csharp
// Domain Layer (no dependencies)
public interface IUserRepository {
    User GetById(Guid id);
    void Save(User user);
}

public class User {
    public Guid Id { get; }
    public string Email { get; }
}

// Application Layer
public class CreateUserUseCase {
    private readonly IUserRepository _repository;
    
    public CreateUserUseCase(IUserRepository repository) {
        _repository = repository;
    }
    
    public void Execute(CreateUserRequest request) {
        var user = new User(request.Email);
        _repository.Save(user);
    }
}

// Infrastructure Layer
public class SqlUserRepository : IUserRepository {
    public User GetById(Guid id) { /* SQL implementation */ }
    public void Save(User user) { /* SQL implementation */ }
}
```

### Microservices Architecture

### Overview

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Service │  │ Service │  │ Service │
│    A    │  │    B    │  │    C    │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┴────────────┘
                  │
         ┌────────┴────────┐
         │   API Gateway   │
         └─────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **API Gateway** | Single entry point, routing, authentication |
| **Service Discovery** | Dynamic service registration |
| **Message Broker** | Async communication between services |
| **Database per Service** | Each service has its own database |

### Communication Patterns

**Synchronous (REST/gRPC)**:
```csharp
// Service A calls Service B
public class OrderService {
    private readonly HttpClient _httpClient;
    
    public async Task CreateOrder(Order order) {
        // Call inventory service
        var response = await _httpClient.PostAsync(
            "http://inventory-service/check",
            new StringContent(JsonSerializer.Serialize(order))
        );
    }
}
```

**Asynchronous (Message Queue)**:
```csharp
// Service A publishes event
public class OrderService {
    private readonly IMessageBus _messageBus;
    
    public async Task CreateOrder(Order order) {
        await _messageBus.PublishAsync(new OrderCreatedEvent(order));
    }
}

// Service B subscribes to event
public class InventoryService {
    [Subscribe]
    public async Task Handle(OrderCreatedEvent @event) {
        // Update inventory
    }
}
```

### Event-Driven Architecture

### Overview

```
┌─────────┐    ┌─────────┐    ┌─────────┐
│ Producer│───→│  Event  │───→│Consumer │
└─────────┘    │  Bus    │    └─────────┘
               └─────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **Event Bus** | Central hub for events |
| **Producer** | Publishes events |
| **Consumer** | Subscribes to events |
| **Event Store** | Persistent event storage |

### Event Types

**Domain Events**:
```csharp
public class OrderCreatedEvent {
    public Guid OrderId { get; }
    public DateTime CreatedAt { get; }
}

public class OrderShippedEvent {
    public Guid OrderId { get; }
    public DateTime ShippedAt { get; }
}
```

**Integration Events**:
```csharp
public class UserRegisteredEvent {
    public Guid UserId { get; }
    public string Email { get; }
}
```

### Hexagonal Architecture

### Overview

```
        ┌──────────┐
        │  Ports   │
        └────┬─────┘
             │
    ┌────────┴────────┐
    │    Domain       │
    └────────┬────────┘
             │
    ┌────────┴────────┐
    │  Adapters       │
    └─────────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **Domain** | Core business logic |
| **Ports** | Interfaces for external communication |
| **Adapters** | Implementations of ports |

### Example

```csharp
// Domain
public interface IUserRepository {
    User GetById(Guid id);
    void Save(User user);
}

// Port (Interface)
public interface IEmailSender {
    void SendEmail(string to, string subject, string body);
}

// Adapter (Implementation)
public class SmtpEmailSender : IEmailSender {
    public void SendEmail(string to, string subject, string body) {
        // SMTP implementation
    }
}
```

### CQRS (Command Query Responsibility Segregation)

### Overview

```
┌─────────────┐
│   Command   │
│   Side      │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Write DB  │
└─────────────┘

┌─────────────┐
│   Query     │
│   Side      │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Read DB   │
└─────────────┘
```

### Components

| Component | Description |
|-----------|-------------|
| **Command Side** | Handle writes (commands) |
| **Query Side** | Handle reads (queries) |
| **Write DB** | Database for writes |
| **Read DB** | Database for reads (optimized for queries) |

### Example

```csharp
// Command
public class CreateUserCommand {
    public string Email { get; }
    public string Name { get; }
}

public class CreateUserCommandHandler {
    public void Handle(CreateUserCommand command) {
        // Write to write DB
    }
}

// Query
public class GetUserQuery {
    public Guid UserId { get; }
}

public class GetUserQueryHandler {
    public User Handle(GetUserQuery query) {
        // Read from read DB
    }
}
```

### Architecture Decision Records

### Template

```markdown
# ADR-001: Use Microservices Architecture

## Status
Accepted

## Context
We need to scale our application...

## Decision
We will use microservices architecture...

## Consequences
- Positive: Better scalability
- Negative: Increased complexity
```

### Example ADR

```markdown
# ADR-001: Use Event-Driven Architecture

## Status
Proposed

## Context
Our monolithic application is becoming hard to maintain...

## Decision
We will migrate to event-driven architecture...

## Consequences
- Positive: Loose coupling
- Negative: Eventual consistency
```
