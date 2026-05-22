# Rust Performance

## Why

Rust provides zero-cost abstractions and performance comparable to C/C++. Following performance best practices ensures your code runs efficiently while maintaining safety.

## Anti-patterns

- Unnecessary allocations and cloning
- Inefficient data structures for the use case
- Ignoring compiler optimizations
- Premature optimization without profiling
- Blocking I/O in performance-critical paths

## Best Practices

Write idiomatic Rust code, leverage zero-cost abstractions, and profile before optimizing.

## Rules

### 1. Prefer Stack Allocation

Use stack allocation whenever possible:

```rust
// Good - stack allocation
fn process_data() {
    let data = [1u8; 1024]; // Stack allocation
    let mut result = [0u8; 1024];

    for i in 0..data.len() {
        result[i] = data[i] * 2;
    }
}

// Bad - unnecessary heap allocation
fn process_data_heap() {
    let data = vec![1u8; 1024]; // Heap allocation
    let mut result = vec![0u8; 1024]; // Heap allocation

    for i in 0..data.len() {
        result[i] = data[i] * 2;
    }
}
```

### 2. Use Iterators and Functional Style

Leverage zero-cost iterator abstractions:

```rust
// Good - iterator chain
fn process_numbers(numbers: &[i32]) -> Vec<i32> {
    numbers
        .iter()
        .filter(|&&n| n > 0)
        .map(|&n| n * 2)
        .collect()
}

// Bad - manual loop with allocations
fn process_numbers_manual(numbers: &[i32]) -> Vec<i32> {
    let mut result = Vec::new();
    for &n in numbers {
        if n > 0 {
            result.push(n * 2);
        }
    }
    result
}
```

### 3. Pre-allocate When Size is Known

Use with_capacity to avoid reallocations:

```rust
// Good - pre-allocate
fn build_string(parts: &[&str]) -> String {
    let total_len: usize = parts.iter().map(|s| s.len()).sum();
    let mut result = String::with_capacity(total_len);

    for part in parts {
        result.push_str(part);
    }

    result
}

// Bad - multiple reallocations
fn build_string_slow(parts: &[&str]) -> String {
    let mut result = String::new();

    for part in parts {
        result.push_str(part); // May cause reallocations
    }

    result
}
```

### 4. Use Appropriate Data Structures

Choose data structures based on access patterns:

```rust
// Good - appropriate data structures
use std::collections::{HashMap, HashSet, VecDeque};

fn efficient_data_structures() {
    // Fast lookups by key
    let mut user_scores = HashMap::new();
    user_scores.insert("alice", 100);
    user_scores.insert("bob", 85);

    // Fast membership testing
    let mut allowed_users = HashSet::new();
    allowed_users.insert("alice");
    allowed_users.insert("charlie");

    // Efficient queue operations
    let mut task_queue = VecDeque::new();
    task_queue.push_back("task1");
    task_queue.push_back("task2");
    task_queue.push_front("urgent_task");
}

// Bad - inefficient data structure choices
fn inefficient_structures() {
    // Using Vec for key-value lookups - O(n) instead of O(1)
    let mut user_scores = vec![("alice", 100), ("bob", 85)];

    // Linear search for user
    let alice_score = user_scores.iter()
        .find(|(name, _)| *name == "alice")
        .map(|(_, score)| *score);
}
```

### 5. Use Cow for Conditional Ownership

Use Clone-on-Write to avoid unnecessary allocations:

```rust
use std::borrow::Cow;

// Good - conditional ownership
fn process_text(text: &str) -> Cow<str> {
    if text.is_ascii() {
        // No allocation needed
        Cow::Borrowed(text)
    } else {
        // Allocate only when necessary
        Cow::Owned(text.to_uppercase())
    }
}

// Bad - always allocates
fn process_text_always_alloc(text: &str) -> String {
    text.to_uppercase() // Always allocates
}
```

### 6. Leverage SIMD and Vectorization

Write code that enables auto-vectorization:

```rust
// Good - enables SIMD
fn process_array_simd(data: &[f32]) -> Vec<f32> {
    data.iter()
        .map(|&x| x * 2.0 + 1.0)
        .collect()
}

// Good - explicit SIMD for critical paths
#[cfg(target_arch = "x86_64")]
fn process_array_explicit_simd(data: &[f32]) -> Vec<f32> {
    use std::arch::x86_64::*;

    let mut result = vec![0.0f32; data.len()];
    let chunks = data.chunks_exact(8);

    for (chunk, result_chunk) in chunks.zip(result.chunks_exact_mut(8)) {
        unsafe {
            let input = _mm256_loadu_ps(chunk.as_ptr());
            let multiplier = _mm256_set1_ps(2.0);
            let addend = _mm256_set1_ps(1.0);
            let multiplied = _mm256_mul_ps(input, multiplier);
            let result_vec = _mm256_add_ps(multiplied, addend);
            _mm256_storeu_ps(result_chunk.as_mut_ptr(), result_vec);
        }
    }

    result
}
```

### 7. Use Async for I/O-Bound Operations

Use async/await for non-blocking I/O:

```rust
// Good - async I/O
use tokio::fs;
use tokio::time::{sleep, Duration};

async fn fetch_multiple_files() -> Result<Vec<String>, Box<dyn std::error::Error>> {
    let futures = vec![
        fs::read_to_string("file1.txt"),
        fs::read_to_string("file2.txt"),
        fs::read_to_string("file3.txt"),
    ];

    // Run all file reads concurrently
    let results = futures::future::try_join_all(futures).await?;
    Ok(results)
}

// Bad - blocking I/O
fn fetch_multiple_files_blocking() -> Result<Vec<String>, Box<dyn std::error::Error>> {
    let mut results = Vec::new();

    // Sequential blocking reads
    results.push(std::fs::read_to_string("file1.txt")?);
    results.push(std::fs::read_to_string("file2.txt")?);
    results.push(std::fs::read_to_string("file3.txt")?);

    Ok(results)
}
```

### 8. Optimize Hot Paths with Profiling

Profile before optimizing:

```rust
// Use criterion for benchmarking
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 1,
        1 => 1,
        n => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

fn fibonacci_iterative(n: u64) -> u64 {
    let mut a = 1;
    let mut b = 1;

    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }

    b
}

fn bench_fibonacci(c: &mut Criterion) {
    c.bench_function("fibonacci_recursive", |b| {
        b.iter(|| fibonacci(black_box(20)))
    });

    c.bench_function("fibonacci_iterative", |b| {
        b.iter(|| fibonacci_iterative(black_box(20)))
    });
}

criterion_group!(benches, bench_fibonacci);
criterion_main!(benches);
```

### 9. Use Release Profile Optimizations

Configure release builds for maximum performance:

```toml
# Cargo.toml
[profile.release]
lto = true              # Link-time optimization
codegen-units = 1       # Better optimization
panic = "abort"         # Smaller binary
strip = true            # Remove debug symbols
opt-level = 3           # Maximum optimization

[profile.bench]
debug = true            # Keep debug info for profiling
```

### 10. Avoid Unnecessary Cloning

Use references and borrowing to avoid clones:

```rust
// Good - avoid cloning
struct User {
    id: u64,
    name: String,
}

fn display_user(user: &User) {
    println!("User {}: {}", user.id, user.name);
}

// Bad - unnecessary cloning
fn display_user_bad(user: User) {
    println!("User {}: {}", user.id, user.name);
} // user is dropped here, potentially expensive
```

## Impact

Poor performance practices lead to:

- Unnecessary memory allocations
- Inefficient algorithms and data structures
- Poor cache locality
- Blocked I/O operations
- Wasted CPU cycles

## References

- [The Rust Performance Book](https://nnethercote.github.io/perf-book/)
- [The Rust Book - Chapter 20: Advanced Features](https://doc.rust-lang.org/book/ch20-00-advanced-features.html)
- [Tokio Performance Guide](https://tokio.rs/tokio/tutorial/performance)
