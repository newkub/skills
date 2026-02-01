---
trigger: manual
description: สร้างโครงสร้าง types/ สำหรับ Rust project
instruction:
  - สร้างโฟลเดอร์ src/types
  - สร้าง data structures
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# types/ Structure

## 1. Purpose

โฟลเดอร์ `types/` เก็บ **data structures**:
- Structs
- Enums
- Traits

## 2. Structure

```
src/types/
├── mod.rs              # Module exports
├── user.rs             # User types
├── post.rs             # Post types
└── common.rs           # Common types
```

## 3. Example: user.rs

```rust
use serde::{Deserialize, Serialize};
use validator::Validate;

/// User entity
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct User {
    pub id: String,
    pub name: String,
    pub email: String,
    pub created_at: chrono::DateTime<chrono::Utc>,
}

/// Create user request
#[derive(Debug, Deserialize, Validate)]
pub struct CreateUserRequest {
    #[validate(length(min = 1))]
    pub name: String,

    #[validate(email)]
    pub email: String,
}

/// Update user request
#[derive(Debug, Deserialize, Validate)]
pub struct UpdateUserRequest {
    #[validate(length(min = 1))]
    pub name: Option<String>,

    #[validate(email)]
    pub email: Option<String>,
}
```

## 4. Example: post.rs

```rust
use serde::{Deserialize, Serialize};

/// Post entity
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Post {
    pub id: String,
    pub title: String,
    pub content: String,
    pub author_id: String,
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub updated_at: chrono::DateTime<chrono::Utc>,
}

/// Post status
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum PostStatus {
    Draft,
    Published,
    Archived,
}

/// Create post request
#[derive(Debug, Deserialize)]
pub struct CreatePostRequest {
    pub title: String,
    pub content: String,
    #[serde(default)]
    pub status: PostStatus,
}
```

## 5. Example: common.rs

```rust
use serde::{Deserialize, Serialize};

/// Pagination parameters
#[derive(Debug, Deserialize)]
pub struct PaginationParams {
    #[serde(default = "default_page")]
    pub page: u32,

    #[serde(default = "default_page_size")]
    pub page_size: u32,
}

fn default_page() -> u32 {
    1
}

fn default_page_size() -> u32 {
    20
}

/// Paginated response
#[derive(Debug, Serialize)]
pub struct PaginatedResponse<T> {
    pub data: Vec<T>,
    pub total: u64,
    pub page: u32,
    pub page_size: u32,
    pub total_pages: u32,
}

impl<T> PaginatedResponse<T> {
    pub fn new(data: Vec<T>, total: u64, params: &PaginationParams) -> Self {
        let total_pages = (total as f64 / params.page_size as f64).ceil() as u32;
        Self {
            data,
            total,
            page: params.page,
            page_size: params.page_size,
            total_pages,
        }
    }
}

/// API response wrapper
#[derive(Debug, Serialize)]
pub struct ApiResponse<T> {
    pub success: bool,
    pub data: Option<T>,
    pub error: Option<String>,
}

impl<T> ApiResponse<T> {
    pub fn success(data: T) -> Self {
        Self {
            success: true,
            data: Some(data),
            error: None,
        }
    }

    pub fn error(error: String) -> Self {
        Self {
            success: false,
            data: None,
            error: Some(error),
        }
    }
}
```

## 6. mod.rs

```rust
pub mod user;
pub mod post;
pub mod common;
```
