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

## Skills Related

- `/lang-rust` - Rust programming
- `/guide-performance-engineering` - Performance optimization

## โครงสร้าง Directory

```
tool-sccache/
├── SKILL.md
├── guide/              (Guides และ best practices)
├── key-concepts/       (แนวคิดหลัก)
├── principles/         (หลักการ)
├── references/         (CLI, configuration, API reference)
├── workflows/          (Workflows สำหรับการใช้งาน)
├── templates/          (Templates สำหรับ configuration)
└── scripts/            (Scripts สำหรับ automation)
```

## หมวดหมู่ไฟล์

| Folder | Files | Description |
|--------|-------|-------------|
| [guide/](guide/) | 0 files | Guides และ best practices สำหรับการใช้งาน |
| [key-concepts/](key-concepts/) | 0 files | แนวคิดหลักของ sccache |
| [principles/](principles/) | 0 files | หลักการในการใช้งาน sccache |
| [references/](references/) | 4 files | CLI, configuration, API reference |
| [workflows/](workflows/) | 0 files | Workflows สำหรับการใช้งาน |
| [templates/](templates/) | 0 files | Templates สำหรับ configuration |
| [scripts/](scripts/) | 0 files | Scripts สำหรับ automation |

## Guide Files

| File | Description |
|------|-------------|
| [guide/key-concept.md](guide/key-concept.md) | แนวคิดหลัก - Compiler wrapper, Cache |
| [guide/how-it-works.md](guide/how-it-works.md) | การทำงาน - Hash, Store, Retrieve |
| [guide/features.md](guide/features.md) | ฟีเจอร์ทั้งหมด - Remote storage |
| [guide/installation.md](guide/installation.md) | การติดตั้ง - cargo, binary |
| [guide/configuration.md](guide/configuration.md) | การตั้งค่า - env, config |
| [guide/quick-start.md](guide/quick-start.md) | คู่มือเริ่มต้นใช้งาน |
| [guide/best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |

## Reference Files

| File | Description |
|------|-------------|
| [references/website.md](references/website.md) | Official links และ resources |
| [references/cli.md](references/cli.md) | CLI commands |
| [references/configuration.md](references/configuration.md) | Configuration options reference |
| [references/api.md](references/api.md) | Server API |
