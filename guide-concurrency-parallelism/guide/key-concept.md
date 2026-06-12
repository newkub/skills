# Key Concept

## Concurrency และ Parallelism Fundamentals

### Concurrency vs Parallelism

| Aspect | Concurrency | Parallelism |
|--------|-------------|-------------|
| **Definition** | Multiple tasks in progress | Multiple tasks executing simultaneously |
| **Hardware** | Can run on single core | Requires multiple cores |
| **Goal** | Improve responsiveness | Improve throughput |
| **Example** | Async I/O operations | Multi-core processing |

**Example**:

```go
// Concurrency - Single core, multiple tasks
func main() {
    go task1()  // Task 1 starts
    go task2()  // Task 2 starts
    // Tasks interleave on single core
}

// Parallelism - Multiple cores, simultaneous execution
func main() {
    runtime.GOMAXPROCS(4)  // Use 4 cores
    go task1()  // Task 1 on core 1
    go task2()  // Task 2 on core 2
    // Tasks run simultaneously
```

### Thread Safety

### Race Conditions

**Definition**: Multiple threads access shared data simultaneously, causing incorrect results

**Example**:

```go
// ❌ Race condition
var counter int

func increment() {
    counter++  // Not atomic
}

func main() {
    for i := 0; i < 1000; i++ {
        go increment()
    }
    // counter may not be 1000
}

// ✅ Thread-safe with mutex
var counter int
var mutex sync.Mutex

func increment() {
    mutex.Lock()
    counter++
    mutex.Unlock()
}
```

### Deadlocks

**Definition**: Two or more threads waiting for each other, causing indefinite blocking

**Conditions**:
1. Mutual exclusion
2. Hold and wait
3. No preemption
4. Circular wait

**Example**:

```go
// ❌ Deadlock
var mutex1, mutex2 sync.Mutex

func task1() {
    mutex1.Lock()
    mutex2.Lock()
    // ...
}

func task2() {
    mutex2.Lock()
    mutex1.Lock()
    // Deadlock!
}
```

### Synchronization Primitives

### Mutex (Mutual Exclusion)

**Purpose**: Ensure only one thread accesses critical section

**Example**:

```go
var mutex sync.Mutex
var data int

func updateData(newValue int) {
    mutex.Lock()
    defer mutex.Unlock()
    data = newValue
}
```

### RWMutex (Read-Write Mutex)

**Purpose**: Multiple readers, single writer

**Example**:

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

### Atomic Operations

**Purpose**: Lock-free operations on simple types

**Example**:

```go
var counter int64

func increment() {
    atomic.AddInt64(&counter, 1)  // Atomic increment
}
```

### Channels

### Buffered vs Unbuffered

| Type | Description | Use Case |
|------|-------------|----------|
| **Unbuffered** | Synchronous send/receive | Handshake, synchronization |
| **Buffered** | Asynchronous with buffer | Producer-consumer, pipelines |

**Example**:

```go
// Unbuffered channel
ch := make(chan int)
go func() { ch <- 1 }()  // Blocks until receiver
val := <-ch  // Blocks until sender

// Buffered channel
ch := make(chan int, 10)
ch <- 1  // Doesn't block if buffer not full
val := <-ch
```

### Channel Patterns

**Fan-out**:

```go
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs {
        results <- job * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    for i := 0; i < 5; i++ {
        go worker(jobs, results)
    }
    
    for i := 0; i < 100; i++ {
        jobs <- i
    }
    close(jobs)
}
```

**Fan-in**:

```go
func merge(channels ...<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup
    
    for _, ch := range channels {
        wg.Add(1)
        go func(c <-chan int) {
            defer wg.Done()
            for val := range c {
                out <- val
            }
        }(ch)
    }
    
    go func() {
        wg.Wait()
        close(out)
    }()
    
    return out
}
```

### Async/Await

### Promises/Futures

**Purpose**: Handle asynchronous operations

**Example (Python)**:

```python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)  # Simulate I/O
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

### Async Patterns

**Parallel Execution**:

```python
import asyncio

async def task1():
    await asyncio.sleep(1)
    return "task1"

async def task2():
    await asyncio.sleep(1)
    return "task2"

async def main():
    results = await asyncio.gather(task1(), task2())
    print(results)

asyncio.run(main())
```

### Actor Model

### Actor Principles

1. **Encapsulation**: Actor owns its state
2. **Message Passing**: Communication via messages
3. **Asynchronous**: Non-blocking message processing
4. **Location Transparency**: Actors can be local or remote

**Example (Go)**:

```go
type Actor struct {
    inbox chan Message
}

type Message struct {
    From    string
    Content string
}

func (a *Actor) Start() {
    for msg := range a.inbox {
        // Process message
        fmt.Printf("Received from %s: %s\n", msg.From, msg.Content)
    }
}

func (a *Actor) Send(msg Message) {
    a.inbox <- msg
}
```

### CSP (Communicating Sequential Processes)

### Principles

1. **Processes**: Independent concurrent processes
2. **Channels**: Communication via channels
3. **Composition**: Compose processes

**Example (Go)**:

```go
func producer(out chan<- int) {
    for i := 0; i < 10; i++ {
        out <- i
    }
    close(out)
}

func consumer(in <-chan int) {
    for val := range in {
        fmt.Println(val)
    }
}

func main() {
    ch := make(chan int)
    go producer(ch)
    consumer(ch)
}
```

### Lock-Free Programming

### CAS (Compare-And-Swap)

**Purpose**: Atomic conditional update

**Example (Rust)**:

```rust
use std::sync::atomic::{AtomicUsize, Ordering};

fn increment(counter: &AtomicUsize) {
    let mut old = counter.load(Ordering::SeqCst);
    loop {
        let new = old + 1;
        match counter.compare_exchange_weak(old, new, Ordering::SeqCst) {
            Ok(_) => break,
            Err(actual) => old = actual,
        }
    }
}
```

### Memory Ordering

| Ordering | Description |
|----------|-------------|
| **Relaxed** | No ordering guarantees |
| **Acquire** | Prevent reordering after |
| **Release** | Prevent reordering before |
| **SeqCst** | Full ordering |
