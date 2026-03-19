---
name: supabase
description: Open source Firebase alternative with PostgreSQL backend. Use for authentication, database, storage, and real-time subscriptions.
goal: Use Supabase following best practices
outcome: Full-stack applications with managed backend services
---

# Supabase Library

## When to Use

Use this library when:

- Need managed PostgreSQL database
- Want built-in authentication (email, OAuth, magic link)
- Building real-time applications with subscriptions
- Need file storage and edge functions
- Want open source Firebase alternative
- Building full-stack applications quickly

## Quick Start

1. Create project at supabase.com
2. Install client: `npm install @supabase/supabase-js`
3. Initialize client with URL and anon key
4. Use auth, database, storage, or realtime features

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Supabase fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Security and patterns | Building apps |
| **Rules** | [Setup](rules/1-setup.md) | Client initialization | New project setup |
| **Rules** | [Auth](rules/2-auth.md) | Authentication | User management |
| **Rules** | [Database](rules/3-database.md) | Queries and RLS | Data operations |
| **Rules** | [Realtime](rules/4-realtime.md) | Subscriptions | Live updates |
| **Rules** | [Storage](rules/5-storage.md) | File uploads | Asset management |
| **Rules** | [Edge Functions](rules/6-edge-functions.md) | Serverless functions | Backend logic |
| **Rules** | [RLS](rules/7-rls.md) | Row Level Security | Data protection |

## Core Features

- **PostgreSQL**: Managed database with full SQL power
- **Authentication**: Multiple auth providers built-in
- **Realtime**: Live subscriptions to database changes
- **Storage**: File storage with access control
- **Edge Functions**: Deno-based serverless functions
- **Auto-generated APIs**: REST and GraphQL APIs auto-generated

## Quick Reference

```bash
# Install
npm install @supabase/supabase-js

# Initialize
const supabase = createClient(url, anonKey)

# Query data
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', 1)

# Auth
const { data } = await supabase.auth.signInWithPassword({
  email, password
})
```

## Verification

1. Check Supabase client installation
2. Verify project connection
3. Test database queries
4. Validate auth flow
5. Check realtime subscriptions
6. Ensure RLS policies work

## References

- [Supabase Documentation](https://supabase.com/docs)
- [JavaScript Client](https://supabase.com/docs/reference/javascript/)
- [GitHub Repository](https://github.com/supabase/supabase)
