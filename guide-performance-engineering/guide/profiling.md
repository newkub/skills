# Profiling

## Profiling และ Benchmarking

### CPU Profiling

### Go pprof

**Enable CPU Profiling**:

````

**Analyze Profile**:

```bash
# Interactive analysis
go tool pprof cpu.prof

# Generate flame graph
go tool pprof -raw cpu.prof | flamegraph.pl > flamegraph.svg

# Top functions
go tool pprof -top cpu.prof

# List functions
go tool pprof -list functionName cpu.prof
```

### perf (Linux)

**Record Profile**:

```bash
perf record -g ./app
```

**Analyze Profile**:

```bash
# Report
perf report

# Flame graph
perf script | flamegraph.pl > flamegraph.svg
```

### Memory Profiling

### Go Heap Profiling

**Enable Heap Profiling**:

````

**Analyze Profile**:

```bash
# Interactive analysis
go tool pprof heap.prof

# Top allocations
go tool pprof -top heap.prof

# List allocations
go tool pprof -list functionName heap.prof
```

### valgrind (Linux)

**Run with valgrind**:

```bash
valgrind --tool=massif ./app
```

**Analyze Output**:

```bash
ms_print massif.out
```

### Benchmarking

### Go Benchmark

**Create Benchmark**:

````

**Run Benchmark**:

```bash
# Run all benchmarks
go test -bench=.

# Run specific benchmark
go test -bench=BenchmarkFunction

# With memory stats
go test -bench=. -benchmem

# With CPU profiling
go test -bench=. -cpuprofile=cpu.prof
```

### Python Benchmark

**pytest-benchmark**:

```python
import pytest

def test_function(benchmark):
    benchmark(function)

def test_function_with_params(benchmark):
    benchmark(function, param1, param2)
```

**Run Benchmark**:

```bash
pytest --benchmark-only
```

### Node.js Benchmark

**benchmark.js**:

```javascript
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite.add('function', function() {
    function();
});

suite.on('cycle', function(event) {
    console.log(String(event.target));
});

suite.run();
```

**Run Benchmark**:

```bash
node benchmark.js
```

### Flame Graphs

### Generate Flame Graph

**From Go pprof**:

```bash
go tool pprof -raw cpu.prof | flamegraph.pl > flamegraph.svg
```

**From perf**:

```bash
perf script | flamegraph.pl > flamegraph.svg
```

**View Flame Graph**:

```bash
open flamegraph.svg
```

### Interpret Flame Graph

- **Width**: Time spent in function
- **Height**: Call stack depth
- **Color**: Often indicates module or category
- **Hot paths**: Wide bars indicate bottlenecks

### Performance Metrics

### Latency

**Definition**: Time to complete operation

**Measurement**: Milliseconds, microseconds

**Example**:
````

### Throughput

**Definition**: Operations per time unit

**Measurement**: Requests per second, operations per second

**Example**:
````

### Resource Utilization

**CPU Usage**:

````

**Memory Usage**:

````

### Comparison

### benchstat (Go)

**Compare Benchmarks**:

```bash
# Save baseline
go test -bench=. > baseline.txt

# Save optimized
go test -bench=. > optimized.txt

# Compare
benchstat baseline.txt optimized.txt
```

### Statistical Significance

**Use Multiple Runs**:

```bash
# Run multiple times
for i in {1..10}; do
    go test -bench=. >> results.txt
done
```

### Profiling Tips

### 1. Profile Real Workloads

```bash
# ✅ Good: Profile production-like workloads
# ❌ Bad: Profile synthetic workloads
```

### 2. Profile Before Optimizing

```bash
# ✅ Good: Profile first, then optimize
# ❌ Bad: Optimize without profiling
```

### 3. Use Representative Data

````

### 4. Profile in Production

```bash
# ✅ Good: Profile production (carefully)
# ❌ Bad: Never profile production
```

