# Run Tests

## Description

Run tests ด้วย Nextest

## Steps

### 1. Install Nextest

```bash
cargo install nextest
```

### 2. Run All Tests

```bash
cargo nextest run
```

### 3. Run Specific Test

```bash
cargo nextest run test_name
```

### 4. Run Tests in Package

```bash
cargo nextest run -p package_name
```

### 5. Run Tests in Workspace

```bash
cargo nextest run --workspace
```

## Options

### Parallel Execution

```bash
# Use all cores
cargo nextest run

# Use specific number of threads
cargo nextest run --test-threads=4
```

### Filter Tests

```bash
# Run tests matching pattern
cargo nextest run test_name_pattern

# Exclude tests
cargo nextest run --exclude test_name_pattern
```

### Output Format

```bash
# Verbose output
cargo nextest run --verbose

# Summary only
cargo nextest run --summary
```

## Best Practices

1. **Use Default**: Use default settings ส่วนใหญ่
2. **Filter Wisely**: Filter tests เมื่อจำเป็น
3. **Monitor Resources**: Monitor CPU/memory usage
4. **Cache Dependencies**: Cache dependencies สำหรับ CI
