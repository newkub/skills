# Rust Concurrency

## Why

Rust's concurrency model prevents data races at compile time while providing high-performance parallelism. Proper concurrent programming is essential for modern multi-core systems.

## Anti-patterns

- Using shared mutable state without proper synchronization
- Blocking operations in async contexts
- Ignoring deadlock possibilities
- Over-synchronization causing performance bottlenecks
- Mixing sync and async code improperly

## Best Practices

Leverage Rust's ownership system for fearless concurrency, choose appropriate synchronization primitives, and use async/await for I/O-bound operations.

## Rules

### 1. Use Ownership for Thread Safety

Leverage Rust's ownership to prevent data races:

```rust
use std::thread;

// Good - each thread owns its data
fn thread_safety_example() {
    let data = vec![1, 2, 3, 4, 5];

    let handle = thread::spawn(move || {
        // data is moved into this thread
        let sum: i32 = data.iter().sum();
        sum
    });

    let result = handle.join().unwrap();
    println!("Sum: {}", result);
}

// Bad - attempting to share data without synchronization
fn thread_safety_bad() {
    let data = vec![1, 2, 3, 4, 5];

    let handle = thread::spawn(|| {
        // Error: data can't be accessed from multiple threads
        let sum: i32 = data.iter().sum(); // Compile error
        sum
    });
}
```

### 2. Use Arc for Shared Immutable Data

Share data across threads with Arc:

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn shared_data_example() {
    let data = Arc::new(vec![1, 2, 3, 4, 5]);
    let mut handles = vec![];

    for i in 0..3 {
        let data_clone = Arc::clone(&data);
        let handle = thread::spawn(move || {
            let sum: i32 = data_clone.iter().sum();
            println!("Thread {} sum: {}", i, sum);
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
```

### 3. Use Mutex for Shared Mutable Data

Protect shared mutable state with Mutex:

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn shared_mutable_state() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..1000 {
                let mut num = counter_clone.lock().unwrap();
                *num += 1;
            } // Lock is automatically released here
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final count: {}", *counter.lock().unwrap());
}
```

### 4. Use Atomic Types for Simple Shared State

Use atomic operations for lock-free programming:

```rust
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::Arc;
use std::thread;

fn atomic_counter() {
    let counter = Arc::new(AtomicU64::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            for _ in 0..1000 {
                counter_clone.fetch_add(1, Ordering::SeqCst);
            }
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final count: {}", counter.load(Ordering::SeqCst));
}
```

### 5. Use Channels for Message Passing

Prefer message passing over shared memory:

```rust
use std::sync::mpsc;
use std::thread;

fn message_passing() {
    let (sender, receiver) = mpsc::channel();
    let mut handles = vec![];

    // Producer threads
    for i in 0..3 {
        let sender_clone = sender.clone();
        let handle = thread::spawn(move || {
            for j in 0..5 {
                let message = format!("Thread {} message {}", i, j);
                sender_clone.send(message).unwrap();
                thread::sleep(std::time::Duration::from_millis(100));
            }
        });
        handles.push(handle);
    }

    drop(sender); // Close sender when done

    // Consumer
    let consumer_handle = thread::spawn(move || {
        for received in receiver {
            println!("Received: {}", received);
        }
    });

    for handle in handles {
        handle.join().unwrap();
    }

    consumer_handle.join().unwrap();
}
```

### 6. Use Async/Await for I/O-Bound Operations

Use async for non-blocking I/O:

```rust
use tokio::time::{sleep, Duration};

async fn async_operations() {
    let futures = vec![
        fetch_data("source1"),
        fetch_data("source2"),
        fetch_data("source3"),
    ];

    // Run all operations concurrently
    let results = futures::future::join_all(futures).await;

    for (i, result) in results.into_iter().enumerate() {
        println!("Source {} result: {}", i + 1, result);
    }
}

async fn fetch_data(source: &str) -> String {
    sleep(Duration::from_millis(100)).await;
    format!("Data from {}", source)
}

#[tokio::main]
async fn main() {
    async_operations().await;
}
```

### 7. Use Tokio for Async Runtime

Set up proper async runtime:

```toml
# Cargo.toml
[dependencies]
tokio = { version = "1.0", features = ["full"] }
futures = "0.3"
```

```rust
use tokio::sync::{RwLock, Semaphore};
use std::sync::Arc;

async fn async_shared_state() {
    let data = Arc::new(RwLock::new(vec![1, 2, 3, 4, 5]));
    let semaphore = Arc::new(Semaphore::new(3)); // Limit concurrent access

    let mut handles = vec![];

    for i in 0..10 {
        let data_clone = Arc::clone(&data);
        let semaphore_clone = Arc::clone(&semaphore);

        let handle = tokio::spawn(async move {
            let _permit = semaphore_clone.acquire().await.unwrap();

            // Read lock for reading
            {
                let data_read = data_clone.read().await;
                println!("Task {} read: {:?}", i, *data_read);
            }

            tokio::time::sleep(Duration::from_millis(100)).await;

            // Write lock for modification
            {
                let mut data_write = data_clone.write().await;
                data_write.push(i as i32);
                println!("Task {} wrote: {}", i, i);
            }
        });

        handles.push(handle);
    }

    for handle in handles {
        handle.await.unwrap();
    }

    println!("Final data: {:?}", *data.read().await);
}
```

### 8. Avoid Deadlocks

Be careful with lock ordering to prevent deadlocks:

```rust
use std::sync::{Arc, Mutex};
use std::thread;

// Bad - potential deadlock
fn potential_deadlock() {
    let mutex1 = Arc::new(Mutex::new(0));
    let mutex2 = Arc::new(Mutex::new(0));

    let m1_clone = Arc::clone(&mutex1);
    let m2_clone = Arc::clone(&mutex2);

    let handle1 = thread::spawn(move || {
        let _lock1 = m1_clone.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(100));
        let _lock2 = m2_clone.lock().unwrap(); // Potential deadlock
    });

    let m1_clone = Arc::clone(&mutex1);
    let m2_clone = Arc::clone(&mutex2);

    let handle2 = thread::spawn(move || {
        let _lock2 = m2_clone.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(100));
        let _lock1 = m1_clone.lock().unwrap(); // Potential deadlock
    });

    handle1.join().unwrap();
    handle2.join().unwrap();
}

// Good - consistent lock ordering
fn avoid_deadlock() {
    let mutex1 = Arc::new(Mutex::new(0));
    let mutex2 = Arc::new(Mutex::new(0));

    let m1_clone = Arc::clone(&mutex1);
    let m2_clone = Arc::clone(&mutex2);

    let handle1 = thread::spawn(move || {
        // Always acquire locks in the same order
        let _lock1 = m1_clone.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(100));
        let _lock2 = m2_clone.lock().unwrap();
    });

    let m1_clone = Arc::clone(&mutex1);
    let m2_clone = Arc::clone(&mutex2);

    let handle2 = thread::spawn(move || {
        // Same lock order as thread 1
        let _lock1 = m1_clone.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(100));
        let _lock2 = m2_clone.lock().unwrap();
    });

    handle1.join().unwrap();
    handle2.join().unwrap();
}
```

### 9. Use Thread Pools for CPU-Bound Work

Use thread pools for efficient CPU utilization:

```rust
use rayon::prelude::*;

fn parallel_processing() {
    let numbers: Vec<i32> = (1..=1_000_000).collect();

    // Parallel processing with Rayon
    let sum: i32 = numbers.par_iter()
        .map(|&x| x * x)
        .filter(|&x| x % 2 == 0)
        .sum();

    println!("Parallel sum: {}", sum);
}

// Manual thread pool implementation
use std::sync::mpsc;
use std::thread;

fn manual_thread_pool() {
    let (sender, receiver) = mpsc::channel();
    let data = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Create worker threads
    let mut handles = vec![];
    for _ in 0..4 {
        let receiver_clone = receiver.clone();
        let handle = thread::spawn(move || {
            while let Ok(number) = receiver_clone.recv() {
                let result = number * number;
                println!("Processed {} -> {}", number, result);
            }
        });
        handles.push(handle);
    }

    drop(receiver); // Close original receiver

    // Send work to workers
    for number in data {
        sender.send(number).unwrap();
    }

    drop(sender); // Close sender to signal completion

    for handle in handles {
        handle.join().unwrap();
    }
}
```

### 10. Handle Cancellation Gracefully

Implement proper cancellation for async operations:

```rust
use tokio::time::{sleep, Duration, timeout};
use tokio_util::sync::CancellationToken;

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

## Impact

Poor concurrency practices lead to:

- Data races and memory corruption
- Deadlocks and livelocks
- Performance bottlenecks
- Complex and hard-to-debug code
- Resource leaks and starvation

## References

- [The Rust Book - Chapter 16: Fearless Concurrency](https://doc.rust-lang.org/book/ch16-00-fearless-concurrency.html)
- [Tokio Tutorial](https://tokio.rs/tokio/tutorial)
- [Rayon Documentation](https://docs.rs/rayon/)
- [Rust Concurrency Cheatsheet](https://github.com/rust-lang/rust/blob/master/src/libstd/thread/mod.rs)
