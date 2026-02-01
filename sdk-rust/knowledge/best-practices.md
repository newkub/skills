# Best Practices

## API Design

### 1. Minimal Public Surface
เปิดเผยเฉพาะสิ่งที่จำเป็น:
- ใช้ `pub` เฉพาะที่จำเป็น
- Re-export types ที่ใช้บ่อย
- ซ่อน implementation details

### 2. Consistent Naming
ใช้ naming conventions ที่สอดคล้อง:
- Functions: `snake_case`
- Types: `PascalCase`
- Constants: `SCREAMING_SNAKE_CASE`

### 3. Error Types
สร้าง custom error types ที่ชัดเจน:
- ใช้ `thiserror` สำหรับ error types
- ให้ error messages ที่เป็นประโยชน์
- จัด error types เป็น categories

### 4. Documentation
เขียน documentation ที่ครบถ้วน:
- Doc comments สำหรับ public API
- Examples ใน doc comments
- README สำหรับ quick start

## Code Quality

### 1. Clippy Linting
ใช้ `cargo clippy` สำหรับ code quality:
```bash
cargo clippy -- -D warnings
```

### 2. Formatting
ใช้ `cargo fmt` สำหรับ code formatting:
```bash
cargo fmt -- --check
```

### 3. Testing
เขียน tests ที่ครอบคลุม:
- Unit tests สำหรับ functions
- Integration tests สำหรับ workflows
- Documentation tests สำหรับ examples

### 4. CI/CD
ตั้งค่า CI/CD pipeline:
- Run tests ทุก commit
- Run clippy และ fmt checks
- Publish อัตโนมัติเมื่อ release

## Dependencies

### 1. Minimal Dependencies
ใช้ dependencies ที่จำเป็นเท่านั้น:
- หลีกเลี่ยง dependencies ที่ไม่จำเป็น
- เลือก dependencies ที่ active
- ตรวจสอบ security vulnerabilities

### 2. Feature Flags
ใช้ feature flags สำหรับ optional features:
```toml
[features]
default = ["reqwest"]
reqwest = ["dep:reqwest"]
```

### 3. Versioning
ใช้ semantic versioning:
- Major breaking changes
- Minor new features
- Patches bug fixes

## Performance

### 1. Zero-Cost Abstractions
ใช้ abstractions ที่ไม่มี runtime overhead:
- Generics แทน dynamic dispatch
- Iterators แทน loops
- Compile-time checks

### 2. Memory Management
จัดการ memory อย่างมีประสิทธิภาพ:
- ใช้ references แทน copies
- ใช้ `Cow` สำหรับ conditional ownership
- ใช้ `Arc` สำหรับ shared data

### 3. Async Support
ให้ async API ถ้าจำเป็น:
- ใช้ `tokio` หรือ `async-std`
- ให้ sync API ด้วยถ้าจำเป็น
- Document async behavior ชัดเจน

## Publishing

### 1. Cargo.toml Configuration
ตั้งค่า metadata ที่ถูกต้อง:
```toml
[package]
name = "my-sdk"
version = "0.1.0"
edition = "2021"
description = "SDK for..."
license = "MIT OR Apache-2.0"
repository = "https://github.com/user/my-sdk"
```

### 2. Documentation
เผยแพร่ documentation:
- Generate docs ด้วย `cargo doc`
- Publish ไปยัง docs.rs
- ให้ README ที่ชัดเจน

### 3. Changelog
รักษา changelog ที่เป็นปัจจุบัน:
- บันทึก breaking changes
- บันทึก new features
- บันทึก bug fixes
