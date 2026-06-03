# Interfaces

## Overview

Go interfaces define behavior without implementation. Types implement interfaces implicitly - no explicit declaration needed.

## Basic Interface

### Definition

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}
```

### Implementation

```go
// Implicit implementation - no "implements" keyword
type File struct {
    name string
}

// File implements Reader
func (f File) Read(p []byte) (n int, err error) {
    // implementation
    return len(p), nil
}

// File implements Writer
func (f File) Write(p []byte) (n int, err error) {
    // implementation
    return len(p), nil
}
```

## Empty Interface

Accept any type.

```go
var anything interface{} = "hello"
anything = 42
anything = []int{1, 2, 3}

// Function that accepts anything
func print(v interface{}) {
    fmt.Println(v)
}
```

## Common Interfaces

### io.Reader/Writer

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}

type Writer interface {
    Write(p []byte) (n int, err error)
}

type Closer interface {
    Close() error
}

// Combined interfaces
type ReadWriter interface {
    Reader
    Writer
}
```

### error Interface

```go
type error interface {
    Error() string
}

func doSomething() error {
    if fail {
        return errors.New("failed")
    }
    return nil
}
```

## Interface Composition

### Embedding

```go
type ReadWriter interface {
    Reader
    Writer
}

type ReadCloser interface {
    Reader
    Closer
}
```

### Multiple Interfaces

```go
// Type can implement multiple interfaces
type DataStore interface {
    Reader
    Writer
    Closer
}
```

## Practical Patterns

### Error Handling Interface

```go
type Handler interface {
    Handle(ctx context.Context, req Request) (Response, error)
}

// Implement multiple handlers
type UserHandler struct{}
func (h UserHandler) Handle(ctx context.Context, req Request) (Response, error) {
    // implementation
}

type OrderHandler struct{}
func (h OrderHandler) Handle(ctx context.Context, req Request) (Response, error) {
    // implementation
}
```

### Dependency Injection

```go
type Repository interface {
    GetUser(ctx context.Context, id int) (*User, error)
    SaveUser(ctx context.Context, user *User) error
}

type Service struct {
    repo Repository  // Depends on interface
}

func NewService(r Repository) *Service {
    return &Service{repo: r}
}
```

### Strategy Pattern

```go
type Storage interface {
    Save(ctx context.Context, data []byte) error
}

type S3Storage struct{}
func (s S3Storage) Save(ctx context.Context, data []byte) error {
    // Save to S3
    return nil
}

type LocalStorage struct{}
func (s LocalStorage) Save(ctx context.Context, data []byte) error {
    // Save to local disk
    return nil
}

func storeData(s Storage, data []byte) error {
    return s.Save(context.Background(), data)
}
```

## Nil Interfaces

### Check for nil

```go
var r io.Reader
if r == nil {
    fmt.Println("reader is nil")
}
```

### Interface with nil value

```go
var r io.Reader
var b *bytes.Buffer = nil
r = b  // r is not nil, but contains nil value

if r == nil {
    // false! interface is not nil
}

// Check underlying value
if r != nil && reflect.ValueOf(r).IsNil() {
    fmt.Println("interface contains nil")
}
```

## Type Assertion

### Basic Usage

```go
var i interface{} = "hello"

// Direct assertion (panics if wrong)
s := i.(string)

// With comma-ok idiom (safe)
s, ok := i.(string)
if !ok {
    fmt.Println("not a string")
}
```

### Switch on Type

```go
func inspect(i interface{}) {
    switch v := i.(type) {
    case string:
        fmt.Println("string:", v)
    case int:
        fmt.Println("int:", v)
    case bool:
        fmt.Println("bool:", v)
    default:
        fmt.Println("unknown type")
    }
}
```

## Best Practices

### Small Interfaces

```go
// Good: focused, single responsibility
type Reader interface {
    Read(p []byte) (n int, err error)
}

// Bad: too many methods
type EverythingDoer interface {
    Read(p []byte) (n int, err error)
    Write(p []byte) (n int, err error)
    Seek(offset int64, whence int) (int64, error)
    Close() error
    // ... many more
}
```

### Interface Naming

```go
// -er suffix for single method
type Closer interface {
    Close() error
}

// Method-based naming
type Reader interface {
    Read(p []byte) (n int, err error)
}

// Noun for concrete types
type UserRepository interface {
    GetUser(ctx context.Context, id int) (*User, error)
}
```

### Don't Export Interfaces Unnecessarily

```go
// Package with concrete type
type Server struct{}

func NewServer() *Server { return &Server{} }
func (s *Server) Serve() {}

// Consumer creates interface where needed
func handler(srv interface{ Serve() }) {
    srv.Serve()
}
```

## See Also

- [goroutines](goroutines.md) - Concurrency
- [channels](channels.md) - Communication