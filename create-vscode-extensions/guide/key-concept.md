# Key Concept

## What is VS Code Extension?

VS Code extensions คือโปรแกรมเสริมที่เพิ่มความสามารถให้กับ VS Code editor สร้างด้วย TypeScript/JavaScript และทำงานใน Node.js environment

## Core Concepts

### Extension Structure

```
my-extension/
├── package.json          # Extension manifest
├── tsconfig.json          # TypeScript config
├── src/
│   ├── extension.ts      # Extension entry point
│   └── test/
│       └── extension.test.ts
├── README.md
├── CHANGELOG.md
└── icon.png              # Extension icon
```

### Package.json

```json
{
  "name": "my-vscode-extension",
  "displayName": "My Extension",
  "version": "1.0.0",
  "publisher": "my-publisher",
  "description": "My VS Code extension",
  "engines": {
    "vscode": "^1.60.0"
  },
  "main": "./out/extension.js",
  "activationEvents": ["onCommand:myExtension.hello"],
  "contributes": {
    "commands": [{
      "command": "myExtension.hello",
      "title": "Hello World"
    }]
  }
}
```

### Extension Entry Point

```typescript
// src/extension.ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension activated');

  // Register commands
  const disposable = vscode.commands.registerCommand(
    'myExtension.hello',
    () => {
      vscode.window.showInformationMessage('Hello from My Extension!');
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log('Extension deactivated');
}
```

## Contribution Points

### Commands

```json
"contributes": {
  "commands": [{
    "command": "extension.command",
    "title": "Command Title",
    "category": "My Extension"
  }]
}
```

```typescript
vscode.commands.registerCommand('extension.command', () => {
  // Implementation
});
```

### Configuration

```json
"contributes": {
  "configuration": {
    "title": "My Extension",
    "properties": {
      "myExtension.setting": {
        "type": "string",
        "default": "default",
        "description": "Setting description"
      }
    }
  }
}
```

### Keybindings

```json
"contributes": {
  "keybindings": [{
    "command": "extension.command",
    "key": "ctrl+shift+f",
    "mac": "cmd+shift+f",
    "when": "editorTextFocus"
  }]
}
```

### Views

```json
"contributes": {
  "views": {
    "explorer": [{
      "id": "myExtension.view",
      "name": "My View"
    }]
  }
}
```

## Activation Events

| Event | Description |
|-------|-------------|
| onLanguage:javascript | When JS file opens |
| onCommand:extension.cmd | When command invoked |
| onView:viewId | When view becomes visible |
| workspaceContains:**/*.json | When workspace contains JSON |
| onDebugInitialType | When debug session starts |

## VS Code API

### Window API

```typescript
// Show message
vscode.window.showInformationMessage('Info message');
vscode.window.showWarningMessage('Warning message');
vscode.window.showErrorMessage('Error message');

// Quick pick
const picked = await vscode.window.showQuickPick(
  ['Option 1', 'Option 2', 'Option 3']
);

// Input box
const input = await vscode.window.showInputBox({
  prompt: 'Enter your name',
  value: 'default'
});
```

### Workspace API

```typescript
// Get active text editor
const editor = vscode.window.activeTextEditor;

// Get document text
const text = editor.document.getText();

// Edit document
editor.edit(editBuilder => {
  editBuilder.insert(
    new vscode.Position(0, 0),
    'Hello, World!'
  );
});
```

### File System

```typescript
// Read file
const uri = vscode.Uri.file('/path/to/file');
const content = await vscode.workspace.fs.readFile(uri);

// Write file
await vscode.workspace.fs.writeFile(uri, Buffer.from('content'));
```

## When to Use

- ต้องการเพิ่ม custom commands
- ต้องการ integrate กับ external tools
- ต้องการสร้าง custom UI (WebViews)
- ต้องการเพิ่ม language support
- ต้องการ customize editor behavior