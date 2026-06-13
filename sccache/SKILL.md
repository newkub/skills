---
title: sccache
description: Compiler cache สำหรับ accelerate compilation ของ C/C++, Rust, และ nvcc
auto_execution_mode: 3
---

## Goal

ใช้งาน sccache สำหรับ accelerate compilation ของ C/C++, Rust, และ nvcc

## Scope

ใช้สำหรับ:
- Accelerate compilation ของ C/C++, Rust, nvcc
- Reduce build time ใน CI/CD pipelines
- Distributed cache สำหรับ teams
- Remote cache ด้วย S3, Redis, Memcached

## Execute

### 1. Install sccache

ติดตั้ง sccache:
```bash
cargo install sccache
```

### 2. For Rust

สำหรับ Rust:
```bash
export RUSTC_WRAPPER=sccache
cargo build
```

### 3. For C/C++

สำหรับ C/C++:
```bash
export CC=sccache gcc
export CXX=sccache g++
make
```

### 4. Stats

ดู stats:
```bash
sccache --start-server
sccache -z
```

## Rules

- ใช้ `cargo install sccache` สำหรับติดตั้ง
- ใช้ `RUSTC_WRAPPER=sccache` สำหรับ Rust
- ใช้ `CC=sccache gcc` สำหรับ C/C++
- ใช้ `sccache --start-server` สำหรับ start server
- ใช้ `sccache -z` สำหรับดู stats

## Expected Outcome

- Compilation ที่ accelerated
- Build time ที่ลดลงใน CI/CD
- Distributed cache สำหรับ teams
- Remote cache ที่ efficient
