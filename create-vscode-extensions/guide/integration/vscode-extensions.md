# VS Code Extensions

## Communicate with Other Extensions

```typescript
// Execute command from another extension
await vscode.commands.executeCommand('otherExtension.command');

// Listen for extension activation
vscode.extensions.onDidChange(() => {
  const ext = vscode.extensions.getExtension('publisher.extension-name');
  if (ext) {
    console.log('Extension available');
  }
});
```
