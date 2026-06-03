# Quick Start

## Create New Project

### Library

```bash
cargo new my-library --lib
```

### Binary

```bash
cargo new my-binary
```

### With specific name

```bash
cargo new my_project
```

## Basic Commands

### Build

```bash
# Debug build
cargo build

# Release build
cargo build --release

# Specific target
cargo build --target x86_64-unknown-linux-gnu
```

### Run

```bash
# Run binary
cargo run

# With arguments
cargo run -- arg1 arg2

# Run example
cargo run --example my_example

# Run specific binary
cargo run --bin my_binary
```

### Test

```bash
# Run all tests
cargo test

# Run specific test
cargo test test_name

# Run doc tests
cargo test --doc

# Run with output
cargo test -- --nocapture
```

### Check

```bash
# Quick type check
cargo check

# Update dependencies
cargo update
```

### Clean

```bash
# Clean build artifacts
cargo clean

# Clean release build only
cargo clean --release
```

## Cargo.toml

### Basic structure

```toml
[package]
name = "my-project"
version = "0.1.0"
edition = "2021"

[dependencies]
serde = "1.0"
tokio = { version = "1", features = ["full"] }

[dev-dependencies]
criterion = "1.5"
```

### Workspaces

```toml
[workspace]
members = ["packages/*"]

[workspace.package]
version = "1.0.0"
edition = "2021"

[workspace.dependencies]
serde = "1.0"
```

## First Project

### Step 1: Create

```bash
cargo new hello-world
cd hello-world
```

### Step 2: Write code

```rust
// src/main.rs
fn main() {
    println!("Hello, world!");
}
```

### Step 3: Build and run

```bash
cargo run
```

### Step 4: Add dependency

```toml
# Cargo.toml
[dependencies]
ferris-says = "0.2"
```

```rust
// src/main.rs
use ferris_says::say;

fn main() {
    let stdout = std::io::stdout();
    let message = String::from("Hello, Ferris!");
    say(message.as_bytes(), stdout.lock()).unwrap();
}
```

```bash
cargo build
cargo run
```

## Next Steps

- ดู [key-concept.md](key-concept.md) สำหรับแนวคิดหลัก
- ดู [all-features.md](all-features.md) สำหรับ features ทั้งหมด
- ดู [configuration.md](configuration.md) สำหรับการตั้งค่า