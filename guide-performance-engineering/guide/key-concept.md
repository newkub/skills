# Key Concept

## Performance Engineering Fundamentals

### Performance Metrics

### Latency

**Definition**: Time to complete a single operation

**Measurement**: Milliseconds (ms), microseconds (μs)

**Example**:
- Database query: 10ms
- API call: 50ms
- Memory access: 100ns

### Throughput

**Definition**: Number of operations per time unit

**Measurement**: Requests per second (RPS), operations per second (OPS)

**Example**:
- Web server: 1000 RPS
- Database: 5000 OPS

### Resource Utilization

**CPU Usage**: Percentage of CPU capacity used

**Memory Usage**: Amount of RAM consumed

**Disk I/O**: Read/write operations per second

**Network I/O**: Data transfer rate

### Profiling

### CPU Profiling

**Definition**: Measuring CPU time spent in functions

**Tools**: pprof, perf, flamegraph

**Purpose**: Identify CPU bottlenecks

### Memory Profiling

**Definition**: Measuring memory allocation and usage

**Tools**: valgrind, memory_profiler, heap profiler

**Purpose**: Identify memory leaks and allocations

### I/O Profiling

**Definition**: Measuring disk and network I/O

**Tools**: iostat, strace, dtrace

**Purpose**: Identify I/O bottlenecks

### Benchmarking

### Micro-benchmarks

**Definition**: Measuring performance of small code units

**Example**: Function execution time, algorithm comparison

**Tools**: Go benchmark, pytest-benchmark

### Macro-benchmarks

**Definition**: Measuring performance of entire system

**Example**: End-to-end request time, system throughput

**Tools**: k6, JMeter, wrk

### Optimization Strategies

### CPU Optimization

**Techniques**:
- Algorithm selection
- Data structure optimization
- Loop optimization
- Vectorization
- Parallelization

### Memory Optimization

**Techniques**:
- Reduce allocations
- Object pooling
- Memory reuse
- Compression
- Lazy loading

### I/O Optimization

**Techniques**:
- Batching operations
- Caching
- Asynchronous I/O
- Connection pooling
- Compression

### Caching

### Cache Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Memory Cache** | In-memory storage | Hot data |
| **Disk Cache** | Disk-based storage | Large datasets |
| **Distributed Cache** | Redis, Memcached | Multi-server |
| **CDN Cache** | Edge caching | Static assets |

### Cache Strategies

| Strategy | Description | Trade-off |
|----------|-------------|-----------|
| **Cache-Aside** | Lazy loading | Simple, may have stale data |
| **Write-Through** | Write to cache and DB | Consistent, slower writes |
| **Write-Behind** | Async write to DB | Fast writes, possible data loss |
| **Write-Around** | Write to DB only | No cache pollution |

### Load Testing

### Load Testing

**Definition**: Testing system under expected load

**Purpose**: Verify performance under normal conditions

### Stress Testing

**Definition**: Testing system beyond expected load

**Purpose**: Find breaking point

### Spike Testing

**Definition**: Testing sudden load increases

**Purpose**: Verify handling of traffic spikes

### Performance Patterns

### Lazy Loading

**Definition**: Load data only when needed

**Benefit**: Reduce initial load time

**Example**:
````

### Eager Loading

**Definition**: Load data upfront

**Benefit**: Faster access time

**Trade-off**: Higher initial load time

### Batching

**Definition**: Combine multiple operations

**Benefit**: Reduce overhead

**Example**:
````

### Pooling

**Definition**: Reuse expensive resources

**Examples**: Connection pool, thread pool, object pool

**Benefit**: Reduce allocation overhead

