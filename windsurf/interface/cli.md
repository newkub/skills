# Windsurf CLI

Command-line interface for Windsurf IDE.

## Installation

### Install CLI in PATH

1. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Search for: `"Install 'windsurf' command in PATH"`
3. Select and execute

### Verify Installation

```bash
windsurf --version
```

## Basic Commands

### Open Project

```bash
# Open current directory
windsurf .

# Open specific project
windsurf /path/to/project

# Open with specific workspace
windsurf --workspace /path/to/workspace
```

### Command Options

| Command | Description |
|---------|-------------|
| `windsurf .` | Open current directory |
| `windsurf <path>` | Open specific path |
| `windsurf --version` | Show version |
| `windsurf --help` | Show help |

## CLI Options

| Option | Description |
|--------|-------------|
| `.` | Open current directory |
| `<path>` | Open specific directory |
| `--workspace <path>` | Open workspace |
| `--version` | Show version info |
| `--help` | Show all CLI options |

## File Operations

### From Terminal

```bash
# Navigate to project
cd /path/to/project

# Open in Windsurf
windsurf .

# Open specific file
windsurf src/index.ts
```

## Remote Development

### SSH Connections

```bash
# Open remote via SSH
windsurf ssh://user@host/path/to/project

# With specific port
windsurf ssh://user@host:2222/path/to/project
```

## Configuration

### Settings Location

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Windsurf` |
| Windows | `%APPDATA%\Windsurf` |
| Linux | `~/.config/Windsurf` |

### Key Settings Files

```json
{
  "settings": {
    "windsurf.executablePath": "path/to/windsurf"
  }
}
```

## Troubleshooting

### CLI Not Found

1. Open Command Palette
2. Run "Install 'windsurf' command in PATH"
3. Restart terminal

### Version Mismatch

```bash
# Check installed version
windsurf --version

# Update if needed
# Download from windsurf.com
```

## Integration with Tools

### Git Integration

```bash
# From terminal
git commit -m "feat: add user auth"
windsurf .  # Opens to show changes

# Cascade will track git commands
```

### Package Managers

```bash
# npm
npm install
windsurf .  # Opens project

# pnpm
pnpm install
windsurf .  # Opens project

# yarn
yarn install
windsurf .  # Opens project
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Use absolute paths | Avoids ambiguity |
| Open from project root | Better context |
| Keep CLI updated | Latest features |
| Use with git | Better tracking |