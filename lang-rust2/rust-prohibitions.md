---
trigger: manual
description: หลีกเลี่ยง practices ที่ผิดสำหรับ Rust project
instruction:
  - หลีกเลี่ยง unsafe practices
  - ทำตาม best practices
condition:
  - ใช้เมื่อเขียน code
---

# Strict Prohibitions

## 1. ห้ามใช้

### 1.1 Unsafe Practices

- ❌ `unwrap()` ใน production code (ใช้ `?` แทน)
- ❌ `expect()` ใน production code
- ❌ `panic!()` ใน production code
- ❌ `unsafe` ยกเว้นจำเป็นจริงๆ และต้องมี comment อธิบาย

```rust
// ❌ ผิด
let user = user.unwrap();

// ✅ ถูกต้อง
let user = user?;
```

### 1.2 Global State

- ❌ `static mut` หรือ mutable global state
- ❌ `lazy_static` สำหรับ mutable state
- ❌ `RwLock` หรือ `Mutex` ใน static

```rust
// ❌ ผิด
static mut USER_SERVICE: Option<UserService> = None;

// ✅ ถูกต้อง
pub struct App {
    user_service: UserService,
}
```

### 1.3 Code Quality

- ❌ ฟังก์ชันที่ยาวเกิน 50 บรรทัด (ให้ refactor)
- ❌ ฟังก์ชันที่มี parameters เกิน 7 ตัว (ใช้ struct แทน)
- ❌ ไฟล์ที่ยาวเกิน 300 บรรทัด (ให้ split)
- ❌ Cyclomatic complexity เกิน 10

### 1.4 Performance

- ❌ Clone โดยไม่จำเป็น (ใช้ `&` แทน)
- ❌ `Arc<Mutex<T>>` ถ้าใช้ได้แค่ `Rc<RefCell<T>>`
- ❌ Hardcoded strings (ใช้ constants แทน)

```rust
// ❌ ผิด
let user = user.clone();
let url = "https://api.example.com";

// ✅ ถูกต้อง
let user = &user;
let url = constants::API_URL;
```

## 2. ต้องทำ

### 2.1 Error Handling

- ✅ ใช้ `Result<T, E>` สำหรับ error handling
- ✅ ใช้ `Option<T>` สำหรับค่าที่อาจเป็น None
- ✅ ใช้ `anyhow::Context` เพื่อเพิ่ม context

```rust
// ✅ ถูกต้อง
let config = AppConfig::load()
    .context("Failed to load configuration")?;
```

### 2.2 Observability

- ✅ ใช้ `#[instrument]` บน async functions
- ✅ ใช้ `tracing` macros สำหรับ logging

```rust
// ✅ ถูกต้อง
#[instrument(skip(password))]
async fn login(username: &str, password: &str) -> Result<User> {
    info!("Attempting login for user: {}", username);
    // ...
}
```

### 2.3 Testing

- ✅ เขียน unit tests สำหรับทุก pure functions
- ✅ เขียน integration tests สำหรับทุก services
- ✅ ใช้ `mockall` สำหรับ mocking

### 2.4 Code Quality

- ✅ ใช้ `cargo clippy` และแก้ warnings ทั้งหมด
- ✅ ใช้ `cargo fmt` ก่อน commit
- ✅ รัน `cargo verify` ก่อน push

```bash
# Verify script
cargo fmt --all --check && \
cargo clippy --all-targets --all-features -- -D warnings && \
cargo test --all-features && \
cargo audit && \
cargo deny check
```
