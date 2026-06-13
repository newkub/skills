# Cargo Workspace

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
