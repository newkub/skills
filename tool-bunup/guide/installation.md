# Installation

## Prerequisites

- **Bun** v1.0+ - [Install Bun](https://bun.sh)

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash
```

## Installation Methods

### Using bunx (Recommended)

```bash
# Run without installing globally
bunx bunup

# Run specific version
bunx bunup@0.16.0

# Run latest
bunx bunup@latest
```

### Using bun add

```bash
# Add as dev dependency
bun add -d bunup

# Add specific version
bun add -d bunup@0.16.0
```

### Using npm

```bash
npm install -D bunup
```

### Using yarn

```bash
yarn add -D bunup
```

### Global Installation

```bash
# Install globally with bun
bun add -g bunup

# Install globally with npm
npm install -g bunup
```

## CLI Installation

### bunx

```bash
bunx bunup
bunx @bunup/cli create
```

### bunx

```bash
bunx bunup
bunx @bunup/cli create
```

## Verify Installation

```bash
# Check version
bunx bunup --version

# Show help
bunx bunup --help
```

## Update

```bash
# Update to latest
bun up bunup

# Update to specific version
bun up bunup@0.16.0
```

## Project Setup

### Initialize in Project

```bash
# Create new library
bunx @bunup/cli@latest create

# Or add to existing project
bun add -d bunup
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

## Uninstall

```bash
# Remove from project
bun remove bunup

# Remove global installation
bun remove -g bunup
```