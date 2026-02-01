# Core Concepts

## Rust SDK Fundamentals

### Library vs Binary
Rust SDK เป็น library crate ที่ใช้ `cargo new --lib` สร้าง
- Library crate ไม่มี `main.rs`
- เข้าถึงผ่าน `use my_sdk::*`
- ใช้ `lib.rs` เป็น entry point

### Module System
Rust ใช้ module system สำหรับจัดการ code:
- `mod.rs` สำหรับ module exports
- ใช้ `pub mod` เพื่อ expose modules
- ใช้ `pub use` เพื่อ re-export types

### Visibility Rules
- `pub` = accessible จากทุกที่
- `pub(crate)` = accessible ภายใน crate
- default = private ภายใน module

## Key Concepts

### Ownership & Borrowing
- Ownership คือ rule สำคัญของ Rust
- Borrowing ใช้ references แทน ownership
- Lifetimes คือ scope ของ references

### Error Handling
- `Result<T, E>` สำหรับ operations ที่อาจ fail
- `Option<T>` สำหรับ values ที่อาจไม่มี
- `panic!` สำหรับ unrecoverable errors

### Traits
- Traits คือ shared behavior
- `derive` macros สำหรับ common traits
- Custom traits สำหรับ abstractions

## SDK Architecture

### Client Pattern
สร้าง client struct ที่เก็บ configuration:
```rust
pub struct Client {
    api_key: String,
    base_url: String,
}
```

### Builder Pattern
ใช้ builder pattern สำหรับ complex configuration:
```rust
impl Client {
    pub fn new(api_key: impl Into<String>) -> Self { }
    pub fn with_base_url(self, url: impl Into<String>) -> Self { }
    pub fn with_timeout(self, timeout: Duration) -> Self { }
}
```

### Async Support
ใช้ `tokio` หรือ `async-std` สำหรับ async operations:
```rust
pub async fn fetch_data(&self, id: &str) -> Result<Data> { }
```
