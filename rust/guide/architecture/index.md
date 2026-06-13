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

## Related Topics

- **State Management** - อ่าน `state-management.md` สำหรับการจัดการ state
- **Error Handling** - อ่าน `error-handling.md` สำหรับ error handling architecture
- **Async Architecture** - อ่าน `async-architecture.md` สำหรับ async patterns
- **Testing Architecture** - อ่าน `testing-architecture.md` สำหรับ testing
- **Cargo Workspace** - อ่าน `cargo-workspace.md` สำหรับ workspace setup
