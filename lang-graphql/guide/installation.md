# Installation - GraphQL

## Server Setup

### Apollo Server

```bash
npm install @apollo/server graphql
```

```typescript
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server)
console.log(`Server ready at ${url}`)
```

### GraphQL Yoga

```bash
npm install graphql-yoga
```

## Client Setup

### Apollo Client

```bash
npm install @apollo/client graphql
```

### urql

```bash
npm install urql graphql
```

## Schema-First vs Code-First

### Schema-First

Define schema in SDL, then implement resolvers

### Code-First

Define schema in code using type constructors
