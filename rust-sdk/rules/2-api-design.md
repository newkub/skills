# API Design

## Description
ออกแบบ API ที่ใช้งานง่าย ชัดเจน และสอดคล้องกับ Rust conventions

## Guidelines
### Public API
- เปิดเผยเฉพาะสิ่งที่จำเป็นด้วย `pub`
- ใช้ Builder pattern สำหรับ complex types
- ใช้ `derive(Debug, Clone)` สำหรับ public types

### Naming
- ใช้ snake_case สำหรับ functions และ variables
- ใช้ PascalCase สำหรับ types
- ชื่อต้องสื่อความหมายชัดเจน

### Function Design
- รับ parameters ด้วย references ถ้าไม่ต้องการ ownership
- คืนค่า `Result<T, Error>` สำหรับ operations ที่อาจ fail
- ใช้ `Option<T>` สำหรับ values ที่อาจไม่มี

## Examples
```rust
// Good API Design
pub struct Client {
    api_key: String,
    base_url: String,
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
        // implementation
    }
}
```

## Anti-Patterns
❌ เปิดเผย internal implementation details
❌ ใช้ `unwrap()` ใน public API
❌ ไม่มี error handling
❌ ชื่อไม่สื่อความหมาย

## Verification
1. ตรวจสอบว่า public API มี documentation
2. ตรวจสอบว่าไม่มี `unwrap()` ใน public API
3. ตรวจสอบว่าใช้ `Result` และ `Option` อย่างเหมาะสม
4. ตรวจสอบว่า naming สอดคล้องกับ Rust conventions
