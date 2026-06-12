# State Immutability

## Principle

State in the Agents SDK must be treated as immutable. All state changes must go through `setState`, which creates a new state object rather than mutating the existing one.

## Why It Matters

### Predictability
Immutable state ensures that state changes are predictable and traceable. Each state change creates a new version, making it easy to track history and debug issues.

### Concurrency
Multiple clients can connect to the same agent. Immutable state prevents race conditions and ensures consistent state across all connections.

### Synchronization
The SDK automatically syncs state changes to clients. Immutable state makes it easy to detect changes and send updates efficiently.

## Implementation

### Correct Usage
```typescript
// Good - immutable update
@callable()
increment() {
  this.setState({ count: this.state.count + 1 });
}

// Good - creating new array
@callable()
addItem(item: any) {
  this.setState({
    items: [...this.state.items, item]
  });
}

// Good - creating new object
@callable()
updateUser(id: string, data: any) {
  this.setState({
    users: {
      ...this.state.users,
      [id]: { ...this.state.users[id], ...data }
    }
  });
}
```

### Incorrect Usage
```typescript
// Bad - direct mutation
@callable()
increment() {
  this.state.count++; // Don't do this
}

// Bad - mutating array
@callable()
addItem(item: any) {
  this.state.items.push(item); // Don't do this
}

// Bad - mutating object
@callable()
updateUser(id: string, data: any) {
  Object.assign(this.state.users[id], data); // Don't do this
}
```

## Best Practices

### Use Spread Operator
The spread operator is the most common way to create immutable updates:

```typescript
// Update object
this.setState({ ...this.state, count: this.state.count + 1 });

// Update array
this.setState({ items: [...this.state.items, newItem] });

// Update nested object
this.setState({
  user: { ...this.state.user, name: "new name" }
});
```

### Use Array Methods
Use array methods that return new arrays:

```typescript
// Add item
this.setState({ items: [...this.state.items, item] });

// Remove item
this.setState({
  items: this.state.items.filter(i => i.id !== id)
});

// Update item
this.setState({
  items: this.state.items.map(i =>
    i.id === id ? { ...i, ...data } : i
  )
});
```

### Batch Updates
Combine multiple updates into a single setState:

```typescript
// Good - single batch update
this.setState({
  count: this.state.count + 1,
  name: "new name",
  active: true
});

// Bad - multiple updates
this.setState({ count: this.state.count + 1 });
this.setState({ name: "new name" });
this.setState({ active: true });
```

## Common Patterns

### Update Nested State
```typescript
type State = {
  user: {
    profile: {
      name: string;
      email: string;
    };
  };
};

@callable()
updateName(name: string) {
  this.setState({
    user: {
      ...this.state.user,
      profile: {
        ...this.state.user.profile,
        name
      }
    }
  });
}
```

### Conditional Updates
```typescript
@callable()
updateIf(condition: boolean, value: any) {
  if (condition) {
    this.setState({ value });
  }
}
```

### Computed Updates
```typescript
@callable()
updateWithComputation() {
  const newValue = this.computeValue(this.state);
  this.setState({ value: newValue });
}
```

## Performance Considerations

### Large State
For large state objects, consider partial updates:

```typescript
// Good - partial update
this.setState({ count: this.state.count + 1 });

// Less efficient - full object spread
this.setState({ ...this.state, count: this.state.count + 1 });
```

### Large Arrays
For large arrays, consider using immutable data structures or libraries:

```typescript
// For very large arrays, consider using Immer or similar
import { produce } from "immer";

@callable()
updateLargeArray(item: any) {
  this.setState({
    items: produce(this.state.items, draft => {
      draft.push(item);
    })
  });
}
```

## Validation

### Validate Before Update
Always validate state before updating:

```typescript
validateStateChange(nextState: State, source: Connection | "server") {
  if (nextState.count < 0) {
    throw new Error("Count cannot be negative");
  }
}
```

### Type Safety
Use TypeScript to ensure type safety:

```typescript
type State = {
  count: number;
  name: string;
};

@callable()
updateState(updates: Partial<State>) {
  this.setState({ ...this.state, ...updates });
}
```
