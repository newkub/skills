# CLI Reference

## Purpose

Terminal commands and shortcuts available in Trae IDE

## Built-in Terminal

### Open Terminal

| Action | Shortcut |
|--------|----------|
| Toggle Terminal | `` Ctrl+` `` |
| New Terminal | `Ctrl+Shift+`` |

### Terminal Commands

```bash
# Standard shell commands work as expected
ls -la
cd <folder>
npm install
git status

# Trae-specific features available via UI
```

## AI Command Suggestions

### Request Commands via Chat

```text
# In Trae Chat
"Show me how to install dependencies"
"What command creates a new React component?"
"How do I run the tests?"

# AI will suggest commands
# Options: Paste to terminal OR Run directly
```

### Common Use Cases

| Use Case | Prompt Example |
|----------|----------------|
| Install deps | "install npm dependencies" |
| Run project | "how to start dev server" |
| Create file | "create a new component" |
| Run tests | "run unit tests" |

## Shell Integration

### Default Shells

| OS | Default Shell |
|----|---------------|
| Windows | PowerShell / CMD |
| macOS | Zsh |
| Linux | Bash / Zsh |

### Shell Customization

```json
{
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.fontSize": 13
}
```

## Summary

| Command/Action | Description |
|----------------|-------------|
| `Ctrl+\`` | Toggle terminal |
| Chat suggestions | AI-powered command help |