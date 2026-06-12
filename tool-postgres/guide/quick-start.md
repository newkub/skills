# Quick Start

## Description

เริ่มต้นใช้งาน PostgreSQL อย่างรวดเร็ว

## Steps

### 1. Connect to PostgreSQL

```bash
psql -U postgres
```

### 2. Create Database

```sql
CREATE DATABASE mydb;
```

### 3. Connect to Database

```sql
\c mydb
```

### 4. Create Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);
```

### 5. Insert Data

```sql
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
```

### 6. Query Data

```sql
SELECT * FROM users;
```

## Best Practices

1. **Use Strong Passwords**: ใช้ strong passwords สำหรับ security
2. **Backup Regularly**: Backup databases เป็นประจำ
3. **Monitor Performance**: Monitor performance เป็นประจำ
4. **Use Transactions**: ใช้ transactions สำหรับ data integrity
