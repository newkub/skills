# Installation

## Requirements

| Requirement | รายละเอียด |
|-------------|------------|
| **Node.js** | v18.0.0 หรือสูงกว่า |
| **Package Manager** | npm, pnpm, yarn, หรือ bun |
| **Git** | สำหรับ package graph และ affected mode |
| **OS** | Windows, macOS, หรือ Linux |

## Installation Methods

### Global Installation (Recommended)

```bash
# npm
npm install -g turbo

# pnpm
pnpm add -g turbo

# yarn
yarn global add turbo

# bun
bun add -g turbo
```

### Local Installation

```bash
# npm
npm install -D turbo

# pnpm
pnpm add -D turbo

# yarn
yarn add -D turbo

# bun
bun add -D turbo
```

## Verify Installation

```bash
# Check version
turbo --version

# Show help
turbo --help
```

## Quick Setup for Existing Monorepo

### 1. Initialize Root turbo.json

```bash
# สร้าง turbo.json พร้อม schema
npx turbo init
```

### 2. Add Scripts to package.json

```json
{
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --parallel",
    "lint": "turbo run lint",
    "test": "turbo run test"
  }
}
```

### 3. Configure Pipeline

```json
{
  "$schema": "https://turborepo.dev/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## CI Installation

### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm turbo build --filter=...
```

### GitLab CI

```yaml
# .gitlab-ci.yml
image: node:20-alpine

cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .npm
    - .turbo
    - node_modules

variables:
  TURBO_TOKEN: ${TURBO_TOKEN}
  TURBO_TEAM: ${TURBO_TEAM}

build:
  script:
    - npm install -g turbo
    - turbo build
```

## Docker Installation

```dockerfile
# Dockerfile
FROM node:20-alpine AS builder

RUN npm install -g turbo

COPY . .
RUN turbo prune --out-dir /out web

FROM node:20-alpine
COPY --from=builder /out .
RUN npm install
RUN turbo build --filter=web
```