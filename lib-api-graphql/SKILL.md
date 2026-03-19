---
name: graphql
description: Query language and runtime for APIs. Use for efficient data fetching, type-safe APIs, and flexible data queries with Apollo Client or Relay.
goal: Use GraphQL following best practices
outcome: Efficient, type-safe data fetching with GraphQL
---

# GraphQL Library

## When to Use

Use this library when:

- Building APIs with complex data relationships
- Need flexible queries (clients specify what they need)
- Reducing over-fetching and under-fetching
- Building type-safe APIs with schema
- Using Apollo Client, Relay, or urql
- Need real-time subscriptions

## Quick Start

1. Define GraphQL schema (SDL)
2. Implement resolvers
3. Set up Apollo Client or Relay
4. Write queries and mutations

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | GraphQL fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | Schema design | Building APIs |
| **Rules** | Setup | Apollo/Relay setup | New project setup |
| **Rules** | Schema | Types, queries, mutations | API definition |
| **Rules** | Queries | Fetching data | Data fetching |
| **Rules** | Mutations | Modifying data | Data changes |
| **Rules** | Resolvers | Server-side logic | Backend implementation |
| **Rules** | Fragments | Reusable query pieces | Component queries |
| **Rules** | Subscriptions | Real-time updates | Live data |

## Core Features

- **Flexible Queries**: Clients request exactly what they need
- **Strong Typing**: Schema-driven type safety
- **Introspection**: Self-documenting APIs
- **Single Endpoint**: One endpoint for all operations
- **Subscriptions**: Real-time data with WebSockets
- **Ecosystem**: Rich tooling (Playground, Codegen)

## Quick Reference

```bash
# Install Apollo Client
npm install @apollo/client graphql

# Basic query
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`

// Using in component
const { data, loading } = useQuery(GET_USERS)
```

## Verification

1. Check GraphQL client installation
2. Verify schema definition
3. Test query execution
4. Validate mutation handling
5. Check fragment composition
6. Ensure subscription works

## References

- [GraphQL Documentation](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Spec](https://spec.graphql.org/)
