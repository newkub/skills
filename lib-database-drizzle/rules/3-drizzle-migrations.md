# Drizzle Migrations Guide

## Migration Strategies

### Database-First Approach

Use when your database schema is the source of truth.

```bash
# Pull schema from database
drizzle-kit pull
```

**When to use:**

- Existing database with established schema
- Team manages database separately from code
- Using external migration tools

**Workflow:**

```text
DATABASE → drizzle-kit pull → TypeScript schema files
```

### Codebase-First Approach

Use when your TypeScript schema is the source of truth.

#### Push (Prototyping)

```bash
# Push schema directly to database
drizzle-kit push
```

**When to use:**

- Rapid prototyping
- Solo development
- Development environment
- No need for version-controlled migrations

**Workflow:**

```text
TypeScript schema → drizzle-kit push → DATABASE
```

#### Generate (Production)

```bash
# Generate SQL migration files
drizzle-kit generate

# Run migrations
drizzle-kit migrate
```

**When to use:**

- Production deployments
- Team collaboration
- Version-controlled schema changes
- Need rollback capability

**Workflow:**

```text
TypeScript schema → drizzle-kit generate → SQL migration files → drizzle-kit migrate → DATABASE
```

## Migration Commands

### Generate

```bash
drizzle-kit generate

# Options:
--config <path>    # Custom config file
--custom           # Generate custom migration template
--verbose          # Detailed output
```

### Migrate

```bash
drizzle-kit migrate

# Options:
--to <name>        # Migrate to specific migration
--from <name>      # Migrate from specific migration
--verbose          # Detailed output
```

### Push

```bash
drizzle-kit push

# Options:
--force            # Force push (use with caution)
--verbose          # Detailed output
```

### Pull

```bash
drizzle-kit pull

# Options:
--out <path>       # Output directory
--verbose          # Detailed output
```

## Migration Workflow

### Development Workflow

```bash
# 1. Define/update schema in TypeScript
# 2. Push changes to database
npm run db:push

# 3. Test changes
# 4. When ready for production:
npm run db:generate
npm run db:migrate
```

### Production Workflow

```bash
# 1. Generate migration
npm run db:generate

# 2. Review generated SQL
# 3. Commit migration files
# 4. Deploy
npm run db:migrate
```

## Custom Migrations

For DDL operations not supported by Drizzle Kit:

```bash
# Generate empty migration
drizzle-kit generate --custom

# Edit migration file with custom SQL
# Run migration
drizzle-kit migrate
```

Example custom migration:

```sql
-- 0001_add_full_text_search.sql

-- Create full-text search index
CREATE INDEX posts_search_idx ON posts 
USING gin(to_tsvector('english', title || ' ' || content));

-- Add trigger for auto-updating search vector
CREATE OR REPLACE FUNCTION posts_search_trigger() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', NEW.title || ' ' || NEW.content);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER posts_search_update
BEFORE INSERT OR UPDATE ON posts
FOR EACH ROW
EXECUTE FUNCTION posts_search_trigger();
```

## Configuration

### drizzle.config.ts

```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema',
  out: './src/db/migrations',
  driver: 'pg', // 'pg' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

### Environment-Specific Configs

```typescript
// drizzle.config.ts
import type { Config } from 'drizzle-kit';

const isDev = process.env.NODE_ENV === 'development';

export default {
  schema: './src/db/schema',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    url: isDev 
      ? 'postgresql://localhost:5432/dev_db'
      : process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
```

## Best Practices

### Development

- Use `drizzle-kit push` for rapid iteration
- Generate migrations before committing schema changes
- Review generated SQL before running migrations

### Production

- Always use `drizzle-kit generate` for version control
- Test migrations in staging environment first
- Keep migration files in version control
- Use descriptive migration names

### Team Collaboration

- Agree on migration strategy upfront
- Use branch-specific migrations for feature branches
- Resolve merge conflicts in migration files
- Document breaking changes

## Common Issues

### Migration Conflicts

```bash
# When multiple developers modify schema simultaneously:
# 1. Generate migration on main branch
# 2. Rebase feature branches
# 3. Regenerate migrations on feature branches
# 4. Review and resolve conflicts
```

### Rollback Strategy

```bash
# Drizzle doesn't auto-rollback, so:
# 1. Keep migration files version-controlled
# 2. Document reverse SQL in comments
# 3. Use database snapshots for critical changes
```

### Large Datasets

```bash
# For large tables:
# 1. Use batched migrations
# 2. Add indexes after data migration
# 3. Use minimal locking strategies
# 4. Consider zero-downtime migration patterns
```

## Migration File Structure

```text
src/db/migrations/
├── meta/
│   └── journal.json
├── 0001_create_users.sql
├── 0002_add_posts.sql
└── 0003_add_indexes.sql
```

## Verification

```bash
# Check migration status
drizzle-kit studio

# Verify schema matches
drizzle-kit check
```
