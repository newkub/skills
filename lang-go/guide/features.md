# Features - Go

## Language Features

### Data Types

| Category | Types |
|----------|-------|
| Basic | bool, int, float, string |
| Composite | array, slice, map, struct |
| Reference | pointers, channels, functions, interfaces |

### Basic Types

```go
// Numeric
var i int = 42
var f float64 = 3.14

// String
var s string = "hello"

// Boolean
var b bool = true

// Constants
const Pi = 3.14159
```

### Arrays and Slices

```go
// Fixed-size array
arr := [5]int{1, 2, 3, 4, 5}

// Dynamic slice
slice := []int{1, 2, 3}
slice = append(slice, 4)

// Make slice
s := make([]int, 0, 10)

// Subslice
sub := slice[1:3]
```

### Maps

```go
// Create map
m := make(map[string]int)

// Add entries
m["key"] = 42

// Access
value := m["key"]

// Check existence
value, ok := m["key"]

// Delete
delete(m, "key")

// Iterate
for k, v := range m {
    fmt.Println(k, v)
}
```

### Structs

```go
// Define struct
type Person struct {
    Name string
    Age  int
}

// Create instance
p := Person{Name: "John", Age: 30}

// Anonymous struct
var user struct {
    ID   int
    Name string
}
```

## Control Flow

### Conditionals

```go
if x > 10 {
    fmt.Println("large")
} else if x > 5 {
    fmt.Println("medium")
} else {
    fmt.Println("small")
}

// With initialization
if n, err := io.Read(reader); err != nil {
    return err
} else {
    fmt.Println(n)
}
```

### Loops

```go
// Classic for
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// While-style
i := 0
for i < 10 {
    i++
}

// Infinite loop
for {
    if done {
        break
    }
}

// Range loop
items := []string{"a", "b", "c"}
for i, v := range items {
    fmt.Println(i, v)
}
```

### Switch

```go
switch value {
case "a":
    fmt.Println("found a")
case "b", "c":
    fmt.Println("found b or c")
default:
    fmt.Println("other")
}

// No break needed
i := 2
switch {
case i > 10:
    fmt.Println("large")
case i > 5:
    fmt.Println("medium")
default:
    fmt.Println("small")
}
```

## Functions

### Function Basics

```go
// Named return
func add(a, b int) int {
    return a + b
}

// Multiple returns
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Variadic
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

// Closures
adder := func(n int) int {
    return n + 1
}
```

### Methods

```go
// Value receiver
func (p Person) greet() string {
    return "Hello, " + p.Name
}

// Pointer receiver
func (p *Person) birthday() {
    p.Age++
}

// Method on any type
type Int int
func (i Int) double() Int {
    return i * 2
}
```

## Concurrency Features

### Goroutines

```go
// Simple goroutine
go doWork()

// With anonymous function
go func() {
    for {
        // work
    }
}()

// WaitGroup for synchronization
var wg sync.WaitGroup
wg.Add(1)
go func() {
    defer wg.Done()
    // work
}()
wg.Wait()
```

### Channels

```go
// Create channel
ch := make(chan int)

// Buffered channel
ch := make(chan int, 100)

// Send/Receive
ch <- value      // send
value := <-ch    // receive

// Close
close(ch)

// Range over channel
for v := range ch {
    fmt.Println(v)
}
```

### Select

```go
select {
case msg := <-ch1:
    fmt.Println("received from ch1:", msg)
case ch2 <- data:
    fmt.Println("sent to ch2")
case <-time.After(time.Second):
    fmt.Println("timeout")
default:
    fmt.Println("no activity")
}
```

### Mutex and RWMutex

```go
var mu sync.Mutex
var counter int

mu.Lock()
counter++
mu.Unlock()

// With defer
mu.Lock()
defer mu.Unlock()

// RWMutex for read-heavy workloads
var rw sync.RWMutex
rw.RLock()
readValue := value
rw.RUnlock()
rw.Lock()
value = newValue
rw.Unlock()
```

## Error Handling

### Error Patterns

```go
// Return error
func read(path string) ([]byte, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("read failed: %w", err)
    }
    return data, nil
}

// Wrap errors
fmt.Errorf("operation failed: %w", err)

// Sentinel errors
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

## Defer

```go
// Resource cleanup
func readFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close()
    // use file
}

// Stack execution
func foo() {
    defer fmt.Println("1")
    defer fmt.Println("2")
    defer fmt.Println("3")
    // Output: 3, 2, 1
}
```

## Packages

### Common Standard Library Packages

| Package | Purpose |
|---------|---------|
| fmt | Formatted I/O |
| os | OS operations |
| io | I/O utilities |
| bufio | Buffered I/O |
| encoding/json | JSON encoding |
| net/http | HTTP server/client |
| context | Context propagation |
| log | Logging |
| time | Time operations |
| strings | String utilities |
| regexp | Regular expressions |

## Testing

```go
// Basic test
func TestAdd(t *testing.T) {
    result := add(2, 3)
    if result != 5 {
        t.Errorf("expected 5, got %d", result)
    }
}

// Table-driven tests
func TestAdd(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"simple", 2, 3, 5},
        {"zero", 0, 0, 0},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := add(tt.a, tt.b); got != tt.want {
                t.Errorf("add() = %v, want %v", got, tt.want)
            }
        })
    }
}
```