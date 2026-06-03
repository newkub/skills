# Setup GraphQL Server

## Prerequisite

- Node.js 18+
- npm or yarn

## Steps

### 1. Initialize Project

```bash
mkdir my-graphql-api
cd my-graphql-api
npm init -y
```

### 2. Install Dependencies

```bash
npm install @apollo/server graphql graphql-yoga
# For Express
npm install express @apollo/server-express
```

### 3. Create Schema

Create `schema.ts`:

```typescript
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

export default typeDefs;
```

### 4. Create Resolvers

Create `resolvers.ts`:

```typescript
export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
```

### 5. Create Server

Create `server.ts`:

```typescript
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);
```

### 6. Run Server

```bash
npx ts-node server.ts
```

## Verify

Open browser to `http://localhost:4000` for Apollo Sandbox