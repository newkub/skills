# How It Works

## Distributed Algorithms ทำงานอย่างไร

### Service Discovery

### Registration

**How it works**:
1. Service starts
2. Service registers with service registry
3. Registry stores service metadata
4. Service sends heartbeat
5. Registry updates service status

**Example (Consul)**:

```go
package main

import (
    "github.com/hashicorp/consul/api"
)

func registerService() error {
    config := api.DefaultConfig()
    client, _ := api.NewClient(config)
    
    registration := &api.AgentServiceRegistration{
        Name: "user-service",
        Port: 8080,
        Check: &api.AgentServiceCheck{
            HTTP:     "http://localhost:8080/health",
            Interval: "10s",
        },
    }
    
    return client.Agent().ServiceRegister(registration)
}
```

### Discovery

**How it works**:
1. Client queries service registry
2. Registry returns available instances
3. Client selects instance (load balancing)
4. Client calls service

**Example (Consul)**:

```go
func discoverService(serviceName string) ([]*api.AgentService, error) {
    config := api.DefaultConfig()
    client, _ := api.NewClient(config)
    
    services, _, err := client.Health().Service(serviceName, false, nil)
    return services, err
}
```

### Consensus Algorithms

### Raft

**How it works**:
1. Nodes elect leader
2. Leader accepts client requests
3. Leader replicates to followers
4. Followers acknowledge
5. Leader commits when majority acknowledges

**Roles**:
- **Leader**: Accepts requests, replicates to followers
- **Follower**: Replicates from leader, can become candidate
- **Candidate**: Campaigns to become leader

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
    client.Put(context.Background(), "key", "value")
}
```

### Paxos

**How it works**:
1. Proposer proposes value
2. Acceptors accept if not already accepted
3. Proposer learns if majority accepted
4. Proposer sends chosen value

**Roles**:
- **Proposer**: Proposes values
- **Acceptor**: Accepts proposals
- **Learner**: Learns chosen values

### Distributed Transactions

### Two-Phase Commit

**How it works**:
```
Coordinator              Participant 1          Participant 2
    |                         |                      |
    |--- PREPARE ------------>|                      |
    |                         |                      |
    |                         |--- PREPARE ---------->|
    |                         |                      |
    |<-- VOTE (YES) ---------|                      |
    |                         |<-- VOTE (YES) -------|
    |                         |                      |
    |--- COMMIT ------------>|                      |
    |                         |                      |
    |                         |--- COMMIT ---------->|
    |                         |                      |
    |<-- ACK ----------------|                      |
    |                         |<-- ACK --------------|
```

### Saga Pattern

**How it works**:
```
Service A                Service B                Service C
    |                         |                      |
    |--- Execute T1 --------->|                      |
    |<-- ACK ----------------|                      |
    |                         |                      |
    |--- Execute T2 ------------------------------->|
    |                         |                      |
    |<-- ACK --------------------------------------|
    |                         |                      |
    |--- Complete ---------->|                      |
```

### Event Sourcing

### Event Store

**How it works**:
1. Command received
2. Generate event
3. Append to event store
4. Publish event
5. Update read model

**Example**:

```go
type EventStore struct {
    events []Event
}

func (es *EventStore) Append(event Event) {
    es.events = append(es.events, event)
}

func (es *EventStore) GetEvents(aggregateID string) []Event {
    var result []Event
    for _, event := range es.events {
        if event.AggregateID == aggregateID {
            result = append(result, event)
        }
    }
    return result
}
```

### Event Replay

**How it works**:
1. Load events from event store
2. Apply events in order
3. Rebuild state
4. Validate current state

**Example**:

```go
func replay(events []Event) *User {
    user := &User{}
    for _, event := range events {
        switch event.Type {
        case "UserCreated":
            user = event.Payload.(*User)
        case "UserUpdated":
            user.Name = event.Payload.(string)
        }
    }
    return user
}
```

### CQRS

### Write Side

**How it works**:
1. Command received
2. Validate command
3. Generate event
4. Append to event store
5. Update write model

**Example**:

```go
func handleCommand(cmd CreateUserCommand) error {
    user := NewUser(cmd.Name)
    event := UserCreated{User: user}
    
    eventStore.Append(event)
    writeModel.Save(user)
    
    return nil
}
```

### Read Side

**How it works**:
1. Event published
2. Read model subscribes to event
3. Update read model
4. Query read model

**Example**:

```go
func handleEvent(event Event) {
    switch e := event.(type) {
    case UserCreated:
        readModel.CreateUserView(e.User)
    case UserUpdated:
        readModel.UpdateUserView(e.User)
    }
}
```

### Service Mesh

### Sidecar Proxy

**How it works**:
1. Service starts
2. Sidecar proxy injected
3. All traffic goes through proxy
4. Proxy handles routing, security, observability

**Example (Istio)**:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 8080
```

### Traffic Management

**How it works**:
1. Virtual service defines routing rules
2. Destination rule defines subsets
3. Gateway defines ingress
4. Traffic split between versions

**Example**:

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: user-service
spec:
  http:
  - route:
    - destination:
        host: user-service
        subset: v1
      weight: 90
    - destination:
        host: user-service
        subset: v2
      weight: 10
```
