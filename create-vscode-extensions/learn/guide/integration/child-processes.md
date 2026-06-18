# Child Processes

## Run Shell Commands

```typescript
import { exec } from 'child_process';
import * as vscode from 'vscode';

function runCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: vscode.workspace.workspaceFolders?.[0]?.uri.fsPath },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(stderr || error.message));
        } else {
          resolve(stdout);
        }
      }
    );
  });
}

// Usage
async function buildProject() {
  const output = await runCommand('bun run build');
  vscode.window.showInformationMessage('Build complete');
}
```

## Run with Progress

```typescript
await vscode.window.withProgress(
  {
    location: vscode.ProgressLocation.Notification,
    title: 'Running build...',
    cancellable: true
  },
  async (progress) => {
    progress.report({ message: 'Installing...' });
    await runCommand('bun install');

    progress.report({ message: 'Building...' });
    await runCommand('bun run build');

    progress.report({ message: 'Done!', increment: 100 });
  }
);
```
