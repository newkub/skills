# Configuration Reference

Complete reference for PostgreSQL configuration

## Configuration Files

| File | Path | Purpose |
|------|------|---------|
| `postgresql.conf` | `$PGDATA/` | Main configuration |
| `pg_hba.conf` | `$PGDATA/` | Authentication rules |
| `pg_ident.conf` | `$PGDATA/` | User name mapping |

## Connection Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `listen_addresses` | string | `'localhost'` | Comma-separated addresses |
| `port` | integer | `5432` | Port number |
| `max_connections` | integer | `100` | Max concurrent connections |
| `superuser_reserved_connections` | integer | `3` | Connections reserved for superuser |
| `unix_socket_directories` | string | `' /tmp'` | Socket directories |

## Memory Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `shared_buffers` | size | `128MB` | Memory for caching data |
| `effective_cache_size` | size | `4MB` | Planner's cache estimate |
| `work_mem` | size | `4MB` | Memory per query sort/hash |
| `maintenance_work_mem` | size | `64MB` | Memory for maintenance ops |
| `temp_buffers` | size | `8MB` | Per-session temp buffers |
| `max_stack_depth` | size | `2MB` | Max stack depth |

## WAL Settings

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `wal_level` | string | `replica` | WAL level (minimal, replica, logical) |
| `fsync` | boolean | `on` | Force synchronous writes |
| `synchronous_commit` | string | `on` | Sync level (on, off, local, remote_write) |
| `wal_buffers` | size | `-1` | WAL buffer size |
| `max_wal_size` | size | `1GB` | Max WAL size before checkpoint |
| `min_wal_size` | size | `80MB` | Min WAL size to keep |
| `checkpoint_timeout` | time | `5min` | Time between checkpoints |
| `checkpoint_completion_target` | float | `0.9` | Checkpoint completion target |

## Query Planner

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `enable_async` | boolean | `on` | Enable async queries |
| `enable_hashjoin` | boolean | `on` | Enable hash join |
| `enable_indexscan` | boolean | `on` | Enable index scan |
| `enable_seqscan` | boolean | `on` | Enable sequential scan |
| `enable_nestloop` | boolean | `on` | Enable nested loop join |
| `enable_sort` | boolean | `on` | Enable explicit sorts |
| `random_page_cost` | float | `4.0` | Cost of non-sequential page |
| `effective_io_concurrency` | integer | `1` | Concurrent I/O operations |
| `default_statistics_target` | integer | `100` | Statistics target |

## Parallel Queries

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `max_worker_processes` | integer | `8` | Background worker processes |
| `max_parallel_workers_per_gather` | integer | `2` | Parallel workers per gather |
| `max_parallel_workers` | integer | `8` | Total parallel workers |
| `parallel_leader_participation` | boolean | `on` | Leader can execute |

## Logging

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `log_destination` | string | `'stderr'` | Logging destination |
| `logging_collector` | boolean | `on` | Enable logging collector |
| `log_directory` | string | `'log'` | Log directory |
| `log_filename` | string | `postgresql-%Y-%m-%d_%H%M%S.log` | Log filename pattern |
| `log_statement` | string | `'none'` | Statements to log |
| `log_line_prefix` | string | `'%m [%p]'` | Log line prefix |
| `log_connections` | boolean | `off` | Log connections |
| `log_disconnections` | boolean | `off` | Log disconnections |
| `log_duration` | boolean | `off` | Log duration |
| `log_min_duration_statement` | integer | `-1` | Min duration to log (ms) |

## Autovacuum

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `autovacuum` | boolean | `on` | Enable autovacuum |
| `autovacuum_max_workers` | integer | `3` | Max autovacuum workers |
| `autovacuum_naptime` | time | `1min` | Time between vacuums |
| `autovacuum_vacuum_threshold` | integer | `50` | Tuples threshold |
| `autovacuum_analyze_threshold` | integer | `50` | Analyze threshold |
| `autovacuum_vacuum_scale_factor` | float | `0.2` | Scale factor |
| `autovacuum_freeze_max_age` | integer | `200000000` | Max age before vacuum |

## Replication

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `wal_level` | string | `replica` | WAL level |
| `max_wal_senders` | integer | `10` | Max WAL senders |
| `max_replication_slots` | integer | `10` | Max replication slots |
| `wal_keep_size` | size | `0` | WAL to keep |
| `hot_standby` | boolean | `on` | Allow queries on standby |
| `hot_standby_feedback` | boolean | `off` | Send feedback to primary |

## SSL

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `ssl` | boolean | `off` | Enable SSL |
| `ssl_cert_file` | string | `postgres.crt` | SSL certificate |
| `ssl_key_file` | string | `postgres.key` | SSL private key |
| `ssl_ca_file` | string | `root.crt` | CA certificate |
| `ssl_ciphers` | string | `HIGH:MEDIUM:+3DES:!aNULL` | Allowed ciphers |

## Query Tuning

```sql
-- Show current value
SHOW shared_buffers;

-- Set temporarily (session)
SET work_mem = '256MB';

-- Set globally
ALTER SYSTEM SET work_mem = '256MB';
SELECT pg_reload_conf();

-- Check all settings
SELECT name, setting, unit, context
FROM pg_settings
WHERE category LIKE '%Memory%';
```