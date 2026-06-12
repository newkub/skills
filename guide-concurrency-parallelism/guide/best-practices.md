# Best Practices

## Best Practices สำหรับ Concurrency Programming

### Thread Safety

### 1. Protect Shared State

```go
// ✅ Good: Protect shared state
var counter int
var mutex sync.Mutex

func increment() {
    mutex.Lock()
    defer mutex.Unlock()
    counter++
}

// ❌ Bad: Unprotected shared state
var counter int

func increment() {
    counter++  // Race condition
}
```

### 2. Use Appropriate Synchronization

```go
// ✅ Good: Use RWMutex for read-heavy workloads
var data int
var rwMutex sync.RWMutex

func readData() int {
    rwMutex.RLock()
    defer rwMutex.RUnlock()
    return data
}

func writeData(newValue int) {
    rwMutex.Lock()
    defer rwMutex.Unlock()
    data = newValue
}

// ❌ Bad: Use Mutex for read-heavy workloads
var data int
var mutex sync.Mutex

func readData() int {
    mutex.Lock()
    defer mutex.Unlock()
    return data  // Blocks other readers
}
```

### 3. Avoid Deadlocks

```go
// ✅ Good: Lock in consistent order
var mutex1, mutex2 sync.Mutex

func task1() {
    mutex1.Lock()
    mutex2.Lock()
    // ...
    mutex2.Unlock()
    mutex1.Unlock()
}

func task2() {
    mutex1.Lock()
    mutex2.Lock()
    // ...
    mutex2.Unlock()
    mutex1.Unlock()
}

// ❌ Bad: Lock in inconsistent order
func task1() {
    mutex1.Lock()
    mutex2.Lock()
    // ...
}

func task2() {
    mutex2.Lock()
    mutex1.Lock()  // Deadlock!
}
```

### Channel Usage

### 4. Prefer Channels Over Shared Memory

```go
// ✅ Good: Use channels for communication
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs {
        results <- job * 2
    }
}

// ❌ Bad: Use shared memory for communication
var jobs []int
var results []int
var mutex sync.Mutex

func worker() {
    mutex.Lock()
    job := jobs[0]
    jobs = jobs[1:]
    mutex.Unlock()
    
    result := job * 2
    mutex.Lock()
    results = append(results, result)
    mutex.Unlock()
}
```

### 5. Close Channels Properly

```go
// ✅ Good: Close channels from sender
func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
    }
    close(ch)  // Signal no more values
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Println(val)
    }
}

// ❌ Bad: Close from receiver
func consumer(ch chan<- int) {
    for val := range ch {
        fmt.Println(val)
    }
    close(ch)  // Panic!
}
```

### Async/Await

### 6. Don't Block Event Loop

```python
# ✅ Good: Use async I/O
async def fetch_data():
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# ❌ Bad: Block event loop
async def fetch_data():
    response = requests.get(url)  # Blocks!
    return response.text
```

### 7. Handle Errors Properly

```python
# ✅ Good: Handle async errors
async def fetch_data():
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                return await response.text()
    except aiohttp.ClientError as e:
        print(f"Error: {e}")
        return None

# ❌ Bad: Ignore errors
async def fetch_data():
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()  # May raise
```

### Goroutines

### 8. Use WaitGroups for Synchronization

```go
// ✅ Good: Use WaitGroup
func main() {
    var wg sync.WaitGroup
    
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            doWork()
        }()
    }
    
    wg.Wait()
}

// ❌ Bad: Sleep and hope
func main() {
    for i := 0; i < 10; i++ {
        go doWork()
    }
    time.Sleep(time.Second)  // Not reliable
}
```

### 9. Limit Goroutine Count

```go
// ✅ Good: Use worker pool
func workerPool(jobs <-chan int, workers int) {
    var wg sync.WaitGroup
    
    for i := 0; i < workers; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for job := range jobs {
                process(job)
            }
        }()
    }
    
    wg.Wait()
}

// ❌ Bad: Spawn goroutine per task
func processAll(tasks []Task) {
    for _, task := range tasks {
        go process(task)  // May spawn too many
    }
}
```

### Actor Model

### 10. Keep Actors Simple

```go
// ✅ Good: Single responsibility actor
type CounterActor struct {
    inbox chan CounterMessage
    count  int
}

func (a *CounterActor) Start() {
    for msg := range a.inbox {
        switch msg.Type {
        case "increment":
            a.count++
        case "get":
            msg.Response <- a.count
        }
    }
}

// ❌ Bad: Actor does too much
type EverythingActor struct {
    inbox chan Message
}

func (a *EverythingActor) Start() {
    for msg := range a.inbox {
        // Handles everything - hard to reason about
    }
}
```

### 11. Use Supervision Trees

```go
// ✅ Good: Supervise child actors
func supervisor(childActors []Actor) {
    for _, child := range childActors {
        go func(a Actor) {
            defer func() {
                if r := recover(); r != nil {
                    log.Printf("Actor crashed: %v, restarting", r)
                    go a.Start()  // Restart
                }
            }()
            a.Start()
        }(child)
    }
}
```

### Lock-Free Programming

### 12. Use Atomic Operations When Possible

```go
// ✅ Good: Use atomic for simple operations
var counter int64

func increment() {
    atomic.AddInt64(&counter, 1)
}

// ❌ Bad: Use mutex for simple operations
var counter int
var mutex sync.Mutex

func increment() {
    mutex.Lock()
    defer mutex.Unlock()
    counter++
}
```

### 13. Understand Memory Ordering

```rust
// ✅ Good: Use appropriate ordering
use std::sync::atomic::{AtomicBool, Ordering};

let flag = AtomicBool::new(false);

// Producer
flag.store(true, Ordering::Release);

// Consumer
if flag.load(Ordering::Acquire) {
    // Guaranteed to see all writes before store
}

// ❌ Bad: Use relaxed when ordering needed
flag.store(true, Ordering::Relaxed);  // May not work as expected
```

### Error Handling

### 14. Handle Panics Gracefully

```go
// ✅ Good: Recover from panic
func safeFunction() {
    defer func() {
        if r := recover(); r != nil {
            log.Printf("Recovered from panic: %v", r)
        }
    }()
    
    // May panic
}

// ❌ Bad: Let panic propagate
func unsafeFunction() {
    // May panic, crashes program
}
```

### 15. Use Context for Cancellation

```go
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

// ❌ Bad: Ignore cancellation
func worker() {
    for {
        job := <-jobs  // May block forever
        process(job)
    }
}
```

### Performance

### 16. Profile Before Optimizing

```bash
# ✅ Good: Profile first
go test -cpuprofile=cpu.prof
go tool pprof cpu.prof

# ❌ Bad: Optimize blindly
# Assume this is slow
```

### 17. Consider Lock Contention

```go
// ✅ Good: Reduce lock scope
func processData(data []byte) {
    // Process without lock
    result := expensiveOperation(data)
    
    mutex.Lock()
    sharedData = result
    mutex.Unlock()
}

// ❌ Bad: Hold lock for long time
func processData(data []byte) {
    mutex.Lock()
    result := expensiveOperation(data)  // Blocks others
    sharedData = result
    mutex.Unlock()
}
```

### Testing

### 18. Test with Race Detector

```bash
# ✅ Good: Run with race detector
go test -race ./...

# ❌ Bad: Skip race detection
go test ./...
```

### 19. Test Concurrent Code

```go
// ✅ Good: Test concurrent behavior
func TestConcurrentCounter(t *testing.T) {
    var wg sync.WaitGroup
    counter := 0
    mutex := sync.Mutex{}
    
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mutex.Lock()
            counter++
            mutex.Unlock()
        }()
    }
    
    wg.Wait()
    
    if counter != 1000 {
        t.Errorf("Race condition detected")
    }
}
```

### Documentation

### 20. Document Concurrency Assumptions

```go
// ✅ Good: Document thread safety
// Counter is thread-safe when accessed through Increment() and Value()
type Counter struct {
    mu    sync.Mutex
    value int
}

// Increment atomically increments the counter
func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.value++
}

// ❌ Bad: No documentation
type Counter struct {
    mu    sync.Mutex
    value int
}
```
