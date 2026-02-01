# Rust Best Practices

## Overview

This guide covers essential best practices. Write clean, efficient, and maintainable Rust code.

## Code Organization

### Project Structure
```
src/
├── main.rs          # Binary entry point
├── lib.rs           # Library entry point
├── modules/
│   ├── mod.rs       # Module declarations
│   ├── auth.rs      # Authentication logic
│   ├── database.rs  # Database operations
│   └── utils.rs     # Utility functions
├── tests/
│   ├── integration_tests.rs
│   └── common/
└── benches/
    └── performance_benchmarks.rs
```

### Module Organization
- Keep modules focused on single responsibility
- Use pub use to re-export common items
- Group related functionality in modules
- Use module-level documentation

## Code Style

### Naming Conventions
```rust
// Functions and variables: snake_case
fn calculate_average(numbers: &[f64]) -> f64 {
    let sum: f64 = numbers.iter().sum();
    sum / numbers.len() as f64
}

// Types and structs: PascalCase
struct UserProfile {
    user_id: u64,
    username: String,
    email: String,
}

// Constants: SCREAMING_SNAKE_CASE
const MAX_CONNECTIONS: usize = 1000;

// Associated constants: PascalCase
impl UserProfile {
    const DEFAULT_AVATAR: &'static str = "default.png";
}
```

### Error Handling
```rust
// Use Result for operations that can fail
fn read_config(path: &str) -> Result<Config, ConfigError> {
    let content = std::fs::read_to_string(path)
        .map_err(ConfigError::IoError)?;
    
    toml::from_str(&content)
        .map_err(ConfigError::ParseError)
}

// Use Option for nullable values
fn find_user_by_id(id: u64, users: &[User]) -> Option<&User> {
    users.iter().find(|user| user.id == id)
}
```

## Performance Best Practices

### Memory Management
```rust
// Prefer borrowing over cloning
fn process_data(data: &[u8]) -> Vec<u8> {
    data.iter()
        .map(|&byte| byte.wrapping_add(1))
        .collect()
}

// Use String::with_capacity for known sizes
fn build_string(parts: &[&str]) -> String {
    let total_len: usize = parts.iter().map(|s| s.len()).sum();
    let mut result = String::with_capacity(total_len);
    
    for part in parts {
        result.push_str(part);
    }
    
    result
}

// Use Cow for conditional ownership
use std::borrow::Cow;

fn normalize_text(text: &str) -> Cow<str> {
    if text.is_ascii() {
        Cow::Borrowed(text)
    } else {
        Cow::Owned(text.to_lowercase())
    }
}
```

### Iterators and Collections
```rust
// Use iterator methods instead of manual loops
fn filter_and_transform(numbers: &[i32]) -> Vec<String> {
    numbers
        .iter()
        .filter(|&&n| n > 0)
        .map(|n| format!("Number: {}", n))
        .collect()
}

// Use HashMap for efficient lookups
use std::collections::HashMap;

fn count_words(text: &str) -> HashMap<String, u32> {
    let mut counts = HashMap::new();
    
    for word in text.split_whitespace() {
        *counts.entry(word.to_string()).or_insert(0) += 1;
    }
    
    counts
}
```

## Testing Best Practices

### Unit Tests
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calculate_average() {
        let numbers = vec![1.0, 2.0, 3.0, 4.0, 5.0];
        assert_eq!(calculate_average(&numbers), 3.0);
    }

    #[test]
    fn test_empty_vector() {
        let numbers: Vec<f64> = vec![];
        assert!(calculate_average(&numbers).is_nan());
    }

    #[test]
    #[should_panic(expected = "Division by zero")]
    fn test_division_by_zero() {
        divide(10.0, 0.0);
    }
}
```

### Integration Tests
```rust
// tests/integration_tests.rs
use my_crate::*;

#[test]
fn test_full_workflow() {
    let config = Config::from_file("test_config.toml").unwrap();
    let app = Application::new(config);
    
    let result = app.process_data("test input");
    assert!(result.is_ok());
}
```

## Documentation

### Code Documentation
```rust
/// Calculates the factorial of a non-negative integer.
///
/// # Arguments
/// 
/// * `n` - A non-negative integer
///
/// # Returns
///
/// The factorial of `n`
///
/// # Examples
///
/// ```
/// use my_crate::factorial;
///
/// assert_eq!(factorial(5), 120);
/// assert_eq!(factorial(0), 1);
/// ```
///
/// # Panics
///
/// Panics if `n` is negative
pub fn factorial(n: u32) -> u64 {
    match n {
        0 => 1,
        1 => 1,
        _ => n as u64 * factorial(n - 1),
    }
}
```

## Security Best Practices

### Input Validation
```rust
fn validate_email(email: &str) -> Result<(), ValidationError> {
    if email.is_empty() {
        return Err(ValidationError::EmptyEmail);
    }
    
    if !email.contains('@') {
        return Err(ValidationError::InvalidFormat);
    }
    
    if email.len() > 254 {
        return Err(ValidationError::TooLong);
    }
    
    Ok(())
}
```

### Safe Concurrency
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn safe_shared_state() {
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
}
```

## Tooling and Development

### Cargo Configuration
```toml
# Cargo.toml
[package]
name = "my-awesome-crate"
version = "0.1.0"
edition = "2021"
authors = ["Your Name <your.email@example.com>"]
license = "MIT OR Apache-2.0"
repository = "https://github.com/yourusername/my-awesome-crate"

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"] }

[dev-dependencies]
criterion = "0.5"

[[bench]]
name = "my_benchmark"
harness = false
```

### CI/CD Configuration
```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        rust:
          - stable
          - beta
          - nightly
    
    steps:
    - uses: actions/checkout@v2
    - uses: actions-rs/toolchain@v1
      with:
        toolchain: ${{ matrix.rust }}
        override: true
    
    - name: Run tests
      run: cargo test --verbose
    
    - name: Run clippy
      run: cargo clippy -- -D warnings
    
    - name: Check formatting
      run: cargo fmt -- --check
```

## References

- [The Rust Book](https://doc.rust-lang.org/book/)
- [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/)
- [Rust Clippy Lints](https://rust-lang.github.io/rust-clippy/)
- [Rustfmt Configuration](https://rust-lang.github.io/rustfmt/)
