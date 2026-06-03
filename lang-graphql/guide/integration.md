# Integration

## ภาพรวม

GraphQL สามารถ integrate กับ frameworks และ tools ต่างๆ ได้หลากวิธี

## Framework Integration

GraphQL รองรับการใช้งานกับ frameworks หลายตัว เช่น React, Vue, Next.js

ดูรายละเอียดเพิ่มเติมได้ที่ [Frameworks](../key-concepts/frameworks.md)

## Database Integration

ดูรายละเอียดเพิ่มเติมได้ที่ [Database](../key-concepts/database.md)

## REST API Integration

```javascript
const fetch = require('node-fetch');

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      const response = await fetch(`https://api.example.com/users/${id}`);
      return response.json();
    },
  },
};
```

## Authentication Integration

### JWT

```javascript
const jwt = require('jsonwebtoken');

const context = ({ req }) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const user = jwt.verify(token, SECRET);
  return { user };
};
```

### OAuth

```javascript
const passport = require('passport');

app.use(passport.initialize());

const context = ({ req }) => {
  return { user: req.user };
};
```

## File Upload Integration

```javascript
const { GraphQLUpload } = require('graphql-upload');

const typeDefs = gql`
  scalar Upload

  type Mutation {
    uploadFile(file: Upload!): String
  }
`;

const resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename } = await file;
      // Save file logic
    },
  },
};
```

## Real-time Integration

### Subscriptions

```javascript
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const resolvers = {
  Subscription: {
    postAdded: {
      subscribe: () => pubsub.asyncIterator(['POST_ADDED']),
    },
  },
};
```

### WebSocket

```javascript
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

const wsServer = new WebSocketServer({
  server,
  path: '/graphql',
});

useServer({ schema }, wsServer);
```

## Testing Integration

ดูรายละเอียดเพิ่มเติมได้ที่ [Testing](../key-concepts/testing.md)

## Observability

### Apollo Studio

```javascript
import { ApolloServerPluginUsageReporting } from '@apollo/server/plugin/usageReporting';

const server = new ApolloServer({
  plugins: [
    ApolloServerPluginUsageReporting({
      apiKey: process.env.APOLLO_KEY,
    }),
  ],
});
```

### Datadog

```javascript
import tracer from 'dd-trace';

tracer.init({
  service: 'graphql-api',
});
```

## See Also

- [Security](../key-concepts/security.md)
- [Testing](../key-concepts/testing.md)
- [Database](../key-concepts/database.md)
