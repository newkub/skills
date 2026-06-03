# Key Concept

## Purpose

แนวคิดหลักและหลักการทำงานของ Supabase ที่ทำให้เป็น complete backend-as-a-service

## What is Supabase?

Supabase เป็น open source Firebase alternative ใช้ PostgreSQL ให้:
- Database (PostgreSQL)
- Authentication
- Storage
- Realtime subscriptions
- Edge Functions
- Vector embeddings

## Core Concepts

### 1. PostgreSQL

```sql
-- Create table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy
CREATE POLICY "Users can view own data"
  ON users FOR SELECT
  USING (auth.uid() = id);
```

### 2. Authentication

```sql
-- Auth helpers
SELECT auth.uid();
SELECT auth.jwt();
SELECT auth.role();
```

### 3. Row-Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- User can read own profile
CREATE POLICY "Own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

-- User can update own profile
CREATE POLICY "Update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);
```

### 4. Storage

```sql
-- Create bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', false);

-- Upload policy
CREATE POLICY "Own avatar upload" ON storage.objects
  FOR INSERT WITH CHECK (auth.uid() = owner);
```

### 5. Realtime

```sql
-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE messages;

-- Subscribe in client
supabase.channel('messages').on('INSERT', callback).subscribe()
```

## When to Use

### Use Supabase When:

| Scenario | Reason |
|----------|--------|
| **Quick prototyping** | Fast setup |
| **Mobile apps** | Built-in auth |
| **SaaS** | RLS for multi-tenancy |
| **Realtime apps** | Live subscriptions |
| **Open source** | Self-hostable |
| **Postgres power** | Full SQL capabilities |

## Summary

| Concept | Description |
|---------|-------------|
| **PostgreSQL** | Full-featured relational database |
| **RLS** | Row-level security policies |
| **Auth** | User authentication with JWT |
| **Storage** | File storage with policies |
| **Realtime** | Live database subscriptions |