# Best Practices

## Best Practices สำหรับ Distributed Systems

### Service Design

### 1. Design for Failure

```go
// ✅ Good: Handle failures
func callService(url string) (interface{}, error) {
    resp, err := http.Get(url)
    if err != nil {
        return nil, err
    }
    if resp.StatusCode != http.StatusOK {
        return nil, fmt.Errorf("service error: %d", resp.StatusCode)
    }
    // Process response
}

// ❌ Bad: Assume success
func callService(url string) interface{} {
    resp, _ := http.Get(url)
    // Assume success
}
```

### 2. Use Idempotent Operations

```go
// ✅ Good: Idempotent
func createUser(user User) error {
    if exists(user.ID) {
        return nil // Already exists
    }
    return db.Create(user)
}

// ❌ Bad: Not idempotent
func createUser(user User) error {
    return db.Create(user) // May create duplicate
}
```

### 3. Implement Circuit Breakers

```go
// ✅ Good: Circuit breaker
type CircuitBreaker struct {
    failures int
    threshold int
    open bool
}

func (cb *CircuitBreaker) Call(fn func() error) error {
    if cb.open {
        return errors.New("circuit open")
    }
    
    err := fn()
    if err != nil {
        cb.failures++
        if cb.failures >= cb.threshold {
            cb.open = true
        }
        return err
    }
    
    cb.failures = 0
    return nil
}
```

### Data Consistency

### 4. Choose Appropriate Consistency

```go
// ✅ Good: Strong consistency for critical data
func transferMoney(from, to string, amount float64) error {
    tx := db.Begin()
    defer tx.Rollback()
    
    if !debit(from, amount) {
        return errors.New("insufficient funds")
    }
    
    credit(to, amount)
    tx.Commit()
    return nil
}

// ✅ Good: Eventual consistency for non-critical data
func updateProfile(user User) error {
    eventBus.Publish(UserUpdated{User: user})
    return nil
}
```

### 5. Use Distributed Locks

```go
// ✅ Good: Distributed lock
mutex := rs.NewMutex("resource-lock")
if err := mutex.Lock(); err != nil {
    return err
}
defer mutex.Unlock()

// Critical section
```

### 6. Implement Idempotent Keys

```go
// ✅ Good: Idempotent key
func processCommand(cmd Command) error {
    if processed(cmd.ID) {
        return nil // Already processed
    }
    
    markProcessed(cmd.ID)
    return execute(cmd)
}
```

### Communication

### 7. Use Asynchronous Communication

```go
// ✅ Good: Async messaging
func createUser(user User) error {
    eventBus.Publish(UserCreated{User: user})
    return nil
}

// ❌ Bad: Synchronous calls
func createUser(user User) error {
    emailService.SendWelcomeEmail(user.Email)
    analyticsService.TrackUserCreated(user.ID)
    return nil
}
```

### 8. Implement Message Ordering

```go
// ✅ Good: Ordered messages
func publishOrdered(topic string, message Message) error {
    partition := message.ID % numPartitions
    return producer.Send(topic, partition, message)
}
```

### 9. Handle Message Duplication

```go
// ✅ Good: Idempotent message handler
func handleMessage(msg Message) error {
    if processed(msg.ID) {
        return nil // Already processed
    }
    
    markProcessed(msg.ID)
    return process(msg)
}
```

### Observability

### 10. Implement Distributed Tracing

```go
// ✅ Good: Distributed tracing
import "go.opentelemetry.io/otel"

func handleRequest(ctx context.Context) {
    ctx, span := tracer.Start(ctx, "handleRequest")
    defer span.End()
    
    // Handle request
}
```

### 11. Log Correlation IDs

```go
// ✅ Good: Correlation ID
func handleRequest(ctx context.Context) {
    correlationID := getCorrelationID(ctx)
    log.Printf("Correlation ID: %s", correlationID)
}
```

### 12. Monitor Service Health

```go
// ✅ Good: Health check
func healthHandler(w http.ResponseWriter, r *http.Request) {
    status := map[string]string{
        "status": "ok",
        "database": checkDB(),
        "cache": checkCache(),
    }
    json.NewEncoder(w).Encode(status)
}
```

### Deployment

### 13. Use Blue-Green Deployments

```yaml
# ✅ Good: Blue-green deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service-blue
spec:
  replicas: 3
```

### 14. Implement Canary Deployments

```yaml
# ✅ Good: Canary deployment
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
spec:
  http:
  - route:
    - destination:
        subset: v1
      weight: 90
    - destination:
        subset: v2
      weight: 10
```

### 15. Use Feature Flags

```go
// ✅ Good: Feature flag
func newFeatureEnabled() bool {
    return featureFlagService.IsEnabled("new-feature")
}
```

### Security

### 16. Use mTLS

```yaml
# ✅ Good: mTLS in Istio
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
spec:
  mtls:
    mode: STRICT
```

### 17. Implement Service-to-Service Auth

```go
// ✅ Good: Service auth
func callService(url string) (*http.Response, error) {
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Authorization", "Bearer "+getServiceToken())
    
    return client.Do(req)
}
```

### Testing

### 18. Test Failure Scenarios

```go
// ✅ Good: Test failures
func TestServiceFailure(t *testing.T) {
    // Simulate service failure
    mockServer.Close()
    
    err := callService()
    if err == nil {
        t.Error("Expected error")
    }
}
```

### 19. Test Network Partitions

```go
// ✅ Good: Test partitions
func TestNetworkPartition(t *testing.T) {
    // Simulate network partition
    blockNetwork()
    
    // Test behavior
    recoverNetwork()
}
```
