# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน Supabase อย่างรวดเร็วใน 5 นาที

## 5-Minute Tutorial

### Step 1: Install CLI

```bash
npm install -g supabase
```

### Step 2: Initialize

```bash
supabase init
```

### Step 3: Start

```bash
supabase start
```

### Step 4: Create Table

เปิด Studio ที่ http://127.0.0.1:54323 แล้วสร้าง table

### Step 5: Connect App

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'http://127.0.0.1:54321',
  'your-anon-key'
)
```

## Common Use Cases

### Create Table with SQL

```bash
supabase migration new create_profiles
```

```sql
-- supabase/migrations/xxx_create_profiles.sql

CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users NOT NULL,
  display_name TEXT,
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
supabase db reset
```

### Generate Types

```bash
supabase gen types typescript --local > types/supabase.ts
```

### Deploy to Cloud

```bash
# Link
supabase link --project-ref your-project-ref

# Push
supabase db push
```

## CLI Commands

### Local Development

```bash
supabase init          # Initialize project
supabase start         # Start local stack
supabase stop          # Stop local stack
supabase status        # Check status
supabase db reset      # Reset database
```

### Migrations

```bash
supabase migration new <name>   # Create migration
supabase db diff -f <name>     # Diff schema
supabase db push               # Push to remote
supabase db pull               # Pull from remote
```

### Type Generation

```bash
supabase gen types typescript --local
supabase gen types typescript --linked
```

## Next Steps

### Learn More

- [Key Concept](key-concept.md) - แนวคิดหลัก
- [How It Works](how-it-works.md) - การทำงานภายใน
- [Features](features.md) - ฟีเจอร์ทั้งหมด

### Configuration

- [Configuration](configuration.md) - การตั้งค่า
- [Best Practices](best-practices.md) - แนวทางปฏิบัติ

### References

- [CLI Reference](../references/cli.md) - CLI commands
- [API Reference](../references/api.md) - API reference
- [Config Reference](../references/configuration.md) - Configuration options

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -g supabase` |
| **Init** | `supabase init` |
| **Start** | `supabase start` |
| **Migrate** | `supabase migration new` |
| **Push** | `supabase db push` |