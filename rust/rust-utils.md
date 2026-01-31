---
trigger: manual
description: สร้างโครงสร้าง utils/ สำหรับ Rust project
instruction:
  - สร้างโฟลเดอร์ src/utils
  - สร้าง pure helper functions
  - เขียน unit tests
condition:
  - ใช้เมื่อมี helper functions ที่ใช้บ่อย
---

# utils/ Structure

## 1. Purpose

โฟลเดอร์ `utils/` เก็บ **pure helper functions** ที่ไม่มี dependencies ภายใน:
- String utilities
- Date/time utilities
- Math utilities
- Conversion utilities

## 2. Structure

```
src/utils/
├── mod.rs              # Module exports
├── string.rs           # String utilities
├── date.rs             # Date/time utilities
├── math.rs             # Math utilities
└── convert.rs          # Conversion utilities
```

## 3. Example: string.rs

```rust
/// Truncates string to max length
pub fn truncate(s: &str, max_len: usize) -> String {
    if s.len() <= max_len {
        s.to_string()
    } else {
        format!("{}...", &s[..max_len.saturating_sub(3)])
    }
}

/// Converts snake_case to camelCase
pub fn snake_to_camel(s: &str) -> String {
    let parts: Vec<&str> = s.split('_').collect();
    parts.iter()
        .enumerate()
        .map(|(i, part)| {
            if i == 0 {
                part.to_string()
            } else {
                capitalize(part)
            }
        })
        .collect()
}

/// Capitalizes first letter
pub fn capitalize(s: &str) -> String {
    let mut chars = s.chars();
    match chars.next() {
        None => String::new(),
        Some(first) => first.to_uppercase().chain(chars).collect(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_truncate() {
        assert_eq!(truncate("hello", 10), "hello");
        assert_eq!(truncate("hello world", 8), "hello...");
    }

    #[test]
    fn test_snake_to_camel() {
        assert_eq!(snake_to_camel("hello_world"), "helloWorld");
        assert_eq!(snake_to_camel("my_var_name"), "myVarName");
    }
}
```

## 4. Example: date.rs

```rust
use chrono::{DateTime, Utc};

/// Formats datetime to ISO 8601
pub fn format_iso(dt: &DateTime<Utc>) -> String {
    dt.to_rfc3339()
}

/// Parses ISO 8601 datetime
pub fn parse_iso(s: &str) -> Result<DateTime<Utc>> {
    DateTime::parse_from_rfc3339(s)
        .map(|dt| dt.with_timezone(&Utc))
        .map_err(|e| AppError::Validation(format!("Invalid datetime: {}", e)))
}

/// Formats datetime as relative time
pub fn format_relative(dt: &DateTime<Utc>) -> String {
    let now = Utc::now();
    let duration = now.signed_duration_since(*dt);

    if duration.num_days() > 0 {
        format!("{} days ago", duration.num_days())
    } else if duration.num_hours() > 0 {
        format!("{} hours ago", duration.num_hours())
    } else if duration.num_minutes() > 0 {
        format!("{} minutes ago", duration.num_minutes())
    } else {
        "just now".to_string()
    }
}
```

## 5. Example: math.rs

```rust
/// Rounds to n decimal places
pub fn round_to(value: f64, decimals: u32) -> f64 {
    let multiplier = 10_f64.powi(decimals as i32);
    (value * multiplier).round() / multiplier
}

/// Calculates percentage
pub fn percentage(part: f64, total: f64) -> f64 {
    if total == 0.0 {
        0.0
    } else {
        (part / total) * 100.0
    }
}

/// Clamps value between min and max
pub fn clamp<T: Ord>(value: T, min: T, max: T) -> T {
    if value < min {
        min
    } else if value > max {
        max
    } else {
        value
    }
}
```

## 6. Example: convert.rs

```rust
/// Converts bytes to human readable size
pub fn bytes_to_human(bytes: u64) -> String {
    const UNITS: &[&str] = &["B", "KB", "MB", "GB", "TB"];
    let mut size = bytes as f64;
    let mut unit_index = 0;

    while size >= 1024.0 && unit_index < UNITS.len() - 1 {
        size /= 1024.0;
        unit_index += 1;
    }

    format!("{:.2} {}", size, UNITS[unit_index])
}

/// Converts hex string to bytes
pub fn hex_to_bytes(hex: &str) -> Result<Vec<u8>> {
    (0..hex.len())
        .step_by(2)
        .map(|i| u8::from_str_radix(&hex[i..i+2], 16))
        .collect::<Result<Vec<u8>, _>>()
        .map_err(|e| AppError::Validation(format!("Invalid hex: {}", e)))
}

/// Converts bytes to hex string
pub fn bytes_to_hex(bytes: &[u8]) -> String {
    bytes.iter()
        .map(|b| format!("{:02x}", b))
        .collect()
}
```

## 7. mod.rs

```rust
pub mod string;
pub mod date;
pub mod math;
pub mod convert;
```
