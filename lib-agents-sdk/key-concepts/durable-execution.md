# Durable Execution

## Overview

Durable execution allows agents to perform long-running tasks that survive Durable Object eviction. It uses `runFiber` and `stash` to checkpoint and resume execution.

## Core Concepts

### Basic Fiber
```typescript
@callable()
async longRunningTask() {
  return await this.runFiber(async () => {
    // Long-running work here
    const result = await this.processData();
    return result;
  });
}
```

### Checkpointing
Use `stash` to save progress:

```typescript
@callable()
async taskWithCheckpoints() {
  return await this.runFiber(async () => {
    for (let i = 0; i < 100; i++) {
      await this.processItem(i);
      await this.stash(); // Checkpoint progress
    }
  });
}
```

## Key Features

### Survives Eviction
Fibers continue execution even if the Durable Object is evicted:

```typescript
@callable()
async resilientTask() {
  return await this.runFiber(async () => {
    // This will survive DO eviction
    const result = await this.heavyComputation();
    return result;
  });
}
```

### Automatic Resumption
Execution resumes from the last checkpoint:

```typescript
@callable()
async resumableTask() {
  return await this.runFiber(async () => {
    await this.stash(); // Checkpoint 1
    const step1 = await this.step1();
    await this.stash(); // Checkpoint 2
    const step2 = await this.step2(step1);
    return step2;
  });
}
```

## Best Practices

### Strategic Checkpoints
Place checkpoints at strategic points:

```typescript
@callable()
async optimizedTask() {
  return await this.runFiber(async () => {
    // Expensive operation 1
    const result1 = await this.expensiveOp1();
    await this.stash(); // Checkpoint after expensive op

    // Expensive operation 2
    const result2 = await this.expensiveOp2(result1);
    await this.stash(); // Checkpoint after expensive op

    return result2;
  });
}
```

### Minimize Stash Size
Keep checkpointed state minimal:

```typescript
// Good - minimal stash
await this.stash();

// Bad - large stash
await this.stash({ hugeData: largeArray });
```

### Error Handling
Handle errors appropriately:

```typescript
@callable()
async taskWithErrorHandling() {
  return await this.runFiber(async () => {
    try {
      const result = await this.riskyOperation();
      await this.stash();
      return result;
    } catch (error) {
      // Handle error
      throw error;
    }
  });
}
```

## Use Cases

### Data Processing
Process large datasets:

```typescript
@callable()
async processLargeDataset(datasetId: string) {
  return await this.runFiber(async () => {
    const dataset = await this.loadDataset(datasetId);
    const results = [];

    for (const item of dataset) {
      const processed = await this.processItem(item);
      results.push(processed);
      await this.stash(); // Checkpoint each item
    }

    return results;
  });
}
```

### API Calls
Make multiple API calls reliably:

```typescript
@callable()
async fetchMultipleData(urls: string[]) {
  return await this.runFiber(async () => {
    const results = [];

    for (const url of urls) {
      const data = await fetch(url).then(r => r.json());
      results.push(data);
      await this.stash(); // Checkpoint each fetch
    }

    return results;
  });
}
```

### Batch Operations
Process items in batches:

```typescript
@callable()
async processInBatches(items: any[], batchSize = 10) {
  return await this.runFiber(async () => {
    const results = [];

    for (let i = 0; i < items.length; i += batchSize) {
      const batch = items.slice(i, i + batchSize);
      const batchResults = await this.processBatch(batch);
      results.push(...batchResults);
      await this.stash(); // Checkpoint each batch
    }

    return results;
  });
}
```

## Advanced Patterns

### Retry with Fiber
Combine retry with durable execution:

```typescript
@callable()
async retryWithFiber() {
  return await this.runFiber(async () => {
    return await this.retry(async () => {
      return await this.unreliableOperation();
    }, {
      maxRetries: 3,
      backoff: "exponential"
    });
  });
}
```

### Progress Tracking
Track and report progress:

```typescript
@callable()
async taskWithProgress() {
  return await this.runFiber(async () => {
    const total = 100;
    for (let i = 0; i < total; i++) {
      await this.processItem(i);
      this.setState({ progress: (i / total) * 100 });
      await this.stash();
    }
  });
}
```

### Cancellation
Support cancellation:

```typescript
@callable()
async cancellableTask() {
  return await this.runFiber(async () => {
    for (let i = 0; i < 100; i++) {
      if (this.state.cancelled) {
        throw new Error("Task cancelled");
      }
      await this.processItem(i);
      await this.stash();
    }
  });
}
```

## Performance Considerations

### Checkpoint Frequency
Balance between durability and performance:

```typescript
// Good - reasonable checkpoint frequency
for (let i = 0; i < 100; i++) {
  await this.processItem(i);
  if (i % 10 === 0) await this.stash(); // Every 10 items
}

// Bad - too frequent checkpoints
for (let i = 0; i < 100; i++) {
  await this.processItem(i);
  await this.stash(); // Every item
}
```

### Fiber Overhead
Use fibers only for long-running tasks:

```typescript
// Good - use fiber for long task
@callable()
async longTask() {
  return await this.runFiber(async () => {
    // Long-running work
  });
}

// Bad - unnecessary fiber for short task
@callable()
async shortTask() {
  return await this.runFiber(async () => {
    return 1 + 1; // Too short for fiber
  });
}
```

## Monitoring

### Track Fiber Execution
Use diagnostics to monitor fibers:

```typescript
import { diagnostics_channel } from "agents";

diagnostics_channel.subscribe("agent.fiber.start", (data) => {
  console.log("Fiber started:", data);
});

diagnostics_channel.subscribe("agent.fiber.complete", (data) => {
  console.log("Fiber completed:", data);
});
```
