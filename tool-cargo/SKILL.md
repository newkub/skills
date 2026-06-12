# tool-cargo

## Overview

แนวทางการใช้งาน Cargo สำหรับ Rust package management และ build tool


## When to use



## Skills Related



## References


## What is Cargo?

Cargo เป็น Rust's package manager และ build tool ที่ช่วยจัดการ:
- Dependencies (crates)
- Building projects
- Compiling code
- Publishing packages
- Version management

## File Structure

| Folder | Description |
|--------|-------------|
| guide/ | Guides และ tutorials สำหรับการใช้งาน |
| references/ | References และ links ภายนอก (CLI, configuration, API, web) |
| reference/ | Official links |
| examples/ | ตัวอย่างการใช้งาน |
| rules/ | Rules และ conventions |
| patterns/ | Design patterns |
| usecase/ | Use cases |
| workflows/ | Workflows |
| integration/ | Integration กับ tools อื่นๆ |
| changelog/ | Changelog และ version history |

## Quick Start

```bash
# Create new project
cargo new my-project

# Build project
cargo build

# Run project
cargo run

# Run tests
cargo test

# Build release
cargo build --release

# Publish to crates.io
cargo publish
```

## Core Concepts

| Concept | Description |
|---------|-------------|
| Crate | Package ใน Rust |
| Cargo.toml | Manifest file สำหรับ project |
| Cargo.lock | Lock file สำหรับ dependencies |
| Workspace | Multi-package project |
| Target | Build target (bin/lib/test/bench) |

## Guide Files

| File | Description |
|------|-------------|
| [installation.md](guide/installation.md) | วิธีติดตั้ง Rust/Cargo |
| [quick-start.md](guide/quick-start.md) | เริ่มต้นใช้งาน Cargo |
| [key-concept.md](guide/key-concept.md) | แนวคิดหลักและหลักการทำงาน |
| [all-features.md](guide/all-features.md) | Features ทั้งหมดของ Cargo |
| [best-practices.md](guide/best-practices.md) | แนวทางปฏิบัติที่ดี |
| [configuration.md](guide/configuration.md) | การตั้งค่า Cargo |
| [troubleshooting.md](guide/troubleshooting.md) | การแก้ปัญหา |

## Reference Files

| Folder | Files |
|--------|-------|
| cli/ | [index.md](references/cli.mdindex.md) - CLI commands reference |
| configuration/ | [index.md](references/configuration.mdindex.md) - Configuration options |
| api/ | [index.md](references/api.mdindex.md) - Programmatic API |
| web/ | [index.md](references/web.mdindex.md) - Web interface |

## Version

- Current: 1.91+ (Rust 2024 edition)
- Documentation: https://doc.rust-lang.org/cargo/
- Registry: https://crates.io