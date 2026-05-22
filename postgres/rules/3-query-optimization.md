# PostgreSQL Query Optimization

## When to Use

Use this guide when optimizing slow queries.

## Optimization Techniques

- Use EXPLAIN ANALYZE
- Add appropriate indexes
- Avoid SELECT *
- Use proper JOIN types
- Limit result sets

## Index Strategy

- Index frequently queried columns
- Composite indexes for multi-column queries
- Avoid over-indexing
- Monitor index usage

## Verification

- Query execution plans are efficient
- Index usage is optimal
- No full table scans
- Response times are acceptable
