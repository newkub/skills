# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Distributed Systems

### Network Issues

### Problem: Network Partition

**Symptoms**:
- Services cannot communicate
- Split brain
- Data inconsistency

**Causes**:
1. Network failure
2. Firewall blocking
3. DNS issues

**Solutions**:

```go
// ✅ Good: Handle partitions
if partitionDetected() {
    // Step down if not leader
    if !isLeader() {
        return errors.New("partition detected, stepping down")
    }
    
    // Continue in degraded mode
    enableDegradedMode()
}
```

### Problem: High Latency

**Symptoms**:
- Slow response times
- Timeouts
- Poor performance

**Causes**:
1. Network congestion
2. Overloaded services
3. Inefficient routing

**Solutions**:

```go
// ✅ Good: Implement timeouts
client := &http.Client{
    Timeout: 5 * time.Second,
}

// ✅ Good: Use retries with backoff
retry(func() error {
    return callService()
}, 3, time.Second)
```

### Consistency Issues

### Problem: Data Inconsistency

**Symptoms**:
- Stale reads
- Conflicting updates
- Lost updates

**Causes**:
1. Eventual consistency
2. Network partitions
3. Concurrent updates

**Solutions**:

```go
// ✅ Good: Use distributed locks
mutex := rs.NewMutex("resource-lock")
if err := mutex.Lock(); err != nil {
    return err
}
defer mutex.Unlock()

// Critical section
```

### Problem: Split Brain

**Symptoms**:
- Multiple leaders
- Conflicting writes
- Data corruption

**Causes**:
1. Network partition
2. Leader election failure
3. Quorum not achieved

**Solutions**:

```go
// ✅ Good: Use quorum
if len(acknowledgments) < majority {
    return errors.New("quorum not achieved")
}
```

### Service Discovery Issues

### Problem: Service Not Found

**Symptoms**:
- Service lookup fails
- Connection refused
- No instances available

**Causes**:
1. Service not registered
2. Service deregistered
3. Registry failure

**Solutions**:

```go
// ✅ Good: Handle service not found
services, err := discoverService("user-service")
if err != nil || len(services) == 0 {
    return errors.New("no services available")
}
```

### Problem: Unhealthy Service

**Symptoms**:
- Requests to unhealthy instance
- Poor performance
- Errors

**Causes**:
1. Service crash
2. Resource exhaustion
3. Health check failure

**Solutions**:

```go
// ✅ Good: Filter healthy services
healthyServices := filterHealthy(services)
if len(healthyServices) == 0 {
    return errors.New("no healthy services available")
}
```

### Message Queue Issues

### Problem: Message Loss

**Symptoms**:
- Messages not delivered
- Data loss
- Incomplete processing

**Causes**:
1. Broker failure
2. Producer failure
3. Consumer failure

**Solutions**:

```go
// ✅ Good: Use acknowledgments
msg, err := reader.ReadMessage(context.Background())
if err != nil {
    return err
}

// Process message
if err := process(msg); err != nil {
    msg.Nack()
    return err
}

msg.Ack()
```

### Problem: Duplicate Messages

**Symptoms**:
- Messages processed multiple times
- Duplicate data
- Side effects

**Causes**:
1. Redelivery
2. Producer retry
3. Consumer crash

**Solutions**:

```go
// ✅ Good: Idempotent processing
func processMessage(msg Message) error {
    if processed(msg.ID) {
        return nil // Already processed
    }
    
    markProcessed(msg.ID)
    return execute(msg)
}
```

### Debugging Tips

### 1. Enable Distributed Tracing

```go
// ✅ Good: Distributed tracing
import "go.opentelemetry.io/otel"

ctx, span := tracer.Start(ctx, "operation")
defer span.End()
```

### 2. Log Correlation IDs

```go
// ✅ Good: Correlation ID
func handleRequest(ctx context.Context) {
    correlationID := getCorrelationID(ctx)
    log.Printf("Correlation ID: %s", correlationID)
}
```

### 3. Monitor Service Health

```bash
# ✅ Good: Health checks
curl http://localhost:8080/health
```

### 4. Use Service Mesh Observability

```yaml
# ✅ Good: Istio observability
apiVersion: telemetry.istio.io/v1alpha1
kind: Telemetry
metadata:
  name: mesh-default
spec:
  accessLogging:
  - providers:
    - name: otel
```

### Common Pitfalls

### 1. Ignoring Network Partitions

```go
// ❌ Bad: Assume network always works
// ✅ Good: Handle partitions
```

### 2. Not Implementing Timeouts

```go
// ❌ Bad: No timeout
// ✅ Good: Implement timeouts
client := &http.Client{Timeout: 5 * time.Second}
```

### 3. Not Using Idempotent Operations

```go
// ❌ Bad: Not idempotent
// ✅ Good: Idempotent operations
```

### 4. Not Monitoring Distributed Traces

```go
// ❌ Bad: No tracing
// ✅ Good: Distributed tracing
```

### 5. Not Testing Failure Scenarios

```go
// ❌ Bad: Only test happy path
// ✅ Good: Test failures
```
