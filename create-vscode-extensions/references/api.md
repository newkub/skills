# VS Code API Reference

Complete reference for VS Code extension API

## vscode Commands

```typescript
// Register command
const disposable = vscode.commands.registerCommand(
  'extension.hello',
  (arg1, arg2) => {
    vscode.window.showInformationMessage('Hello!');
  }
);

// Execute command
await vscode.commands.executeCommand('editor.action.formatDocument');

// Get all commands
const commands = await vscode.commands.getCommands(true);
```

## vscode.window

### Show Messages

```typescript
// Information
vscode.window.showInformationMessage('Info message');

// Warning
vscode.window.showWarningMessage('Warning message');

// Error
vscode.window.showErrorMessage('Error message');

// With actions
const choice = await vscode.window.showInformationMessage(
  'Continue?',
  'Yes', 'No'
);
```

### Quick Pick

```typescript
// Single selection
const selected = await vscode.window.showQuickPick(
  ['Option 1', 'Option 2', 'Option 3'],
  { placeHolder: 'Select one' }
);

// With detail
const selected = await vscode.window.showQuickPick(
  [{ label: 'A', description: 'Option A' }],
  { matchOnDescription: true }
);

// Multi selection
const selected = await vscode.window.showQuickPick(
  ['A', 'B', 'C'],
  { canPickMany: true }
);
```

### Input Box

```typescript
const value = await vscode.window.showInputBox({
  prompt: 'Enter your name',
  value: 'default',
  validateInput: (value) => {
    return value.length > 0 ? null : 'Required';
  }
});
```

### Text Editor

```typescript
const editor = vscode.window.activeTextEditor;

// Get document
const doc = editor.document;

// Get selection
const selection = editor.selection;

// Get text
const text = editor.document.getText(selection);

// Edit
editor.edit(editBuilder => {
  editBuilder.insert(position, 'text');
  editBuilder.replace(range, 'replacement');
  editBuilder.delete(range);
});

// Execute edit
editor.edit(() => {}, { undoStopBefore: false, undoStopAfter: false });
```

### Create WebView

```typescript
const panel = vscode.window.createWebviewPanel(
  'myView',
  'My View',
  vscode.ViewColumn.One,
  {
    enableScripts: true,
    retainContextWhenHidden: true
  }
);

panel.webview.html = `<html>...</html>`;
panel.webview.onDidReceiveMessage(msg => {});
panel.webview.postMessage({ type: 'hello' });
```

### Status Bar

```typescript
const item = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Left,
  100
);
item.text = '$(icon) Label';
item.tooltip = 'Tooltip';
item.command = 'extension.cmd';
item.show();
item.hide();
```

### Progress

```typescript
await vscode.window.withProgress(
  { location: vscode.ProgressLocation.Notification },
  async (progress) => {
    progress.report({ message: 'Working...', increment: 50 });
  }
);
```

## vscode.workspace

### Configuration

```typescript
const config = vscode.workspace.getConfiguration('myExtension');

// Get value
const value = config.get<string>('setting', 'default');

// Set value
await config.update('setting', 'newValue', vscode.ConfigurationTarget.Global);

// Watch changes
vscode.workspace.onDidChangeConfiguration(e => {
  if (e.affectsConfiguration('myExtension.setting')) {
    // Reload configuration
  }
});
```

### Workspace Folders

```typescript
const folders = vscode.workspace.workspaceFolders;
if (folders) {
  folders.forEach(f => console.log(f.uri.fsPath));
}

// Listen for changes
vscode.workspace.onDidChangeWorkspaceFolders(e => {
  e.added.forEach(f => console.log('Added:', f.uri.fsPath));
});
```

### File System

```typescript
// Read file
const uri = vscode.Uri.file('/path');
const content = await vscode.workspace.fs.readFile(uri);

// Write file
await vscode.workspace.fs.writeFile(uri, Buffer.from('content'));

// Read directory
const entries = await vscode.workspace.fs.readDirectory(uri);
```

### File System Watcher

```typescript
const watcher = vscode.workspace.createFileSystemWatcher(
  '**/*.ts',
  undefined,
  undefined,
  undefined
);

watcher.onDidCreate(uri => {});
watcher.onDidChange(uri => {});
watcher.onDidDelete(uri => {});
```

### Find Files

```typescript
const files = await vscode.workspace.findFiles(
  '**/*.json',
  '**/node_modules/**'
);
```

### Text Documents

```typescript
vscode.workspace.onDidOpenTextDocument(doc => {
  console.log('Opened:', doc.fileName);
});

vscode.workspace.onDidCloseTextDocument(doc => {
  console.log('Closed:', doc.fileName);
});

vscode.workspace.onDidChangeTextDocument(e => {
  console.log('Changes:', e.contentChanges);
});
```

## vscode.languages

### Hover Provider

```typescript
vscode.languages.registerHoverProvider('typescript', {
  provideHover(document, position) {
    const range = document.getWordRangeAtPosition(position);
    const word = document.getText(range);
    return new vscode.Hover(`Documentation for ${word}`);
  }
});
```

### Completion Provider

```typescript
vscode.languages.registerCompletionItemProvider('javascript', {
  provideCompletionItems(document, position) {
    const item = new vscode.CompletionItem('hello');
    item.insertText = 'console.log("Hello!")';
    item.documentation = 'Prints hello';
    item.detail = 'My Snippet';
    item.preselect = true;
    return [item];
  }
});
```

### Definition Provider

```typescript
vscode.languages.registerDefinitionProvider('javascript', {
  provideDefinition(document, position) {
    return new vscode.Location(uri, range);
  }
});
```

### Diagnostic Provider

```typescript
const collection = vscode.languages.createDiagnosticCollection('myExt');

vscode.workspace.onDidOpenTextDocument(doc => {
  const diagnostics = analyzeDocument(doc);
  collection.set(doc.uri, diagnostics);
});
```

## vscode.debug

### Debug Configuration

```typescript
vscode.debug.registerDebugConfigurationProvider('node', {
  resolveDebugConfiguration(folder, config) {
    return { ...config, type: 'node' };
  }
});
```

### Debug Session

```typescript
vscode.debug.onDidStartDebugSession(session => {
  console.log('Started:', session.name);
});

vscode.debug.onDidTerminateDebugSession(session => {
  console.log('Ended:', session.name);
});
```

## vscode.env

```typescript
console.log(vscode.env.appName);         // VS Code
console.log(vscode.env.appVersion);      // 1.60.0
console.log(vscode.env.language);        // en
console.log(vscode.env.shell);           // /bin/bash
console.log(vscode.env.uiKind);          // UIKind

vscode.env.clipboard.writeText('Hello');
const text = await vscode.env.clipboard.readText();
```

## vscode.extensions

```typescript
// Get extension
const ext = vscode.extensions.getExtension('publisher.extension-name');

if (ext) {
  console.log('Version:', ext.packageJSON.version);

  if (!ext.isActive) {
    await ext.activate();
  }

  const exports = ext.exports;
}
```

## Context

```typescript
// In command handler
export function activate(context: vscode.ExtensionContext) {
  // Global state
  context.globalState.update('key', 'value');
  const value = context.globalState.get('key');

  // Workspace state
  context.workspaceState.update('key', 'value');
  const value = context.workspaceState.get('key');

  // Secrets
  context.secrets.store('key', 'value');
  const value = await context.secrets.get('key');

  // Extension path
  const extensionPath = context.extensionPath;

  // Subscriptions
  context.subscriptions.push(disposable);
}
```

## Tree View

```typescript
export class TreeDataProvider implements vscode.TreeDataProvider<Node> {
  private _onDidChangeTreeData = new vscode.EventEmitter<Node | undefined>();

  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  getTreeItem(element: Node): vscode.TreeItem {
    return {
      label: element.label,
      collapsibleState: element.children.length
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None
    };
  }

  getChildren(element?: Node): Node[] {
    return element ? element.children : this.root;
  }

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }
}

vscode.window.registerTreeDataProvider('viewId', new TreeDataProvider());
```

## Document Link

```typescript
vscode.languages.registerDocumentLinkProvider('markdown', {
  provideDocumentLinks(document) {
    const links: vscode.DocumentLink[] = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = regex.exec(document.getText())) !== null) {
      const range = new vscode.Range(
        document.positionAt(match.index),
        document.positionAt(match.index + match[0].length)
      );
      links.push(new vscode.DocumentLink(range, vscode.Uri.parse(match[2])));
    }

    return links;
  }
});
```

## Code Actions

```typescript
vscode.languages.registerCodeActionsProvider('javascript', {
  provideCodeActions(document, range, context) {
    if (context.only === vscode.CodeActionKind.QuickFix) {
      const action = new vscode.CodeAction('Fix', vscode.CodeActionKind.QuickFix);
      action.command = { command: 'extension.fix', arguments: [] };
      return [action];
    }
    return [];
  }
});
```

## Color Theme

```typescript
// package.json
{
  "contributes": {
    "themes": [{
      "id": "myTheme",
      "label": "My Theme",
      "uiTheme": "vs-dark",
      "path": "themes/myTheme.json"
    }]
  }
}
```

## Keybinding

```typescript
vscode.commands.registerCommand('extension.action', () => {});

vscode.window.addCommandPaletteAction({
  command: 'extension.action',
  title: 'My Action',
  category: 'Extension'
});
```

## Event Types

| Event | Description |
|-------|-------------|
| onDidChangeTextEditorSelection | Selection changed |
| onDidChangeTextEditorViewColumn | View column changed |
| onDidCloseTextDocument | Document closed |
| onDidChangeConfiguration | Configuration changed |
| onDidChangeWorkspaceFolders | Workspace folders changed |
| onDidOpenTerminal | Terminal opened |
| onDidStartDebugSession | Debug session started |