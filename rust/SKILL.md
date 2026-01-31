---
name: follow-rust
description: แนวทางการพัฒนาระบบด้วย Rust
---
 

## 1. 🛠️ Setup

### Libraries

- **Error Handling**: `thiserror` (สำหรับ Library), `anyhow` (สำหรับ Application)
- **Testing**: `cargo-nextest` (ตัวรันเทสประสิทธิภาพสูง), `mockall` (สำหรับ Mocking)
- **Async**: `tokio` (Asynchronous Runtime)
- **Configuration**: `figment` (จัดการ Config จากหลายแหล่ง)
- **Observability**: `tracing` (สำหรับ Logging และ Tracing), `tracing-subscriber` (ตัวรับและจัดการ Log)

### config

#### `package.json` (สำหรับ workspace ที่ใช้ turborepo)


```json [package.json]
{
  "name": "",
  "scripts": {
    "postinstall" : "cargo update",

    "dev": "cargo watch -x run",
    "dev:build": "cargo build",

    "check": "cargo check",
    "format": "cargo fmt --all",
    "lint": "cargo clippy --all-targets --all-features -- -D warnings",

    "test": "cargo test --all-features && cargo nextest run --all-features --verbose", // @ai /follow-nextest

    "build": "cargo build --release",
    "build:windows": "cargo build --release --target x86_64-pc-windows-msvc",
    "build:linux": "cargo build --release --target x86_64-unknown-linux-gnu",
    "build:mac": "cargo build --release --target x86_64-apple-darwin",

    "build:wasm": "wasm-pack build --out-dir pkg --target bundler",
    "build:node": "napi build --release",

    "audit": "cargo audit",
    "deny": "cargo deny check",

    "verify": "bun run format && bun run lint && bun run test && cargo audit && cargo deny check"
  }

}
```

---

## 2. 🏗️ Project Structure

```plaintext
.cargo/config.toml       # Build configurations and optimizations (e.g., sccache)
.github/workflows/ci.yml # CI Pipeline
src/
├── lib.rs              # Library Entry Point: Public API เท่านั้น
├── main.rs             # Application Entry Point: Composition Root
├── app.rs              # Application Layer: Orchestrates business flows
├── error.rs            # Error Types (thiserror)
├── config.rs           # Configuration (figment)
├── telemetry.rs        # Logging/Tracing setup
├── prelude.rs          # Common imports
├── constants/          # ค่าคงที่
├── types/              # Data Structures (Structs, Enums, Traits)
├── components/         # Pure Layer: Domain logic บริสุทธิ์
├── services/           # Effect Layer: I/O (ผ่าน Traits)
├── adapters/           # Wrappers สำหรับ external libraries
└── utils/              # Pure helpers (ไม่มี dependencies ภายใน)
tests/                  # Integration tests
benches/                # Benchmarks
Cargo.toml              # Package manifest
Config.toml             # Configuration file
deny.toml               # (ถ้าใช้) License checking config
tracing.toml            # (ถ้าใช้) Tracing configuration
```

- **`main.rs` (Composition Root)**: ประกอบร่าง Dependencies, โหลด `config`, ตั้งค่า `telemetry` (logging), แล้วเริ่ม `app`
- **`lib.rs` (Library Entry Point)**: Expose เฉพาะ Public API ที่จำเป็น

---

## 2.1 ✅ Mandatory Files/Folders Checklist (ให้ครบตาม /refactor-rust)

### Configuration Files

- `Cargo.toml`  (ทำตาม `@[/rust-cargo-toml]`)
- `.cargo/config.toml`  (ทำตาม `@[/rust-cargo-config]`)
- `Config.toml`  (ทำตาม `@[/rust-config-file]`)

### Core `src/` Files

- `src/error.rs`  (ทำตาม `@[/rust-error-rs]`)
- `src/config.rs`  (ทำตาม `@[/rust-config-rs]`)
- `src/telemetry.rs`  (ทำตาม `@[/rust-telemetry-rs]`)
- `src/prelude.rs`  (ทำตาม `@[/rust-prelude-rs]`)
- `src/lib.rs`  (ทำตาม `@[/rust-lib-rs]`)
- `src/main.rs`  (ทำตาม `@[/rust-main-rs]`)
- `src/app.rs`  (Application Layer: orchestrates flows)

### Folder Structures (ภายใต้ `src/`)

- `src/components/`  (ทำตาม `@[/rust-components]`)
- `src/services/`  (ทำตาม `@[/rust-services]`)
- `src/adapters/`  (ทำตาม `@[/rust-adapters]`)
- `src/utils/`  (ทำตาม `@[/rust-utils]`)
- `src/types/`  (ทำตาม `@[/rust-types]`)
- `src/constants/`  (ทำตาม `@[/rust-constants]`)

### Quality

- Testing: ทำตาม `@[/rust-testing]`
- Imports: ทำตาม `@[/rust-imports]`
- Documentation: ทำตาม `@[/rust-documentation]`
- Prohibitions: ทำตาม `@[/rust-prohibitions]`
- Code Quality: ทำตาม `@[/rust-code-quality]`
- Security: ทำตาม `@[/rust-security]`
- Performance: ทำตาม `@[/rust-performance]`

---

## 3. 🧠 Core Principles

- **Immutability by Default**: ข้อมูลไม่ควรเปลี่ยนแปลงได้เป็นค่าเริ่มต้น
- **Purity**: ฟังก์ชันควรไม่มี Side Effects
- **Explicit Side Effects**: Side Effects ทั้งหมดต้องถูกแยกไปอยู่ `services` Layer
- **Dependency Injection**: ส่ง Dependencies ผ่าน Constructor หรือ Function arguments

---

## 4. 📁 Folder Rules

### `error.rs`
- **หน้าที่**: นิยาม Error ที่มีความหมายและมีโครงสร้างชัดเจน

```rust
// src/error.rs
use thiserror::Error;

#[derive(Error, Debug)]
pub enum AppError {
    #[error("Configuration error: {0}")]
    Config(#[from] figment::Error),

    #[error("User not found (id: {user_id})")]
    UserNotFound { user_id: String },

    #[error("External service failed: {service_name}")]
    ServiceError { service_name: String, #[source] source: anyhow::Error },

    #[error(transparent)]
    Io(#[from] std::io::Error),
}
```

(ตัวอย่าง `types`, `components`, `services`, `app` เหมือนเดิม แต่ใช้ `AppError` ที่ปรับปรุงแล้ว)

---

## 5. 🧪 Testing

- **Unit Tests**: ทดสอบ `components`, `utils` (Pure functions)
- **Integration Tests**: ทดสอบ `app` Layer โดย Mock `services` (I/O)

---

## 6. 📜 Import Rules

(เหมือนเดิม)

---

---

## 7. ⚙️ Configuration (`figment`)

- **เป้าหมาย**: แยกการตั้งค่าออกจากโค้ด, โหลดจากหลายแหล่ง (ไฟล์, env) ได้

1.  **สร้าง `Config.toml`**
    ```toml
    [database]
    url = "postgres://user:pass@localhost/db"

    [api]
    port = 8080
    ```

2.  **สร้าง `config.rs`**
    ```rust
    // src/config.rs
    use figment::{Figment, providers::{Format, Toml, Env}};
    use serde::Deserialize;

    #[derive(Deserialize, Debug)]
    pub struct DatabaseConfig {
        pub url: String,
    }

    #[derive(Deserialize, Debug)]
    pub struct ApiConfig {
        pub port: u16,
    }

    #[derive(Deserialize, Debug)]
    pub struct AppConfig {
        pub database: DatabaseConfig,
        pub api: ApiConfig,
    }

    impl AppConfig {
        pub fn load() -> Result<Self, figment::Error> {
            Figment::new()
                .join(Toml::file("Config.toml"))
                .join(Env::prefixed("APP_").split("__"))
                .extract()
        }
    }
    ```
    *หมายเหตุ: `Env` ทำให้เรา override ค่าในไฟล์ด้วย Environment Variable ได้ เช่น `APP_DATABASE__URL=...`*

---

## 8. 📡 Observability (`tracing`)

- **เป้าหมาย**: มี Log ที่มีโครงสร้างชัดเจน, สามารถติดตามการทำงานของฟังก์ชันได้

1.  **เพิ่ม Dependencies**: `tracing`, `tracing-subscriber`
2.  **สร้าง `telemetry.rs`**
    ```rust
    // src/telemetry.rs
    use tracing_subscriber::{EnvFilter, FmtSubscriber};

    pub fn init_subscriber() {
        let filter = EnvFilter::try_from_default_env()
            .unwrap_or_else(|_| EnvFilter::new("info")); // Log `info` ขึ้นไป

        let subscriber = FmtSubscriber::builder()
            .with_env_filter(filter)
            .finish();

        tracing::subscriber::set_global_default(subscriber)
            .expect("Failed to set tracing subscriber");
    }
    ```
3.  **เรียกใช้ใน `main.rs`**
    ```rust
    // src/main.rs
    fn main() {
        crate::telemetry::init_subscriber();
        // ... aplication code ...
    }
    ```
4.  **การใช้งาน**: ใช้ `#[tracing::instrument]` ที่ฟังก์ชันเพื่อดู input/output หรือใช้ `tracing::info!`, `tracing::error!`

---

## 9. 📚 Documentation Standard

- `///`: สำหรับอธิบาย Public items (functions, structs, modules) จะถูกนำไปสร้างเป็นเอกสารด้วย `cargo doc`
- `//!`: สำหรับอธิบาย Module ที่ตัวเองอยู่ (เขียนไว้บนสุดของไฟล์)

```rust
//! # User Management Module
//!
//! โมดูลนี้จัดการเกี่ยวกับการสร้างและค้นหาผู้ใช้

/// Represents a user in the system.
pub struct User { /* ... */ }

/// Finds a user by their unique ID.
///
/// # Arguments
/// * `id` - The ID of the user to find.
///
/// # Returns
/// An `Option<User>` which is `Some` if found, `None` otherwise.
///
/// # Errors
/// Returns `AppError` if the database connection fails.
pub fn find_user_by_id(id: &str) -> Result<Option<User>, AppError> { /* ... */ }
```

---

## 10. 🚀 CI (GitHub Actions)

- **เป้าหมาย**: ตรวจสอบคุณภาพโค้ดทุกครั้งที่มีการ Push หรือสร้าง Pull Request

**สร้างไฟล์ `.github/workflows/ci.yml`**
```yaml
name: Rust CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install Rust toolchain
        uses: dtolnay/rust-toolchain@stable
        with:
          components: clippy, fmt

      - name: Check formatting
        run: cargo fmt --all -- --check

      - name: Run Clippy
        run: cargo clippy --all-targets --all-features -- -D warnings

      - name: Run tests
        run: cargo nextest run --all-features

      - name: Build release
        run: cargo build --release --verbose
