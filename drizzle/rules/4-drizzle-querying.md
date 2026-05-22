# Drizzle Querying Guide

## Core Query Patterns

### Select Queries

```typescript
import { eq, and, or, like, gte, lte, sql } from 'drizzle-orm';

// Simple select
const users = await db.select().from(usersTable);

// With conditions
const activeUsers = await db
  .select()
  .from(usersTable)
  .where(eq(usersTable.isActive, true));

// Multiple conditions
const result = await db
  .select()
  .from(usersTable)
  .where(
    and(
      eq(usersTable.isActive, true),
      gte(usersTable.age, 18)
    )
  );

// Complex conditions
const complexQuery = await db
  .select()
  .from(usersTable)
  .where(
    or(
      like(usersTable.name, '%John%'),
      like(usersTable.email, '%john%')
    )
  );
```

### Joins

```typescript
// Left join
const postsWithAuthors = await db
  .select({
    post: postsTable,
    author: usersTable,
  })
  .from(postsTable)
  .leftJoin(usersTable, eq(postsTable.authorId, usersTable.id));

// Multiple joins
const postsWithComments = await db
  .select({
    post: postsTable,
    author: usersTable,
    comments: commentsTable,
  })
  .from(postsTable)
  .leftJoin(usersTable, eq(postsTable.authorId, usersTable.id))
  .leftJoin(commentsTable, eq(commentsTable.postId, postsTable.id));
```

### Relational Queries (Query API)

```typescript
// Fetch nested data without manual joins
const usersWithPosts = await db.query.users.findMany({
  with: {
    posts: true,
  },
});

// With specific columns
const usersWithPosts = await db.query.users.findMany({
  columns: {
    id: true,
    name: true,
  },
  with: {
    posts: {
      columns: {
        id: true,
        title: true,
      },
    },
  },
});

// With limits and ordering
const recentPosts = await db.query.posts.findMany({
  with: {
    author: {
      columns: {
        id: true,
        name: true,
      },
    },
  },
  orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  limit: 20,
});
```

## CRUD Operations

### Insert

```typescript
// Single insert
const [newUser] = await db
  .insert(usersTable)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
  })
  .returning();

// Multiple insert
const newUsers = await db
  .insert(usersTable)
  .values([
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 28 },
  ])
  .returning();
```

### Update

```typescript
// Update single record
const [updatedUser] = await db
  .update(usersTable)
  .set({ name: 'John Smith' })
  .where(eq(usersTable.id, 1))
  .returning();

// Update multiple records
const updated = await db
  .update(usersTable)
  .set({ isActive: false })
  .where(eq(usersTable.status, 'inactive'))
  .returning();

// Conditional update
const conditionalUpdate = await db
  .update(usersTable)
  .set({
    status: sql`CASE 
      WHEN age >= 18 THEN 'adult'
      ELSE 'minor'
    END`,
  });
```

### Delete

```typescript
// Always include where clause to prevent accidental deletion
const deleted = await db
  .delete(usersTable)
  .where(eq(usersTable.id, 1))
  .returning();

// Delete with conditions
const deletedInactive = await db
  .delete(usersTable)
  .where(eq(usersTable.isActive, false))
  .returning();
```

## Advanced Querying

### Aggregations

```typescript
import { count, sum, avg, max, min } from 'drizzle-orm';

// Count
const userCount = await db
  .select({ count: count() })
  .from(usersTable);

// Sum and average
const stats = await db
  .select({
    totalOrders: sum(ordersTable.totalAmount),
    avgOrderValue: avg(ordersTable.totalAmount),
  })
  .from(ordersTable);

// Group by
const postsByAuthor = await db
  .select({
    authorId: postsTable.authorId,
    authorName: usersTable.name,
    postCount: count(),
  })
  .from(postsTable)
  .leftJoin(usersTable, eq(postsTable.authorId, usersTable.id))
  .groupBy(postsTable.authorId, usersTable.name);
```

### Subqueries

```typescript
// Subquery in WHERE clause
const recentPosts = await db
  .select()
  .from(postsTable)
  .where(
    inArray(
      postsTable.id,
      db.select({ id: postsTable.id })
        .from(postsTable)
        .where(gte(postsTable.createdAt, new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)))
    )
  );
```

### Transactions

```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(process.env.DATABASE_URL);
const db = drizzle(client);

// Transaction
await db.transaction(async (tx) => {
  const [user] = await tx
    .insert(usersTable)
    .values({ name: 'John', email: 'john@example.com' })
    .returning();

  await tx
    .insert(postsTable)
    .values({ title: 'First Post', authorId: user.id });
});
```

## Prepared Statements

For frequently executed queries, use prepared statements:

```typescript
// Prepare statement
const getUserByEmail = db
  .select()
  .from(usersTable)
  .where(eq(usersTable.email, sql.placeholder('email')))
  .prepare('getUserByEmail');

// Execute with parameters
const user = await getUserByEmail.execute({ 
  email: 'john@example.com' 
});

// Reuse for performance
const user2 = await getUserByEmail.execute({ 
  email: 'alice@example.com' 
});
```

## Selective Field Loading

Optimize queries by selecting only needed fields:

```typescript
// Exclude large fields
const posts = await db.query.posts.findMany({
  columns: {
    id: true,
    title: true,
    // Exclude content field
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

## Common Query Patterns

### Pagination

```typescript
const page = 1;
const pageSize = 20;
const offset = (page - 1) * pageSize;

const paginatedPosts = await db
  .select()
  .from(postsTable)
  .orderBy(desc(postsTable.createdAt))
  .limit(pageSize)
  .offset(offset);

// Get total count
const [{ count }] = await db
  .select({ count: count() })
  .from(postsTable);
```

### Search

```typescript
const searchResults = await db
  .select()
  .from(postsTable)
  .where(
    or(
      like(postsTable.title, `%${searchTerm}%`),
      like(postsTable.content, `%${searchTerm}%`)
    )
  );
```

### Full-Text Search (PostgreSQL)

```typescript
const searchResults = await db
  .select()
  .from(postsTable)
  .where(
    sql`${postsTable.searchVector} @@ to_tsquery('english', ${searchTerm})`
  )
  .orderBy(
    sql`ts_rank(${postsTable.searchVector}, to_tsquery('english', ${searchTerm}))`
  );
```

### Common Table Expressions (CTEs)

```typescript
// Define a CTE for complex queries
const sq = db.$with('sq').as(
  db.select().from(usersTable).where(eq(usersTable.id, 42))
);

const result = await db.with(sq).select().from(sq);

// CTE with INSERT
const inserted = db.$with('inserted').as(
  db.insert(usersTable).values({ name: 'John' }).returning()
);

const result = await db.with(inserted).select().from(inserted);

// CTE with UPDATE
const updated = db.$with('updated').as(
  db.update(usersTable)
    .set({ age: 25 })
    .where(eq(usersTable.name, 'John'))
    .returning()
);

const result = await db.with(updated).select().from(updated);

// CTE with DELETE
const deleted = db.$with('deleted').as(
  db.delete(usersTable)
    .where(eq(usersTable.name, 'John'))
    .returning()
);

const result = await db.with(deleted).select().from(deleted);

// CTE with SQL expressions (requires alias)
const sq = db.$with('sq').as(
  db.select({
    name: sql<string>`upper(${usersTable.name})`.as('name'),
  }).from(usersTable)
);

const result = await db.with(sq).select({ name: sq.name }).from(sq);
```

## Error Handling

```typescript
try {
  const result = await db
    .insert(usersTable)
    .values({ name: 'John', email: 'john@example.com' })
    .returning();

  return result;
} catch (error) {
  if (error.code === '23505') {
    // Unique constraint violation
    throw new Error('User already exists');
  }
  if (error.code === '23503') {
    // Foreign key violation
    throw new Error('Referenced record does not exist');
  }
  if (error.code === '23502') {
    // Not null violation
    throw new Error('Required field missing');
  }
  throw error;
}
```

## Validation with Zod

```typescript
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Create validated insert schema
const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email('Invalid email format'),
  name: (schema) => schema.min(2, 'Name must be at least 2 characters'),
});

// Use in API routes
export async function createUser(data: unknown) {
  const validated = insertUserSchema.parse(data);
  const [user] = await db.insert(users).values(validated).returning();
  return user;
}

// Advanced validation with business logic
const createOrderSchema = createInsertSchema(orders, {
  totalAmount: (schema) => schema.positive('Amount must be positive'),
  orderDate: z.coerce.date(),
}).refine((data) => {
  if (data.status === 'shipped' && !data.shippedAt) {
    return false;
  }
  return true;
}, {
  message: 'Shipped orders must have a shipped date',
  path: ['shippedAt'],
});
```

## Performance Tips

- Use prepared statements for repeated queries
- Select only needed columns
- Use indexes on frequently queried columns
- Avoid N+1 queries with relational queries
- Use transactions for multi-step operations
- Consider pagination for large datasets
- Use `explain` to analyze query performance
