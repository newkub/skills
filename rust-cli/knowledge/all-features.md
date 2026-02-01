# All Features

ฟีเจอร์ที่มีใน Rust CLI development

## Argument Parsing
ใช้ clap สำหรับ parse arguments

ตัวอย่าง:
```rust
#[derive(Parser)]
struct Cli {
    #[arg(short, long)]
    input: String,
}
```

## Subcommands
สร้าง subcommands สำหรับ complex CLIs

ตัวอย่าง:
```rust
#[derive(Subcommand)]
enum Commands {
    Add { name: String },
    Remove { name: String },
}
```

## Configuration Files
อ่าน config จาก files

ตัวอย่าง:
```rust
use serde::Deserialize;

#[derive(Deserialize)]
struct Config {
    key: String,
}
```

## Progress Bars
แสดง progress ด้วย indicatif

ตัวอย่าง:
```rust
let bar = ProgressBar::new(100);
bar.inc(1);
```

## Colors
ใช้ colored สำหรับ terminal colors

ตัวอย่าง:
```rust
use colored::*;

println!("{}", "Success".green());
```
