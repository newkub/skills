# Drizzle Schema Design Best Practices

## Core Schema Patterns

### Identity Columns (2025 Standard)
```typescript
import { pgTable, integer, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  // Identity column - new recommended approach
  id: integer('id').primaryKey().generatedAlwaysAsIdentity({
    startWith: 1000,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  email: varchar('email', { length: 320 }).notNull().unique(),
  name: text('name').notNull(),
});
```

### Reusable Column Patterns
```typescript
// Define reusable columns
export const timestamps = {
  createdAt: timestamp('created_at', {
    mode: 'date',
    precision: 3,
    withTimezone: true,
  }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', {
    mode: 'date',
    precision: 3,
    withTimezone: true,
  }).defaultNow().notNull().$onUpdateFn(() => new Date()),
  deletedAt: timestamp('deleted_at', {
    mode: 'date',
    precision: 3,
    withTimezone: true,
  }),
};

// Use in tables
export const posts = pgTable('posts', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  ...timestamps,
});
```

## Timestamp Handling

### Optimal Configuration
```typescript
// Date mode - 10-15% faster, recommended for most use cases
export const events = pgTable('events', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  createdAt: timestamp('created_at', {
    mode: 'date',        // Performance optimized
    precision: 3,         // Millisecond precision
    withTimezone: true,   // Always use timezone
  }).notNull().defaultNow(),
});

// String mode - only when specific formatting control needed
export const legacyTable = pgTable('legacy', {
  timestamp: timestamp('timestamp', { mode: 'string' }),
});
```

## Enum Handling

### TypeScript + Drizzle Enums
```typescript
import { pgEnum, pgTable, integer, text } from 'drizzle-orm/pg-core';

// Utility for TypeScript enum conversion
export function enumToPgEnum<T extends Record<string, string>>(
  myEnum: T,
): [T[keyof T], ...T[keyof T][]] {
  return Object.values(myEnum) as [T[keyof T], ...T[keyof T][]];
}

// TypeScript enum
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}

// Drizzle enum
export const userRoleEnum = pgEnum('user_role', enumToPgEnum(UserRole));

// Alternative: const array pattern
export const orderStatuses = ['pending', 'processing', 'shipped', 'delivered'] as const;
export type OrderStatus = typeof orderStatuses[number];
export const orderStatusEnum = pgEnum('order_status', orderStatuses);
```

## Indexing Strategies

### Comprehensive Indexing
```typescript
export const orders = pgTable('orders', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  customerId: integer('customer_id').notNull(),
  status: varchar('status', { length: 20 }).notNull(),
  orderDate: timestamp('order_date', { mode: 'date' }).notNull(),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }),
  metadata: jsonb('metadata'),
  tags: text('tags').array(),
}, (table) => [
  // B-tree indexes (default - fastest for equality/range queries)
  index('orders_customer_idx').on(table.customerId),
  
  // Composite index - column order matters!
  index('orders_customer_status_date_idx')
    .on(table.customerId, table.status, table.orderDate.desc()),
  
  // Partial index - up to 275x performance improvement
  index('orders_active_idx')
    .on(table.customerId, table.orderDate.desc())
    .where(sql`${table.status} = 'active'`),
  
  // Covering index to avoid table lookups
  index('orders_covering_idx')
    .on(table.customerId, table.orderDate.desc())
    .include(table.totalAmount),
  
  // GIN index for JSONB operations
  index('orders_metadata_idx').using('gin', table.metadata),
  
  // GIN index for array operations
  index('orders_tags_idx').using('gin', table.tags),
]);
```

## Foreign Key Relationships

### One-to-Many with Cascade
```typescript
export const posts = pgTable('posts', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  authorId: integer('author_id')
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
}, (table) => [
  // Always index foreign keys
  index('posts_author_idx').on(table.authorId),
]);
```

### Many-to-Many Junction Table
```typescript
export const postsToTags = pgTable('posts_to_tags', {
  postId: integer('post_id')
    .references(() => posts.id, { onDelete: 'cascade' })
    .notNull(),
  tagId: integer('tag_id')
    .references(() => tags.id, { onDelete: 'cascade' })
    .notNull(),
}, (table) => [
  primaryKey({ columns: [table.postId, table.tagId] }),
  index('posts_tags_post_idx').on(table.postId),
  index('posts_tags_tag_idx').on(table.tagId),
]);
```

## Relations Definition

```typescript
import { relations } from 'drizzle-orm';

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
```

## ID Strategies

### Hybrid ID Strategy
```typescript
export const optimizedTable = pgTable('optimized_table', {
  // Internal ID for performance (relations, joins)
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  
  // External ID for security (URLs, APIs)
  publicId: varchar('public_id', { length: 12 })
    .unique()
    .notNull()
    .$defaultFn(() => generateNanoId()),
  
  // Alternative: UUIDv7 for time-ordered uniqueness
  uuid: uuid('uuid').$defaultFn(() => generateUUIDv7()),
});

// Performance comparison:
// - BigSerial: Fastest, best for internal use
// - UUIDv7: 95% of bigserial performance, time-ordered
// - UUIDv4: Only 33% of bigserial performance, avoid for primary keys
```

## Common Pitfalls

- **Over-indexing**: Causes slow writes
- **Missing indexes on foreign keys**: Poor join performance
- **Using string mode for timestamps**: Unnecessary performance hit
- **Not leveraging prepared statements**: Missed optimization opportunities
- **Identity columns vs serial**: Use identity columns (2025 standard)

## Advanced Schema Features

### Row-Level Security (RLS)
```typescript
import { pgTable, pgPolicy, sql } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  userId: integer('user_id').notNull(),
}, (table) => [
  pgPolicy('posts_select_policy', {
    as: 'permissive',
    for: 'select',
    using: sql`user_id = auth.uid()`,
  }),
]);
```

### Generated Columns for Computed Values
```typescript
const articles = pgTable('articles', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  content: text('content'),
  searchVector: tsVector('search_vector').generatedAlwaysAs(
    (): SQL => sql`to_tsvector('english', ${articles.title} || ' ' || ${articles.content})`
  ),
});
```

### Zod Integration for Validation
```typescript
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Generate Zod schemas from Drizzle tables
export const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email('Invalid email format'),
  name: (schema) => schema.min(2, 'Name must be at least 2 characters'),
});

export const selectUserSchema = createSelectSchema(users);

// API route integration
export async function createUser(data: unknown) {
  const validated = insertUserSchema.parse(data);
  const [user] = await db.insert(users).values(validated).returning();
  return user;
}
```
