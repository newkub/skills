# Programmatic API

Client libraries and API for PostgreSQL

## Connection String

```
postgresql://username:password@localhost:5432/database_name
```

## Node.js (pg)

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://localhost:5432/mydb',
});

// Query
const result = await pool.query('SELECT * FROM users');
console.log(result.rows);

// Transaction
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('INSERT INTO users (name) VALUES ($1)', ['John']);
  await client.query('COMMIT');
} catch (e) {
  await client.query('ROLLBACK');
  throw e;
} finally {
  client.release();
}
```

## Python (psycopg2)

```python
import psycopg2

conn = psycopg2.connect(
    host="localhost",
    database="mydb",
    user="username",
    password="password"
)
cur = conn.cursor()

# Query
cur.execute("SELECT * FROM users")
rows = cur.fetchall()

# Transaction
try:
    cur.execute("BEGIN")
    cur.execute("INSERT INTO users (name) VALUES (%s)", ("John",))
    conn.commit()
except:
    conn.rollback()
    raise

cur.close()
conn.close()
```

## Go (pgx)

```go
import (
    "github.com/jackc/pgx/v5"
    "github.com/jackc/pgx/v5/pgxpool"
)

pool, _ := pgxpool.New(context.Background(), "postgres://localhost:5432/mydb")
defer pool.Close()

// Query
var name string
err := pool.QueryRow(context.Background(), "SELECT name FROM users WHERE id=$1", 1).Scan(&name)

// Transaction
tx, _ := pool.Begin(ctx)
tx.Exec(ctx, "INSERT INTO users (name) VALUES ($1)", "John")
tx.Commit(ctx)
```

## Common SQL Operations

```sql
-- Create table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create index
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_active ON users(active) WHERE active = true;

-- JSON operations
SELECT data->>'name' FROM json_table;
INSERT INTO users (data) VALUES ('{"name": "John"}'::jsonb);

-- Full-text search
CREATE INDEX idx_users_search ON users USING GIN(to_tsvector('english', name));

SELECT * FROM users WHERE to_tsvector('english', name) @@ to_tsquery('english', 'John');
```

## Best Practices

```sql
-- Use prepared statements
PREPARE stmt AS SELECT * FROM users WHERE id = $1;
EXECUTE stmt(1);

-- Use connection pooling
-- Monitor query performance
EXPLAIN ANALYZE SELECT * FROM users WHERE id = $1;

-- Use proper indexing
CREATE INDEX idx_users_composite ON users(email, created_at DESC);
```

## See Also

- [CLI](./cli.md) - psql commands
- [Configuration](./configuration.md) - Config options