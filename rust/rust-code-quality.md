---
trigger: manual
description: รักษาคุณภาพโค้ดสำหรับ Rust project
instruction:
  - กำหนด clippy lints
  - กำหนด coverage goals
  - รัน quality checks
condition:
  - ใช้เมื่อเขียน code
---

# Code Quality Metrics

## 1. Clippy Lints (บังคับใน `.cargo/config.toml`)

```toml
[lints.clippy]
# Pedantic lints
pedantic = "warn"
nursery = "warn"

# Deny unsafe practices
unwrap_used = "deny"
expect_used = "deny"
panic = "deny"
unimplemented = "deny"
unreachable = "deny"
indexing_slicing = "deny"

# Warn about potential issues
todo = "warn"
unwrap_in_result = "warn"
```

## 2. Coverage Goals

- Unit test coverage: **≥ 80%**
- Integration test coverage: **≥ 60%**
- Overall coverage: **≥ 70%**

## 3. Code Metrics

### 3.1 Function Length

- **Maximum**: 50 บรรทัด
- **Recommended**: 20-30 บรรทัด

### 3.2 Parameters Count

- **Maximum**: 7 parameters
- **Recommended**: 3-5 parameters
- **ถ้าเกิน**: ใช้ struct แทน

```rust
// ❌ ผิด - parameters เกิน 7
fn create_user(
    name: &str,
    email: &str,
    age: u32,
    address: &str,
    phone: &str,
    role: UserRole,
    active: bool,
) -> Result<User> {
    // ...
}

// ✅ ถูกต้อง - ใช้ struct
struct CreateUserParams {
    name: String,
    email: String,
    age: u32,
    address: String,
    phone: String,
    role: UserRole,
    active: bool,
}

fn create_user(params: CreateUserParams) -> Result<User> {
    // ...
}
```

### 3.3 File Length

- **Maximum**: 300 บรรทัด
- **Recommended**: 100-200 บรรทัด
- **ถ้าเกิน**: split ออกเป็น modules ย่อย

### 3.4 Cyclomatic Complexity

- **Maximum**: 10
- **Recommended**: 5-7

## 4. Running Quality Checks

```bash
# Format code
cargo fmt --all

# Check formatting
cargo fmt --all --check

# Run clippy
cargo clippy --all-targets --all-features -- -D warnings

# Run tests
cargo test --all-features

# Run nextest (faster)
cargo nextest run --all-features --verbose

# Security audit
cargo audit

# Dependency check
cargo deny check

# All checks (verify)
cargo verify
```

## 5. Continuous Integration

ใส่ใน CI pipeline:

```yaml
- name: Format
  run: cargo fmt --all --check

- name: Clippy
  run: cargo clippy --all-targets --all-features -- -D warnings

- name: Test
  run: cargo test --all-features

- name: Security Audit
  run: cargo audit

- name: Dependency Check
  run: cargo deny check
```
