# Best Practices - Go

## Naming Conventions

### Package Names

- Use short, lowercase names
- No underscores or mixed case
- Think about what package provides, not contains

```go
// Good
package user
package httputil
package config

// Bad
package UserService
package user_helper
```

### Function/Variable Names

- Use camelCase
- Keep names short but descriptive
- Boolean names should start with is, has, can

```go
// Good
userCount, maxLength, isActive, hasAccess

// Bad
UserCount, user_count, MaxLength
```

### Constants

- Use MixedCase for exported, camelCase for unexported
- Group by logical order

```go
const (
    DefaultTimeout = 5 * time.Second
    MaxRetries     = 3
)
```

### Interface Names

- Name interfaces by method, not implementation
- Add `er` suffix for simple interfaces

```go
// Good
type Reader interface {
    Read(p []byte) (n int, err error)
}
type Writer interface {
    Write(p []byte) (n int, err error)
}

// Bad
type ReaderImpl interface {}
```

## Code Organization

### Package Structure

```
pkg/
├── user/
│   ├── user.go         // type User
│   ├── repository.go    // type Repository
│   └── service.go      // type Service
└── config/
    └── config.go
```

### Import Ordering

```go
import (
    // Standard library
    "context"
    "fmt"
    "net/http"

    // External packages
    "github.com/pkg/errors"
    "github.com/spf13/viper"

    // Internal packages
    "myproject/pkg/user"
)
```

### Group Similar Declarations

```go
// Not grouped
var maxConnections = 100
var timeout = 5 * time.Second
var retryCount = 3
var db *sql.DB

// Grouped
var (
    maxConnections = 100
    timeout        = 5 * time.Second
    retryCount    = 3
)

var db *sql.DB
```

## Error Handling

### Error Wrapping

```go
// Wrap errors with context
if err != nil {
    return fmt.Errorf("operation failed: %w", err)
}

// Use sentinel errors
var ErrNotFound = errors.New("not found")

// Custom error types
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}
```

### Handle Errors Explicitly

```go
// Bad - ignoring errors
data, _ := os.ReadFile(path)

// Good - handle explicitly
data, err := os.ReadFile(path)
if err != nil {
    return fmt.Errorf("read file %s: %w", path, err)
}
```

## Concurrency

### Use Channels Appropriately

```go
// Unbuffered when synchronization needed
ch := make(chan struct{})
go func() {
    // work
    ch <- struct{}{}  // signal completion
}()
<-ch  // wait

// Buffered for throughput
ch := make(chan int, 100)
```

### Avoid Data Races

```go
// Use sync.Mutex
varmu sync.Mutex
varcounter int

func increment() {
    mu.Lock()
    defer mu.Unlock()
    counter++
}

// Use atomic for simple values
varcounter atomic.Int64

func increment() {
    counter.Add(1)
}
```

### Context Propagation

```go
func doWork(ctx context.Context) error {
    select {
    case <-time.After(time.Second):
        return ctx.Err()
    case <-ctx.Done():
        return ctx.Err()
    }
}
```

## Testing

### Table-Driven Tests

```go
func TestAdd(t *testing.T) {
    tests := []struct {
        name    string
        a, b    int
        want    int
        wantErr bool
    }{
        {"simple", 2, 3, 5, false},
        {"overflow", math.MaxInt, 1, 0, true},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got, err := add(tt.a, tt.b)
            if (err != nil) != tt.wantErr {
                t.Errorf("add() error = %v, wantErr %v", err, tt.wantErr)
                return
            }
            if got != tt.want {
                t.Errorf("add() = %v, want %v", got, tt.want)
            }
        })
    }
}
```

### Subtests for Organization

```go
func TestUserService(t *testing.T) {
    t.Run("Create", func(t *testing.T) { /* ... */ })
    t.Run("Update", func(t *testing.T) { /* ... */ })
    t.Run("Delete", func(t *testing.T) { /* ... */ })
}
```

## Performance

### Avoid Unnecessary Allocations

```go
// Bad
func concat(s1, s2 string) string {
    return s1 + s2
}

// Good - use strings.Builder
func concat(s1, s2 string) string {
    var b strings.Builder
    b.WriteString(s1)
    b.WriteString(s2)
    return b.String()
}
```

### Reuse Buffers

```go
// Use sync.Pool for frequently allocated objects
var bufferPool = sync.Pool{
    New: func() interface{} {
        return new(bytes.Buffer)
    },
}

func process() {
    buf := bufferPool.Get().(*bytes.Buffer)
    defer bufferPool.Put(buf)
    buf.Reset()
    // use buffer
}
```

### Preallocate Slices

```go
// Preallocate when size is known
items := make([]int, 0, 1000)

// Preallocate with size
buffer := make([]byte, 1024)
```

## Documentation

### Document Public APIs

```go
// Package-level documentation
// Package user provides user management services.
//
// This package handles user creation, updates, and deletion
// with automatic validation and error handling.
package user

// User represents a user entity.
type User struct {
    ID    int
    Name  string
    Email string
}

// New creates a new user with validation.
func New(name, email string) (*User, error) {
    // implementation
}
```

### Comment Implementation Details

```go
// Use implementation comments for non-obvious code
// Retry with exponential backoff to handle temporary failures.
for i := 0; i < maxRetries; i++ {
    if err := doSomething(); err == nil {
        return nil
    }
    time.Sleep(time.Duration(math.Pow(2, float64(i))) * time.Second)
}
```