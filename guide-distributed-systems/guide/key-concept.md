# Key Concept

## Distributed Systems Fundamentals

### CAP Theorem

### Consistency

**Definition**: All nodes see the same data at the same time

**Example**:
- Database writes are immediately visible to all reads
- Strong consistency guarantees

### Availability

**Definition**: Every request receives a response

**Example**:
- System remains operational during node failures
- No downtime

### Partition Tolerance

**Definition**: System continues operating despite network partitions

**Example**:
- System works even if network splits
- Nodes can communicate when partition heals

### CAP Trade-offs

| System | C | A | P | Description |
|---------|---|---|---|-------------|
| **RDBMS** | ✓ | ✓ | ✗ | Not partition tolerant |
| **Cassandra** | ✗ | ✓ | ✓ | Eventually consistent |
| **MongoDB** | ✗ | ✓ | ✓ | Eventually consistent |
| **etcd** | ✓ | ✗ | ✓ | Strongly consistent |

### Consistency Models

### Strong Consistency

**Definition**: Reads return latest write

**Example**:
```go
// Write
db.Set("key", "value")

// Read (guaranteed to return "value")
value := db.Get("key")
```

### Eventual Consistency

**Definition**: Reads may return stale data

**Example**:
```go
// Write
db.Set("key", "value")

// Read (may return old value temporarily)
value := db.Get("key")
```

### Causal Consistency

**Definition**: Causally related operations are seen in order

**Example**:
```go
// Write A then B
db.Set("a", "value1")
db.Set("b", "value2")

// If B is visible, A must be visible
```

### Distributed Transactions

### Two-Phase Commit (2PC)

**How it works**:
1. Coordinator asks participants to prepare
2. Participants vote (commit/abort)
3. Coordinator decides based on votes
4. Coordinator sends decision to participants

**Pros**: Strong consistency
**Cons**: Blocking, single point of failure

### Three-Phase Commit (3PC)

**How it works**:
1. Coordinator asks participants to prepare
2. Participants vote (commit/abort)
3. Coordinator sends pre-commit
4. Participants acknowledge
5. Coordinator sends final decision

**Pros**: Non-blocking
**Cons**: More complex

### Saga Pattern

**How it works**:
1. Break transaction into local transactions
2. Execute each local transaction
3. If failure, execute compensating transactions

**Pros**: No blocking, scalable
**Cons**: Eventual consistency

### Event Sourcing

### Concept

**Definition**: Store state changes as events

**Example**:
```go
type Event struct {
    ID      string
    Type    string
    Payload interface{}
}

events := []Event{
    {ID: "1", Type: "UserCreated", Payload: user},
    {ID: "2", Type: "UserUpdated", Payload: updatedUser},
}
```

### Benefits
- Complete audit trail
- Event replay
- Temporal queries

### CQRS (Command Query Responsibility Segregation)

### Concept

**Definition**: Separate read and write models

**Example**:
```go
// Write model
type UserWrite struct {
    ID   string
    Name string
}

// Read model
type UserRead struct {
    ID      string
    Name    string
    Orders  []Order
}
```

### Benefits
- Optimized read performance
- Scalable read/write
- Independent evolution

### Service Discovery

### Concept

**Definition**: Services find each other dynamically

**Example**:
```go
// Register service
consul.Agent().ServiceRegister(&consul.AgentServiceRegistration{
    Name: "user-service",
    Port: 8080,
})

// Discover service
services, _ := consul.Health().Service("user-service", false, nil)
```

### Service Mesh

### Concept

**Definition**: Infrastructure layer for service-to-service communication

**Features**:
- Traffic management
- Security (mTLS)
- Observability
- Resilience

### Examples
- Istio
- Linkerd
- Consul Connect
