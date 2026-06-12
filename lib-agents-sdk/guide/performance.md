# Performance

## State Optimization

### Minimize State Size
- Store only necessary data
- Use efficient data structures
- Avoid large nested objects
- Compress large data if needed

### Efficient State Updates
```typescript
// Bad - full state replacement
this.setState({
  users: [...this.state.users, newUser],
  posts: this.state.posts,
  comments: this.state.comments
});

// Good - targeted update
this.setState({
  users: [...this.state.users, newUser]
});
```

### Batch State Changes
```typescript
// Bad - multiple updates
this.setState({ count: this.state.count + 1 });
this.setState({ name: "new name" });
this.setState({ active: true });

// Good - single batch update
this.setState({
  count: this.state.count + 1,
  name: "new name",
  active: true
});
```

## Connection Management

### Connection Pooling
- Reuse WebSocket connections
- Implement connection pooling
- Avoid unnecessary disconnections
- Clean up idle connections

### Connection Lifecycle
```typescript
export class OptimizedAgent extends Agent<Env, State> {
  onConnect(connection: Connection) {
    // Initialize connection-specific resources
  }

  onDisconnect(connection: Connection) {
    // Clean up connection-specific resources
  }
}
```

### Hibernation
- Use WebSocket hibernation for idle connections
- Configure appropriate hibernation timeout
- Resume efficiently on reconnection
- Preserve state during hibernation

## Query Optimization

### SQLite Optimization
```typescript
// Bad - N+1 query
for (const userId of userIds) {
  const user = await this.db.query.users.findFirst({
    where: eq(users.id, userId)
  });
}

// Good - single query with IN clause
const users = await this.db.query.users.findMany({
  where: inArray(users.id, userIds)
});
```

### Indexing
- Create indexes on frequently queried columns
- Use composite indexes for multi-column queries
- Monitor index usage
- Remove unused indexes

### Query Caching
```typescript
export class CachedAgent extends Agent<Env, State> {
  initialState = { cache: {} };

  @callable()
  async getCachedData(key: string) {
    if (this.state.cache[key]) {
      return this.state.cache[key];
    }

    const data = await this.fetchData(key);
    this.setState({
      cache: { ...this.state.cache, [key]: data }
    });
    return data;
  }
}
```

## Streaming Optimization

### Chunk Size
- Use appropriate chunk sizes for streaming
- Balance between latency and throughput
- Adjust based on network conditions
- Monitor streaming performance

### Backpressure Handling
```typescript
export class BackpressureAgent extends Agent<Env, State> {
  @callable()
  async *streamWithBackpressure() {
    for (const item of items) {
      if (this.shouldThrottle()) {
        await this.wait();
      }
      yield item;
    }
  }

  shouldThrottle() {
    // Check if client is ready for more data
  }
}
```

### Resumable Streaming
- Implement resumable streams for large data
- Track stream position
- Handle reconnection gracefully
- Resume from last position

## Memory Management

### Memory Leaks Prevention
- Clean up event listeners
- Release large objects when not needed
- Use weak references for caches
- Monitor memory usage

### Object Pooling
```typescript
export class PooledAgent extends Agent<Env, State> {
  initialState = { pool: [] };

  acquireObject() {
    if (this.state.pool.length > 0) {
      const obj = this.state.pool.pop();
      this.setState({ pool: this.state.pool });
      return obj;
    }
    return this.createObject();
  }

  releaseObject(obj: any) {
    this.resetObject(obj);
    this.setState({ pool: [...this.state.pool, obj] });
  }
}
```

### Garbage Collection
- Avoid circular references
- Use object pooling for frequently created objects
- Implement proper cleanup in lifecycle hooks
- Monitor GC frequency

## Durable Execution Optimization

### Fiber Optimization
```typescript
export class FiberOptimizedAgent extends Agent<Env, State> {
  @callable()
  async optimizedFiber() {
    // Use runFiber for long-running tasks
    return await this.runFiber(async () => {
      // Checkpoint at strategic points
      await this.stash();

      // Continue execution
      const result = await this.processData();

      return result;
    });
  }
}
```

### Stash Strategy
- Stash at appropriate intervals
- Minimize stash size
- Balance between durability and performance
- Use selective stashing for large state

### Task Scheduling
```typescript
export class ScheduledAgent extends Agent<Env, State> {
  @callable()
  async scheduleOptimized() {
    // Schedule during off-peak hours
    const offPeakTime = this.calculateOffPeakTime();
    this.schedule({
      date: offPeakTime,
      task: async () => {
        await this.heavyOperation();
      }
    });
  }
}
```

## Queue Optimization

### Queue Batching
```typescript
export class BatchQueueAgent extends Agent<Env, State> {
  initialState = { batch: [] };

  @callable()
  async queueItem(item: any) {
    this.setState({
      batch: [...this.state.batch, item]
    });

    if (this.state.batch.length >= 10) {
      await this.processBatch();
    }
  }

  async processBatch() {
    await this.processItems(this.state.batch);
    this.setState({ batch: [] });
  }
}
```

### Priority Queues
```typescript
export class PriorityAgent extends Agent<Env, State> {
  initialState = { queue: [] };

  @callable()
  async queueWithPriority(item: any, priority: number) {
    this.setState({
      queue: [...this.state.queue, { item, priority }].sort(
        (a, b) => b.priority - a.priority
      )
    });
  }
}
```

### Retry Optimization
- Use exponential backoff
- Add jitter to avoid thundering herd
- Limit retry attempts
- Implement dead letter queue for failed items

## Monitoring and Profiling

### Performance Metrics
```typescript
export class MonitoredAgent extends Agent<Env, State> {
  @callable()
  async timedOperation<T>(name: string, fn: () => Promise<T>) {
    const start = Date.now();
    try {
      const result = await fn();
      const duration = Date.now() - start;
      this.recordMetric(name, duration);
      return result;
    } catch (error) {
      const duration = Date.now() - start;
      this.recordMetric(`${name}_error`, duration);
      throw error;
    }
  }
}
```

### Diagnostics Channel
```typescript
import { diagnostics_channel } from "agents";

// Monitor state changes
diagnostics_channel.subscribe("agent.state.update", (data) => {
  console.log("State update:", data);
});

// Monitor RPC calls
diagnostics_channel.subscribe("agent.rpc.call", (data) => {
  console.log("RPC call:", data);
});
```

### Performance Profiling
- Use Workers Analytics
- Monitor Durable Objects metrics
- Track WebSocket connection duration
- Analyze state sync latency

## Best Practices

### General Optimization
- Profile before optimizing
- Focus on hot paths
- Measure impact of changes
- Document performance decisions

### Load Testing
- Test with realistic load
- Monitor resource usage
- Identify bottlenecks
- Plan for scaling

### Continuous Monitoring
- Set up performance alerts
- Track key metrics over time
- Investigate performance regressions
- Optimize iteratively
