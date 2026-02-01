---
trigger: manual
description: ตั้งค่า main.rs สำหรับ Rust project
instruction:
  - สร้างไฟล์ src/main.rs
  - กำหนด composition root
  - กำหนด error handling
condition:
  - ใช้เมื่อสร้าง Rust application
---

# main.rs Setup

## 1. Application Entry Point

สร้างไฟล์ `src/main.rs`:

```rust
use [crate_name]::prelude::*;
use [crate_name]::{config::AppConfig, telemetry::init_subscriber};

#[tokio::main]
async fn main() -> Result<()> {
    init_subscriber();

    let config = AppConfig::load()
        .context("Failed to load configuration")?;

    info!("Starting application with config: {:?}", config);

    let app = [crate_name]::app::App::new(config);
    app.run().await?;

    Ok(())
}
```

## 2. Composition Root

`main.rs` เป็น Composition Root ที่:
- โหลด configuration
- ตั้งค่า telemetry
- ประกอบ dependencies
- เริ่ม application

## 3. Error Handling

ใช้ `Result<()>` และ `?` operator:

```rust
#[tokio::main]
async fn main() -> Result<()> {
    init_subscriber();

    let config = AppConfig::load()?;
    let app = App::new(config);
    app.run().await?;

    Ok(())
}
```

## 4. Graceful Shutdown

```rust
use tokio::signal;

#[tokio::main]
async fn main() -> Result<()> {
    init_subscriber();

    let config = AppConfig::load()?;
    let app = App::new(config);

    tokio::select! {
        result = app.run() => result?,
        _ = signal::ctrl_c() => {
            info!("Received shutdown signal");
            Ok(())
        }
    }
}
```
