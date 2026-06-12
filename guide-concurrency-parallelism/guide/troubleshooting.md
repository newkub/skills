# Troubleshooting

## การแก้ปัญหาที่พบบ่อยใน Concurrency

### Race Conditions

### Problem: Data Race Detected

**Symptoms**:
- Inconsistent results
- Random crashes
- Race detector warnings

**Causes**:
1. Unprotected shared state
2. Concurrent read/write
3. Non-atomic operations

**Solutions**:

```go
// ❌ Bad: Race condition
var counter int

func increment() {
    counter++  // Not atomic
}

// ✅ Good: Protected with mutex
var counter int
var mutex sync.Mutex

func increment() {
    mutex.Lock()
    defer mutex.Unlock()
    counter++
}
```

### Problem: Deadlock

**Symptoms**:
- Program hangs
- No progress
- All threads blocked

**Causes**:
1. Circular lock acquisition
2. Lock not released
3. Waiting for unavailable resource

**Solutions**:

```go
// ❌ Bad: Circular lock
func task1() {
    mutex1.Lock()
    mutex2.Lock()
    // ...
}

func task2() {
    mutex2.Lock()
    mutex1.Lock()  // Deadlock
}

// ✅ Good: Consistent lock order
func task1() {
    mutex1.Lock()
    mutex2.Lock()
    mutex2.Unlock()
    mutex1.Unlock()
}

func task2() {
    mutex1.Lock()
    mutex2.Lock()
    mutex2.Unlock()
    mutex1.Unlock()
}
```

### Performance Issues

### Problem: High Lock Contention

**Symptoms**:
- Poor scalability
- Threads waiting
- Low throughput

**Causes**:
1. Lock held too long
2. Too many threads
3. Fine-grained locking needed

**Solutions**:

```go
// ❌ Bad: Lock held for long time
func process(data []byte) {
    mutex.Lock()
    result := expensiveOperation(data)  // Blocks others
    sharedData = result
    mutex.Unlock()
}

// ✅ Good: Minimize lock scope
func process(data []byte) {
    result := expensiveOperation(data)  // No lock
    
    mutex.Lock()
    sharedData = result
    mutex.Unlock()
}
```

### Problem: Goroutine Leak

**Symptoms**:
- Memory usage increases
- Too many goroutines
- Slow performance

**Causes**:
1. Goroutines never exit
2. Channels never closed
3. No timeout

**Solutions**:

```go
// ❌ Bad: Goroutine never exits
func worker() {
    for {
        job := <-jobs
        process(job)
    }
}

// ✅ Good: Exit when channel closed
func worker() {
    for job := range jobs {
        process(job)
    }
}
```

### Channel Issues

### Problem: Channel Panic

**Symptoms**:
- Panic: send on closed channel
- Panic: close of closed channel
- Program crash

**Causes**:
1. Closing channel from receiver
2. Sending to closed channel
3. Multiple close

**Solutions**:

```go
// ❌ Bad: Close from receiver
func consumer(ch chan<- int) {
    for val := range ch {
        fmt.Println(val)
    }
    close(ch)  // Panic!
}

// ✅ Good: Close from sender
func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
    }
    close(ch)
}
```

### Problem: Channel Block

**Symptoms**:
- Goroutine blocked forever
- No progress
- Timeout

**Causes**:
1. No receiver for sender
2. No sender for receiver
3. Buffer full (buffered channels)

**Solutions**:

```go
// ✅ Good: Use select with timeout
func worker(ch <-chan int) {
    for {
        select {
        case val := <-ch:
            process(val)
        case <-time.After(time.Second):
            fmt.Println("Timeout")
            return
        }
    }
}
```

### Async/Await Issues

### Problem: Blocking Event Loop

**Symptoms**:
- Poor performance
- Single thread bottleneck
- No parallelism

**Causes**:
1. Blocking I/O in async function
2. CPU-bound tasks in event loop
3. Long-running computations

**Solutions**:

```python
# ❌ Bad: Blocking I/O
async def fetch_data():
    response = requests.get(url)  # Blocks!
    return response.text

# ✅ Good: Async I/O
async def fetch_data():
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()
```

### Debugging Tips

### 1. Use Race Detector

```bash
# Go
go test -race ./...

# Rust
cargo test --release
```

### 2. Use Profiling

```bash
# Go CPU profiling
go test -cpuprofile=cpu.prof
go tool pprof cpu.prof

# Go memory profiling
go test -memprofile=mem.prof
go tool pprof mem.prof
```

### 3. Add Logging

```go
func worker(id int) {
    log.Printf("Worker %d starting\n", id)
    // Do work
    log.Printf("Worker %d finished\n", id)
}
```

### Common Pitfalls

### 1. Forgetting to Unlock

```go
// ❌ Bad: Forgot to unlock
func updateData() {
    mutex.Lock()
    data = newValue
    // Forgot to unlock!
}

// ✅ Good: Use defer
func updateData() {
    mutex.Lock()
    defer mutex.Unlock()
    data = newValue
}
```

### 2. Copying Mutex

```go
// ❌ Bad: Copying mutex
type Data struct {
    mu sync.Mutex
}

func processData(d Data) {
    // Copying mutex is invalid
}

// ✅ Good: Use pointer
type Data struct {
    mu sync.Mutex
}

func processData(d *Data) {
    // Pointer is valid
}
```

### 3. Sharing Between Goroutines Without Synchronization

```go
// ❌ Bad: Unprotected shared state
var data int

func goroutine1() {
    data = 1
}

func goroutine2() {
    data = 2
}

// ✅ Good: Use channel
func goroutine1(ch chan<- int) {
    ch <- 1
}

func goroutine2(ch <-chan int) {
    val := <-ch
    // Use val
}
```

### 4. Mixing Sync and Async

```python
# ❌ Bad: Mixing sync and async
async def fetch_data():
    data = blocking_function()  # Blocks event loop
    return data

# ✅ Good: All async
async def fetch_data():
    data = await async_function()
    return data
```

### 5. Not Handling Cancellation

```go
// ❌ Bad: Ignore cancellation
func worker(ctx context.Context) {
    for {
        job := <-jobs
        process(job)  // May run forever
    }
}

// ✅ Good: Respect cancellation
func worker(ctx context.Context) {
    for {
        select {
        case <-ctx.Done():
            return
        case job := <-jobs:
            process(job)
        }
    }
}
```
