---
trigger: manual
description: ตั้งค่า config.rs สำหรับ Rust project
instruction:
  - สร้างไฟล์ src/config.rs
  - กำหนด configuration structs
  - กำหนด default implementation
  - กำหนด load function
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# config.rs Setup

## 1. Configuration Structure

สร้างไฟล์ `src/config.rs`:

```rust
use figment::{Figment, providers::{Format, Toml, Env}};
use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct AppConfig {
    pub database: DatabaseConfig,
    pub api: ApiConfig,
}

#[derive(Deserialize, Debug)]
pub struct DatabaseConfig {
    pub url: String,
    pub max_connections: u32,
}

#[derive(Deserialize, Debug)]
pub struct ApiConfig {
    pub port: u16,
    pub host: String,
}
```

## 2. Default Implementation

```rust
impl Default for AppConfig {
    fn default() -> Self {
        Self {
            database: DatabaseConfig {
                url: "sqlite://app.db".to_string(),
                max_connections: 10,
            },
            api: ApiConfig {
                port: 8080,
                host: "127.0.0.1".to_string(),
            },
        }
    }
}
```

## 3. Loading Configuration

```rust
impl AppConfig {
    pub fn load() -> Result<Self, figment::Error> {
        Figment::new()
            .merge(Toml::file("Config.toml"))
            .merge(Env::prefixed("APP_").split("__"))
            .extract()
    }
}
```

## 4. Usage

ใน `main.rs`:

```rust
use crate::config::AppConfig;
use anyhow::Context;

#[tokio::main]
async fn main() -> Result<()> {
    let config = AppConfig::load()
        .context("Failed to load configuration")?;

    println!("Database URL: {}", config.database.url);
    println!("API Port: {}", config.api.port);

    Ok(())
}
```

## 5. Environment Variables Override

```bash
# Override database URL
APP_DATABASE__URL="postgres://user:pass@localhost/db"

# Override API port
APP_API__PORT=9000
```
