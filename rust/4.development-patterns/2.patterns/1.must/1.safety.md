# Rust Memory Safety

## Why

Memory safety prevents common vulnerabilities like buffer overflows, use-after-free, and data races. Rust guarantees memory safety at compile time without runtime overhead.

## Anti-patterns

- Using unsafe code without proper justification
- Ignoring borrow checker warnings
- Manual memory management when automatic suffices
- Dereferencing raw pointers without safety checks
- Bypassing safety mechanisms for convenience

## Best Practices

Leverage Rust's ownership system and type system to ensure memory safety while maintaining performance.

## Rules

### 1. Use Safe Rust Whenever Possible

Prefer safe Rust over unsafe code:

```rust
// Good - safe Rust
fn process_slice(data: &[u8]) -> Vec<u8> {
    data.iter().map(|&b| b.wrapping_add(1)).collect()
}

// Bad - unnecessary unsafe
fn process_slice_unsafe(data: &[u8]) -> Vec<u8> {
    let mut result = Vec::with_capacity(data.len());
    unsafe {
        for i in 0..data.len() {
            result.push(data.get_unchecked(i).wrapping_add(1));
        }
    }
    result
}
```

### 2. Handle Nulls with Option Type

Never use null pointers - use Option<T>:

```rust
// Good - safe nullable handling
struct User {
    id: u64,
    name: String,
    email: Option<String>, // Nullable email
}

fn get_user_email(user: &User) -> Option<&str> {
    user.email.as_deref()
}

// Usage
match get_user_email(&user) {
    Some(email) => println!("Email: {}", email),
    None => println!("No email provided"),
}
```

### 3. Use Bounds Checking

Rust provides bounds checking by default:

```rust
// Good - safe with bounds checking
fn get_element(vec: &[i32], index: usize) -> Option<i32> {
    vec.get(index).copied()
}

// Usage
match get_element(&numbers, 5) {
    Some(value) => println!("Value: {}", value),
    None => println!("Index out of bounds"),
}

// Avoid direct indexing unless you're certain
// let value = numbers[5]; // Panics if out of bounds
```

### 4. Use Safe Concurrency Primitives

Prefer safe concurrency over manual synchronization:

```rust
use std::sync::{Arc, Mutex};
use std::thread;

// Good - safe shared state
fn safe_shared_counter() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter_clone.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final count: {}", *counter.lock().unwrap());
}

// For lock-free scenarios, consider atomic types
use std::sync::atomic::{AtomicU64, Ordering};

fn lock_free_counter() {
    let counter = Arc::new(AtomicU64::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            counter_clone.fetch_add(1, Ordering::SeqCst);
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Final count: {}", counter.load(Ordering::SeqCst));
}
```

### 5. Use Unsafe Code Only When Necessary

Document and justify all unsafe code:

```rust
/// Safe wrapper around unsafe FFI call
/// 
/// # Safety
/// 
/// This function is safe because:
/// 1. The C function guarantees null-terminated strings
/// 2. We validate the input before calling
/// 3. We properly handle the returned pointer
pub fn safe_c_wrapper(input: &str) -> Result<String, CError> {
    if input.is_empty() {
        return Err(CError::InvalidInput);
    }

    let result = unsafe {
        // Unsafe FFI call
        let c_string = std::ffi::CString::new(input).unwrap();
        let ptr = c_function(c_string.as_ptr());

        if ptr.is_null() {
            return Err(CError::FunctionFailed);
        }

        // Convert back to Rust string safely
        let c_str = std::ffi::CStr::from_ptr(ptr);
        c_str.to_string_lossy().into_owned()
    };

    Ok(result)
}

// External C function declaration
extern "C" {
    fn c_function(input: *const std::os::raw::c_char) -> *const std::os::raw::c_char;
}
```

### 6. Validate External Data

Always validate data from external sources:

```rust
// Good - validate network input
fn process_network_data(data: &[u8]) -> Result<Message, ValidationError> {
    // Validate length
    if data.len() > MAX_MESSAGE_SIZE {
        return Err(ValidationError::TooLarge);
    }

    // Validate format
    if data.len() < 4 {
        return Err(ValidationError::TooShort);
    }

    // Validate checksum
    let checksum = calculate_checksum(data);
    if checksum != expected_checksum {
        return Err(ValidationError::InvalidChecksum);
    }

    // Safe to parse now
    parse_message(data)
}

// Bad - trust external data
fn process_network_data_unsafe(data: &[u8]) -> Message {
    // Direct parsing without validation - dangerous!
    parse_message_unchecked(data)
}
```

### 7. Use Safe String Handling

Prevent string-related vulnerabilities:

```rust
// Good - safe string operations
fn safe_string_operations() {
    let input = "Hello, world!";

    // Safe slicing
    let slice = input.get(0..5).unwrap_or("Hello");

    // Safe concatenation with capacity
    let mut result = String::with_capacity(input.len() + 10);
    result.push_str(slice);
    result.push_str("!");

    // Safe path operations
    use std::path::Path;
    let path = Path::new("/etc/passwd");
    let safe_path = path.join("subdir");
}

// Bad - unsafe string operations
fn unsafe_string_operations() {
    let input = "Hello, world!";

    // Unsafe slicing - can panic
    let slice = &input[0..20]; // Panics if out of bounds

    // Unsafe path operations
    use std::path::Path;
    let path = Path::new("/etc/passwd");
    let unsafe_path = path.join("../etc/shadow"); // Path traversal
}
```

### 8. Use Memory-Safe Data Structures

Choose appropriate data structures for memory safety:

```rust
// Good - memory-safe collections
use std::collections::HashMap;

fn safe_data_structures() {
    // Vec<T> - contiguous memory, bounds checked
    let numbers = vec![1, 2, 3, 4, 5];

    // HashMap<K, V> - safe key-value storage
    let mut users = HashMap::new();
    users.insert(1, "Alice");
    users.insert(2, "Bob");

    // Option<T> - safe nullable values
    let maybe_value = users.get(&3); // Returns Option<&str>

    // Result<T, E> - explicit error handling
    let result = std::fs::read_to_string("config.txt");
}

// For performance-critical scenarios, consider specialized types
use std::collections::VecDeque;

fn efficient_queue() {
    let mut queue = VecDeque::new();
    queue.push_back(1);
    queue.push_back(2);
    queue.push_front(0); // Efficient front insertion

    while let Some(value) = queue.pop_front() {
        println!("Processing: {}", value);
    }
}
```

## Impact

Violating memory safety best practices leads to:

- Buffer overflows and memory corruption
- Use-after-free vulnerabilities
- Data races in concurrent code
- Security vulnerabilities
- Undefined behavior and crashes

## References

- [The Rust Book - Chapter 19: Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)
- [The Rustonomicon](https://doc.rust-lang.org/nomicon/)
- [Rust by Example - Unsafe](https://doc.rust-lang.org/rust-by-example/unsafe.html)
