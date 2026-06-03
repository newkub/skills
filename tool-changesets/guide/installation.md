# Installation

## Prerequisites

| Requirement | Version |
|-------------|---------|
| **Node.js** | 18.0 ขึ้นไป |
| **Git** | 2.0 ขึ้นไป |
| **npm/yarn/pnpm/bun** | Latest |

## Installation Steps

### 1. Install as Dev Dependency

```bash
# npm
npm install -D @changesets/cli

# yarn
yarn add -D @changesets/cli

# pnpm
pnpm add -D @changesets/cli

# bun
bun add -D @changesets/cli
```

### 2. Initialize Changesets

```bash
bunx changeset init
# หรือ
npx changeset init
```

นี่จะสร้าง:

```
.changeset/
├── config.json      # Configuration file
└── README.md        # คำแนะนำการใช้งาน
```

### 3. Add Scripts to package.json

```json
{
  "scripts": {
    " changeset": "changeset",
    "version": "changeset version",
    "publish": " changeset publish"
  }
}
```

## Workspace Setup (Monorepo)

### npm workspaces

```json
{
  "name": "monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

### pnpm workspaces

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
```

### yarn workspaces

```json
{
  "name": "monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

## Verify Installation

```bash
# Check version
bunx changeset --version

# Run status
bunx changeset status
```

Expected output:

```
🛫 Changesets CLI version: 3.x.x
📦 Changeset status:
   No pending changesets
```

## Initial Configuration

ไฟล์ `.changeset/config.json` จะถูกสร้าง:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/changelog-git",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

## Next Steps

| Step | Command |
|------|---------|
| Create changeset | `bunx changeset` |
| Version packages | `bunx changeset version` |
| Publish packages | `bunx changeset publish` |