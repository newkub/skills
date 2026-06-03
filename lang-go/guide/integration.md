# Integration - Go

## Database Integration

### PostgreSQL with pgx

```go
import (
    "context"
    "github.com/jackc/pgx/v5"
    "github.com/jackc/pgx/v5/pgxpool"
)

func connect() (*pgxpool.Pool, error) {
    config, err := pgxpool.ParseConfig("postgres://user:pass@localhost:5432/db")
    if err != nil {
        return nil, err
    }

    pool, err := pgxpool.NewWithConfig(context.Background(), config)
    if err != nil {
        return nil, err
    }
    return pool, nil
}

func query(pool *pgxpool.Pool) error {
    rows, err := pool.Query(context.Background(), "SELECT id, name FROM users")
    if err != nil {
        return err
    }
    defer rows.Close()

    for rows.Next() {
        var id int
        var name string
        if err := rows.Scan(&id, &name); err != nil {
            return err
        }
        fmt.Println(id, name)
    }
    return rows.Err()
}
```

### MySQL with sqlx

```go
import (
    "github.com/jmoiron/sqlx"
    _ "github.com/go-sql-driver/mysql"
)

func connect() (*sqlx.DB, error) {
    db, err := sqlx.Connect("mysql", "user:pass@tcp(localhost:3306)/dbname")
    if err != nil {
        return nil, err
    }
    db.SetMaxOpenConns(25)
    db.SetMaxIdleConns(5)
    return db, nil
}

var type User struct {
    ID   int    `db:"id"`
    Name string `db:"name"`
}

func query(db *sqlx.DB) ([]User, error) {
    var users []User
    err := db.Select(&users, "SELECT * FROM users LIMIT 10")
    return users, err
}
```

### Redis with go-redis

```go
import "github.com/redis/go-redis/v9"

func connect() *redis.Client {
    return redis.NewClient(&redis.Options{
        Addr:     "localhost:6379",
        Password: "",
        DB:       0,
    })
}

func cache(client *redis.Client) error {
    ctx := context.Background()

    // Set value
    err := client.Set(ctx, "key", "value", 0).Err()
    if err != nil {
        return err
    }

    // Get value
    val, err := client.Get(ctx, "key").Result()
    if err != nil {
        return err
    }
    fmt.Println(val)
    return nil
}
```

## HTTP Integration

### HTTP Client

```go
import "net/http"

func client() {
    httpClient := &http.Client{
        Timeout: 30 * time.Second,
    }

    resp, err := httpClient.Get("https://api.example.com/data")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, err := io.ReadAll(resp.Body)
    // process body
}

func withHeaders() {
    req, _ := http.NewRequest("GET", "https://api.example.com", nil)
    req.Header.Set("Authorization", "Bearer token")
    req.Header.Set("Accept", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}
```

### HTTP Server

```go
import (
    "encoding/json"
    "net/http"
)

type Response struct {
    Message string `json:"message"`
}

func main() {
    http.HandleFunc("/api/users", handleUsers)
    http.HandleFunc("/api/posts", handlePosts)

    log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleUsers(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case http.MethodGet:
        listUsers(w, r)
    case http.MethodPost:
        createUser(w, r)
    default:
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
    }
}

func listUsers(w http.ResponseWriter, r *http.Request) {
    users := []User{{ID: 1, Name: "John"}}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(users)
}
```

### Gin Web Framework

```go
import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()

    r.GET("/health", func(c *gin.Context) {
        c.JSON(200, gin.H{"status": "ok"})
    })

    r.GET("/users/:id", func(c *gin.Context) {
        id := c.Param("id")
        c.JSON(200, gin.H{"id": id})
    })

    r.POST("/users", func(c *gin.Context) {
        var user User
        if err := c.ShouldBindJSON(&user); err != nil {
            c.JSON(400, gin.H{"error": err.Error()})
            return
        }
        c.JSON(201, user)
    })

    r.Run(":8080")
}
```

## gRPC Integration

```go
// server/main.go
import (
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
)

func main() {
    lis, _ := net.Listen("tcp", ":50051")
    s := grpc.NewServer()
    pb.RegisterMyServiceServer(s, &server{})
    reflection.Register(s)
    s.Serve(lis)
}

// service/server.go
type server struct {
    pb.UnimplementedMyServiceServer
}

func (s *server) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.User, error) {
    return &pb.User{
        Id:   req.Id,
        Name: "John",
    }, nil
}
```

## Configuration Integration

### Viper for Config

```go
import "github.com/spf13/viper"

func initConfig() {
    viper.SetConfigName("config")
    viper.SetConfigType("yaml")
    viper.AddConfigPath(".")
    viper.AddConfigPath("$HOME/.app")

    viper.SetDefault("port", 8080)
    viper.SetDefault("timeout", "5s")

    viper.AutomaticEnv()

    if err := viper.ReadInConfig(); err != nil {
        panic(err)
    }
}

func useConfig() {
    port := viper.GetInt("port")
    host := viper.GetString("database.host")
}
```

## Logging Integration

### Zap Logger

```go
import "go.uber.org/zap"

func initLogger() (*zap.Logger, error) {
    cfg := zap.NewProductionConfig()
    cfg.OutputPaths = []string{"stdout", "/var/log/app.log"}
    return cfg.Build()
}

func log(logger *zap.Logger) {
    logger.Info("starting server",
        zap.String("host", "localhost"),
        zap.Int("port", 8080),
    )
    logger.Error("failed to connect",
        zap.Error(errors.New("connection refused")),
    )
}
```

## Testing Integration

### testify for Assertions

```go
import (
    "github.com/stretchr/testify/assert"
    "github.com/stretchr/testify/require"
)

func TestSomething(t *testing.T) {
    // require stops test on failure
    require.Equal(t, 123, 456, "values should be equal")

    // assert continues but marks failure
    assert.NoError(t, err)
    assert.True(t, condition)
}
```

### Mocking with gomock

```go
//go:generate mockgen -source=repository.go -destination=mock_repository.go

type Repository interface {
    GetUser(ctx context.Context, id int) (*User, error)
}

func service(repo Repository) {
    user, err := repo.GetUser(context.Background(), 1)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(user)
}
```

## Container Integration

### Docker Multi-stage Build

```dockerfile
# Build stage
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Production stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
EXPOSE 8080
CMD ["./main"]
```

### Docker Compose

```yaml
version: "3.8"
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/db
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=db
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```