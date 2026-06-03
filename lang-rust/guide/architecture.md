# Architecture

## Project Structure

```
my-project/
├── Cargo.toml
├── src/
│   ├── main.rs          # Entry point
│   ├── lib.rs           # Library root
│   ├── bin/
│   │   └── daemon.rs    # Binary crate
│   ├── modules/         # Application modules
│   │   ├── mod.rs
│   │   ├── user.rs
│   │   ├── auth.rs
│   │   └── config.rs
│   └── utils/           # Utilities
│       ├── mod.rs
│       ├── logging.rs
│       └── helpers.rs
├── tests/
│   └── integration.rs
├── benches/
│   └── my_benchmark.rs
└── examples/
    └── simple.rs
```

## Layered Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
├─────────────────────────────────────────────────────────┤
│  main.rs, routes.rs, handlers.rs, views.rs              │
│  - HTTP handlers, CLI commands, UI components           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   Application Layer                      │
├─────────────────────────────────────────────────────────┤
│  services.rs, use_cases.rs, business_logic.rs           │
│  - Orchestration, workflow, business rules             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                     Domain Layer                         │
├─────────────────────────────────────────────────────────┤
│  models.rs, entities.rs, value_objects.rs                │
│  - Core business entities, domain logic                  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  Infrastructure Layer                    │
├─────────────────────────────────────────────────────────┤
│  repositories.rs, external_api.rs, db.rs                 │
│  - Database, external services, persistence             │
└─────────────────────────────────────────────────────────┘
```

## Module Organization

```rust
// src/lib.rs
pub mod models;
pub mod services;
pub mod repositories;

pub use models::*;
pub use services::*;
```

```rust
// src/models/mod.rs
pub mod user;
pub mod order;

pub use user::User;
pub use order::Order;
```

## State Management

### Application State

```rust
use std::sync::Arc;
use tokio::sync::Mutex;

struct AppState {
    db: DatabasePool,
    cache: Arc<Mutex<LruCache>>,
    config: Config,
}

impl AppState {
    fn new(config: Config) -> Self {
        AppState {
            db: create_pool(&config),
            cache: Arc::new(Mutex::new(LruCache::new(1000))),
            config,
        }
    }
}
```

### Shared State

```rust
use std::sync::{Arc, RwLock};

struct SharedData {
    counter: RwLock<u32>,
}

let data = Arc::new(SharedData {
    counter: RwLock::new(0),
});

// Clone Arc to share
let data_clone = Arc::clone(&data);
```

## Error Handling Architecture

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

## Async Architecture

```rust
// Async main
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize tracing
    tracing_subscriber::fmt::init();

    // Create server
    let app = my_app().await?;
    
    // Run server
    let addr = SocketAddr::from(([0, 0, 0, 0], 8080));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await?;

    Ok(())
}

async fn my_app() -> Result<Router, Box<dyn std::error::Error>> {
    let state = AppState::new().await?;
    Ok(router().with_state(state))
}
```

## Testing Architecture

```rust
// tests/unit/models.rs
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_user_creation() {
        let user = User::new("Alice", "alice@example.com");
        assert_eq!(user.name(), "Alice");
    }

    #[test]
    fn test_validation() {
        let result = User::new("", "");
        assert!(result.is_err());
    }
}
```

## Cargo Workspace

```toml
# Cargo.toml (workspace root)
[workspace]
members = [
    "crates/core",
    "crates/api",
    "crates/cli",
    "crates/lib",
]
resolver = "2"
```

```
workspace/
├── Cargo.toml
├── crates/
│   ├── core/           # Core library
│   │   ├── Cargo.toml
│   │   └── src/
│   ├── api/            # HTTP API
│   │   ├── Cargo.toml
│   │   └── src/
│   ├── cli/            # CLI tool
│   │   ├── Cargo.toml
│   │   └── src/
│   └── lib/            # Shared library
│       ├── Cargo.toml
│       └── src/
└── target/
```