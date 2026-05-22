# Memoization vs Caching

## เปรียบเทียบ

| หัวข้อ | Memoization | Caching |
|--------|-------------|---------|
| **Scope** | Function results | Any data/resource |
| **Granularity** | Per-function | Arbitrary |
| **Key** | Function arguments | Custom keys |
| **TTL** | Usually none | Often has expiration |
| **Storage** | In-memory | Memory, disk, distributed |
| **Invalidation** | Manual or none | Complex strategies |
| **Use Case** | Pure functions, expensive calc | API responses, DB queries |
| **Examples** | React.useMemo, lodash.memoize | Redis, CDN, browser cache |
| **Implementation** | Higher-order functions | Cache layers |
| **Best For** | Repeated calculations | I/O reduction |

## เมื่อไหร่ใช้อะไร

- **Memoization**: Expensive pure functions, React components, recursive algos
- **Caching**: API calls, database queries, static assets
