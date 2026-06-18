# CLI Commands

## Overview

Nuxt CLI (nuxi) provides commands for developing, building, and deploying Nuxt v4 applications.

## Installation

```bash
# Use npx (recommended)
npx nuxi@latest --help
```

## Project Commands

### nuxi init

Create a new Nuxt v4 project:

```bash
npx nuxi@latest init <project-name>
```

**Options:**
- `--packageManager <pm>` - Specify package manager (bun, bun, yarn, bun)
- `--gitInit` - Initialize git repository
- `--force` - Force overwrite existing directory

**Example:**
```bash
npx nuxi@latest init my-app --packageManager bun
```

### nuxi dev

Start development server:

```bash
npx nuxi dev
```

**Options:**
- `--port <port>` - Specify port (default: 3000)
- `--host <host>` - Specify host (default: localhost)
- `--https` - Enable HTTPS
- `--open` - Open browser automatically

**Example:**
```bash
npx nuxi dev --port 4000 --host 0.0.0.0
```

### nuxi build

Build for production:

```bash
npx nuxi build
```

**Options:**
- `--prerender` - Pre-render static pages
- `--dotenv` - Load .env file

### nuxi generate

Generate static site:

```bash
npx nuxi generate
```

**Options:**
- `--force` - Force regeneration
- `--no-cache` - Disable cache

### nuxi preview

Preview production build:

```bash
npx nuxi preview
```

**Options:**
- `--port <port>` - Specify port
- `--host <host>` - Specify host

## Module Commands

### nuxi module add

Add a Nuxt module:

```bash
npx nuxi module add <module-name>
```

**Example:**
```bash
npx nuxi module add @pinia/nuxt
```

### nuxi module search

Search for modules:

```bash
npx nuxi module search <query>
```

## Info Commands

### nuxi info

Display environment information:

```bash
npx nuxi info
```

**Output includes:**
- Nuxt version
- Node.js version
- Package manager
- Operating system
- Installed modules

### nuxi version

Display Nuxt version:

```bash
npx nuxi version
```

## Type Commands

### nuxi typecheck

Run TypeScript type checking:

```bash
npx nuxi typecheck
```

**Options:**
- `--fix` - Auto-fix type errors
- `--watch` - Watch mode

## Development Commands

### nuxi devtools

Open Nuxt DevTools:

```bash
npx nuxi devtools
```

### nuxi prepare

Prepare Nuxt for development:

```bash
npx nuxi prepare
```

Generates types and prepares the build environment.

## Cleanup Commands

### nuxi cleanup

Clean up build artifacts:

```bash
npx nuxi cleanup
```

Removes:
- `.nuxt/` directory
- `node_modules/.cache/`
- Build artifacts

## Component Commands

### nuxi component add

Add a new component:

```bash
npx nuxi component add <component-name>
```

**Example:**
```bash
npx nuxi component add Button
```

### nuxi component add

Add component with path:

```bash
npx nuxi component add <component-name> --path <path>
```

## Page Commands

### nuxi page add

Add a new page:

```bash
npx nuxi page add <page-name>
```

**Example:**
```bash
npx nuxi page add about
```

## Configuration Commands

### nuxi config

Display resolved configuration:

```bash
npx nuxi config
```

## Lint Commands

### nuxi lint

Run linter:

```bash
npx nuxi lint
```

**Options:**
- `--fix` - Auto-fix issues

## Format Commands

### nuxi format

Format code:

```bash
npx nuxi format
```

## Test Commands

### nuxi test

Run tests:

```bash
npx nuxi test
```

**Options:**
- `--watch` - Watch mode
- `--coverage` - Generate coverage report

## Common Workflows

### New Project

```bash
npx nuxi init my-app
cd my-app
bun install
bun run dev
```

### Build and Deploy

```bash
bun run build
bun run preview
```

### Static Site Generation

```bash
bun run generate
```

### Type Checking

```bash
bun run typecheck
```

## Global Flags

| Flag | Description |
|------|-------------|
| `--help` | Display help information |
| `--version` | Display version |
| `--debug` | Enable debug mode |
| `--silent` | Silent mode |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NUXT_PORT` | Default port for dev server |
| `NUXT_HOST` | Default host for dev server |
| `NODE_ENV` | Environment (development, production) |
