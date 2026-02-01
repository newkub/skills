# Error Handling

## Description
จัดการ errors อย่างเป็นระบบ ให้ผู้ใช้จัดการได้ง่าย

## Guidelines
### Error Types
- สร้าง custom error type ด้วย `thiserror` หรือ `anyhow`
- ใช้ `#[derive(Error)]` สำหรับ error types
- ให้ error messages ชัดเจนและเป็นประโยชน์

### Error Conversion
- ใช้ `?` operator สำหรับ error propagation
- ใช้ `From` trait สำหรับ error conversion
- ใช้ `context()` สำหรับเพิ่มข้อมูลเพิ่มเติม

### Error Categories
- Network errors
- Validation errors
- Authentication errors
- Rate limiting errors

## Examples
```rust
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

impl Client {
    pub fn fetch_data(&self, id: &str) -> Result<Data> {
        if id.is_empty() {
            return Err(Error::Validation("ID cannot be empty".to_string()));
        }
        // implementation
    }
}
```

## Anti-Patterns
❌ ใช้ `String` สำหรับ errors โดยตรง
❌ ไม่จัด error types
❌ ไม่มี error messages
❌ ใช้ `unwrap()` โดยไม่จัดการ errors

## Verification
1. ตรวจสอบว่ามี custom error type
2. ตรวจสอบว่า error messages ชัดเจน
3. ตรวจสอบว่าใช้ `Result<T, Error>` อย่างสม่ำเสมอ
4. ตรวจสอบว่า error types ครอบคลุมทุกกรณี
