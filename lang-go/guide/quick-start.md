# Quick Start - Go

## First Program

Create `hello.go`:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Run it:

```bash
go run hello.go
```

Build binary:

```bash
go build -o hello hello.go
./hello
```

## Project Structure

### Single Module

```
myproject/
├── go.mod
├── main.go
└── util.go
```

### With Packages

```
myproject/
├── go.mod
├── cmd/
│   └── app/
│       └── main.go
├── pkg/
│   └── utils/
│       └── helper.go
└── internal/
    └── config/
        └── config.go
```

## Initialize Module

```bash
# Create module
go mod init github.com/user/myproject

# Add dependency
go get github.com/pkg/errors

# Add dependencies from code
go mod tidy
```

## Common Patterns

### Function with Error

```go
func readFile(path string) ([]byte, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("read file: %w", err)
    }
    return data, nil
}

// Usage
data, err := readFile("config.json")
if err != nil {
    log.Fatal(err)
}
fmt.Println(string(data))
```

### HTTP Server

```go
package main

import (
    "encoding/json"
    "net/http"
)

type Response struct {
    Message string `json:"message"`
}

func handler(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(Response{Message: "Hello"})
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

```bash
go run hello.go
# Visit http://localhost:8080
```

### Concurrent Worker

```go
package main

import (
    "fmt"
    "sync"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("worker %d: job %d\n", id, j)
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)

    // Start workers
    var wg sync.WaitGroup
    for w := 1; w <= 3; w++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            worker(id, jobs, results)
        }(w)
    }

    // Send jobs
    for j := 1; j <= 10; j++ {
        jobs <- j
    }
    close(jobs)

    // Wait and collect results
    go func() {
        wg.Wait()
        close(results)
    }()

    for result := range results {
        fmt.Println("result:", result)
    }
}
```

### Graceful Shutdown

```go
package main

import (
    "context"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"
)

func main() {
    srv := &http.Server{Addr: ":8080"}

    // Start server
    go func() {
        if err := srv.ListenAndServe(); err != http.ErrServerClosed {
            log.Fatal(err)
        }
    }()

    // Wait for interrupt
    quit := make(chan os.Signal, 1)
    signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
    <-quit

    // Graceful shutdown
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    srv.Shutdown(ctx)
}
```

## Testing

### Basic Test

```go
// calc.go
func add(a, b int) int {
    return a + b
}

// calc_test.go
package main

import "testing"

func TestAdd(t *testing.T) {
    tests := []struct {
        name string
        a, b int
        want int
    }{
        {"simple", 2, 3, 5},
        {"zero", 0, 0, 0},
        {"negative", -1, 1, 0},
    }
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            if got := add(tt.a, tt.b); got != tt.want {
                t.Errorf("add(%d, %d) = %d, want %d", tt.a, tt.b, got, tt.want)
            }
        })
    }
}
```

```bash
go test -v ./...
go test -cover ./...
```

## Dependencies

### Add Library

```bash
# Add latest version
go get github.com/spf13/viper

# Add specific version
go get github.com/spf13/viper@v1.18.0

# Add all dependencies
go mod tidy
```

### Create API Client

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type User struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

func main() {
    resp, err := http.Get("https://api.example.com/users/1")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    var user User
    if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
        panic(err)
    }
    fmt.Printf("%+v\n", user)
}
```

## Next Steps

- Read [key-concept.md](key-concept.md) for core concepts
- Check [configuration.md](configuration.md) for project setup
- See [best-practices.md](best-practices.md) for coding standards