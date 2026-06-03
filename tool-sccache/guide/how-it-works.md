# How It Works

## Purpose

อธิบายการทำงานภายในของ sccache เพื่อให้เข้าใจ caching mechanism

## Scope

- Compilation Flow
- Cache Operations
- Remote Storage

## Compilation Flow

```
+------------------+     +------------------+     +------------------+
|  Source Files    | --> |  sccache wrapper | --> |  Compiler        |
|                  |     |  (hash + cache)  |     |  (actual compile)|
+------------------+     +------------------+     +------------------+
                                  |
                         +------------------+
                         |  Cache Lookup    |
                         |  (key = hash)    |
                         +------------------+
                                  |
                         +------------------+
                         |  Local/Remote    |
                         |  Cache Storage   |
                         +------------------+
```

## Cache Lookup Process

### 1. Generate Cache Key

```text
Key = hash(
  compiler_version +
  compiler_flags +
  source_file_contents +
  environment_variables
)
```

### 2. Check Local Cache

```bash
# If found locally
Return cached result
```

### 3. Check Remote Cache

```bash
# If not local, check remote
If found, download and store locally
Return cached result
```

### 4. Compile and Store

```bash
# If not found anywhere
Compile normally
Store result in cache
Return result
```

## Remote Storage

### S3

```bash
export SCCACHE_S3_BUCKET=my-bucket
export SCCACHE_S3_REGION=us-east-1
```

### Redis

```bash
export SCCACHE_REDIS=redis://localhost:6379
```

### Memcached

```bash
export SCCACHE_MEMCACHED=memcached://localhost:11211
```

## Summary

| Phase | Description |
|-------|-------------|
| **Hash** | Generate cache key |
| **Local** | Check local cache |
| **Remote** | Check remote cache |
| **Compile** | Compile if not found |
| **Store** | Save result to cache |