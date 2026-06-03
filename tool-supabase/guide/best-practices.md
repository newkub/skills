# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีในการใช้งาน Supabase เพื่อให้ได้ประสิทธิภาพและความปลอดภัยที่ดีที่สุด

## Scope

- Database Design
- Security
- Performance
- CI/CD

## Database Design

### 1. Use UUID

```sql
-- Always use UUID for primary keys
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid()
);
```

### 2. Enable RLS on All Tables

```sql
-- Every table should have RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public tables
CREATE POLICY "Public read" ON products
  FOR SELECT USING (true);

-- Private tables
CREATE POLICY "Owner access" ON orders
  FOR ALL USING (auth.uid() = user_id);
```

### 3. Use Triggers for Timestamps

```sql
CREATE TABLE logs (
  id BIGSERIAL PRIMARY KEY,
  data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Security

### 1. Always Enable RLS

```sql
-- Enable RLS on every table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policies for each operation
CREATE POLICY "Users read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users insert own data" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);
```

### 2. Use Service Role Carefully

```typescript
// Client-side - use anon key
const supabase = createClient(url, anonKey)

// Server-side - use service role
const supabase = createClient(url, serviceRoleKey)
```

### 3. Validate Input

```sql
-- Use check constraints
ALTER TABLE users ADD CONSTRAINT email_format
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

## Performance

### 1. Add Indexes

```sql
-- Index frequently queried columns
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Composite index
CREATE INDEX idx_products_category_price 
  ON products(category, price);
```

### 2. Use Functions for Complex Logic

```sql
-- Encapsulate business logic
CREATE FUNCTION get_user_orders(user_id UUID)
RETURNS SETOF orders AS $$
  SELECT * FROM orders WHERE user_id = $1;
$$ LANGUAGE SQL SECURITY DEFINER;
```

### 3. Limit Query Results

```toml
# config.toml
[api]
max_rows = 1000
```

## CI/CD

### 1. Version Control Migrations

```bash
# Create migration
supabase migration new add_users_table

# Commit to git
git add supabase/migrations/
git commit -m "feat: add users table"
```

### 2. Link in CI

```yaml
# .github/workflows/deploy.yml
- name: Deploy migrations
  run: supabase db push
  env:
    SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
    SUPABASE_DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
```

### 3. Dry Run First

```bash
# Preview changes
supabase db push --dry-run
```

## Common Pitfalls

### 1. Forget RLS

```sql
-- ⚠️ Bad - no security
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT
);

-- ✅ Good - with RLS
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT
);
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON products FOR SELECT USING (true);
```

### 2. Overly Permissive Policies

```sql
-- ⚠️ Bad - allows all updates
CREATE POLICY "All updates" ON products
  FOR UPDATE USING (true);

-- ✅ Good - restrict to owner
CREATE POLICY "Owner update" ON products
  FOR UPDATE USING (auth.uid() = owner_id);
```

### 3. Large Batch Inserts

```typescript
// ⚠️ Bad - multiple inserts
for (const item of items) {
  await supabase.from('products').insert(item)
}

// ✅ Good - batch insert
await supabase.from('products').insert(items)
```

## Summary

| Category | Best Practice |
|----------|---------------|
| **Design** | UUID, RLS, triggers |
| **Security** | RLS, service role, validation |
| **Performance** | Indexes, functions, limits |
| **CI/CD** | Version control, dry run |
| **Pitfalls** | RLS, policies, batch inserts |