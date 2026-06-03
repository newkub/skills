# API Reference

ACP (Agent Client Protocol) and MCP (Model Context Protocol) integration for Qoder CLI.

## ACP Protocol

Agent Client Protocol enables editors to connect with Qoder CLI as an external agent.

### Server Configuration

| Parameter | Description | Required |
|-----------|-------------|----------|
| `command` | Executable path | Yes |
| `args` | Arguments (e.g., `["acp"]`) | Yes |
| `env` | Environment variables | No |

### Editor Configuration Examples

#### Zed

```json
{
  "agent_servers": {
    "qoder": {
      "command": "qoder",
      "args": ["acp"]
    }
  }
}
```

### ACP Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Server health check |
| `/capabilities` | GET | List supported capabilities |
| `/start` | POST | Initialize agent session |
| `/message` | POST | Send message to agent |
| `/stop` | POST | End agent session |

## MCP Integration

Model Context Protocol for extending Qoder with external tools.

### Server Definition

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["@org/mcp-package"],
      "env": {
        "VAR_NAME": "value"
      }
    }
  }
}
```

### Built-in MCP Servers

| Server | Description | Tools |
|--------|-------------|-------|
| `filesystem` | File operations | read, write, edit, delete |
| `bash` | Terminal execution | run, script |
| `search` | Code search | semantic, regex |

### Vault Integration

Reference secrets from Vaults in MCP configuration:

```json
{
  "env": {
    "API_KEY": "${vault:my-vault:api-key}",
    "DATABASE_URL": "${vault:prod-db:connection-string}"
  }
}
```

## CLI API

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `QODER_API_KEY` | API authentication key | - |
| `QODER_CONFIG_PATH` | Config file location | `~/.qoder/config.json` |
| `QODER_LOG_LEVEL` | Logging level | `info` |
| `QODER_CACHE_DIR` | Cache directory | `~/.qoder/cache` |

### Configuration File Schema

```json
{
  "version": "1.0",
  "cloud": {
    "enabled": true,
    "defaultRegion": "us-east-1",
    "timeout": 30000
  },
  "editor": {
    "defaultAction": "tab",
    "suggestionDelay": 300,
    "maxLines": 50
  },
  "context": {
    "maxFiles": 10000,
    "excludePatterns": ["node_modules", "dist", ".git"],
    "includeHidden": false,
    "indexInterval": 5000
  },
  "agent": {
    "maxSteps": 100,
    "timeout": 300000,
    "tools": ["search", "read", "edit", "bash"]
  },
  "mcpServers": {}
}
```

### Exit Codes

| Code | Description |
|------|-------------|
| `0` | Success |
| `1` | General error |
| `2` | Configuration error |
| `3` | Authentication failed |
| `4` | Network error |
| `5` | Timeout |