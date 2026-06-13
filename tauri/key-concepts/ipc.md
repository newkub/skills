# IPC (Inter-Process Communication)

## ภาพรวม

IPC คือ mechanism ที่ใช้สื่อสารระหว่าง frontend (JavaScript) และ backend (Rust) ใน Tauri applications

## วิธีการทำงาน

### Communication Flow

```
┌─────────────┐         IPC         ┌─────────────┐
│  Frontend   │ <───────────────> │   Backend   │
│ (JavaScript)│                   │   (Rust)    │
└─────────────┘                   └─────────────┘
       │                                 │
       │ invoke()                        │
       v                                 v
┌─────────────┐                   ┌─────────────┐
│  Tauri API  │                   │  Commands   │
└─────────────┘                   └─────────────┘
```

### Request-Response Pattern

```typescript
// Frontend
import { invoke } from '@tauri-apps/api/core'

const result = await invoke('greet', { name: 'World' })
console.log(result) // "Hello, World!"
```

```rust
// Backend
#[tauri::command]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}
```

## Command Definition

### Basic Command

```rust
#[tauri::command]
fn my_command(param: String) -> Result<String, String> {
    Ok(format!("Received: {}", param))
}
```

### Async Command

```rust
#[tauri::command]
async fn async_command() -> Result<String, String> {
    tokio::time::sleep(Duration::from_secs(1)).await;
    Ok("Async completed".to_string())
}
```

### Command with State

```rust
struct MyState {
    counter: Mutex<i32>,
}

#[tauri::command]
fn increment(state: State<MyState>) -> i32 {
    let mut counter = state.counter.lock().unwrap();
    *counter += 1;
    *counter
}
```

### Command with Window

```rust
#[tauri::command]
fn close_window(window: Window) {
    window.close().unwrap();
}
```

## Command Registration

### Register Commands

```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            my_command,
            async_command,
            increment
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### Custom Command Handler

```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(|cmd| {
            match cmd.name.as_str() {
                "greet" => {
                    let name = cmd.args.get("name").unwrap().as_str().unwrap();
                    Ok(format!("Hello, {}!", name))
                }
                _ => Err("Unknown command".to_string()),
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## Error Handling

### Rust Error Handling

```rust
#[tauri::command]
fn may_fail() -> Result<String, String> {
    match perform_operation() {
        Ok(result) => Ok(result),
        Err(e) => Err(e.to_string()),
    }
}
```

### Frontend Error Handling

```typescript
try {
  const result = await invoke('may_fail')
  console.log(result)
} catch (error) {
  console.error('Command failed:', error)
}
```

## Advanced Patterns

### 1. Streaming Data

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

### 2. Progress Reporting

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

### 3. Bidirectional Communication

```rust
#[tauri::command]
async fn bidirectional(window: Window) -> Result<(), String> {
    window.emit("server-message", "Hello from server")?;
    Ok(())
}
```

```typescript
import { listen } from '@tauri-apps/api/event'

await listen('server-message', (event) => {
  console.log('Server says:', event.payload)
})
```

## Performance Optimization

### 1. Batch Operations

```rust
#[tauri::command]
async fn batch_process(items: Vec<String>) -> Result<Vec<String>, String> {
    items.into_iter()
        .map(|item| process_item(item))
        .collect()
}
```

### 2. Caching

```rust
use std::collections::HashMap;

struct Cache {
    data: Mutex<HashMap<String, String>>,
}

#[tauri::command]
async fn cached_fetch(key: String, cache: State<Cache>) -> Result<String, String> {
    {
        let data = cache.data.lock().unwrap();
        if let Some(value) = data.get(&key) {
            return Ok(value.clone());
        }
    }
    
    let value = fetch_from_network(&key).await?;
    cache.data.lock().unwrap().insert(key.clone(), value.clone());
    Ok(value)
}
```

### 3. Debouncing

```typescript
let debounceTimer: number

function debouncedInvoke() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(async () => {
    await invoke('expensive_operation')
  }, 300)
}
```

## Security

### 1. Input Validation

```rust
#[tauri::command]
fn safe_command(input: String) -> Result<String, String> {
    if input.len() > 1000 {
        return Err("Input too long".to_string());
    }
    // Process input
    Ok("Success".to_string())
}
```

### 2. Permission Checks

```rust
#[tauri::command]
fn privileged_operation(window: Window) -> Result<String, String> {
    if !window.is_decorated() {
        return Err("Unauthorized".to_string());
    }
    // Perform operation
    Ok("Success".to_string())
}
```

### 3. Rate Limiting

```rust
use std::sync::Arc;
use std::time::{Duration, Instant};

struct RateLimiter {
    last_call: Arc<Mutex<Instant>>,
}

#[tauri::command]
async fn rate_limited_command(limiter: State<RateLimiter>) -> Result<String, String> {
    let mut last_call = limiter.last_call.lock().unwrap();
    let now = Instant::now();
    
    if now.duration_since(*last_call) < Duration::from_secs(1) {
        return Err("Rate limit exceeded".to_string());
    }
    
    *last_call = now;
    Ok("Success".to_string())
}
```

## Best Practices

### 1. Use Type-Safe Serialization

```rust
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct MyData {
    id: u32,
    name: String,
}

#[tauri::command]
fn typed_command(data: MyData) -> Result<String, String> {
    Ok(format!("Received: {}", data.name))
}
```

### 2. Keep Commands Focused

```rust
// Good: Single responsibility
#[tauri::command]
fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(path).map_err(|e| e.to_string())
}

// Bad: Multiple responsibilities
#[tauri::command]
fn read_and_process_and_save(path: String) -> Result<String, String> {
    // Too many operations
}
```

### 3. Document Commands

```rust
/// Reads a file from the file system
/// 
/// # Arguments
/// * `path` - The path to the file to read
/// 
/// # Returns
/// * `Result<String, String>` - The file content or error message
#[tauri::command]
fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(path).map_err(|e| e.to_string())
}
```

## Common Issues

### 1. Command Not Found

**Cause**: Command ไม่ได้ register

**Solution**: เพิ่ม command ใน `invoke_handler`

### 2. Type Mismatch

**Cause**: Data types ไม่ตรงกัน

**Solution**: ใช้ serde serialization และ validate types

### 3. Blocking Operations

**Cause**: Synchronous operations block UI

**Solution**: ใช้ async commands
