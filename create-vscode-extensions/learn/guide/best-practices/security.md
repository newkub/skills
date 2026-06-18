# Security

## Sanitize User Input

```typescript
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML
    .trim()
    .slice(0, 1000); // Limit length
}
```

## Validate File Paths

```typescript
import * as path from 'path';

function safeReadFile(filePath: string): Thenable<string> | undefined {
  const normalized = path.normalize(filePath);

  // Ensure path is within workspace
  if (!normalized.startsWith(vscode.workspace.workspaceFolders?.[0]?.uri.fsPath)) {
    vscode.window.showErrorMessage('Access denied');
    return undefined;
  }

  return vscode.workspace.fs.readFile(vscode.Uri.file(normalized))
    .then(buf => buf.toString());
}
```
