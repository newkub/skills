---
name: trpc
description: End-to-end typesafe APIs made easy. Use for building type-safe client-server communication without code generation.
goal: Use tRPC following best practices
outcome: Fully type-safe API calls with excellent DX
---

# tRPC Library

## When to Use

Use this library when:

- Building full-stack TypeScript applications
- Need end-to-end type safety without GraphQL
- Want automatic type inference from server to client
- Using Next.js, Express, or Fastify backend
- Need subscription/real-time support
- Want excellent developer experience without code generation

## Quick Start

1. Install server and client packages
2. Create router with procedures
3. Set up tRPC client
4. Call procedures with full type safety

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | Core Concepts | tRPC fundamentals | Understanding the basics |
| **Knowledge** | Best Practices | API patterns | Building routers |
| **Rules** | Setup | Server and client setup | New project setup |
| **Rules** | Routers | Creating procedures and routers | API structure |
| **Rules** | Procedures | Queries, mutations, subscriptions | Endpoint types |
| **Rules** | Middleware | Auth, logging, context | Cross-cutting concerns |
| **Rules** | Client Usage | React Query integration | Frontend calls |
| **Rules** | Context | Request context and auth | Server context |

## Core Features

- **End-to-End Type Safe**: Types flow from server to client automatically
- **No Code Generation**: Types work without build step
- **Lightweight**: Small bundle size, minimal overhead
- **React Query Integration**: Use with TanStack Query
- **Subscriptions**: Built-in WebSocket support
- **Error Handling**: Type-safe error handling

## Quick Reference

```bash
# Install
npm install @trpc/server @trpc/client
npm install @trpc/react-query @tanstack/react-query

# Server router
const appRouter = router({
  getUser: procedure.query(({ input }) => {
    return { id: input.id, name: 'John' }
  }),
})

// Client call
const { data } = trpc.getUser.useQuery({ id: '1' })
```

## Verification

1. Check tRPC installation
2. Verify router configuration
3. Test type inference on client
4. Validate procedure calls
5. Check error handling
6. Ensure middleware works

## References

- [tRPC Documentation](https://trpc.io/)
- [Quickstart Guide](https://trpc.io/docs/quickstart)
- [GitHub Repository](https://github.com/trpc/trpc)
