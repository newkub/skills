# CLI Commands

Complete reference for PostgreSQL CLI commands

## psql Commands

### Connection

```bash
# Basic connection
psql -U username -d database_name

# With host and port
psql -h localhost -p 5432 -U postgres -d mydb

# With URI
psql postgresql://user:pass@host:5432/dbname

# Execute single command
psql -c "SELECT 1"

# From file
psql -f filename.sql

# Single transaction
psql --single-transaction -f filename.sql
```

### Meta Commands

| Command | Description |
|---------|-------------|
| `\c dbname` | Connect to database |
| `\c dbname user` | Connect as user |
| `\dt` | List tables |
| `\dt+` | List tables with size |
| `\di` | List indexes |
| `\dv` | List views |
| `\df` | List functions |
| `\df+` | Functions with code |
| `\du` | List users/roles |
| `\dn` | List schemas |
| `\dp` | List permissions |
| `\d tablename` | Describe table |
| `\d+ tablename` | Extended describe |
| `\l` | List databases |
| `\l+` | List databases with size |
| `\x` | Toggle expanded display |
| `\timing` | Toggle query timing |
| `\timing on` | Enable timing |

### Query Commands

```sql
-- Execute SQL
SELECT * FROM users;

-- Multi-line
SELECT id, name
FROM users
WHERE active = true
ORDER BY created_at DESC;

-- Run file
\i filename.sql

-- Output to file
\o output.txt
SELECT * FROM users;
\o

-- Copy to CSV
\copy (SELECT * FROM users) TO 'users.csv' CSV HEADER
```

### Formatting

| Command | Description |
|---------|-------------|
| `\a` | Toggle alignment |
| `\x` | Expanded mode |
| `\f '|'` | Field separator |
| `\C title` | Table title |
| `\pset format` | Output format (aligned, unaligned, html, csv) |
| `\pset border` | Border style (0, 1, 2) |
| `\pset null 'NULL'` | Null display |

## Utilities

### pg_dump

```bash
# Backup single database
pg_dump -U postgres mydb > backup.sql

# Backup with compression
pg_dump -U postgres mydb | gzip > backup.sql.gz

# Backup all databases
pg_dumpall -U postgres > all_backup.sql

# Custom format (for pg_restore)
pg_dump -U postgres -Fc mydb > backup.dump

# Schema only
pg_dump -U postgres -s mydb > schema.sql

# Data only
pg_dump -U postgres -a mydb > data.sql

# Exclude table
pg_dump -U postgres --exclude-table=logs mydb > backup.sql
```

### pg_restore

```bash
# Restore from plain SQL
psql -U postgres mydb < backup.sql

# Restore from custom format
pg_restore -U postgres -d mydb backup.dump

# Create new database
pg_restore -U postgres -C -d postgres backup.dump

# Drop and recreate
pg_restore -U postgres -C -d postgres --clean backup.dump
```

### createdb / dropdb

```bash
# Create database
createdb -U postgres mydb

# With owner
createdb -U postgres -O myuser mydb

# With template
createdb -U postgres -T template0 mydb

# Drop database
dropdb -U postgres mydb

# With options
dropdb -U postgres --if-exists mydb
```

### createuser / dropuser

```bash
# Create user
createuser -U postgres myuser

# With options
createuser -U postgres -s -e myuser  # Superuser

# Create with password
createuser -U postgres -P myuser

# Drop user
dropuser -U postgres myuser
```

### pg_isready

```bash
# Check if server is ready
pg_isready

# With host and port
pg_isready -h localhost -p 5432
```

### pg_ctl

```bash
# Start
pg_ctl start -D $PGDATA

# Stop
pg_ctl stop -D $PGDATA

# Restart
pg_ctl restart -D $PGDATA

# Status
pg_ctl status -D $PGDATA
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PGHOST` | Host |
| `PGPORT` | Port (default: 5432) |
| `PGDATABASE` | Database |
| `PGUSER` | Username |
| `PGPASSWORD` | Password |
| `PGDATA` | Data directory |
| `PGSSLMODE` | SSL mode |