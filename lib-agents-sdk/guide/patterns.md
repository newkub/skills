# Patterns

## Agent Patterns

### Singleton Agent
```typescript
export class ConfigAgent extends Agent<Env, State> {
  initialState = { config: {} };

  @callable()
  getConfig() {
    return this.state.config;
  }

  @callable()
  updateConfig(config: Partial<State["config"]>) {
    this.setState({ config: { ...this.state.config, ...config } });
  }
}
```

### Per-User Agent
```typescript
export class UserAgent extends Agent<Env, State> {
  initialState = { preferences: {}, history: [] };

  @callable()
  addHistory(action: string) {
    this.setState({
      history: [...this.state.history, { action, timestamp: Date.now() }]
    });
  }
}

// Client: useAgent({ agent: "UserAgent", name: userId })
```

### Session Agent
```typescript
export class SessionAgent extends Agent<Env, State> {
  initialState = { messages: [], context: {} };

  @callable()
  addMessage(role: "user" | "assistant", content: string) {
    this.setState({
      messages: [...this.state.messages, { role, content, timestamp: Date.now() }]
    });
  }
}

// Client: useAgent({ agent: "SessionAgent", name: sessionId })
```

## State Patterns

### Immutable State
```typescript
export class ImmutableAgent extends Agent<Env, State> {
  @callable()
  updateState(updates: Partial<State>) {
    this.setState({
      ...this.state,
      ...updates
    });
  }
}
```

### Event Sourcing
```typescript
export class EventSourcedAgent extends Agent<Env, State> {
  initialState = { events: [], state: {} };

  @callable()
  applyEvent(event: any) {
    this.setState({
      events: [...this.state.events, event],
      state: this.reduceState(this.state.state, event)
    });
  }

  reduceState(state: any, event: any) {
    // Apply event to state
    return { ...state, ...event.payload };
  }
}
```

### Optimistic Updates
```typescript
export class OptimisticAgent extends Agent<Env, State> {
  @callable()
  async updateWithOptimism(updates: Partial<State>) {
    // Optimistic update
    this.setState({ ...this.state, ...updates });

    try {
      // Actual update
      await this.persistToDatabase(updates);
    } catch (error) {
      // Rollback on error
      this.setState(this.state);
      throw error;
    }
  }
}
```

## Callable Patterns

### Streaming Response
```typescript
export class StreamingAgent extends Agent<Env, State> {
  @callable()
  async *streamData() {
    for (let i = 0; i < 10; i++) {
      yield { chunk: i };
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}
```

### Batch Processing
```typescript
export class BatchAgent extends Agent<Env, State> {
  @callable()
  async processBatch(items: any[]) {
    const results = await Promise.all(
      items.map(item => this.processItem(item))
    );
    return results;
  }

  async processItem(item: any) {
    // Process single item
  }
}
```

### Rate Limiting
```typescript
export class RateLimitedAgent extends Agent<Env, State> {
  initialState = { requests: [], lastReset: Date.now() };

  @callable()
  async rateLimitedCall() {
    const now = Date.now();
    const minuteAgo = now - 60000;

    // Clean old requests
    const recentRequests = this.state.requests.filter(t => t > minuteAgo);

    if (recentRequests.length >= 10) {
      throw new Error("Rate limit exceeded");
    }

    this.setState({
      requests: [...recentRequests, now]
    });

    // Execute operation
  }
}
```

## Workflow Patterns

### Sequential Workflow
```typescript
export class SequentialAgent extends Agent<Env, State> {
  @callable()
  async runSequentialWorkflow() {
    const step1 = await this.step1();
    const step2 = await this.step2(step1);
    const step3 = await this.step3(step2);
    return step3;
  }
}
```

### Parallel Workflow
```typescript
export class ParallelAgent extends Agent<Env, State> {
  @callable()
  async runParallelWorkflow() {
    const [result1, result2, result3] = await Promise.all([
      this.task1(),
      this.task2(),
      this.task3()
    ]);
    return { result1, result2, result3 };
  }
}
```

### Conditional Workflow
```typescript
export class ConditionalAgent extends Agent<Env, State> {
  @callable()
  async runConditionalWorkflow(condition: boolean) {
    if (condition) {
      return await this.pathA();
    } else {
      return await this.pathB();
    }
  }
}
```

## Integration Patterns

### Proxy Pattern
```typescript
export class ProxyAgent extends Agent<Env, State> {
  @callable()
  async proxyRequest(url: string, options: RequestInit) {
    const response = await fetch(url, options);
    return response.json();
  }
}
```

### Adapter Pattern
```typescript
export class AdapterAgent extends Agent<Env, State> {
  @callable()
  async adaptExternalData(externalData: any) {
    return {
      id: externalData.external_id,
      name: externalData.display_name,
      // Map external format to internal format
    };
  }
}
```

### Observer Pattern
```typescript
export class ObserverAgent extends Agent<Env, State> {
  initialState = { observers: [] };

  @callable()
  addObserver(observerId: string) {
    this.setState({
      observers: [...this.state.observers, observerId]
    });
  }

  @callable()
  async notifyObservers(event: any) {
    for (const observerId of this.state.observers) {
      await this.notifyObserver(observerId, event);
    }
  }
}
```

## Error Handling Patterns

### Retry Pattern
```typescript
export class RetryAgent extends Agent<Env, State> {
  @callable()
  async withRetry<T>(fn: () => Promise<T>, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }
}
```

### Circuit Breaker Pattern
```typescript
export class CircuitBreakerAgent extends Agent<Env, State> {
  initialState = { failures: 0, lastFailure: 0, state: "closed" };

  @callable()
  async withCircuitBreaker<T>(fn: () => Promise<T>) {
    if (this.state.state === "open") {
      if (Date.now() - this.state.lastFailure > 60000) {
        this.setState({ state: "half-open" });
      } else {
        throw new Error("Circuit breaker is open");
      }
    }

    try {
      const result = await fn();
      this.setState({ failures: 0, state: "closed" });
      return result;
    } catch (error) {
      this.setState({
        failures: this.state.failures + 1,
        lastFailure: Date.now(),
        state: this.state.failures >= 5 ? "open" : "closed"
      });
      throw error;
    }
  }
}
```

### Fallback Pattern
```typescript
export class FallbackAgent extends Agent<Env, State> {
  @callable()
  async withFallback<T>(primary: () => Promise<T>, fallback: () => Promise<T>) {
    try {
      return await primary();
    } catch (error) {
      console.error("Primary failed, using fallback", error);
      return await fallback();
    }
  }
}
```

## Security Patterns

### Token Validation
```typescript
export class SecureAgent extends Agent<Env, State> {
  async validateConnection(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    if (!token) throw new Error("No token provided");
    return await this.verifyToken(token);
  }

  async verifyToken(token: string) {
    // Verify token logic
    return true;
  }
}
```

### Readonly Connections
```typescript
export class ReadonlyAgent extends Agent<Env, State> {
  shouldConnectionBeReadonly(connection: Connection) {
    const token = connection.request.headers.get("Authorization");
    return token?.startsWith("readonly-") ?? false;
  }

  @callable()
  updateData(data: any) {
    if (this.connection.readonly) {
      throw new Error("Cannot modify in readonly mode");
    }
    this.setState(data);
  }
}
```

### Rate Limiting by User
```typescript
export class UserRateLimitedAgent extends Agent<Env, State> {
  initialState = { userRequests: {} };

  @callable()
  async rateLimitedByUser(userId: string) {
    const now = Date.now();
    const userRequests = this.state.userRequests[userId] || [];

    const recentRequests = userRequests.filter(t => t > now - 60000);

    if (recentRequests.length >= 10) {
      throw new Error("User rate limit exceeded");
    }

    this.setState({
      userRequests: {
        ...this.state.userRequests,
        [userId]: [...recentRequests, now]
      }
    });
  }
}
```
