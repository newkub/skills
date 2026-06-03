# How It Works - Go

## Compilation Flow

```
┌─────────────┐
│ .go Source  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Parser      │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ AST         │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Type Check  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Compile     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Link        │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Binary      │
└─────────────┘
```

## Runtime Architecture

```
┌─────────────────────────────────┐
│         Go Program              │
├─────────────────────────────────┤
│  goroutine scheduler           │
│  goroutine scheduler           │
│  goroutine scheduler           │
├─────────────────────────────────┤
│  goroutine 1  │  goroutine 2   │
│  goroutine 3  │  goroutine N   │
├─────────────────────────────────┤
│       OS Thread Pool            │
└─────────────────────────────────┘
```

## Concurrency Model

### Goroutine Scheduling

Go uses M:N scheduling (M goroutines on N OS threads).

```go
// GOMAXPROCS controls parallelism
import "runtime"
runtime.GOMAXPROCS(4)

// NumCPU returns CPU count
runtime.NumCPU()
```

### Channel Communication

```go
// Unbuffered (synchronous)
ch := make(chan int)

// Buffered (asynchronous)
ch := make(chan int, 10)

// Select for non-blocking communication
select {
case msg := <-ch1:
    fmt.Println(msg)
case ch2 <- data:
    fmt.Println("sent")
default:
    fmt.Println("no activity")
}
```

## Memory Model

### Stack vs Heap

- **Stack**: Local variables, fast allocation
- **Heap**: Dynamic allocation via GC

```go
func foo() {
    // Allocated on stack
    x := 10

    // May escape to heap
    return &x  // Compiler decides
}
```

### Garbage Collection

Go uses concurrent mark-and-sweep GC.

```go
// GOGC controls garbage collection aggressiveness
// Default: 100 (100% of heap)
import "runtime/debug"
debug.SetGCPercent(50)
```

## Package System

### Module Structure

```
myproject/
├── go.mod
├── main.go
└── pkg/
    └── util/
        └── helper.go
```

```go
// go.mod
module github.com/user/myproject

go 1.22

require (
    github.com/pkg/errors v0.9.1
)
```

### Import Paths

```go
import (
    "fmt"
    "myproject/pkg/util"
    "github.com/pkg/errors"
)
```

## Error Handling

Go uses explicit error returns, not exceptions.

```go
// Traditional
result, err := riskyFunction()
if err != nil {
    return fmt.Errorf("failed: %w", err)
}

// Early return idiom
if err != nil {
    return err
}
```

## Key Mechanisms

- **Goroutines**: Lightweight concurrent execution
- **Channels**: Communication and synchronization
- **Select**: Multi-way communication
- **Defer**: Cleanup on function exit
- **Panic/Recover**: Exception handling (use sparingly)