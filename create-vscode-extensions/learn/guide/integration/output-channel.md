# Output Channel

## Log to Output Panel

```typescript
const output = vscode.window.createOutputChannel('My Extension');

// Append messages
output.appendLine('Info message');
output.appendLine('Debug: ' + JSON.stringify(data));

// Show channel
output.show(true); // preserve focus
```
