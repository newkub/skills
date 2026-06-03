# Best Practices

## Project Structure

### Recommended Layout

```
my-crate/
├── Cargo.toml
├── src/
│   ├── lib.rs          # Library entry
│   └── main.rs         # Binary entry
├── tests/
│   └── integration.rs
├── examples/
│   └── basic.rs
├── benches/
│   └── my_bench.rs
└── build.rs            # Build script (if needed)
```

### Separate Binaries

```
src/
├── lib.rs
└── bin/
    ├── tool1.rs
    └── tool2.rs
```

## Dependencies

### Version Specifiers

```toml
# Recommended: semver compatible
[dependencies]
serde = "1.0"
tokio = "1"

# For critical deps: pin exact version
time = "=0.3.17"
```

### Features

```toml
[features]
default = ["derive"]
derive = ["serde/derive"]
full = ["derive", "extra"]
extra = []
```

### Dev Dependencies

```toml
[dev-dependencies]
criterion = "1.5"
proptest = "1.0"
quickcheck = "1.0"
mockall = "0.11"
```

## Code Organization

### Module Structure

```rust
// src/lib.rs
pub mod module1;
pub mod module2;
mod private;

pub use module1::{Item1, Item2};
```

### Visibility

```rust
// Public API
pub fn public_function() {}

// Semi-public (crate internal)
pub(crate) fn crate_function() {}

// Private
fn private_function() {}
```

## Testing

### Unit Tests

```rust
// In source files
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_something() {
        assert_eq!(2 + 2, 4);
    }
}
```

### Integration Tests

```rust
// tests/integration.rs
use my_crate::*;

#[test]
fn it_works() {
    // test public API
}
```

### Doc Tests

```rust
/// # Example
///
/// ```
/// # use my_crate::function;
/// # fn main() { function(); }
/// ```
pub fn function() {}
```

## Build Optimization

### Release Profile

```toml
[profile.release]
opt-level = 3
lto = true
codegen-units = 1
panic = "abort"
strip = true
```

### Dev Profile

```toml
[profile.dev]
opt-level = 0
debug = true
```

## Workspace

### Workspace Structure

```toml
# Root Cargo.toml
[workspace]
members = ["crates/core", "crates/cli"]
resolver = "2"

[workspace.package]
version = "1.0.0"
edition = "2021"
authors = ["..."]
license = "MIT"

[workspace.dependencies]
serde = "1.0"
tokio = "1"
```

### Shared Dependencies

```toml
# In member crate
[dependencies]
serde = { workspace = true }
```

## Error Handling

### Custom Errors

```rust
use thiserror::Error;

#[derive(Error, Debug)]
pub enum MyError {
    #[error("Not found: {0}")]
    NotFound(String),

    #[error("Invalid input: {reason}")]
    InvalidInput { reason: String },

    #[error(transparent)]
    Io(#[from] std::io::Error),
}
```

## Documentation

### Document Everything

```rust
/// My awesome function
///
/// # Arguments
///
/// * `input` - The input string
///
/// # Returns
///
/// Returns a result
///
/// # Examples
///
/// ```
/// # use my_crate::awesome;
/// # assert_eq!(awesome("test"), "test");
/// ```
pub fn awesome(input: &str) -> String {
    input.to_string()
}
```

## Best Practices Checklist

- [ ] Use semantic versioning
- [ ] Document public API
- [ ] Write tests for public functions
- [ ] Use `#[deny(warnings)]` in CI
- [ ] Run `cargo fmt` before commit
- [ ] Use `cargo clippy` for linting
- [ ] Use `cargo audit` for security