# Supabase Client API Reference

## createClient

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, anonKey, options)
```

## Database Methods

### select

```typescript
supabase.from('table').select(columns)
```

### insert

```typescript
supabase.from('table').insert(data)
```

### update

```typescript
supabase.from('table').update(data)
```

### delete

```typescript
supabase.from('table').delete()
```

### rpc

```typescript
supabase.rpc('function_name', params)
```

## Filter Methods

- `eq(column, value)` - Equals
- `neq(column, value)` - Not equals
- `gt(column, value)` - Greater than
- `gte(column, value)` - Greater than or equal
- `lt(column, value)` - Less than
- `lte(column, value)` - Less than or equal
- `like(column, pattern)` - Like
- `ilike(column, pattern)` - Case-insensitive like
- `in(column, values)` - In array
- `is(column, value)` - Is null
- `order(column, options)` - Order results
- `limit(count)` - Limit results
- `range(from, to)` - Range of results
