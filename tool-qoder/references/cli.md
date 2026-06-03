# CLI Commands

Command-line interface reference for Qoder CLI.

## Core Commands

| Command | Description |
|---------|-------------|
| `qoder` | Main entry point |
| `qoder --version` | Show version |
| `qoder --help` | Show help message |

## Authentication

| Command | Description |
|---------|-------------|
| `qoder login` | Authenticate with Qoder account |
| `qoder logout` | Sign out from current session |
| `qoder auth status` | Check authentication status |

## Chat & Agents

| Command | Description |
|---------|-------------|
| `qoder chat` | Start interactive chat session |
| `qoder agent run "<task>"` | Run task with AI agent |
| `qoder agent stop` | Stop running agent |
| `qoder agent list` | List active agents |

## Codebase Operations

| Command | Description |
|---------|-------------|
| `qoder search "<query>"` | Semantic search in codebase |
| `qoder read <file>` | Read file content |
| `qoder edit <file> <change>` | Make changes to file |
| `qoder find <pattern>` | Find files matching pattern |

## Project Management

| Command | Description |
|---------|-------------|
| `qoder init` | Initialize Qoder in project |
| `qoder sync` | Sync project context |
| `qoder index` | Rebuild project index |

## Configuration

| Command | Description |
|---------|-------------|
| `qoder config` | Show current configuration |
| `qoder config edit` | Open config file in editor |
| `qoder config set <key> <value>` | Set configuration value |
| `qoder config reset` | Reset to defaults |

## Vaults

| Command | Description |
|---------|-------------|
| `qoder vault list` | List all vaults |
| `qoder vault create <name>` | Create new vault |
| `qoder vault add <vault> --name <key> --value <secret>` | Add secret |
| `qoder vault remove <vault> <key>` | Remove secret |

## MCP Servers

| Command | Description |
|---------|-------------|
| `qoder mcp list` | List configured MCP servers |
| `qoder mcp add <server>` | Add MCP server |
| `qoder mcp remove <server>` | Remove MCP server |

## ACP (Agent Client Protocol)

| Command | Description |
|---------|-------------|
| `qoder acp` | Start ACP server |
| `qoder acp stop` | Stop ACP server |

## Teams

| Command | Description |
|---------|-------------|
| `qoder teams list` | List team members |
| `qoder teams verify-domain <domain>` | Verify team domain |

## Slash Commands (Interactive Mode)

Available within `qoder chat` session:

| Command | Description |
|---------|-------------|
| `/init` | Initialize new project |
| `/review` | Start code review |
| `/refactor` | Begin refactoring |
| `/test` | Generate tests |
| `/docs` | Generate documentation |
| `/explain` | Explain selected code |
| `/help` | Show available commands |
| `/exit` | Exit chat session |

## Options

| Flag | Description |
|------|-------------|
| `--verbose` | Enable verbose output |
| `--model <name>` | Specify AI model |
| `--no-color` | Disable colored output |
| `--config <path>` | Use specific config file |
| `--dry-run` | Preview without executing |