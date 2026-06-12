# Patterns

## Distributed Patterns (Event Sourcing, CQRS)

### Event Sourcing

### Concept

**Definition**: Store state changes as immutable events

**Benefits**:
- Complete audit trail
- Event replay
- Temporal queries
- Event-driven architecture

### Event Structure

```go
type Event struct {
    ID          string
    AggregateID string
    Type        string
    Timestamp   time.Time
    Payload     interface{}
}

type UserCreated struct {
    User User
}

type UserUpdated struct {
    UserID string
    Name   string
}
```

### Event Store

```go
type EventStore struct {
    events []Event
    mu     sync.RWMutex
}

func (es *EventStore) Append(event Event) error {
    es.mu.Lock()
    defer es.mu.Unlock()
    
    event.ID = generateID()
    event.Timestamp = time.Now()
    
    es.events = append(es.events, event)
    return nil
}

func (es *EventStore) GetEvents(aggregateID string) []Event {
    es.mu.RLock()
    defer es.mu.RUnlock()
    
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

```go
func replay(events []Event) *User {
    user := &User{}
    for _, event := range events {
        switch e := event.Payload.(type) {
        case UserCreated:
            user = e.User
        case UserUpdated:
            user.Name = e.Name
        }
    }
    return user
}
```

### CQRS

### Concept

**Definition**: Separate read and write models

**Benefits**:
- Optimized read performance
- Optimized write performance
- Scalable reads and writes
- Independent evolution

### Write Model

```go
type UserWrite struct {
    ID   string
    Name string
}

func (uw *UserWrite) UpdateName(name string) error {
    uw.Name = name
    return nil
}
```

### Read Model

```go
type UserRead struct {
    ID      string
    Name    string
    Orders  []Order
    Summary string
}
```

### Command Handler

```go
func handleCommand(cmd CreateUserCommand) error {
    // Validate command
    if err := validate(cmd); err != nil {
        return err
    }
    
    // Create aggregate
    user := NewUser(cmd.Name)
    
    // Generate event
    event := UserCreated{User: user}
    
    // Append to event store
    eventStore.Append(event)
    
    // Update write model
    writeModel.Save(user)
    
    // Publish event
    eventBus.Publish(event)
    
    return nil
}
```

### Query Handler

```go
func handleQuery(query GetUserQuery) (*UserRead, error) {
    // Query read model
    return readModel.GetUser(query.ID)
}
```

### Event Handler

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

### Saga Pattern

### Concept

**Definition**: Break transaction into local transactions with compensating actions

**Benefits**:
- No distributed locks
- Long-running transactions
- Fault tolerance

### Saga Implementation

```go
type Saga struct {
    steps []SagaStep
}

type SagaStep struct {
    Execute   func() error
    Compensate func() error
}

func (s *Saga) Execute() error {
    for i, step := range s.steps {
        if err := step.Execute(); err != nil {
            // Compensate previous steps
            for j := i - 1; j >= 0; j-- {
                s.steps[j].Compensate()
            }
            return err
        }
    }
    return nil
}
```

### Example Saga

```go
func createOrderSaga(order Order) error {
    saga := Saga{
        steps: []SagaStep{
            {
                Execute:   func() error { return reserveInventory(order) },
                Compensate: func() error { return releaseInventory(order) },
            },
            {
                Execute:   func() error { return processPayment(order) },
                Compensate: func() error { return refundPayment(order) },
            },
            {
                Execute:   func() error { return shipOrder(order) },
                Compensate: func() error { return cancelShipment(order) },
            },
        },
    }
    
    return saga.Execute()
}
```

### Circuit Breaker

### Concept

**Definition**: Prevent cascading failures

**States**:
- **Closed**: Normal operation
- **Open**: Fail fast
- **Half-Open**: Test recovery

### Implementation

```go
type CircuitBreaker struct {
    failures    int
    threshold   int
    open        bool
    lastFailure time.Time
    timeout     time.Duration
    mu          sync.RWMutex
}

func (cb *CircuitBreaker) Call(fn func() error) error {
    cb.mu.RLock()
    if cb.open {
        cb.mu.RUnlock()
        
        // Check if timeout elapsed
        if time.Since(cb.lastFailure) > cb.timeout {
            cb.mu.RUnlock()
            cb.mu.Lock()
            cb.open = false
            cb.mu.Unlock()
        } else {
            cb.mu.RUnlock()
            return errors.New("circuit open")
        }
    }
    cb.mu.RUnlock()
    
    err := fn()
    
    cb.mu.Lock()
    defer cb.mu.Unlock()
    
    if err != nil {
        cb.failures++
        cb.lastFailure = time.Now()
        
        if cb.failures >= cb.threshold {
            cb.open = true
        }
        return err
    }
    
    cb.failures = 0
    return nil
}
```

### Retry Pattern

### Concept

**Definition**: Retry failed operations with backoff

### Implementation

```go
func retry(fn func() error, maxAttempts int, backoff time.Duration) error {
    var err error
    for i := 0; i < maxAttempts; i++ {
        err = fn()
        if err == nil {
            return nil
        }
        
        if i < maxAttempts-1 {
            time.Sleep(backoff)
            backoff *= 2
        }
    }
    return err
}
```

### Bulkhead Pattern

### Concept

**Definition**: Isolate resources to prevent cascading failures

### Implementation

```go
type Bulkhead struct {
    semaphore chan struct{}
}

func NewBulkhead(limit int) *Bulkhead {
    return &Bulkhead{
        semaphore: make(chan struct{}, limit),
    }
}

func (b *Bulkhead) Acquire() {
    b.semaphore <- struct{}{}
}

func (b *Bulkhead) Release() {
    <-b.semaphore
}
```
