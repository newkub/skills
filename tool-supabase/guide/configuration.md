# Configuration

## Purpose

แนะนำการตั้งค่า configuration สำหรับ Supabase CLI เพื่อให้เหมาะกับโปรเจกต์ของคุณ

## Scope

- Config File
- Project Settings
- Environment Variables

## Config File

### supabase/config.toml

```toml
[project]
project_id = "local-project-123"

[api]
enabled = true
port = 54321
max_rows = 1000

[db]
port = 54322
major_version = 15

[studio]
enabled = true
port = 54323
```

### Fields

| Section | Key | Description |
|---------|-----|-------------|
| `project` | `project_id` | Project identifier |
| `api` | `enabled` | Enable API |
| `api` | `port` | API port |
| `db` | `port` | Database port |
| `studio` | `enabled` | Enable Studio |

## Local Services

### Exclude Services

```bash
supabase start -x gotrue,imgproxy
```

### Available Exclusions

| Service | Description |
|---------|-------------|
| `gotrue` | Auth |
| `realtime` | WebSocket |
| `storage-api` | Storage |
| `imgproxy` | Image transforms |
| `kong` | API gateway |
| `studio` | Dashboard |
| `postgres-meta` | Postgres meta |
| `postgrest` | REST API |
| `vector` | Vector search |

## Environment Variables

### Local Development

```bash
# Export for supabase-js
export SUPABASE_URL="http://127.0.0.1:54321"
export SUPABASE_ANON_KEY="your-anon-key"
export SUPABASE_SERVICE_ROLE_KEY="your-service-key"
```

### Get from Status

```bash
supabase status -o env
```

### Output

```
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Migrations

### Migration Directory

```
supabase/
└── migrations/
    ├── 20230101000000_initial.sql
    ├── 20230102000000_add_users.sql
    └── 20230103000000_add_profiles.sql
```

### Migration File Format

```sql
-- Migration name: add_users_table

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  USING (auth.uid() = id);
```

## Seed Data

### seed.sql

```sql
-- supabase/seed.sql

INSERT INTO profiles (user_id, display_name)
VALUES 
  (gen_random_uuid(), 'Admin'),
  (gen_random_uuid(), 'User');
```

### Skip Seed

```bash
supabase db reset --no-seed
```

## Project Link

### Link Options

| Flag | Description |
|------|-------------|
| `--project-ref` | Project reference |
| `--password` | Database password |
| `--skip-pooler` | Direct connection |

### Example

```bash
supabase link --project-ref abc123 --password secret
```

## Docker Volumes

### Backup Data

```bash
supabase stop
```

Data is backed up to Docker volumes automatically.

### Reset Data

```bash
supabase stop --no-backup
```

## Summary

| Category | Options |
|----------|---------|
| **Config** | config.toml |
| **Services** | -x flag to exclude |
| **Env** | SUPABASE_URL, keys |
| **Migrations** | supabase/migrations/ |
| **Seed** | supabase/seed.sql |