# How It Works

## VS Code Extension Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        VS Code Process                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                    Extension Host                              │  │
│  │                                                                 │  │
│  │  ┌────────────────────────────────────────────────────────────┐│  │
│  │  │                 Extension Runtime (Node.js)                 ││  │
│  │  │                                                             ││  │
│  │  │  ┌────────────┐  ┌────────────┐  ┌────────────┐           ││  │
│  │  │  │  Extension │  │  Extension │  │  Extension │           ││  │
│  │  │  │    Code    │  │    Code    │  │    Code    │           ││  │
│  │  │  │            │  │            │  │            │           ││  │
│  │  │  │  activate()│  │  activate()│  │  activate()│           ││  │
│  │  │  └────────────┘  └────────────┘  └────────────┘           ││  │
│  │  └────────────────────────────────────────────────────────────┘│  │
│  │                                                                 │  │
│  │  ┌────────────────────────────────────────────────────────────┐│  │
│  │  │                    VS Code API                             ││  │
│  │  │                                                             ││  │
│  │  │  ├── vscode.workspace (workspace APIs)                    ││  │
│  │  │  ├── vscode.window (UI APIs)                               ││  │
│  │  │  ├── vscode.commands (command registry)                   ││  │
│  │  │  ├── vscode.languages (language features)                  ││  │
│  │  │  └── vscode.env (environment info)                         ││  │
│  │  └────────────────────────────────────────────────────────────┘│  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Extension Lifecycle

```
Extension Installation
        │
        ▼
┌───────────────────┐
│  VS Code starts   │
│  or extension     │
│  is installed     │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Extension loads  │
│  - Read package.json
│  - Register APIs  │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Activation event  │
│  fires             │
│  - onCommand       │
│  - onLanguage      │
│  - onView          │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  activate()       │
│  called           │
│                   │
│  - Register       │
│    commands       │
│  - Register       │
│    providers      │
│  - Setup          │
│    listeners      │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Extension runs   │
│  until deactivated│
│  or VS Code closes│
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  deactivate()     │
│  called           │
│                   │
│  - Cleanup        │
│  - Save state     │
└───────────────────┘
```

## Contribution Points Flow

```
package.json (contributes)
        │
        ├── "commands" ──────► vscode.commands.registerCommand()
        │
        ├── "menus" ──────────► Context menu items
        │
        ├── "keybindings" ───► Keyboard shortcuts
        │
        ├── "configuration" ──► vscode.workspace.getConfiguration()
        │
        ├── "views" ──────────► TreeView providers
        │
        ├── "languages" ───────► Language server
        │
        ├── "debuggers" ───────► Debug adapter
        │
        └── "themes" ───────────► Color themes
```

## Command Registration

```typescript
// 1. Register in package.json
// "contributes": { "commands": [{ "command": "ext.hello" }] }

// 2. Register in activate()
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'ext.hello',
    () => {
      // Command implementation
      vscode.window.showInformationMessage('Hello!');
    }
  );

  // Add to subscriptions for cleanup
  context.subscriptions.push(disposable);
}
```

## Document Provider Flow

```typescript
// Text Document Synchronizer
TextDocumentChangeEvent
        │
        ▼
┌───────────────────┐
│  onDidChangeTextDocument │
│  event fires      │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Process change   │
│  - Parse          │
│  - Analyze        │
│  - Update UI      │
└───────────────────┘
```

## Tree View Flow

```
TreeView (registered in package.json)
        │
        ▼
┌───────────────────┐
│  TreeDataProvider │
│  implemented      │
│                   │
│  getChildren()    │
│  getTreeItem()    │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  User expands     │
│  tree node        │
│                   │
│  VS Code calls    │
│  getChildren()    │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Return children  │
│  Render tree      │
└───────────────────┘
```

## WebView Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         WebView                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                      VS Code Side                               │  │
│  │                                                                 │  │
│  │  vscode.window.createWebviewPanel()                            │  │
│  │         │                                                      │  │
│  │         │ postMessage() / onDidReceiveMessage()                │  │
│  │         ▼                                                      │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │              Webview HTML                                │  │
│  │  │                                                          │  │  │
│  │  │  <!DOCTYPE html>                                         │  │  │
│  │  │  <html>                                                  │  │  │
│  │  │  <head>                                                  │  │  │
│  │  │    <script src="main.js"></script>                       │  │  │
│  │  │  </head>                                                 │  │  │
│  │  │  <body>                                                  │  │  │
│  │  │    <div id="app"></div>                                  │  │  │
│  │  │  </body>                                                 │  │  │
│  │  │  </html>                                                 │  │  │
│  │  └─────────────────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Language Server Protocol

```
Extension (Language Client)           VS Code (Language Server)
          │                                    │
          │ ◄───── textDocument/didOpen ─────► │
          │                                    │
          │ ◄───── textDocument/hover ────────► │
          │                                    │
          │ ◄───── textDocument/completion ───► │
          │                                    │
          │ ◄───── textDocument/diagnostics ──► │
          │                                    │
```

## Extension Debugging

```
┌─────────────────────────────────────────────────────────────────────┐
│                    Debugging Extension                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌───────────────────┐    ┌───────────────────┐                    │
│  │   Extension Host  │    │   VS Code         │                    │
│  │                    │    │   (Debug Host)    │                    │
│  │   extension.ts    │◄──►│   debugAdapter    │                    │
│  │                    │    │                    │                    │
│  │   Source Maps     │    │   Source Maps     │                    │
│  │   (ts → js)       │    │   (ts → js)       │                    │
│  └───────────────────┘    └───────────────────┘                    │
│                                                                      │
│  Launch Configuration (.vscode/launch.json)                         │
│  {                                                                  │
│    "type": "extension",                                            │
│    "request": "launch",                                            │
│    "runtimeExecutable": "${execPath}",                             │
│    "args": ["--extensionDevelopmentPath=${workspaceFolder}"]       │
│  }                                                                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Extension Pack

```
Extension Pack
├── Extension A (required)
├── Extension B (required)
└── Extension C (optional)

When user installs pack:
1. Install all bundled extensions
2. Install extension dependencies
3. Activate all extensions
```

## Market Publication Flow

```
Development
        │
        ▼
┌───────────────────┐
│  npm run package  │
│  (creates .vsix)  │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  vsce publish     │
│  (login to marketplace) │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Review by        │
│  Marketplace      │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Published        │
│  Available to     │
│  users            │
└───────────────────┘
```