# Best Practices

แนวทางปฏิบัติที่ดีสำหรับ Rust CLI development

## Use clap for Argument Parsing
ใช้ clap สำหรับ parse CLI arguments อย่างเป็นทางการ

ตัวอย่าง:
```rust
use clap::Parser;

#[derive(Parser)]
struct Cli {
    #[arg(short, long)]
    input: String,
}
```

## Handle Errors Gracefully
ใช้ `anyhow` และแสดง error messages ชัดเจน

ตัวอย่าง:
```rust
fn run() -> anyhow::Result<()> {
    process_file()?;
    Ok(())
}
```

## Provide Helpful Messages
แสดง help text และ error messages ที่ชัดเจน

ตัวอย่าง:
```rust
#[command(about = "Process files efficiently")]
struct Cli {
    /// Input file to process
    #[arg(short, long)]
    input: String,
}
```

## Use Exit Codes Correctly
ใช้ exit codes ตาม conventions

ตัวอย่าง:
```rust
std::process::exit(0);  // Success
std::process::exit(1);  // Error
```

## Test CLI Applications
เขียน tests สำหรับ CLI logic

ตัวอย่าง:
```rust
#[test]
fn test_parse_args() {
    let args = Cli::try_parse_from(["test", "--input", "file.txt"]);
    assert!(args.is_ok());
}
```
