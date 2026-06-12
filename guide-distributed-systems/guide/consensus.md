# Consensus

## Consensus Algorithms (Paxos, Raft)

### Raft Algorithm

### Overview

**Raft**: Consensus algorithm for managing a replicated log

**Key Concepts**:
- **Leader Election**: Choose a leader
- **Log Replication**: Replicate log entries
- **Safety**: Ensure log consistency

### Leader Election

**How it works**:
1. Nodes start as followers
2. If no heartbeat, become candidate
3. Candidate requests votes
4. Node with majority becomes leader
5. Leader sends heartbeats

**Example (etcd)**:

```go
package main

import (
    "context"
    "go.etcd.io/etcd/client/v3"
)

func main() {
    client, _ := clientv3.New(clientv3.Config{
        Endpoints: []string{"localhost:2379"},
    })
    
    // etcd uses Raft internally
    // Leader election is automatic
}
```

### Log Replication

**How it works**:
1. Client sends request to leader
2. Leader appends to log
3. Leader replicates to followers
4. Followers acknowledge
5. Leader commits when majority acknowledges

**Example**:

```go
// Leader appends to log
log.Append(LogEntry{
    Index: 1,
    Term:  1,
    Command: "SET key value",
})

// Leader replicates to followers
for _, follower := range followers {
    follower.AppendLogEntry(log.Last())
}

// Followers acknowledge
acknowledgments := collectAcknowledgments()

// Leader commits
if len(acknowledgments) >= majority {
    log.Commit(log.Last())
}
```

### Safety

**Properties**:
- **Log Matching**: If two logs have same entry at same index, they are identical
- **Leader Completeness**: If entry is committed, it appears in all future logs
- **Leader Append-Only**: Leader only appends to log

### Paxos Algorithm

### Overview

**Paxos**: Family of consensus algorithms

**Roles**:
- **Proposer**: Proposes values
- **Acceptor**: Accepts proposals
- **Learner**: Learns chosen values

### Basic Paxos

**Phase 1: Prepare**
1. Proposer sends prepare request with proposal number
2. Acceptors respond with promise if proposal number > previous

**Phase 2: Accept**
1. Proposer sends accept request with value
2. Acceptors accept if not already accepted higher proposal

**Phase 3: Learn**
1. Proposer sends chosen value to learners
2. Learners learn chosen value

**Example**:

```go
// Proposer
func propose(value interface{}) error {
    // Phase 1: Prepare
    for _, acceptor := range acceptors {
        if !acceptor.Prepare(proposalNumber) {
            return errors.New("prepare failed")
        }
    }
    
    // Phase 2: Accept
    for _, acceptor := range acceptors {
        if !acceptor.Accept(proposalNumber, value) {
            return errors.New("accept failed")
        }
    }
    
    // Phase 3: Learn
    for _, learner := range learners {
        learner.Learn(value)
    }
    
    return nil
}
```

### Multi-Paxos

**Optimization**: Use same leader for multiple proposals

**Benefits**:
- Reduces communication
- Improves throughput

### Raft vs Paxos

| Feature | Raft | Paxos |
|---------|------|-------|
| **Understandability** | Easier | Harder |
| **Leader Election** | Built-in | Separate |
| **Log Replication** | Built-in | Separate |
| **Implementation** | Simpler | Complex |

### etcd

### Overview

**etcd**: Distributed key-value store using Raft

**Features**:
- Strong consistency
- Watch API
- Lease API
- Transactions

### Go Client

```go
package main

import (
    "context"
    "go.etcd.io/etcd/client/v3"
)

func main() {
    client, _ := clientv3.New(clientv3.Config{
        Endpoints: []string{"localhost:2379"},
    })
    
    // Set key
    client.Put(context.Background(), "key", "value")
    
    // Get key
    resp, _ := client.Get(context.Background(), "key")
    fmt.Println(string(resp.Kvs[0].Value))
    
    // Watch key
    watch := client.Watch(context.Background(), "key")
    for watchResp := range watch {
        for _, event := range watchResp.Events {
            fmt.Printf("Event: %v\n", event)
        }
    }
}
```

### Consul

### Overview

**Consul**: Service discovery and configuration using Raft

**Features**:
- Service discovery
- Health checking
- KV store
- Service mesh

### Go Client

```go
package main

import (
    "github.com/hashicorp/consul/api"
)

func main() {
    config := api.DefaultConfig()
    config.Address = "localhost:8500"
    
    client, _ := api.NewClient(config)
    
    // Set key
    kv := client.KV()
    kv.Put(&api.KVPair{Key: "key", Value: []byte("value")}, nil)
    
    // Get key
    pair, _, _ := kv.Get("key", nil)
    fmt.Println(string(pair.Value))
}
```

### Best Practices

### 1. Use Established Implementations

```go
// ✅ Good: Use etcd, Consul
// ❌ Bad: Implement Raft from scratch
```

### 2. Monitor Leader Health

```go
// ✅ Good: Monitor leader
if isLeader() {
    monitorHealth()
}
```

### 3. Handle Network Partitions

```go
// ✅ Good: Handle partitions
if partitionDetected() {
    stepDown()
}
```

### 4. Use Quorum

```go
// ✅ Good: Use quorum
if len(acknowledgments) >= majority {
    commit()
}
```
