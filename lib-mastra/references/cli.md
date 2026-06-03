# cli

## index.md

# CLI Commands

Mastra command-line interface

## Commands

| Command | Description |
|---------|-------------|
| `mastra dev` | Start development server with Studio UI |
| `mastra build` | Build project for production |
| `mastra api` | Inspect and call resources via CLI |

## Development Server

```bash
# Start with Studio (default port 4111)
npm run dev

# Or use CLI
bunx mastra dev

# Custom port
bunx mastra dev --port 3000
```

Opens Mastra Studio at `http://localhost:4111`

## Build

```bash
# Build for production
npm run build

# Or use CLI
bunx mastra build
```

## API Inspection

```bash
# List available resources
bunx mastra api list

# Call a resource
bunx mastra api call /agents

# Check logs
bunx mastra api logs

# Check traces
bunx mastra api traces
```

## Options

| Option | Description |
|--------|-------------|
| `--port` | Set development server port |
| `--env` | Specify environment file |
| `--verbose` | Enable verbose logging |

## Scripts in package.json

```json
{
  "scripts": {
    "dev": "mastra dev",
    "build": "mastra build"
  }
}
```

---

