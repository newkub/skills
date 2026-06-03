# Configuration

การตั้งค่า Qoder

## Editor Settings

### General Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Theme** | Editor theme | System |
| **Language** | UI language | English |
| **Notifications** | Enable notifications | Enabled |

### AI Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Suggestions Mode** | Inline vs panel | Inline |
| **Suggestion Delay** | Delay before showing | 300ms |
| **Max Lines** | Max suggestion lines | 50 |

### Context Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Context Depth** | How deep to analyze | Project |
| **Include Tests** | Analyze test files | true |
| **Index Frequency** | How often to update | On change |

## Project Rules

สร้างไฟล์ `.qoder/rules/` ใน project เพื่อกำหนด conventions:

```
.project/
├── .qoder/
│   └── rules/
│       ├── naming.md
│       ├── style.md
│       └── patterns.md
```

### Example Rule File

```markdown
# naming.md

## File Naming
- Components: PascalCase (UserProfile.tsx)
- Utilities: camelCase (formatDate.ts)
- Tests: *.test.ts

## Variable Naming
- Use descriptive names
- Boolean: is, has, can prefixes
- Arrays: plural or Array suffix
```

## MCP Configuration

### MCP Servers

สร้างไฟล์ `.qoder/mcp.json`:

```json
{
  "mcpServers": {
    "database": {
      "command": "npx",
      "args": ["@myorg/mcp-database"],
      "env": {
        "DATABASE_URL": "${DB_URL}"
      }
    }
  }
}
```

### Vaults for Secrets

```bash
# Create vault
qoder vault create my-vault

# Add credential
qoder vault add my-vault --name api-key --value "sk-xxx"

# Reference in MCP config
"env": {
  "API_KEY": "${vault:my-vault:api-key}"
}
```

## CLI Configuration

### Global Config

```bash
# Location: ~/.qoder/config.json

{
  "cloud": {
    "enabled": true,
    "defaultRegion": "us-east-1"
  },
  "editor": {
    "defaultAction": "tab"
  }
}
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `QODER_API_KEY` | API key for CLI |
| `QODER_CONFIG_PATH` | Config file path |
| `QODER_LOG_LEVEL` | Debug, info, warn, error |

## Teams Settings

### Domain Verification

```bash
# Verify domain
qoder teams verify-domain example.com
```

### SSO Configuration

รองรับ:
- SAML 2.0
- OIDC

## Keyboard Shortcuts

### Editor

| Action | Windows/Linux | macOS |
|--------|--------------|-------|
| Accept Suggestion | Tab | Tab |
| Dismiss | Esc | Esc |
| Open Chat | Ctrl+Shift+M | Cmd+Shift+M |
| Next Suggestion | Alt+] | Option+] |
| Previous | Alt+[ | Option+] |

## Advanced Settings

### Context Engineering

```json
{
  "context": {
    "maxFiles": 10000,
    "excludePatterns": ["node_modules", "dist"],
    "includeHidden": false,
    "indexInterval": 5000
  }
}
```

### Agent Settings

```json
{
  "agent": {
    "maxSteps": 100,
    "timeout": 300000,
    "tools": ["search", "read", "edit", "bash"]
  }
}
```

## Reset Configuration

```bash
# Reset to defaults
qoder config reset

# Reset specific section
qoder config reset --section ai
```