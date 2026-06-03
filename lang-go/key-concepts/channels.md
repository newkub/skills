# Channels

## Overview

Channels provide type-safe communication between goroutines. They are the primary mechanism for synchronization and data passing.

## Channel Types

### Unbuffered

Synchronous, blocks until both sender and receiver are ready.

```go
ch := make(chan int)

// Sender blocks until receiver receives
ch <- 42

// Receiver blocks until sender sends
value := <-ch
```

### Buffered

Asynchronous up to capacity, blocks only when full/empty.

```go
ch := make(chan int, 10)

// Sends block when buffer is full
ch <- 1
ch <- 2

// Receives block when buffer is empty
value := <-ch
```

### Directional

Restrict channel direction in function parameters.

```go
// Can only send
func sender(ch chan<- int) {
    ch <- 42
}

// Can only receive
func receiver(ch <-chan int) {
    value := <-ch
}
```

## Basic Operations

### Send and Receive

```go
ch := make(chan string)

// Send
ch <- "hello"

// Receive
msg := <-ch

// Check if closed
val, ok := <-ch  // ok is false if closed
```

### Close Channel

```go
ch := make(chan int)

// Close when done
close(ch)

// Range over values
for v := range ch {
    fmt.Println(v)
}
```

## Select Statement

### Multiple Channels

```go
select {
case msg := <-ch1:
    fmt.Println("from ch1:", msg)
case ch2 <- data:
    fmt.Println("sent to ch2")
case <-time.After(time.Second):
    fmt.Println("timeout")
default:
    fmt.Println("no activity")
}
```

### Non-blocking Operations

```go
select {
case msg := <-ch:
    fmt.Println(msg)
default:
    fmt.Println("no message ready")
}
```

## Patterns

### Fan-in

Multiple inputs, single output.

```go
func fanIn(inputs ...<-chan int) <-chan int {
    out := make(chan int)
    var wg sync.WaitGroup

    for _, ch := range inputs {
        wg.Add(1)
        go func(c <-chan int) {
            defer wg.Done()
            for v := range c {
                out <- v
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

### Channel Pipeline

```go
func pipeline() {
    stage1 := producer()
    stage2 := processor(stage1)
    consumer(stage2)
}

func producer() <-chan int {
    out := make(chan int)
    go func() {
        for i := 0; i < 10; i++ {
            out <- i
        }
        close(out)
    }()
    return out
}
```

### Semaphore

Limit concurrency.

```go
func limitedWorkers(tasks []func(), maxConcurrent int) {
    sem := make(chan struct{}, maxConcurrent)
    var wg sync.WaitGroup

    for _, task := range tasks {
        wg.Add(1)
        sem <- struct{}{}  // Acquire
        go func(t func()) {
            defer wg.Done()
            defer func() { <-sem }()  // Release
            t()
        }(task)
    }

    wg.Wait()
}
```

### Timeout

```go
func withTimeout(ch <-chan int) (int, error) {
    select {
    case v := <-ch:
        return v, nil
    case <-time.After(5 * time.Second):
        return 0, errors.New("timeout")
    }
}
```

### Done Channel

```go
func worker(done <-chan struct{}, jobs <-chan int) {
    for {
        select {
        case <-done:
            return
        case job := <-jobs:
            process(job)
        }
    }
}

func main() {
    done := make(chan struct{})
    jobs := make(chan int, 100)

    go worker(done, jobs)

    // ... send jobs ...

    close(done)  // Signal termination
}
```

## Best Practices

### Ownership

```go
// One goroutine owns the channel
// Others receive reference to it

func producer() <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for i := 0; i < 10; i++ {
            out <- i
        }
    }()
    return out  // Transfer ownership
}
```

### Avoid Deadlocks

```go
// Bad: deadlock - nothing receives
func deadlock() {
    ch := make(chan int)
    ch <- 42  // Blocks forever
}

// Good: receive in separate goroutine
func noDeadlock() {
    ch := make(chan int)
    go func() {
        ch <- 42
    }()
    <-ch
}
```

### Close Once

```go
// Only close from sender side
// Don't close if multiple senders (use done channel instead)

func donePattern() {
    done := make(chan struct{})
    ch := make(chan int)

    go func() {
        for i := 0; i < 5; i++ {
            select {
            case ch <- i:
            case <-done:
                return
            }
        }
        close(ch)  // Close when done
    }()
}
```

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Forgetting to close | Use defer or done channel |
| Sending to nil channel | Initialize before use |
| Closing twice | Use sync.Once or done channel |
| Range over nil channel | Initialize before range |

## See Also

- [goroutines](goroutines.md) - Concurrent execution
- [interfaces](interfaces.md) - Polymorphism