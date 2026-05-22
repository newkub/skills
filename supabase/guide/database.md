# Supabase Database

## Select Data

```typescript
const { data, error } = await supabase
  .from('users')
  .select('*')
```

## Filter Data

```typescript
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', 1)
  .gt('age', 18)
```

## Insert Data

```typescript
const { data, error } = await supabase
  .from('users')
  .insert([{ name: 'John', email: 'john@example.com' }])
```

## Update Data

```typescript
const { data, error } = await supabase
  .from('users')
  .update({ name: 'Jane' })
  .eq('id', 1)
```

## Delete Data

```typescript
const { error } = await supabase
  .from('users')
  .delete()
  .eq('id', 1)
```

## Join Tables

```typescript
const { data, error } = await supabase
  .from('users')
  .select('*, posts(*)')
```

## Count Rows

```typescript
const { count, error } = await supabase
  .from('users')
  .select('*', { count: 'exact', head: true })
```
