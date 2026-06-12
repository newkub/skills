# Create VS Code Extension

Workflow for creating a VS Code extension.

## Steps

1. **Install prerequisites**
   ```bash
   npm install -g yo generator-code
   ```

2. **Generate extension**
   ```bash
   yo code
   ```

3. **Choose extension type**
   - Extension (New Extension)
   - Color Theme
   - Language Support
   - Code Snippets
   - Keymap
   - Extension Pack

4. **Configure package.json**
   - Set extension name
   - Add commands
   - Configure activation events
   - Set contribution points

5. **Implement extension logic**
   - Create command handlers
   - Implement features
   - Add UI components

6. **Test locally**
   ```bash
   code .
   # Press F5 to launch Extension Development Host
   ```

7. **Build for production**
   ```bash
   npm run compile
   ```

8. **Package extension**
   ```bash
   npm install -g vsce
   vsce package
   ```

9. **Publish to marketplace**
   ```bash
   vsce publish
   ```

## Example: Simple Command

```typescript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World!');
  });

  context.subscriptions.push(disposable);
}
```

## Best Practices

- Use TypeScript
- Follow VS Code extension guidelines
- Test on different platforms
- Handle errors gracefully
- Use proper activation events
