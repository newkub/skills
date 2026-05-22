---
title: Vite CLI Commands
description: รายการคำสั่ง CLI ทั้งหมดของ Vite พร้อมตัวอย่างการใช้งาน
---

# Vite CLI Commands

## Dev Server Commands

### Start Dev Server

```bash
# Default (port 5173)
bunx vite

# Specify port
bunx vite --port 3000

# Open browser automatically
bunx vite --open

# Specify host
bunx vite --host
bunx vite --host 0.0.0.0

# Enable strict port (fail if port taken)
bunx vite --strictPort
```

### Dev Server with Config

```bash
# Use specific config file
bunx vite --config vite.config.ts

# Use config loader mode
bunx vite --configLoader runner
bunx vite --configLoader native
```

---

## Build Commands

### Production Build

```bash
# Standard build
bunx vite build

# Build with specific mode
bunx vite build --mode production
bunx vite build --mode staging

# Build with config
bunx vite build --config vite.prod.config.ts

# Build and watch for changes
bunx vite build --watch

# Build with sourcemaps
bunx vite build --sourcemap

# Build with empty outDir
bunx vite build --emptyOutDir
```

### Build Analysis

```bash
# Build with bundle analysis
bunx vite build --mode analyze
```

---

## Preview Commands

### Preview Production Build

```bash
# Preview (serves dist/ folder)
bunx vite preview

# Preview on specific port
bunx vite preview --port 4173

# Preview with host
bunx vite preview --host
```

---

## Optimize Commands

### Dependency Optimization

```bash
# Force optimize dependencies
bunx vite optimize

# Clear cache and optimize
bunx vite optimize --force
```

---

## Environment Variables

### Mode-specific Environment

```bash
# Development mode
bunx vite --mode development

# Production mode
bunx vite build --mode production

# Custom mode
bunx vite --mode staging
```

---

## Debug Commands

### Debug Options

```bash
# Show debug logs
DEBUG=vite:* bunx vite

# Show specific debug logs
DEBUG=vite:resolve bunx vite
DEBUG=vite:transform bunx vite

# Profile build
bunx vite build --profile
```

---

## Package Scripts

### Recommended package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:staging": "vite build --mode staging",
    "build:analyze": "vite build --mode analyze",
    "preview": "vite preview",
    "preview:prod": "vite preview --port 8080",
    "optimize": "vite optimize --force",
    "typecheck": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.ts,.tsx",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## CLI Flags Reference

| Flag | Description | Example |
|------|-------------|---------|
| `--host [host]` | Specify hostname | `--host 0.0.0.0` |
| `--port <port>` | Specify port | `--port 3000` |
| `--open [path]` | Open browser | `--open /about` |
| `--strictPort` | Exit if port taken | `--strictPort` |
| `--force` | Force optimize | `--force` |
| `--config <file>` | Config file path | `--config vite.config.ts` |
| `--configLoader <type>` | Config loader | `--configLoader runner` |
| `--mode <mode>` | Set env mode | `--mode production` |
| `--base <path>` | Public base path | `--base /app/` |
| `--sourcemap` | Generate sourcemap | `--sourcemap` |
| `--profile` | Profile build | `--profile` |
| `-d, --debug` | Debug mode | `-d` |
| `-f, --filter <filter>` | Filter logs | `-f vite:resolve` |
| `-m, --mode <mode>` | Set env mode | `-m production` |
| `-l, --logLevel <level>` | Log level | `-l info` |
| `--clearScreen` | Clear screen | `--clearScreen` |
| `--ssr` | Build for SSR | `--ssr` |
| `--emptyOutDir` | Empty output dir | `--emptyOutDir` |
| `--watch` | Watch mode | `--watch` |

---

## Troubleshooting Commands

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Reinstall and clear cache
bun install && bunx vite optimize --force

# Check Vite version
bunx vite --version
```
