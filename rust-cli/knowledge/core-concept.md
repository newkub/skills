# Core Concepts

แนวคิดพื้นฐานสำหรับ Rust CLI development

## Binary Crates
CLI applications เป็น binary crates ที่ compile เป็น executable

ตัวอย่าง:
```rust
fn main() {
    println!("Hello, world!");
}
```

## Argument Parsing
CLI tools ต้อง parse arguments จาก command line

ตัวอย่าง:
```rust
use clap::Parser;

#[derive(Parser)]
struct Args {
    name: String,
}
```

## Error Handling
ใช้ Result type สำหรับ error handling

ตัวอย่าง:
```rust
fn read_file(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}
```

## Exit Codes
ใช้ exit codes บอกสถานะการทำงาน

ตัวอย่าง:
```rust
std::process::exit(0);  // Success
std::process::exit(1);  // Error
```
