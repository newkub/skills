# Configuration

## Configuration File

Codex อ่าน config จาก `~/.codex/config.json`

```json
{
  "model": "claude-3-5-sonnet",
  "temperature": 0.7,
  "maxTokens": 4096
}
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `model` | string | `gpt-4o` | LLM model ที่ใช้ |
| `temperature` | number | `0.7` | Temperature สำหรับ generation |
| `maxTokens` | number | `4096` | Maximum tokens ตอบกลับ |
| `timeout` | number | `120` | Timeout วินาที |
| `theme` | string | `auto` | Theme: `auto`, `light`, `dark` |
| `editor` | string | `auto` | Editor ที่ใช้แก้ไขไฟล์ |
| `shell` | string | `/bin/bash` | Shell ที่ใช้รันคำสั่ง |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_BASE_URL` | Custom API endpoint |
| `CODEX_CONFIG_PATH` | Path to config file |
| `CODEX_LOG_LEVEL` | Log level: `debug`, `info`, `warn`, `error` |
| `CODEX_TIMEOUT` | Default timeout in seconds |

```bash
# .env file
OPENAI_API_KEY=sk-...
OPENAI_BASE_URL=https://api.openai.com/v1
CODEX_LOG_LEVEL=info
```

## Authentication

### ChatGPT Account

```bash
codex login
# หรือ
codex auth
```

ระบบจะเปิด browser ให้ login ด้วย ChatGPT account

### API Key

```bash
export OPENAI_API_KEY=sk-...
```

หรือเพิ่มใน config:

```json
{
  "apiKey": "sk-..."
}
```

## Project Configuration

สร้าง `.codex.json` ในโปรเจกต์เพื่อ local config:

```json
{
  "project": {
    "name": "my-project",
    "language": "typescript",
    "exclude": ["node_modules", "dist"]
  },
  "codex": {
    "model": "gpt-4-turbo",
    "temperature": 0.5
  }
}
```

## Model Selection

| Model | Use Case |
|-------|----------|
| `gpt-4o` | General purpose (default) |
| `gpt-4-turbo` | Faster, cheaper |
| `gpt-3.5-turbo` | Simple tasks |
| `claude-3-5-sonnet` | Complex reasoning |

## Theme Configuration

```json
{
  "theme": {
    "mode": "auto",
    "colors": {
      "primary": "#10B981",
      "secondary": "#6366F1"
    }
  }
}
```

## Security Settings

```json
{
  "security": {
    "allowDangerousCommands": false,
    "confirmBeforeDelete": true,
    "maxFileSize": "10MB"
  }
}
```

## Logging

```json
{
  "logging": {
    "level": "info",
    "file": "~/.codex/logs/codex.log",
    "maxSize": "10MB"
  }
}
```