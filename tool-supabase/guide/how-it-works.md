# How It Works

## Purpose

อธิบายการทำงานภายในของ Supabase เพื่อให้เข้าใจ local development stack และ deployment workflow

## Scope

- Local Stack
- Migration Workflow
- Type Generation

## Local Development Stack

```
+--------------------------------------------------+
|              Supabase Local Stack                 |
+--------------------------------------------------+
|                                                   |
|  +----------------+     +----------------+        |
|  |  Studio        |     |  API           |        |
|  |  (Dashboard)   |     |  (PostgREST)   |        |
|  +----------------+     +----------------+        |
|          |                     |                   |
|  +----------------+     +----------------+        |
|  |  Postgres      |     |  GoTrue        |        |
|  |  (Database)    |     |  (Auth)        |        |
|  +----------------+     +----------------+        |
|          |                     |                   |
|  +----------------+     +----------------+        |
|  |  Storage       |     |  Realtime       |        |
|  |  (S3-like)     |     |  (WebSocket)   |        |
|  +----------------+     +----------------+        |
|                                                   |
+--------------------------------------------------+
```

### Components

| Component | Port | Description |
|-----------|------|-------------|
| **Postgres** | 54322 | PostgreSQL database |
| **PostgREST** | 54321 | REST API for Postgres |
| **GoTrue** | 54321/auth | Authentication |
| **Storage** | 54321/storage | File storage |
| **Realtime** | 54321/realtime | WebSocket subscriptions |
| **Studio** | 54323 | Admin dashboard |

## CLI Workflow

### 1. Initialize

```bash
supabase init
```

Creates:
- `supabase/config.toml`
- `supabase/migrations/`
- `supabase/seed.sql`

### 2. Start Stack

```bash
supabase start
```

### 3. Development

```bash
# Create migration
supabase migration new add_users_table

# Edit migration file
# supabase/migrations/20240101000000_add_users_table.sql

# Apply locally
supabase db reset

# Diff against database
supabase db diff -f new_changes
```

### 4. Deploy

```bash
# Link to project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push

# Pull remote schema
supabase db pull
```

## Migration Workflow

### Create Migration

```bash
supabase migration new create_profiles
```

### Edit Migration

```sql
-- supabase/migrations/20240101000000_create_profiles.sql

CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### Apply Migration

```bash
# Local
supabase db reset

# Remote
supabase db push
```

## Type Generation

### Generate Types

```bash
# TypeScript
supabase gen types typescript --linked

# Go
supabase gen types go --linked

# Swift
supabase gen types swift --linked
```

### Output Example

```typescript
// types/supabase.ts

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          display_name: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          display_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          display_name?: string | null
          avatar_url?: string | null
          created_at?: string
        }
      }
    }
  }
}
```

## Summary

| Phase | Commands |
|-------|----------|
| **Init** | `supabase init` |
| **Start** | `supabase start` |
| **Migrate** | `supabase migration new` |
| **Apply** | `supabase db reset` |
| **Deploy** | `supabase db push` |
| **Types** | `supabase gen types` |