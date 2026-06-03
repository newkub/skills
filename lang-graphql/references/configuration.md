# Configuration Reference - GraphQL

## Apollo Server Config

```typescript
import { ApolloServer } from '@apollo/server'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: []
})
```

## Apollo Server Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| typeDefs | DocumentNode | required | Schema definition |
| resolvers | ResolverMap | {} | Resolver functions |
| introspection | boolean | true | Enable introspection |
| playground | boolean | false | Enable playground |
| plugins | Plugin[] | [] | Apollo plugins |
| formatError | Function | default | Error formatter |
| formatResponse | Function | default | Response formatter |

## Apollo Client Config

```typescript
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  link: httpLink
})
```

## Apollo Client Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| uri | string | required | GraphQL endpoint |
| cache | Cache | InMemoryCache | Cache instance |
| link | Link | http | Network link |
| name | string | ApolloClient | Client name |
| version | string | 1.0 | Client version |

## Environment Variables

```bash
GRAPHQL_ENDPOINT=http://localhost:4000/graphql
GRAPHQL_API_KEY=your-api-key
APOLLO_KEY=your-apollo-key
APOLLO_GRAPH_VARIANT=current
```


---

