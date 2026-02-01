---
trigger: manual
description: สร้างโครงสร้าง constants/ สำหรับ Rust project
instruction:
  - สร้างโฟลเดอร์ src/constants
  - กำหนดค่าคงที่
condition:
  - ใช้เมื่อมีค่าคงที่ที่ใช้บ่อย
---

# constants/ Structure

## 1. Purpose

โฟลเดอร์ `constants/` เก็บ **ค่าคงที่**:
- Application constants
- Configuration constants
- Magic numbers

## 2. Structure

```
src/constants/
├── mod.rs              # Module exports
├── app.rs              # App constants
└── config.rs           # Config constants
```

## 3. Example: app.rs

```rust
/// Application name
pub const APP_NAME: &str = "My App";

/// Application version
pub const APP_VERSION: &str = env!("CARGO_PKG_VERSION");

/// Default page size
pub const DEFAULT_PAGE_SIZE: u32 = 20;

/// Maximum page size
pub const MAX_PAGE_SIZE: u32 = 100;

/// Default timeout in seconds
pub const DEFAULT_TIMEOUT_SECS: u64 = 30;

/// Cache TTL in seconds
pub const CACHE_TTL_SECS: u64 = 3600;

/// Maximum file size in bytes (10MB)
pub const MAX_FILE_SIZE: usize = 10 * 1024 * 1024;

/// Allowed file extensions
pub const ALLOWED_EXTENSIONS: &[&str] = &[
    "jpg", "jpeg", "png", "gif", "pdf", "doc", "docx"
];
```

## 4. Example: config.rs

```rust
/// Default database URL
pub const DEFAULT_DATABASE_URL: &str = "sqlite://app.db";

/// Default API host
pub const DEFAULT_API_HOST: &str = "127.0.0.1";

/// Default API port
pub const DEFAULT_API_PORT: u16 = 8080;

/// Default log level
pub const DEFAULT_LOG_LEVEL: &str = "info";

/// Environment prefix for config
pub const ENV_PREFIX: &str = "APP_";

/// JWT secret key (ใช้ environment variable จริง)
pub const JWT_SECRET_ENV: &str = "JWT_SECRET";

/// JWT expiration in hours
pub const JWT_EXPIRATION_HOURS: u64 = 24;
```

## 5. mod.rs

```rust
pub mod app;
pub mod config;

// Re-export commonly used constants
pub use app::{
    APP_NAME, APP_VERSION, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE,
    DEFAULT_TIMEOUT_SECS, CACHE_TTL_SECS, MAX_FILE_SIZE, ALLOWED_EXTENSIONS
};

pub use config::{
    DEFAULT_DATABASE_URL, DEFAULT_API_HOST, DEFAULT_API_PORT,
    DEFAULT_LOG_LEVEL, ENV_PREFIX, JWT_SECRET_ENV, JWT_EXPIRATION_HOURS
};
```
