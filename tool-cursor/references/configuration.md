# Configuration Reference

Configuration options for Cursor

## Settings File

Open Settings Editor (`Ctrl+`):

```json
{
  "cursor.AIModel": "pro",
  "cursor.AIEnabled": true,
  "editor.tabSize": 2,
  "editor.fontSize": 14
}
```

## AI Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `cursor.AIModel` | `string` | "pro" | AI model (fast, pro, max) |
| `cursor.AIEnabled` | `boolean` | true | Enable AI features |
| `cursor.autocompleteEnabled` | `boolean` | true | Enable autocomplete |
| `cursor.inlineAIEnabled` | `boolean` | true | Enable inline AI |
| `cursor.contextLevel` | `string` | "project" | Context awareness level |

## Editor Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `editor.tabSize` | `number` | 2 | Tab size |
| `editor.fontSize` | `number` | 14 | Font size |
| `editor.fontFamily` | `string` | "monospace" | Font family |
| `editor.lineNumbers` | `string` | "on" | Line number display |

## Keyboard Shortcuts

Customize in `keybindings.json`:

```json
[
  {
    "key": "ctrl+k",
    "command": "cursor.AICommand",
    "when": "editorTextFocus"
  }
]
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CURSOR_API_KEY` | API key for custom model |
| `CURSOR_DEBUG` | Enable debug mode |
| `CURSOR_LICENSE_KEY` | License key |

---

For full configuration options, see [Cursor Documentation](https://cursor.sh/docs).
