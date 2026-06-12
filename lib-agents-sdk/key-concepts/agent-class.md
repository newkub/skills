# Agent Class

## Overview

The Agent class is the foundation of the Agents SDK. It provides a base class for building stateful, durable agents on Cloudflare Workers using Durable Objects.

## Core Concepts

### Class Definition
```typescript
import { Agent } from "agents";

type State = { count: number };

export class MyAgent extends Agent<Env, State> {
  initialState = { count: 0 };
}
```

### State Management
- **initialState**: Defines the initial state when agent is created
- **setState**: Updates state and syncs to clients
- **state**: Current state of the agent
- **validateStateChange**: Validates state transitions

### Lifecycle Hooks
- **onConnect**: Called when client connects
- **onDisconnect**: Called when client disconnects
- **onStateUpdate**: Called when state changes

## Key Features

### Callable Methods
Methods decorated with `@callable` can be invoked from clients via WebSocket:

```typescript
@callable()
increment() {
  this.setState({ count: this.state.count + 1 });
  return this.state.count;
}
```

### Persistent State
State is automatically persisted to SQLite and synchronized to all connected clients:

```typescript
@callable()
updateData(data: any) {
  this.setState(data); // Automatically persisted and synced
}
```

### Connection Management
Agents can manage multiple client connections simultaneously:

```typescript
onConnect(connection: Connection) {
  console.log("Client connected:", connection.id);
}

onDisconnect(connection: Connection) {
  console.log("Client disconnected:", connection.id);
}
```

## Best Practices

### Keep State Minimal
Store only necessary data in state to optimize performance:

```typescript
// Good - minimal state
type State = { count: number };

// Bad - large state
type State = { hugeData: Array<any> };
```

### Validate State Changes
Always validate state transitions:

```typescript
validateStateChange(nextState: State, source: Connection | "server") {
  if (nextState.count < 0) {
    throw new Error("Count cannot be negative");
  }
}
```

### Use Type Safety
Define clear state types:

```typescript
type State = {
  count: number;
  name: string;
  active: boolean;
};
```

## Common Patterns

### Singleton Agent
One instance shared across all users:

```typescript
export class ConfigAgent extends Agent<Env, State> {
  // Single instance: /agents/ConfigAgent/config
}
```

### Per-User Agent
One instance per user:

```typescript
export class UserAgent extends Agent<Env, State> {
  // Multiple instances: /agents/UserAgent/user-123
}
```

### Session Agent
One instance per session:

```typescript
export class SessionAgent extends Agent<Env, State> {
  // Multiple instances: /agents/SessionAgent/session-abc
}
```
