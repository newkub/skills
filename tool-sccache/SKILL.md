# tool-sccache

แนวทางการใช้งาน sccache - Compiler cache สำหรับ accelerate compilation

## Overview

sccache เป็น ccache-like compiler caching tool สำหรับ accelerate compilation ของ C/C++, Rust, และ nvcc รองรับ local cache และ remote cache (S3, Redis, Memcached) ช่วยลดเวลา build อย่างมากสำหรับ CI/CD pipelines

## File Structure

```
tool-sccache/
├── SKILL.md
├── guide/
│   ├── key-concept.md
│   ├── how-it-works.md
│   ├── features.md
│   ├── installation.md
│   ├── configuration.md
│   ├── quick-start.md
│   └── best-practices.md
└── references/
    ├── website.md
    ├── cli.md
    ├── configuration.md
    └── api.md
```

## Content Summary

| Folder | File | Description |
|--------|------|-------------|
| **Guide** | key-concept.md | แนวคิดหลัก - Compiler wrapper, Cache |
| **Guide** | how-it-works.md | การทำงาน - Hash, Store, Retrieve |
| **Guide** | features.md | ฟีเจอร์ทั้งหมด - Remote storage |
| **Guide** | installation.md | การติดตั้ง - cargo, binary |
| **Guide** | configuration.md | การตั้งค่า - env, config |
| **Guide** | quick-start.md | คู่มือเริ่มต้นใช้งาน |
| **Guide** | best-practices.md | แนวทางปฏิบัติที่ดี |
| **Reference** | website.md | Official links และ resources |
| **Reference** | cli.md | CLI commands |
| **Reference** | configuration.md | Configuration options reference |
| **Reference** | api.md | Server API |

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

## Key Features

| Feature | Description |
|---------|-------------|
| **Multi-language** | C/C++, Rust, nvcc |
| **Local Cache** | File-based cache |
| **Remote Cache** | S3, Redis, Memcached |
| **Distributed** | sccache-dist for CI |
| **Stats** | Hit/miss statistics |

## Usage Order

1. **Start**: `guide/installation.md` → `guide/key-concept.md`
2. **Learn**: `guide/how-it-works.md` → `guide/features.md`
3. **Configure**: `guide/configuration.md`
4. **Reference**: `references/cli.md`
5. **Best Practices**: `guide/best-practices.md`