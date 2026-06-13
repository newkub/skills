# Documentation

## Document Public APIs

```typescript
/**
 * Registers a command with the extension.
 * @param commandId - Unique identifier for the command
 * @param handler - Function to execute when command is invoked
 * @returns Disposable that can be used to unregister the command
 */
export function registerCommand(
  commandId: string,
  handler: () => void
): vscode.Disposable {
  return vscode.commands.registerCommand(commandId, handler);
}
```

## Keep README Updated

```markdown
## Features
- Feature A
- Feature B

## Usage
1. Press Ctrl+Shift+P
2. Type "My Extension: Command"
3. Press Enter

## Configuration
- `myExtension.setting`: Description
```
