# Features

## Purpose

รายการฟีเจอร์ทั้งหมดของ Supabase สำหรับ build modern applications

## Core Features

### 1. PostgreSQL Database

| Feature | Description |
|---------|-------------|
| **Full SQL** | Full PostgreSQL support |
| **Extensions** | pgvector, UUID, JSONB |
| **Triggers** | Database triggers |
| **Functions** | Stored procedures |
| **Partitions** | Table partitioning |

### 2. Authentication

| Feature | Description |
|---------|-------------|
| **Email/Password** | Classic auth |
| **OAuth** | Google, GitHub, etc. |
| **Magic Links** | Passwordless email |
| **Phone** | SMS OTP |
| **Anonymous** | Guest users |

### 3. Row-Level Security (RLS)

```sql
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy examples
CREATE POLICY "Public read" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Owner access" ON profiles
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Role-based" ON profiles
  FOR SELECT USING (
    auth.jwt() ->> 'role' = 'admin'
  );
```

### 4. Storage

| Feature | Description |
|---------|-------------|
| **Buckets** | Organize files |
| **Policies** | Access control |
| **Images** | Transformation API |
| **Large files** | Up to 50MB |

### 5. Realtime

```sql
-- Enable realtime on table
ALTER PUBLICATION supabase_realtime ADD TABLE messages;
```

```typescript
// Subscribe to changes
const channel = supabase
  .channel('schema-db-changes')
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'messages'
  }, (payload) => {
    console.log(payload)
  })
  .subscribe()
```

### 6. Edge Functions

```typescript
// supabase/functions/hello-world/index.ts

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  const { name } = await req.json()
  return new Response(
    JSON.stringify({ message: `Hello ${name}!` }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})
```

### 7. Vector Search

```sql
-- Enable extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create table with vector
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding vector(1536)
);

-- Search
SELECT content, 
  1 - (embedding <=> '[0.1, 0.2, ...]') AS similarity
FROM documents
ORDER BY embedding <=> '[0.1, 0.2, ...]'
LIMIT 5;
```

## Database Features

### Migrations

```bash
# Create migration
supabase migration new add_users_table

# Apply migrations
supabase db reset

# Push to remote
supabase db push
```

### Diff Schema

```bash
# Diff local against linked
supabase db diff --linked -f add_columns

# Diff against local
supabase db diff --local -f add_columns
```

### Seed Data

```sql
-- supabase/seed.sql

INSERT INTO profiles (user_id, display_name)
VALUES 
  (auth.uid(), 'John Doe'),
  (auth.uid(), 'Jane Smith');
```

## Auth Features

### Sign Up

```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password',
})
```

### Sign In

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password',
})
```

### Sign Out

```typescript
const { error } = await supabase.auth.signOut()
```

## Storage Features

### Upload

```typescript
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('user-123/avatar.png', file)
```

### Download

```typescript
const { data, error } = await supabase.storage
  .from('avatars')
  .download('user-123/avatar.png')
```

### Public URL

```typescript
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('user-123/avatar.png')
```

## Summary

| Category | Features |
|----------|----------|
| **Database** | PostgreSQL, migrations, seed |
| **Auth** | Email, OAuth, magic links |
| **Security** | RLS, policies |
| **Storage** | Buckets, upload, download |
| **Realtime** | Subscriptions, live sync |
| **Edge** | Serverless functions |
| **Vector** | Embeddings, similarity |