# Query Optimization

## Query Optimization Techniques

### EXPLAIN ANALYZE

### Understanding Query Plans

```sql
EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'john@example.com';
```

**Key Metrics**:
- **Seq Scan**: Sequential scan (bad for large tables)
- **Index Scan**: Index lookup (good)
- **Bitmap Scan**: Bitmap index scan (good for large tables)
- **Hash Join**: Hash-based join (good for large datasets)
- **Nested Loop**: Row-by-row join (good for small datasets)
- **Merge Join**: Sorted merge join (good for sorted data)

### SELECT Optimization

### Avoid SELECT *

```sql
-- ❌ Bad: Select all columns
SELECT * FROM users WHERE id = 1;

-- ✅ Good: Select only needed columns
SELECT id, name, email FROM users WHERE id = 1;
```

### Use LIMIT

```sql
-- ✅ Good: Limit results
SELECT * FROM orders ORDER BY created_at DESC LIMIT 100;

-- Use pagination
SELECT * FROM orders 
ORDER BY created_at DESC 
LIMIT 100 OFFSET 0;
```

### WHERE Optimization

### Use Indexable Conditions

```sql
-- ✅ Good: Indexable conditions
SELECT * FROM users WHERE email = 'john@example.com';
SELECT * FROM users WHERE created_at > '2023-01-01';

-- ❌ Bad: Non-indexable conditions
SELECT * FROM users WHERE LOWER(email) = 'john@example.com';
SELECT * FROM users WHERE email LIKE '%john%';
```

### Use EXISTS Instead of IN

```sql
-- ✅ Good: Use EXISTS
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- ❌ Bad: Use IN (may be slower)
SELECT * FROM users u
WHERE u.id IN (SELECT user_id FROM orders);
```

### Avoid Functions on Indexed Columns

```sql
-- ❌ Bad: Function on indexed column
SELECT * FROM users WHERE DATE(created_at) = '2023-01-01';

-- ✅ Good: Range query
SELECT * FROM users 
WHERE created_at >= '2023-01-01' AND created_at < '2023-01-02';
```

### JOIN Optimization

### Use Appropriate Join Types

```sql
-- INNER JOIN: Only matching rows
SELECT * FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: All from left, matching from right
SELECT * FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Use only when needed
```

### Join Order Matters

```sql
-- Smaller table first
SELECT * FROM small_table s
JOIN large_table l ON s.id = l.small_id;
```

### Subquery Optimization

### Use CTEs for Readability

```sql
-- ✅ Good: CTE
WITH user_stats AS (
    SELECT user_id, COUNT(*) as order_count
    FROM orders
    GROUP BY user_id
)
SELECT u.name, us.order_count
FROM users u
JOIN user_stats us ON u.id = us.user_id;
```

### Use JOIN Instead of Subquery

```sql
-- ✅ Good: JOIN
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- ❌ Bad: Subquery
SELECT u.name, (
    SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id
) as order_count
FROM users u;
```

### Aggregation Optimization

### Use Index on Group By Columns

```sql
-- ✅ Good: Index on group by column
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

SELECT user_id, COUNT(*) 
FROM orders 
GROUP BY user_id;
```

### Use HAVING After WHERE

```sql
-- ✅ Good: Filter before aggregation
SELECT user_id, COUNT(*) as order_count
FROM orders
WHERE created_at > '2023-01-01'
GROUP BY user_id
HAVING COUNT(*) > 10;

-- ❌ Bad: Filter after aggregation (slower)
SELECT user_id, COUNT(*) as order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 10 AND created_at > '2023-01-01';
```

### Pagination Optimization

### Use Keyset Pagination

```sql
-- ✅ Good: Keyset pagination (faster)
SELECT * FROM orders
WHERE id > last_seen_id
ORDER BY id
LIMIT 100;

-- ❌ Bad: OFFSET pagination (slower for large offsets)
SELECT * FROM orders
ORDER BY id
LIMIT 100 OFFSET 10000;
```

### Batch Operations

### Use Bulk Insert

```typescript
// ✅ Good: Bulk insert
await prisma.user.createMany({
  data: users,
});

// ❌ Bad: Insert one by one
for (const user of users) {
  await prisma.user.create({ data: user });
}
```

### Use Bulk Update

```sql
-- ✅ Good: Bulk update
UPDATE users
SET status = 'active'
WHERE created_at < '2023-01-01';

-- ❌ Bad: Update one by one
-- Loop through users and update each
```

### Materialized Views

### Use for Complex Queries

```sql
-- Create materialized view
CREATE MATERIALIZED VIEW user_order_stats AS
SELECT 
    u.id,
    u.name,
    COUNT(o.id) as order_count,
    SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Refresh periodically
REFRESH MATERIALIZED VIEW user_order_stats;

-- Query materialized view (fast)
SELECT * FROM user_order_stats WHERE order_count > 10;
```

### Partitioning

### Partition Large Tables

```sql
-- Create partitioned table
CREATE TABLE orders (
    id SERIAL,
    order_date DATE,
    amount DECIMAL
) PARTITION BY RANGE (order_date);

-- Create partitions
CREATE TABLE orders_2023 PARTITION OF orders
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE orders_2024 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- Query uses partition pruning
SELECT * FROM orders WHERE order_date = '2023-06-15';
```

### Connection Pooling

### Use Connection Pool

```typescript
// ✅ Good: Connection pool
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Configure pool size
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ['query', 'info', 'warn', 'error'],
});
```

### Caching

### Cache Query Results

```typescript
// Cache frequently accessed data
const cache = new Map();

async function getUser(id: number) {
  if (cache.has(id)) {
    return cache.get(id);
  }
  
  const user = await prisma.user.findUnique({ where: { id } });
  cache.set(id, user);
  return user;
}
```

### Monitoring

### Monitor Slow Queries

```sql
-- PostgreSQL: Enable slow query log
ALTER SYSTEM SET log_min_duration_statement = 1000;

-- Review slow queries
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

### Monitor Index Usage

```sql
-- Check unused indexes
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0;
```
