# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน sccache อย่างรวดเร็ว

## 5-Minute Tutorial

### Step 1: Install

```bash
cargo install sccache
```

### Step 2: Start Server

```bash
sccache --start-server
```

### Step 3: Configure

```bash
# Rust
export RUSTC_WRAPPER=sccache

# C/C++
export CC=sccache gcc
export CXX=sccache g++
```

### Step 4: Build

```bash
cargo build
# or
make
```

### Step 5: Check Stats

```bash
sccache -s
```

## Rust Example

```bash
export RUSTC_WRAPPER=sccache
cargo build --release
```

## C/C++ Example

```bash
export CC=sccache gcc
export CXX=sccache g++
mkdir build && cd build
cmake .. && make
```

## Next Steps

### Learn More

- [Key Concept](key-concept.md) - แนวคิดหลัก
- [How It Works](how-it-works.md) - การทำงานภายใน

### Configuration

- [Configuration](configuration.md) - การตั้งค่า
- [Best Practices](best-practices.md) - แนวทางปฏิบัติ

## Summary

| Step | Command |
|------|---------|
| **Install** | `cargo install sccache` |
| **Start** | `sccache --start-server` |
| **Use** | `export RUSTC_WRAPPER=sccache` |
| **Stats** | `sccache -s` |