# Testing Architecture

```rust
// tests/unit/models.rs
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_user_creation() {
        let user = User::new("Alice", "alice@example.com");
        assert_eq!(user.name(), "Alice");
    }

    #[test]
    fn test_validation() {
        let result = User::new("", "");
        assert!(result.is_err());
    }
}
```
