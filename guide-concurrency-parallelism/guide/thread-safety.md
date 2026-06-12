# Thread Safety

## Thread Safety และ Synchronization

### Race Conditions

### Definition

Race condition เกิดขึ้นเมื่อหลาย threads พยายามเข้าถึง shared data พร้อมกัน และผลลัพธ์ขึ้นอยู่กับลำดับการเข้าถึง

### Example

```go
// ❌ Race condition
var counter int

func increment() {
    counter++  // Not atomic: read, modify, write
}

func main() {
    for i := 0; i < 1000; i++ {
        go increment()
    }
    time.Sleep(time.Second)
    fmt.Println(counter)  // May not be 1000
}

// ✅ Thread-safe with mutex
var counter int
var mutex sync.Mutex

func increment() {
    mutex.Lock()
    defer mutex.Unlock()
    counter++
}
```

### Data Races

### Detection

```bash
# Go race detector
go test -race ./...

# Rust data race detector
cargo test --release
```

### Prevention

1. **Use mutexes** for shared mutable state
2. **Use atomic operations** for simple types
3. **Use channels** for communication
4. **Avoid shared state** when possible

### Mutex

### Basic Usage

```go
var mutex sync.Mutex
var data int

func updateData(newValue int) {
    mutex.Lock()
    defer mutex.Unlock()
    data = newValue
}
```

### RWMutex

```go
var rwMutex sync.RWMutex
var data int

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
```

### Deadlocks

### Conditions

1. **Mutual Exclusion**: Resource locked by one thread
2. **Hold and Wait**: Thread holds lock while waiting for another
3. **No Preemption**: Thread cannot be forced to release lock
4. **Circular Wait**: Chain of threads waiting for each other

### Prevention

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

### Timeout

```go
// ✅ Good: Use timeout to avoid deadlock
func safeLock(mutex *sync.Mutex) error {
    done := make(chan struct{})
    go func() {
        mutex.Lock()
        close(done)
    }()
    
    select {
    case <-done:
        return nil
    case <-time.After(time.Second):
        return errors.New("timeout")
    }
}
```

### Atomic Operations

### Compare-And-Swap

```go
var value int64

func compareAndSwap(old, new int64) bool {
    return atomic.CompareAndSwapInt64(&value, old, new)
}
```

### Load/Store

```go
var flag int64

func setFlag() {
    atomic.StoreInt64(&flag, 1)
}

func getFlag() int64 {
    return atomic.LoadInt64(&flag)
}
```

### Add/Fetch

```go
var counter int64

func increment() int64 {
    return atomic.AddInt64(&counter, 1)
}

func fetchAndAdd(delta int64) int64 {
    return atomic.AddInt64(&counter, delta)
}
```

### Memory Barriers

### Purpose

Ensure memory operations are visible to other threads

```go
// ✅ Good: Use atomic operations for visibility
var ready int32

func setReady() {
    atomic.StoreInt32(&ready, 1)
}

func isReady() bool {
    return atomic.LoadInt32(&ready) == 1
}

// ❌ Bad: No memory barrier
var ready bool

func setReady() {
    ready = true  // May not be visible
}

func isReady() bool {
    return ready  // May see stale value
}
```

### Condition Variables

### Wait/Signal

```go
var mutex sync.Mutex
var cond = sync.NewCond(&mutex)
var ready bool

func waitForReady() {
    mutex.Lock()
    for !ready {
        cond.Wait()
    }
    mutex.Unlock()
}

func setReady() {
    mutex.Lock()
    ready = true
    cond.Signal()
    mutex.Unlock()
}
```

### Broadcast

```go
func notifyAll() {
    mutex.Lock()
    ready = true
    cond.Broadcast()  // Wake all waiting threads
    mutex.Unlock()
}
```

### Barrier

### WaitGroup

```go
var wg sync.WaitGroup

func worker(id int) {
    defer wg.Done()
    fmt.Printf("Worker %d\n", id)
}

func main() {
    for i := 0; i < 5; i++ {
        wg.Add(1)
        go worker(i)
    }
    wg.Wait()
}
```

### Once

```go
var once sync.Once
var initialized bool

func initialize() {
    once.Do(func() {
        // Expensive initialization
        initialized = true
    })
}
```

### Thread-Local Storage

### Go

```go
var threadLocal sync.Map

func setThreadLocal(key, value interface{}) {
    threadLocal.Store(key, value)
}

func getThreadLocal(key interface{}) (interface{}, bool) {
    return threadLocal.Load(key)
}
```

### Python

```python
import threading

thread_local = threading.local()

def worker():
    thread_local.value = "data"
    print(thread_local.value)
```

### Immutable Data

### Benefits

- No race conditions (cannot modify)
- No need for locks
- Safe to share between threads

```go
// ✅ Good: Use immutable data
type Data struct {
    Value int
}

func processData(data Data) {
    // Data is immutable, safe to share
}

// ❌ Bad: Mutable shared data
type Data struct {
    Value int
}

func processData(data *Data) {
    data.Value++  // Race condition if shared
}
```

### Copy-on-Write

```go
// ✅ Good: Copy-on-write for reads
type Data struct {
    mutex sync.RWMutex
    value int
}

func (d *Data) Read() int {
    d.mutex.RLock()
    defer d.mutex.RUnlock()
    return d.value
}

func (d *Data) Write(newValue int) {
    d.mutex.Lock()
    defer d.mutex.Unlock()
    d.value = newValue
}
```

### Channel Safety

### Closing Channels

```go
// ✅ Good: Close from sender only
func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
    }
    close(ch)
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Println(val)
    }
}
```

### Select with Default

```go
// ✅ Good: Non-blocking select
func worker(ch <-chan int) {
    for {
        select {
        case val := <-ch:
            process(val)
        default:
            // Do other work
        }
    }
}
```

### Mutex vs Channels

| Scenario | Prefer |
|----------|---------|
| **Protecting shared state** | Mutex |
| **Communication** | Channels |
| **Synchronization** | Channels |
| **Performance critical** | Mutex (less overhead) |
| **Simple coordination** | Channels |
