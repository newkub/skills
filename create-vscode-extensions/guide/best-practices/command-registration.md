# Command Registration

## Use Named Functions

```typescript
// ❌ Bad
vscode.commands.registerCommand('ext.cmd', () => {
  vscode.window.showInformationMessage('Hello');
});

// ✅ Good
function showHello() {
  vscode.window.showInformationMessage('Hello');
}

vscode.commands.registerCommand('ext.cmd', showHello);
```

## Handle Errors

```typescript
async function myCommand() {
  try {
    await doSomething();
  } catch (error) {
    vscode.window.showErrorMessage(
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
}
```
