# Architecture

## Extension Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                      VS Code Process                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                    Extension Host (Node.js)                    │  │
│  │                                                                 │  │
│  │  ┌────────────────────────────────────────────────────────────┐│  │
│  │  │                   Extension Code                          ││  │
│  │  │                                                             ││  │
│  │  │  ┌─────────────────────────────────────────────────────┐   ││  │
│  │  │  │                   extension.ts                     │   ││  │
│  │  │  │                                                       │   ││  │
│  │  │  │  export function activate(context) {                 │   ││  │
│  │  │  │    // Register commands, providers, etc.             │   ││  │
│  │  │  │  }                                                   │   ││  │
│  │  │  └─────────────────────────────────────────────────────┘   ││  │
│  │  │                                                             ││  │
│  │  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       ││  │
│  │  │  │  commands/  │ │  providers/  │ │   utils/    │       ││  │
│  │  │  │             │ │              │ │              │       ││  │
│  │  │  │ hello.ts    │ │ tree.ts      │ │ helpers.ts  │       ││  │
│  │  │  │ format.ts   │ │ completion.ts│ │ logger.ts   │       ││  │
│  │  │  │ build.ts    │ │ hover.ts     │ │ config.ts  │       ││  │
│  │  │  └──────────────┘ └──────────────┘ └──────────────┘       ││  │
│  │  └────────────────────────────────────────────────────────────┘│  │
│  │                                                                 │  │
│  │  ┌────────────────────────────────────────────────────────────┐│  │
│  │  │                     vscode API                            ││  │
│  │  │                                                             ││  │
│  │  │  vscode.commands    vscode.window      vscode.workspace  ││  │
│  │  │  vscode.languages   vscode.env           vscode.debug     ││  │
│  │  └────────────────────────────────────────────────────────────┘│  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Project Structure

```
my-vscode-extension/
├── src/
│   ├── extension.ts          # Entry point
│   ├── commands/
│   │   ├── index.ts          # Command exports
│   │   ├── hello.ts          # Hello command
│   │   ├── build.ts          # Build command
│   │   └── format.ts         # Format command
│   ├── providers/
│   │   ├── index.ts          # Provider exports
│   │   ├── tree-provider.ts  # Tree view provider
│   │   ├── completion.ts     # Completion provider
│   │   ├── hover.ts          # Hover provider
│   │   └── signature.ts      # Signature provider
│   ├── utils/
│   │   ├── index.ts
│   │   ├── logger.ts         # Logging utility
│   │   ├── config.ts         # Configuration helper
│   │   └── helpers.ts        # Common helpers
│   └── types/
│       └── index.ts          # TypeScript types
├── test/
│   ├── extension.test.ts     # Main tests
│   ├── commands/
│   │   └── hello.test.ts     # Command tests
│   └── helpers/
│       └── index.ts
├── media/
│   ├── icon.png              # Extension icon (128x128)
│   ├── toolbar-icon.svg      # Toolbar icon
│   └── view-icon.svg         # View icon
├── package.json              # Extension manifest
├── tsconfig.json              # TypeScript config
├── .vscode/
│   ├── launch.json           # Debug config
│   └── tasks.json           # Build tasks
└── README.md
```

## Extension Lifecycle

```
┌────────────────────────────────────────────────────────────────────┐
│                     Extension Lifecycle                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────┐                                               │
│  │ VS Code Starts   │ ──► Extension discovered in filesystem      │
│  └────────┬─────────┘                                               │
│           │                                                          │
│           ▼                                                          │
│  ┌──────────────────┐                                               │
│  │ Load Extension   │ ──► Read package.json                        │
│  └────────┬─────────┘     Register contribution points              │
│           │                                                          │
│           ▼                                                          │
│  ┌──────────────────┐                                               │
│  │ Activation Event │ ──► onCommand, onLanguage, onView, etc.      │
│  └────────┬─────────┘                                               │
│           │                                                          │
│           ▼                                                          │
│  ┌──────────────────┐                                               │
│  │ activate()       │ ──► Initialize extension                     │
│  └────────┬─────────┘     Register commands, providers, listeners   │
│           │                                                          │
│           ▼                                                          │
│  ┌──────────────────┐                                               │
│  │ Extension Active │ ──► Handle user interactions                │
│  └────────┬─────────┘                                               │
│           │                                                          │
│           ▼                                                          │
│  ┌──────────────────┐                                               │
│  │ deactivate()     │ ──► Cleanup resources                         │
│  └──────────────────┘     Save state, dispose subscriptions          │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

## Command Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                        Command Flow                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  package.json ──────────────────────────────────────────────┐     │
│  "contributes": {                                              │     │
│    "commands": [{                                             │     │
│      "command": "myExt.hello",  ──────────────────────────────┤     │
│      "title": "Say Hello"              │                      │     │
│    }]                                 │                      │     │
│  }                                    ▼                      │     │
│                                  ┌────────────────────┐      │     │
│                                  │   activation()     │      │     │
│                                  │                    │      │     │
│                                  │  registerCommand() │      │     │
│                                  └─────────┬──────────┘      │     │
│                                            │                  │     │
│                                            ▼                  │     │
│                                  ┌────────────────────┐      │     │
│                                  │  Command Handler   │      │     │
│                                  │                    │      │     │
│                                  │  1. Validate       │      │     │
│                                  │  2. Execute        │      │     │
│                                  │  3. Handle errors  │      │     │
│                                  └────────────────────┘      │     │
│                                                                     │
│  User triggers (Ctrl+Shift+P) ─────────────────────────────────►    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

## Tree View Architecture

```typescript
// TreeDataProvider Pattern
export class MyTreeProvider implements vscode.TreeDataProvider<MyItem> {
  private onDidChangeTreeDataEmitter = new vscode.EventEmitter<MyItem | undefined>();

  // Event for tree changes
  readonly onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;

  getTreeItem(element: MyItem): vscode.TreeItem {
    return {
      id: element.id,
      label: element.label,
      iconPath: new vscode.ThemeIcon('folder'),
      collapsibleState: element.children.length > 0
        ? vscode.TreeItemCollapsibleState.Collapsed
        : vscode.TreeItemCollapsibleState.None,
      command: {
        command: 'myExtension.onItemClick',
        arguments: [element],
        title: 'Select Item'
      }
    };
  }

  getChildren(element?: MyItem): Thenable<MyItem[]> {
    if (!element) {
      return Promise.resolve(this.rootItems);
    }
    return Promise.resolve(element.children);
  }

  refresh(): void {
    this.onDidChangeTreeDataEmitter.fire();
  }
}
```

## Provider Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                    Language Providers                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Document (TextDocument)                                            │
│       │                                                              │
│       ▼                                                              │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                  Language Feature Providers                    │   │
│  │                                                                  │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │   │
│  │  │  Hover      │  │  Completion │  │  Definition │         │   │
│  │  │  Provider   │  │  Provider   │  │  Provider   │         │   │
│  │  │             │  │             │  │             │         │   │
│  │  │ provideHover│  │ provideComple│  │ provideDefi│         │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │   │
│  │                                                                  │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │   │
│  │  │  Signature  │  │  Formatting │  │  Diagnostics│         │   │
│  │  │  Provider   │  │  Provider   │  │  Provider   │         │   │
│  │  │             │  │             │  │             │         │   │
│  │  │ provideSign │  │ provideDocum│  │ provideDiag │         │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

## WebView Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                       WebView Communication                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Extension Side                       WebView Side                  │
│  ┌──────────────────┐                ┌──────────────────┐        │
│  │                  │                │                  │        │
│  │ createWebviewPanel()             │                  │        │
│  │       │         │                │                  │        │
│  │       │ postMessage()            │                  │        │
│  │       ▼         │                │                  │        │
│  │ ┌─────────────┐ │                │                  │        │
│  │ │  webview    │◄───────────────┼──────────────────┘        │
│  │ │  .html      │ │                │                   │        │
│  │ └─────────────┘ │                │                   │        │
│  │       │         │                │                   │        │
│  │       │ onDidReceiveMessage()  │                   │        │
│  │       ▼         │                │                   ▼        │
│  │ ┌─────────────┐ │                │ ┌─────────────┐  │        │
│  │ │  Message    │ │────────────────┼─►  window    │  │        │
│  │ │  Handler    │ │                │ │  .addEventLis│  │        │
│  │ │             │ │                │ │  tener      │  │        │
│  │ └─────────────┘ │                │ └─────────────┘  │        │
│  │                 │                │                  │        │
│  └─────────────────┘                └──────────────────┘        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

## State Management

```typescript
// Extension State Manager
class ExtensionState {
  private context: vscode.ExtensionContext;
  private state = new Map<string, unknown>();

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    this.loadState();
  }

  async loadState() {
    const data = await this.context.globalState.get<Record<string, unknown>>('state');
    if (data) {
      this.state = new Map(Object.entries(data));
    }
  }

  async saveState() {
    await this.context.globalState.update(
      'state',
      Object.fromEntries(this.state)
    );
  }

  set<T>(key: string, value: T) {
    this.state.set(key, value);
    this.saveState();
  }

  get<T>(key: string, defaultValue: T): T {
    return (this.state.get(key) as T) ?? defaultValue;
  }
}
```

## Multi-Root Workspace

```typescript
// Handle multiple workspace folders
function activate(context: vscode.ExtensionContext) {
  if (vscode.workspace.workspaceFolders) {
    vscode.workspace.workspaceFolders.forEach(folder => {
      console.log('Workspace folder:', folder.uri.fsPath);
    });
  }

  // Listen for workspace folder changes
  vscode.workspace.onDidChangeWorkspaceFolders(e => {
    e.added.forEach(folder => {
      console.log('Added:', folder.uri.fsPath);
    });

    e.removed.forEach(folder => {
      console.log('Removed:', folder.uri.fsPath);
    });
  });
}
```

## Extension Dependencies

```json
// package.json
{
  "extensionDependencies": [
    "publisher.extension-a",
    "publisher.extension-b"
  ]
}
```

```typescript
// Check if dependency is available
const depExtension = vscode.extensions.getExtension('publisher.extension-a');
if (depExtension && depExtension.isActive) {
  // Use dependency
}
```

## Debug Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Extension",
      "type": "extensionHost",
      "request": "launch",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--disable-extensions"
      ],
      "outFiles": ["${workspaceFolder}/out/**/*.js"],
      "preLaunchTask": "bun: compile"
    },
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test",
        "--disable-extensions"
      ],
      "outFiles": ["${workspaceFolder}/out/**/*.js"],
      "preLaunchTask": "bun: compile"
    }
  ]
}
```

## Package Script Architecture

```json
// package.json scripts
{
  "scripts": {
    "compile": "tsc -p ./",
    "watch": "tsc -p ./ -w",
    "lint": "eslint src --ext .ts",
    "test": "node ./out/test/runTest.js",
    "package": "vsce package",
    "publish": "vsce publish",
    "bump": "bun version patch && vsce publish"
  }
}
```

## Build Pipeline

```
┌────────────────────────────────────────────────────────────────────┐
│                         Build Pipeline                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Source (src/*.ts)                                                  │
│       │                                                             │
│       ▼                                                             │
│  ┌─────────────────┐                                               │
│  │   TypeScript    │ ──► type check, emit JS                      │
│  │   Compiler      │                                               │
│  └────────┬────────┘                                               │
│           │                                                          │
│           ▼                                                          │
│  ┌─────────────────┐                                               │
│  │   Output (out/) │ ──► compiled JS + source maps                 │
│  └────────┬────────┘                                               │
│           │                                                          │
│           ▼                                                          │
│  ┌─────────────────┐                                               │
│  │   vsce package  │ ──► create .vsix package                      │
│  └────────┬────────┘                                               │
│           │                                                          │
│           ▼                                                          │
│  ┌─────────────────┐                                               │
│  │   .vsix file    │                                               │
│  │   (extension)   │                                               │
│  └─────────────────┘                                               │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```