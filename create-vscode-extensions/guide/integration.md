# Integration

## External APIs

### HTTP Requests

```typescript
import * as vscode from 'vscode';
import * as http from 'http';

async function fetchFromAPI<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Invalid JSON'));
        }
      });
    }).on('error', reject);
  });
}

// Usage with error handling
async function loadData() {
  try {
    const data = await fetchFromAPI<Data>('https://api.example.com/data');
    vscode.window.showInformationMessage(`Loaded ${data.length} items`);
  } catch (error) {
    vscode.window.showErrorMessage('Failed to load data');
  }
}
```

### Using node-fetch

```bash
npm install node-fetch
```

```typescript
import fetch from 'node-fetch';

async function apiFetch(url: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' })
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
```

## File System

### Read/Write Files

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

### Watch Files

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

## Child Processes

### Run Shell Commands

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
  const output = await runCommand('npm run build');
  vscode.window.showInformationMessage('Build complete');
}
```

### Run with Progress

```typescript
await vscode.window.withProgress(
  {
    location: vscode.ProgressLocation.Notification,
    title: 'Running build...',
    cancellable: true
  },
  async (progress) => {
    progress.report({ message: 'Installing...' });
    await runCommand('npm install');

    progress.report({ message: 'Building...' });
    await runCommand('npm run build');

    progress.report({ message: 'Done!', increment: 100 });
  }
);
```

## VS Code Extensions

### Communicate with Other Extensions

```typescript
// Execute command from another extension
await vscode.commands.executeCommand('otherExtension.command');

// Listen for extension activation
vscode.extensions.onDidChange(() => {
  const ext = vscode.extensions.getExtension('publisher.extension-name');
  if (ext) {
    console.log('Extension available');
  }
});
```

## Settings

### Access Extension Settings

```typescript
const config = vscode.workspace.getConfiguration('myExtension');

// Get value
const enabled = config.get<boolean>('enabled', true);
const threshold = config.get<number>('threshold', 10);

// Set value
await config.update('enabled', false, vscode.ConfigurationTarget.Global);
```

### Watch Configuration Changes

```typescript
vscode.workspace.onDidChangeConfiguration(e => {
  if (e.affectsConfiguration('myExtension.setting')) {
    const config = vscode.workspace.getConfiguration('myExtension');
    const value = config.get('setting');
    // Reload configuration
  }
});
```

## Environment

### Access Environment Variables

```typescript
import * as process from 'process';

// In extension
console.log(process.env.MY_VAR);

// Or via VS Code env
const extPath = vscode.extensions.getExtension('publisher.ext')?.extensionPath;
```

## WebView Communication

### Send Messages to WebView

```typescript
const panel = vscode.window.createWebviewPanel(
  'myPanel',
  'My Panel',
  vscode.ViewColumn.One,
  {}
);

// Send message
panel.webview.postMessage({ type: 'update', data: someData });

// Listen for response
panel.webview.onDidReceiveMessage(msg => {
  if (msg.type === 'response') {
    console.log('Got response:', msg.payload);
  }
});
```

### WebView Script

```html
<script>
  const vscode = acquireVsCodeApi();

  // Listen for messages from extension
  window.addEventListener('message', event => {
    const message = event.data;
    if (message.type === 'update') {
      document.getElementById('content').textContent = message.data;
    }
  });

  // Send message to extension
  document.getElementById('btn').onclick = () => {
    vscode.postMessage({ type: 'click', value: 'hello' });
  };
</script>
```

## Language Server

### Register Language Server

```json
"contributes": {
  "server": {
    "runtime": "node",
    "args": ["--node-lib-path", "${workspaceFolder}/lib"]
  }
}
```

## Debug Adapter

### Custom Debug Adapter

```typescript
import * as vscode from 'vscode';
import * as debug from 'vscode-debugadapter';

class MyDebugSession extends debug.DebugSession {
  protected initializeRequest(
    response: debug.InitializeResponseArguments,
    args: debug.Capabilities
  ): void {
    this.sendResponse(response);
  }
}
```

## Terminal Integration

### Create Terminal

```typescript
const terminal = vscode.window.createTerminal('My Terminal');
terminal.sendText('echo "Hello"');
terminal.show();

// Listen for close
terminal.processId.then(pid => {
  console.log(`Terminal PID: ${pid}`);
});
```

### Send Commands

```typescript
const terminals = vscode.window.terminals;
const myTerminal = terminals.find(t => t.name === 'My Terminal');

if (myTerminal) {
  myTerminal.sendText('npm run build');
  myTerminal.show();
}
```

## Notifications

### Show with Actions

```typescript
const choice = await vscode.window.showInformationMessage(
  'Continue?',
  { modal: true },
  'Yes',
  'No',
  'Cancel'
);

if (choice === 'Yes') {
  // Continue
} else if (choice === 'No') {
  // Alternative
}
```

## Output Channel

### Log to Output Panel

```typescript
const output = vscode.window.createOutputChannel('My Extension');

// Append messages
output.appendLine('Info message');
output.appendLine('Debug: ' + JSON.stringify(data));

// Show channel
output.show(true); // preserve focus
```

## Progress Bar

### Long Running Tasks

```typescript
await vscode.window.withProgress(
  {
    location: vscode.ProgressLocation.Progressbar,
    title: 'Processing files',
    cancellable: true
  },
  async (progress, token) => {
    const files = await getFiles();

    for (let i = 0; i < files.length; i++) {
      if (token.isCancellationRequested) {
        break;
      }

      await processFile(files[i]);

      progress.report({
        message: `Processing ${i + 1}/${files.length}`,
        increment: (i / files.length) * 100
      });
    }
  }
);
```

## Quick Picks

### Async Data

```typescript
async function showAsyncPicker() {
  const items = await fetchItems();

  const selected = await vscode.window.showQuickPick(
    items.map(item => ({
      label: item.name,
      description: item.description,
      detail: item.id
    })),
    {
      placeHolder: 'Select an item',
      matchOnDescription: true,
      matchOnDetail: true
    }
  );

  if (selected) {
    console.log('Selected:', selected.detail);
  }
}
```
