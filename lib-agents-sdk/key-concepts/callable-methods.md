# Callable Methods

## Overview

Callable methods are agent methods that can be invoked from clients via WebSocket using the `@callable` decorator. They provide RPC-style communication between clients and agents.

## Core Concepts

### Basic Callable Method
```typescript
import { callable } from "agents";

export class MyAgent extends Agent<Env, State> {
  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 });
    return this.state.count;
  }
}
```

### Method Parameters
Callable methods can accept parameters:

```typescript
@callable()
add(value: number) {
  this.setState({ count: this.state.count + value });
  return this.state.count;
}
```

### Async Methods
Callable methods can be async:

```typescript
@callable()
async fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

## Key Features

### Streaming Responses
Return generators for streaming responses:

```typescript
@callable()
async *streamData() {
  for (let i = 0; i < 10; i++) {
    yield { chunk: i };
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}
```

### Error Handling
Throw errors to signal failures:

```typescript
@callable()
divide(a: number, b: number) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

### Timeouts
Configure timeout for long-running methods:

```typescript
@callable({ timeout: 5000 })
async longOperation() {
  // Method will timeout after 5 seconds
}
```

## Best Practices

### Method Naming
Use descriptive, action-oriented names:

```typescript
// Good
@callable()
incrementCount() { }

@callable()
getUserData() { }

// Bad
@callable()
doIt() { }

@callable()
stuff() { }
```

### Input Validation
Validate parameters:

```typescript
@callable()
updateCount(value: number) {
  if (value < 0) {
    throw new Error("Value must be positive");
  }
  this.setState({ count: value });
}
```

### Return Types
Define clear return types:

```typescript
@callable()
getData(): Promise<{ id: string; name: string }> {
  return { id: "1", name: "test" };
}
```

## Advanced Patterns

### Retry Logic
Implement retry with built-in retry:

```typescript
@callable()
async withRetry() {
  return await this.retry(async () => {
    return await this.unreliableOperation();
  }, {
    maxRetries: 3,
    backoff: "exponential"
  });
}
```

### Rate Limiting
Implement rate limiting:

```typescript
@callable()
async rateLimitedCall() {
  if (this.isRateLimited()) {
    throw new Error("Rate limit exceeded");
  }
  // Execute operation
}
```

### Authorization
Check permissions:

```typescript
@callable()
adminOperation() {
  if (!this.connection.permissions.includes("admin")) {
    throw new Error("Insufficient permissions");
  }
  // Execute admin operation
}
```

## Client-Side Usage

### React Hook
```typescript
import { useAgent } from "agents/client";

function MyComponent() {
  const agent = useAgent({ agent: "MyAgent", name: "user-123" });
  const { call } = agent;

  const handleClick = async () => {
    const result = await call("increment");
    console.log(result);
  };

  return <button onClick={handleClick}>Increment</button>;
}
```

### Direct WebSocket
```typescript
const ws = new WebSocket("ws://localhost/agents/MyAgent/user-123");

ws.send(JSON.stringify({
  method: "increment",
  params: []
}));
```

## Common Patterns

### CRUD Operations
```typescript
@callable()
create(data: any) {
  this.setState({
    items: [...this.state.items, { id: generateId(), ...data }]
  });
}

@callable()
read(id: string) {
  return this.state.items.find(item => item.id === id);
}

@callable()
update(id: string, data: any) {
  this.setState({
    items: this.state.items.map(item =>
      item.id === id ? { ...item, ...data } : item
    )
  });
}

@callable()
delete(id: string) {
  this.setState({
    items: this.state.items.filter(item => item.id !== id)
  });
}
```

### Batch Operations
```typescript
@callable()
async processBatch(items: any[]) {
  const results = await Promise.all(
    items.map(item => this.processItem(item))
  );
  return results;
}
```

## Performance Considerations

### Keep Methods Short
Long-running methods should use fibers:

```typescript
@callable()
async longTask() {
  return await this.runFiber(async () => {
    // Long-running work
  });
}
```

### Avoid Blocking
Use async/await for I/O operations:

```typescript
@callable()
async getData() {
  const data = await fetch(url); // Non-blocking
  return data.json();
}
```
