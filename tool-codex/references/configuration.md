# Configuration Reference

## Global Configuration

Codex reads config from `~/.codex/config.json`.

```json
{
  "model": "gpt-4o",
  "temperature": 0.7,
  "maxTokens": 4096,
  "timeout": 120,
  "theme": "auto",
  "editor": "auto",
  "shell": "auto"
}
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `model` | string | `gpt-4o` | LLM model to use |
| `temperature` | number | `0.7` | Response creativity (0-2) |
| `maxTokens` | number | `4096` | Maximum response length |
| `timeout` | number | `120` | Request timeout in seconds |
| `theme` | string | `auto` | UI theme: `auto`, `light`, `dark` |
| `editor` | string | `auto` | Default editor for edits |
| `shell` | string | `auto` | Default shell for commands |
| `apiKey` | string | - | OpenAI API key |
| `baseUrl` | string | - | Custom API endpoint |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_BASE_URL` | Custom API base URL |
| `CODEX_CONFIG_PATH` | Custom config file path |
| `CODEX_LOG_LEVEL` | Log level: `debug`, `info`, `warn`, `error` |
| `CODEX_TIMEOUT` | Default timeout in seconds |
| `CODEX_MODEL` | Override default model |

## Project Configuration

Create `.codex.json` in project root for local settings:

```json
{
  "project": {
    "name": "my-project",
    "language": "typescript",
    "exclude": ["node_modules", "dist", ".git"],
    "include": ["src/**"]
  },
  "codex": {
    "model": "gpt-4-turbo",
    "temperature": 0.5,
    "maxTokens": 8192
  }
}
```

## Model Options

| Model | Speed | Cost | Use Case |
|-------|-------|------|----------|
| `gpt-4o` | Medium | High | General purpose |
| `gpt-4-turbo` | Fast | Medium | Fast responses |
| `gpt-3.5-turbo` | Fastest | Low | Simple tasks |
| `claude-3-5-sonnet` | Medium | High | Complex reasoning |

## Security Configuration

```json
{
  "security": {
    "allowDangerousCommands": false,
    "confirmBeforeDelete": true,
    "confirmBeforeExec": true,
    "maxFileSize": "10MB",
    "allowedCommands": ["git", "npm", "node"]
  }
}
```

## Theme Configuration

```json
{
  "theme": {
    "mode": "auto",
    "colors": {
      "primary": "#10B981",
      "secondary": "#6366F1",
      "accent": "#F59E0B",
      "background": "auto"
    }
  }
}
```

## Logging Configuration

```json
{
  "logging": {
    "level": "info",
    "file": "~/.codex/logs/codex.log",
    "maxSize": "10MB",
    "maxFiles": 5,
    "pretty": true
  }
}
```

## API Configuration

```json
{
  "api": {
    "baseUrl": "https://api.openai.com/v1",
    "timeout": 120,
    "retries": 3,
    "organization": "org-xxx"
  }
}
```

## Command Aliases

```json
{
  "aliases": {
    "review": "codex review",
    "test": "codex test",
    "build": "codex build"
  }
}
```

## Default Configuration

```json
{
  "model": "gpt-4o",
  "temperature": 0.7,
  "maxTokens": 4096,
  "timeout": 120,
  "theme": "auto",
  "editor": "auto",
  "shell": "auto",
  "security": {
    "allowDangerousCommands": false,
    "confirmBeforeDelete": true,
    "confirmBeforeExec": true
  },
  "logging": {
    "level": "info",
    "pretty": true
  }
}
```

## Validation

Codex validates config on startup. Invalid values will be replaced with defaults.

```bash
codex config validate
```

## Export/Import

```bash
# Export config
codex config export > config.json

# Import config
codex config import config.json
```