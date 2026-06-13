# Query Optimization

## Description

Optimize PostgreSQL queries สำหรับ performance

## Techniques

### Indexing
```sql
CREATE INDEX idx_email ON users(email);
```

### EXPLAIN
```sql
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
```

### Query Patterns
- Use WHERE clauses
- Avoid SELECT *
- Use LIMIT
- Use JOINs efficiently

## Best Practices

1. **Analyze Queries**: Analyze queries ด้วย EXPLAIN
2. **Use Indexes**: ใช้ indexes อย่างมีประสิทธิ
3. **Avoid N+1**: หลีกเลี่ยง N+1 queries
4. **Monitor Performance**: Monitor query performance
