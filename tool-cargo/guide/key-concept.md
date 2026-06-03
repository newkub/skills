# Key Concept

## What is Cargo?

Cargo เป็น Rust's package manager และ build tool ที่รวม:
- **Dependency management**: download, build, update crates
- **Build coordination**: compile, link, output artifacts
- **Project scaffolding**: create new projects
- **Publishing**: share packages on crates.io

## Core Concepts

### 1. Crate

Crate คือ package ใน Rust ecosystem:

| Type | Description | Output |
|------|-------------|--------|
| Binary crate | Executable program | Executable |
| Library crate | Reusable code | .rlib |
| Example | Demo code | Executable |

### 2. Manifest (Cargo.toml)

```toml
[package]
name = "my-crate"
version = "1.0.0"
edition = "2021"

[dependencies]
# ...

[dev-dependencies]
# ...

[build-dependencies]
# ...
```

### 3. Cargo.lock

Auto-generated file ที่ lock dependency versions:

```toml
# อย่าแก้ไขด้วยมือ
# Cargo จัดการเอง
[[package]]
name = "serde"
version = "1.0.193"
```

### 4. Workspace

Multi-package project:

```toml
[workspace]
members = ["crates/core", "crates/cli"]
```

### 5. Features

Conditional compilation:

```toml
[features]
default = ["full"]
full = []
minimal = []
```

## Package Structure

```
my-project/
├── Cargo.toml
├── Cargo.lock
├── src/
│   ├── lib.rs
│   ├── main.rs
│   └── bin/
│       └── other.rs
├── tests/
│   └── integration_test.rs
├── examples/
│   └── example.rs
└── benches/
    └── bench.rs
```

## Build Targets

| Target | Source | Command |
|--------|--------|--------|
| Library | src/lib.rs | `cargo build --lib` |
| Binary | src/main.rs | `cargo build --bin` |
| Test | tests/*.rs | `cargo test` |
| Example | examples/*.rs | `cargo run --example` |
| Benchmark | benches/*.rs | `cargo bench` |
| Build script | build.rs | Runs automatically |

## Dependency Versioning

| Syntax | Meaning |
|--------|---------|
| `1.0` | >= 1.0, < 2.0 |
| `=1.0.0` | Exactly 1.0.0 |
| `>1.0` | Greater than 1.0 |
| `<2.0` | Less than 2.0 |
| `>=1.0, <2.0` | Range |
| `1.0.*` | Any 1.0.x |

## Build Profiles

| Profile | Use Case | Optimizations |
|---------|----------|---------------|
| dev | Development | None, debug info |
| release | Production | Full, no debug |
| test | Running tests | With test config |
| bench | Benchmarks | Like release |

## When to Use

| Task | Command |
|------|---------|
| New project | `cargo new` |
| Add dependency | `cargo add` |
| Build | `cargo build` |
| Run tests | `cargo test` |
| Publish | `cargo publish` |

## Next Steps

- ดู [all-features.md](all-features.md) สำหรับ features ทั้งหมด
- ดู [best-practices.md](best-practices.md) สำหรับแนวทางปฏิบัติ