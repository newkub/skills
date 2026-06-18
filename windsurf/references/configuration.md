# Configuration Reference

## Purpose

Configuration options for Windsurf (Devin Desktop IDE)

## Settings Location

**VS Code Settings**
- `Cmd/Ctrl + ,`
- Or File > Preferences > Settings

**Workspace Settings**
- `.vscode/settings.json`
- Project-specific configuration

**User Settings**
- Global settings
- Apply to all projects

## AI Model Configuration

### Model Selection

**Autocomplete Model**
```json
{
  "windsurf.model.autocomplete": "base"
}
```

Options: `base`, `premier`, `gpt-4o`, `claude-3.5-sonnet`

**Chat Model**
```json
{
  "windsurf.model.chat": "premier"
}
```

**Cascade Model**
```json
{
  "windsurf.model.cascade": "premier"
}
```

### BYOK (Bring Your Own Key)

Configure custom API keys:
```json
{
  "windsurf.customApiKey": "your-api-key"
}
```

## Cascade Configuration

### Auto-Execution Mode

```json
{
  "windsurf.autoExecutionLevel": 2
}
```

Levels:
- `0` - Manual approval for all
- `1` - Auto-run safe commands
- `2` - Auto-run most commands
- `3` - Full auto-execution

### Tool Access

```json
{
  "windsurf.enableToolCalling": true,
  "windsurf.enableWebSearch": true,
  "windsurf.enableDocsSearch": true
}
```

## Context Awareness

### Default Context

```json
{
  "windsurf.context.includeOpenFiles": true,
  "windsurf.context.includeRecentFiles": true,
  "windsurf.context.includeGitContext": true
}
```

### Knowledge Base

```json
{
  "windsurf.knowledgeBase.enabled": true,
  "windsurf.knowledgeBase.sources": [
    "https://docs.example.com"
  ]
}
```

### Windsurf Ignore

Create `.codeiumignore`:
```
node_modules/
dist/
*.min.js
**/*.test.js
```

## MCP Configuration

### mcp_config.json

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"]
    }
  }
}
```

## Proxy Configuration

### Detect Proxy

```json
{
  "windsurf.proxy.detect": true
}
```

### Manual Proxy

```json
{
  "windsurf.proxy.http": "http://proxy.example.com:8080",
  "windsurf.proxy.https": "http://proxy.example.com:8080"
}
```

## Enterprise Configuration

### SSO Configuration

Admin portal setup for Single Sign-On

### SCIM Provisioning

Automated user provisioning

### Role-Based Access

Configure custom roles and permissions

## Summary

| Category | Options |
|----------|---------|
| **AI Models** | autocomplete, chat, cascade, BYOK |
| **Cascade** | autoExecutionLevel, tool access |
| **Context** | default context, knowledge base, ignore |
| **MCP** | mcp_config.json |
| **Proxy** | detect, manual configuration |
| **Enterprise** | SSO, SCIM, RBAC |