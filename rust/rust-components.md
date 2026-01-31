---
trigger: manual
description: สร้างโครงสร้าง components/ สำหรับ Rust project
instruction:
  - สร้างโฟลเดอร์ src/components
  - สร้าง pure functions
  - เขียน unit tests
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# components/ Structure

## 1. Purpose

โฟลเดอร์ `components/` เก็บ **pure functions** ที่ไม่มี side effects:
- ไม่มี I/O operations
- ไม่มี state mutations
- ทุก inputs ผ่าน parameters
- ทุก outputs ผ่าน return values

## 2. Structure

```
src/components/
├── mod.rs              # Module exports
├── calculator.rs       # Calculation functions
├── validator.rs        # Validation functions
├── parser.rs           # Parsing functions
└── transformer.rs      # Data transformation functions
```

## 3. Example: calculator.rs

```rust
//! Calculation components

/// Calculates total from items
pub fn calculate_total(items: &[Item]) -> f64 {
    items.iter().map(|i| i.price * i.quantity).sum()
}

/// Calculates average
pub fn calculate_average(values: &[f64]) -> f64 {
    if values.is_empty() {
        return 0.0;
    }
    values.iter().sum::<f64>() / values.len() as f64
}
```

## 4. Example: validator.rs

```rust
//! Validation components

use crate::error::Result;

/// Validates email format
pub fn validate_email(email: &str) -> Result<()> {
    if !email.contains('@') {
        return Err(AppError::Validation("Invalid email format".to_string()));
    }
    Ok(())
}

/// Validates password strength
pub fn validate_password(password: &str) -> Result<()> {
    if password.len() < 8 {
        return Err(AppError::Validation("Password too short".to_string()));
    }
    Ok(())
}
```

## 5. Example: parser.rs

```rust
//! Parsing components

use crate::error::Result;

/// Parses CSV string into items
pub fn parse_csv(csv: &str) -> Result<Vec<Item>> {
    csv.lines()
        .skip(1) // Skip header
        .map(|line| parse_line(line))
        .collect()
}

fn parse_line(line: &str) -> Result<Item> {
    let parts: Vec<&str> = line.split(',').collect();
    if parts.len() != 3 {
        return Err(AppError::InvalidInput("Invalid CSV line".to_string()));
    }
    Ok(Item {
        id: parts[0].to_string(),
        name: parts[1].to_string(),
        price: parts[2].parse()?,
    })
}
```

## 6. Testing

เขียน unit tests สำหรับทุก pure functions:

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use pretty_assertions::assert_eq;

    #[test]
    fn test_calculate_total_empty() {
        let items = vec![];
        assert_eq!(calculate_total(&items), 0.0);
    }

    #[test]
    fn test_calculate_total_with_items() {
        let items = vec![
            Item { price: 10.0, quantity: 2 },
            Item { price: 5.0, quantity: 3 },
        ];
        assert_eq!(calculate_total(&items), 35.0);
    }
}
```

## 7. mod.rs

```rust
pub mod calculator;
pub mod validator;
pub mod parser;
pub mod transformer;
```
