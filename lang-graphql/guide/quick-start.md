# Quick Start - GraphQL

## Basic Setup

### 1. Define Schema

```graphql
type Query {
  user(id: ID!): User
  users: [User!]!
}

type User {
  id: ID!
  name: String!
  email: String!
}
```

### 2. Implement Resolvers

```typescript
const resolvers = {
  Query: {
    user: (_, { id }) => getUserById(id),
    users: () => getAllUsers()
  }
}
```

### 3. Client Query

```typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`

const { data } = await client.query({ query: GET_USERS })
```

## Common Operations

### Query with Variables

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
  }
}
```

### Mutations

```graphql
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
  }
}
```

### Subscriptions

```graphql
subscription OnUserCreated {
  userCreated {
    id
    name
  }
}
```
