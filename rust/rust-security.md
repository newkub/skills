---
trigger: manual
description: รักษาความปลอดภัยสำหรับ Rust project
instruction:
  - จัดการ dependencies
  - จัดการ secrets
  - validate inputs
condition:
  - ใช้เมื่อเขียน code
---

# Security Rules

## 1. Dependencies

### 1.1 Regular Updates

- อัปเดต dependencies ทุกเดือน
- รัน `cargo audit` ทุกครั้งก่อน release
- รัน `cargo deny check` ทุกครั้งก่อน release

```bash
# Update dependencies
cargo update

# Check for vulnerabilities
cargo audit

# Check license compliance
cargo deny check

# Check outdated
cargo outdated
```

### 1.2 Dependency Management

ใส่ใน `Cargo.toml`:

```toml
[package.metadata.cargo-udeps.ignore]
normal = ["dependency_name"]
```

## 2. Secrets Management

### 2.1 Never Hardcode Secrets

```rust
// ❌ ผิด
const API_KEY: &str = "sk-1234567890abcdef";

// ✅ ถูกต้อง
const API_KEY_ENV: &str = "API_KEY";

fn get_api_key() -> Result<String> {
    std::env::var(API_KEY_ENV)
        .map_err(|_| AppError::Config("API_KEY not set".into()))
}
```

### 2.2 Environment Variables

ใช้ `Config.toml` และ environment variables:

```toml
# Config.toml
[database]
url = "sqlite://app.db"

# Override with environment
APP_DATABASE__URL="postgres://user:pass@localhost/db"
```

### 2.3 .gitignore

เพิ่มใน `.gitignore`:

```
.env
.env.local
*.key
*.pem
secrets/
```

## 3. Input Validation

### 3.1 Validate All Inputs

```rust
use validator::Validate;

#[derive(Validate, Deserialize)]
pub struct CreateUserRequest {
    #[validate(length(min = 1, max = 100))]
    pub name: String,

    #[validate(email)]
    pub email: String,

    #[validate(length(min = 8))]
    pub password: String,
}

pub fn create_user(req: CreateUserRequest) -> Result<User> {
    req.validate()?;
    // ...
}
```

### 3.2 Sanitize Output

```rust
// Escape HTML output
pub fn escape_html(s: &str) -> String {
    s.replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
        .replace('"', "&quot;")
        .replace('\'', "&#x27;")
}
```

## 4. SQL Injection Prevention

ใช้ parameterized queries:

```rust
// ❌ ผิด - SQL injection
let query = format!("SELECT * FROM users WHERE id = '{}'", user_input);

// ✅ ถูกต้อง - parameterized
let user = sqlx::query_as::<_, User>(
    "SELECT * FROM users WHERE id = $1"
)
.bind(user_input)
.fetch_one(&pool)
.await?;
```

## 5. Authentication & Authorization

### 5.1 Password Hashing

```rust
use argon2::{self, Config, ThreadMode, Variant, Version};

pub fn hash_password(password: &str) -> Result<String> {
    let config = Config {
        variant: Variant::Argon2id,
        version: Version::Version13,
        mem_cost: 65536,
        time_cost: 3,
        lanes: 4,
        thread_mode: ThreadMode::Parallel,
        secret: &[],
        ad: &[],
        hash_length: 32,
    };

    let salt = rand::thread_rng().gen::<[u8; 32]>();
    argon2::hash_encoded(password.as_bytes(), &salt, &config)
        .map_err(|e| AppError::Other(e.into()))
}

pub fn verify_password(hash: &str, password: &str) -> Result<bool> {
    argon2::verify_encoded(hash, password.as_bytes())
        .map_err(|e| AppError::Other(e.into()))
}
```

### 5.2 JWT Tokens

```rust
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};

pub fn create_token(user_id: &str) -> Result<String> {
    let secret = std::env::var("JWT_SECRET")?;
    let claims = Claims {
        sub: user_id.to_string(),
        exp: (Utc::now() + Duration::hours(24)).timestamp(),
    };

    encode(&Header::default(), &claims, &EncodingKey::from_secret(secret.as_ref()))
        .map_err(|e| AppError::Other(e.into()))
}

pub fn verify_token(token: &str) -> Result<Claims> {
    let secret = std::env::var("JWT_SECRET")?;
    decode::<Claims>(
        token,
        &DecodingKey::from_secret(secret.as_ref()),
        &Validation::default(),
    )
    .map(|data| data.claims)
    .map_err(|e| AppError::Other(e.into()))
}
```
