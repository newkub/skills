# Best Practices - GraphQL

## Schema Design

### 1. Use Clear Naming

- Descriptive type names
- Consistent naming conventions
- Meaningful field names

```graphql
type User {
  id: ID!
  firstName: String!
  lastName: String!
  emailAddress: String!
}
```

### 2. Pagination

- Use Cursor-based pagination for large datasets
- Always return total count when useful

```graphql
type UserConnection {
  edges: [UserEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}
```

### 3. Mutations

- Use noun-based input types
- Implement optimistic updates
- Return modified entity

```graphql
type Mutation {
  createUser(input: CreateUserInput!): CreateUserPayload!
  updateUser(input: UpdateUserInput!): UpdateUserPayload!
}

input CreateUserInput {
  name: String!
  email: String!
}

type CreateUserPayload {
  user: User
  errors: [UserError!]
}
```

## Security

### 1. Query Complexity

- Limit depth
- Limit field count
- Rate limiting

### 2. Authentication

- JWT tokens
- API keys
- OAuth 2.0

### 3. Authorization

- Field-level permissions
- Operation-level permissions

## Performance

### 1. Data Loading

- Use DataLoader for N+1 queries
- Batch multiple requests
- Cache frequently accessed data

### 2. Response Caching

- Cache at field level
- Use Persisted Queries
