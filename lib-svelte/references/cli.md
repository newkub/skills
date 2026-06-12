# CLI Reference

## Vite Commands

### Development

```bash
bun run dev          # Start dev server
bun run dev --port 3000  # Custom port
bun run dev --host     # Expose to network
```

### Build

```bash
bun run build        # Build for production
bun run preview      # Preview production build
```

## SvelteKit Commands

### Development

```bash
bun run dev          # Start dev server
bun run dev --open   # Open browser automatically
```

### Build

```bash
bun run build        # Build for production
bun run preview      # Preview production build
```

### Check

```bash
bun run check        # Type checking with svelte-check
```

## Svelte Compiler CLI

### Compile

```bash
bunx svelte compile input.svelte
```

### Options

| Option | Description |
|--------|-------------|
| `--format` | Output format (cjs, esm, iife) |
| `--name` | Component name |
| `--css` | Extract CSS |

## Package Manager Scripts

### Recommended Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
    "lint": "eslint . --ext .js,.svelte",
    "format": "prettier --write ."
  }
}
```

## Options

### Vite Options

| Flag | Description |
|------|-------------|
| `--port` | Set port number |
| `--host` | Set host address |
| `--open` | Open browser automatically |
| `--https` | Use HTTPS |

### SvelteKit Options

| Flag | Description |
|------|-------------|
| `--port` | Set port number |
| `--host` | Set host address |
| `--open` | Open browser automatically |

## Summary

Common commands:
- **Dev**: `bun run dev`
- **Build**: `bun run build`
- **Preview**: `bun run preview`
- **Check**: `bun run check`
- **Options**: `--port`, `--host`, `--open`

