# Security

## Authentication

### JWT

```javascript
import jwt from 'jsonwebtoken';

const context = ({ req }) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return { user: null };
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { user: decoded };
  } catch {
    return { user: null };
  }
};
```

### API Key

```javascript
const resolvers = {
  Query: {
    _schema: () => {}, // Protected
  },
};

const context = ({ req }) => {
  const apiKey = req.headers['x-api-key'];
  
  if (apiKey !== process.env.API_KEY) {
    throw new Error('Unauthorized');
  }
  
  return {};
};
```

## Authorization

### Field-Level Authorization

```javascript
const resolvers = {
  User: {
    email: (user, args, context) => {
      if (context.user?.id === user.id || context.user?.role === 'ADMIN') {
        return user.email;
      }
      return null;
    },
  },
};
```

### Directive-Based Authorization

```graphql
type Query {
  adminData: String @auth(requires: ADMIN)
  userProfile: User @auth(requires: USER)
}

directive @auth(requires: Role) on FIELD_DEFINITION

enum Role {
  ADMIN
  USER
  GUEST
}
```

## Query Complexity Analysis

```javascript
import { createComplexityLimitRule } from 'graphql-query-complexity';

const rule = createComplexityLimitRule(1000, {
  onCost: (cost) => {
    console.log(`Query cost: ${cost}`);
  },
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginValidationRule(rule)],
});
```

## Rate Limiting

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,
  message: 'Too many requests',
});

app.use('/graphql', limiter);
```

## Persisted Queries

```javascript
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createHash } from 'crypto';

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Register persisted query
const queryHash = createHash('sha256')
  .update(myQuery)
  .digest('hex');

app.get('/graphql/:id', async (req, res) => {
  const { id } = req.params;
  const query = await persistedQueries.get(id);
  
  if (!query) {
    return res.status(404).json({ error: 'Query not found' });
  }
  
  const result = await execute({ schema, document: parse(query) });
  res.json(result);
});
```

## Input Validation

```javascript
import { GraphQLScalarType, Kind } from 'graphql';

const EmailScalar = new GraphQLScalarType({
  name: 'Email',
  serialize(value) {
    if (!isValidEmail(value)) {
      throw new TypeError('Invalid email');
    }
    return value;
  },
  parseValue(value) {
    if (!isValidEmail(value)) {
      throw new TypeError('Invalid email');
    }
    return value;
  },
});

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

## Best Practices

1. **Always validate input** using custom scalars
2. **Implement rate limiting** to prevent abuse
3. **Use query depth limiting** for complex queries
4. **Implement field-level auth** for sensitive data
5. **Use persisted queries** for production safety