# cli

## index.md

# CLI Reference

## Core Commands

| Command | Description |
|---------|-------------|
| `storybook dev` | Start dev server |
| `storybook build` | Build static site |
| `storybook test` | Run tests |

## Options

| Flag | Description |
|------|-------------|
| `--port` | Set port |
| `--no-open` | Don't open browser |
| `--debug` | Debug mode |

## Scripts

```json
{
  "scripts": {
    "storybook": "storybook dev",
    "build-storybook": "storybook build"
  }
}
```

## Development

```bash
npm run storybook -- --port 6007
```

---

