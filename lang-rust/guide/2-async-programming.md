# Async Programming in Rust

## Async/Await Fundamentals

### Basic Async Syntax
Understand the core async/await syntax:

```rust
use tokio::time::{sleep, Duration};

async fn simple_async_function() -> String {
    println!("Starting async function");
    sleep(Duration::from_millis(100)).await;
    println!("Async function completed");
    "Done".to_string()
}

#[tokio::main]
async fn main() {
    let result = simple_async_function().await;
    println!("Result: {}", result);
}
```

### Async Traits
Work with async in trait definitions:

```rust
use async_trait::async_trait;

#[async_trait]
trait Processor {
    async fn process(&self, data: &str) -> String;
}

struct TextProcessor;

#[async_trait]
impl Processor for TextProcessor {
    async fn process(&self, data: &str) -> String {
        format!("Processed: {}", data)
    }
}

async fn trait_example() {
    let processor = TextProcessor;
    let result = processor.process("hello").await;
    println!("{}", result);
}
```

## Concurrency Patterns

### Running Multiple Futures
Execute multiple async operations concurrently:

```rust
use tokio::time::{sleep, Duration};

async fn fetch_data(source: &str) -> String {
    println!("Fetching from {}", source);
    sleep(Duration::from_millis(100)).await;
    format!("Data from {}", source)
}

async fn concurrent_fetch() {
    let futures = vec![
        fetch_data("source1"),
        fetch_data("source2"),
        fetch_data("source3"),
    ];
    
    // Run all futures concurrently
    let results = futures::future::join_all(futures).await;
    
    for (i, result) in results.into_iter().enumerate() {
        println!("Result {}: {}", i + 1, result);
    }
}

async fn selective_fetch() {
    let future1 = fetch_data("source1");
    let future2 = fetch_data("source2");
    
    // Wait for the first to complete
    match futures::future::select(future1, future2).await {
        futures::future::Either::Left((result, _)) => {
            println!("First completed: {}", result);
        }
        futures::future::Either::Right((result, _)) => {
            println!("Second completed: {}", result);
        }
    }
}
```

### Error Handling in Async
Handle errors properly in async contexts:

```rust
use thiserror::Error;

#[derive(Error, Debug)]
enum AsyncError {
    #[error("Network error: {0}")]
    Network(String),
    #[error("Parse error: {0}")]
    Parse(String),
}

async fn fetch_with_error() -> Result<String, AsyncError> {
    // Simulate network operation
    tokio::time::sleep(Duration::from_millis(100)).await;
    
    // Simulate error
    Err(AsyncError::Network("Connection failed".to_string()))
}

async fn error_handling_example() {
    match fetch_with_error().await {
        Ok(data) => println!("Success: {}", data),
        Err(error) => println!("Error: {}", error),
    }
    
    // Use ? operator in async functions
    async fn process_data() -> Result<String, AsyncError> {
        let data = fetch_with_error().await?;
        Ok(format!("Processed: {}", data))
    }
}
```

## Async I/O Operations

### File Operations
Perform async file operations:

```rust
use tokio::fs;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

async fn async_file_operations() -> Result<(), Box<dyn std::error::Error>> {
    // Write to file asynchronously
    let mut file = fs::File::create("async_data.txt").await?;
    file.write_all(b"Hello, async world!").await?;
    file.flush().await?;
    
    // Read from file asynchronously
    let mut file = fs::File::open("async_data.txt").await?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    
    println!("File contents: {}", contents);
    
    Ok(())
}
```

### Network Operations
Create async network clients:

```rust
use reqwest;

async fn fetch_url(url: &str) -> Result<String, reqwest::Error> {
    let response = reqwest::get(url).await?;
    let body = response.text().await?;
    Ok(body)
}

async fn network_example() -> Result<(), Box<dyn std::error::Error>> {
    let url = "https://httpbin.org/get";
    let response = fetch_url(url).await?;
    println!("Response: {}", response);
    Ok(())
}
```

### TCP Server
Build an async TCP server:

```rust
use tokio::net::{TcpListener, TcpStream};
use tokio::io::{AsyncReadExt, AsyncWriteExt};

async fn handle_client(mut stream: TcpStream) -> Result<(), Box<dyn std::error::Error>> {
    let mut buffer = [0; 1024];
    
    loop {
        let bytes_read = stream.read(&mut buffer).await?;
        
        if bytes_read == 0 {
            break;
        }
        
        let response = format!("Echo: {}", String::from_utf8_lossy(&buffer[..bytes_read]));
        stream.write_all(response.as_bytes()).await?;
    }
    
    Ok(())
}

async fn tcp_server() -> Result<(), Box<dyn std::error::Error>> {
    let listener = TcpListener::bind("127.0.0.1:8080").await?;
    
    println!("Server listening on 127.0.0.1:8080");
    
    loop {
        let (stream, addr) = listener.accept().await?;
        println!("New connection from: {}", addr);
        
        tokio::spawn(async move {
            if let Err(e) = handle_client(stream).await {
                eprintln!("Error handling client: {}", e);
            }
        });
    }
}
```

## Streams and Iterators

### Async Streams
Work with streams of data:

```rust
use futures::stream::{self, StreamExt};

async fn stream_example() {
    let numbers = stream::iter(1..=10);
    
    let processed = numbers
        .map(|x| x * 2)
        .filter(|&x| x > 10)
        .collect::<Vec<_>>()
        .await;
    
    println!("Processed numbers: {:?}", processed);
}

async fn infinite_stream() {
    let mut counter = 0;
    let stream = stream::unfold((), move |_| {
        counter += 1;
        async move {
            if counter <= 5 {
                Some((counter, ()))
            } else {
                None
            }
        }
    });
    
    stream.for_each(|num| async move {
        println!("Stream item: {}", num);
    }).await;
}
```

### Async Iterators
Create custom async iterators:

```rust
use futures::stream::{Stream, StreamExt};

struct AsyncCounter {
    current: u32,
    max: u32,
}

impl AsyncCounter {
    fn new(max: u32) -> Self {
        Self { current: 0, max }
    }
}

impl Stream for AsyncCounter {
    type Item = u32;
    
    fn poll_next(
        mut self: std::pin::Pin<&mut Self>,
        _cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Option<Self::Item>> {
        if self.current < self.max {
            let current = self.current;
            self.current += 1;
            std::task::Poll::Ready(Some(current))
        } else {
            std::task::Poll::Ready(None)
        }
    }
}

async fn custom_stream_example() {
    let counter = AsyncCounter::new(5);
    
    counter.for_each(|num| async move {
        println!("Counter: {}", num);
    }).await;
}
```

## Advanced Patterns

### Cancellation
Handle cancellation gracefully:

```rust
use tokio_util::sync::CancellationToken;
use tokio::time::{sleep, Duration};

async fn cancellable_operation(token: CancellationToken) -> Result<String, &'static str> {
    tokio::select! {
        _ = token.cancelled() => {
            println!("Operation cancelled");
            Err("Operation cancelled")
        },
        result = long_running_operation() => {
            println!("Operation completed");
            Ok(result)
        }
    }
}

async fn long_running_operation() -> String {
    for i in 1..=10 {
        println!("Working... {}", i);
        sleep(Duration::from_millis(500)).await;
    }
    "Done".to_string()
}

async fn cancellation_example() {
    let token = CancellationToken::new();
    let token_clone = token.clone();
    
    // Start operation
    let operation_handle = tokio::spawn(async move {
        cancellable_operation(token_clone).await
    });
    
    // Cancel after 2 seconds
    tokio::spawn(async move {
        sleep(Duration::from_secs(2)).await;
        token.cancel();
    });
    
    match operation_handle.await.unwrap() {
        Ok(result) => println!("Success: {}", result),
        Err(error) => println!("Error: {}", error),
    }
}
```

### Timeout Handling
Implement timeouts for async operations:

```rust
use tokio::time::timeout;

async fn with_timeout() -> Result<String, Box<dyn std::error::Error>> {
    let operation = async {
        sleep(Duration::from_secs(3)).await;
        "Operation completed".to_string()
    };
    
    match timeout(Duration::from_secs(2), operation).await {
        Ok(result) => {
            println!("Operation succeeded: {}", result);
            Ok(result)
        }
        Err(_) => {
            println!("Operation timed out");
            Err("Operation timed out".into())
        }
    }
}
```

### Resource Management
Manage resources in async contexts:

```rust
use tokio::sync::Semaphore;

async fn resource_management() {
    let semaphore = Arc::new(Semaphore::new(3)); // Limit to 3 concurrent operations
    let mut handles = vec![];
    
    for i in 0..10 {
        let semaphore_clone = Arc::clone(&semaphore);
        let handle = tokio::spawn(async move {
            let _permit = semaphore_clone.acquire().await.unwrap();
            
            println!("Task {} started", i);
            sleep(Duration::from_millis(1000)).await;
            println!("Task {} completed", i);
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.await.unwrap();
    }
}
```

## Performance Optimization

### Buffering and Batching
Optimize async operations with buffering:

```rust
use futures::stream::{self, StreamExt};

async fn buffered_processing() {
    let items = stream::iter(1..=100);
    
    let processed = items
        .map(|i| async move {
            // Simulate async work
            tokio::time::sleep(Duration::from_millis(10)).await;
            i * 2
        })
        .buffer_unordered(10) // Process up to 10 items concurrently
        .collect::<Vec<_>>()
        .await;
    
    println!("Processed {} items", processed.len());
}
```

### Connection Pooling
Reuse connections efficiently:

```rust
use tokio::sync::Mutex;
use std::collections::VecDeque;

struct ConnectionPool {
    connections: Arc<Mutex<VecDeque<String>>>,
}

impl ConnectionPool {
    fn new() -> Self {
        let connections = Arc::new(Mutex::new(VecDeque::new()));
        Self { connections }
    }
    
    async fn get_connection(&self) -> String {
        let mut connections = self.connections.lock().await;
        
        if let Some(conn) = connections.pop_front() {
            conn
        } else {
            // Create new connection
            format!("connection_{}", rand::random::<u32>())
        }
    }
    
    async fn return_connection(&self, conn: String) {
        let mut connections = self.connections.lock().await;
        connections.push_back(conn);
    }
}

async fn connection_pool_example() {
    let pool = Arc::new(ConnectionPool::new());
    let mut handles = vec![];
    
    for i in 0..5 {
        let pool_clone = Arc::clone(&pool);
        let handle = tokio::spawn(async move {
            let conn = pool_clone.get_connection().await;
            println!("Task {} using {}", i, conn);
            
            // Simulate work
            tokio::time::sleep(Duration::from_millis(100)).await;
            
            pool_clone.return_connection(conn).await;
        });
        handles.push(handle);
    }
    
    for handle in handles {
        handle.await.unwrap();
    }
}
```

## Best Practices

1. **Use tokio for most async applications** - Most mature ecosystem
2. **Handle errors properly** - Use Result types consistently
3. **Implement cancellation** - Make operations cancellable
4. **Use timeouts** - Prevent hanging operations
5. **Limit concurrency** - Use semaphores and buffering
6. **Profile async code** - Use tools to identify bottlenecks
7. **Choose appropriate runtime** - Single-threaded vs multi-threaded
8. **Test async code** - Use async test frameworks
