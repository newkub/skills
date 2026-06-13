# Memory Management

## Dispose Subscriptions

```typescript
export function activate(context: vscode.ExtensionContext) {
  // Register and track
  const disposables: vscode.Disposable[] = [];

  disposables.push(
    vscode.commands.registerCommand('ext.cmd', handler)
  );

  disposables.push(
    vscode.window.registerTreeDataProvider('view', provider)
  );

  // Add to context
  context.subscriptions.push(...disposables);
}
```

## Use CancellationToken

```typescript
vscode.languages.registerCompletionProvider(
  'javascript',
  {
    provideCompletionItems(doc, pos, token) {
      // Check for cancellation
      if (token.isCancellationRequested) {
        return [];
      }
      // Return results
    }
  }
);
```
