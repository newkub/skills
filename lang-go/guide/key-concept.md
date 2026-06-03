# Key Concepts - Go

## Overview

Go's key concepts revolve around simplicity and concurrency. These concepts form the foundation of Go programming.

## Core Concepts

### Goroutines

Lightweight threads managed by Go runtime.

```go
// Basic goroutine
go functionName()

// With anonymous function
go func() {
    // concurrent work
}()

// With parameters
go func(msg string) {
    fmt.Println(msg)
}("Hello from goroutine")
```

### Channels

Type-safe communication between goroutines.

```go
// Create channel
ch := make(chan int)

// Send value
ch <- 42

// Receive value
value := <-ch

// Buffered channel
ch := make(chan int, 10)

// Close channel
close(ch)
```

### Interfaces

Implicit implementation for polymorphism.

```go
// Define interface
type Reader interface {
    Read(p []byte) (n int, err error)
}

// Implement implicitly
type MyReader struct{}

func (r MyReader) Read(p []byte) (n int, err error) {
    // implementation
    return len(p), nil
}
```

## Related Concepts

- Concurrency vs Parallelism
- CSP (Communicating Sequential Processes)
- Ownership and memory model
- Package visibility

## See Also

- [goroutines](../key-concepts/goroutines.md)
- [channels](../key-concepts/channels.md)
- [interfaces](../key-concepts/interfaces.md)