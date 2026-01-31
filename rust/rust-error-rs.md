---
trigger: manual
description: ตั้งค่า error.rs สำหรับ Rust project
instruction:
  - สร้างไฟล์ src/error.rs
  - กำหนด error types
  - กำหนด Result type alias
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# error.rs Setup

## 1. Error Types Structure

สร้างไฟล์ `src/error.rs`:

```rust
use thiserror::Error;

/// Error types for [crate]
#[derive(Error, Debug)]
pub enum AppError {
    #[error("Configuration error: {0}")]
    Config(#[from] figment::Error),

    #[error("Validation error: {0}")]
    Validation(String),

    #[error("Not found: {resource} (id: {id})")]
    NotFound { resource: String, id: String },

    #[error("External service failed: {service}")]
    ServiceError {
        service: String,
        #[source]
        source: anyhow::Error,
    },

    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),

    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

/// Type alias for Result with AppError
pub type Result<T> = std::result::Result<T, AppError>;
```

## 2. Error Variants

### Common Error Variants

- `Config` - Configuration errors (จาก figment)
- `Validation` - Input validation errors
- `NotFound` - Resource not found errors
- `ServiceError` - External service errors
- `Io` - I/O errors
- `Other` - Generic errors (anyhow)

### Custom Error Variants

เพิ่ม error variants ตามความต้องการของ project:

```rust
#[error("Authentication failed: {0}")]
Auth(String),

#[error("Permission denied: {action}")]
PermissionDenied { action: String },

#[error("Rate limit exceeded")]
RateLimitExceeded,
```

## 3. Using Result Type

ใช้ `Result<T>` แทน `std::result::Result<T, AppError>`:

```rust
use crate::error::Result;

pub fn get_user(id: &str) -> Result<User> {
    // ...
}
```

## 4. Error Context

ใช้ `anyhow::Context` เพื่อเพิ่ม context ให้ errors:

```rust
use anyhow::Context;

pub fn load_config() -> Result<AppConfig> {
    let config = AppConfig::load()
        .context("Failed to load configuration")?;
    Ok(config)
}
```
