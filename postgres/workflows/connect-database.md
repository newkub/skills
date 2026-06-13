# Connect Database

## Description

เชื่อมต่อ PostgreSQL database

## Steps

### 1. Connect with psql

```bash
psql -U username -d database_name
```

### 2. Connect with password

```bash
PGPASSWORD=password psql -U username -d database_name
```

### 3. Connect to remote

```bash
psql -h hostname -U username -d database_name
```

### 4. Connect with connection string

```bash
psql "postgresql://username:password@hostname:5432/database_name"
```

## Best Practices

1. **Use Environment Variables**: ใช้ environment variables สำหรับ credentials
2. **Use .pgpass**: ใช้ .pgpass สำหรับ password storage
3. **Use SSL**: ใช้ SSL สำหรับ secure connections
4. **Limit Access**: Limit remote access
