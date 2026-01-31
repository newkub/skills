---
trigger: manual
description: ตั้งค่า Config.toml สำหรับ Rust project
instruction:
  - สร้างไฟล์ Config.toml
  - กำหนด configuration structure
  - กำหนด environment variables override
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# Config.toml Setup

## 1. Configuration Structure

สร้างไฟล์ `Config.toml` ใน root ของ project:

```toml
[database]
url = "postgres://user:pass@localhost/db"
max_connections = 10

[api]
port = 8080
host = "127.0.0.1"

[logging]
level = "info"
```

## 2. Environment Variables Override

สามารถ override ค่าด้วย environment variables:

```bash
# Format: PREFIX__SECTION__KEY
APP_DATABASE__URL="postgres://newuser:newpass@localhost/newdb"
APP_API__PORT=9000
```

## 3. Example Config.toml

```toml
# Database Configuration
[database]
url = "sqlite://app.db"
max_connections = 10

# API Configuration
[api]
port = 8080
host = "127.0.0.1"

# Logging Configuration
[logging]
level = "info"

# Feature Flags
[features]
enable_cache = true
enable_metrics = false
```

## 4. Usage in config.rs

ดูวิธีใช้งานใน `/rust-config-rs`
