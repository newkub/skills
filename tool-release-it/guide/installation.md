# Installation

## Purpose

แนะนำการติดตั้ง Release It และเริ่มต้นใช้งานในโปรเจกต์

## Scope

- Package Installation
- Project Setup
- Configuration
- Verification

## Package Installation

### npm

```bash
npm install -D release-it
```

### pnpm

```bash
pnpm add -D release-it
```

### yarn

```bash
yarn add -D release-it
```

### Global Installation

```bash
npm install -g release-it
```

### Homebrew (macOS)

```bash
brew install release-it
```

## Quick Setup

### Using npm init

```bash
npm init release-it
```

### Manual Setup

#### 1. Install Dependency

```bash
npm install -D release-it
```

#### 2. Add Script

```json
{
  "scripts": {
    "release": "release-it"
  }
}
```

#### 3. Add Config

สร้างไฟล์ `.release-it.json`:

```json
{
  "$schema": "https://unpkg.com/release-it@20/schema/release-it.json"
}
```

## Project Setup

### Basic Configuration

```json
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true
  },
  "npm": {
    "publish": true
  }
}
```

### with GitHub

```json
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true
  },
  "github": {
    "release": true
  }
}
```

### with Conventional Changelog

```bash
npm install -D @release-it/conventional-changelog
```

```json
{
  "plugins": {
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md",
      "preset": {
        "name": "conventionalcommits"
      }
    }
  }
}
```

## Using with CI/CD

### GitHub Actions

```yaml
- name: Release
  run: npx release-it --ci
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### GitLab CI

```yaml
- npm run release
  variables:
    GITLAB_TOKEN: $GITLAB_TOKEN
    NPM_TOKEN: $NPM_TOKEN
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `GITHUB_TOKEN` | GitHub releases |
| `GITLAB_TOKEN` | GitLab releases |
| `NPM_TOKEN` | npm publishing |

## Verify Installation

### 1. Check Version

```bash
npx release-it --version
```

### 2. Dry Run

```bash
npx release-it --dry-run
```

### 3. Test Release

```bash
npx release-it --ci --dry-run
```

## Node.js Requirements

| release-it | Node.js |
|------------|---------|
| v20 | v20.19.0+ |
| v19 | v20.12.0+ |
| v18 | v20+ |
| v17 | v18+ |

## Update

### Update Package

```bash
npm update -D release-it
```

### Update with Plugins

```bash
npm update -D release-it @release-it/conventional-changelog
```

## Uninstall

### Remove Package

```bash
npm uninstall release-it
```

### Remove Config

```bash
rm .release-it.json
```

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D release-it` |
| **Config** | สร้าง `.release-it.json` |
| **Script** | เพิ่ม `"release": "release-it"` |
| **Release** | `npm run release` |
| **Dry Run** | `npx release-it --dry-run` |