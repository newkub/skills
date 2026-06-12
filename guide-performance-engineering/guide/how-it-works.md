# How It Works

## Profiling Tools ทำงานอย่างไร

### CPU Profiling

### Sampling Profiler

**How it works**:
1. Profiler interrupts CPU at regular intervals
2. Records current function call stack
3. Aggregates samples over time
4. Generates flame graph or call graph

**Example (Go)**:

````

### Memory Profiling

### Heap Profiling

**How it works**:
1. Records memory allocations
2. Tracks allocation size and location
3. Generates heap profile
4. Identifies memory leaks

**Example (Go)**:

````

### Benchmarking

### Go Benchmark

**How it works**:
1. Run function multiple times
2. Measure execution time
3. Calculate average and statistics
4. Report results

**Example**:

````

### Load Testing

### k6

**How it works**:
1. Define test script
2. Simulate virtual users
3. Send requests to target
4. Measure response times and throughput

**Example**:

```javascript
import http from 'k6/http';

export default function() {
    http.get('https://api.example.com/users');
}
```

### Flame Graphs

### Generation

**How it works**:
1. Collect profiling data
2. Generate stack traces
3. Visualize as flame graph
4. Identify hot paths

**Example**:

```bash
# Generate flame graph
go tool pprof -http=:8080 cpu.prof
# Or
perf record ./app
perf script | flamegraph.pl > flamegraph.svg
```

### Performance Monitoring

### Metrics Collection

**How it works**:
1. Application exposes metrics endpoint
2. Prometheus scrapes metrics
3. Grafana visualizes metrics
4. Alerts trigger on thresholds

**Example (Go)**:

````

### Caching

### Cache-Aside Pattern

**How it works**:
1. Application requests data
2. Check cache
3. If cache miss, load from DB
4. Store in cache
5. Return data

**Example**:

````

### Write-Through Pattern

**How it works**:
1. Application writes data
2. Write to cache
3. Write to DB
4. Return success

**Example**:

````

### Connection Pooling

**How it works**:
1. Create pool of connections
2. Borrow connection when needed
3. Return connection after use
4. Reuse connections

**Example (Go)**:

````

### Asynchronous I/O

**How it works**:
1. Initiate I/O operation
2. Continue with other work
3. Handle I/O completion via callback
4. Non-blocking operations

**Example (Go)**:

````

### Batching

**How it works**:
1. Collect multiple operations
2. Process as single batch
3. Reduce overhead
4. Improve throughput

**Example**:

````

