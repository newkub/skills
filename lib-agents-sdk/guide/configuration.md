# Configuration

## Wrangler Configuration

### Basic Setup

```jsonc
{
  "compatibility_flags": ["nodejs_compat"],
  "durable_objects": {
    "bindings": [{ "name": "MyAgent", "class_name": "MyAgent" }]
  },
  "migrations": [{ "tag": "v1", "new_sqlite_classes": ["MyAgent"] }]
}
```

### With Workers AI

```jsonc
{
  "ai": { "binding": "AI" }
}
```

### TypeScript Configuration

**Important**: Do NOT enable `experimentalDecorators` in tsconfig.json - it breaks `@callable`

## Agent Configuration

### State Validation

```typescript
validateStateChange(nextState: State, source: Connection | "server") {
  if (nextState.count < 0) throw new Error("Count cannot be negative");
}
```

### State Update Callback

```typescript
onStateUpdate(state: State, source: Connection | "server") {
  console.log("State updated:", state);
}
```
