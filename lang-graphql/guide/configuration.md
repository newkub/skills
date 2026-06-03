# Configuration

## ภาพรวม

GraphQL server configuration ขึ้นอยู่กับ implementation ที่ใช้ (Apollo Server, Express GraphQL, etc.)

## Apollo Server Configuration

### Basic Setup

```javascript
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
```

### Advanced Options

```javascript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    user: req.user,
    db: req.db,
  }),
  introspection: true,
  csrfPrevention: true,
});
```

## Express GraphQL Configuration

```javascript
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true, // Enable GraphiQL IDE
}));
```

## Schema Configuration

### Type Definitions

```graphql
type Query {
  hello: String
}

type Mutation {
  createPost(title: String!): Post
}

type Subscription {
  postAdded: Post
}
```

### Resolvers Configuration

```javascript
const resolvers = {
  Query: {
    hello: () => 'World',
  },
  Mutation: {
    createPost: (_, { title }) => {
      // Create post logic
    },
  },
  Subscription: {
    postAdded: {
      subscribe: () => pubsub.asyncIterator(['POST_ADDED']),
    },
  },
};
```

## Environment Variables

```env
GRAPHQL_PORT=4000
DATABASE_URL=postgresql://...
API_KEY=secret
```

## DataLoader Configuration

```javascript
import DataLoader from 'dataloader';

const userLoader = new DataLoader(async (ids) => {
  const users = await db.users.findAll({ where: { id: ids } });
  return ids.map(id => users.find(user => user.id === id));
});
```

## Authentication Configuration

```javascript
const server = new ApolloServer({
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUser(token);
    return { user };
  },
});
```

## Rate Limiting

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

app.use('/graphql', limiter);
```

## CORS Configuration

```javascript
const server = new ApolloServer({
  cors: {
    origin: ['https://example.com'],
    credentials: true,
  },
});
```
