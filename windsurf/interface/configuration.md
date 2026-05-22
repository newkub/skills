# Windsurf Configuration

Configure Windsurf IDE and Cascade behavior.

## Settings Location

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Windsurf` |
| Windows | `%APPDATA%\Windsurf` |
| Linux | `~/.config/Windsurf` |

## Settings File

Open settings: `Cmd+,` (macOS) / `Ctrl+,` (Windows/Linux)

## AI Configuration

### Cascade Settings

```json
{
  "cascade": {
    "autoRunTerminal": true,
    "allowFileCreation": true,
    "contextWindow": "full",
    "model": "premium"
  }
}
```

| Setting | Type | Description |
|---------|------|-------------|
| `autoRunTerminal` | boolean | Auto-execute terminal commands |
| `allowFileCreation` | boolean | Allow creating new files |
| `contextWindow` | string | "full" / "medium" / "minimal" |
| `model` | string | "premium" / "default" |

### Autocomplete Settings

```json
{
  "autocomplete": {
    "model": "default",
    "suggestions": "inline"
  }
}
```

| Setting | Type | Description |
|---------|------|-------------|
| `model` | string | "default" (optimized for speed) |
| `suggestions` | string | "inline" / "popup" |

### Model Selection

| Feature | Default | Premium |
|---------|---------|---------|
| Cascade | Basic models | GPT-4o, Claude, Sonnet |
| Autocomplete | Fast model | N/A |

## Project-Level Configuration

### .windsurfrules

Create in project root for project-specific AI behavior.

```markdown
# .windsurfrules

## Project Overview
- Next.js 14 with App Router
- TypeScript strict mode
- Tailwind CSS

## Code Style
- Functional components with hooks
- Explicit prop types
- Use `cn()` utility

## File Structure
- src/components/
- src/app/api/
- prisma/

## Testing
- Vitest for unit tests
- Testing Library
```

### .windsurfignore

Exclude files from AI context:

```
node_modules/
.git/
dist/
.env
*.log
```

## Global Rules

### User Settings

```json
{
  "rules": [
    "Use TypeScript strict mode",
    "Prefer const over let",
    "No console.log in production",
    "Add JSDoc to public functions"
  ]
}
```

## Cascade Customization

### Workflows

Create reusable workflows:

```markdown
# Workflow: Brainstorm

## Trigger
/type /brainstorm

## Steps
1. Analyze current state
2. Identify improvements
3. Consider dependencies
4. Propose actionable steps
```

### Rules

Define specific behaviors:

```markdown
# Rule: Code Review

## When
User requests code review

## Do
1. Check for security issues
2. Verify test coverage
3. Review naming conventions
4. Suggest improvements
```

## MCP Configuration

### Connecting Tools

```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"]
      },
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
      }
    }
  }
}
```

### Available MCP Servers

| Server | Purpose |
|--------|---------|
| GitHub | Code, PRs, issues |
| Filesystem | File operations |
| Slack | Team communication |
| Figma | Design integration |
| Stripe | Payment processing |

## Theme Configuration

### Colors

```json
{
  "workbench.colorTheme": "Dark+ (Default)",
  "editor.colorDecorators": true
}
```

### Font

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "JetBrains Mono, Consolas, monospace",
  "editor.fontLigatures": true
}
```

## Keyboard Shortcuts

### Custom Keybindings

```json
{
  "keybindings": [
    {
      "key": "cmd+shift+c",
      "command": "windsurf.cascade.open"
    }
  ]
}
```

## Extensions

### Recommended Extensions

| Extension | Purpose |
|-----------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| GitLens | Git integration |
| Error Lens | Inline error display |

## Workspace Settings

### workspace.codeActions

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  }
}
```

### workspace AI Settings

```json
{
  "windsurf.ai.context": {
    "includePatterns": ["src/**", "lib/**"],
    "excludePatterns": ["node_modules/**", "dist/**"],
    "maxFileSize": "100kb"
  }
}
```

## Troubleshooting Configuration

### Reset Settings

1. Open Command Palette
2. Run "Preferences: Open User Settings (JSON)"
3. Delete and restart

### Export/Import Settings

1. Export: Settings → Sync → "Export"
2. Import: Settings → Sync → "Import"