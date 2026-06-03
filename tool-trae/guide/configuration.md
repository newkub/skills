# Configuration

## Purpose

การตั้งค่า Trae IDE

## Settings Location

```text
# วิธีเปิด Settings
File → Preferences → Settings

# หรือใช้ Command Palette
Ctrl+Shift+P → "Open Settings"
```

## AI Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Default Model** | AI model ที่ใช้ | Claude 3.5 Sonnet |
| **Temperature** | Creativity level | 0.7 |
| **Max Tokens** | Response length | 4096 |

### Model Selection

```text
Settings → AI → Model

Options:
├── Claude 3.5 Sonnet (balanced)
├── Claude 3.7 (enhanced reasoning)
└── [Future models]
```

## Editor Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Font Size** | Editor font size | 14 |
| **Tab Size** | Indentation spaces | 2 |
| **Word Wrap** | Wrap long lines | on |
| **Minimap** | Show code minimap | on |

## Theme Settings

```text
Settings → Workbench → Appearance → Color Theme

Available:
├── Dark (default)
├── Light
├── High Contrast
└── [Custom themes from VS Code marketplace]
```

## Keyboard Shortcuts

| Category | Setting | Description |
|----------|---------|-------------|
| AI Chat | `Ctrl+Shift+L` | Open chat panel |
| Builder | `Ctrl+B` | Toggle builder mode |
| Quick Chat | `Ctrl+I` | Quick inline chat |
| Command | `Ctrl+Shift+P` | Command palette |

## Terminal Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Shell** | Default terminal | OS default |
| **Font** | Terminal font size | 13 |
| **Auto Suggestions** | AI command suggestions | on |

## AI-Specific Configurations

### Builder Mode Settings

```json
{
  "trae.builder": {
    "previewChanges": true,
    "autoSavePlan": true,
    "confirmBeforeExecute": true
  }
}
```

### Chat Settings

```json
{
  "trae.chat": {
    "attachScreenshots": true,
    "attachTerminalOutput": true,
    "streamResponses": true
  }
}
```

### MCP Configuration

```json
{
  "trae.mcp": {
    "enabled": true,
    "tools": ["figma", "custom"]
  }
}
```

## Settings Files

| File | Location | Description |
|------|----------|-------------|
| **settings.json** | User folder | User preferences |
| **keybindings.json** | User folder | Custom shortcuts |
| **extensions.json** | User folder | Extension list |

## Import/Export Settings

```text
# Export
File → Preferences → Settings → Export

# Import
File → Preferences → Settings → Import
```

## Summary

| Category | Key Settings |
|----------|--------------|
| **AI** | Model selection, temperature |
| **Editor** | Font, tab size, theme |
| **Shortcuts** | Chat, Builder, Commands |
| **Terminal** | Shell, AI suggestions |
| **MCP** | Tool integrations |