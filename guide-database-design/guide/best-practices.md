# Best Practices

## Best Practices สำหรับ Database Design

### Schema Design

### 1. Use Appropriate Data Types

```sql
-- ✅ Good: Use appropriate types
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255),
    created_at TIMESTAMP,
    is_active BOOLEAN
);

-- ❌ Bad: Use generic types
CREATE TABLE users (
    id TEXT,
    name TEXT,
    email TEXT,
    created_at TEXT,
    is_active TEXT
);
```

### 2. Normalize First, Denormalize Later

```sql
-- ✅ Good: Normalized
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    city TEXT,
    state TEXT,
    zip TEXT
);

-- Denormalize if needed for performance
CREATE TABLE users_denorm (
    id SERIAL PRIMARY KEY,
    city TEXT,
    state TEXT,
    zip TEXT,
    city_state TEXT  -- Denormalized
);
```

### 3. Use Foreign Keys for Integrity

```sql
-- ✅ Good: Foreign key constraint
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

-- ❌ Bad: No foreign key
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER  -- No constraint
);
```

### 4. Add Constraints

```sql
-- ✅ Good: Add constraints
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    sku VARCHAR(50) UNIQUE
);
```

### Indexing

### 5. Index Foreign Keys

```sql
-- ✅ Good: Index foreign keys
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- ❌ Bad: No index on foreign key
-- Queries will be slow
```

### 6. Index Query Columns

```sql
-- ✅ Good: Index columns used in WHERE, JOIN, ORDER BY
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- ❌ Bad: Don't index everything
-- Too many indexes slow down writes
```

### 7. Use Composite Indexes Wisely

```sql
-- ✅ Good: Composite index for multi-column queries
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Order matters: most selective first
```

### Query Optimization

### 8. Use EXPLAIN ANALYZE

```sql
-- ✅ Good: Analyze query plan
EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'john@example.com';

-- Check for:
-- - Sequential scans
-- - Index usage
-- - Join methods
```

### 9. Avoid SELECT *

```sql
-- ✅ Good: Select only needed columns
SELECT id, name, email FROM users WHERE id = 1;

-- ❌ Bad: Select all columns
SELECT * FROM users WHERE id = 1;
```

### 10. Use LIMIT for Large Results

```sql
-- ✅ Good: Limit results
SELECT * FROM orders ORDER BY created_at DESC LIMIT 100;

-- Use pagination for large datasets
SELECT * FROM orders 
ORDER BY created_at DESC 
LIMIT 100 OFFSET 0;
```

### 11. Use EXISTS Instead of IN

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

### Transaction Management

### 12. Keep Transactions Short

```sql
-- ✅ Good: Short transaction
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- ❌ Bad: Long transaction
BEGIN;
-- Many operations
-- Long time
COMMIT;
```

### 13. Use Appropriate Isolation Level

```sql
-- ✅ Good: Use appropriate isolation
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- Query
COMMIT;

-- ❌ Bad: Always use SERIALIZABLE
-- Too restrictive, poor performance
```

### Security

### 14. Use Parameterized Queries

```typescript
// ✅ Good: Parameterized query
const user = await prisma.user.findUnique({
  where: { email: userEmail }
});

// ❌ Bad: String concatenation (SQL injection risk)
const user = await prisma.$queryRawUnsafe(
  `SELECT * FROM users WHERE email = '${userEmail}'`
);
```

### 15. Use Least Privilege

```sql
-- ✅ Good: Grant only necessary permissions
GRANT SELECT, INSERT ON mytable TO myuser;

-- ❌ Bad: Grant all permissions
GRANT ALL PRIVILEGES ON ALL TABLES TO myuser;
```

### 16. Encrypt Sensitive Data

```sql
-- ✅ Good: Encrypt sensitive columns
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password_hash VARCHAR(255),  -- Hashed password
    encrypted_data TEXT  -- Encrypted data
);
```

### Performance

### 17. Use Connection Pooling

```typescript
// ✅ Good: Use connection pool
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// ❌ Bad: Create new connection each query
// High overhead
```

### 18. Batch Operations

```typescript
// ✅ Good: Batch inserts
await prisma.user.createMany({
  data: users,
});

// ❌ Bad: Insert one by one
for (const user of users) {
  await prisma.user.create({ data: user });
}
```

### 19. Use Materialized Views

```sql
-- ✅ Good: Materialized view for complex queries
CREATE MATERIALIZED VIEW user_stats AS
SELECT user_id, COUNT(*) as order_count
FROM orders
GROUP BY user_id;

-- Refresh periodically
REFRESH MATERIALIZED VIEW user_stats;
```

### Backup and Recovery

### 20. Regular Backups

```bash
# ✅ Good: Automated backups
pg_dump -U user -h localhost mydb > backup_$(date +%Y%m%d).sql

# ❌ Bad: No backups
# Data loss risk
```

### 21. Test Backups

```bash
# ✅ Good: Test restore
psql -U user -h localhost testdb < backup_20231201.sql

# Verify data integrity
```

### Documentation

### 22. Document Schema

```sql
-- ✅ Good: Add comments
COMMENT ON TABLE users IS 'User accounts';
COMMENT ON COLUMN users.email IS 'User email address (unique)';
```

### 23. Use Naming Conventions

```sql
-- ✅ Good: Consistent naming
CREATE TABLE user_profiles (
    user_id INTEGER,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

-- ❌ Bad: Inconsistent naming
CREATE TABLE userprofiles (
    UserID INTEGER,
    fname VARCHAR(50),
    lname VARCHAR(50)
);
```

### Monitoring

### 24. Monitor Slow Queries

```sql
-- ✅ Good: Enable slow query log
ALTER SYSTEM SET log_min_duration_statement = 1000;

-- Review regularly
```

### 25. Monitor Connection Usage

```sql
-- ✅ Good: Monitor connections
SELECT count(*) FROM pg_stat_activity;

-- Set appropriate max_connections
```
