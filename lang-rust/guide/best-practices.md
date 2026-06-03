# Best Practices

## Naming Conventions

```rust
// Modules: snake_case
mod user_auth;
mod payment_gateway;

// Structs: PascalCase
struct UserAccount { }
struct PaymentResult { }

// Enums: PascalCase
enum Status { Active, Inactive }
enum Error { Network, Timeout }

// Functions: snake_case
fn calculate_total() { }
fn validate_email() { }

// Variables: snake_case
let user_count = 10;
let is_active = true;

// Constants: SCREAMING_SNAKE_CASE
const MAX_RETRY_COUNT: u32 = 3;
const API_BASE_URL: &str = "https://api.example.com";

// Type parameters: PascalCase
fn<T> process<T: Clone>(item: T) { }
```

## Error Handling

```rust
// Use Result for recoverable errors
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
}

// Use Option for optional values
fn find_user(id: u32) -> Option<User> {
    // return Some(user) or None
}

// Prefer ? operator over match
fn read_config(path: &str) -> Result<Config, Error> {
    let content = fs::read_to_string(path)?;
    let config = parse_config(&content)?;
    Ok(config)
}

// Create custom error types
#[derive(Debug)]
enum MyError {
    NotFound(String),
    InvalidInput(String),
    IoError(std::io::Error),
}

impl std::fmt::Display for MyError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            MyError::NotFound(s) => write!(f, "Not found: {}", s),
            MyError::InvalidInput(s) => write!(f, "Invalid input: {}", s),
            MyError::IoError(e) => write!(f, "IO error: {}", e),
        }
    }
}
```

## Ownership Best Practices

```rust
// Prefer borrowing over ownership when possible
fn process(data: &[u8]) { }  // Good

// Use clone when you need to own data
let owned = data.to_vec();

// Use Arc for shared ownership across threads
use std::sync::Arc;
let shared = Arc::new(vec![1, 2, 3]);

// Use Rc for single-threaded shared ownership
use std::rc::Rc;
let shared = Rc::new(vec![1, 2, 3]);

// Minimize mutable references
let mut data = vec![1, 2, 3];
transform(&mut data);  // Only when necessary
```

## Code Organization

```rust
// modules/mod.rs
mod network;
mod database;
mod utils;

// modules/network.rs
pub mod client;
pub mod server;

// Use pub(crate) for module-level visibility
pub(crate) fn internal_function() { }

// Group related functionality
mod user {
    pub struct User { }
    impl User {
        pub fn new() -> Self { }
        pub fn validate(&self) -> bool { }
    }
}
```

## Performance Tips

```rust
// Preallocate vectors
let mut v = Vec::with_capacity(1000);

// Use iterators for lazy evaluation
let sum: i32 = (0..1000).filter(|x| x % 2 == 0).sum();

// Avoid unnecessary allocations
let s = format!("{} {}", a, b); // Allocates
let s = a.to_string() + " " + &b; // Also allocates

// Use const for compile-time computation
const fn square(x: i32) -> i32 { x * x }

// Profile before optimizing
// cargo flamegraph
```

## Testing

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 2), 4);
    }

    #[test]
    #[should_panic]
    fn test_panic() {
        panic!("Expected panic");
    }

    #[test]
    fn test_result() -> Result<(), String> {
        let result = do_something()?;
        assert!(result.is_ok());
        Ok(())
    }
}
```

## Documentation

```rust
/// Represents a user in the system.
///
/// # Examples
///
/// ```
/// let user = User::new("Alice", "alice@example.com");
/// ```
pub struct User {
    /// User's display name
    name: String,
    /// User's email address
    email: String,
}

impl User {
    /// Creates a new user with the given name and email.
    ///
    /// # Arguments
    ///
    /// * `name` - The user's display name
    /// * `email` - The user's email address
    ///
    /// # Examples
    ///
    /// ```
    /// let user = User::new("Alice", "alice@example.com");
    /// ```
    pub fn new(name: &str, email: &str) -> Self {
        User {
            name: name.to_string(),
            email: email.to_string(),
        }
    }
}
```

## Formatting and Style

```rust
// Use rustfmt
// cargo fmt

// Avoid long lines (>100 chars)
fn very_long_function_name(
    parameter_one: Type,
    parameter_two: Type,
    parameter_three: Type,
) -> ReturnType {
    // ...
}

// Use meaningful names
let user_age = 25;      // Good
let a = 25;             // Bad

// Group imports
use std::collections::{HashMap, HashSet};
use std::io::{self, Write};
```