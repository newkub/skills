# Rust Project Structure

## Why

Proper project structure ensures maintainability, scalability, and collaboration efficiency. It helps organize code logically and makes it easier for new developers to understand the codebase.

## Anti-patterns

- All code in main.rs or lib.rs
- No module organization
- Mixed concerns in single files
- Inconsistent naming conventions
- Missing documentation

## Best Practices

Organize code into logical modules with clear responsibilities and consistent structure.

## Rules

### 1. Use Standard Cargo Structure

```
my-project/
├── Cargo.toml          # Project configuration
├── Cargo.lock          # Dependency lock file
├── README.md           # Project documentation
├── LICENSE             # License file
├── .gitignore          # Git ignore patterns
├── src/                # Source code
│   ├── main.rs         # Binary entry point
│   ├── lib.rs          # Library entry point
│   └── modules/        # Organized modules
├── tests/              # Integration tests
├── benches/            # Performance benchmarks
├── examples/           # Example usage
└── docs/               # Additional documentation
```

### 2. Organize Modules Logically

Group related functionality into modules:

```rust
// src/lib.rs
pub mod auth;
pub mod database;
pub mod utils;
pub mod config;

pub use auth::*;
pub use database::*;
```

### 3. Separate Concerns

Keep different concerns in separate modules:

```rust
// src/auth/mod.rs
pub mod models;
pub mod service;
pub mod middleware;

pub use models::*;
pub use service::*;
pub use middleware::*;

// src/database/mod.rs
pub mod connection;
pub mod models;
pub mod queries;
pub mod migrations;

pub use connection::*;
pub use models::*;
pub use queries::*;
pub use migrations::*;
```

### 4. Use Consistent File Naming

- Module files: snake_case (e.g., user_service.rs)
- Test files: *_test.rs or in tests/ directory
- Example files: descriptive names in examples/
- Benchmark files: *_bench.rs in benches/

### 5. Include Documentation

Add module-level documentation:

```rust
//! # Authentication Module
//! 
//! This module provides authentication and authorization functionality
//! for the application. It includes user management, token handling,
//! and permission checking.
//! 
//! ## Examples
//! 
//! ```rust
//! use my_app::auth::{AuthService, User};
//! 
//! let auth = AuthService::new();
//! let user = auth.authenticate("username", "password")?;
//! ```

pub mod models;
pub mod service;
```

### 6. Structure Binary Applications

For binary applications, organize main logic separately:

```rust
// src/main.rs
use my_app::{App, Config};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = Config::from_env()?;
    let app = App::new(config);
    app.run()
}

// src/lib.rs
pub mod app;
pub mod config;
pub mod handlers;
pub mod middleware;
```

### 7. Use Feature Flags Wisely

Organize optional features:

```toml
# Cargo.toml
[features]
default = ["database"]
database = ["sqlx"]
web = ["axum", "tokio"]
cli = ["clap"]
```

```rust
// src/lib.rs
#[cfg(feature = "database")]
pub mod database;

#[cfg(feature = "web")]
pub mod web;

#[cfg(feature = "cli")]
pub mod cli;
```

## Impact

Not following proper project structure leads to:
- Difficult code navigation and maintenance
- Poor collaboration experience
- Inconsistent code organization
- Harder testing and debugging
- Reduced code reusability

## References

- [The Cargo Book](https://doc.rust-lang.org/cargo/)
- [Rust API Guidelines - Crate Structure](https://rust-lang.github.io/api-guidelines/crate-structure.html)
- [Rust by Example - Modules](https://doc.rust-lang.org/rust-by-example/mod.html)
