# Best Practices

## Schema Design

| Practice | Description |
|----------|-------------|
| **Use meaningful names** | table_name, not tblnm |
| **Primary keys** | Always use SERIAL/BIGSERIAL or UUID |
| **Normalize** | 3NF usually, denormalize when needed |
| **Indexes** | Index foreign keys and frequent queries |

```sql
-- ✅ Good: Clear naming, proper types
CREATE TABLE user_profiles (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ❌ Bad: Vague names, no constraints
CREATE TABLE t (
    id serial,
    uid int,
    c text
);
```

## Query Optimization

| Practice | Description |
|----------|-------------|
| **Use EXPLAIN ANALYZE** | Analyze query plans |
| **Index columns in WHERE** | Speed up lookups |
| **Avoid SELECT *** | Fetch only needed columns |
| **Use LIMIT** | When testing queries |
| **Avoid functions on indexed columns** | Prevents index usage |

```sql
-- ✅ Good: Uses index
SELECT name FROM users WHERE email = 'test@example.com';

-- ❌ Bad: Function prevents index usage
SELECT name FROM users WHERE LOWER(email) = 'test@example.com';

-- Fix: Create functional index
CREATE INDEX idx_users_email_lower ON users(LOWER(email));
```

## Connection Management

| Practice | Description |
|----------|-------------|
| **Use connection pooling** | pgBouncer, PgPool-II |
| **Pool size** | max_connections = 20-50 |
| **Close connections** | Always release back to pool |
| **Connection string** | Use environment variables |

```sql
-- Check current connections
SELECT count(*) FROM pg_stat_activity;

-- Find idle connections
SELECT pid, usename, state
FROM pg_stat_activity
WHERE state = 'idle';
```

## Data Types Best Practices

| Practice | Description |
|----------|-------------|
| **Use TEXT not VARCHAR(n)** | VARCHAR limits rarely needed |
| **Use TIMESTAMPTZ not TIMESTAMP** | Always use timezone |
| **Use JSONB not JSON** | JSONB has indexing |
| **Use BIGINT for large tables** | Avoid overflow |

## Security

| Practice | Description |
|----------|-------------|
| **Use SCRAM-SHA-256** | Secure password auth |
| **SSL connections** | Enable in production |
| **Least privilege** | Specific user permissions |
| **Sanitize input** | Prevent SQL injection |
| **Use parameterized queries** | Always |

```sql
-- ❌ Bad: SQL injection risk
query = "SELECT * FROM users WHERE id = " + userId

-- ✅ Good: Parameterized query
query = "SELECT * FROM users WHERE id = $1"
pool.query(query, [userId])
```

## Backup & Recovery

| Practice | Description |
|----------|-------------|
| **Regular backups** | pg_dump daily |
| **WAL archiving** | Point-in-time recovery |
| **Test restores** | Verify backup works |
| **Monitor disk space** | WAL can grow fast |

```bash
# Backup single database
pg_dump -U postgres mydb > backup.sql

# Backup all databases
pg_dumpall -U postgres > all_backup.sql

# Restore
psql -U postgres mydb < backup.sql
```

## Monitoring

| Metric | Query |
|--------|-------|
| **Slow queries** | `pg_stat_statements` |
| **Table bloat** | `pgstattuple` |
| **Index usage** | `pg_stat_user_indexes` |
| **Connection count** | `pg_stat_activity` |
| **Cache hit ratio** | `pg_stat_database` |

```sql
-- Enable pg_stat_statements
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Find slow queries
SELECT query, calls, mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| **Missing indexes** | Analyze slow queries |
| **N+1 queries** | Use JOIN or batch queries |
| **Long transactions** | Commit frequently |
| **Not vacuuming** | Configure autovacuum |
| **Connection exhaustion** | Use connection pooler |