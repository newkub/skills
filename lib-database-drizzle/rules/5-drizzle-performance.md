# Drizzle Performance Optimization

## Connection Pool Optimization

### PostgreSQL Connection Pool

```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,                    // Maximum pool size
  idleTimeoutMillis: 30000,   // Close idle connections after 30s
  connectionTimeoutMillis: 2000, // Timeout for new connections
});

export const db = drizzle(pool, { schema });
```

### Connection Pool Best Practices

- **Max connections**: Set based on application concurrency (typically 20-50)
- **Idle timeout**: Close unused connections to free resources
- **Connection timeout**: Fail fast on connection issues
- **Statement timeout**: Prevent runaway queries

```typescript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  statement_timeout: 10000, // 10 second query timeout
});
```

### SQLite Configuration

```typescript
import Database from 'better-sqlite3';

const sqlite = new Database('drizzle.db', {
  // Enable WAL mode for better concurrency
  verbose: process.env.NODE_ENV === 'development' ? console.log : undefined,
});

sqlite.pragma('journal_mode = WAL');
sqlite.pragma('synchronous = NORMAL');
```

## Query Optimization

### Prepared Statements

```typescript
// Prepare for frequent queries
const getUserByEmail = db
  .select()
  .from(usersTable)
  .where(eq(usersTable.email, sql.placeholder('email')))
  .prepare('getUserByEmail');

// Reuse for performance
const user = await getUserByEmail.execute({ email: 'john@example.com' });
```

**Benefits:**

- 10-15% faster for repeated queries
- Reduced parsing overhead
- Better query plan caching

### Selective Field Loading

```typescript
// Load only needed columns
const posts = await db.query.posts.findMany({
  columns: {
    id: true,
    title: true,
    // Exclude large content field
  },
  with: {
    author: {
      columns: {
        id: true,
        name: true,
      },
    },
  },
  limit: 20,
});
```

**Benefits:**

- Reduces data transfer
- Faster query execution
- Lower memory usage

### Batch Operations

```typescript
// Batch inserts
const users = Array.from({ length: 1000 }, (_, i) => ({
  name: `User ${i}`,
  email: `user${i}@example.com`,
}));

await db.insert(usersTable).values(users);

// Batch updates
await db
  .update(usersTable)
  .set({ status: 'active' })
  .where(inArray(usersTable.id, userIds));
```

**Benefits:**

- Single round-trip to database
- Reduced transaction overhead
- Better performance for bulk operations

## Indexing Strategies

### When to Index

- Columns used in WHERE clauses
- Columns used in JOIN conditions
- Columns used in ORDER BY
- Foreign keys (always index)
- Frequently queried combinations

### Index Types

```typescript
// B-tree (default) - equality/range queries
index('email_idx').on(table.email),

// Composite - multiple columns
index('name_email_idx').on(table.name, table.email),

// Partial - filtered rows
index('active_users_idx')
  .on(table.email)
  .where(eq(table.isActive, true)),

// Covering - include columns
index('posts_covering_idx')
  .on(table.authorId)
  .include(table.title, table.createdAt),

// GIN - JSONB/arrays
index('metadata_idx').using('gin', table.metadata),
```

### Index Performance

- **Over-indexing**: Slows down writes
- **Missing indexes**: Slows down reads
- **Composite index order**: Most selective first
- **Partial indexes**: 275x performance improvement possible
- **Covering indexes**: Avoid table lookups for frequently accessed columns

### Index Selection Guidelines

```typescript
// Use partial indexes for filtered queries
index('active_users_idx')
  .on(table.email)
  .where(eq(table.isActive, true)),

// Use covering indexes to avoid table lookups
index('posts_covering_idx')
  .on(table.authorId)
  .include(table.title, table.createdAt),

// Use GIN indexes for JSONB and array searches
index('metadata_idx').using('gin', table.metadata),
index('tags_idx').using('gin', table.tags),
```

## Query Performance Analysis

### Explain Plans

```typescript
// Analyze query performance
const plan = await db.execute(
  sql`EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'john@example.com'`
);

console.log(plan);
```

### Common Performance Issues

- **Sequential scans**: Missing indexes
- **High latency**: Network/connection issues
- **Large result sets**: Missing pagination
- **N+1 queries**: Use relational queries instead

## Caching Strategies

### Application-Level Caching

```typescript
import { LRUCache } from 'lru-cache';

const userCache = new LRUCache<string, User>({
  max: 1000,
  ttl: 1000 * 60 * 5, // 5 minutes
});

async function getCachedUser(id: number) {
  const cacheKey = `user:${id}`;

  if (userCache.has(cacheKey)) {
    return userCache.get(cacheKey);
  }

  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .limit(1);

  userCache.set(cacheKey, user);
  return user;
}
```

### Query Result Caching

```typescript
// Cache frequent queries
const popularPostsCache = new LRUCache<string, Post[]>({
  max: 100,
  ttl: 1000 * 60 * 10, // 10 minutes
});

async function getPopularPosts() {
  if (popularPostsCache.has('popular')) {
    return popularPostsCache.get('popular');
  }

  const posts = await db
    .select()
    .from(postsTable)
    .orderBy(desc(postsTable.views))
    .limit(10);

  popularPostsCache.set('popular', posts);
  return posts;
}
```

## Database-Specific Optimizations

### PostgreSQL

```typescript
// Enable parallel query execution
await db.execute(sql`SET max_parallel_workers_per_gather = 4`);

// Use generated columns for computed values
const articles = pgTable('articles', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  content: text('content'),
  searchVector: tsVector('search_vector')
    .generatedAlwaysAs(
      (): SQL => sql`to_tsvector('english', ${articles.title} || ' ' || ${articles.content})`
    ),
});
```

### SQLite

```typescript
// Enable WAL mode
sqlite.pragma('journal_mode = WAL');
sqlite.pragma('synchronous = NORMAL');

// Optimize for performance
sqlite.pragma('cache_size = -64000'); // 64MB cache
sqlite.pragma('temp_store = MEMORY');
```

## Migration Performance

### Large Table Migrations

```typescript
// Batch migration for large tables
async function migrateLargeTable() {
  const batchSize = 1000;
  let offset = 0;

  while (true) {
    const batch = await db
      .select()
      .from(largeTable)
      .limit(batchSize)
      .offset(offset);

    if (batch.length === 0) break;

    // Process batch
    await processBatch(batch);

    offset += batchSize;
  }
}
```

### Zero-Downtime Migrations

```typescript
// Add new column without locking
// 1. Add nullable column
await db.execute(sql`ALTER TABLE users ADD COLUMN new_column TEXT`);

// 2. Backfill data in batches
await backfillData();

// 3. Make column NOT NULL
await db.execute(sql`ALTER TABLE users ALTER COLUMN new_column SET NOT NULL`);
```

## Monitoring and Profiling

### Query Logging

```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL, {
  debug: (connection, query, params) => {
    console.log('Query:', query);
    console.log('Params:', params);
  },
});

export const db = drizzle(client);
```

### Performance Metrics

```typescript
// Track query performance
async function trackQuery<T>(name: string, query: Promise<T>): Promise<T> {
  const start = Date.now();
  try {
    const result = await query;
    const duration = Date.now() - start;

    if (duration > 100) {
      console.warn(`Slow query [${name}]: ${duration}ms`);
    }

    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.error(`Query failed [${name}]: ${duration}ms`, error);
    throw error;
  }
}

// Usage
const users = await trackQuery('getActiveUsers',
  db.select().from(usersTable).where(eq(usersTable.isActive, true))
);
```

## Testing Strategies

### Test Data Generation with @praha/drizzle-factory

```typescript
import { defineFactory } from '@praha/drizzle-factory';
import { users } from './schema';

// Define a factory for test data
const userFactory = defineFactory(users, {
  defaults: {
    name: 'Test User',
    email: 'test@example.com',
  },
});

// Create test data
const user = await userFactory.create();

// Create with overrides
const adminUser = await userFactory.create({
  name: 'Admin',
  role: 'admin',
});

// Create multiple records
const usersList = await userFactory.createMany(5);
```

### Testing with Testcontainers

```typescript
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

let testDb: ReturnType<typeof drizzle>;

beforeAll(async () => {
  // Start PostgreSQL container
  const container = await new PostgreSqlContainer().start();

  // Create database connection
  const client = new Pool({
    connectionString: container.getConnectionUri(),
  });

  testDb = drizzle(client);

  // Run migrations
  await migrate(testDb, { migrationsFolder: './drizzle' });
});

afterAll(async () => {
  await container.stop();
});
```

### Unit Testing with Mocks

```typescript
import { vi } from 'vitest';
import { db } from './db';

// Mock database queries
vi.mock('./db', () => ({
  db: {
    select: vi.fn().mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockResolvedValue([
          { id: 1, name: 'Test User' },
        ]),
      }),
    }),
  },
}));
```

## Framework Integration

### Nuxt Integration

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/drizzle-kit'],
  drizzle: {
    driver: 'pg',
    schema: './server/db/schema',
    dbCredentials: {
      url: process.env.DATABASE_URL,
    },
  },
});

// server/db/index.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
```

### Next.js Integration

```typescript
// lib/db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

// app/api/users/route.ts
import { db } from '@/lib/db';
import { users } from '@/db/schema';

export async function GET() {
  const allUsers = await db.select().from(users);
  return Response.json(allUsers);
}
```

## Best Practices Summary

### Schema Design

- Use identity columns (2025 standard)
- Index foreign keys
- Use date mode for timestamps (10-15% faster than string mode)
- Avoid over-indexing
- Use partial indexes for filtered queries
- Implement covering indexes for frequently accessed columns

### Query Writing

- Use prepared statements for repeated queries (10-15% faster)
- Select only needed columns
- Use relational queries to avoid N+1
- Implement pagination
- Use batch operations for bulk inserts/updates

### Performance

- Optimize connection pools (max: 20-50, idle timeout: 30s)
- Cache frequent queries
- Monitor slow queries (>100ms)
- Use batch operations
- Set statement timeouts to prevent runaway queries

### Production

- Test migrations in staging
- Use version-controlled migrations
- Implement monitoring
- Plan rollback strategies
- Use connection pooling with proper timeouts

### Development Workflow

- Use `drizzle-kit push` for rapid prototyping
- Use `drizzle-kit generate` for production migrations
- Review generated SQL before running
- Keep migration files in version control
- Use descriptive migration names

### Team Collaboration

- Agree on migration strategy upfront
- Use branch-specific migrations for feature branches
- Resolve merge conflicts in migration files
- Document breaking changes
- Use consistent naming conventions

## Common Performance Pitfalls

- **N+1 queries**: Use relational queries or joins
- **Missing indexes**: Analyze query patterns
- **Large result sets**: Implement pagination
- **Unnecessary data**: Selective field loading
- **Connection leaks**: Use connection pooling
- **Slow migrations**: Use batch operations
