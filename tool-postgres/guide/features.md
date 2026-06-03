# Features

## Index Types

| Index Type | Use Case |
|-------------|----------|
| **B-tree** | Default, equality/range queries |
| **Hash** | Simple equality comparisons |
| **GiST** | Geometric, full-text search |
| **GIN** | Array, JSONB, inverted index |
| **SP-GiST** | Partitioned data, k-dimensional |
| **BRIN** | Large sequential data |
| **Partial** | Subset of rows |
| **Composite** | Multiple columns |

## Advanced Features

| Feature | Description |
|---------|-------------|
| **Window Functions** | ROW_NUMBER, RANK, LAG, LEAD |
| **CTE (WITH)** | Common Table Expressions |
| **Recursive CTE** | Hierarchical data |
| **JSON/JSONB** | JSON storage with indexing |
| **Full-text Search** | tsvector, tsquery |
| **Arrays** | Native array data type |
| **Range Types** | daterange, numrange, tsrange |
| **Custom Types** | User-defined types |

## Partitioning

| Type | Description |
|------|-------------|
| **Range** | Partition by range (dates, numbers) |
| **List** | Partition by list of values |
| **Hash** | Partition by hash |

```sql
-- Range partitioning by date
CREATE TABLE orders (
    id BIGSERIAL,
    order_date DATE NOT NULL,
    amount NUMERIC
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2024 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

## Replication Types

| Type | Description |
|------|-------------|
| **Streaming Replication** | Physical replica, async/sync |
| **Logical Replication** | DDL + DML, row-level |
| **Synchronous** | Waits for replica before commit |
| **Asynchronous** | Fire and forget |

## Extensions

| Extension | Purpose |
|-----------|---------|
| **PostGIS** | Geospatial data |
| **pgvector** | Vector storage for AI/ML |
| **pg_trgm** | Trigram similarity |
| **uuid-ossp** | UUID generation |
| **hstore** | Key-value store |
| **pg_partman** | Partition management |
| **pg_stat_statements** | Query performance |
| **pgRouting** | Routing algorithms |

## Data Integrity

| Feature | Description |
|---------|-------------|
| **Primary Key** | Unique identifier |
| **Foreign Key** | Referential integrity |
| **UNIQUE** | No duplicates |
| **CHECK** | Custom constraints |
| **NOT NULL** | Required values |
| **EXCLUDE** | Overlapping ranges |

## Window Functions

```sql
-- Examples
SELECT
    name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank,
    LAG(name) OVER (ORDER BY hire_date) as prev_employee,
    AVG(salary) OVER (PARTITION BY department) as dept_avg
FROM employees;
```

## JSON Operations

```sql
-- Create JSONB column
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    data JSONB
);

-- Index JSONB
CREATE INDEX idx_products_data ON products USING GIN (data);

-- Query JSONB
SELECT data->>'name' FROM products WHERE data @> '{"tags": ["sale"]}';
```

## Full-text Search

```sql
-- Create search index
CREATE INDEX idx_search ON articles USING GIN(to_tsvector('english', content));

-- Search
SELECT * FROM articles
WHERE to_tsvector('english', content) @@ to_tsquery('english', 'postgresql & performance');
```