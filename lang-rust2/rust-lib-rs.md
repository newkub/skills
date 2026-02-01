---
trigger: manual
description: ตั้งค่า lib.rs สำหรับ Rust project
instruction:
  - สร้างไฟล์ src/lib.rs
  - กำหนด module exports
  - re-export commonly used items
condition:
  - ใช้เมื่อสร้าง Rust library
---

# lib.rs Setup

## 1. Library Entry Point

สร้างไฟล์ `src/lib.rs`:

```rust
//! # [crate_name]
//!
//! Brief description of the crate
//!
//! ## Features
//! - Feature 1
//! - Feature 2
//!
//! ## Usage
//! ```rust
//! use [crate_name];
//! ```

pub mod app;
pub mod components;
pub mod config;
pub mod constants;
pub mod error;
pub mod prelude;
pub mod services;
pub mod telemetry;
pub mod types;
pub mod utils;

// Re-export commonly used items
pub use error::{AppError, Result};
pub use config::AppConfig;
```

## 2. Module Organization

เรียง modules ตามลำดับ:
1. Core modules (app, config, error, telemetry)
2. Business logic (components, services, types)
3. Utilities (utils, constants)
4. Prelude

## 3. Re-exports

Re-export items ที่ใช้บ่อย:

```rust
// Error handling
pub use error::{AppError, Result};

// Configuration
pub use config::AppConfig;

// Common types
pub use types::{User, Post};
```

## 4. Conditional Compilation

```rust
#[cfg(feature = "gui")]
pub mod widgets;

#[cfg(test)]
mod tests {
    use super::*;
    // ...
}
```
