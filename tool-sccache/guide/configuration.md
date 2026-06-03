# Configuration

## Purpose

แนะนำการตั้งค่า configuration สำหรับ sccache

## Scope

- Environment Variables
- Server Configuration

## Environment Variables

### General

| Variable | Default | Description |
|----------|---------|-------------|
| `SCCACHE_DIR` | ~/.cache/sccache | Cache directory |
| `SCCACHE_CACHE_SIZE` | 10G | Max cache size |
| `SCCACHE_LOG` | error | Log level |

### Local

| Variable | Description |
|-----------|-------------|
| `SCCACHE_LOCAL` | Enable local cache |
| `SCCACHE_DISABLE` | Disable cache |

### Remote - S3

```bash
export SCCACHE_S3_BUCKET=my-bucket
export SCCACHE_S3_REGION=us-east-1
export SCCACHE_S3_KEY_PREFIX=prefix/
```

### Remote - Redis

```bash
export SCCACHE_REDIS=redis://localhost:6379
```

### Remote - Memcached

```bash
export SCCACHE_MEMCACHED=memcached://localhost:11211
```

## Server Configuration

### Start Server

```bash
sccache --start-server
```

### Port

```bash
sccache --start-server --port 5000
```

## Summary

| Category | Options |
|----------|---------|
| **General** | SCCACHE_DIR, CACHE_SIZE |
| **S3** | SCCACHE_S3_* |
| **Redis** | SCCACHE_REDIS |
| **Memcached** | SCCACHE_MEMCACHED |