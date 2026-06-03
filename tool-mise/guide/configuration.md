# Configuration

## Config Files

mise ใช้ config files หลายแบบ:

| File | Description |
|------|-------------|
| `.mise.toml` | Project-level config (recommended) |
| `mise.toml` | Project-level config (alternative) |
| `.tool-versions` | asdf-style legacy file |
| `~/.config/mise/config.toml` | Global config |

## Example .mise.toml

```toml
[tools]
node = "20"
python = "3.12"
ruby = "3.3"
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MISEt.toml` | Config file path | `.mise.toml` |
| `MISE_DATA_DIR` | Data directory | `~/.local/share/mise` |
| `MISE_CONFIG_DIR` | Config directory | `~/.config/mise` |
| `MISE_CACHE_DIR` | Cache directory | `~/.cache/mise` |
