---
title: sccache
description: Compiler cache สำหรับ accelerate compilation ของ C/C++, Rust, และ nvcc
auto_execution_mode: 3
---

## When to use

ใช้ skill นี้เมื่อต้องการ:
- Accelerate compilation ของ C/C++, Rust, nvcc
- Reduce build time ใน CI/CD pipelines
- Distributed cache สำหรับ teams
- Remote cache ด้วย S3, Redis, Memcached

## Skills Related

- `/lang-rust` - Rust programming
- `/guide-performance-engineering` - Performance optimization

## References

### guide/

| No | File | Description |
|----|------|-------------|
| 1 | key-concept.md | แนวคิดหลัก - Compiler wrapper, Cache |
| 2 | how-it-works.md | การทำงาน - Hash, Store, Retrieve |
| 3 | features.md | ฟีเจอร์ทั้งหมด - Remote storage |
| 4 | installation.md | การติดตั้ง - cargo, binary |
| 5 | configuration.md | การตั้งค่า - env, config |
| 6 | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| 7 | best-practices.md | แนวทางปฏิบัติที่ดี |

### references/

| No | File | Description |
|----|------|-------------|
| 1 | website.md | Official links และ resources |
| 2 | cli.md | CLI commands |
| 3 | configuration.md | Configuration options reference |
| 4 | api.md | Server API |

## Quick Start

```bash
# Install
cargo install sccache

# For Rust
export RUSTC_WRAPPER=sccache
cargo build

# For C/C++
export CC=sccache gcc
export CXX=sccache g++
make

# Stats
sccache --start-server
sccache -z
```
