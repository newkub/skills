# Best Practices

## When to Use
ปฏิบัติตาม best practices สำหรับ Rust CLI development

## Project Structure

### 1. Directory Layout
```
my-cli/
├── Cargo.toml
├── src/
│   ├── main.rs          # CLI entry point
│   ├── lib.rs           # Library interface
│   ├── cli.rs           # Argument definitions
│   ├── commands/        # Subcommand implementations
│   └── error.rs         # Error types
├── tests/
│   ├── cli_tests.rs     # Integration tests
│   └── fixtures/        # Test data
└── README.md
```

### 2. Cargo.toml Configuration
```toml
[package]
name = "my-cli"
version = "1.0.0"
edition = "2021"
authors = ["Your Name <your.email@example.com>"]
description = "A useful CLI tool"
license = "MIT OR Apache-2.0"
repository = "https://github.com/username/my-cli"

[dependencies]
clap = { version = "4.0", features = ["derive"] }
anyhow = "1.0"
thiserror = "1.0"
tokio = { version = "1.0", features = ["full"], optional = true }
serde = { version = "1.0", features = ["derive"], optional = true }

[dev-dependencies]
assert_cmd = "2.0"
tempfile = "3.0"
predicates = "3.0"

[features]
default = []
async = ["tokio"]
config = ["serde", "serde_json"]
```

## Code Quality

### 3. Error Handling
- ใช้ `anyhow` สำหรับ application errors
- ใช้ `thiserror` สำหรับ library errors
- เพิ่ม context กับ error messages
- ใช้ `?` operator สำหรับ error propagation

### 4. Argument Design
- ใช้ descriptive help text
- กำหนด default values ที่เหมาะสม
- ใช้ validation สำหรับ input
- รองรับ environment variables

### 5. Output Format
- ใช้ stdout สำหรับ normal output
- ใช้ stderr สำหรับ errors และ warnings
- รองรับ multiple output formats (JSON, plain text)
- ใช้ appropriate exit codes

## Performance

### 6. Async vs Sync
- ใช้ async สำหรับ I/O-bound operations
- ใช้ sync สำหรับ CPU-bound operations
- พิจารณา `tokio` สำหรับ concurrent operations

### 7. Memory Usage
- ใช้ streaming สำหรับ large files
- หลีกเลี่ยง loading ข้อมูลทั้งหมดลง memory
- ใช้ `BufReader` สำหรับ file operations

## User Experience

### 8. Help Text
- เขียน clear และ concise descriptions
- ให้ examples ใน help text
- ใช้ consistent terminology
- ระบุ default values

### 9. Progress Indication
- ใช้ progress bars สำหรับ long operations
- แสดง ETA และ throughput
- ให้ options สำหรับ quiet mode

### 10. Configuration
- รองรับ multiple config sources
- ใช้ consistent priority order
- Validate configuration ที่ startup
- ให้ reasonable defaults

## Testing

### 11. Test Coverage
- เขียน unit tests สำหรับ business logic
- เขียน integration tests สำหรับ CLI interface
- Test error conditions
- Test with various input formats

### 12. Test Organization
```
tests/
├── cli_tests.rs         # Main CLI tests
├── integration/        # End-to-end tests
└── fixtures/           # Test data files
```

## Documentation

### 13. README.md
- Installation instructions
- Usage examples
- Configuration options
- Contributing guidelines

### 14. Code Documentation
- Document public APIs
- Explain complex algorithms
- Provide usage examples
- Include performance notes

## Release Management

### 15. Versioning
- ใช้ Semantic Versioning
- Update CHANGELOG.md
- Tag releases in Git
- Publish to crates.io

### 16. CI/CD
- Test on multiple platforms
- Check formatting and linting
- Run security audits
- Automate releases
