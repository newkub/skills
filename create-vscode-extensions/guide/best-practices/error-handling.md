# Error Handling

## Wrap Async Operations

```typescript
async function withErrorHandling<T>(
  operation: () => Promise<T>,
  errorMessage: string
): Promise<T | undefined> {
  try {
    return await operation();
  } catch (error) {
    vscode.window.showErrorMessage(errorMessage);
    console.error(error);
    return undefined;
  }
}

// Usage
await withErrorHandling(
  () => fetchData(),
  'Failed to fetch data'
);
```

## Validate Inputs

```typescript
function validateConfig(config: unknown): Config {
  if (!config || typeof config !== 'object') {
    throw new Error('Invalid configuration');
  }

  const cfg = config as Record<string, unknown>;

  if (typeof cfg.setting !== 'string') {
    throw new Error('Setting must be a string');
  }

  return cfg as Config;
}
```
