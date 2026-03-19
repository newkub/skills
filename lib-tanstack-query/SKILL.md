---
name: tanstack-query
description: Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular. Use for data fetching, caching, synchronization, and updating server state.
goal: Use TanStack Query following best practices
outcome: Efficient data fetching with automatic caching and synchronization
---

# TanStack Query Library

## When to Use

Use this library when:

- Fetching data from APIs or databases
- Managing server state in client applications
- Need automatic caching and background updates
- Handling loading, error, and success states
- Implementing pagination, infinite scroll, or optimistic updates
- Synchronizing data between server and client

## Quick Start

1. Install: `npm install @tanstack/react-query`
2. Set up QueryClient and QueryClientProvider
3. Use useQuery for fetching data
4. Use useMutation for mutations

## Summary Table

| Category | File | Purpose | Condition |
|---|---|---|---|
| **Knowledge** | [Core Concepts](knowledge/core-concept.md) | Query fundamentals | Understanding the basics |
| **Knowledge** | [Best Practices](knowledge/best-practices.md) | Recommended practices | Optimizing queries |
| **Rules** | [Setup](rules/1-setup.md) | Configuration and providers | New project setup |
| **Rules** | [Queries](rules/2-queries.md) | Fetching data patterns | Data fetching |
| **Rules** | [Mutations](rules/3-mutations.md) | Updating server state | Data mutations |
| **Rules** | [Caching](rules/4-caching.md) | Cache configuration | Performance optimization |
| **Rules** | [Pagination](rules/5-pagination.md) | Infinite scroll, pagination | List handling |
| **Rules** | [DevTools](rules/6-devtools.md) | React Query DevTools | Debugging |

## Core Features

- **Automatic Caching**: Smart caching with automatic background updates
- **Background Refetching**: Stale-while-revalidate strategy
- **Optimistic Updates**: Update UI before server confirms
- **Pagination & Infinite Scroll**: Built-in support for complex list handling
- **DevTools**: Visual debugging tools for queries
- **TypeScript**: Full type safety support

## Quick Reference

```bash
# Install
npm install @tanstack/react-query
npm install @tanstack/react-query-devtools

# Basic query
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos
})

# Basic mutation
const mutation = useMutation({
  mutationFn: addTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  }
})
```

## Verification

1. Check TanStack Query installation
2. Verify QueryClient configuration
3. Test query fetching and caching
4. Validate mutation handling
5. Check DevTools integration
6. Verify TypeScript types

## References

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Query Guide](https://tanstack.com/query/latest/docs/framework/react/overview)
- [GitHub Repository](https://github.com/TanStack/query)
