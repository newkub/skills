# Documentation

## Description
เขียน documentation ที่ครบถ้วน ชัดเจน และเป็นประโยชน์

## Guidelines
### Documentation Standards
- เขียน doc comments ด้วย `///` หรือ `//!`
- อธิบาย purpose, parameters, return values
- ให้ examples สำหรับ public API
- ใช้ `cargo doc` เพื่อ generate docs

### Documentation Content
- อธิบายสิ่งที่ function ทำ
- อธิบาย parameters และ types
- อธิบาย return values และ errors
- ให้ examples ที่ใช้งานได้จริง

### Examples
```rust
/// Client สำหรับเชื่อมต่อกับ API
///
/// # Examples
///
/// ```rust
/// use my_sdk::Client;
///
/// let client = Client::new("api-key");
/// let data = client.fetch_data("123")?;
/// ```
pub struct Client {
    api_key: String,
}

/// Fetches data จาก API
///
/// # Arguments
///
/// * `id` - ID ของ data ที่ต้องการ fetch
///
/// # Returns
///
/// `Result<Data>` ที่มี data หรือ error
///
/// # Errors
///
/// คืนค่า `Error::Validation` ถ้า ID ไม่ถูกต้อง
/// คืนค่า `Error::Network` ถ้า network request ล้มเหลว
pub fn fetch_data(&self, id: &str) -> Result<Data> {
    // implementation
}
```

## Anti-Patterns
❌ ไม่มี documentation
❌ Documentation ไม่ชัดเจน
❌ ไม่มี examples
❌ Documentation ผิดพลาด

## Verification
1. ตรวจสอบว่า public API มี doc comments
2. ตรวจสอบว่ามี examples สำหรับ public API
3. ตรวจสอบว่า `cargo doc` ทำงานได้
4. ตรวจสอบว่า documentation ครบถ้วน
