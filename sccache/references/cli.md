# CLI Commands

## Purpose

Command-line interface reference สำหรับ sccache

## Scope

- Server Commands
- Stats Commands

## Commands

### sccache --start-server

Start sccache server

```bash
sccache --start-server
sccache --start-server --port 5000
```

### sccache --stop-server

Stop sccache server

```bash
sccache --stop-server
```

### sccache -s

Show statistics

```bash
sccache -s
```

### sccache -z

Zero statistics

```bash
sccache -z
```

### sccache --version

Show version

```bash
sccache --version
```

### sccache --help

Show help

```bash
sccache --help
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SCCACHE_DIR` | Cache directory |
| `SCCACHE_CACHE_SIZE` | Max cache size |
| `SCCACHE_S3_BUCKET` | S3 bucket name |
| `SCCACHE_REDIS` | Redis URL |

## See Also

- [Configuration](./configuration.md) - Configuration options