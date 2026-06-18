# Configuration

## Use Workspace Configuration

```typescript
const config = vscode.workspace.getConfiguration('myExtension');

// Read
const value = config.get<string>('setting', 'default');

// Write
await config.update('setting', 'newValue', vscode.ConfigurationTarget.Global);
```

## Validate Configuration

```typescript
function getValidatedConfig() {
  const config = vscode.workspace.getConfiguration('myExtension');
  const value = config.get<string>('mode');

  if (!['simple', 'advanced'].includes(value)) {
    return 'simple'; // Default
  }

  return value;
}
```
