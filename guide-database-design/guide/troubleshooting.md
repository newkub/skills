# Troubleshooting

## การแก้ปัญหาที่พบบบ่อยใน Database

### Performance Issues

### Problem: Slow Queries

**Symptoms**:
- Queries take long time
- High CPU usage
- Timeout errors

**Causes**:
1. Missing indexes
2. Full table scans
3. Inefficient joins
4. Large result sets

**Solutions**:

```sql
-- ✅ Good: Add index
CREATE INDEX idx_users_email ON users(email);

-- ✅ Good: Use EXPLAIN ANALYZE
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'john@example.com';

-- ✅ Good: Optimize query
SELECT id, name FROM users WHERE email = 'john@example.com';
```

### Problem: High Lock Contention

**Symptoms**:
- Transactions blocked
- Timeout waiting for locks
- Poor throughput

**Causes**:
1. Long transactions
2. Lock held too long
3. Hot row contention

**Solutions**:

```sql
-- ✅ Good: Keep transactions short
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- ✅ Good: Use appropriate isolation level
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Query
COMMIT;
```

### Problem: Connection Exhaustion

**Symptoms**:
- Cannot connect to database
- Connection refused
- Too many connections error

**Causes**:
1. Connection leaks
2. Too many connections
3. No connection pooling

**Solutions**:

```typescript
// ✅ Good: Use connection pool
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// ✅ Good: Release connections
async function query() {
  const user = await prisma.user.findUnique({ where: { id: 1 } });
  return user;
  // Connection released automatically
}
```

### Data Integrity Issues

### Problem: Orphaned Records

**Symptoms**:
- Foreign key violations
- Data inconsistencies
- Broken relationships

**Causes**:
1. Missing foreign key constraints
2. Manual data manipulation
3. Bugs in application code

**Solutions**:

```sql
-- ✅ Good: Add foreign key constraint
ALTER TABLE orders 
ADD CONSTRAINT fk_orders_user 
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- ✅ Good: Clean up orphaned records
DELETE FROM orders 
WHERE user_id NOT IN (SELECT id FROM users);
```

### Problem: Duplicate Data

**Symptoms**:
- Duplicate records
- Unique constraint violations
- Data inconsistency

**Causes**:
1. Missing unique constraints
2. Race conditions
3. Application bugs

**Solutions**:

```sql
-- ✅ Good: Add unique constraint
ALTER TABLE users 
ADD CONSTRAINT uq_users_email UNIQUE (email);

-- ✅ Good: Remove duplicates
DELETE FROM users u1
WHERE EXISTS (
    SELECT 1 FROM users u2 
    WHERE u2.email = u1.email AND u2.id < u1.id
);
```

### Replication Issues

### Problem: Replication Lag

**Symptoms**:
- Slave not up to date
- Stale data reads
- Inconsistent data

**Causes**:
1. Heavy write load
2. Network latency
3. Slave underpowered

**Solutions**:

```sql
-- PostgreSQL: Check replication lag
SELECT lag FROM pg_stat_replication;

-- MySQL: Check replication lag
SHOW SLAVE STATUS;
```

### Problem: Replication Broken

**Symptoms**:
- Slave not replicating
- Error in replication log
- Data divergence

**Causes**:
1. Network issues
2. Schema changes
3. Data conflicts

**Solutions**:

```bash
# PostgreSQL: Rebuild replica
pg_basebackup -h master -D /var/lib/postgresql/data -P -v

# MySQL: Rebuild replica
mysqldump --all-databases --master-data=2 | mysql -h slave
```

### Storage Issues

### Problem: Disk Space Full

**Symptoms**:
- Cannot write data
- WAL files accumulating
- Database crashes

**Causes**:
1. Large tables
2. Unvacuumed dead tuples
3. WAL not archived

**Solutions**:

```sql
-- PostgreSQL: Vacuum database
VACUUM FULL;

-- PostgreSQL: Archive WAL
ALTER SYSTEM SET archive_mode = on;
ALTER SYSTEM SET archive_command = 'cp %p /archive/%f';

-- Drop old data
DELETE FROM logs WHERE created_at < NOW() - INTERVAL '30 days';
```

### Problem: Table Bloat

**Symptoms**:
- Large table size
- Slow queries
- Disk space waste

**Causes**:
1. Many updates/deletes
2. No vacuuming
3. Large rows

**Solutions**:

```sql
-- PostgreSQL: Vacuum table
VACUUM ANALYZE users;

-- PostgreSQL: Reindex table
REINDEX TABLE users;

-- PostgreSQL: Cluster table
CLUSTER users USING idx_users_email;
```

### Memory Issues

### Problem: Out of Memory

**Symptoms**:
- Database crashes
- OOM killer kills process
- Poor performance

**Causes**:
1. Large work_mem
2. Too many connections
3. Large result sets

**Solutions**:

```ini
# PostgreSQL: Reduce work_mem
work_mem = 16MB

# PostgreSQL: Reduce shared_buffers
shared_buffers = 128MB

# PostgreSQL: Reduce max_connections
max_connections = 50
```

### Network Issues

### Problem: Connection Timeout

**Symptoms**:
- Cannot connect
- Timeout errors
- Intermittent failures

**Causes**:
1. Network latency
2. Firewall blocking
3. DNS issues

**Solutions**:

```bash
# Test connectivity
ping database-server
telnet database-server 5432

# Check firewall
sudo ufw status

# Check DNS
nslookup database-server
```

### Debugging Tips

### 1. Enable Query Logging

```sql
-- PostgreSQL
ALTER SYSTEM SET log_statement = 'all';
ALTER SYSTEM SET log_duration = on;

-- MySQL
SET GLOBAL general_log = 'ON';
SET GLOBAL slow_query_log = 'ON';
```

### 2. Monitor Connections

```sql
-- PostgreSQL
SELECT count(*) FROM pg_stat_activity;

-- MySQL
SHOW PROCESSLIST;
```

### 3. Check Locks

```sql
-- PostgreSQL
SELECT * FROM pg_locks;

-- MySQL
SHOW ENGINE INNODB STATUS;
```

### 4. Analyze Slow Queries

```sql
-- PostgreSQL
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- MySQL
SELECT * FROM mysql.slow_log
ORDER BY query_time DESC
LIMIT 10;
```

### Common Pitfalls

### 1. Forgetting to Index

```sql
-- ❌ Bad: No index on foreign key
CREATE TABLE orders (
    user_id INTEGER  -- No index
);

-- ✅ Good: Index foreign key
CREATE TABLE orders (
    user_id INTEGER
);
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

### 2. Using SELECT *

```sql
-- ❌ Bad: Select all columns
SELECT * FROM users WHERE id = 1;

-- ✅ Good: Select only needed columns
SELECT id, name, email FROM users WHERE id = 1;
```

### 3. Not Using Transactions

```sql
-- ❌ Bad: No transaction
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- May fail halfway

-- ✅ Good: Use transaction
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

### 4. Ignoring Backups

```bash
# ❌ Bad: No backups
# Data loss risk

# ✅ Good: Regular backups
pg_dump -U user -h localhost mydb > backup_$(date +%Y%m%d).sql
```
