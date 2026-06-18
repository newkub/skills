# Terminal Integration

## Create Terminal

```typescript
const terminal = vscode.window.createTerminal('My Terminal');
terminal.sendText('echo "Hello"');
terminal.show();

// Listen for close
terminal.processId.then(pid => {
  console.log(`Terminal PID: ${pid}`);
});
```

## Send Commands

```typescript
const terminals = vscode.window.terminals;
const myTerminal = terminals.find(t => t.name === 'My Terminal');

if (myTerminal) {
  myTerminal.sendText('bun run build');
  myTerminal.show();
}
```
