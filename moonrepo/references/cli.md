# CLI Commands

CLI commands สำหรับ moonrepo

## Installation

```bash
bun install -g moonrepo
```

## Commands

| Command | Description |
|----------|-------------|
| `moon init` | Initialize workspace |
| `moon run <task>` | Run a task |
| `moon run :task` | Run task in current project |
| `moon run task --all` | Run in all projects |
| `moon list` | List all tasks |
| `moon check` | Validate configuration |
| `moon setup remote` | Setup remote cache |
| `moon sync` | Sync cache |
| `moon ci` | Run for CI environment |

## Options

```bash
moonrepo --help
```

## Examples

```bash
# Example 1
moonrepo build

# Example 2
moonrepo serve --port 3000
```


---

