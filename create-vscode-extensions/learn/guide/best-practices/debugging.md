# Debugging

## Add Logging

```typescript
import { log } from './logger';

export function activate(context: vscode.ExtensionContext) {
  log.info('Extension activated');

  context.subscriptions.push(
    vscode.commands.registerCommand('ext.cmd', () => {
      log.debug('Command executed');
      // ...
    })
  );
}
```

## Use Console Correctly

```typescript
// Avoid console.log in production
// Use output channel instead
const output = vscode.window.createOutputChannel('My Extension');

output.appendLine('Info message');
output.appendLine('Debug: ' + JSON.stringify(data));
```
