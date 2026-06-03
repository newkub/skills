# Programmatic API

## Overview

Vite provides a programmatic JavaScript API for programmatic usage: creating dev servers, building, and previewing.

## Functions

| Function | Description |
|----------|-------------|
| `createServer` | Create a development server |
| `build` | Build for production |
| `preview` | Preview production build |
| `loadConfigFromFile` | Load config from vite.config.ts |
| `loadEnv` | Load environment variables |
| `createLogger` | Create a custom logger |

## createServer

Creates a Vite dev server programmatically.

```typescript
import { createServer } from 'vite'

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  server: {
    port: 1337,
  },
})

await server.listen()
server.printUrls()
server.bindCLIShortcuts({ print: true })
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `configFile` | `string \| false` | `'vite.config.ts'` | Path to config file |
| `root` | `string` | `process.cwd()` | Project root |
| `server` | `ServerOptions` | `{}` | Dev server options |
| `appType` | `'spa' \| 'mpa' \| 'custom'` | `'spa'` | HTML handling mode |
| `preview` | `PreviewOptions` | `{}` | Preview options |

### Middleware Mode

Integrate Vite with Express or other servers:

```typescript
import express from 'express'
import { createServer } from 'vite'

async function createServer() {
  const app = express()

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom', // Don't handle HTML
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    // Handle requests manually
  })

  app.listen(3000)
}

createServer()
```

## build

Build for production:

```typescript
import { build } from 'vite'

await build({
  root: process.cwd(),
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `build` | `BuildOptions` | See defaults | Build configuration |
| `configFile` | `string \| false` | Auto-detect | Config file path |
| `mode` | `string` | `'production'` | Build mode |
| `root` | `string` | `process.cwd()` | Project root |

## preview

Preview a production build locally:

```typescript
import { preview } from 'vite'

const previewServer = await preview({
  root: process.cwd(),
  preview: {
    port: 4173,
  },
})
```

## Plugin API

Vite plugins are objects with hooks that follow the Rollup plugin compatible interface.

### Basic Plugin Structure

```typescript
import type { Plugin } from 'vite'

export default function myPlugin(): Plugin {
  return {
    name: 'my-plugin',

    // Config hook
    configResolved(resolvedConfig) {
      // Called after config is resolved
    },

    // Build hooks
    buildStart() {},
    resolveId(source) {},
    load(id) {},
    transform(code, id) {},
    buildEnd() {},

    // Dev server hooks
    configureServer(server) {},
    configurePreviewServer(server) {},
    transformIndexHtml(html) {},
  }
}
```

### Plugin Hooks

| Hook | Type | Description |
|------|------|-------------|
| `name` | `string` | Unique plugin name |
| `config` | `Function` | Intercept and modify config |
| `configResolved` | `Function` | Called after config resolved |
| `buildStart` | `Function` | Called at start of build |
| `resolveId` | `Function` | Resolve module ID |
| `load` | `Function` | Load module content |
| `transform` | `Function` | Transform module code |
| `buildEnd` | `Function` | Called at end of build |
| `transformIndexHtml` | `Function` | Transform HTML |

### Accessing Server in Plugin

```typescript
const myPlugin = () => {
  let server

  return {
    name: 'my-plugin',

    configureServer(_server) {
      server = _server
    },

    transform(code, id) {
      if (server) {
        // Use server for HMR, etc.
      }
    },
  }
}
```

### Storing Resolved Config

```typescript
const examplePlugin = () => {
  let config

  return {
    name: 'read-config',

    configResolved(resolvedConfig) {
      config = resolvedConfig
    },

    transform(code, id) {
      if (config.command === 'serve') {
        // Dev: code is for dev server
      } else {
        // Build: code is for Rollup
      }
    },
  }
}
```

## loadEnv

Load environment variables from `.env` files:

```typescript
import { loadEnv } from 'vite'

const env = loadEnv(mode, process.cwd(), '')
```

## loadConfigFromFile

Load config from a file:

```typescript
import { loadConfigFromFile } from 'vite'

const { config } = await loadConfigFromFile(
  resolve(root, 'vite.config.ts'),
  { command: 'build', mode: 'production' }
)
```

---

Last updated: 2025
