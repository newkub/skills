# Data Types

## Description

Data types ใน PostgreSQL

## Common Types

### Numeric
- `INTEGER`: Integer numbers
- `BIGINT`: Large integers
- `NUMERIC`: Exact decimal numbers
- `REAL`: Floating point numbers

### String
- `VARCHAR(n)`: Variable-length strings
- `TEXT`: Unlimited length strings
- `CHAR(n)`: Fixed-length strings

### Date/Time
- `DATE`: Date (year, month, day)
- `TIME`: Time (hour, minute, second)
- `TIMESTAMP`: Date and time
- `TIMESTAMPTZ`: Date and time with timezone

### JSON
- `JSON`: JSON data
- `JSONB`: Binary JSON (indexed)

## Best Practices

1. **Use Appropriate Types**: ใช้ types ที่เหมาะสม
2. **Use JSONB**: ใช้ JSONB สำหรับ JSON data
3. **Use Constraints**: ใช้ constraints สำหรับ data integrity
4. **Document Types**: Document type choices
