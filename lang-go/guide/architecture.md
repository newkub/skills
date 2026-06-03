# Architecture - Go

## Project Structure

### Standard Layout (Recommended)

```
myproject/
├── cmd/
│   └── app/
│       └── main.go           # Application entry point
├── internal/
│   ├── app/
│   │   └── app.go            # Application setup
│   ├── config/
│   │   └── config.go         # Configuration
│   ├── handler/
│   │   └── handler.go        # HTTP handlers
│   ├── service/
│   │   └── service.go        # Business logic
│   ├── repository/
│   │   └── repository.go    # Data access
│   └── model/
│       └── model.go          # Domain models
├── pkg/
│   └── utils/
│       └── utils.go          # Shared utilities
├── api/
│   ├── user.proto            # gRPC definitions
│   └── openapi.yaml          # OpenAPI spec
├── configs/
│   └── config.yaml           # Configuration files
├── scripts/
│   └── build.sh              # Build scripts
├── go.mod
├── go.sum
├── Dockerfile
└── docker-compose.yml
```

### Layered Architecture

```
┌─────────────────────────────────────┐
│           Presentation              │
│        (HTTP/gRPC handlers)         │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│          Application                  │
│        (Services/Use cases)         │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│             Domain                    │
│      (Models/Business logic)        │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│         Infrastructure                │
│      (DB/External services)           │
└─────────────────────────────────────┘
```

## Command Pattern

### CLI Application

```
cmd/
├── cli/
│   └── main.go
├── migrate/
│   └── main.go
└── server/
    └── main.go
```

```go
// cmd/server/main.go
package main

import (
    "context"
    "log"
    "net/http"
    "os"
    "os/signal"
)

func main() {
    // Setup
    cfg := config.Load()
    db := database.Connect(cfg.DatabaseURL)
    repo := repository.New(db)
    svc := service.New(repo)
    handler := handler.New(svc)

    // Server
    srv := &http.Server{
        Addr:    cfg.Address,
        Handler: handler,
    }

    // Graceful shutdown
    go func() {
        if err := srv.ListenAndServe(); err != nil {
            log.Printf("server: %v", err)
        }
    }()

    quit := make(chan os.Signal, 1)
    signal.Notify(quit, os.Interrupt)
    <-quit

    ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
    defer cancel()
    srv.Shutdown(ctx)
}
```

## Service Architecture

### Microservice Structure

```
├── user-service/
│   ├── cmd/
│   ├── internal/
│   └── go.mod
├── order-service/
│   ├── cmd/
│   ├── internal/
│   └── go.mod
└── api-gateway/
    ├── cmd/
    ├── internal/
    └── go.mod
```

### Internal Packages

```go
// internal/pkg - shared internal packages
// Use only within this project
// Not imported by external projects
```

### Package Design

```go
// Domain-driven structure
internal/
├── domain/
│   ├── user/
│   │   ├── entity.go
│   │   ├── repository.go
│   │   └── errors.go
│   └── order/
│       ├── entity.go
│       └── repository.go
├── service/
│   ├── user.go
│   └── order.go
└── handler/
    ├── user.go
    └── order.go
```

## Error Handling Architecture

### Error Types

```go
// Domain errors
var (
    ErrNotFound     = errors.New("not found")
    ErrInvalidInput = errors.New("invalid input")
    ErrUnauthorized = errors.New("unauthorized")
)

// Wrapped errors
if err != nil {
    return fmt.Errorf("user service: %w", err)
}
```

### Error Response

```go
type ErrorResponse struct {
    Code    string `json:"code"`
    Message string `json:"message"`
}

func handleError(w http.ResponseWriter, err error) {
    switch {
    case errors.Is(err, ErrNotFound):
        w.WriteHeader(http.StatusNotFound)
    case errors.Is(err, ErrInvalidInput):
        w.WriteHeader(http.StatusBadRequest)
    default:
        w.WriteHeader(http.StatusInternalServerError)
    }
    json.NewEncoder(w).Encode(ErrorResponse{
        Code:    "ERROR",
        Message: err.Error(),
    })
}
```

## Configuration Architecture

### Environment-Based Config

```go
// config/config.go
type Config struct {
    Server   ServerConfig
    Database DatabaseConfig
    Redis    RedisConfig
}

func Load() *Config {
    return &Config{
        Server: ServerConfig{
            Port: getEnvInt("PORT", 8080),
            Host: getEnv("HOST", "localhost"),
        },
        Database: DatabaseConfig{
            URL: getEnv("DATABASE_URL", "localhost:5432"),
        },
    }
}
```

### Multiple Environments

```go
// development.yaml
server:
  port: 8080
  debug: true

database:
  url: localhost:5432

// production.yaml
server:
  port: 8080
  debug: false

database:
  url: prod-db:5432
```

## Testing Architecture

### Test Structure

```
internal/
├── handler/
│   ├── handler.go
│   └── handler_test.go      # Unit tests
├── service/
│   ├── service.go
│   └── service_test.go
└── repository/
    ├── repository.go
    └── repository_test.go    # Integration tests

test/
├── integration/
│   └── api_test.go          # Integration tests
└── mocks/
    └── mocks.go             # Generated mocks
```

### Test Organization

```go
func TestUserService(t *testing.T) {
    t.Run("Create", func(t *testing.T) {
        // setup
        // execute
        // assert
    })
    t.Run("Update", func(t *testing.T) {
        // ...
    })
}
```

## Deployment Architecture

### Container Structure

```dockerfile
# Multi-stage for smaller images
FROM golang:1.22-alpine AS builder
WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o app ./cmd/app

FROM scratch
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /build/app /app
WORKDIR /app
ENTRYPOINT ["./app"]
```

### Health Check

```go
// internal/handler/health.go
func HealthHandler(w http.ResponseWriter, r *http.Request) {
    ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
    defer cancel()

    if err := db.PingContext(ctx); err != nil {
        http.Error(w, "database unhealthy", http.StatusServiceUnavailable)
        return
    }

    w.WriteHeader(http.StatusOK)
    w.Write([]byte(`{"status":"healthy"}`))
}
```