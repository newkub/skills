# State Management

## Overview

State management in the Agents SDK is built on SQLite-backed persistence with automatic synchronization to clients. State is immutable and must be updated via `setState`.

## Core Concepts

### State Definition
```typescript
type State = {
  count: number;
  name: string;
  history: Array<{ action: string; timestamp: number }>;
};

export class MyAgent extends Agent<Env, State> {
  initialState = { count: 0, name: "", history: [] };
}
```

### State Updates
State must be updated immutably using `setState`:

```typescript
@callable()
increment() {
  this.setState({ count: this.state.count + 1 });
}
```

### State Validation
Validate state changes before they're applied:

```typescript
validateStateChange(nextState: State, source: Connection | "server") {
  if (nextState.count < 0) {
    throw new Error("Count cannot be negative");
  }
}
```

## Key Features

### Automatic Persistence
State is automatically persisted to SQLite:

```typescript
@callable()
updateData(data: any) {
  this.setState(data); // Automatically saved to SQLite
}
```

### Client Synchronization
State changes are automatically synced to all connected clients:

```typescript
@callable()
updateState(data: any) {
  this.setState(data); // All clients receive update
}
```

### State Update Hooks
React to state changes:

```typescript
onStateUpdate(state: State, source: Connection | "server") {
  console.log("State updated:", state);
  console.log("Source:", source);
}
```

## Best Practices

### Immutability
Always create new state objects:

```typescript
// Bad - mutation
this.state.count++;

// Good - immutable update
this.setState({ count: this.state.count + 1 });
```

### Batch Updates
Combine multiple updates into one:

```typescript
// Bad - multiple updates
this.setState({ count: this.state.count + 1 });
this.setState({ name: "new name" });

// Good - single batch update
this.setState({
  count: this.state.count + 1,
  name: "new name"
});
```

### Minimal State
Store only necessary data:

```typescript
// Good - minimal state
type State = { count: number };

// Bad - redundant state
type State = {
  count: number;
  countString: string; // Can be computed
};
```

## Advanced Patterns

### Computed State
Compute derived values instead of storing:

```typescript
@callable()
getCountString() {
  return this.state.count.toString();
}
```

### Event Sourcing
Store events and compute state:

```typescript
type State = {
  events: Array<{ type: string; payload: any; timestamp: number }>;
};

@callable()
applyEvent(event: any) {
  this.setState({
    events: [...this.state.events, { ...event, timestamp: Date.now() }]
  });
}
```

### Optimistic Updates
Update optimistically and rollback on error:

```typescript
@callable()
async updateWithOptimism(updates: Partial<State>) {
  const previousState = this.state;
  this.setState({ ...this.state, ...updates });

  try {
    await this.persistToDatabase(updates);
  } catch (error) {
    this.setState(previousState);
    throw error;
  }
}
```

## State Sources

### Server Updates
State updated from server-side code:

```typescript
this.setState({ count: 1 }); // source = "server"
```

### Client Updates
State updated from client callable method:

```typescript
@callable()
updateFromClient(data: any) {
  this.setState(data); // source = Connection
}
```

## Performance Considerations

### State Size
Keep state small for better performance:

```typescript
// Good - small state
type State = { count: number };

// Bad - large state
type State = { hugeArray: Array<any> };
```

### Update Frequency
Batch updates to reduce sync overhead:

```typescript
// Good - batched
this.setState({ ...updates });

// Bad - frequent individual updates
for (const item of items) {
  this.setState({ item });
}
```
