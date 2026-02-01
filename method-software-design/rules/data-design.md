# Data Design

## Rationale

Data design ที่ดีช่วยให้ queries รวดเร็ว, maintainable, และ consistent

## Bad Practice

```sql
-- ❌ No indexes
SELECT * FROM users WHERE email = 'john@example.com';

-- ❌ No constraints
CREATE TABLE users (
  id INT,
  name VARCHAR(255),
  email VARCHAR(255)
  -- ❌ No primary key, no unique constraint
);

-- ❌ No normalization
CREATE TABLE orders (
  id INT,
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  user_address VARCHAR(255),
  -- ❌ Duplicate user data
  items JSON
);
```

## Good Practice

```sql
-- ✅ Indexes สำหรับ queries ที่ใช้บ่อย
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- ✅ Constraints สำหรับ data integrity
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

-- ✅ Normalization
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Database Design

### 1. Schema Design
- **Normalization**: Eliminate redundancy
- **Constraints**: Ensure data integrity
- **Indexes**: Speed up queries

### 2. Indexing
- **Primary keys**: Unique identifier
- **Foreign keys**: Relationships
- **Composite indexes**: Multi-column queries
- **Covering indexes**: Include all columns

### 3. Consistency
- **ACID properties**: Atomicity, Consistency, Isolation, Durability
- **Transactions**: Group operations
- **Foreign keys**: Maintain relationships

## NoSQL Considerations

### When to Use NoSQL
- **Unstructured data**: Documents, key-value
- **High write throughput**: Time series, logs
- **Flexible schema**: Rapid prototyping

### Trade-offs
- **CAP theorem**: Consistency, Availability, Partition tolerance
- **Eventual consistency**: Accept stale data
- **Schema flexibility**: Less validation

## Best Practices

### 1. Query Optimization
- Use **indexes** for WHERE, JOIN, ORDER BY
- Avoid **SELECT \***: Fetch only needed columns
- Use **EXPLAIN** to analyze queries

### 2. Data Integrity
- Use **constraints**: NOT NULL, UNIQUE, CHECK
- Use **foreign keys**: Maintain relationships
- Use **transactions**: Group related operations

### 3. Backup & Recovery
- **Regular backups**: Daily, weekly, monthly
- **Point-in-time recovery**: Restore to specific time
- **Disaster recovery**: Multi-region replication

## References

- [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
- [SQL Performance Explained](https://www.oreilly.com/library/view/sql-performance-explained/9781449314272/)
