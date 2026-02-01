# Examples

## Basic SDK Structure

### Minimal SDK
```rust
// Cargo.toml
[package]
name = "my-sdk"
version = "0.1.0"
edition = "2021"

[dependencies]
thiserror = "1.0"
reqwest = { version = "0.11", features = ["json"] }
serde = { version = "1.0", features = ["derive"] }
```

```rust
// src/lib.rs
pub mod error;
pub mod client;

pub use client::Client;
pub use error::{Error, Result};
```

```rust
// src/error.rs
use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("Network error: {0}")]
    Network(#[from] reqwest::Error),

    #[error("Invalid input: {0}")]
    Validation(String),

    #[error("Authentication failed")]
    Authentication,

    #[error("Rate limit exceeded")]
    RateLimit,
}

pub type Result<T> = std::result::Result<T, Error>;
```

```rust
// src/client.rs
use crate::{Error, Result};
use serde::Deserialize;

#[derive(Debug, Clone)]
pub struct Client {
    api_key: String,
    base_url: String,
}

#[derive(Debug, Deserialize)]
pub struct Data {
    pub id: String,
    pub name: String,
}

impl Client {
    pub fn new(api_key: impl Into<String>) -> Self {
        Client {
            api_key: api_key.into(),
            base_url: "https://api.example.com".to_string(),
        }
    }

    pub fn with_base_url(mut self, url: impl Into<String>) -> Self {
        self.base_url = url.into();
        self
    }

    pub fn fetch_data(&self, id: &str) -> Result<Data> {
        if id.is_empty() {
            return Err(Error::Validation("ID cannot be empty".to_string()));
        }

        let url = format!("{}/data/{}", self.base_url, id);
        let response = reqwest::blocking::get(&url)?;

        Ok(response.json()?)
    }
}
```

## Usage Example

### Basic Usage
```rust
use my_sdk::Client;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("your-api-key");
    let data = client.fetch_data("123")?;

    println!("Data: {:?}", data);
    Ok(())
}
```

### Builder Pattern
```rust
use my_sdk::Client;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("api-key")
        .with_base_url("https://custom.api.com");

    let data = client.fetch_data("123")?;
    Ok(())
}
```

## Async SDK

### Async Client
```rust
// src/client.rs
use crate::{Error, Result};
use serde::Deserialize;

#[derive(Debug, Clone)]
pub struct Client {
    api_key: String,
    base_url: String,
    client: reqwest::Client,
}

impl Client {
    pub fn new(api_key: impl Into<String>) -> Self {
        Client {
            api_key: api_key.into(),
            base_url: "https://api.example.com".to_string(),
            client: reqwest::Client::new(),
        }
    }

    pub async fn fetch_data(&self, id: &str) -> Result<Data> {
        if id.is_empty() {
            return Err(Error::Validation("ID cannot be empty".to_string()));
        }

        let url = format!("{}/data/{}", self.base_url, id);
        let response = self.client.get(&url).send().await?;

        Ok(response.json().await?)
    }
}
```

### Async Usage
```rust
use my_sdk::Client;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("api-key");
    let data = client.fetch_data("123").await?;

    println!("Data: {:?}", data);
    Ok(())
}
```

## Testing Examples

### Unit Tests
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_client_creation() {
        let client = Client::new("api-key");
        assert_eq!(client.api_key(), "api-key");
    }

    #[test]
    fn test_empty_id_validation() {
        let client = Client::new("api-key");
        let result = client.fetch_data("");
        assert!(matches!(result, Err(Error::Validation(_))));
    }
}
```

### Integration Tests
```rust
// tests/integration_test.rs
use my_sdk::Client;

#[test]
fn test_full_workflow() {
    let client = Client::new("test-key");
    let data = client.fetch_data("123").unwrap();
    assert_eq!(data.id, "123");
}
```

## Documentation Tests

### Examples in Doc Comments
```rust
impl Client {
    /// Fetches data จาก API
    ///
    /// # Examples
    ///
    /// ```rust
    /// use my_sdk::Client;
    ///
    /// let client = Client::new("api-key");
    /// let data = client.fetch_data("123")?;
    /// # Ok::<(), Box<dyn std::error::Error>>(())
    /// ```
    pub fn fetch_data(&self, id: &str) -> Result<Data> {
        // implementation
    }
}
```

## Examples Directory

### Basic Example
```rust
// examples/basic.rs
use my_sdk::Client;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new("api-key");
    let data = client.fetch_data("123")?;

    println!("Fetched data: {:?}", data);
    Ok(())
}
```

### Run Example
```bash
cargo run --example basic
```
