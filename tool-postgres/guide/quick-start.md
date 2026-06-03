# Quick Start

## Connect to PostgreSQL

```bash
# Connect locally
psql -U postgres

# Connect with database
psql -U postgres -d mydb

# Connect with host
psql -h localhost -p 5432 -U postgres -d mydb

# Connect with URI
psql postgresql://postgres:secret@localhost:5432/mydb
```

## Basic SQL Operations

```sql
-- Create database
CREATE DATABASE myapp;

-- Connect to database
\c myapp

-- Create table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert data
INSERT INTO users (name, email) VALUES
    ('John Doe', 'john@example.com'),
    ('Jane Smith', 'jane@example.com');

-- Select data
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 1;

-- Update data
UPDATE users SET name = 'John Updated' WHERE id = 1;

-- Delete data
DELETE FROM users WHERE id = 2;
```

## Node.js Quick Start

```bash
# Install pg driver
npm install pg
```

```javascript
const { Pool } = require('pg');

// Create connection pool
const pool = new Pool({
  connectionString: 'postgresql://localhost:5432/mydb',
});

// Query
async function main() {
  const result = await pool.query('SELECT * FROM users');
  console.log(result.rows);

  await pool.end();
}

main();
```

## Python Quick Start

```bash
# Install psycopg2
pip install psycopg2-binary
```

```python
import psycopg2

# Connect
conn = psycopg2.connect(
    host="localhost",
    database="mydb",
    user="postgres",
    password="secret"
)

# Query
cur = conn.cursor()
cur.execute("SELECT * FROM users")
rows = cur.fetchall()

for row in rows:
    print(row)

cur.close()
conn.close()
```

## Transaction Example

```sql
BEGIN;

-- Multiple operations
INSERT INTO orders (user_id, total) VALUES (1, 100);
INSERT INTO order_items (order_id, product_id) VALUES (1, 10);
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 10;

-- Commit or rollback
COMMIT;
-- or
-- ROLLBACK;
```

## Common psql Commands

| Command | Description |
|---------|-------------|
| `\c dbname` | Connect to database |
| `\dt` | List tables |
| `\d tablename` | Describe table |
| `\du` | List users |
| `\l` | List databases |
| `\x` | Expanded display |
| `\i file.sql` | Execute file |
| `\q` | Quit |

## Next Steps

| Resource | Description |
|----------|-------------|
| [Key Concept](key-concept.md) | เข้าใจ ACID, MVCC |
| [Features](features.md) | Indexing, partitioning |
| [Configuration](configuration.md) | Performance tuning |
| [Best Practices](best-practices.md) | Tips & tricks |