# CLI Reference

## Basic Commands

| Command | Description |
|---------|-------------|
| `codex` | Start interactive mode |
| `codex <prompt>` | Execute single prompt |
| `codex --help` | Show help |
| `codex --version` | Show version |

## Interactive Mode Commands

| Command | Description |
|---------|-------------|
| `help` | Show available commands |
| `exit` / `Ctrl+C` | Exit interactive mode |
| `clear` | Clear conversation history |
| `reset` | Reset context and start fresh |
| `undo` | Undo last change |
| `redo` | Redo last undone change |

## Authentication Commands

| Command | Description |
|---------|-------------|
| `codex login` | Login with ChatGPT account |
| `codex auth` | Open authentication flow |
| `codex logout` | Logout current account |
| `codex status` | Check authentication status |

## File Operations

| Command | Description |
|---------|-------------|
| `codex read <file>` | Read file content |
| `codex edit <file>` | Edit file in editor |
| `codex create <path>` | Create new file |
| `codex delete <path>` | Delete file (with confirmation) |

## Project Commands

| Command | Description |
|---------|-------------|
| `codex init` | Initialize new project |
| `codex analyze` | Analyze project structure |
| `codex review` | Review codebase for issues |
| `codex test` | Run tests |
| `codex build` | Build project |

## Configuration Commands

| Command | Description |
|---------|-------------|
| `codex config get <key>` | Get config value |
| `codex config set <key> <value>` | Set config value |
| `codex config list` | List all config |
| `codex completion <shell>` | Generate shell completion |

## Development Commands

| Command | Description |
|---------|-------------|
| `codex run <script>` | Run npm script |
| `codex debug <file>` | Debug file |
| `codex git <command>` | Run git command |
| `codex diff` | Show pending changes |

## Options

| Option | Description |
|--------|-------------|
| `--model <model>` | Specify LLM model |
| `--temperature <value>` | Set temperature (0-2) |
| `--max-tokens <value>` | Set max tokens |
| `--no-stream` | Disable streaming output |
| `--silent` | Suppress non-essential output |
| `--verbose` | Enable verbose logging |
| `--dry-run` | Preview without executing |
| `--force` | Skip confirmation prompts |

## Examples

### Basic Usage

```bash
# Interactive mode
codex

# Single prompt
codex "Create a REST API endpoint for users"

# With options
codex --model gpt-4-turbo "Analyze this function"
```

### File Operations

```bash
# Read file
codex read src/auth.ts

# Create file
codex create src/services/user.service.ts

# Edit file
codex edit src/auth.ts
```

### Development Workflow

```bash
# Initialize project
codex init

# Analyze structure
codex analyze

# Run tests
codex test

# Git operations
codex git status
codex git commit -m "Add auth feature"
```

### Configuration

```bash
# Get config
codex config get model

# Set config
codex config set temperature 0.5

# Shell completion
codex completion bash >> ~/.bashrc
codex completion zsh >> ~/.zshrc
```