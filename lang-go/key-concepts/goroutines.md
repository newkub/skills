# Goroutines

## Overview

Goroutines are lightweight threads managed by the Go runtime. They enable concurrent programming with minimal overhead.

## Basic Usage

### Creating Goroutines

```go
// Simple goroutine
go doWork()

// With anonymous function
go func() {
    fmt.Println("Running in background")
}()

// With parameters
go process(id, data)
```

### Blocking Main

```go
func main() {
    // This will exit immediately without waiting
    go slowTask()  // Won't complete!

    // Use sync.WaitGroup
    var wg sync.WaitGroup
    wg.Add(1)
    go func() {
        defer wg.Done()
        // work
    }()
    wg.Wait()
}
```

## Goroutine Scheduling

### M:N Model

Go uses M:N scheduling (M goroutines on N OS threads).

```
┌─────────────────────────────────────┐
│         Go Runtime Scheduler         │
├─────────────────────────────────────┤
│  P1 │ P2 │ P3 │ P4 │ P5 │ P6       │  (Processors)
├─────────────────────────────────────┤
│  G1 │ G2 │ G3 │ G4 │ G5 │ G6       │  (Goroutines)
│  G7 │ G8 │ G9 │ G10 │ G11 │ G12    │
└─────────────────────────────────────┘
```

### GOMAXPROCS

Control number of OS threads used.

```go
import "runtime"

// Use all available CPUs
runtime.GOMAXPROCS(runtime.NumCPU())

// Use specific number
runtime.GOMAXPROCS(4)
```

## Communication

### With Channels

```go
ch := make(chan string)

go func() {
    result := doWork()
    ch <- result  // Send to channel
}()

result := <-ch  // Receive from channel
```

### With Context

```go
func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()

    go worker(ctx)

    time.Sleep(2 * time.Second)
    cancel()  // Signal cancellation
}

func worker(ctx context.Context) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("Cancelled")
            return
        default:
            fmt.Println("Working...")
            time.Sleep(500 * time.Millisecond)
        }
    }
}
```

## Common Patterns

### Fan-out

```go
func fanOut(jobs []int) []int {
    results := make(chan int, len(jobs))
    var wg sync.WaitGroup

    for _, job := range jobs {
        wg.Add(1)
        go func(j int) {
            defer wg.Done()
            results <- process(j)
        }(job)
    }

    wg.Wait()
    close(results)

    var out []int
    for r := range results {
        out = append(out, r)
    }
    return out
}
```

### Pipeline

```go
func pipeline() {
    // Stage 1: Generate
    numbers := generate(1, 2, 3, 4, 5)

    // Stage 2: Double
    doubled := double(numbers)

    // Stage 3: Print
    for n := range doubled {
        fmt.Println(n)
    }
}

func generate(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

func double(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * 2
        }
        close(out)
    }()
    return out
}
```

## Best Practices

### Don't Leak Goroutines

```go
// Bad: Goroutine never terminates
func bad() {
    go func() {
        for {
            // work
        }
    }()
}

// Good: Use context or done channel
func good(ctx context.Context) {
    go func() {
        for {
            select {
            case <-ctx.Done():
                return
            default:
                // work
            }
        }
    }()
}
```

### Proper Error Handling

```go
func withErrors() error {
    errCh := make(chan error, 10)

    for _, task := range tasks {
        go func(t Task) {
            errCh <- process(t)
        }(task)
    }

    for i := 0; i < len(tasks); i++ {
        if err := <-errCh; err != nil {
            return err
        }
    }
    return nil
}
```

## See Also

- [channels](channels.md) - Communication between goroutines
- [interfaces](interfaces.md) - Polymorphism in Go