# PostgreSQL Examples

## 1. Basic Table Creation
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 2. Index Creation
```sql
-- Basic index
CREATE INDEX idx_users_email ON users(email);

-- Partial index
CREATE INDEX idx_active_users ON users(id) WHERE active = true;

-- Composite index
CREATE INDEX idx_users_name_email ON users(name, email);
```

## 3. Foreign Key Constraint
```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    total DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 4. Check Constraint
```sql
ALTER TABLE users 
ADD CONSTRAINT chk_age 
CHECK (age >= 18 AND age <= 120);
```

## 5. Trigger Function
```sql
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_modtime 
BEFORE UPDATE ON users 
FOR EACH ROW EXECUTE FUNCTION update_modified_column();
```

## 6. Window Function Example
```sql
SELECT 
    user_id,
    order_date,
    total,
    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY order_date DESC) as order_rank
FROM orders;
```

## 7. CTE Example
```sql
WITH user_stats AS (
    SELECT 
        user_id,
        COUNT(*) as order_count,
        SUM(total) as total_spent
    FROM orders 
    GROUP BY user_id
)
SELECT u.username, us.order_count, us.total_spent
FROM user_stats us
JOIN users u ON u.id = us.user_id;
```

## 8. JSON Query Example
```sql
-- Create table with JSONB column
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    metadata JSONB
);

-- Query JSON data
SELECT name, metadata->'price' as price
FROM products 
WHERE metadata->>'category' = 'electronics';
```

## 9. Upsert Example
```sql
INSERT INTO users (username, email) 
VALUES ('john_doe', 'john@example.com')
ON CONFLICT (email) 
DO UPDATE SET 
    username = EXCLUDED.username,
    updated_at = NOW();
```

## 10. Partitioned Table Example
```sql
-- Create partitioned table
CREATE TABLE measurements (
    id SERIAL,
    sensor_id INTEGER,
    value DECIMAL(10,4),
    timestamp TIMESTAMP WITH TIME ZONE
) PARTITION BY RANGE (timestamp);

-- Create partitions
CREATE TABLE measurements_2023 PARTITION OF measurements
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
```
