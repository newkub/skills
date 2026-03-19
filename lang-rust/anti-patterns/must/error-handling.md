# Rust Error Handling

## Why

Proper error handling makes code more reliable, debuggable, and maintainable. Rust's Result and Option types force explicit error handling, preventing unexpected crashes.

## Anti-patterns

- Using unwrap() and expect() in production code
- Ignoring errors with let _ = result
- Using panic! for recoverable errors
- Inconsistent error types across modules
- Missing error context and documentation

## Best Practices

Use Result and Option types consistently, provide meaningful error context, and handle errors appropriately at each level.

## Rules

### 1. Use Result for Fallible Operations

Always use Result<T, E> for operations that can fail:

```rust
// Good - explicit error handling
fn read_file(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}

// Bad - using unwrap in production
fn read_file_bad(path: &str) -> String {
    std::fs::read_to_string(path).unwrap() // Can panic!
}
```

### 2. Use Option for Nullable Values

Use Option<T> instead of null pointers:

```rust
// Good - safe nullable handling
fn find_user(id: u64, users: &[User]) -> Option<&User> {
    users.iter().find(|user| user.id == id)
}

// Usage
match find_user(1, &users) {
    Some(user) => println!("Found: {}", user.name),
    None => println!("User not found"),
}
```

### 3. Use the ? Operator for Error Propagation

Use ? for clean error propagation:

```rust
use std::fs;
use std::io::{self, Write};

fn save_processed_data(data: &str, filename: &str) -> Result<(), io::Error> {
    let processed = format!("PROCESSED: {}", data);
    fs::write(filename, processed)?; // Clean error propagation
    Ok(())
}

// Equivalent without ? operator
fn save_processed_data_verbose(data: &str, filename: &str) -> Result<(), io::Error> {
    let processed = format!("PROCESSED: {}", data);
    match fs::write(filename, processed) {
        Ok(()) => Ok(()),
        Err(e) => Err(e),
    }
}
```

### 4. Create Custom Error Types

Define custom error types for your domain:

```rust
use std::fmt;

#[derive(Debug)]
enum AppError {
    InvalidInput(String),
    NetworkError,
    DatabaseError(String),
    ConfigError(String),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AppError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
            AppError::NetworkError => write!(f, "Network error occurred"),
            AppError::DatabaseError(msg) => write!(f, "Database error: {}", msg),
            AppError::ConfigError(msg) => write!(f, "Configuration error: {}", msg),
        }
    }
}

impl std::error::Error for AppError {}

// Usage
fn process_user_input(input: &str) -> Result<String, AppError> {
    if input.is_empty() {
        return Err(AppError::InvalidInput("Input cannot be empty".to_string()));
    }

    if input.len() > 1000 {
        return Err(AppError::InvalidInput("Input too long".to_string()));
    }

    Ok(format!("Processed: {}", input))
}
```

### 5. Provide Error Context

Add context to errors to make debugging easier:

```rust
use std::path::Path;

fn load_config(path: &Path) -> Result<Config, AppError> {
    let content = std::fs::read_to_string(path)
        .map_err(|e| AppError::ConfigError(format!("Failed to read {}: {}", path.display(), e)))?;

    toml::from_str(&content)
        .map_err(|e| AppError::ConfigError(format!("Failed to parse {}: {}", path.display(), e)))
}
```

### 6. Handle Errors at Appropriate Levels

Handle errors at the right abstraction level:

```rust
// Low level - detailed errors
fn connect_to_database(url: &str) -> Result<Connection, DatabaseError> {
    // Implementation with specific database errors
}

// Mid level - application context
fn initialize_app(config: &Config) -> Result<App, AppError> {
    let db = connect_to_database(&config.database_url)
        .map_err(|e| AppError::DatabaseError(format!("Failed to connect: {}", e)))?;

    // Continue initialization
}

// High level - user-friendly messages
fn main() {
    match initialize_app(&config) {
        Ok(app) => app.run(),
        Err(AppError::DatabaseError(msg)) => {
            eprintln!("Database connection failed. Please check your configuration.");
            eprintln!("Details: {}", msg);
        }
        Err(error) => {
            eprintln!("Application error: {}", error);
        }
    }
}
```

### 7. Use unwrap() and expect() Only in Tests

Only use unwrap() and expect() in tests or when you're absolutely certain:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calculation() {
        let result = calculate_something().unwrap(); // OK in tests
        assert_eq!(result, expected_value);
    }
}

// In production code, prefer proper error handling
fn calculate_and_handle() -> Result<i32, MyError> {
    let result = calculate_something()?;
    Ok(result)
}
```

### 8. Document Error Conditions

Document what errors can occur and when:

```rust
/// Divides two numbers.
///
/// # Errors
///
/// Returns an error if the divisor is zero.
///
/// # Examples
///
/// ```
/// use my_crate::divide;
///
/// assert_eq!(divide(10, 2), Ok(5));
/// assert!(divide(10, 0).is_err());
/// ```
pub fn divide(dividend: f64, divisor: f64) -> Result<f64, DivisionError> {
    if divisor == 0.0 {
        Err(DivisionError::DivisionByZero)
    } else {
        Ok(dividend / divisor)
    }
}
```

### 9. Use Result Chains for Complex Operations

Chain operations to handle multiple potential failures:

```rust
fn process_file_pipeline(input_path: &str, output_path: &str) -> Result<(), ProcessError> {
    let content = std::fs::read_to_string(input_path)
        .map_err(ProcessError::ReadError)?;

    let processed = process_content(&content)
        .map_err(ProcessError::ProcessingError)?;

    std::fs::write(output_path, processed)
        .map_err(ProcessError::WriteError)?;

    Ok(())
}
```

## Impact

Poor error handling leads to:

- Unexpected crashes and panics
- Difficult debugging and maintenance
- Poor user experience
- Security vulnerabilities
- Loss of data integrity

## References

- [The Rust Book - Chapter 9: Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)
- [Rust by Example - Error Handling](https://doc.rust-lang.org/rust-by-example/error.html)
- [The Rustonomicon - Error Handling](https://doc.rust-lang.org/nomicon/error-handling.html)
