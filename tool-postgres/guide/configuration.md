# Configuration

## Description

ตั้งค่า PostgreSQL ผ่าน postgresql.conf

## Config File

```bash
# Linux/macOS
/etc/postgresql/16/main/postgresql.conf

# Windows
C:\Program Files\PostgreSQL\16\data\postgresql.conf
```

## Basic Configuration

### Memory Settings

```conf
# Memory settings
shared_buffers = 256MB
effective_cache_size = 1GB
work_mem = 16MB
maintenance_work_mem = 64MB
```

### Connection Settings

```conf
# Connection settings
max_connections = 100
```

### WAL Settings

```conf
# WAL settings
wal_level = replica
max_wal_size = 1GB
```

## Reload Configuration

```bash
# Reload configuration without restart
sudo systemctl reload postgresql

# Or using psql
SELECT pg_reload_conf();
```

## Best Practices

1. **Tune for Hardware**: Tune settings ตาม hardware
2. **Monitor Memory**: Monitor memory usage
3. **Backup Config**: Backup configuration file
4. **Test Changes**: Test changes ใน staging ก่อน production
