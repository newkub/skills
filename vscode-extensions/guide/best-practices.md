# Best Practices

## Project Structure

```
my-extension/
├── src/
│   ├── extension.ts       # Entry point
│   ├── commands/          # Command implementations
│   │   ├── index.ts
│   │   └── hello.ts
│   ├── providers/        # Tree, Completion, etc.
│   │   └── tree-provider.ts
│   ├── utils/            # Utilities
│   │   └── helpers.ts
│   └── types/           # TypeScript types
│       └── index.ts
├── test/
│   └── extension.test.ts
├── media/                # Icons and images
├── package.json
├── tsconfig.json
└── .vscode/
    ├── launch.json
    └── tasks.json
```

## TypeScript Best Practices

### Use Strict Mode

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### Use Interfaces for Types

```typescript
interface MyConfig {
  setting: string;
  enabled: boolean;
}

interface MyItem {
  id: string;
  label: string;
  children?: MyItem[];
}
```

### Export Types from Index

```typescript
// src/types/index.ts
export interface Config {
  key: string;
}

export type ItemType = 'a' | 'b' | 'c';
```

## Command Registration

### Use Named Functions

```typescript
// ❌ Bad
vscode.commands.registerCommand('ext.cmd', () => {
  vscode.window.showInformationMessage('Hello');
});

// ✅ Good
function showHello() {
  vscode.window.showInformationMessage('Hello');
}

vscode.commands.registerCommand('ext.cmd', showHello);
```

### Handle Errors

```typescript
async function myCommand() {
  try {
    await doSomething();
  } catch (error) {
    vscode.window.showErrorMessage(
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
}
```

## Memory Management

### Dispose Subscriptions

```typescript
export function activate(context: vscode.ExtensionContext) {
  // Register and track
  const disposables: vscode.Disposable[] = [];

  disposables.push(
    vscode.commands.registerCommand('ext.cmd', handler)
  );

  disposables.push(
    vscode.window.registerTreeDataProvider('view', provider)
  );

  // Add to context
  context.subscriptions.push(...disposables);
}
```

### Use CancellationToken

```typescript
vscode.languages.registerCompletionProvider(
  'javascript',
  {
    provideCompletionItems(doc, pos, token) {
      // Check for cancellation
      if (token.isCancellationRequested) {
        return [];
      }
      // Return results
    }
  }
);
```

## Performance

### Lazy Loading

```typescript
// ❌ Load everything on activation
export function activate() {
  const heavyModule = require('./heavy');
}

// ✅ Load when needed
async function handleCommand() {
  const heavyModule = await import('./heavy');
  heavyModule.doSomething();
}
```

### Use TreeView Efficiently

```typescript
export class MyProvider implements vscode.TreeDataProvider<Item> {
  // Cache children
  private cache = new Map<string, Item[]>();

  getChildren(element?: Item): Item[] | Thenable<Item[]> {
    if (!element) {
      return this.getRootItems();
    }
    return this.cache.get(element.id) || [];
  }
}
```

## Error Handling

### Wrap Async Operations

```typescript
async function withErrorHandling<T>(
  operation: () => Promise<T>,
  errorMessage: string
): Promise<T | undefined> {
  try {
    return await operation();
  } catch (error) {
    vscode.window.showErrorMessage(errorMessage);
    console.error(error);
    return undefined;
  }
}

// Usage
await withErrorHandling(
  () => fetchData(),
  'Failed to fetch data'
);
```

### Validate Inputs

```typescript
function validateConfig(config: unknown): Config {
  if (!config || typeof config !== 'object') {
    throw new Error('Invalid configuration');
  }

  const cfg = config as Record<string, unknown>;

  if (typeof cfg.setting !== 'string') {
    throw new Error('Setting must be a string');
  }

  return cfg as Config;
}
```

## Testing

### Use Mocks

```typescript
import * as vscode from 'vscode';
import * as assert from 'assert';

// Mock VS Code API
const mockWindow = {
  showInformationMessage: () => {},
  activeTextEditor: undefined
};
```

### Test Commands

```typescript
suite('Commands', () => {
  test('hello command shows message', async () => {
    let shown = false;

    // Mock window.showInformationMessage
    const original = vscode.window.showInformationMessage;
    vscode.window.showInformationMessage = () => { shown = true; };

    await vscode.commands.executeCommand('ext.hello');

    assert.ok(shown);

    // Restore
    vscode.window.showInformationMessage = original;
  });
});
```

## Configuration

### Use Workspace Configuration

```typescript
const config = vscode.workspace.getConfiguration('myExtension');

// Read
const value = config.get<string>('setting', 'default');

// Write
await config.update('setting', 'newValue', vscode.ConfigurationTarget.Global);
```

### Validate Configuration

```typescript
function getValidatedConfig() {
  const config = vscode.workspace.getConfiguration('myExtension');
  const value = config.get<string>('mode');

  if (!['simple', 'advanced'].includes(value)) {
    return 'simple'; // Default
  }

  return value;
}
```

## Debugging

### Add Logging

```typescript
import { log } from './logger';

export function activate(context: vscode.ExtensionContext) {
  log.info('Extension activated');

  context.subscriptions.push(
    vscode.commands.registerCommand('ext.cmd', () => {
      log.debug('Command executed');
      // ...
    })
  );
}
```

### Use Console Correctly

```typescript
// Avoid console.log in production
// Use output channel instead
const output = vscode.window.createOutputChannel('My Extension');

output.appendLine('Info message');
output.appendLine('Debug: ' + JSON.stringify(data));
```

## Documentation

### Document Public APIs

```typescript
/**
 * Registers a command with the extension.
 * @param commandId - Unique identifier for the command
 * @param handler - Function to execute when command is invoked
 * @returns Disposable that can be used to unregister the command
 */
export function registerCommand(
  commandId: string,
  handler: () => void
): vscode.Disposable {
  return vscode.commands.registerCommand(commandId, handler);
}
```

### Keep README Updated

```markdown
## Features
- Feature A
- Feature B

## Usage
1. Press Ctrl+Shift+P
2. Type "My Extension: Command"
3. Press Enter

## Configuration
- `myExtension.setting`: Description
```

## Security

### Sanitize User Input

```typescript
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML
    .trim()
    .slice(0, 1000); // Limit length
}
```

### Validate File Paths

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

## Packaging

### Optimize Bundle Size

```json
// tsconfig.json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "exclude": ["**/*.test.ts", "**/test/**"]
}
```

### Use Webpack for Bundling

```javascript
// webpack.config.js
module.exports = {
  entry: './src/extension.ts',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'out')
  },
  externals: {
    vscode: 'commonjs vscode'
  }
};
```