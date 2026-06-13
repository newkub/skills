# CLI Reference

## Core Commands

| Command | Description |
|---------|-------------|
| `create-nitro-app` | Create a new Nitro project |
| `vite dev` | Start development server |
| `vite build` | Build for production |
| `nitro build` | Build Nitro server (standalone) |
| `nitro prepare` | Prepare Nitro for build |

## Create Project

```bash
npx create-nitro-app@latest my-app
```

## Development

```bash
# Start dev server
npm run dev

# With custom port
vite dev --port 4000

# With custom host
vite dev --host 0.0.0.0
```

## Build

```bash
# Build for production
npm run build

# Build with specific preset
NITRO_PRESET=cloudflare_pages npm run build

# Build with custom output
NITRO_OUTPUT_DIR=./dist npm run build
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

## Flags

| Flag | Description |
|------|-------------|
| `--port` | Set dev server port |
| `--host` | Set dev server host |
| `--open` | Open browser on start |
