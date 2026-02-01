# Configuration

ตั้งค่า CLI arguments และ options ด้วย clap

## Define CLI Arguments
ใช้ derive macro จาก clap

ตัวอย่าง:
```rust
use clap::Parser;

#[derive(Parser)]
#[command(name = "my-cli")]
#[command(about = "A CLI tool", long_about = None)]
struct Cli {
    /// Input file path
    #[arg(short, long)]
    input: String,

    /// Output directory
    #[arg(short, long)]
    output: Option<String>,

    /// Verbose output
    #[arg(short, long)]
    verbose: bool,
}
```

## Add Configuration Files
สร้าง config file สำหรับ settings

ตัวอย่าง:
```rust
use serde::Deserialize;

#[derive(Deserialize)]
struct Config {
    default_output: String,
    max_retries: u32,
}
```

## Environment Variables
ใช้ env variables สำหรับ config

ตัวอย่าง:
```rust
#[arg(short, long, env = "MY_CLI_OUTPUT")]
output: Option<String>,
```

## Verification
1. ตรวจสอบว่า arguments รับค่าถูกต้อง
2. ทดสอบด้วย `cargo run -- --help`
3. ตรวจสอบ environment variables ทำงาน
