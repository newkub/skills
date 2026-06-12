# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Performance

### Performance Issues

### Problem: High CPU Usage

**Symptoms**:
- CPU usage near 100%
- Slow response times
- System unresponsive

**Causes**:
1. Inefficient algorithms
2. Infinite loops
3. Excessive computations
4. No caching

**Solutions**:

````

### Problem: High Memory Usage

**Symptoms**:
- Memory usage increases over time
- Out of memory errors
- Slow performance

**Causes**:
1. Memory leaks
2. Excessive allocations
3. Large data structures
4. No garbage collection

**Solutions**:

````

### Problem: Slow I/O

**Symptoms**:
- Slow database queries
- Slow file operations
- Network latency

**Causes**:
1. No indexing
2. No caching
3. N+1 queries
4. Synchronous I/O

**Solutions**:

````

### Memory Leaks

### Problem: Memory Leak

**Symptoms**:
- Memory usage increases over time
- Out of memory errors
- Process crashes

**Causes**:
1. Not closing resources
2. Circular references
3. Global variables
4. Caching without limits

**Solutions**:

````

### CPU Bottlenecks

### Problem: CPU Bottleneck

**Symptoms**:
- High CPU usage
- Slow execution
- Poor throughput

**Causes**:
1. Inefficient algorithms
2. Excessive computations
3. No parallelization

**Solutions**:

````

### I/O Bottlenecks

### Problem: I/O Bottleneck

**Symptoms**:
- Slow database queries
- Slow file operations
- Network latency

**Causes**:
1. No indexing
2. No caching
3. N+1 queries
4. Synchronous I/O

**Solutions**:

````

### Debugging Tips

### 1. Profile Before Optimizing

```bash
# ✅ Good: Profile first
go test -bench=. -cpuprofile=cpu.prof
go tool pprof cpu.prof
```

### 2. Use Flame Graphs

```bash
# ✅ Good: Visualize hot paths
go tool pprof -raw cpu.prof | flamegraph.pl > flamegraph.svg
```

### 3. Monitor Resources

```bash
# ✅ Good: Monitor CPU and memory
top
htop
```

### 4. Use Profiling Tools

```bash
# ✅ Good: Use appropriate tools
# Go: pprof
# Python: cProfile, memory_profiler
# Node.js: clinic.js
```

### Common Pitfalls

### 1. Premature Optimization

````

### 2. Ignoring Memory Leaks

````

### 3. Not Caching

````

### 4. Not Batching

````

### 5. Not Using Connection Pooling

````

