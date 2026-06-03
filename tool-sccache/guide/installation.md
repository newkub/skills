# Installation

## Purpose

แนะนำการติดตั้ง sccache และเริ่มต้นใช้งาน

## Scope

- Package Installation
- Rust Setup
- C/C++ Setup

## Installation

### Rust (cargo)

```bash
cargo install sccache
```

### Binary

```bash
# Linux
curl -L https://github.com/mozilla/sccache/releases/latest/download/sccache-x86_64-unknown-linux-musl.tar.gz | tar xz
mv sccache ~/.local/bin/

# macOS
brew install sccache

# Windows
choco install sccache
```

## Rust Setup

### Environment

```bash
export RUSTC_WRAPPER=sccache
```

### In .cargo/config.toml

```toml
[build]
rustc-wrapper = "sccache"
```

## C/C++ Setup

### GCC/Clang

```bash
export CC=sccache gcc
export CXX=sccache g++
```

### CMake

```cmake
set(CMAKE_C_COMPILER "sccache")
set(CMAKE_CXX_COMPILER "sccache")
```

## Verify Installation

```bash
sccache --version
sccache --start-server
sccache -s
```

## Summary

| Step | Command |
|------|---------|
| **Install** | `cargo install sccache` |
| **Rust** | `export RUSTC_WRAPPER=sccache` |
| **C/C++** | `export CC=sccache gcc` |