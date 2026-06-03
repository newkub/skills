# Database Integration

## PostgreSQL

### Setup

```javascript
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
});
```

### Resolvers

```javascript
const resolvers = {
  Query: {
    users: async () => {
      const result = await pool.query('SELECT * FROM users');
      return result.rows;
    },
    user: async (_, { id }) => {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const result = await pool.query(
        'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
        [input.name, input.email]
      );
      return result.rows[0];
    },
  },
};
```

## MongoDB

### Setup

```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db('myapp');
```

### Resolvers

```javascript
const resolvers = {
  Query: {
    users: async () => {
      return db.collection('users').find().toArray();
    },
    user: async (_, { id }) => {
      return db.collection('users').findOne({ _id: new ObjectId(id) });
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const result = await db.collection('users').insertOne(input);
      return { ...input, id: result.insertedId };
    },
  },
};
```

## Prisma

### Setup

```bash
npm install prisma @prisma/client
npx prisma init
```

### Schema

```prisma
model User {
  id    String @id @default(cuid())
  name  String
  email String @unique
  posts Post[]
}

model Post {
  id      String @id @default(cuid())
  title   String
  content String
  author  User   @relation(fields: [authorId], references: [id])
  authorId String
}
```

### Resolvers

```javascript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: () => prisma.user.findMany({ include: { posts: true } }),
    user: (_, { id }) => prisma.user.findUnique({ where: { id } }),
  },
  Mutation: {
    createUser: (_, { input }) => prisma.user.create({ data: input }),
  },
};
```

## DataLoader Pattern

Prevent N+1 queries with batching:

```javascript
import DataLoader from 'dataloader';

const userLoader = new DataLoader(async (ids) => {
  const users = await pool.query(
    'SELECT * FROM users WHERE id = ANY($1)',
    [ids]
  );
  return ids.map(id => 
    users.rows.find(user => user.id === id) || null
  );
});

const resolvers = {
  Post: {
    author: (post) => userLoader.load(post.authorId),
  },
};
```