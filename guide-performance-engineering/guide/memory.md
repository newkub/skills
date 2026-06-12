# Memory

## Memory Profiling และ Optimization

### Memory Profiling

### Go Heap Profiling

**Enable Heap Profiling**:

````

**Analyze Heap Profile**:

```bash
# Interactive analysis
go tool pprof heap.prof

# Top allocations
go tool pprof -top heap.prof

# List allocations
go tool pprof -list functionName heap.prof

# Generate graph
go tool pprof -png heap.prof > heap.png
```

### Memory Leaks

### Detect Memory Leaks

**Symptoms**:
- Memory usage increases over time
- Out of memory errors
- Slow performance

**Detection**:

````

**Common Causes**:
1. Not closing resources
2. Circular references
3. Global variables
4. Caching without limits

### Fix Memory Leaks

**Close Resources**:

````

**Use Weak References**:

````

**Limit Cache Size**:

````

### Memory Optimization

### Reduce Allocations

**Reuse Buffers**:

````

**Use Object Pooling**:

````

### Avoid Copying

**Use Pointers**:

````

**Use Slices Efficiently**:

````

### Memory Layout

### Struct Alignment

**Optimize struct layout**:

````

### Array vs Slice

**Use Arrays for Fixed Size**:

````

**Use Slices for Dynamic Size**:

````

### Memory Monitoring

### Track Memory Usage

**Go**:

````

**Set Memory Limit**:

````

### Garbage Collection

### GC Tuning

**Set GC Percentage**:

````

**Force GC**:

````

### GC Stats

````

### Best Practices

### 1. Profile Memory Usage

```bash
# ✅ Good: Profile memory
go test -bench=. -memprofile=mem.prof
go tool pprof mem.prof
```

### 2. Monitor Memory in Production

````

### 3. Set Memory Limits

````

### 4. Use Efficient Data Structures

````

### 5. Avoid Premature Optimization

````

