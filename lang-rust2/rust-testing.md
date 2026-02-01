---
trigger: manual
description: เขียน tests สำหรับ Rust project
instruction:
  - เขียน unit tests
  - เขียน integration tests
  - รัน tests
condition:
  - ใช้เมื่อเขียน code ใหม่
---

# Testing Rules

## 1. Unit Tests

เขียน unit tests สำหรับทุก pure functions ใน `components/`:

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use pretty_assertions::assert_eq;

    #[test]
    fn test_calculate_total_empty() {
        let items = vec![];
        assert_eq!(calculate_total(&items), 0.0);
    }

    #[test]
    fn test_calculate_total_with_items() {
        let items = vec![
            Item { price: 10.0, quantity: 2 },
            Item { price: 5.0, quantity: 3 },
        ];
        assert_eq!(calculate_total(&items), 35.0);
    }
}
```

## 2. Integration Tests

เขียน integration tests ใน `tests/`:

```rust
// tests/integration_test.rs
use crate_name::prelude::*;
use mockall::mock;

mock! {
    UserRepository {}

    #[async_trait]
    impl UserRepository for UserRepository {
        async fn find(&self, id: &str) -> Result<Option<User>>;
        async fn save(&self, user: &User) -> Result<()>;
    }
}

#[tokio::test]
async fn test_get_user() {
    let mut mock_repo = MockUserRepository::new();
    mock_repo
        .expect_find()
        .returning(|_| Ok(Some(User::default())));

    let service = UserService::new(mock_repo);
    let user = service.get_user("123").await.unwrap();

    assert_eq!(user.id, "123");
}
```

## 3. Running Tests

```bash
# Run all tests
cargo test

# Run tests with all features
cargo test --all-features

# Run with nextest (faster)
cargo nextest run --all-features --verbose

# Run specific test
cargo test test_calculate_total

# Run tests with output
cargo test -- --nocapture

# Run tests in release mode
cargo test --release
```

## 4. Coverage Goals

- Unit test coverage: **≥ 80%**
- Integration test coverage: **≥ 60%**
- Overall coverage: **≥ 70%**

## 5. Testing Best Practices

- เขียน tests ก่อนเขียน code (TDD)
- ใช้ descriptive test names
- ใช้ `pretty_assertions` สำหรับ better error messages
- Mock external dependencies ด้วย `mockall`
- ทดสอบ edge cases และ error cases
