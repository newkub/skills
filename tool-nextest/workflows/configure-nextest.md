# Configure Nextest

## Description

ตั้งค่า Nextest ผ่าน configuration file

## Steps

### 1. Create Config File

```bash
mkdir .config
touch .config/nextest.toml
```

### 2. Basic Configuration

```toml
# .config/nextest.toml
[profile.default]
test-threads = "num-cpus"
retries = 2
```

### 3. Add Profiles

```toml
[profile.ci]
test-threads = 4
retries = 0

[profile.local]
test-threads = "num-cpus"
retries = 2
```

### 4. Add Test Groups

```toml
[[profile.default.group]]
name = "fast"
max_threads = 8

[[profile.default.group]]
name = "slow"
max_threads = 2
```

## Configuration Options

### Threads

```toml
[profile.default]
test-threads = "num-cpus"  # Use all cores
test-threads = 4            # Use 4 threads
```

### Retries

```toml
[profile.default]
retries = 2  # Retry up to 2 times
```

### Fail Fast

```toml
[profile.default]
fail-fast = true  # Stop on first failure
```

## Using Profiles

```bash
# Use specific profile
cargo nextest run --profile ci

# Use default profile
cargo nextest run
```

## Best Practices

1. **Profile-Based**: ใช้ profiles สำหรับ environments ต่างๆ
2. **CI Profile**: ใช้ profile พิเศษสำหรับ CI
3. **Local Profile**: ใช้ profile พิเศษสำหรับ local
4. **Document**: Document configuration choices
