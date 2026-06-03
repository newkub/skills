# Features

## Purpose

รายการฟีเจอร์ทั้งหมดของ sccache สำหรับ compiler caching

## Core Features

### 1. Multi-language Support

| Language | Compilers |
|----------|-----------|
| **C/C++** | gcc, clang, cl, pgc |
| **Rust** | rustc |
| **NVIDIA** | nvcc |

### 2. Local Cache

```bash
# Default
~/.cache/sccache

# Custom
export SCCACHE_DIR=/path/to/cache
```

### 3. Remote Cache

| Storage | Configuration |
|---------|---------------|
| **S3** | SCCACHE_S3_BUCKET |
| **Redis** | SCCACHE_REDIS |
| **Memcached** | SCCACHE_MEMCACHED |
| **R2** | SCCACHE_R2_* |

### 4. Distributed Compilation

```bash
# Start server
sccache --start-server

# Use scheduler
export SCCACHE_SCHEDULER=host:port
```

## Configuration Options

### General

| Option | Description |
|--------|-------------|
| `SCCACHE_DIR` | Cache directory |
| `SCCACHE_CACHE_SIZE` | Max cache size |
| `SCCACHE_LOG` | Log level |

### Remote Storage

```bash
# S3
export SCCACHE_S3_BUCKET=my-bucket
export SCCACHE_S3_REGION=us-east-1
export SCCACHE_S3_KEY_PREFIX=sccache/

# Redis
export SCCACHE_REDIS=redis://localhost:6379

# Memcached
export SCCACHE_MEMCACHED=memcached://localhost:11211
```

## Server Mode

### Start Server

```bash
sccache --start-server
```

### Stop Server

```bash
sccache --stop-server
```

### Show Stats

```bash
sccache -s
```

### Zero Stats

```bash
sccache -z
```

## Summary

| Category | Features |
|----------|----------|
| **Languages** | C/C++, Rust, nvcc |
| **Cache** | Local, remote, distributed |
| **Storage** | S3, Redis, Memcached |