# Key Concept

## What is orpc?

orpc is a type-safe RPC framework for TypeScript that provides end-to-end type safety, automatic OpenAPI documentation, and streaming support.

## Core Features

| Feature | Description |
|---------|-------------|
| Type Safety | End-to-end TypeScript type inference |
| OpenAPI | Automatic API documentation |
| Streaming | Server-sent events and streaming |
| Middleware | Built-in middleware system |
| Validation | Request/response validation |

## Key Concepts

| Concept | Description |
|---------|-------------|
| Router | Main container for procedures |
| Procedure | Individual RPC endpoint |
| Middleware | Request/response preprocessing |
| Context | Shared request context |
| Error | Error handling and types |

## Architecture

```typescript
Client → Middleware → Handler → Middleware → Response
```

## Procedure Types

| Type | Description |
|------|-------------|
| Query | Read-only operations |
| Mutation | Write operations |
| Subscription | Real-time updates |

## When to Use

- Type-safe API development
- Full-stack TypeScript projects
- Real-time applications
- Microservices