# System Design

## Rationale

System design ช่วยให้ระบบ scalable, reliable, และ handle high traffic ได้อย่างมีประสิทธิภาพ

## Bad Practice

```typescript
// ❌ Single point of failure
// ทุกอย่างอยู่ใน server เดียว
const app = express();
app.listen(3000);

// ❌ No caching
// Query database ทุกครั้ง
app.get('/users/:id', async (req, res) => {
  const user = await db.findUser(req.params.id);
  res.json(user);
});

// ❌ No load balancing
// ทุก requests ไปที่ server เดียว
```

## Good Practice

```typescript
// ✅ Horizontal scaling
// Load balancer -> multiple servers

// ✅ Caching layer
const cache = new Redis();
app.get('/users/:id', async (req, res) => {
  const cached = await cache.get(req.params.id);
  if (cached) return res.json(cached);

  const user = await db.findUser(req.params.id);
  await cache.set(req.params.id, user, 3600);
  res.json(user);
});

// ✅ Database replication
// Primary database (writes) -> Read replicas (reads)

// ✅ Message queue for async tasks
await queue.add('send-email', { to: 'user@example.com' });
```

## Scalability

### Vertical Scaling (Scale Up)
- **Pros**: Simple, no code changes
- **Cons**: Expensive, single point of failure

### Horizontal Scaling (Scale Out)
- **Pros**: Cost-effective, fault tolerance
- **Cons**: Complex, state management

## Reliability

### 1. Redundancy
- **Multiple servers**: No single point of failure
- **Database replication**: Primary + replicas
- **Multi-region**: Disaster recovery

### 2. Load Balancing
- **Round-robin**: Distribute requests evenly
- **Least connections**: Send to less busy servers
- **Health checks**: Remove unhealthy servers

### 3. Caching
- **CDN**: Static assets
- **Redis**: Frequently accessed data
- **Application cache**: In-memory cache

## Performance

### 1. Database Optimization
- **Indexes**: Faster queries
- **Query optimization**: Reduce N+1 queries
- **Connection pooling**: Reuse connections

### 2. Asynchronous Processing
- **Message queues**: Background jobs
- **Async APIs**: Non-blocking operations

### 3. Content Delivery
- **CDN**: Global distribution
- **Compression**: Reduce bandwidth
- **Lazy loading**: Load on demand

## References

- [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
