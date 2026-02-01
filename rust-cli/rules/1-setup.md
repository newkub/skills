# Project Setup

ตั้งค่า Rust CLI project ด้วยโครงสร้างที่ถูกต้อง

## Create Project
ใช้ `cargo new --bin project-name` สร้าง binary project

ตัวอย่าง:
```bash
cargo new --bin my-cli
cd my-cli
```

## Add Dependencies
เพิ่ม crates ที่จำเป็นใน `Cargo.toml`

ตัวอย่าง:
```toml
[dependencies]
clap = { version = "4.0", features = ["derive"] }
anyhow = "1.0"
```

## Configure Cargo.toml
ตั้งค่า metadata ใน `[package]` section

ตัวอย่าง:
```toml
[package]
name = "my-cli"
version = "0.1.0"
edition = "2021"
description = "My CLI application"
license = "MIT"
```

## Verification
1. ตรวจสอบว่า project สร้างสำเร็จ
2. ทดสอบด้วย `cargo run -- --help`
3. ตรวจสอบ dependencies ติดตั้งสำเร็จ
