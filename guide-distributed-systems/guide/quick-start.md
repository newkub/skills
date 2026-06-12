# Quick Start

## เริ่มต้น Distributed Systems อย่างรวดเร็ว

### Step 1: สร้าง Project Structure

```bash
mkdir distributed-demo
cd distributed-demo
mkdir services gateway database scripts
```

### Step 2: สร้าง Service (Go)

**services/user-service/main.go**:
```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/users", getUsers)
    http.HandleFunc("/health", health)
    
    fmt.Println("User service starting on :8080")
    http.ListenAndServe(":8080", nil)
}

func getUsers(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `[{"id": 1, "name": "John"}]`)
}

func health(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "OK")
}
```

### Step 3: สร้าง Service Registration (Go)

**services/user-service/register.go**:
```go
package main

import (
    "github.com/hashicorp/consul/api"
)

func registerService() error {
    config := api.DefaultConfig()
    config.Address = "localhost:8500"
    
    client, _ := api.NewClient(config)
    
    registration := &api.AgentServiceRegistration{
        Name: "user-service",
        Port: 8080,
        Check: &api.AgentServiceCheck{
            HTTP:     "http://localhost:8080/health",
            Interval: "10s",
        },
    }
    
    return client.Agent().ServiceRegister(registration)
}
```

### Step 4: สร้าง Service Discovery (Go)

**gateway/discovery.go**:
```go
package main

import (
    "github.com/hashicorp/consul/api"
)

func discoverService(serviceName string) ([]*api.AgentService, error) {
    config := api.DefaultConfig()
    config.Address = "localhost:8500"
    
    client, _ := api.NewClient(config)
    
    services, _, err := client.Health().Service(serviceName, false, nil)
    return services, err
}
```

### Step 5: สร้าง Gateway (Go)

**gateway/main.go**:
```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "time"
)

func main() {
    http.HandleFunc("/users", proxyUsers)
    
    fmt.Println("Gateway starting on :3000")
    http.ListenAndServe(":3000", nil)
}

func proxyUsers(w http.ResponseWriter, r *http.Request) {
    services, err := discoverService("user-service")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    if len(services) == 0 {
        http.Error(w, "No services available", http.StatusServiceUnavailable)
        return
    }
    
    service := services[0]
    url := fmt.Sprintf("http://%s:%d/users", service.Address, service.Port)
    
    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Get(url)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer resp.Body.Close()
    
    var data interface{}
    json.NewDecoder(resp.Body).Decode(&data)
    
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(data)
}
```

### Step 6: สร้าง Docker Compose

**docker-compose.yml**:
```yaml
version: '3.8'

services:
  consul:
    image: consul:latest
    ports:
      - "8500:8500"
    command: consul agent -server -ui -bootstrap-expect=1 -client=0.0.0.0

  user-service:
    build: ./services/user-service
    ports:
      - "8080:8080"
    depends_on:
      - consul

  gateway:
    build: ./gateway
    ports:
      - "3000:3000"
    depends_on:
      - consul
      - user-service
```

### Step 7: สร้าง Dockerfile

**services/user-service/Dockerfile**:
```dockerfile
FROM golang:alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o user-service

FROM alpine
WORKDIR /app
COPY --from=builder /app/user-service .
EXPOSE 8080
CMD ["./user-service"]
```

**gateway/Dockerfile**:
```dockerfile
FROM golang:alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o gateway

FROM alpine
WORKDIR /app
COPY --from=builder /app/gateway .
EXPOSE 3000
CMD ["./gateway"]
```

### Step 8: Build และ Run

```bash
# Build and start services
docker-compose up -d

# Check services
curl http://localhost:3000/users

# Check Consul UI
open http://localhost:8500
```

### Step 9: Test Service Discovery

```bash
# Check registered services
curl http://localhost:8500/v1/catalog/services

# Check service health
curl http://localhost:8500/v1/health/service/user-service
```

### Step 10: Scale Service

```bash
# Scale user service
docker-compose up -d --scale user-service=3

# Test load balancing
for i in {1..10}; do
    curl http://localhost:3000/users
done
```

### Next Steps

1. อ่าน `key-concept.md` สำหรับ concepts เพิ่มเติม
2. ดู `how-it-works.md` สำหรับ distributed algorithms
3. ศึกษา `cap-theorem.md` สำหรับ CAP theorem
4. ดู `consensus.md` สำหรับ consensus algorithms
5. ดู `patterns.md` สำหรับ distributed patterns
