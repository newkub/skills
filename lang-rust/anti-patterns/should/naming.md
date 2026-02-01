# Rust Dependencies Management

## Why

Proper dependency management ensures security, maintainability, and optimal performance. Rust's Cargo system provides powerful tools for managing dependencies effectively.

## Anti-patterns

- Adding dependencies without justification
- Using outdated or unmaintained crates
- Ignoring security vulnerabilities
- Over-specifying version constraints
- Not auditing dependencies regularly

## Best Practices

Choose dependencies carefully, keep them updated, and manage versions strategically to balance stability and security.

## Rules

### 1. Minimize Dependencies

Only add dependencies when absolutely necessary:

```toml
# Good - minimal dependencies
[dependencies]
serde = { version = "1.0", features = ["derive"] } # For serialization
tokio = { version = "1.0", features = ["rt-multi-thread"] } # For async runtime

# Bad - dependency bloat
[dependencies]
serde = "1.0"
serde_json = "1.0"
serde_derive = "1.0" # Redundant with serde derive feature
tokio = "1.0"
tokio-util = "0.7"
tokio-stream = "0.1" # May not be needed
```

### 2. Use Specific Version Constraints

Be precise about version requirements:

```toml
# Good - specific but flexible versions
[dependencies]
serde = "1.0.150"  # At least 1.0.150, compatible with 1.x
tokio = { version = "1.20", features = ["full"] }
clap = { version = "4.0", features = ["derive"] }

# Bad - too loose or too strict
[dependencies]
serde = "*"           # Too loose - can break compatibility
serde = "=1.0.150"    # Too strict - prevents patch updates
serde = ">=1.0.150"   # Allows breaking changes
```

### 3. Enable Only Needed Features

Reduce compilation time and binary size:

```toml
# Good - selective feature enabling
[dependencies]
serde = { version = "1.0", features = ["derive"] } # Only derive feature
tokio = { version = "1.0", features = ["rt-multi-thread", "net"] } # Only needed features
tracing = { version = "0.1", features = ["log"] } # Only log compatibility

# Bad - enabling all features
[dependencies]
serde = { version = "1.0", features = ["full"] } # Includes unnecessary features
tokio = { version = "1.0", features = ["full"] } # Includes many unused features
```

### 4. Use Workspace for Multi-Crate Projects

Organize related packages efficiently:

```toml
# Cargo.toml (workspace root)
[workspace]
members = [
    "core",
    "cli",
    "web",
    "shared",
]

[workspace.dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"] }
tracing = "0.1"

# core/Cargo.toml
[package]
name = "my-app-core"
version = "0.1.0"

[dependencies]
serde = { workspace = true }
tokio = { workspace = true }

# cli/Cargo.toml
[package]
name = "my-app-cli"
version = "0.1.0"

[dependencies]
my-app-core = { path = "../core" }
clap = { version = "4.0", features = ["derive"] }
tokio = { workspace = true }
```

### 5. Audit Dependencies Regularly

Check for security vulnerabilities and outdated packages:

```bash
# Check for security vulnerabilities
cargo audit

# Check for outdated dependencies
cargo outdated

# Update dependencies
cargo update

# Check for unused dependencies
cargo machete
```

### 6. Use Development Dependencies Wisely

Separate development and production dependencies:

```toml
[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["rt-multi-thread"] }

[dev-dependencies]
tokio-test = "0.4"          # For testing async code
criterion = { version = "0.5", features = ["html_reports"] } # For benchmarks
proptest = "1.0"            # For property-based testing
mockall = "0.11"            # For mocking
tempfile = "3.0"            # For temporary files in tests

[build-dependencies]
cc = "1.0"                  # For compiling C code
```

### 7. Handle Feature Flags Properly

Design your own feature flags strategically:

```toml
# Cargo.toml
[package]
name = "my-library"
version = "0.1.0"

[features]
default = ["std"]
std = []
async = ["tokio", "futures"]
web = ["axum", "tower"]
cli = ["clap"]
full = ["std", "async", "web", "cli"]

[dependencies]
serde = { version = "1.0", features = ["derive"], optional = true }
tokio = { version = "1.0", features = ["rt-multi-thread"], optional = true }
futures = { version = "0.3", optional = true }
axum = { version = "0.6", optional = true }
tower = { version = "0.4", optional = true }
clap = { version = "4.0", features = ["derive"], optional = true }
```

### 8. Use Alternative Registries When Needed

Specify alternative crate registries:

```toml
# Cargo.toml
[dependencies]
private-crate = { version = "1.0", registry = "private-registry" }

[registries]
private-registry = { index = "https://github.com/my-org/registry-index" }
```

### 9. Document Dependency Choices

Explain why each dependency is needed:

```toml
# Cargo.toml
[dependencies]
# Core dependencies
serde = { version = "1.0", features = ["derive"] } # Serialization/deserialization
tokio = { version = "1.0", features = ["rt-multi-thread", "net"] } # Async runtime and networking
tracing = "0.1" # Structured logging
thiserror = "1.0" # Error handling

# Domain-specific
sqlx = { version = "0.7", features = ["postgres", "runtime-tokio-rustls"] } # Database access
axum = "0.6" # Web framework
tower = "0.4" # Middleware and utilities
```

### 10. Monitor Binary Size Impact

Track how dependencies affect binary size:

```bash
# Analyze binary size
cargo bloat --release --crates

# Check for unused dependencies
cargo udeps

# Optimize binary size
cargo build --release
ls -la target/release/my-app
```

### 11. Use Lock Files in CI

Ensure reproducible builds:

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions-rs/toolchain@v1
      with:
        toolchain: stable
        override: true
    
    - name: Cache dependencies
      uses: actions/cache@v3
      with:
        path: |
          ~/.cargo/registry
          ~/.cargo/git
          target
        key: ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}
    
    - name: Check lock file
      run: cargo check --locked
    
    - name: Run tests
      run: cargo test --locked
```

### 12. Handle Dependency Conflicts

Resolve version conflicts strategically:

```toml
# Use workspace dependencies to ensure consistency
[workspace.dependencies]
serde = "1.0.150"
tokio = "1.20.0"

# In individual crates
[dependencies]
serde = { workspace = true }
tokio = { workspace = true }

# If conflicts persist, consider version ranges
[dependencies]
some-crate = { version = "1.0", features = ["serde1"] }
another-crate = { version = "2.0", features = ["serde1"] }
```

## Impact

Poor dependency management leads to:
- Security vulnerabilities from outdated packages
- Large binary sizes and slow compilation
- Dependency conflicts and resolution issues
- Legal compliance problems
- Maintenance burden and technical debt

## References

- [The Cargo Book - Dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)
- [Rust Security Working Group](https://github.com/rustsec/advisory-db)
- [cargo-audit](https://github.com/RustSec/rustsec/tree/main/cargo-audit)
- [cargo-outdated](https://github.com/kbknapp/cargo-outdated)
