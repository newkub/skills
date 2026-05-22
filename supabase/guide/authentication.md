# Supabase Authentication

## Sign Up

```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password',
})
```

## Sign In

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password',
})
```

## Sign Out

```typescript
const { error } = await supabase.auth.signOut()
```

## Get Current User

```typescript
const { data: { user } } = await supabase.auth.getUser()
```

## OAuth Sign In

```typescript
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github',
})
```

## Reset Password

```typescript
const { data, error } = await supabase.auth.resetPasswordForEmail(
  'user@example.com'
)
```

## Listen to Auth Changes

```typescript
supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
})
```
