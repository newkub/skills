---
trigger: manual
description: สร้างโครงสร้าง services/ สำหรับ Rust project
instruction:
  - สร้างโฟลเดอร์ src/services
  - สร้าง trait-based services
  - เขียน integration tests
condition:
  - ใช้เมื่อสร้าง Rust project ใหม่
---

# services/ Structure

## 1. Purpose

โฟลเดอร์ `services/` เก็บ **side effects** และ I/O operations:
- Database operations
- HTTP requests
- File I/O
- External service calls

## 2. Structure

```
src/services/
├── mod.rs              # Module exports
├── user_service.rs     # User business logic
├── email_service.rs    # Email sending
└── cache_service.rs    # Cache operations
```

## 3. Pattern: Trait-based Services

ใช้ Traits เพื่อ abstract I/O:

```rust
use async_trait::async_trait;
use crate::error::Result;

/// User repository trait
#[async_trait]
pub trait UserRepository {
    async fn find(&self, id: &str) -> Result<Option<User>>;
    async fn save(&self, user: &User) -> Result<()>;
    async fn delete(&self, id: &str) -> Result<()>;
}

/// User service
pub struct UserService<R: UserRepository> {
    repo: R,
}

impl<R: UserRepository> UserService<R> {
    pub fn new(repo: R) -> Self {
        Self { repo }
    }

    pub async fn get_user(&self, id: &str) -> Result<User> {
        self.repo.find(id)
            .await?
            .ok_or_else(|| AppError::NotFound {
                resource: "User".to_string(),
                id: id.to_string(),
            })
    }

    pub async fn create_user(&self, user: User) -> Result<User> {
        self.repo.save(&user).await?;
        Ok(user)
    }
}
```

## 4. Example: email_service.rs

```rust
use crate::error::Result;
use tracing::instrument;

#[async_trait]
pub trait EmailSender {
    async fn send(&self, to: &str, subject: &str, body: &str) -> Result<()>;
}

pub struct EmailService<S: EmailSender> {
    sender: S,
}

impl<S: EmailSender> EmailService<S> {
    pub fn new(sender: S) -> Self {
        Self { sender }
    }

    #[instrument(skip(self))]
    pub async fn send_welcome_email(&self, user: &User) -> Result<()> {
        let subject = "Welcome to Our App!";
        let body = format!("Hello {}, welcome!", user.name);
        self.sender.send(&user.email, subject, &body).await
    }
}
```

## 5. Example: cache_service.rs

```rust
use crate::error::Result;
use std::time::Duration;

#[async_trait]
pub trait CacheStore {
    async fn get(&self, key: &str) -> Result<Option<Vec<u8>>>;
    async fn set(&self, key: &str, value: Vec<u8>, ttl: Duration) -> Result<()>;
    async fn delete(&self, key: &str) -> Result<()>;
}

pub struct CacheService<S: CacheStore> {
    store: S,
}

impl<S: CacheStore> CacheService<S> {
    pub fn new(store: S) -> Self {
        Self { store }
    }

    pub async fn get_or_set<F, Fut>(
        &self,
        key: &str,
        ttl: Duration,
        factory: F,
    ) -> Result<Vec<u8>>
    where
        F: FnOnce() -> Fut,
        Fut: std::future::Future<Output = Result<Vec<u8>>>,
    {
        if let Some(value) = self.store.get(key).await? {
            return Ok(value);
        }

        let value = factory().await?;
        self.store.set(key, value.clone(), ttl).await?;
        Ok(value)
    }
}
```

## 6. Testing with Mocks

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use mockall::{mock, predicate::*};

    mock! {
        UserRepo {}

        #[async_trait]
        impl UserRepository for UserRepo {
            async fn find(&self, id: &str) -> Result<Option<User>>;
            async fn save(&self, user: &User) -> Result<()>;
            async fn delete(&self, id: &str) -> Result<()>;
        }
    }

    #[tokio::test]
    async fn test_get_user_found() {
        let mut mock_repo = MockUserRepo::new();
        mock_repo
            .expect_find()
            .with(eq("123"))
            .returning(|_| Ok(Some(User::default())));

        let service = UserService::new(mock_repo);
        let user = service.get_user("123").await.unwrap();

        assert_eq!(user.id, "123");
    }
}
```

## 7. mod.rs

```rust
pub mod user_service;
pub mod email_service;
pub mod cache_service;
```
