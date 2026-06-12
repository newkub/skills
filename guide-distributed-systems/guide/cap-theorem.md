# CAP Theorem

## CAP Theorem และ Consistency Models

### CAP Theorem

### Definition

**CAP Theorem**: In a distributed system, you can only have two of the following three properties:
- **C**onsistency
- **A**vailability
- **P**artition tolerance

### Consistency (C)

**Definition**: All nodes see the same data at the same time

**Example**:
```go
// Write to node 1
node1.Set("key", "value")

// Read from node 2 (guaranteed to return "value")
value := node2.Get("key")
```

**Pros**:
- Data is always correct
- No stale reads

**Cons**:
- Slower writes
- May block during partitions

### Availability (A)

**Definition**: Every request receives a response

**Example**:
```go
// Even if node 1 is down
// Node 2 responds to requests
value := node2.Get("key")
```

**Pros**:
- System always responsive
- No downtime

**Cons**:
- May return stale data
- No strong consistency

### Partition Tolerance (P)

**Definition**: System continues operating despite network partitions

**Example**:
```go
// Network partition between node 1 and node 2
// Both nodes continue operating
node1.Set("key", "value1")
node2.Set("key", "value2")
```

**Pros**:
- System resilient to failures
- High availability

**Cons**:
- Data inconsistency during partitions
- Conflict resolution needed

### CAP Trade-offs

### CA Systems

**Examples**: Traditional RDBMS (MySQL, PostgreSQL)

**Characteristics**:
- Strong consistency
- High availability
- Not partition tolerant

**Use Case**: Single data center, strong consistency required

### CP Systems

**Examples**: etcd, Consul, ZooKeeper

**Characteristics**:
- Strong consistency
- Partition tolerant
- May sacrifice availability

**Use Case**: Configuration management, leader election

### AP Systems

**Examples**: Cassandra, DynamoDB, CouchDB

**Characteristics**:
- High availability
- Partition tolerant
- Eventual consistency

**Use Case**: High-throughput applications, global distribution

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

**Pros**:
- Data always correct
- Simple to reason about

**Cons**:
- Slower performance
- May block

### Eventual Consistency

**Definition**: Reads may return stale data

**Example**:
```go
// Write
db.Set("key", "value")

// Read (may return old value temporarily)
value := db.Get("key")
```

**Pros**:
- High performance
- High availability

**Cons**:
- Stale reads
- Complex to reason about

### Causal Consistency

**Definition**: Causally related operations are seen in order

**Example**:
```go
// Write A then B
db.Set("a", "value1")
db.Set("b", "value2")

// If B is visible, A must be visible
```

**Pros**:
- Better than eventual consistency
- Maintains causality

**Cons**:
- More complex
- Still not strong consistency

### Read Your Writes

**Definition**: Client sees its own writes

**Example**:
```go
// Write
db.Set("key", "value")

// Read from same client (guaranteed to return "value")
value := db.Get("key")
```

### Monotonic Reads

**Definition**: Client never sees data rollback

**Example**:
```go
// Read 1
value1 := db.Get("key") // "value1"

// Read 2
value2 := db.Get("key") // "value2" (never "value1" again)
```

### Consistency Levels

### Write Consistency

**Levels**:
- **Strong**: All replicas acknowledge write
- **Quorum**: Majority of replicas acknowledge write
- **Weak**: Any replica acknowledges write

**Example (Cassandra)**:
```go
// Strong consistency
session.Execute(`INSERT INTO users (id, name) VALUES (?, ?)`, 
    consistency.Quorum)

// Weak consistency
session.Execute(`INSERT INTO users (id, name) VALUES (?, ?)`, 
    consistency.One)
```

### Read Consistency

**Levels**:
- **Strong**: Read from latest replica
- **Quorum**: Read from majority of replicas
- **Weak**: Read from any replica

**Example (Cassandra)**:
```go
// Strong consistency
session.Execute(`SELECT * FROM users WHERE id = ?`, 
    consistency.Quorum)

// Weak consistency
session.Execute(`SELECT * FROM users WHERE id = ?`, 
    consistency.One)
```

### Choosing Consistency Model

### When to Use Strong Consistency

- Financial transactions
- Inventory management
- User authentication
- Configuration data

### When to Use Eventual Consistency

- Social media feeds
- Analytics data
- Logging
- Caching

### When to Use Causal Consistency

- Shopping carts
- Messaging systems
- Collaboration tools
