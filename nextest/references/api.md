# Programmatic API

Nextest มี CLI สำหรับ running Rust tests:

## CLI Commands

```bash
# Install cargo-nextest
cargo install cargo-nextest

# Run all tests
cargo nextest run

# Run specific test
cargo nextest run test_name

# Run tests in release mode
cargo nextest run --release

# Run tests with profile
cargo nextest run --profile ci
```

## Configuration (.config/nextest.toml)

```toml
[profile.default]
# Default profile settings

[profile.ci]
# CI-specific settings
retries = 2
fail-fast = false
```

## Test Filtering

```bash
# Run tests matching pattern
cargo nextest run test_pattern

# Run tests in specific package
cargo nextest run -p package_name

# Skip specific tests
cargo nextest run --skip test_name
```

## Output Formats

```bash
# JUnit XML output
cargo nextest run --lib --message-format junit

# Human-readable output
cargo nextest run --message-format human
```

## CI Integration

```bash
# Run with CI profile
cargo nextest run --profile ci

# Archive test results
cargo nextest archive
```

ดูรายละเอียดเพิ่มเติมที่: [Nextest Documentation](https://nexte.st)
