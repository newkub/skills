# Testing

## Description
เขียน tests ที่ครอบคลุม เพื่อให้มั่นใจว่า SDK ทำงานถูกต้อง

## Guidelines
### Test Types
- **Unit tests**: ทดสอบ individual functions
- **Integration tests**: ทดสอบ interactions ระหว่าง components
- **Documentation tests**: ทดสอบ examples ใน doc comments

### Test Organization
- ใส่ unit tests ในไฟล์เดียวกับ code ใน `mod tests`
- ใส่ integration tests ใน `tests/` folder
- ใช้ `#[cfg(test)]` สำหรับ test code

### Test Coverage
- ทดสอบ happy paths
- ทดสอบ error cases
- ทดสอบ edge cases
- ทดสอบ error handling

## Examples
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

## Anti-Patterns
❌ ไม่มี tests
❌ Tests ไม่ครอบคลุม
❌ Tests ที่ไม่เป็นประโยชน์
❌ Tests ที่ mock ไม่ถูกต้อง

## Verification
1. ตรวจสอบว่า `cargo test` ผ่าน
2. ตรวจสอบว่ามี unit tests สำหรับ public API
3. ตรวจสอบว่ามี integration tests
4. ตรวจสอบว่ามี documentation tests
