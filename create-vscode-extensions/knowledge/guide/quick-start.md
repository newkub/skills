# Quick Start

สร้าง VS Code extension แรกของคุณใน 5 นาที

## 1. Install Tools

```bash
npm install -g yo generator-code
```

## 2. Create Extension

```bash
yo code
# Select "New Extension (TypeScript)"
# Name: my-first-extension
```

## 3. Explore Structure

```
my-first-extension/
├── .vscode/
│   ├── launch.json
│   └── tasks.json
├── src/
│   └── extension.ts
├── test/
│   └── extension.test.ts
├── media/
│   └── icon.png
├── package.json
├── tsconfig.json
└── README.md
```

## 4. Edit package.json

```json
{
  "name": "my-first-extension",
  "displayName": "My First Extension",
  "version": "1.0.0",
  "publisher": "your-name",
  "engines": {
    "vscode": "^1.60.0"
  },
  "activationEvents": ["onCommand:myFirst.hello"],
  "contributes": {
    "commands": [{
      "command": "myFirst.hello",
      "title": "Hello World"
    }]
  }
}
```

## 5. Write Extension Code

```typescript
// src/extension.ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension activated!');

  const disposable = vscode.commands.registerCommand(
    'myFirst.hello',
    () => {
      vscode.window.showInformationMessage('Hello from VS Code!');
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
```

## 6. Run Development Mode

```bash
# Compile
npm run compile

# Press F5 to debug
# Or run: code --extensionDevelopmentPath=/path/to/extension
```

## 7. Test Extension

1. Press Ctrl+Shift+P (or Cmd+Shift+P on Mac)
2. Type "Hello World"
3. Press Enter
4. See the information message!

## Example: Show Current File

```typescript
vscode.commands.registerCommand('myFirst.showFile', () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const fileName = editor.document.fileName;
    vscode.window.showInformationMessage(`File: ${fileName}`);
  }
});
```

## Example: Insert Text

```typescript
vscode.commands.registerCommand('myFirst.insertDate', () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const date = new Date().toLocaleDateString();
    editor.edit(editBuilder => {
      editBuilder.insert(editor.selection.active, date);
    });
  }
});
```

## Example: Create Status Bar

```typescript
const statusBar = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Left,
  100
);
statusBar.text = '$(bug) Ready';
statusBar.command = 'myFirst.showStatus';
statusBar.show();
```

## Example: Add Context Menu

```json
"menus": {
  "editor/context": [{
    "command": "myFirst.format",
    "when": "editorTextFocus"
  }]
}
```

## Example: Configuration

```json
"contributes": {
  "configuration": {
    "title": "My First Extension",
    "properties": {
      "myFirst.greeting": {
        "type": "string",
        "default": "Hello",
        "description": "Greeting message"
      }
    }
  }
}
```

```typescript
const config = vscode.workspace.getConfiguration('myFirst');
const greeting = config.get<string>('greeting', 'Hello');
vscode.window.showInformationMessage(greeting);
```

## Example: Read Workspace File

```typescript
vscode.commands.registerCommand('myFirst.readFile', async () => {
  const uri = vscode.Uri.file('/path/to/file');
  const content = await vscode.workspace.fs.readFile(uri);
  vscode.window.showInformationMessage(Buffer.from(content).toString());
});
```

## Example: Quick Pick

```typescript
vscode.commands.registerCommand('myFirst.pick', async () => {
  const items = [
    { label: 'Option 1', detail: 'Description 1' },
    { label: 'Option 2', detail: 'Description 2' }
  ];

  const selected = await vscode.window.showQuickPick(items);
  if (selected) {
    vscode.window.showInformationMessage(`Selected: ${selected.label}`);
  }
});
```

## Example: WebView

```typescript
const panel = vscode.window.createWebviewPanel(
  'myView',
  'My WebView',
  vscode.ViewColumn.One,
  { enableScripts: true }
);

panel.webview.html = `
  <html>
  <body>
    <h1>Hello from WebView</h1>
    <button onclick="sendMessage()">Click</button>
    <script>
      const vscode = acquireVsCodeApi();
      function sendMessage() {
        vscode.postMessage({ type: 'hello' });
      }
    </script>
  </body>
  </html>
`;

panel.webview.onDidReceiveMessage(msg => {
  vscode.window.showInformationMessage(`Got: ${msg.type}`);
});
```

## Next Steps

- [Key Concepts](key-concept.md) - เข้าใจ APIs และ contribution points
- [Features](features.md) - เรียนรู้ features ต่างๆ
- [Best Practices](best-practices.md) - วิธีเขียน code ที่ดี