# File System

## Read/Write Files

```typescript
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

async function readFile(filePath: string): Promise<string> {
  const uri = vscode.Uri.file(filePath);
  const bytes = await vscode.workspace.fs.readFile(uri);
  return Buffer.from(bytes).toString('utf-8');
}

async function writeFile(filePath: string, content: string): Promise<void> {
  const uri = vscode.Uri.file(filePath);
  await vscode.workspace.fs.writeFile(uri, Buffer.from(content, 'utf-8'));
}
```

## Watch Files

```typescript
const watcher = vscode.workspace.createFileSystemWatcher(
  '**/*.json',
  undefined,
  undefined,
  undefined
);

watcher.onDidCreate(uri => {
  vscode.window.showInformationMessage(`Created: ${uri.fsPath}`);
});

watcher.onDidChange(uri => {
  console.log(`Changed: ${uri.fsPath}`);
});

watcher.onDidDelete(uri => {
  console.log(`Deleted: ${uri.fsPath}`);
});
```
