# Performance

## Rationale

Performance optimization ช่วยให้ระบบรวดเร็ว, scalable, และ improve user experience

## Bad Practice

```typescript
// ❌ N+1 queries
async function getUsersWithOrders(): Promise<User[]> {
  const users = await db.findUsers();
  for (const user of users) {
    user.orders = await db.findOrders(user.id); // ❌ N+1 queries
  }
  return users;
}

// ❌ No caching
app.get('/users/:id', async (req, res) => {
  const user = await db.findUser(req.params.id); // ❌ Query every time
  res.json(user);
});

// ❌ Synchronous operations
function processUsers(users: User[]): void {
  for (const user of users) {
    sendEmail(user.email); // ❌ Blocking
  }
}
```

## Good Practice

```typescript
// ✅ Eager loading - single query
async function getUsersWithOrders(): Promise<User[]> {
  return db.findUsersWithOrders(); // ✅ Single query with JOIN
}

// ✅ Caching
const cache = new Redis();
app.get('/users/:id', async (req, res) => {
  const cached = await cache.get(req.params.id);
  if (cached) return res.json(cached);

  const user = await db.findUser(req.params.id);
  await cache.set(req.params.id, user, 3600);
  res.json(user);
});

// ✅ Asynchronous operations
async function processUsers(users: User[]): Promise<void> {
  await Promise.all(
    users.map(user => sendEmail(user.email))
  );
}
```

## Performance Strategies

### 1. Caching
- **Application cache**: In-memory (Redis, Memcached)
- **CDN**: Static assets
- **Browser cache**: HTTP caching headers

### 2. Database Optimization
- **Indexes**: Speed up queries
- **Query optimization**: Reduce N+1 queries
- **Connection pooling**: Reuse connections

### 3. Asynchronous Processing
- **Message queues**: Background jobs
- **Async APIs**: Non-blocking operations
- **Streaming**: Process data in chunks

## Profiling

### 1. Identify Bottlenecks
- **CPU profiling**: Find slow functions
- **Memory profiling**: Find memory leaks
- **Network profiling**: Find slow requests

### 2. Tools
- **Chrome DevTools**: Performance profiling
- **Node.js profiler**: CPU/memory profiling
- **APM tools**: New Relic, Datadog

## Best Practices

### 1. Measure Before Optimizing
- **Profile first**: Don't guess
- **Measure impact**: Before/after comparison
- **Focus on bottlenecks**: 80/20 rule

### 2. Optimize Hot Paths
- **Cache frequently accessed data**
- **Optimize critical paths**
- **Lazy load non-critical resources**

### 3. Monitor Performance
- **Response times**: Track p50, p95, p99
- **Error rates**: Track failures
- **Resource usage**: CPU, memory, disk

## References

- [High Performance MySQL](https://www.oreilly.com/library/view/high-performance-mysql/9781449312447/)
- [Web Performance Optimization](https://www.oreilly.com/library/view/high-performance-web-sites/9781449361693/)
