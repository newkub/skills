# Project Setup

## When to Use
สร้าง CLI project ใหม่ด้วย Rust

## Quick Start
1. สร้าง project ด้วย `cargo new cli-app`
2. เพิ่ม clap dependency ใน Cargo.toml
3. ตั้งค่า main.rs ด้วย clap derive
4. ทดสอบการทำงาน

## Rules

### 1.1 Initialize Project
```bash
cargo new my-cli --bin
cd my-cli
```

### 1.2 Add Dependencies
```toml
[dependencies]
clap = { version = "4.0", features = ["derive"] }
tokio = { version = "1.0", features = ["full"], optional = true }
anyhow = "1.0"
thiserror = "1.0"
```

### 1.3 Basic Structure
```rust
use clap::Parser;

#[derive(Parser)]
#[clap(name = "my-cli", version = "1.0")]
struct Cli {
    #[clap(short, long)]
    verbose: bool,
    
    input: String,
}

fn main() {
    let cli = Cli::parse();
    // Your logic here
}
```

### 1.4 Development Tools
- เพิ่ม `cargo-watch` สำหรับ development
- ใช้ `cargo clippy` สำหรับ linting
- ตั้งค่า `cargo fmt` สำหรับ formatting
