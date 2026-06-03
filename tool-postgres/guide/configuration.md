# Configuration

## Config Files

| File | Location | Purpose |
|------|----------|---------|
| `postgresql.conf` | `$PGDATA/` | Main configuration |
| `pg_hba.conf` | `$PGDATA/` | Client authentication |
| `pg_ident.conf` | `$PGDATA/` | User mapping |

## Main Settings

### Connection Settings

```conf
# Listen on all interfaces
listen_addresses = '*'

# Default port
port = 5432

# Max connections
max_connections = 100
```

### Memory Settings

```conf
# Shared memory for caching
shared_buffers = 256MB

# Planner's estimate of usable cache
effective_cache_size = 1GB

# Memory per query operation
work_mem = 64MB

# Memory for maintenance (VACUUM, CREATE INDEX)
maintenance_work_mem = 128MB
```

### Write Ahead Log

```conf
# WAL level
wal_level = replica

# WAL size
max_wal_size = 1GB
min_wal_size = 80MB

# Checkpoints
checkpoint_timeout = 5min
```

### Query Planner

```conf
# Random page cost (SSD = 1.1, HDD = 4.0)
random_page_cost = 1.1

# Parallel queries
max_worker_processes = 8
max_parallel_workers_per_gather = 4
```

### Logging

```conf
# Log queries
log_statement = 'all'

# Log slow queries (> 100ms)
log_min_duration_statement = 100

# Log connections
log_connections = on
log_disconnections = on
```

## Authentication (pg_hba.conf)

```conf
# Local connections - trust
local all all trust

# IPv4 - md5 password
host all all 127.0.0.1/32 md5

# IPv6 - md5 password
host all all ::1/128 md5

# Remote - scram-sha-256 (secure)
host all all 0.0.0.0/0 scram-sha-256

# Replication
host replication all 0.0.0.0/0 md5
```

## SSL Configuration

```conf
# Enable SSL
ssl = on
ssl_cert_file = '/path/to/server.crt'
ssl_key_file = '/path/to/server.key'
ssl_ca_file = '/path/to/ca.crt'
```

## Replication Settings

```conf
# Streaming replication
wal_level = replica
max_wal_senders = 10
max_replication_slots = 10
hot_standby = on
```

## Key Performance Settings

| Setting | Default | Recommended | Description |
|---------|---------|-------------|-------------|
| `shared_buffers` | 128MB | 25% of RAM | Data cache |
| `work_mem` | 4MB | 64-256MB | Query memory |
| `maintenance_work_mem` | 64MB | 256MB | Maintenance ops |
| `effective_cache_size` | 4MB | 75% of RAM | Planner hint |
| `max_connections` | 100 | 100-200 | Max clients |

## Apply Changes

```bash
# Reload config (no restart)
sudo -u postgres psql -c "SELECT pg_reload_conf();"

# Or restart (required for some changes)
sudo systemctl restart postgresql
```

## Check Current Settings

```sql
-- Show all settings
SHOW all;

-- Show specific setting
SHOW max_connections;

-- Show with descriptions
SELECT name, setting, unit, description
FROM pg_settings
WHERE name IN ('shared_buffers', 'work_mem', 'max_connections');
```