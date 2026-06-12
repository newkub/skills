# Async Patterns

## Async/Await Patterns

### Basic Async/Await

### Python

```python
import asyncio

async def fetch_data(url):
    # Simulate async I/O
    await asyncio.sleep(1)
    return f"Data from {url}"

async def main():
    result = await fetch_data("https://api.example.com")
    print(result)

asyncio.run(main())
```

### Go

```go
package main

import (
    "fmt"
    "time"
)

func asyncOperation() <-chan string {
    ch := make(chan string)
    go func() {
        time.Sleep(time.Second)
        ch <- "result"
    }()
    return ch
}

func main() {
    result := <-asyncOperation()
    fmt.Println(result)
}
```

### Parallel Execution

### Python (asyncio.gather)

```python
import asyncio

async def task1():
    await asyncio.sleep(1)
    return "task1"

async def task2():
    await asyncio.sleep(1)
    return "task2"

async def main():
    results = await asyncio.gather(task1(), task2())
    print(results)

asyncio.run(main())
```

### Go (goroutines)

```go
func task1() string {
    time.Sleep(time.Second)
    return "task1"
}

func task2() string {
    time.Sleep(time.Second)
    return "task2"
}

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() { ch1 <- task1() }()
    go func() { ch2 <- task2() }()
    
    result1 := <-ch1
    result2 := <-ch2
    
    fmt.Println(result1, result2)
}
```

### Error Handling

### Python

```python
async def fetch_data(url):
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                response.raise_for_status()
                return await response.text()
    except aiohttp.ClientError as e:
        print(f"Error: {e}")
        return None
    except asyncio.TimeoutError:
        print("Timeout")
        return None
```

### Go

```go
func fetch(url string) (string, error) {
    resp, err := http.Get(url)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }
    
    return string(body), nil
}
```

### Timeout

### Python

```python
async def fetch_with_timeout(url):
    try:
        async with asyncio.timeout(5):
            return await fetch_data(url)
    except asyncio.TimeoutError:
        print("Request timed out")
        return None
```

### Go

```go
func fetchWithTimeout(url string) (string, error) {
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
    if err != nil {
        return "", err
    }
    
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return "", err
    }
    defer resp.Body.Close()
    
    body, err := io.ReadAll(resp.Body)
    return string(body), err
}
```

### Cancellation

### Python

```python
async def cancellable_task(ctx):
    while not ctx.cancelled():
        print("Working...")
        await asyncio.sleep(1)
    print("Cancelled")

async def main():
    ctx = asyncio.get_event_loop().create_task(
        cancellable_task(asyncio.current_task())
    )
    
    await asyncio.sleep(2)
    ctx.cancel()
    await ctx

asyncio.run(main())
```

### Go

```go
func worker(ctx context.Context) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("Cancelled")
            return
        case <-time.After(time.Second):
            fmt.Println("Working...")
        }
    }
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    
    go worker(ctx)
    
    time.Sleep(2 * time.Second)
    cancel()
    time.Sleep(time.Second)
}
```

### Producer-Consumer

### Python

```python
import asyncio

async def producer(queue):
    for i in range(10):
        await asyncio.sleep(0.1)
        await queue.put(i)
        print(f"Produced: {i}")
    await queue.put(None)  # Signal end

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print(f"Consumed: {item}")

async def main():
    queue = asyncio.Queue()
    
    producer_task = asyncio.create_task(producer(queue))
    consumer_task = asyncio.create_task(consumer(queue))
    
    await producer_task
    await consumer_task

asyncio.run(main())
```

### Go

```go
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

### Batching

### Python

```python
async def process_batch(items):
    tasks = [process_item(item) for item in items]
    results = await asyncio.gather(*tasks)
    return results

async def process_item(item):
    await asyncio.sleep(0.1)
    return item * 2
```

### Go

```go
func processBatch(items []int) []int {
    var wg sync.WaitGroup
    results := make(chan int, len(items))
    
    for _, item := range items {
        wg.Add(1)
        go func(i int) {
            defer wg.Done()
            results <- i * 2
        }(item)
    }
    
    wg.Wait()
    close(results)
    
    var result []int
    for r := range results {
        result = append(result, r)
    }
    return result
}
```

### Rate Limiting

### Python

```python
async def rate_limited_request(url, rate_limiter):
    await rate_limiter.acquire()
    try:
        return await fetch_data(url)
    finally:
        rate_limiter.release()
```

### Go

```go
type RateLimiter struct {
    ticker *time.Ticker
}

func NewRateLimiter(rate time.Duration) *RateLimiter {
    return &RateLimiter{
        ticker: time.NewTicker(rate),
    }
}

func (rl *RateLimiter) Acquire() {
    <-rl.ticker.C
}

func (rl *RateLimiter) Stop() {
    rl.ticker.Stop()
}
```

### Circuit Breaker

### Python

```python
class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.last_failure_time = None
        self.state = "closed"
    
    async def call(self, func):
        if self.state == "open":
            try:
                result = await func()
                self.on_success()
                return result
            except Exception as e:
                self.on_failure()
                raise
        else:
            if time.time() - self.last_failure_time > self.timeout:
                self.state = "half-open"
                return await self.call(func)
            raise CircuitBreakerOpenError()
```

### Retry Pattern

### Python

```python
async def retry(func, max_attempts=3, delay=1):
    for attempt in range(max_attempts):
        try:
            return await func()
        except Exception as e:
            if attempt == max_attempts - 1:
                raise
            await asyncio.sleep(delay)
```

### Go

```go
func retry(fn func() error, maxAttempts int, delay time.Duration) error {
    var err error
    for i := 0; i < maxAttempts; i++ {
        if err = fn(); err == nil {
            return nil
        }
        time.Sleep(delay)
    }
    return err
}
```

### Async Iterators

### Python

```python
async def async_range(n):
    for i in range(n):
        await asyncio.sleep(0.1)
        yield i

async def main():
    async for i in async_range(10):
        print(i)

asyncio.run(main())
```

### Go

```go
func asyncRange(n int) <-chan int {
    ch := make(chan int)
    go func() {
        for i := 0; i < n; i++ {
            time.Sleep(100 * time.Millisecond)
            ch <- i
        }
        close(ch)
    }()
    return ch
}
```
