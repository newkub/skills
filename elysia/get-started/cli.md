---
name: CLI Commands
description: คำสั่ง CLI และการใช้งานสำหรับ Elysia
---

# CLI Commands

## Bun CLI

### Create New Project

```bash
bun create elysia app
```

### Run Development Server

```bash
bun run dev
```

### Build for Production

```bash
bun run build
```

### Start Production Server

```bash
bun start
```

## Elysia CLI

### Initialize Project

```bash
bunx ely init
```

### Generate OpenAPI Documentation

```bash
bunx ely openapi
```

### Generate Swagger UI

```bash
bunx ely swagger
```

## Common Commands

### Watch Mode

```bash
bun --watch src/index.ts
```

### Type Checking

```bash
bunx tsc --noEmit
```

### Linting

```bash
bunx eslint .
```

### Formatting

```bash
bunx prettier --write .
```

## Development Workflow

### 1. Initialize Project

```bash
bun create elysia app
cd app
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Start Development

```bash
bun run dev
```

### 4. Build for Production

```bash
bun run build
```

### 5. Deploy

```bash
bun start
```

## Environment Variables

```bash
# .env
PORT=3000
DATABASE_URL=...
API_KEY=...
```

## Useful Scripts

### package.json

```json
{
  "scripts": {
    "dev": "bun run --watch src/index.ts",
    "build": "bun build src/index.ts --outdir ./dist",
    "start": "bun dist/index.js",
    "typecheck": "bunx tsc --noEmit",
    "lint": "bunx eslint .",
    "format": "bunx prettier --write ."
  }
}
```
