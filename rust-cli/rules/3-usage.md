# Usage Patterns

ใช้ patterns ที่ถูกต้องสำหรับ CLI applications

## Error Handling
ใช้ `anyhow` สำหรับ error handling

ตัวอย่าง:
```rust
fn run() -> anyhow::Result<()> {
    let cli = Cli::parse();
    process_file(&cli.input)?;
    Ok(())
}
```

## Exit Codes
ใช้ exit codes ที่ถูกต้อง

ตัวอย่าง:
```rust
fn main() {
    if let Err(e) = run() {
        eprintln!("Error: {}", e);
        std::process::exit(1);
    }
}
```

## Progress Indicators
แสดง progress ให้ user

ตัวอย่าง:
```rust
use indicatif::{ProgressBar, ProgressStyle};

let bar = ProgressBar::new(100);
bar.set_style(ProgressStyle::default_bar());
for i in 0..100 {
    bar.inc(1);
}
bar.finish();
```

## Verification
1. ตรวจสอบว่า errors แสดงชัดเจน
2. ทดสอบ exit codes ถูกต้อง
3. ตรวจสอบ progress indicators แสดง
