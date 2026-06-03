# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีในการใช้งาน sccache

## Scope

- CI/CD
- Remote Cache
- Performance

## CI/CD

### GitHub Actions

```yaml
- name: Setup sccache
  uses: mozilla-actions/sccache-action@v0.0.6
  with:
    version: "v0.8.0"

- name: Build
  env:
    RUSTC_WRAPPER: sccache
  run: cargo build --release
```

### GitLab CI

```yaml
variables:
  SCCACHE_DIR: $CI_PROJECT_DIR/.sccache
  RUSTC_WRAPPER: sccache

build:
  script:
    - cargo build --release
```

## Remote Cache

### S3

```bash
export SCCACHE_S3_BUCKET=my-bucket
export SCCACHE_S3_REGION=us-east-1
```

### Redis

```bash
export SCCACHE_REDIS=redis://localhost:6379
```

## Performance

### 1. Large Cache

```bash
export SCCACHE_CACHE_SIZE=50G
```

### 2. Compression

```bash
export SCCACHE_COMPRESS=1
```

### 3. Zero Stats

```bash
sccache -z  # Zero stats before build
```

## Common Pitfalls

### 1. Server Not Running

```bash
# Always start server first
sccache --start-server
```

### 2. Wrong Compiler

```bash
# Use correct wrapper
export CC=sccache gcc
export CXX=sccache g++
```

## Summary

| Category | Best Practice |
|----------|---------------|
| **CI/CD** | Use sccache action |
| **Remote** | S3 or Redis |
| **Performance** | Large cache, compression |