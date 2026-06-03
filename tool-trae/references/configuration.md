# Configuration Reference

## Purpose

Complete configuration options for Trae IDE

## Settings File Locations

| File | Path | Purpose |
|------|------|---------|
| `settings.json` | User folder | User preferences |
| `keybindings.json` | User folder | Keyboard shortcuts |
| `extensions.json` | User folder | Extension list |

## AI Configuration

### Model Settings

```json
{
  "trae.ai.model": "claude-3-5-sonnet",
  "trae.ai.temperature": 0.7,
  "trae.ai.maxTokens": 4096
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `model` | string | `claude-3-5-sonnet` | AI model to use |
| `temperature` | number | `0.7` | Response creativity |
| `maxTokens` | number | `4096` | Max response length |

### Available Models

| Model | Description |
|-------|-------------|
| `claude-3-5-sonnet` | Balanced, default |
| `claude-3-7` | Enhanced reasoning |

## Builder Mode Configuration

```json
{
  "trae.builder.previewChanges": true,
  "trae.builder.autoSavePlan": true,
  "trae.builder.confirmBeforeExecute": true
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `previewChanges` | boolean | `true` | Show preview before changes |
| `autoSavePlan` | boolean | `true` | Auto-save builder plans |
| `confirmBeforeExecute` | boolean | `true` | Require confirmation |

## Chat Configuration

```json
{
  "trae.chat.attachScreenshots": true,
  "trae.chat.attachTerminalOutput": true,
  "trae.chat.streamResponses": true
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `attachScreenshots` | boolean | `true` | Allow screenshot attachments |
| `attachTerminalOutput` | boolean | `true` | Allow terminal attachment |
| `streamResponses` | boolean | `true` | Stream AI responses |

## MCP Configuration

```json
{
  "trae.mcp.enabled": true,
  "trae.mcp.tools": ["figma"]
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `enabled` | boolean | `true` | Enable MCP integration |
| `tools` | array | `[]` | Enabled MCP tools |

## Editor Configuration

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `fontSize` | number | `14` | Editor font size |
| `tabSize` | number | `2` | Tab indentation spaces |
| `wordWrap` | string | `"on"` | Word wrap mode |
| `minimap.enabled` | boolean | `true` | Show minimap |

## Terminal Configuration

```json
{
  "terminal.integrated.fontSize": 13,
  "trae.terminal.autoSuggestions": true
}
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `fontSize` | number | `13` | Terminal font size |
| `autoSuggestions` | boolean | `true` | AI command suggestions |

## Summary

| Category | Key Config |
|----------|------------|
| **AI** | Model, temperature, maxTokens |
| **Builder** | Preview, autoSave, confirm |
| **Chat** | Attachments, streaming |
| **MCP** | Enabled, tools |
| **Editor** | Font, tabs, wrap |
| **Terminal** | Font, suggestions |