# Installation

## Installation Methods

### macOS

```bash
# Using Homebrew
brew install postgresql@16

# Start service
brew services start postgresql@16

# Connect
psql -U postgres
```

### Ubuntu/Debian

```bash
# Install
sudo apt update
sudo apt install postgresql postgresql-client

# Start service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Switch to postgres user
sudo -u postgres psql
```

### Windows

```bash
# Download from https://www.postgresql.org/download/windows/
# Or use Chocolatey
choco install postgresql
```

### Docker

```bash
# Run PostgreSQL container
docker run --name postgres \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=mydb \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16

# Connect
psql -h localhost -U postgres -d mydb
```

### EnterpriseDB Installer

```bash
# Download from https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
# Run installer for Windows, macOS, Linux
```

## Verify Installation

```bash
# Check version
psql --version

# Check server status
pg_isready

# Connect locally
psql -U postgres
```

## Initial Setup

### Create User

```sql
-- As postgres user
sudo -u postgres createuser --interactive myuser

-- Or in psql
CREATE USER myuser WITH PASSWORD 'secret';
```

### Create Database

```sql
CREATE DATABASE mydb OWNER myuser;

-- Connect with new user
\c mydb
```

### Configure Access

```bash
# Edit pg_hba.conf
sudo nano /etc/postgresql/16/main/pg_hba.conf

# Add line for password authentication
host all all 127.0.0.1/32 md5
host all all ::1/128 md5

# Reload config
sudo systemctl reload postgresql
```

## Client Installation

| Client | Language | Install |
|--------|----------|---------|
| **psql** | CLI | Included with PostgreSQL |
| **pg** | Node.js | `npm install pg` |
| **psycopg2** | Python | `pip install psycopg2-binary` |
| **pgx** | Go | `go get github.com/jackc/pgx/v5` |
| **JDBC** | Java | Maven dependency |
| **Npgsql** | C#/.NET | `dotnet add package Npgsql` |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PGHOST` | Host (default: localhost) |
| `PGPORT` | Port (default: 5432) |
| `PGDATABASE` | Database name |
| `PGUSER` | Username |
| `PGPASSWORD` | Password |
| `PGDATA` | Data directory |

## Next Steps

| Step | Command |
|------|---------|
| Connect | `psql -U postgres` |
| Create DB | `CREATE DATABASE mydb;` |
| Test | `SELECT version();` |