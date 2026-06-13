# Settings

## Access Extension Settings

```typescript
const config = vscode.workspace.getConfiguration('myExtension');

// Get value
const enabled = config.get<boolean>('enabled', true);
const threshold = config.get<number>('threshold', 10);

// Set value
await config.update('enabled', false, vscode.ConfigurationTarget.Global);
```

## Watch Configuration Changes

```typescript
vscode.workspace.onDidChangeConfiguration(e => {
  if (e.affectsConfiguration('myExtension.setting')) {
    const config = vscode.workspace.getConfiguration('myExtension');
    const value = config.get('setting');
    // Reload configuration
  }
});
```
