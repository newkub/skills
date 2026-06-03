# Programmatic API

Programmatic usage of Cursor

## CLI API

```bash
# Open directory
cursor .

# Open specific file
cursor index.ts

# Open multiple files
cursor src/index.ts src/app.ts

# Open in new window
cursor --new-window .
```

## Settings API

```json
{
  "cursor.AIModel": "pro",
  "cursor.AIEnabled": true,
  "cursor.contextLevel": "project"
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `CURSOR_API_KEY` | API key for custom model |
| `CURSOR_DEBUG` | Debug mode |
| `CURSOR_LICENSE_KEY` | License key |

## Model Options

| Model | Speed | Quality | Best for |
|-------|-------|--------|----------|
| **Fast** | Fast | Good | Quick completions |
| **Pro** | Medium | Better | General use |
| **Max** | Slow | Best | Complex tasks |

## Context Levels

| Level | Description |
|-------|-------------|
| `file` | Only current file |
| `project` | Full project context |
| `workspace` | Workspace-wide context |

---

For more details, see [Cursor API Documentation](https://cursor.sh/docs/api).
