# Features

Features และ capabilities ของ VS Code extensions

## Commands

### Register Command

```typescript
const disposable = vscode.commands.registerCommand(
  'extension.hello',
  () => {
    vscode.window.showInformationMessage('Hello!');
  }
);
context.subscriptions.push(disposable);
```

### Command with Arguments

```typescript
vscode.commands.registerCommand(
  'extension.greet',
  (name: string) => {
    vscode.window.showInformationMessage(`Hello, ${name}!`);
  }
);

// Call with: vscode.commands.executeCommand('extension.greet', 'World');
```

## Quick Picks

### Single Selection

```typescript
const items = [
  { label: 'Option 1', description: 'Description 1' },
  { label: 'Option 2', description: 'Description 2' }
];

const selected = await vscode.window.showQuickPick(items);
if (selected) {
  console.log('Selected:', selected.label);
}
```

### Multi Selection

```typescript
const items = ['Option 1', 'Option 2', 'Option 3'];
const selected = await vscode.window.showQuickPick(items, {
  canPickMany: true
});
```

### With Placeholder

```typescript
const selected = await vscode.window.showQuickPick(items, {
  placeHolder: 'Select an option',
  ignoreFocusOut: true
});
```

## Input Box

```typescript
const value = await vscode.window.showInputBox({
  prompt: 'Enter your name',
  value: 'default',
  valueSelection: [0, 5],
  validateInput: (value) => {
    return value.length > 0 ? null : 'Name is required';
  }
});
```

## Document Editing

### Read Document

```typescript
const editor = vscode.window.activeTextEditor;
const document = editor.document;
const text = document.getText();
const line = document.lineAt(0);
const word = document.getWordRangeAtPosition(position);
```

### Edit Document

```typescript
editor.edit(editBuilder => {
  // Insert text
  editBuilder.insert(position, 'Hello');

  // Replace text
  editBuilder.replace(
    new vscode.Range(start, end),
    'Replacement'
  );

  // Delete text
  editBuilder.delete(new vscode.Range(start, end));
});
```

### Format Document

```typescript
await vscode.commands.executeCommand('editor.action.formatDocument');
```

## Tree View

### TreeDataProvider

```typescript
export class MyTreeProvider implements vscode.TreeDataProvider<MyItem> {
  getTreeItem(element: MyItem): vscode.TreeItem {
    return {
      label: element.label,
      collapsibleState: vscode.TreeItemCollapsibleState.Collapsed
    };
  }

  getChildren(element?: MyItem): Thenable<MyItem[]> {
    return Promise.resolve(element ? element.children : this.rootItems);
  }
}
```

### Register Tree View

```json
"contributes": {
  "views": {
    "myView": [{
      "id": "myExtension.view",
      "name": "My View"
    }]
  }
}
```

```typescript
vscode.window.registerTreeDataProvider('myExtension.view', provider);
```

## WebView

### Create WebView

```typescript
const panel = vscode.window.createWebviewPanel(
  'myWebView',
  'My WebView',
  vscode.ViewColumn.One,
  {
    enableScripts: true,
    retainContextWhenHidden: true
  }
);

panel.webview.html = `
  <!DOCTYPE html>
  <html>
  <head><title>My WebView</title></head>
  <body>
    <h1>Hello from WebView!</h1>
    <script>
      const vscode = acquireVsCodeApi();
      document.getElementById('btn').onclick = () => {
        vscode.postMessage({ type: 'hello' });
      };
    </script>
  </body>
  </html>
`;

panel.webview.onDidReceiveMessage(message => {
  if (message.type === 'hello') {
    vscode.window.showInformationMessage('WebView says hello!');
  }
});
```

## Status Bar

### Create Status Bar Item

```typescript
const item = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Left,
  100
);
item.text = '$(rocket) Ready';
item.command = 'extension.openPanel';
item.show();

context.subscriptions.push(item);
```

## Diagnostic

### Show Diagnostics

```typescript
const diagnostic = new vscode.Diagnostic(
  range,
  'Error message',
  vscode.DiagnosticSeverity.Error
);

vscode.languages.createDiagnosticCollection('myExtension')
  .set(uri, [diagnostic]);
```

## Notifications

### Show Message

```typescript
vscode.window.showInformationMessage('Operation completed');
vscode.window.showWarningMessage('Warning: File not saved');
vscode.window.showErrorMessage('Error: Connection failed');
```

### With Actions

```typescript
const choice = await vscode.window.showInformationMessage(
  'Continue?',
  { modal: true },
  'Yes', 'No', 'Cancel'
);
```

## Progress

### Show Progress

```typescript
await vscode.window.withProgress(
  {
    location: vscode.ProgressLocation.Notification,
    title: 'Processing...',
    cancellable: true
  },
  async (progress, token) => {
    for (let i = 0; i < 10; i++) {
      if (token.isCancellationRequested) break;
      progress.report({ message: `Step ${i + 1}/10` });
      await sleep(500);
    }
  }
);
```

## Workspace

### Get Workspace Folders

```typescript
const folders = vscode.workspace.workspaceFolders;
if (folders) {
  folders.forEach(folder => {
    console.log(folder.uri.fsPath);
  });
}
```

### Watch Files

```typescript
const watcher = vscode.workspace.createFileSystemWatcher('**/*.ts');

watcher.onDidCreate(uri => {
  console.log('Created:', uri.fsPath);
});

context.subscriptions.push(watcher);
```

## Configuration

### Get Configuration

```typescript
const config = vscode.workspace.getConfiguration('myExtension');
const value = config.get<string>('setting', 'default');
```

### Update Configuration

```typescript
await config.update('setting', 'newValue', vscode.ConfigurationTarget.Global);
```

## Language Features

### Hover Provider

```typescript
vscode.languages.registerHoverProvider('typescript', {
  provideHover(document, position) {
    const word = document.getWordRangeAtPosition(position);
    const text = document.getText(word);
    return new vscode.Hover(`Documentation for: ${text}`);
  }
});
```

### Completion Provider

```typescript
vscode.languages.registerCompletionItemProvider('javascript', {
  provideCompletionItems(document, position) {
    const item = new vscode.CompletionItem('hello');
    item.insertText = 'console.log("Hello!")';
    item.documentation = 'Prints hello to console';
    return [item];
  }
});
```

## Debug

### Register Debug Adapter

```typescript
const factory: vscode.DebugAdapterDescriptorFactory = {
  createDebugAdapterDescriptor(session) {
    return new vscode.DebugAdapterExecutable(
      'node',
      ['path/to/debugger.js']
    );
  }
};

vscode.debug.registerDebugAdapterDescriptorFactory('node', factory);
```