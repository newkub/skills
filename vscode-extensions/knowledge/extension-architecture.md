# VSCode Extension Architecture

## Overview

VSCode extensions run in their own host process and communicate with VSCode through the Extension API. This architecture ensures performance, stability, and security.

## Core Concepts

### Extension Manifest (package.json)

The extension manifest declares the extension's capabilities:

```json
{
  "name": "my-extension",
  "displayName": "My Extension",
  "version": "1.0.0",
  "engines": {
    "vscode": "^1.80.0"
  },
  "activationEvents": [
    "onLanguage:javascript",
    "onCommand:myExtension.doSomething"
  ],
  "contributes": {
    "commands": [
      {
        "command": "myExtension.doSomething",
        "title": "Do Something"
      }
    ]
  },
  "main": "./out/extension.js"
}
```

### Activation Events

Extensions are activated lazily based on specific events:

- `onLanguage:*` - When a file of a specific language is opened
- `onCommand:*` - When a specific command is invoked
- `onView:*` - When a specific view is shown
- `onStartupFinished` - After VSCode startup completes
- `*` - Always activate (use sparingly)

### Contribution Points

Contribution points define how extensions extend VSCode:

**Commands**
```json
"contributes": {
  "commands": [
    {
      "command": "extension.helloWorld",
      "title": "Hello World"
    }
  ]
}
```

**Keybindings**
```json
"contributes": {
  "keybindings": [
    {
      "command": "extension.helloWorld",
      "key": "ctrl+shift+h"
    }
  ]
}
```

**Languages**
```json
"contributes": {
  "languages": [
    {
      "id": "myscript",
      "extensions": [".myscript"],
      "aliases": ["MyScript", "myscript"],
      "configuration": "./language-configuration.json"
    }
  ]
}
```

### Extension Entry Point

The `activate` function is called when the extension is activated:

```typescript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension is now active!');

  const disposable = vscode.commands.registerCommand(
    'extension.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World!');
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {
  // Cleanup when extension is deactivated
}
```

## Architecture Principles

### Extension Isolation

- Extensions run in a separate extension host process
- Prevents extensions from crashing VSCode
- Provides security by limiting direct DOM access
- Extensions communicate through the Extension API

### Performance - Lazy Activation

- Extensions are only activated when needed
- Reduces memory usage and startup time
- Use specific activation events instead of `*`

### Extensibility API

- Protocol-based API for communication
- Type-safe with TypeScript
- Comprehensive coverage of VSCode features

## Extension Lifecycle

1. **Installation** - Extension is installed
2. **Activation** - Extension is activated based on events
3. **Execution** - Extension runs and responds to events
4. **Deactivation** - Extension is deactivated (VSCode closed or extension disabled)

## Best Practices

1. **Use specific activation events** - Avoid `*` activation
2. **Clean up resources** - Use `context.subscriptions` for disposables
3. **Handle errors gracefully** - Try-catch blocks and error logging
4. **Use TypeScript** - Better type safety and developer experience
5. **Follow VSCode UI patterns** - Use built-in UI components

## Common Patterns

### Command Registration

```typescript
context.subscriptions.push(
  vscode.commands.registerCommand('extension.myCommand', async () => {
    // Command implementation
  })
);
```

### Event Handling

```typescript
const disposable = vscode.workspace.onDidChangeTextDocument((event) => {
  if (event.document === vscode.window.activeTextEditor?.document) {
    // Handle text change
  }
});

context.subscriptions.push(disposable);
```

### Configuration Access

```typescript
const config = vscode.workspace.getConfiguration('myExtension');
const setting = config.get<string>('mySetting', 'default');
```

## Verification

1. ตรวจสอบว่า package.json มี activationEvents ที่เหมาะสม
2. ตรวจสอบว่าใช้ context.subscriptions สำหรับ disposables
3. ทดสอบด้วย `npm run test` เพื่อยืนยัน extension ทำงาน
4. ตรวจสอบว่าไม่มี memory leaks
5. ตรวจสอบว่า activation time < 500ms

## References

- [VSCode Extension API](https://code.visualstudio.com/api)
- [Extension Anatomy](https://code.visualstudio.com/api/get-started/extension-anatomy)
- [Activation Events](https://code.visualstudio.com/api/references/activation-events)
- [Contribution Points](https://code.visualstudio.com/api/references/contribution-points)
