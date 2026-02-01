# Project Structure

## Description
กำหนดโครงสร้างโปรเจกต์ Rust SDK ที่เป็นมาตรฐานและบำรุงรักษาได้

## Structure
```
my-sdk/
├── Cargo.toml
├── src/
│   ├── lib.rs              # Entry point
│   ├── mod.rs              # Module exports
│   ├── error.rs            # Error types
│   └── client.rs           # Main client
├── examples/               # Usage examples
├── tests/                  # Integration tests
└── docs/                   # Additional docs
```

## Guidelines
- แยก error types ไว้ในไฟล์เดียว
- เก็บ examples ไว้ใน `examples/` folder
- ใช้ `mod.rs` สำหรับ exports
- จัดเรียง modules ตามความสำคัญ

## Examples
```rust
// src/lib.rs
pub mod error;
pub mod client;

pub use client::Client;
pub use error::{Error, Result};

pub use error::Error;
pub use error::Result;
```

## Anti-Patterns
❌ ใส่ทุกอย่างใน `lib.rs` แบบเดียว
❌ ไม่แยก error types
❌ ไม่มี examples

## Verification
1. ตรวจสอบว่ามี `src/lib.rs` เป็น entry point
2. ตรวจสอบว่ามี `examples/` folder
3. ตรวจสอบว่ามี `tests/` folder
4. ตรวจสอบว่า modules แยกอย่างชัดเจน
