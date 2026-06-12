# Quick Start

## เริ่มต้น Concurrency Programming อย่างรวดเร็ว

### Step 1: สร้าง Project Structure

```bash
mkdir concurrency-demo
cd concurrency-demo
mkdir src tests
```

### Step 2: สร้าง Goroutine Example (Go)

**src/goroutines.go**:
```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d finished\n", id)
}

func main() {
    var wg sync.WaitGroup
    
    for i := 1; i <= 5; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    
    wg.Wait()
    fmt.Println("All workers finished")
}
```

### Step 3: สร้าง Channel Example (Go)

**src/channels.go**:
```go
package main

import (
    "fmt"
)

func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
        fmt.Printf("Produced: %d\n", i)
    }
    close(ch)
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Printf("Consumed: %d\n", val)
    }
}

func main() {
    ch := make(chan int)
    
    go producer(ch)
    consumer(ch)
}
```

### Step 4: สร้าง Mutex Example (Go)

**src/mutex.go**:
```go
package main

import (
    "fmt"
    "sync"
)

type Counter struct {
    mu    sync.Mutex
    value int
}

func (c *Counter) Increment() {
    c.mu.Lock()
    defer c.mu.Unlock()
    c.value++
}

func (c *Counter) Value() int {
    c.mu.Lock()
    defer c.mu.Unlock()
    return c.value
}

func main() {
    var wg sync.WaitGroup
    counter := &Counter{}
    
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            counter.Increment()
        }()
    }
    
    wg.Wait()
    fmt.Printf("Final value: %d\n", counter.Value())
}
```

### Step 5: สร้าง Async/Await Example (Python)

**src/async_python.py**:
```python
import asyncio

async def fetch_data(url, delay):
    print(f"Fetching {url}")
    await asyncio.sleep(delay)
    return f"Data from {url}"

async def main():
    tasks = [
        fetch_data("https://api1.com", 1),
        fetch_data("https://api2.com", 2),
        fetch_data("https://api3.com", 1),
    ]
    
    results = await asyncio.gather(*tasks)
    for result in results:
        print(result)

if __name__ == "__main__":
    asyncio.run(main())
```

### Step 6: สร้าง Thread Example (Python)

**src/threads.py**:
```python
import threading
import time

def worker(id):
    print(f"Worker {id} starting")
    time.sleep(1)
    print(f"Worker {id} finished")

def main():
    threads = []
    
    for i in range(5):
        thread = threading.Thread(target=worker, args=(i,))
        threads.append(thread)
        thread.start()
    
    for thread in threads:
        thread.join()
    
    print("All workers finished")

if __name__ == "__main__":
    main()
```

### Step 7: สร้าง Main Program

**src/main.go**:
```go
package main

import (
    "fmt"
)

func main() {
    fmt.Println("Concurrency Demo")
    fmt.Println("1. Goroutines")
    fmt.Println("2. Channels")
    fmt.Println("3. Mutex")
    
    // Run examples
    // Run goroutines example
    // Run channels example
    // Run mutex example
}
```

### Step 8: สร้าง Tests

**tests/concurrency_test.go**:
```go
package main

import (
    "sync"
    "testing"
)

func TestCounter(t *testing.T) {
    var wg sync.WaitGroup
    counter := 0
    mutex := sync.Mutex{}
    
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            mutex.Lock()
            counter++
            mutex.Unlock()
        }()
    }
    
    wg.Wait()
    
    if counter != 1000 {
        t.Errorf("Expected 1000, got %d", counter)
    }
}
```

### Step 9: Build และ Run

```bash
# Run Go program
go run src/main.go

# Run goroutines example
go run src/goroutines.go

# Run channels example
go run src/channels.go

# Run mutex example
go run src/mutex.go

# Run tests
go test ./tests/

# Run with race detector
go test -race ./tests/
```

### Step 10: Run Python Examples

```bash
# Run async example
python src/async_python.py

# Run threads example
python src/threads.py

# Run tests
pytest tests/
```

### Next Steps

1. อ่าน `key-concept.md` สำหรับ concepts เพิ่มเติม
2. ดู `how-it-works.md` สำหรับ concurrency models
3. ศึกษา `thread-safety.md` สำหรับ synchronization
4. ดู `async-patterns.md` สำหรับ async/await
5. ดู `actor-model.md` สำหรับ actor model และ CSP
