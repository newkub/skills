# Configuration Reference

## Purpose

Configuration options reference สำหรับ sccache

## Environment Variables

### General

| Variable | Default | Description |
|----------|---------|-------------|
| `SCCACHE_DIR` | ~/.cache/sccache | Cache directory |
| `SCCACHE_CACHE_SIZE` | 10G | Max cache size |
| `SCCACHE_LOG` | error | Log level |
| `SCCACHE_COMPRESS` | 1 | Compression |

### Server

| Variable | Description |
|----------|-------------|
| `SCCACHE_PORT` | Server port |
| `SCCACHE_HTTPS` | HTTPS mode |

### S3

| Variable | Description |
|---------|-------------|
| `SCCACHE_S3_BUCKET` | Bucket name |
| `SCCACHE_S3_REGION` | AWS region |
| `SCCACHE_S3_KEY_PREFIX` | Key prefix |

### Redis

| Variable | Description |
|---------|-------------|
| `SCCACHE_REDIS` | Redis URL |

### Memcached

| Variable | Description |
|---------|-------------|
| `SCCACHE_MEMCACHED` | Memcached URL |

## Summary

| Category | Variables |
|----------|-----------|
| **General** | SCCACHE_DIR, CACHE_SIZE |
| **S3** | SCCACHE_S3_* |
| **Redis** | SCCACHE_REDIS |