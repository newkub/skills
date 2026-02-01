# Performance Optimization for VSCode Extensions

Optimize extension performance to ensure VSCode remains responsive and efficient.

## Why Optimize

- **User experience** - Slow extensions frustrate users
- **VSCode performance** - Poorly performing extensions slow down VSCode
- **Resource efficiency** - Minimize memory and CPU usage
- **Battery life** - Important for laptop users

## Anti-patterns

### Blocking the UI Thread

```typescript
// Bad: Blocking operation on main thread
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.process', () => {
    // Heavy computation blocks UI
    const result = heavyComputation(data);
    vscode.window.showInformationMessage(result);
  });
}
```

### Excessive Event Listeners

```typescript
// Bad: Too many event listeners
export function activate(context: vscode.ExtensionContext) {
  // Creating many listeners
  for (let i = 0; i < 1000; i++) {
    vscode.workspace.onDidChangeTextDocument(() => {
      // Process
    });
  }
}
```

### Memory Leaks

```typescript
// Bad: Not cleaning up resources
export function activate(context: vscode.ExtensionContext) {
  const interval = setInterval(() => {
    // Heavy work
  }, 100);
  
  // Forgot to add to context.subscriptions
}
```

### Synchronous File Operations

```typescript
// Bad: Synchronous file I/O
const content = fs.readFileSync(filePath); // Blocks thread
```

## Best Practices

### Use Async Operations

```typescript
// Good: Async operations
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('extension.process', async () => {
    const result = await heavyComputationAsync(data);
    vscode.window.showInformationMessage(result);
  });
}
```

### Debounce and Throttle

```typescript
// Good: Debounce rapid events
import { useDebounceFn } from '@vueuse/core';

export function activate(context: vscode.ExtensionContext) {
  const updateDecorations = useDebounceFn(() => {
    // Expensive decoration calculation
  }, 300);

  vscode.workspace.onDidChangeTextDocument(updateDecorations);
}
```

### Lazy Activation

```json
// Good: Specific activation events
{
  "activationEvents": [
    "onLanguage:javascript",
    "onCommand:extension.activate"
  ]
}
```

### Clean Up Resources

```typescript
// Good: Proper cleanup
export function activate(context: vscode.ExtensionContext) {
  const interval = setInterval(() => {
    // Work
  }, 100);
  
  context.subscriptions.push({
    dispose: () => clearInterval(interval)
  });
}
```

### Use Web Workers

```typescript
// Good: Offload heavy work to worker
const worker = new Worker('./worker.js');

worker.onmessage = (event) => {
  // Handle result
};

worker.postMessage({ data: heavyData });
```

## Rules

1. **Use async/await** for all I/O and heavy operations
2. **Debounce rapid events** like text changes
3. **Throttle expensive operations** to prevent spam
4. **Lazy load features** only when needed
5. **Clean up resources** in disposables
6. **Use tree-shaking** to minimize bundle size
7. **Profile performance** to identify bottlenecks
8. **Avoid blocking the UI thread** at all costs
9. **Use caching** for expensive computations
10. **Limit event listeners** to what's necessary

## Performance Patterns

### Event Debouncing

```typescript
import { debounce } from 'lodash';

const handleTextChange = debounce((doc: vscode.TextDocument) => {
  // Process document
}, 300);

vscode.workspace.onDidChangeTextDocument((e) => {
  handleTextChange(e.document);
});
```

### Lazy Loading

```typescript
// Load feature only when needed
const loadFeature = async () => {
  const module = await import('./heavy-feature');
  return module;
};

vscode.commands.registerCommand('extension.useFeature', async () => {
  const feature = await loadFeature();
  feature.doSomething();
});
```

### Caching

```typescript
const cache = new Map<string, any>();

async function getCachedResult(key: string, compute: () => Promise<any>) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  
  const result = await compute();
  cache.set(key, result);
  return result;
}
```

### Batch Processing

```typescript
// Process items in batches
async function processBatch<T>(items: T[], batchSize: number, process: (item: T) => Promise<void>) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(process));
  }
}
```

## Memory Management

### Weak Maps for Caches

```typescript
// Good: WeakMap allows garbage collection
const cache = new WeakMap<object, any>();

function cacheResult(obj: object, result: any) {
  cache.set(obj, result);
}
```

### Dispose Patterns

```typescript
export class ExtensionManager implements vscode.Disposable {
  private disposables: vscode.Disposable[] = [];

  registerDisposable(disposable: vscode.Disposable) {
    this.disposables.push(disposable);
  }

  dispose() {
    this.disposables.forEach(d => d.dispose());
    this.disposables = [];
  }
}
```

## Profiling

### VSCode Performance Tools

```typescript
// Use VSCode's performance API
import * as vscode from 'vscode';

function startProfiling() {
  vscode.window.withProgress({
    location: vscode.ProgressLocation.Window,
    title: 'Profiling...'
  }, async (progress) => {
    const start = performance.now();
    
    // Do work
    
    const duration = performance.now() - start;
    console.log(`Operation took ${duration}ms`);
  });
}
```

### Memory Profiling

```typescript
// Check memory usage
function logMemoryUsage() {
  const memory = process.memoryUsage();
  console.log({
    heapUsed: `${Math.round(memory.heapUsed / 1024 / 1024)}MB`,
    heapTotal: `${Math.round(memory.heapTotal / 1024 / 1024)}MB`,
    external: `${Math.round(memory.external / 1024 / 1024)}MB`
  });
}
```

## Performance Metrics

### Target Metrics

- **Activation time** < 500ms
- **Command execution** < 100ms
- **Memory usage** < 50MB
- **CPU usage** < 5% when idle

### Measuring Performance

```typescript
function measurePerformance<T>(name: string, fn: () => Promise<T>): Promise<T> {
  const start = performance.now();
  const startMemory = process.memoryUsage().heapUsed;
  
  return fn().then(result => {
    const duration = performance.now() - start;
    const memoryUsed = process.memoryUsage().heapUsed - startMemory;
    
    console.log(`${name}: ${duration}ms, ${memoryUsed} bytes`);
    return result;
  });
}
```

## Impact if Not Followed

- **Slow VSCode** - Extensions can significantly slow down VSCode
- **Poor user experience** - Users will disable slow extensions
- **High memory usage** - Can cause VSCode to crash
- **Battery drain** - Important for laptop users
- **Negative reviews** - Performance issues lead to bad reviews

## Verification

1. ตรวจสอบ activation time < 500ms ด้วย Chrome DevTools
2. ทดสอบ command execution time < 100ms
3. ตรวจสอบ memory usage < 50MB ด้วย Task Manager
4. ตรวจสอบ CPU usage < 5% เมื่อ idle
5. ทดสอบด้วย `npm run test:performance`

## References

- [VSCode Performance](https://code.visualstudio.com/api/advanced-topics/performance)
- [Extension Performance Guidelines](https://code.visualstudio.com/api/advanced-topics/extension-performance)
- [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
