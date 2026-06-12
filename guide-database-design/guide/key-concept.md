# Key Concept

## Database Design Fundamentals

### Relational vs NoSQL

| Aspect | Relational (SQL) | NoSQL |
|--------|-----------------|-------|
| **Schema** | Fixed schema | Flexible schema |
| **Data Model** | Tables with relationships | Documents, key-value, graphs |
| **Scalability** | Vertical scaling | Horizontal scaling |
| **Consistency** | ACID | BASE (eventual consistency) |
| **Query Language** | SQL | Varies by database |
| **Use Case** | Structured data, transactions | Unstructured data, high throughput |

**Example**:

```sql
-- Relational (PostgreSQL)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- NoSQL (MongoDB)
db.users.insertOne({
    name: "John Doe",
    email: "john@example.com"
});
```

### ACID Properties

### Atomicity

**Definition**: All operations in a transaction succeed or fail together

**Example**:

```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- Both updates succeed or both fail
```

### Consistency

**Definition**: Database transitions from valid state to valid state

**Example**:

```sql
-- Constraint ensures consistency
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    amount DECIMAL(10,2) CHECK (amount > 0)
);
```

### Isolation

**Definition**: Concurrent transactions don't interfere

**Levels**:
- **Read Uncommitted**: Lowest isolation
- **Read Committed**: Default in many databases
- **Repeatable Read**: Same read within transaction
- **Serializable**: Highest isolation

### Durability

**Definition**: Committed transactions survive failures

**Example**:

```sql
-- Write-ahead logging ensures durability
-- Data written to disk before commit confirmation
```

### CAP Theorem

### Definition

A distributed system can only guarantee 2 of 3:
- **C**onsistency: All nodes see same data simultaneously
- **A**vailability: Every request gets response
- **P**artition Tolerance: System continues despite network partitions

### Trade-offs

| System | C | A | P | Use Case |
|--------|---|---|---|----------|
| **RDBMS** | ✓ | ✓ | ✗ | Single node, strong consistency |
| **Cassandra** | ✗ | ✓ | ✓ | High availability, eventual consistency |
| **MongoDB** | ✓ | ✓ | ✗ | Strong consistency, single node |
| **DynamoDB** | ✓ | ✓ | ✓ | Tunable consistency |

### Normalization

### First Normal Form (1NF)

**Rule**: No repeating groups, atomic values

**Example**:

```sql
-- ❌ Not 1NF
CREATE TABLE orders (
    id INTEGER,
    items TEXT  -- "item1,item2,item3"
);

-- ✅ 1NF
CREATE TABLE orders (
    id INTEGER PRIMARY KEY
);

CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    item TEXT
);
```

### Second Normal Form (2NF)

**Rule**: No partial dependencies

**Example**:

```sql
-- ❌ Not 2NF
CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER,
    item_name TEXT,
    item_price DECIMAL  -- Depends on item_name, not order_id
);

-- ✅ 2NF
CREATE TABLE items (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price DECIMAL
);

CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER,
    item_id INTEGER REFERENCES items(id)
);
```

### Third Normal Form (3NF)

**Rule**: No transitive dependencies

**Example**:

```sql
-- ❌ Not 3NF
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    city TEXT,
    state TEXT,  -- Depends on city
    zip TEXT    -- Depends on city
);

-- ✅ 3NF
CREATE TABLE cities (
    zip TEXT PRIMARY KEY,
    city TEXT,
    state TEXT
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    zip TEXT REFERENCES cities(zip)
);
```

### Denormalization

### When to Denormalize

- Read-heavy workloads
- Performance optimization
- Simplify queries
- Materialized views

**Example**:

```sql
-- Normalized
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    total DECIMAL
);

CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER,
    amount DECIMAL
);

-- Denormalized for performance
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    total DECIMAL,
    item_count INTEGER,  -- Denormalized
    last_updated TIMESTAMP
);
```

### Indexing

### B-Tree Index

**Purpose**: Fast range queries, equality queries

**Example**:

```sql
CREATE INDEX idx_users_email ON users(email);
```

### Hash Index

**Purpose**: Fast equality queries only

**Example**:

```sql
CREATE INDEX idx_users_id_hash ON users USING HASH (id);
```

### Composite Index

**Purpose**: Multi-column queries

**Example**:

```sql
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
```

### Foreign Keys

### Definition

Relationship between tables ensuring referential integrity

**Example**:

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```

### Constraints

### Primary Key

**Purpose**: Unique identifier for each row

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY
);
```

### Unique Constraint

**Purpose**: Ensure column values are unique

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
```

### Check Constraint

**Purpose**: Validate data

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10,2) CHECK (price > 0)
);
```

### Relationships

### One-to-One

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE REFERENCES users(id),
    bio TEXT
);
```

### One-to-Many

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(100)
);
```

### Many-to-Many

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100)
);

CREATE TABLE post_tags (
    post_id INTEGER REFERENCES posts(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);
```
