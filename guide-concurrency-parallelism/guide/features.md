# Features

## Features ของ Concurrency Approaches

### Thread-Based Concurrency

| Feature | Description | Benefit |
|---------|-------------|---------|
| **True Parallelism** | Multiple cores simultaneously | Better throughput |
| **Direct Hardware Access** | OS-level threads | Low-level control |
| **Shared Memory** | Threads share address space | Fast data sharing |
| **Preemptive Scheduling** | OS controls thread execution | Fair scheduling |

### Goroutines (Go)

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Lightweight** | 2KB stack vs 1MB+ for threads | Millions of goroutines |
| **M:N Scheduling** | M goroutines, N OS threads | Efficient resource use |
| **Built-in Channels** | First-class communication | Safe message passing |
| **Growth Stack** | Stack grows as needed | No stack overflow |

### Async/Await

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Non-blocking I/O** | I/O doesn't block thread | Better responsiveness |
| **Single Threaded** | No thread overhead | Simpler model |
| **Sequential Code** | Looks like synchronous code | Easier to read |
| **Exception Propagation** | Async exceptions propagate | Better error handling |

### Actor Model

| Feature | Description | Benefit |
|---------|-------------|---------|
| **No Shared State** | Each actor owns its state | No race conditions |
| **Message Passing** | Communication via messages | Decoupled components |
| **Location Transparency** | Actors can be local or remote | Distributed systems |
| **Supervision Trees** | Actors supervise children | Fault tolerance |

### CSP

| Feature | Description | Benefit |
|---------|-------------|---------|
| **No Shared State** | Processes don't share memory | Safe concurrency |
| **Deterministic** | Communication is synchronous | Predictable behavior |
| **Composable** | Processes compose easily | Modular design |
| **Deadlock Detection** | Can detect deadlocks statically | Safer code |

### Lock-Free Programming

| Feature | Description | Benefit |
|---------|-------------|---------|
| **No Locks** | No mutex overhead | Better performance |
| **No Deadlocks** | Can't deadlock without locks | More reliable |
| **Scalable** | Performance improves with cores | Better scalability |
| **Wait-Free** | Operations complete in bounded time | Real-time guarantees |

### Synchronization Primitives

### Mutex

| Feature | Description | Use Case |
|---------|-------------|----------|
| **Mutual Exclusion** | Only one thread at a time | Critical sections |
| **Recursive** | Same thread can re-acquire | Reentrant functions |
| **Try Lock** | Non-blocking acquire | Timeout scenarios |

### RWMutex

| Feature | Description | Use Case |
|---------|-------------|----------|
| **Multiple Readers** | Concurrent reads allowed | Read-heavy workloads |
| **Single Writer** | Exclusive write access | Write-heavy workloads |
| **Reader Preference** | Readers don't wait writers | Caching |
| **Writer Preference** | Writers don't wait readers | Logging |

### Atomic Operations

| Operation | Description | Use Case |
|-----------|-------------|----------|
| **Add** | Atomic addition | Counters |
| **Compare-And-Swap** | Conditional update | Lock-free algorithms |
| **Load/Store** | Atomic read/write | Flags |
| **Fetch-Add** | Add and return old value | Sequences |

### Channels

### Buffered Channels

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Asynchronous** | Sender doesn't block | Better throughput |
| **Buffer Size** | Configurable capacity | Control backpressure |
| **Channel Full** | Sender blocks | Flow control |

### Unbuffered Channels

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Synchronous** | Handshake between sender/receiver | Synchronization |
| **No Buffer** | No capacity limit | Simpler model |
| **Blocking** | Both sides block | Guaranteed delivery |

### Memory Ordering

| Ordering | Description | Use Case |
|---------|-------------|----------|
| **Relaxed** | No ordering | Simple counters |
| **Acquire** | Prevent reordering after | Loading data |
| **Release** | Prevent reordering before | Publishing data |
| **SeqCst** | Full ordering | Complex synchronization |

### Error Handling

### Panic/Recover (Go)

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Panic** | Unrecoverable error | Fail fast |
| **Recover** | Catch panic | Graceful degradation |
| **Defer** | Cleanup guaranteed | Resource management |

### Async Exceptions (Python)

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Exception Propagation** | Exceptions propagate through await | Natural error handling |
| **Try/Except** | Catch async exceptions | Error recovery |
| **Finally** | Cleanup always runs | Resource management |

### Performance Features

### Goroutine Scheduler

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Work Stealing** | Idle threads steal work | Better load balancing |
| **Preemption** | Fair scheduling | No starvation |
| **NUMA Awareness** | CPU locality aware | Better performance |

### Async Runtime

| Feature | Description | Benefit |
|---------|-------------|---------|
| **Event Loop** | Efficient I/O processing | High concurrency |
| **Thread Pool** | CPU-bound tasks in threads | Parallel processing |
| **I/O Threads** | Blocking I/O in threads | Compatibility |
