# Error Handling Architecture

```rust
// src/error.rs
pub enum AppError {
    NotFound(String),
    ValidationError(String),
    DatabaseError(sqlx::Error),
    InternalError(String),
}

impl std::fmt::Display for AppError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            AppError::NotFound(msg) => write!(f, "Not found: {}", msg),
            AppError::ValidationError(msg) => write!(f, "Validation: {}", msg),
            AppError::DatabaseError(e) => write!(f, "Database: {}", e),
            AppError::InternalError(msg) => write!(f, "Internal: {}", msg),
        }
    }
}

impl From<sqlx::Error> for AppError {
    fn from(err: sqlx::Error) -> Self {
        AppError::DatabaseError(err)
    }
}
```
