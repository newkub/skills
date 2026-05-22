# MCP Integration

Connect custom tools and services through Model Context Protocol.

## What is MCP?

MCP (Model Context Protocol) enables Windsurf to connect with external tools and services, extending Cascade's capabilities beyond code.

## Available MCP Servers

### Official Integrations

| Server | Purpose | Package |
|--------|---------|--------|
| GitHub | Code, PRs, issues | `@modelcontextprotocol/server-github` |
| Filesystem | File operations | `@modelcontextprotocol/server-filesystem` |
| Slack | Team communication | Custom |
| Figma | Design integration | Custom |
| Stripe | Payment processing | Custom |

## Setup

### 1. Install MCP Server

```bash
# GitHub
npx -y @modelcontextprotocol/server-github

# Filesystem
npx -y @modelcontextprotocol/server-filesystem /path/to/workspace
```

### 2. Configure in Windsurf

1. Open Settings (`Cmd+,`)
2. Navigate to MCP section
3. Add server configuration

### 3. Settings Format

```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": {
          "GITHUB_TOKEN": "your-token"
        }
      },
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
      }
    }
  }
}
```

## GitHub Integration

### Features

| Feature | Description |
|---------|-------------|
| List PRs | View open pull requests |
| Read code | Fetch file contents |
| Search | Find code across repo |
| Issues | Create and manage |

### Usage in Cascade

```
"@github search for 'useAuth' usage across codebase"
"@github create issue for memory leak bug"
"@github show PR #142 changes"
```

### Setup

```bash
npx -y @modelcontextprotocol/server-github
```

### Environment

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx
```

## Filesystem Integration

### Features

| Feature | Description |
|---------|-------------|
| Read files | Get file contents |
| Write files | Create/update files |
| List directory | Browse structure |
| Search | Find files by name |

### Usage

```
"@filesystem read /path/to/config.json"
"@filesystem list ./src/components"
"@filesystem search '*.test.ts'"
```

### Setup

```bash
npx -y @modelcontextprotocol/server-filesystem /workspace
```

## Custom MCP Server

### Create Server

```typescript
// server.ts
import { Server } from '@modelcontextprotocol/sdk';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio';

const server = new Server({
  name: 'my-custom-server',
  version: '1.0.0',
}, {
  capabilities: {
    tools: {},
  },
});

server.setRequestHandler('tools/list', async () => {
  return {
    tools: [{
      name: 'myTool',
      description: 'What this tool does',
      inputSchema: {
        type: 'object',
        properties: {
          param: { type: 'string' }
        }
      }
    }]
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Configure

```json
{
  "mcp": {
    "servers": {
      "custom": {
        "command": "node",
        "args": ["/path/to/server.js"]
      }
    }
  }
}
```

## MCP in Cascade

### Mention Syntax

```
@serverName toolName arguments
```

### Examples

```
@github search repository:windsurf/code pattern
@filesystem read ./config.json
@slack send #general "Deployment complete"
```

## Best Practices

### Security

| Practice | Why |
|----------|-----|
| Use tokens | Secure API access |
| Limit scope | Least privilege |
| Rotate keys | Regular rotation |
| No secrets in config | Use env vars |

### Performance

| Practice | Why |
|----------|-----|
| Lazy load | Only load needed |
| Cache responses | Faster access |
| Limit results | Avoid timeouts |

## Troubleshooting

### Server Not Starting

```
1. Check Node.js version
2. Verify package installed
3. Check command syntax
4. Review logs
```

### Token Issues

```
1. Verify token valid
2. Check permissions
3. Regenerate if needed
```

### Connection Problems

```
1. Test server manually
2. Check network
3. Verify port (if not stdio)
```