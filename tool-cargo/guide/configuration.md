# Configuration

## Cargo.toml

### Package Section

```toml
[package]
name = "my-crate"
version = "1.0.0"
edition = "2021"
authors = ["Name <email@example.com>"]
license = "MIT OR Apache-2.0"
readme = "README.md"
homepage = "https://example.com"
repository = "https://github.com/user/repo"
documentation = "https://docs.rs/my-crate"
description = "A short description"
categories = ["encoding", "network"]
keywords = ["example", "library"]
rust-version = "1.56"
```

### Dependencies

```toml
[dependencies]
# Simple version
serde = "1.0"

# With features
tokio = { version = "1", features = ["full"] }

# With multiple features
serde = { version = "1", default-features = false, features = ["derive"] }

# Optional dependency
sniff = { version = "0.1", optional = true }

# Git dependency
colored = { git = "https://github.com/oegedijk/colored", branch = "main" }

# Local dependency
my-utils = { path = "../utils" }

# External crate rename
unicode-segmentation = { package = "unicode-segmentation" }
```

### Development Dependencies

```toml
[dev-dependencies]
criterion = "1.5"
proptest = "1.0"
```

### Build Dependencies

```toml
[build-dependencies]
prost-build = "0.11"
```

## Build Profile

```toml
[profile.dev]
opt-level = 0
debug = true
split-debuginfo = "unpacked"

[profile.release]
opt-level = 3
lto = true
codegen-units = 1
panic = "abort"
strip = true

[profile.bench]
inherits = "release"
debug = true

[profile.test]
inherits = "dev"
opt-level = 0
```

## Workspace

### Basic Workspace

```toml
[workspace]
members = ["crates/core", "crates/cli"]
exclude = ["crates/old"]
resolver = "2"
```

### Workspace Package

```toml
[workspace]
members = ["packages/*"]

[workspace.package]
version = "1.0.0"
edition = "2021"
authors = ["..."]
license = "MIT"

[workspace.dependencies]
serde = "1.0"
thiserror = "1.0"
```

## .cargo/config.toml

### Build Configuration

```toml
[build]
jobs = 4
rustflags = ["-C", "target-cpu=native"]
target-dir = "target"

[target.x86_64-unknown-linux-gnu]
linker = "clang"
rustflags = ["-C", "link-arg=-fuse-ld=lld"]
```

### Build Scripts

```toml
[build]
rustc-wrapper = "sccache"
```

### Environment

```toml
[env]
RUST_BACKTRACE = "1"
MY_VAR = "value"
```

### Aliases

```toml
[alias]
b = "build"
t = "test"
r = "run"
c = "check"
l = "clippy"
fmt-check = "fmt -- --check"
```

## Feature Flags

```toml
[features]
default = ["default"]
default = []
derive = ["serde/derive"]
full = ["derive", "extra"]
extra = ["dep:optional-dep"]

# Unified transitive dependency
# All features share the same version
[features]
a = ["b"]
b = []
```

## Package Metadata

### Badges

```toml
[badges]
maintenance = { status = "actively-developed" }
travis-ci = { repository = "user/repo" }
appveyor = { repository = "user/repo" }
circle-ci = { repository = "user/repo" }
codecov = { repository = "user/repo", branch = "main", service = "github" }
```

### Links

```toml
[package]
links = "my_sys"

[lib]
name = "my_crate"
crate-type = ["lib", "cdylib", "staticlib"]
```

## .cargo/ignore

```
.git/
target/
*.md
tests/
benches/
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CARGO_HOME` | Cargo home |
| `CARGO_TARGET_DIR` | Target directory |
| `CARGO_MANIFEST_DIR` | Manifest directory |
| `CARGO_PROFILE_*_DEBUG` | Debug settings |
| `CARGO_NET_*` | Network settings |