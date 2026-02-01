---
trigger: manual
description: เขียน documentation สำหรับ Rust project
instruction:
  - เขียน module documentation
  - เขียน function documentation
  - สร้าง documentation
condition:
  - ใช้เมื่อเขียน public APIs
---

# Documentation Rules

## 1. Module Documentation (บังคับ)

ใช้ `//!` สำหรับอธิบาย module:

```rust
//! # User Management Module
//!
//! โมดูลนี้จัดการเกี่ยวกับการสร้างและค้นหาผู้ใช้
//!
//! ## Components
//! - [`User`]: โครงสร้างข้อมูลผู้ใช้
//! - [`UserService`]: บริการจัดการผู้ใช้
//!
//! ## Example
//! ```rust
//! use crate::components::user::{User, UserService};
//!
//! let user = User::new("john@example.com", "John Doe");
//! ```
```

## 2. Function Documentation (บังคับ)

ใช้ `///` สำหรับอธิบาย public items:

```rust
/// Creates a new user with the given email and name
///
/// # Arguments
///
/// * `email` - User's email address (must be valid)
/// * `name` - User's display name
///
/// # Returns
///
/// Returns `Ok(User)` if email is valid, `Err(ValidationError)` otherwise
///
/// # Errors
///
/// Returns error if:
/// - Email format is invalid
/// - Name is empty
///
/// # Example
///
/// ```rust
/// let user = User::new("john@example.com", "John Doe")?;
/// ```
pub fn new(email: &str, name: &str) -> Result<User> {
    // ...
}
```

## 3. Struct Documentation

```rust
/// Represents a user in the system
///
/// # Fields
///
/// * `id` - Unique identifier
/// * `name` - User's display name
/// * `email` - User's email address
#[derive(Debug, Clone)]
pub struct User {
    pub id: String,
    pub name: String,
    pub email: String,
}
```

## 4. Enum Documentation

```rust
/// User role in the system
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UserRole {
    /// Regular user with basic permissions
    User,
    /// Administrator with full permissions
    Admin,
    /// Moderator with content management permissions
    Moderator,
}
```

## 5. Generating Documentation

```bash
# Generate documentation
cargo doc

# Open documentation in browser
cargo doc --open

# Generate documentation for all dependencies
cargo doc --document-private-items
```

## 6. Documentation Best Practices

- เขียน documentation สำหรับทุก public APIs
- ใช้ examples ที่สามารถรันได้ (cargo test)
- ใช้ links ระหว่าง items (`[`ItemName`]`)
- อธิบาย errors ที่อาจเกิดขึ้น
- ใช้ code blocks สำหรับ examples
