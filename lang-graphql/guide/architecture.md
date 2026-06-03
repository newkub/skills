# Architecture

## ภาพรวมสถาปัตยกรรม GraphQL

GraphQL เป็น query language และ runtime สำหรับ APIs ที่ใช้ type system ในการ define และ validate data

## Core Architecture

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │ GraphQL Query
       ↓
┌─────────────────┐
│ GraphQL Server   │
├─────────────────┤
│ 1. Parser       │ → AST
│ 2. Validator    │ → Type Check
│ 3. Executor     │ → Resolve
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   Resolvers     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Data Sources   │
│ • Database      │
│ • REST API      │
│ • Microservices │
└─────────────────┘
```

## Schema Layer

### Type System

```graphql
# Scalar Types
scalar Date
scalar JSON

# Object Types
type User {
  id: ID!
  name: String!
  email: String!
  createdAt: Date!
}

# Input Types
input CreateUserInput {
  name: String!
  email: String!
}

# Enum Types
enum Role {
  ADMIN
  USER
}

# Union Types
union SearchResult = User | Post

# Interface Types
interface Node {
  id: ID!
}
```

### Operation Types

```graphql
type Query {
  user(id: ID!): User
  users: [User]
}

type Mutation {
  createUser(input: CreateUserInput!): User
  deleteUser(id: ID!): Boolean
}

type Subscription {
  userCreated: User
}
```

## Resolver Layer

### Resolver Chain

```
Query.user(id)
    ↓
UserResolver.user(parent, args, context, info)
    ↓
User.posts
    ↓
PostResolver.posts(parent, args, context, info)
    ↓
Post.author
    ↓
UserResolver.author(parent, args, context, info)
```

### Resolver Signature

```javascript
resolver(parent, args, context, info) {
  // parent: Result from parent resolver
  // args: Query arguments
  // context: Shared context (auth, db, etc.)
  // info: AST and schema information
}
```

## Execution Layer

### Phases

1. **Parsing**
   - Convert query string to AST
   - Validate syntax

2. **Validation**
   - Validate against schema
   - Check types
   - Verify directives

3. **Execution**
   - Execute resolvers
   - Collect results
   - Format response

### Field Resolution

```
For each field in selection set:
  1. Get resolver function
  2. Call resolver with (parent, args, context, info)
  3. Return result
  4. If result is Promise, await it
  5. If result is Object, recurse
```

## Data Layer

### Data Sources

```
┌─────────────┐
│  Resolvers  │
└──────┬──────┘
       │
       ├────→ Database (SQL/NoSQL)
       ├────→ REST API
       ├────→ GraphQL API (stitching)
       ├────→ Microservices
       └────→ Cache (Redis)
```

### DataLoader Pattern

```javascript
const userLoader = new DataLoader(async (ids) => {
  const users = await db.users.findAll({ where: { id: ids } });
  return ids.map(id => users.find(user => user.id === id));
});

// Batching requests
// Caching results
// Deduplication
```

## Caching Architecture

### Client-Side Caching

```
Client Cache
    ↓
Normalized Cache
    ↓
InMemory Cache
```

### Server-Side Caching

```
Request
    ↓
Cache Check
    ↓
Hit → Return
    ↓
Miss → Resolve → Cache → Return
```

## Error Handling

### Error Propagation

```
Resolver Error
    ↓
Partial Response
    ↓
{
  "data": { ... },
  "errors": [ ... ]
}
```

### Error Types

- **Syntax Errors**: Invalid query syntax
- **Validation Errors**: Type mismatches
- **Runtime Errors**: Resolver failures
- **Network Errors**: Data source failures

## Security Architecture

### Authentication

```
Request
    ↓
Auth Middleware
    ↓
Context Injection
    ↓
Resolver Access
```

### Authorization

```graphql
type Query {
  adminData: AdminData @auth(requires: ADMIN)
}
```

### Rate Limiting

```
Request
    ↓
Rate Limiter
    ↓
Allow/Deny
```



1. **Schema-First Design**: Design schema before implementation
2. **Granular Resolvers**: One resolver per field
3. **DataLoader**: Use for N+1 problem
4. **Error Boundaries**: Handle errors gracefully
5. **Caching Strategy**: Cache at appropriate layers
6. **Security**: Validate and sanitize inputs
