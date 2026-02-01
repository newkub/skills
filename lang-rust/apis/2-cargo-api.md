# Cargo API Reference

## Cargo Overview

Cargo is Rust's build system and package manager. It manages dependencies, builds projects, runs tests, and handles project configuration.

## Cargo Commands

### Project Creation
```bash
# Create new binary project
cargo new my_project

# Create new library project
cargo new my_lib --lib

# Create project in specific directory
cargo new my_project --bin /path/to/directory

# Create project with specific name
cargo new my_project --name "awesome-project"
```

### Building
```bash
# Debug build
cargo build

# Release build (optimized)
cargo build --release

# Build specific target
cargo build --target x86_64-unknown-linux-musl

# Build with features
cargo build --features "async,database"

# Build specific package in workspace
cargo build -p my_package

# Verbose build output
cargo build --verbose

# Build with custom target directory
cargo build --target-dir /tmp/build
```

### Running
```bash
# Run debug build
cargo run

# Run release build
cargo run --release

# Run with arguments
cargo run -- --arg1 --arg2 value

# Run specific binary
cargo run --bin my_binary

# Run with features
cargo run --features "async"

# Run example
cargo run --example my_example
```

### Testing
```bash
# Run all tests
cargo test

# Run specific test
cargo test test_name

# Run tests in specific module
cargo test module_name

# Run tests with output
cargo test -- --nocapture

# Run release tests
cargo test --release

# Run tests with specific pattern
cargo test test_*

# Run ignored tests
cargo test -- --ignored

# Run single thread
cargo test -- --test-threads=1

# Run doc tests
cargo test --doc
```

### Checking
```bash
# Check if code compiles
cargo check

# Check with all targets
cargo check --all-targets

# Check specific package
cargo check -p my_package

# Check with features
cargo check --features "async"

# Verbose check
cargo check --verbose
```

### Documentation
```bash
# Generate documentation
cargo doc

# Open documentation in browser
cargo doc --open

# Include dependencies in documentation
cargo doc --no-deps

# Document private items
cargo doc --document-private-items

# Generate documentation for specific package
cargo doc -p my_package
```

### Formatting
```bash
# Format all code
cargo fmt

# Check formatting without changing files
cargo fmt --check

# Format specific file
cargo fmt -- src/main.rs

# Verbose output
cargo fmt --verbose

# Format all packages in workspace
cargo fmt --all
```

### Linting
```bash
# Run clippy
cargo clippy

# Run clippy with all targets
cargo clippy --all-targets

# Treat warnings as errors
cargo clippy -- -D warnings

# Run clippy on specific package
cargo clippy -p my_package

# Run specific clippy lints
cargo clippy -- -W clippy::all

# Allow specific lints
cargo clippy -- -A clippy::too_many_arguments
```

### Benchmarking
```bash
# Run benchmarks
cargo bench

# Run specific benchmark
cargo bench benchmark_name

# Run with output format
cargo bench -- --output-format html

# Run release benchmarks
cargo bench --release
```

## Dependency Management

### Adding Dependencies
```bash
# Add dependency from crates.io
cargo add serde

# Add with specific version
cargo add serde --version "1.0.150"

# Add with features
cargo add serde --features "derive"

# Add development dependency
cargo add criterion --dev

# Add local dependency
cargo add my_lib --path "../my_lib"

# Add git dependency
cargo add my_lib --git "https://github.com/user/my_lib.git"

# Add git dependency with branch
cargo add my_lib --git "https://github.com/user/my_lib.git" --branch "main"

# Add git dependency with tag
cargo add my_lib --git "https://github.com/user/my_lib.git" --tag "v1.0.0"
```

### Updating Dependencies
```bash
# Update all dependencies
cargo update

# Update specific dependency
cargo update serde

# Update to latest compatible versions
cargo update --allow-prerelease

# Update with verbose output
cargo update --verbose

# Dry run (don't actually update)
cargo update --dry-run
```

### Removing Dependencies
```bash
# Remove dependency
cargo rm serde

# Remove development dependency
cargo rm criterion --dev

# Remove multiple dependencies
cargo rm serde tokio
```

### Listing Dependencies
```bash
# List dependencies in tree format
cargo tree

# List with features
cargo tree --features

# List duplicates
cargo tree --duplicates

# List as JSON
cargo tree --format json

# List specific package
cargo tree -p serde

# List with versions
cargo tree --format "{p}"
```

## Workspace Management

### Workspace Structure
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
```

### Workspace Commands
```bash
# Build all workspace members
cargo build

# Build specific member
cargo build -p core

# Test all workspace members
cargo test

# Test specific member
cargo test -p cli

# Run on specific member
cargo run -p cli

# Check all workspace members
cargo check --workspace
```

## Configuration

### Cargo.toml Structure
```toml
[package]
name = "my_project"
version = "0.1.0"
edition = "2021"
authors = ["Your Name <your.email@example.com>"]
license = "MIT OR Apache-2.0"
repository = "https://github.com/username/my_project"
description = "A brief description of your project"
keywords = ["keyword1", "keyword2"]
categories = ["category"]
readme = "README.md"
homepage = "https://example.com"
documentation = "https://docs.example.com"

[dependencies]
# External dependencies
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"] }

# Local dependencies
my_lib = { path = "../my_lib" }

# Git dependencies
external_lib = { git = "https://github.com/user/lib.git", branch = "main" }

# Optional dependencies
optional_dep = { version = "1.0", optional = true }

[dev-dependencies]
# Test-only dependencies
criterion = "0.5"
proptest = "1.0"

[build-dependencies]
# Build script dependencies
cc = "1.0"

[features]
default = ["std"]
std = []
async = ["tokio"]
database = ["sqlx"]
full = ["std", "async", "database"]

[bin]
# Multiple binaries
my_binary = { path = "src/my_binary.rs" }

[[bin]]
name = "another_binary"
path = "src/another_binary.rs"

[lib]
# Library configuration
name = "my_lib"
crate-type = ["cdylib", "rlib"]

[[example]]
name = "my_example"
path = "examples/my_example.rs"

[[test]]
name = "integration_test"
path = "tests/integration_test.rs"

[[bench]]
name = "my_benchmark"
harness = false

[profile.dev]
# Debug profile settings
opt-level = 0
debug = true
overflow-checks = true

[profile.release]
# Release profile settings
opt-level = 3
debug = false
lto = true
codegen-units = 1
panic = "abort"
strip = true

[profile.test]
# Test profile settings
opt-level = 1
debug = true

[profile.bench]
# Benchmark profile settings
opt-level = 3
debug = true
```

### Cargo Config
Create `.cargo/config.toml`:

```toml
# Build configuration
[build]
target = "x86_64-unknown-linux-gnu"
rustflags = ["-C", "target-cpu=native"]

# Registry configuration
[registry]
default = "crates-io"

[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"

# Alternative registry
[source.private-registry]
registry = "https://github.com/company/registry-index"

# Net configuration
[net]
retry = 2
git-fetch-with-cli = true

# Target-specific configuration
[target.x86_64-unknown-linux-gnu]
linker = "x86_64-linux-gnu-gcc"

[target.wasm32-unknown-unknown]
runner = "wasm-bindgen-test-runner"

# Environment variables
[env]
RUST_LOG = "debug"
RUST_BACKTRACE = "1"
```

## Publishing

### Publishing to crates.io
```bash
# Check if package can be published
cargo publish --dry-run

# Publish package
cargo publish

# Publish with specific registry
cargo publish --registry private-registry

# Publish without uploading
cargo publish --no-upload

# Publish with token
cargo publish --token API_TOKEN
```

### Package Management
```bash
# Package without publishing
cargo package

# List package contents
cargo package --list

# Verify package
cargo verify --manifest-path Cargo.toml
```

## Cross-Compilation

### Target Management
```bash
# Install target
rustup target add x86_64-unknown-linux-musl

# List installed targets
rustup target list --installed

# List all available targets
rustup target list

# Remove target
rustup target remove x86_64-unknown-linux-musl
```

### Cross-Compilation Commands
```bash
# Build for specific target
cargo build --target x86_64-unknown-linux-musl

# Run tests on target
cargo test --target x86_64-unknown-linux-musl

# Run on target (if possible)
cargo run --target x86_64-pc-windows-gnu
```

## Environment Variables

### Common Variables
```bash
# Set Rust home directory
export RUSTUP_HOME="$HOME/.rustup"

# Set Cargo home directory
export CARGO_HOME="$HOME/.cargo"

# Add to PATH
export PATH="$CARGO_HOME/bin:$PATH"

# Set default edition
export RUSTC_BOOTSTRAP=1

# Enable debug info
export RUSTFLAGS="-C debuginfo=2"

# Set target directory
export CARGO_TARGET_DIR="$HOME/.cargo-target"
```

### Cargo-Specific Variables
```bash
# Set cargo home
export CARGO_HOME="/path/to/cargo"

# Set target directory
export CARGO_TARGET_DIR="/path/to/target"

# Set build jobs
export CARGO_BUILD_JOBS=4

# Set network retry
export CARGO_NET_RETRY=3

# Set git timeout
export CARGO_NET_GIT_FETCH_WITH_CLI=true
```

## Troubleshooting

### Common Issues
```bash
# Clean build artifacts
cargo clean

# Clean specific target
cargo clean --target x86_64-unknown-linux-musl

# Clean release artifacts
cargo clean --release

# Check for outdated dependencies
cargo outdated

# Check for unused dependencies
cargo machete

# Check cargo configuration
cargo config get

# Verify package
cargo verify --manifest-path Cargo.toml
```

### Debug Information
```bash
# Verbose output
cargo build --verbose

# Very verbose output
cargo build -vvv

# Show timing information
cargo build --timings

# Show build plan
cargo build --message-format=json
```

## Integration with IDEs

### VS Code Integration
```json
{
    "rust-analyzer.cargo.loadOutDirsFromCheck": true,
    "rust-analyzer.checkOnSave.command": "clippy",
    "rust-analyzer.cargo.features": "all",
    "rust-analyzer.imports.granularity.group": "module",
    "rust-analyzer.completion.addCallParentheses": true,
    "rust-analyzer.inlayHints.typeHints.enable": true,
    "rust-analyzer.inlayHints.parameterHints.enable": true
}
```

### Tasks Configuration
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "cargo check",
            "type": "shell",
            "command": "cargo",
            "args": ["check"],
            "group": "build"
        },
        {
            "label": "cargo test",
            "type": "shell",
            "command": "cargo",
            "args": ["test"],
            "group": "test"
        },
        {
            "label": "cargo clippy",
            "type": "shell",
            "command": "cargo",
            "args": ["clippy", "--", "-D", "warnings"],
            "group": "build"
        }
    ]
}
```
