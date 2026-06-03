# Integration

## IDE Integration

### VS Code Compatibility

Cursor is built on the VS Code codebase, so most VS Code extensions work seamlessly:

| Extension Category | Compatible | Notes |
|-------------------|------------|-------|
| Syntax highlighting | ✅ | Full support |
| Linters/Formatters | ✅ | ESLint, Prettier, etc. |
| Debuggers | ✅ | Full support |
| Language servers | ✅ | LSP compatible |
| Themes | ✅ | All VS Code themes |

### Key Bindings

| Action | Cursor | VS Code |
|--------|--------|---------|
| Command Palette | `Ctrl+Shift+P` | `Ctrl+Shift+P` |
| AI Command | `Ctrl+K` | N/A |
| AI Chat | `Ctrl+L` | N/A |
| Inline AI | `Ctrl+I` | N/A |

## Version Control Integration

### Git Integration

```bash
# Cursor integrates with Git natively
# Use the Source Control panel (Ctrl+Shift+G)
```

| Feature | Status |
|---------|--------|
| Visual diff | ✅ |
| Branch switching | ✅ |
| Staging changes | ✅ |
| Commit history | ✅ |
| Merge conflicts | ✅ |

### GitHub Integration

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "GitHub: Clone"
3. Enter repository URL
4. Select destination folder

## Terminal Integration

### Built-in Terminal

- **Toggle**: `` Ctrl+` ``
- **Split**: `Ctrl+Shift+` `` ` ``
- **New**: `Ctrl+Shift+C`

### Custom Shells

Cursor respects system shell preferences:
- Windows: PowerShell/CMD
- macOS: Terminal/zsh
- Linux: Terminal/bash

## Project Management

### Workspace Files

```
.vscode/
├── settings.json      # Workspace settings
├── launch.json         # Debug configurations
├── tasks.json          # Task definitions
└── extensions.json     # Recommended extensions
```

### Multi-root Workspaces

```json
{
  "folders": [
    { "path": "client" },
    { "path": "server" },
    { "path": "packages/shared" }
  ]
}
```