# Schema Design

## Schema Design Principles

### Normalization

### First Normal Form (1NF)

**Rule**: Eliminate repeating groups, atomic values

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
    item_price DECIMAL  -- Depends on item_name
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
- Performance-critical queries
- Simplify complex joins
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
CREATE TABLE orders_denorm (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    total DECIMAL,
    item_count INTEGER,  -- Denormalized
    last_updated TIMESTAMP
);
```

### Data Types

### Choosing Appropriate Types

| Use Case | Type | Example |
|----------|------|---------|
| **ID** | SERIAL/BIGINT | id SERIAL PRIMARY KEY |
| **Money** | DECIMAL | price DECIMAL(10,2) |
| **Text** | VARCHAR/TEXT | name VARCHAR(100) |
| **Boolean** | BOOLEAN | is_active BOOLEAN |
| **Date/Time** | TIMESTAMP/TIMESTAMPTZ | created_at TIMESTAMP |
| **JSON** | JSONB | attributes JSONB |

**Example**:

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) CHECK (price > 0),
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW(),
    attributes JSONB
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
    user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    avatar_url VARCHAR(255)
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
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(100),
    content TEXT
);
```

### Many-to-Many

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100)
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

CREATE TABLE post_tags (
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);
```

### Constraints

### Primary Key

```sql
-- Single column
CREATE TABLE users (
    id SERIAL PRIMARY KEY
);

-- Composite key
CREATE TABLE order_items (
    order_id INTEGER,
    item_id INTEGER,
    quantity INTEGER,
    PRIMARY KEY (order_id, item_id)
);
```

### Foreign Key

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
```

### Unique Constraint

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE
);
```

### Check Constraint

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10,2) CHECK (price > 0),
    quantity INTEGER CHECK (quantity >= 0)
);
```

### Not Null Constraint

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL
);
```

### Naming Conventions

### Table Names

- Use plural nouns: `users`, `orders`
- Use snake_case: `user_profiles`, `order_items`
- Be descriptive: `customer_orders`, not `co`

### Column Names

- Use snake_case: `first_name`, `created_at`
- Be descriptive: `user_id`, not `uid`
- Use consistent prefixes: `user_`, `order_`

### Index Names

- Prefix with `idx_`: `idx_users_email`
- Include table name: `idx_orders_user_date`

### Example

```sql
CREATE TABLE customer_orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    order_date TIMESTAMP DEFAULT NOW(),
    total_amount DECIMAL(10,2) CHECK (total_amount >= 0),
    status VARCHAR(20) DEFAULT 'pending'
);

CREATE INDEX idx_customer_orders_customer ON customer_orders(customer_id);
CREATE INDEX idx_customer_orders_date ON customer_orders(order_date);
```

### Schema Evolution

### Migrations

**Add Column**:

```sql
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
```

**Rename Column**:

```sql
ALTER TABLE users RENAME COLUMN name TO full_name;
```

**Drop Column**:

```sql
ALTER TABLE users DROP COLUMN old_column;
```

**Add Index**:

```sql
CREATE INDEX idx_users_email ON users(email);
```

**Add Foreign Key**:

```sql
ALTER TABLE orders 
ADD CONSTRAINT fk_orders_user 
FOREIGN KEY (user_id) REFERENCES users(id);
```

### Backward Compatibility

1. Add new columns with defaults
2. Use nullable columns initially
3. Migrate data before removing old columns
4. Test migrations on staging first
