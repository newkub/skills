# Configuration

## package.json Structure

```json
{
  "name": "extension-name",
  "displayName": "Extension Display Name",
  "version": "1.0.0",
  "publisher": "publisher-id",
  "description": "Extension description",
  "engines": {
    "vscode": "^1.60.0"
  },
  "main": "./out/extension.js",
  "categories": ["Other"],
  "activationEvents": [],
  "contributes": {}
}
```

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| name | string | Extension identifier (unique) |
| version | string | SemVer format |
| engines.vscode | string | Compatible VS Code version |
| main | string | Entry point file |

## Commands

```json
"contributes": {
  "commands": [
    {
      "command": "extension.hello",
      "title": "Say Hello",
      "category": "My Extension",
      "icon": {
        "light": "media/light-icon.png",
        "dark": "media/dark-icon.png"
      }
    }
  ]
}
```

## Keybindings

```json
"contributes": {
  "keybindings": [
    {
      "command": "extension.hello",
      "key": "ctrl+shift+f",
      "mac": "cmd+shift+f",
      "linux": "ctrl+shift+f",
      "when": "editorTextFocus"
    }
  ]
}
```

## Configuration

```json
"contributes": {
  "configuration": {
    "title": "My Extension",
    "properties": {
      "myExtension.setting": {
        "type": "string",
        "default": "defaultValue",
        "description": "Setting description",
        "scope": "resource"
      },
      "myExtension.enableFeature": {
        "type": "boolean",
        "default": true
      },
      "myExtension.numberSetting": {
        "type": "number",
        "default": 10,
        "minimum": 0,
        "maximum": 100
      },
      "myExtension.arraySetting": {
        "type": "array",
        "items": { "type": "string" },
        "default": []
      }
    }
  }
}
```

## Configuration Schemas

```json
"contributes": {
  "configurationDefaults": {
    "[typescript]": {
      "myExtension.setting": "typescript-value"
    }
  },
  "configuration": {
    "type": "object",
    "title": "My Extension",
    "properties": {
      "myExtension.colorTheme": {
        "type": "string",
        "enum": ["light", "dark", "auto"],
        "default": "auto"
      }
    }
  }
}
```

## Menu Items

```json
"contributes": {
  "menus": {
    "commandPalette": [
      {
        "command": "extension.hello",
        "when": "editorFocus"
      }
    ],
    "editor/context": [
      {
        "command": "extension.format",
        "when": "editorHasSelection"
      }
    ],
    "explorer/context": [
      {
        "command": "extension.open",
        "when": "resourceExtname == .json"
      }
    ]
  }
}
```

## Views

### Tree View

```json
"contributes": {
  "views": {
    "explorer": [
      {
        "id": "myExtension.view",
        "name": "My View",
        "icon": "media/view-icon.svg"
      }
    ]
  }
}
```

### View Container

```json
"contributes": {
  "viewsContainers": {
    "activitybar": [
      {
        "id": "myExtension.container",
        "title": "My Container",
        "icon": "media/container-icon.svg"
      }
    ]
  },
  "views": {
    "myExtension.container": [
      {
        "id": "myExtension.view",
        "name": "My View"
      }
    ]
  }
}
```

## Themes

### Color Theme

```json
"contributes": {
  "themes": [
    {
      "id": "myTheme",
      "label": "My Theme",
      "uiTheme": "vs-dark",
      "path": "themes/my-theme.json"
    }
  ]
}
```

### Icon Theme

```json
"contributes": {
  "iconThemes": [
    {
      "id": "myIconTheme",
      "label": "My Icons",
      "path": "icon-theme.json"
    }
  ]
}
```

## Language Configuration

```json
"contributes": {
  "languages": [
    {
      "id": "myLang",
      "aliases": ["My Language"],
      "extensions": [".ml"],
      "configuration": "./language-configuration.json"
    }
  ]
}
```

## Snippets

```json
"contributes": {
  "snippets": [
    {
      "language": "javascript",
      "path": "./snippets/javascript.json"
    }
  ]
}
```

## Debuggers

```json
"contributes": {
  "debuggers": [
    {
      "type": "myDebugger",
      "label": "My Debugger",
      "languages": ["javascript"],
      "configurationAttributes": {
        "launch": {
          "required": ["program"],
          "properties": {
            "program": {
              "type": "string",
              "description": "Path to program"
            }
          }
        }
      }
    }
  ]
}
```

## Extension Dependencies

```json
"extensionDependencies": ["publisher.extension-name"]
```

## Webpack Configuration

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'extension.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    mainFields: ['main'],
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  externals: {
    vscode: 'commonjs vscode'
  }
};
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| NODE_ENV | Environment (development/production) |
| VSCODE_DEBUG | Debug mode flag |
| VSCODE_VERSION | VS Code version |

## Package Scripts

```json
"scripts": {
  "compile": "tsc -p ./",
  "watch": "tsc -p ./ -w",
  "package": "vsce package",
  "publish": "vsce publish",
  "lint": "eslint src/**/*.ts"
}
```

## Activation Events Reference

| Event | Description |
|-------|-------------|
| onLanguage:langId | When file with language opens |
| onCommand:commandId | When command is invoked |
| onView:viewId | When view becomes visible |
| onDebugInitialType | When debug type activates |
| workspaceContains:pattern | Files matching pattern exist |
| onFileSystem:scheme | File system scheme access |
| onWebviewPanel:viewType | When webview panel created |