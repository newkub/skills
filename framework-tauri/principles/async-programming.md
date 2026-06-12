# Async Programming

## ภาพรวม

Async programming ใช้สำหรับ operations ที่ใช้เวลา เช่น I/O, network calls, และ file operations โดยไม่ block main thread

## Rust Async

### 1. Async Functions

```rust
async fn fetch_data() -> Result<String, Error> {
    // Async operation
    Ok("Data".to_string())
}
```

### 2. Async Await

```rust
#[tauri::command]
async fn process_data() -> Result<String, String> {
    let data = fetch_data().await.map_err(|e| e.to_string())?;
    Ok(data)
}
```

### 3. Spawn Tasks

```rust
use tokio::task;

#[tauri::command]
async fn background_task() -> Result<String, String> {
    task::spawn(async move {
        // Background work
        "Completed".to_string()
    }).await.map_err(|e| e.to_string())
}
```

### 4. Concurrent Operations

```rust
async fn fetch_multiple() -> Result<Vec<String>, Error> {
    let (a, b, c) = tokio::join!(
        fetch_data_a(),
        fetch_data_b(),
        fetch_data_c()
    );
    
    Ok(vec![a?, b?, c?])
}
```

### 5. Timeout Handling

```rust
use tokio::time::{timeout, Duration};

async fn with_timeout() -> Result<String, String> {
    match timeout(Duration::from_secs(5), fetch_data()).await {
        Ok(result) => result.map_err(|e| e.to_string()),
        Err(_) => Err("Timeout".to_string()),
    }
}
```

## JavaScript Async

### 1. Async/Await

```typescript
async function fetchData(): Promise<string> {
  const response = await fetch('https://api.example.com')
  const data = await response.json()
  return data
}
```

### 2. Promise Chaining

```typescript
fetch('https://api.example.com')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

### 3. Parallel Operations

```typescript
async function fetchMultiple() {
  const [a, b, c] = await Promise.all([
    fetchDataA(),
    fetchDataB(),
    fetchDataC()
  ])
  return [a, b, c]
}
```

### 4. Race Conditions

```typescript
async function raceOperations() {
  const result = await Promise.race([
    fetchWithTimeout(),
    fetchWithFallback()
  ])
  return result
}
```

## Async IPC

### 1. Async Commands

```rust
#[tauri::command]
async fn async_command() -> Result<String, String> {
    tokio::time::sleep(Duration::from_secs(1)).await;
    Ok("Async completed".to_string())
}
```

```typescript
const result = await invoke('async_command')
console.log(result)
```

### 2. Streaming Results

```rust
use tauri::Emitter;

#[tauri::command]
async fn stream_data(app: AppHandle) -> Result<(), String> {
    for i in 0..10 {
        app.emit("data-chunk", i).map_err(|e| e.to_string())?;
        tokio::time::sleep(Duration::from_millis(100)).await;
    }
    Ok(())
}
```

```typescript
import { listen } from '@tauri-apps/api/event'

const unlisten = await listen('data-chunk', (event) => {
  console.log('Received:', event.payload)
})
```

### 3. Progress Reporting

```rust
#[tauri::command]
async fn long_task(app: AppHandle) -> Result<String, String> {
    for i in 0..100 {
        app.emit("progress", i).map_err(|e| e.to_string())?;
        tokio::time::sleep(Duration::from_millis(50)).await;
    }
    Ok("Completed".to_string())
}
```

```typescript
import { listen } from '@tauri-apps/api/event'

await listen('progress', (event) => {
  console.log('Progress:', event.payload, '%')
})
```

## Async Patterns

### 1. Producer-Consumer

```rust
use tokio::sync::mpsc;

#[tauri::command]
async fn producer_consumer() -> Result<(), String> {
    let (tx, mut rx) = mpsc::channel(100);
    
    // Producer
    tokio::spawn(async move {
        for i in 0..10 {
            tx.send(i).await.unwrap();
        }
    });
    
    // Consumer
    while let Some(value) = rx.recv().await {
        println!("Received: {}", value);
    }
    
    Ok(())
}
```

### 2. Worker Pool

```rust
use tokio::sync::Semaphore;

#[tauri::command]
async fn worker_pool() -> Result<(), String> {
    let semaphore = Arc::new(Semaphore::new(4)); // 4 workers
    
    let tasks: Vec<_> = (0..10)
        .map(|i| {
            let semaphore = semaphore.clone();
            tokio::spawn(async move {
                let _permit = semaphore.acquire().await.unwrap();
                // Do work
                i
            })
        })
        .collect();
    
    for task in tasks {
        task.await.map_err(|e| e.to_string())?;
    }
    
    Ok(())
}
```

### 3. Cancellation

```rust
use tokio_util::sync::CancellationToken;

#[tauri::command]
async fn cancellable_task(token: CancellationToken) -> Result<String, String> {
    for i in 0..100 {
        if token.is_cancelled() {
            return Err("Cancelled".to_string());
        }
        tokio::time::sleep(Duration::from_millis(100)).await;
    }
    Ok("Completed".to_string())
}
```

## Error Handling

### 1. Rust Async Errors

```rust
async fn may_fail() -> Result<String, Error> {
    match perform_operation().await {
        Ok(result) => Ok(result),
        Err(e) => Err(e),
    }
}
```

### 2. JavaScript Async Errors

```typescript
try {
  const result = await fetchData()
  console.log(result)
} catch (error) {
  console.error('Error:', error)
}
```

### 3. Combined Error Handling

```rust
#[tauri::command]
async fn safe_operation() -> Result<String, String> {
    match async_operation().await {
        Ok(result) => Ok(result),
        Err(e) => Err(format!("Operation failed: {}", e)),
    }
}
```

```typescript
try {
  const result = await invoke('safe_operation')
  console.log(result)
} catch (error) {
  console.error('IPC error:', error)
}
```

## Performance Considerations

### 1. Avoid Blocking

```rust
// Bad: Blocking
#[tauri::command]
fn blocking_operation() -> String {
    std::thread::sleep(Duration::from_secs(5));
    "Done".to_string()
}

// Good: Async
#[tauri::command]
async fn async_operation() -> String {
    tokio::time::sleep(Duration::from_secs(5)).await;
    "Done".to_string()
}
```

### 2. Use Async I/O

```rust
// Bad: Blocking I/O
let content = fs::read_to_string("file.txt")?;

// Good: Async I/O
let content = tokio::fs::read_to_string("file.txt").await?;
```

### 3. Batch Operations

```rust
// Bad: Sequential
for item in items {
    process(item).await?;
}

// Good: Parallel
let results = futures::future::join_all(
    items.into_iter().map(|item| process(item))
).await?;
```

## Best Practices

### 1. Use Async for I/O

```rust
// File operations
async fn read_file(path: &str) -> Result<String, Error> {
    tokio::fs::read_to_string(path).await.map_err(Into::into)
}

// Network operations
async fn fetch_url(url: &str) -> Result<String, Error> {
    reqwest::get(url).await?.text().await.map_err(Into::into)
}
```

### 2. Handle Timeouts

```rust
async fn with_timeout<T, E>(
    future: impl Future<Output = Result<T, E>>,
    duration: Duration
) -> Result<T, String>
where
    E: std::fmt::Display,
{
    timeout(duration, future)
        .await
        .map_err(|_| "Timeout".to_string())?
        .map_err(|e| e.to_string())
}
```

### 3. Cancel Long Operations

```rust
use tokio_util::sync::CancellationToken;

let token = CancellationToken::new();
let child_token = token.child_token();

// Cancel operation
token.cancel();
```

### 4. Resource Cleanup

```rust
async fn with_cleanup() -> Result<String, Error> {
    let resource = acquire_resource().await?;
    
    scopeguard::guard!(resource, |r| {
        // Cleanup on scope exit
        release_resource(r);
    });
    
    // Use resource
    Ok("Success".to_string())
}
```

## Common Issues

### 1. Deadlocks

```rust
// Bad: Potential deadlock
let (tx, mut rx) = mpsc::channel(1);
tx.send(1).await?;
let value = rx.recv().await?;

// Good: Use buffer or separate tasks
let (tx, mut rx) = mpsc::channel(100);
tokio::spawn(async move {
    tx.send(1).await.unwrap();
});
let value = rx.recv().await?;
```

### 2. Memory Leaks

```rust
// Bad: Unbounded channels
let (tx, rx) = mpsc::unbounded_channel();

// Good: Bounded channels
let (tx, rx) = mpsc::channel(100);
```

### 3. Race Conditions

```rust
// Bad: Shared state without synchronization
let counter = Arc::new(Mutex::new(0));

// Good: Proper synchronization
let counter = Arc::new(Mutex::new(0));
let mut guard = counter.lock().await;
*guard += 1;
drop(guard);
```

## Testing Async Code

### 1. Rust Async Tests

```rust
#[tokio::test]
async fn test_async_function() {
    let result = async_function().await;
    assert_eq!(result, "expected");
}
```

### 2. JavaScript Async Tests

```typescript
test('async function', async () => {
  const result = await asyncFunction()
  expect(result).toBe('expected')
})
```

### 3. Mock Async Operations

```rust
#[cfg(test)]
mod tests {
    use super::*;
    
    #[tokio::test]
    async fn test_with_mock() {
        let mock_data = "mock data";
        let result = process_data(mock_data).await;
        assert!(result.is_ok());
    }
}
```
