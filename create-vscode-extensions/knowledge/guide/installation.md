# Installation

## Requirements

- Visual Studio Code 1.60+
- Node.js 18+
- npm or yarn
- TypeScript (included with VS Code extension development)

## Install Yeoman and VS Code Generator

```bash
npm install -g yo generator-code
```

## Create New Extension

### Using Yeoman Generator

```bash
# Interactive creation
yo code

# Choose "New Extension (TypeScript)"

# Fill in:
# - Extension name: my-extension
# - TypeScript: Yes
# - Initialize: Yes
```

### Manual Setup

```bash
# Create project directory
mkdir my-vscode-extension
cd my-vscode-extension

# Initialize npm
npm init -y

# Install VS Code API types
npm install --save-dev @types/vscode

# Install TypeScript
npm install --save-dev typescript

# Create tsconfig.json
npx tsc --init
```

## Project Structure

```
my-vscode-extension/
├── .vscode/
│   ├── launch.json       # Debug configuration
│   └── tasks.json        # Build tasks
├── src/
│   └── extension.ts      # Extension entry point
├── test/
│   └── extension.test.ts
├── media/
│   └── icon.png          # Extension icon (128x128)
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript config
├── vsc-extension-quickstart.md
└── README.md
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./out",
    "rootDir": "./src",
    "sourceMap": true,
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

## package.json

```json
{
  "name": "my-vscode-extension",
  "displayName": "My Extension",
  "version": "1.0.0",
  "publisher": "my-publisher",
  "description": "My VS Code extension description",
  "engines": {
    "vscode": "^1.60.0"
  },
  "categories": ["Other"],
  "main": "./out/extension.js",
  "activationEvents": [],
  "contributes": {
    "commands": [{
      "command": "myExtension.hello",
      "title": "Hello World"
    }]
  },
  "scripts": {
    "compile": "tsc -p ./",
    "watch": "tsc -p ./ -w",
    "test": "node ./out/test/runTest.js"
  },
  "devDependencies": {
    "@types/vscode": "^1.60.0",
    "@types/node": "^18.0.0",
    "@types/mocha": "^10.0.0",
    "typescript": "^5.0.0",
    "mocha": "^10.0.0"
  }
}
```

## Create Extension Entry Point

```typescript
// src/extension.ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "my-vscode-extension" is now active!');

  // Register command
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

## Debug Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run Extension",
      "type": "extensionHost",
      "request": "launch",
      "args": ["--extensionDevelopmentPath=${workspaceFolder}"],
      "outFiles": ["${workspaceFolder}/out/**/*.js"],
      "preLaunchTask": "${defaultBuildTask}"
    }
  ]
}
```

## Run Development Mode

```bash
# Compile TypeScript
npm run compile

# Or watch for changes
npm run watch

# Press F5 in VS Code to start debugging
```

## Install Locally (Development)

```bash
# Press F5 to launch extension in debug mode
# Or use:
code --extensionDevelopmentPath=/path/to/extension
```

## Run Tests

### Test Setup

```typescript
// test/extension.test.ts
import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  test('Sample test', () => {
    assert.strictEqual([1, 2, 3].indexOf(5), -1);
  });
});
```

### Run Test Command

```bash
npm test
```

## Install Extension from .vsix

```bash
# Install
code --install-extension my-extension.vsix

# Uninstall
code --uninstall-extension my-publisher.my-extension
```

## Publish Extension

### Install vsce

```bash
npm install -g vsce
```

### Create Publisher

1. Go to https://marketplace.visualstudio.com/
2. Sign in with Microsoft account
3. Create a publisher
4. Get your publisher ID

### Package and Publish

```bash
# Login
vsce login <publisher>

# Package
vsce package

# Publish
vsce publish
```

## Update Extension

```bash
# Update version in package.json
# Package and publish
vsce publish patch  # 1.0.0 -> 1.0.1
vsce publish minor  # 1.0.0 -> 1.1.0
vsce publish major  # 1.0.0 -> 2.0.0
```

## Uninstall Extension

```bash
# From VS Code
# 1. Open Extensions view (Ctrl+Shift+X)
# 2. Find your extension
# 3. Click Uninstall

# From command line
code --uninstall-extension publisher.extension-name
```

## Resources

| Resource | URL |
|----------|-----|
| VS Code API Docs | https://code.visualstudio.com/api |
| Extension Guide | https://code.visualstudio.com/api/get-started/extension-anatomy |
| Contribution Points | https://code.visualstudio.com/api/references/contribution-points |
| Testing | https://code.visualstudio.com/api/working-with-extensions/testing-extension |