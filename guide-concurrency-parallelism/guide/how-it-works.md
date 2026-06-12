# How It Works

## Concurrency Models ทำงานอย่างไร

### Thread-Based Concurrency

### OS Threads

**How it works**:
1. OS creates thread
2. Thread scheduled by OS scheduler
3. Context switching between threads
4. Shared memory access

**Pros**:
- True parallelism on multi-core
- Direct hardware access

**Cons**:
- High overhead (stack, context switch)
- Limited by OS resources
- Complex synchronization

**Example (Python)**:

```python
import threading

def worker():
    print("Worker started")
    # Do work
    print("Worker finished")

thread = threading.Thread(target=worker)
thread.start()
thread.join()
```

### Goroutines (Go)

**How it works**:
1. Go runtime creates goroutine
2. M:N scheduling (M goroutines, N OS threads)
3. Lightweight stack (2KB initial)
4. Channel-based communication

**Pros**:
- Very lightweight
- Efficient scheduling
- Built-in channels

**Cons**:
- No preemption (cooperative)
- Need to yield for fairness

**Example**:

```go
func worker() {
    fmt.Println("Worker started")
    // Do work
    fmt.Println("Worker finished")
}

func main() {
    go worker()
    time.Sleep(time.Second)
}
```

### Async/Await Model

### Event Loop

**How it works**:
1. Single thread event loop
2. Non-blocking I/O operations
3. Callbacks/promises await completion
4. Resume when I/O completes

**Pros**:
- No thread overhead
- Good for I/O-bound tasks
- Simple mental model

**Cons**:
- Not parallel (single thread)
- Blocking operations block entire loop

**Example (Python)**:

```python
import asyncio

async def fetch_data(url):
    # Non-blocking HTTP request
    response = await aiohttp.get(url)
    return await response.text()

async def main():
    data = await fetch_data("https://api.example.com")
    print(data)

asyncio.run(main())
```

### Actor Model

### Message Passing

**How it works**:
1. Actor processes messages sequentially
2. Messages sent to actor's mailbox
3. Actor owns its state (no shared state)
4. Actors communicate via messages

**Pros**:
- No shared state (no locks)
- Location transparency
- Natural for distributed systems

**Cons**:
- Message overhead
- Complex debugging

**Example (Go)**:

```go
type Actor struct {
    mailbox chan Message
    state  int
}

func (a *Actor) Start() {
    for msg := range a.mailbox {
        switch msg.Type {
        case "increment":
            a.state++
        case "get":
            msg.Response <- a.state
        }
    }
}
```

### CSP (Communicating Sequential Processes)

### Channel Communication

**How it works**:
1. Processes communicate via channels
2. Send blocks until receiver ready (unbuffered)
3. Receive blocks until sender ready
4. Composition of processes

**Pros**:
- No shared state
- Deterministic communication
- Composable

**Cons**:
- Can deadlock easily
- Requires careful design

**Example (Go)**:

```go
func process(in <-chan int, out chan<- int) {
    for val := range in {
        out <- val * 2
    }
}

func main() {
    in := make(chan int)
    out := make(chan int)
    
    go process(in, out)
    
    in <- 1
    result := <-out
    fmt.Println(result)
}
```

### Lock-Free Programming

### CAS Loop

**How it works**:
1. Read current value
2. Compute new value
3. Atomic compare-and-swap
4. Retry if failed

**Pros**:
- No locks (no deadlocks)
- Better performance under contention
- Scalable

**Cons**:
- Complex to implement correctly
- ABA problem
- Limited to simple operations

**Example (Rust)**:

```rust
use std::sync::atomic::{AtomicUsize, Ordering};

fn increment(counter: &AtomicUsize) {
    loop {
        let current = counter.load(Ordering::Relaxed);
        let new = current + 1;
        match counter.compare_exchange_weak(
            current, new,
            Ordering::Relaxed,
            Ordering::Relaxed
        ) {
            Ok(_) => break,
            Err(_) => continue,
        }
    }
}
```

### Synchronization Mechanisms

### Mutex

**How it works**:
1. Thread attempts to acquire lock
2. If locked, thread blocks
3. When unlocked, thread acquires
4. Thread releases lock when done

**Example (Go)**:

```go
var mutex sync.Mutex
var data int

func update() {
    mutex.Lock()
    defer mutex.Unlock()
    data++
}
```

### Condition Variables

**How it works**:
1. Thread waits on condition
2. Thread signals when condition met
3. Waiting thread wakes up
4. Re-check condition

**Example (Go)**:

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

### Barrier

**How it works**:
1. Threads wait at barrier
2. When all threads arrive, barrier releases
3. All threads proceed

**Example (Go)**:

```go
var barrier sync.WaitGroup

func worker(id int) {
    defer barrier.Done()
    fmt.Printf("Worker %d starting\n", id)
    // Do work
    fmt.Printf("Worker %d finished\n", id)
}

func main() {
    barrier.Add(3)
    for i := 0; i < 3; i++ {
        go worker(i)
    }
    barrier.Wait()
    fmt.Println("All workers finished")
}
```

### Memory Models

### Sequential Consistency

**Definition**: Operations appear in program order

**Pros**:
- Simple to reason about
- Intuitive behavior

**Cons**:
- May limit performance
- Not always achievable

### Relaxed Memory Ordering

**Definition**: No ordering guarantees beyond atomicity

**Pros**:
- Better performance
- Sufficient for some cases

**Cons**:
- Hard to reason about
- Subtle bugs

**Example (Rust)**:

```rust
use std::sync::atomic::{AtomicBool, Ordering};

let flag = AtomicBool::new(false);

// Thread 1
flag.store(true, Ordering::Relaxed);

// Thread 2
if flag.load(Ordering::Relaxed) {
    // May not see the write
}
```

### Acquire-Release

**Definition**:
- Acquire: Prevent reordering after
- Release: Prevent reordering before

**Pros**:
- Good balance of performance and correctness
- Common pattern

**Example (Rust)**:

```rust
use std::sync::atomic::{AtomicBool, Ordering};

let flag = AtomicBool::new(false);

// Thread 1 (producer)
flag.store(true, Ordering::Release);

// Thread 2 (consumer)
if flag.load(Ordering::Acquire) {
    // Guaranteed to see all writes before store
}
```
