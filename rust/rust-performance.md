---
trigger: manual
description: ปรับปรุง performance สำหรับ Rust project
instruction:
  - จัดการ memory
  - ใช้ async patterns
  - ใช้ data structures ที่เหมาะสม
condition:
  - ใช้เมื่อ optimize performance
---

# Performance Guidelines

## 1. Memory Management

### 1.1 Use Box for Large Types

```rust
// ❌ ผิด - large struct on stack
struct LargeData {
    data: [u8; 10000],
}

// ✅ ถูกต้อง - large struct on heap
struct LargeData {
    data: Box<[u8; 10000]>,
}
```

### 1.2 Use Cow for Strings

```rust
use std::borrow::Cow;

pub fn process_string(s: &str) -> Cow<str> {
    if s.contains(' ') {
        // Need to modify - return owned
        Cow::Owned(s.replace(' ', "_"))
    } else {
        // No modification - return borrowed
        Cow::Borrowed(s)
    }
}
```

### 1.3 Avoid Unnecessary Clones

```rust
// ❌ ผิด
fn process(user: User) -> String {
    user.name.clone()
}

// ✅ ถูกต้อง
fn process(user: &User) -> &str {
    &user.name
}
```

## 2. Async Patterns

### 2.1 Use Tokio Spawn Carefully

```rust
// ❌ ผิด - task leak
async fn process_items(items: Vec<Item>) {
    for item in items {
        tokio::spawn(async move {
            process_item(item).await;
        });
    }
}

// ✅ ถูกต้อง - collect handles
async fn process_items(items: Vec<Item>) -> Result<()> {
    let handles: Vec<_> = items
        .into_iter()
        .map(|item| tokio::spawn(process_item(item)))
        .collect();

    for handle in handles {
        handle.await??;
    }
    Ok(())
}
```

### 2.2 Use Semaphore for Rate Limiting

```rust
use tokio::sync::Semaphore;

async fn process_concurrently(items: Vec<Item>) -> Result<()> {
    let semaphore = Arc::new(Semaphore::new(10)); // Max 10 concurrent
    let mut handles = Vec::new();

    for item in items {
        let permit = semaphore.clone().acquire_owned().await?;
        handles.push(tokio::spawn(async move {
            let _permit = permit;
            process_item(item).await
        }));
    }

    for handle in handles {
        handle.await??;
    }
    Ok(())
}
```

### 2.3 Use Timeout for External Calls

```rust
use tokio::time::{timeout, Duration};

async fn fetch_data(url: &str) -> Result<Data> {
    timeout(
        Duration::from_secs(30),
        reqwest::get(url).await?
    )
    .await
    .map_err(|_| AppError::ServiceError {
        service: "HTTP".to_string(),
        source: anyhow!("Request timeout"),
    })?
    .json()
    .await
    .map_err(|e| AppError::Other(e.into()))
}
```

## 3. Data Structures

### 3.1 Choose Right Collection

```rust
// Fast lookup - use HashMap
let users: HashMap<String, User> = HashMap::new();

// Unique items - use HashSet
let ids: HashSet<String> = HashSet::new();

// Ordered - use BTreeMap/BTreeSet
let sorted: BTreeMap<String, User> = BTreeMap::new();

// Small fixed size - use Array
let buffer: [u8; 1024] = [0; 1024];
```

### 3.2 Use Vec for Dynamic Arrays

```rust
// ❌ ผิด - reallocation
let mut items = Vec::new();
for i in 0..1000 {
    items.push(i);
}

// ✅ ถูกต้อง - pre-allocate
let mut items = Vec::with_capacity(1000);
for i in 0..1000 {
    items.push(i);
}
```

## 4. Iterators

### 4.1 Prefer Iterators Over Loops

```rust
// ❌ ผิด
let mut sum = 0;
for item in items {
    sum += item.value;
}

// ✅ ถูกต้อง
let sum: i32 = items.iter().map(|item| item.value).sum();
```

### 4.2 Use collect Efficiently

```rust
// ❌ ผิด - multiple allocations
let mut result = Vec::new();
for item in items {
    result.push(process(item));
}

// ✅ ถูกต้อง - single allocation
let result: Vec<_> = items
    .into_iter()
    .map(process)
    .collect();
```

## 5. String Handling

### 5.1 Use &str for Borrowed Strings

```rust
// ❌ ผิด
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

// ✅ ถูกต้อง
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

### 5.2 Use String for Owned Strings

```rust
// ✅ ถูกต้อง - need ownership
fn format_name(first: &str, last: &str) -> String {
    format!("{} {}", first, last)
}
```

## 6. Benchmarking

### 6.1 Write Benchmarks

```rust
// benches/performance.rs
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 1,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("fib 20", |b| b.iter(|| fibonacci(black_box(20))));
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
```

### 6.2 Run Benchmarks

```bash
cargo bench
```

## 7. Profiling

### 7.1 Use flamegraph

```bash
cargo install flamegraph
cargo flamegraph
```

### 7.2 Use perf (Linux)

```bash
cargo build --release
perf record -g ./target/release/my-app
perf report
```
