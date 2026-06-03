---
description: sccache is ccache with cloud storage - distributed compiler caching for faster builds
title: cli-sccache
tags: [cli, build, caching, compiler, performance, cloud]
---

## Overview

`sccache` เป็น compiler cache ที่รองสนุน C/C++, Rust และ cloud storage backends (S3, GCS, Azure) ช่วยลดเวลา compile ซ้ำ พร้อม distributed caching และ advanced features สำหรับ build optimization

## Installation

```powershell
scoop install sccache
# หรือ
choco install sccache
# หรือ
winget install Mozilla.sccache
# หรือ
cargo install sccache
```

## Basic Usage

```bash
# Set as compiler cache
export CC="sccache gcc"
export CXX="sccache g++"

# For Rust
export RUSTC_WRAPPER=sccache

# For CMake
export CMAKE_C_COMPILER_LAUNCHER=sccache
export CMAKE_CXX_COMPILER_LAUNCHER=sccache

# Check cache stats
sccache --show-stats

# Start server manually
sccache --start-server

# Stop server
sccache --stop-server
```

## Command Line Options

### Server Control

| Flag | Description |
|------|-------------|
| `--start-server` | Start background server |
| `--stop-server` | Stop background server |
| `--status` | Show server status |
| `--stats` | Show cache statistics |
| `--show-stats` | Show detailed statistics |
| `--zero-stats` | Reset statistics |
| `--stop-stats` | Stop statistics collection |

### Cache Operations

| Flag | Description |
|------|-------------|
| `--cleanup` | Clean up cache |
| `--clear` | Clear all cache |
| `--compress` | Compress cache |
| `--decompress` | Decompress cache |
| `--list-resources` | List cached resources |
| `--drop-cache` | Drop specific cache entries |

### Configuration

| Flag | Description |
|------|-------------|
| `--config-file <path>` | Configuration file path |
| `--cache-dir <dir>` | Cache directory |
| `--dist-service-url <url>` | Distributed service URL |
| `--no-daemon` | Don't run as daemon |
| `--log-file <path>` | Log file path |
| `--log-level <level>` | Log level (error, warn, info, debug, trace) |

### Performance

| Flag | Description |
|------|-------------|
| `--max-block-size <size>` | Maximum block size |
| `--max-cached-files <num>` | Maximum cached files |
| `--max-cached-file-size <size>` | Maximum file size |
| `--max-file-size <size>` | Maximum file size |
| `--max-full-cache-files <num>` | Maximum full cache files |

## Configuration

### Configuration File

Create `~/.config/sccache/config`:

```toml
# Cache configuration
[cache]
max-size = "20G"
max-full-size = "2G"
max-cached-files = 10000
max-full-cached-files = 1000

# Local disk cache
[disk]
dir = "~/.cache/sccache"
max-size = "10G"

# S3 configuration
[s3]
bucket = "my-sccache-bucket"
region = "us-east-1"
key-prefix = "cache/"
endpoint = "https://s3.amazonaws.com"
use_ssl = true
server_side_encryption = "AES256"

# Google Cloud Storage
[gs]
bucket = "my-sccache-bucket"
key-prefix = "cache/"
credential_path = "~/.config/gcloud/application_default_credentials.json"

# Azure Blob Storage
[azure]
container = "sccache"
account = "myaccount"
key_prefix = "cache/"
use_emulator = false

# Redis cache
[redis]
url = "redis://localhost:6379"
db = 0

# Memcached cache
[memcached]
url = "memcached://localhost:11211"

# Distributed configuration
[dist]
# Enable distributed compilation
dist-toolchain-suffix = ""
scheduler-url = "http://scheduler.example.com"
max-scheduler-connections = 10
scheduler-poll-interval-ms = 1000
scheduler-timeout-ms = 10000
toolchain-cache-size = 0
public-addr = "localhost:42262"

# Performance tuning
[performance]
max-block-size = "1M"
max-file-size = "50M"
max-cached-files = 100000
max-full-cached-files = 10000
max-full-cache-files = 1000
max-full-cache-file-size = "2M"

# Logging
[logging]
log-file = "~/.cache/sccache.log"
log-level = "info"
```

### Environment Variables

```bash
# Cache configuration
export SCCACHE_CACHE_SIZE="20G"
export SCCACHE_DIR="$HOME/.cache/sccache"
export SCCACHE_MAX_CACHED_FILES="10000"

# S3 configuration
export SCCACHE_BUCKET="my-sccache-bucket"
export SCCACHE_REGION="us-east-1"
export SCCACHE_ENDPOINT="https://s3.amazonaws.com"
export SCCACHE_S3_USE_SSL="true"

# GCS configuration
export SCCACHE_GCS_BUCKET="my-sccache-bucket"
export SCCACHE_GCS_KEY_PREFIX="cache/"
export SCCACHE_GCS_CREDENTIAL_PATH="$HOME/.config/gcloud/application_default_credentials.json"

# Azure configuration
export SCCACHE_AZURE_CONNECTION_STRING="DefaultEndpointsProtocol=https;AccountName=myaccount;AccountKey=mykey;EndpointSuffix=core.windows.net"
export SCCACHE_AZURE_CONTAINER="sccache"

# Redis configuration
export SCCACHE_REDIS="redis://localhost:6379"

# Performance
export SCCACHE_MAX_BLOCK_SIZE="1M"
export SCCACHE_MAX_FILE_SIZE="50M"

# Logging
export SCCACHE_LOG_LEVEL="info"
export SCCACHE_LOG_FILE="$HOME/.cache/sccache.log"
```

## Supported Compilers

### C/C++ Compilers

```bash
# GCC/Clang
export CC="sccache gcc"
export CXX="sccache g++"
export CXX="sccache clang++"

# MSVC (Windows)
export CC="sccache cl"
export CXX="sccache cl"

# CMake integration
export CMAKE_C_COMPILER_LAUNCHER=sccache
export CMAKE_CXX_COMPILER_LAUNCHER=sccache

# Ninja integration
export CC="sccache gcc"
export CXX="sccache g++"
```

### Rust Compiler

```bash
# Basic setup
export RUSTC_WRAPPER=sccache

# Cargo configuration
echo 'build.rustc-wrapper = "sccache"' >> ~/.cargo/config.toml

# Check if working
cargo build
sccache --show-stats
```

### Other Compilers

```bash
# NVIDIA CUDA (NVCC)
export CUDA_COMPILER_WRAPPER=sccache

# Swift
export SWIFT_EXEC="sccache swift"

# Fortran
export FC="sccache gfortran"
```

## Storage Backends

### Local Disk Cache

```bash
# Configure local cache
export SCCACHE_DIR="$HOME/.cache/sccache"
export SCCACHE_CACHE_SIZE="10G"

# Use local cache only
sccache --start-server
```

### Amazon S3

```bash
# S3 configuration
export SCCACHE_BUCKET="my-sccache-bucket"
export SCCACHE_REGION="us-east-1"
export SCCACHE_S3_KEY_PREFIX="cache/"

# With credentials
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"

# With IAM role (EC2)
# No additional configuration needed
```

### MinIO (S3-compatible)

```bash
# MinIO configuration
export SCCACHE_BUCKET="sccache"
export SCCACHE_REGION="us-east-1"
export SCCACHE_ENDPOINT="http://minio.example.com:9000"
export SCCACHE_S3_USE_SSL="false"
export SCCACHE_S3_ACCESS_KEY_ID="minioadmin"
export SCCACHE_S3_SECRET_ACCESS_KEY="minioadmin"
```

### Google Cloud Storage

```bash
# GCS configuration
export SCCACHE_GCS_BUCKET="my-sccache-bucket"
export SCCACHE_GCS_KEY_PREFIX="cache/"

# Using service account
export GOOGLE_APPLICATION_CREDENTIALS="$HOME/.config/gcloud/service-account.json"
```

### Azure Blob Storage

```bash
# Azure configuration
export SCCACHE_AZURE_CONNECTION_STRING="DefaultEndpointsProtocol=https;AccountName=myaccount;AccountKey=mykey;EndpointSuffix=core.windows.net"
export SCCACHE_AZURE_CONTAINER="sccache"
```

### Redis Cache

```bash
# Redis configuration
export SCCACHE_REDIS="redis://localhost:6379/0"

# With authentication
export SCCACHE_REDIS="redis://:password@localhost:6379/0"

# Redis cluster
export SCCACHE_REDIS="redis://redis1.example.com:6379,redis2.example.com:6379"
```

## Integration Examples

### Cargo Integration

```bash
# Setup Cargo config
mkdir -p ~/.cargo
cat >> ~/.cargo/config.toml << EOF
[build]
rustc-wrapper = "sccache"

[target.x86_64-unknown-linux-gnu]
linker = "clang"
rustflags = ["-C", "link-arg=-fuse-ld=lld"]
EOF

# Build with caching
cargo build --release
sccache --show-stats
```

### CMake Integration

```bash
# CMake configuration
cmake -B build \
  -DCMAKE_C_COMPILER_LAUNCHER=sccache \
  -DCMAKE_CXX_COMPILER_LAUNCHER=sccache \
  -DCMAKE_BUILD_TYPE=Release

# Build
cmake --build build

# Check stats
sccache --show-stats
```

### Make Integration

```bash
# Make with sccache
make CC="sccache gcc" CXX="sccache g++"

# Or set environment
export CC="sccache gcc"
export CXX="sccache g++"
make
```

### GitHub Actions

```yaml
# .github/workflows/build.yml
name: Build with sccache

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Install sccache
      run: |
        curl -L https://github.com/mozilla/sccache/releases/latest/download/sccache-v0.3.3-x86_64-unknown-linux-musl.tar.gz | tar xz
        sudo mv sccache-v0.3.3-x86_64-unknown-linux-musl/sccache /usr/local/bin/
    
    - name: Configure sccache
      env:
        SCCACHE_DIR: ${{ github.workspace }}/.sccache
      run: |
        mkdir -p $SCCACHE_DIR
        echo "SCCACHE_DIR=$SCCACHE_DIR" >> $GITHUB_ENV
    
    - name: Build
      env:
        CC: sccache gcc
        CXX: sccache g++
        RUSTC_WRAPPER: sccache
      run: |
        cargo build --release
        sccache --show-stats
```

## Advanced Features

### Distributed Compilation

```bash
# Setup scheduler
sccache-dist --scheduler --bind 0.0.0.0:10600

# Setup worker
sccache-dist --worker --scheduler http://scheduler.example.com:10600

# Client configuration
export SCCACHE_DIST_SCHEDULER_URL="http://scheduler.example.com:10600"
export SCCACHE_DIST_MAX_SCHEDULER_CONNECTIONS=10
```

### Cache Analysis

```bash
# Show detailed statistics
sccache --show-stats --verbose

# List cached resources
sccache --list-resources

# Monitor in real-time
watch -n 1 'sccache --show-stats'
```

### Cache Management

```bash
# Clean up old cache
sccache --cleanup

# Clear specific cache
sccache --drop-cache

# Compress cache
sccache --compress

# Reset statistics
sccache --zero-stats
```

## Performance Optimization

### Cache Tuning

```bash
# Optimize for large projects
export SCCACHE_MAX_CACHED_FILES="100000"
export SCCACHE_MAX_FULL_CACHED_FILES="10000"
export SCCACHE_MAX_FULL_CACHE_FILE_SIZE="10M"

# Optimize for small projects
export SCCACHE_CACHE_SIZE="5G"
export SCCACHE_MAX_FILE_SIZE="10M"
```

### Network Optimization

```bash
# S3 optimization
export SCCACHE_S3_MULTIPART_SIZE="8M"
export SCCACHE_S3_UPLOAD_BUFFER_SIZE="8M"

# Connection pooling
export SCCACHE_MAX_SCHEDULER_CONNECTIONS="20"
export SCCACHE_SCHEDULER_TIMEOUT_MS="5000"
```

## Troubleshooting

### Common Issues

1. **Cache not working**: Check server status with `sccache --status`
2. **Permission denied**: Check cache directory permissions
3. **Network issues**: Verify cloud storage credentials
4. **Slow builds**: Check cache hit rates and network latency

### Debug Mode

```bash
# Enable debug logging
export SCCACHE_LOG_LEVEL="debug"
export SCCACHE_LOG_FILE="$HOME/sccache-debug.log"

# Check server status
sccache --status

# Show verbose statistics
sccache --show-stats --verbose
```

### Health Monitoring

```bash
# Monitor cache hit rate
watch -n 5 'sccache --show-stats | grep "Cache hit rate"'

# Monitor cache size
watch -n 5 'sccache --show-stats | grep "Cache size"'

# Monitor server status
watch -n 5 'sccache --status'
```

## Statistics and Monitoring

### Cache Statistics

```bash
# Show all statistics
sccache --show-stats

# Statistics output includes:
# - Cache hits/misses
# - Cache hit rate
# - Cache size
# - Number of cached files
# - Compile requests
# - Errors
```

### Performance Metrics

```bash
# Monitor build performance
time cargo build

# Compare with and without sccache
# Without: time cargo clean && cargo build
# With: time cargo clean && cargo build
```

## Use Cases

### Development Workflows

```bash
# Setup for daily development
export RUSTC_WRAPPER=sccache
export CMAKE_C_COMPILER_LAUNCHER=sccache
export CMAKE_CXX_COMPILER_LAUNCHER=sccache

# Check cache health
sccache --show-stats

# Clean up periodically
sccache --cleanup
```

### CI/CD Pipelines

```bash
# CI configuration
export SCCACHE_DIR="/tmp/sccache"
export SCCACHE_MAX_SIZE="5G"
export RUSTC_WRAPPER=sccache

# Build and report
cargo build
sccache --show-stats > sccache-stats.txt
```

### Team Collaboration

```bash
# Shared cache setup
export SCCACHE_BUCKET="team-sccache-bucket"
export SCCACHE_REGION="us-east-1"
export SCCACHE_S3_KEY_PREFIX="team-cache/"

# Everyone uses same cache
export RUSTC_WRAPPER=sccache
```

## Features

- **Distributed caching**: Share cache across machines
- **Cloud storage**: S3, GCS, Azure, Redis, Memcached support
- **Multiple compilers**: C/C++, Rust, CUDA, Swift, Fortran
- **Performance optimization**: Configurable cache sizes and limits
- **Statistics**: Detailed cache hit/miss statistics
- **Cross-platform**: Windows, macOS, Linux
- **Easy integration**: Works with existing build systems
- **Automatic cleanup**: Cache management and cleanup
- **HTTP API**: REST API for statistics and control
- **Secure**: Encrypted cloud storage support
- **Scalable**: Distributed compilation support
- **Monitoring**: Real-time statistics and health checks
- **Flexible**: Multiple storage backends and configurations
- **Fast**: Optimized for build performance
