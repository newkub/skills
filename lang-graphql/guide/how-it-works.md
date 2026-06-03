# How It Works

## ภาพรวมการทำงานของ GraphQL

GraphQL เป็น query language สำหรับ APIs และ runtime สำหรับ executing queries โดยใช้ type system ที่ define และ validate data

## Architecture

```
Client
    ↓
GraphQL Query
    ↓
GraphQL Server
    ├── Schema (Type Definitions)
    ├── Resolvers (Data Fetching)
    └── Data Sources
        ├── Database
        ├── REST API
        └── Other Services
    ↓
Response (JSON)
```

## Core Components

### 1. Schema

Schema กำหนด capabilities ของ API:

```graphql
type Query {
  user(id: ID!): User
  users: [User]
}

type User {
  id: ID!
  name: String!
  email: String!
}
```

### 2. Resolvers

Resolvers เป็น functions ที่ fetch data:

```javascript
const resolvers = {
  Query: {
    user: (parent, args, context) => {
      return context.db.users.find(args.id);
    }
  }
};
```

### 3. Query Execution

```
1. Parse Query → AST
2. Validate against Schema
3. Execute Resolvers
4. Return Response
```

## Request Flow

```
Client Request
    ↓
GraphQL Engine
    ↓
Parse → Validate → Execute
    ↓
Resolver Functions
    ↓
Data Sources
    ↓
Response Formatting
    ↓
JSON Response
```

## Key Concepts

### 1. Single Endpoint

GraphQL ใช้ single endpoint สำหรับทุก operations:
- `/graphql` - Default endpoint
- GET/POST - HTTP methods
- JSON body - Query payload

### 2. Hierarchical Structure

Queries ตาม structure ของ data:

```graphql
{
  user(id: "1") {
    name
    posts {
      title
      author {
        name
      }
    }
  }
}
```

### 3. Introspection

GraphQL schema สามารถ query ได้เอง:

```graphql
{
  __schema {
    types {
      name
    }
  }
}
```

## Error Handling

GraphQL ใช้ partial responses:

```json
{
  "data": {
    "user": {
      "name": "John"
    }
  },
  "errors": [
    {
      "message": "Field 'email' failed",
      "path": ["user", "email"]
    }
  ]
}
```

## Caching

GraphQL caching strategies:
- Client-side caching (Apollo Client, Relay)
- Server-side caching (Redis, DataLoader)
- HTTP caching (with GET requests)
