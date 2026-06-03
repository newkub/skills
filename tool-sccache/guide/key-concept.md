# Key Concept

## Purpose

แนวคิดหลักและหลักการทำงานของ sccache ที่ทำให้เป็น powerful compiler caching tool

## What is sccache?

sccache เป็น compiler caching tool ที่หลีกเลี่ยงการ compile เมื่อไม่จำเป็น โดยเก็บ cache ของ compilation results ไว้ใช้ใหม่

## Core Concepts

### 1. Compiler Wrapper

```bash
# Rust
export RUSTC_WRAPPER=sccache
cargo build

# C/C++
export CC=sccache gcc
export CXX=sccache g++
make
```

### 2. Cache Key

sccache ใช้ hash ของ:
- Compiler flags
- Source file contents
- Environment variables
- Compiler version

### 3. Local Cache

```bash
# Default location
~/.cache/sccache

# Custom location
export SCCACHE_DIR=/path/to/cache
```

### 4. Remote Cache

```bash
# S3
export SCCACHE_S3_BUCKET=my-bucket
export AWS_ACCESS_KEY_ID=xxx
export AWS_SECRET_ACCESS_KEY=xxx

# Redis
export SCCACHE_REDIS=redis://localhost:6379
```

## Supported Compilers

| Language | Compiler |
|----------|----------|
| **C/C++** | gcc, clang, msvc |
| **Rust** | rustc |
| **NVIDIA** | nvcc |

## When to Use

### Use sccache When:

| Scenario | Reason |
|----------|--------|
| **CI/CD** | Faster builds |
| **Large projects** | Reduce compilation time |
| **Multiple devs** | Share cache |
| **Rebuilds** | Avoid recompile unchanged files |

## Summary

| Concept | Description |
|---------|-------------|
| **Compiler Wrapper** | Intercept compiler calls |
| **Cache Key** | Hash of compilation inputs |
| **Local Cache** | File-based local storage |
| **Remote Cache** | S3, Redis, distributed |