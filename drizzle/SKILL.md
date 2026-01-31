---
name: drizzle
description: TypeScript-first ORM with SQL-like syntax, type safety, and zero dependencies. Use for database operations, schema design, migrations, and query building with Drizzle ORM.
---

# Drizzle ORM Skill

## When to Use
- Setting up new database schemas with Drizzle ORM
- Writing database queries with type safety
- Managing migrations (push, generate, pull)
- Optimizing database performance
- Integrating with PostgreSQL, MySQL, SQLite, or other supported databases

## Core Concepts
- **Headless ORM**: Build projects with Drizzle, not around it
- **SQL-like syntax**: Zero learning curve if you know SQL
- **Type safety**: Full TypeScript inference from schemas
- **Serverless-ready**: Zero dependencies, lightweight
- **Migration strategies**: Database-first (pull) vs Codebase-first (push/generate)

## Key Resources
- `rules/1-drizzle-setup.md` - Project setup and configuration
- `rules/2-drizzle-schema-design.md` - Schema best practices and patterns
- `rules/3-drizzle-migrations.md` - Migration strategies and workflows
- `rules/4-drizzle-querying.md` - Query building and optimization
- `rules/5-drizzle-performance.md` - Performance optimization techniques

## Quick Reference
```bash
# Development workflow
drizzle-kit push      # Push schema directly (prototyping)
drizzle-kit generate  # Generate SQL migrations (production)
drizzle-kit migrate   # Run migrations
drizzle-kit pull      # Pull schema from database
drizzle-kit studio    # Visual database browser
```
