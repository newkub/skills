# Performance

## Lazy Loading

```typescript
// ❌ Load everything on activation
export function activate() {
  const heavyModule = require('./heavy');
}

// ✅ Load when needed
async function handleCommand() {
  const heavyModule = await import('./heavy');
  heavyModule.doSomething();
}
```

## Use TreeView Efficiently

```typescript
export class MyProvider implements vscode.TreeDataProvider<Item> {
  // Cache children
  private cache = new Map<string, Item[]>();

  getChildren(element?: Item): Item[] | Thenable<Item[]> {
    if (!element) {
      return this.getRootItems();
    }
    return this.cache.get(element.id) || [];
  }
}
```
