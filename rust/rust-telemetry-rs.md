---
trigger: manual
description: ตั้งค่า telemetry.rs สำหรับ Rust project
instruction:
  - สร้างไฟล์ src/telemetry.rs
  - กำหนด init_subscriber function
  - กำหนด logging levels
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# telemetry.rs Setup

## 1. Telemetry Structure

สร้างไฟล์ `src/telemetry.rs`:

```rust
use tracing_subscriber::{EnvFilter, FmtSubscriber};

/// Initialize tracing subscriber with environment-aware filtering
///
/// Sets up structured logging with:
/// - Environment variable support (RUST_LOG)
/// - Thread IDs for debugging
/// - File and line number tracking
pub fn init_subscriber() {
    let filter = EnvFilter::try_from_default_env()
        .unwrap_or_else(|_| EnvFilter::new("info"));

    let subscriber = FmtSubscriber::builder()
        .with_env_filter(filter)
        .with_target(false)
        .with_thread_ids(true)
        .with_file(true)
        .with_line_number(true)
        .finish();

    tracing::subscriber::set_global_default(subscriber)
        .expect("Failed to set tracing subscriber");
}
```

## 2. Usage in main.rs

```rust
use crate::telemetry::init_subscriber;

#[tokio::main]
async fn main() -> Result<()> {
    init_subscriber();

    // Application code
}
```

## 3. Logging Levels

```rust
use tracing::{error, warn, info, debug, trace};

error!("This is an error");
warn!("This is a warning");
info!("This is info");
debug!("This is debug");
trace!("This is trace");
```

## 4. Instrumentation

ใช้ `#[instrument]` macro สำหรับ async functions:

```rust
use tracing::instrument;

#[instrument(skip(password))]
async fn login(username: &str, password: &str) -> Result<User> {
    info!("Attempting login for user: {}", username);
    // ...
}
```

## 5. Environment Variables

```bash
# Set log level
RUST_LOG=debug

# Set log level for specific module
RUST_LOG=my_app::database=trace

# Set multiple levels
RUST_LOG=info,my_app::database=debug
```
