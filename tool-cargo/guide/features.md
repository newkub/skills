# All Features

## Core Commands

### cargo new

Create new project:

```bash
cargo new my-project
cargo new my-library --lib
cargo new my-project --bin
cargo new my-project --name custom-name
```

### cargo build

Build project:

```bash
# Debug build
cargo build

# Release build
cargo build --release

# Specific target
cargo build --target x86_64-unknown-linux-gnu

# Current package only
cargo build -p my-package

# Exclude package
cargo build --exclude my-package
```

### cargo run

Run binary:

```bash
# Run default binary
cargo run

# Run with args
cargo run -- arg1 arg2

# Run specific example
cargo run --example my_example

# Run with features
cargo run --features "full,extra"
```

### cargo test

Run tests:

```bash
# All tests
cargo test

# Specific test
cargo test test_name

# Doc tests
cargo test --doc

# Lib tests only
cargo test --lib

# Bin tests only
cargo test --bins

# Integration tests only
cargo test --tests

# With output
cargo test -- --nocapture

# Failed first
cargo test -- --fail-fast
```

### cargo check

Quick type check:

```bash
cargo check
cargo check -p my-package
cargo check --all-targets
```

### cargo clippy

Lint code:

```bash
cargo clippy
cargo clippy --all-targets
cargo clippy -- -W clippy::pedantic
```

### cargo fmt

Format code:

```bash
cargo fmt
cargo fmt --check
cargo fmt -- --emit=stdout
```

## Dependency Management

### cargo add

Add dependency:

```bash
cargo add serde
cargo add serde --features derive
cargo add serde@1.0
cargo add serde --dev
cargo add serde --build
cargo add tokio --features full
```

### cargo remove

Remove dependency:

```bash
cargo remove serde
cargo remove serde --dev
```

### cargo update

Update dependencies:

```bash
# Update all
cargo update

# Update specific
cargo update serde

# Update with version bump
cargo update -p serde --precise 1.0.200
```

### cargo tree

Show dependency tree:

```bash
cargo tree
cargo tree --depth 2
cargo tree --invert
cargo tree --no-dedupe
```

## Publishing

### cargo publish

```bash
# Dry run
cargo publish --dry-run

# Skip verification
cargo publish --no-verify

# With specific registry
cargo publish --registry my-registry

# Package only
cargo publish --package my-package
```

### cargo login

Login to registry:

```bash
cargo login
cargo login --registry my-registry
```

### cargo owner

Manage owners:

```bash
cargo owner --add my-github-team
cargo owner --remove username
cargo owner --list
```

## Other Commands

### cargo bench

Run benchmarks:

```bash
cargo bench
cargo bench --no-run
cargo bench -- my_bench
```

### cargo doc

Build documentation:

```bash
cargo doc
cargo doc --open
cargo doc --no-deps
cargo doc -p my-package
```

### cargo install

Install binary:

```bash
cargo install ripgrep
cargo install --force ripgrep
cargo install --version 1.0 ripgrep
cargo install --path .
```

### cargo search

Search crates.io:

```bash
cargo search serde
cargo search --limit 10 serde
```

### cargo version

Show version:

```bash
cargo --version
rustc --version
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CARGO_HOME` | Cargo home directory |
| `CARGO_TARGET_DIR` | Override target dir |
| `CARGO_PROFILE_*` | Override profile settings |
| `RUSTUP_TOOLCHAIN` | Override toolchain |
| `CARGO_NET_GIT_FETCH_WITH_CLI` | Use git CLI |