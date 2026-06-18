# CLI Reference

## Core Commands

| Command | Description |
|---------|-------------|
| `npx create-nitro-app` | Create a new Nitro project |
| `vite dev` | Start development server (Vite integration) |
| `vite build` | Build for production (Vite integration) |
| `nitro build` | Build Nitro server (standalone) |
| `nitro prepare` | Prepare Nitro for build |

## Create Project

```bash
npx create-nitro-app@latest my-app
```

## Development

```bash
# Start dev server (Vite integration)
bun run dev

# With custom port
vite dev --port 4000

# With custom host
vite dev --host 0.0.0.0
```

## Build

```bash
# Build for production (Vite integration)
bun run build

# Build with specific preset
NITRO_PRESET=cloudflare_pages bun run build

# Build with custom output
NITRO_OUTPUT_DIR=./dist bun run build
```

## Preview

```bash
# Run production build
node .output/server/index.mjs

# With custom port
NITRO_PORT=4000 node .output/server/index.mjs
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NITRO_PORT` | `3000` | Server port |
| `NITRO_HOST` | `localhost` | Server host |
| `NITRO_PRESET` | `node_server` | Build preset |
| `NITRO_OUTPUT_DIR` | `.output` | Output directory |
| `NITRO_LOG_LEVEL` | `3` | Log verbosity |
| `NODE_ENV` | `development` | Environment |
| `NITRO_BUILDER` | `rolldown` | Bundler (rolldown/rollup/vite) |

## Flags

| Flag | Description |
|------|-------------|
| `--port` | Set dev server port |
| `--host` | Set dev server host |
| `--open` | Open browser on start |
