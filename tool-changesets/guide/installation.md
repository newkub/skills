# Installation

การติดตั้งและ setup Changesets

## Prerequisites

- Node.js 16+
- Git
- Package manager (npm, yarn, pnpm, bun)

## Installation

### Using Bun (Recommended)

```bash
bun add -D @changesets/cli
```

### Using npm

```bash
npm install -D @changesets/cli
```

### Using yarn

```bash
yarn add -D @changesets/cli
```

### Using pnpm

```bash
pnpm add -D @changesets/cli
```

## Initialization

### Initialize Changesets

```bash
bunx changeset init
```

This will create:
- `.changeset/` directory
- `config.json` file

### Manual Setup

Create `.changeset/config.json`:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@2.3.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

## Configuration

### Basic Config

```json
{
  "changelog": "@changesets/cli/changelog",
  "commit": false
}
```

### Advanced Config

```json
{
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": ["@my/core"],
  "linked": ["@my/ui", "@my/components"],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["@my/internal"]
}
```

## Verification

### Check Installation

```bash
bunx changeset --version
```

### Test Initialization

```bash
bunx changeset init
```

## Troubleshooting

### Permission Issues

```bash
# Use sudo if needed
sudo bunx changeset init
```

### Network Issues

```bash
# Use registry mirror
npm config set registry https://registry.npmmirror.com
```

### Version Conflicts

```bash
# Clear cache
bun pm cache rm
```
