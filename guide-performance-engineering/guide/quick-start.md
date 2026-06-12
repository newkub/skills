# Quick Start

## เริ่มต้น Performance Engineering อย่างรวดเร็ว

### Step 1: สร้าง Project Structure

```bash
mkdir perf-demo
cd perf-demo
mkdir src tests benchmarks docs
```

### Step 2: สร้าง Function to Benchmark (Go)

**src/function.go**:
````

### Step 3: สร้าง Benchmark (Go)

**benchmarks/function_test.go**:
````

### Step 4: สร้าง CPU Profiling (Go)

**src/profile.go**:
````

### Step 5: สร้าง Memory Profiling (Go)

**src/memory_profile.go**:
````

### Step 6: สร้าง Load Test (k6)

**tests/load_test.js**:
```javascript
import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 10,
    duration: '30s',
};

export default function() {
    let res = http.get('http://localhost:8080/calculate?n=1000');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
```

### Step 7: สร้าง Simple HTTP Server (Go)

**src/server.go**:
````

### Step 8: Build และ Run

```bash
# Run benchmark
go test -bench=. -benchmem ./benchmarks/

# Run CPU profiling
go run src/profile.go

# View CPU profile
go tool pprof cpu.prof

# Run memory profiling
go run src/memory_profile.go

# View memory profile
go tool pprof heap.prof

# Start server
go run src/server.go

# Run load test (in another terminal)
k6 run tests/load_test.js
```

### Step 9: Generate Flame Graph

```bash
# Generate flame graph from CPU profile
go tool pprof -raw cpu.prof | flamegraph.pl > flamegraph.svg

# View flame graph
open flamegraph.svg
```

### Step 10: Analyze Results

```bash
# Compare benchmark results
go test -bench=. -benchmem ./benchmarks/ > benchmark.txt

# View benchmark comparison
benchstat benchmark.txt
```

### Next Steps

1. อ่าน `key-concept.md` สำหรับ concepts เพิ่มเติม
2. ดู `how-it-works.md` สำหรับ profiling tools
3. ศึกษา `profiling.md` สำหรับ profiling และ benchmarking
4. ดู `memory.md` สำหรับ memory profiling
5. ดู `caching.md` สำหรับ caching strategies

