---
trigger: manual
description: จัดการ imports สำหรับ Rust project
instruction:
  - เรียง imports ตามลำดับ
  - ใช้ use statements ที่ถูกต้อง
condition:
  - ใช้เมื่อเขียน code
---

# Import Rules

## 1. Import Order (บังคับ)

เรียง imports ตามลำดับ:

```rust
// 1. std imports
use std::collections::HashMap;
use std::path::PathBuf;

// 2. Third-party imports
use anyhow::Context;
use serde::{Deserialize, Serialize};
use tokio::sync::Arc;

// 3. Local imports
use crate::components::user::User;
use crate::services::user_service::UserService;
```

## 2. Use Statements (บังคับ)

- ใช้ `use crate::` สำหรับ internal modules
- ใช้ `super::` เฉพาะใน sub-modules
- ห้ามใช้ `use crate::..` (double parent)

```rust
// ✅ ถูกต้อง
use crate::components::user::User;

// ❌ ผิด
use crate::..::components::user::User;
```

## 3. Grouping

จัดกลุ่ม imports ที่เกี่ยวข้องกัน:

```rust
// std
use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};

// Third-party
use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};

// Local
use crate::components::user::{User, UserService};
use crate::types::common::{PaginatedResponse, ApiResponse};
```

## 4. Removing Unused Imports

รัน `cargo clippy` เพื่อตรวจสอบ:

```bash
cargo clippy --all-targets --all-features
```

## 5. Prelude Pattern

สร้าง `prelude.rs` สำหรับ imports ที่ใช้บ่อย:

```rust
// src/prelude.rs
pub use crate::error::{AppError, Result};
pub use anyhow::Context;
pub use tracing::{debug, error, info, instrument, trace, warn};

// ใช้ในไฟล์อื่น
use crate::prelude::*;
```
