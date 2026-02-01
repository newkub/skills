---
trigger: manual
description: ตั้งค่า prelude.rs สำหรับ Rust project
instruction:
  - สร้างไฟล์ src/prelude.rs
  - re-export error types
  - re-export commonly used external crates
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# prelude.rs Setup

## 1. Prelude Structure

สร้างไฟล์ `src/prelude.rs`:

```rust
//! Common imports for the crate

pub use crate::error::{AppError, Result};
pub use anyhow::Context;
pub use tracing::{debug, error, info, instrument, trace, warn};
```

## 2. Usage

ใช้ `use crate::prelude::*;` ในไฟล์อื่นๆ:

```rust
use crate::prelude::*;

pub fn process_data(data: &str) -> Result<String> {
    info!("Processing data");
    let result = parse_data(data)
        .context("Failed to parse data")?;
    Ok(result)
}
```

## 3. Extended Prelude

สามารถเพิ่ม imports ที่ใช้บ่อย:

```rust
//! Common imports for the crate

// Error handling
pub use crate::error::{AppError, Result};
pub use anyhow::Context;

// Logging
pub use tracing::{debug, error, info, instrument, trace, warn};

// Async
pub use tokio::sync::{Arc, Mutex, RwLock};

// Collections
pub use std::collections::{HashMap, HashSet};
```
