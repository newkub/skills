# Configuration Reference

Complete configuration options for Qoder.

## Config File Location

| Platform | Path |
|----------|------|
| Windows | `%USERPROFILE%\.qoder\config.json` |
| macOS/Linux | `~/.qoder/config.json` |

## Top-Level Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `version` | string | `"1.0"` | Config file version |
| `cloud.enabled` | boolean | `true` | Enable cloud features |
| `cloud.defaultRegion` | string | `"us-east-1"` | Default cloud region |
| `cloud.timeout` | number | `30000` | Request timeout (ms) |

## Editor Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `editor.defaultAction` | string | `"tab"` | Action on Tab key |
| `editor.suggestionDelay` | number | `300` | Delay before showing (ms) |
| `editor.maxLines` | number | `50` | Max suggestion lines |
| `editor.theme` | string | `"system"` | UI theme |
| `editor.language` | string | `"en"` | UI language |
| `editor.notifications` | boolean | `true` | Enable notifications |

## Context Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `context.maxFiles` | number | `10000` | Max files to index |
| `context.excludePatterns` | array | `["node_modules", "dist"]` | Patterns to exclude |
| `context.includeHidden` | boolean | `false` | Include hidden files |
| `context.indexInterval` | number | `5000` | Index update interval (ms) |
| `context.depth` | string | `"project"` | Analysis depth |

## Agent Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `agent.maxSteps` | number | `100` | Max agent steps |
| `agent.timeout` | number | `300000` | Agent timeout (ms) |
| `agent.tools` | array | `["search", "read", "edit", "bash"]` | Enabled tools |

## MCP Servers

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["@org/mcp-package"],
      "env": {
        "KEY": "value"
      }
    }
  }
}
```

## Vaults

```json
{
  "vaults": {
    "my-vault": {
      "organization": "team-name"
    }
  }
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `QODER_API_KEY` | API authentication key |
| `QODER_CONFIG_PATH` | Config file location |
| `QODER_LOG_LEVEL` | Logging: debug, info, warn, error |
| `QODER_CACHE_DIR` | Cache directory path |

## Project Rules

Place `.qoder/rules/*.md` files in project root:

```
.qoder/
└── rules/
    ├── naming.md
    ├── style.md
    └── patterns.md
```

## Keyboard Shortcuts

### Editor (Windows/Linux)

| Action | Shortcut |
|--------|----------|
| Accept Suggestion | Tab |
| Dismiss | Esc |
| Open Chat | Ctrl+Shift+M |
| Next Suggestion | Alt+] |
| Previous Suggestion | Alt+[ |

### Editor (macOS)

| Action | Shortcut |
|--------|----------|
| Accept Suggestion | Tab |
| Dismiss | Esc |
| Open Chat | Cmd+Shift+M |
| Next Suggestion | Option+] |
| Previous Suggestion | Option+[ |