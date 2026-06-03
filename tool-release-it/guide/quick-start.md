# Quick Start

## Purpose

คู่มือเริ่มต้นใช้งาน Release It อย่างรวดเร็วใน 5 นาที

## 5-Minute Tutorial

### Step 1: Install

```bash
npm install -D release-it
```

### Step 2: Add Script

เพิ่มใน `package.json`:

```json
{
  "scripts": {
    "release": "release-it"
  }
}
```

### Step 3: Create Config

สร้างไฟล์ `.release-it.json`:

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

### Step 4: Run Release

```bash
npm run release
```

### Step 5: CI Mode

```bash
npm run release -- --ci
```

## Common Use Cases

### Basic npm Package

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

### with GitHub Releases

```json
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true
  },
  "npm": {
    "publish": true
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
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true
  },
  "npm": {
    "publish": true
  },
  "github": {
    "release": true
  },
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

### Pre-release

```bash
# Beta release
npm run release -- --preRelease=beta

# Alpha release
npm run release -- --preRelease=alpha

# RC release
npm run release -- --preRelease=rc
```

## CLI Commands

### Basic Commands

```bash
# Interactive release
npx release-it

# CI mode (no prompts)
npx release-it --ci

# Dry run
npx release-it --dry-run

# Version only
npx release-it --only-version
```

### Options

| Option | Description |
|--------|-------------|
| `--ci` | CI mode (no prompts) |
| `--dry-run` | Show without doing |
| `--only-version` | Only version prompt |
| `--preRelease=<type>` | Pre-release type |
| `--skipChecks` | Skip version check |
| `--no-git` | Skip git operations |
| `--no-npm` | Skip npm publish |
| `--verbose` | Verbose output |

### Pre-release Options

```bash
# Specific pre-release
release-it --preRelease=beta

# Auto pre-release
release-it --preRelease

# No increment
release-it --no-increment
```

## Configuration

### Environment Variables

```bash
# GitHub token
export GITHUB_TOKEN=your_token

# GitLab token
export GITLAB_TOKEN=your_token

# npm token
export NPM_TOKEN=your_token
```

### Command Line Config

```bash
# Override config
release-it --git.commitMessage="release: v${version}"

# Skip git
release-it --no-git.push

# Custom config
release-it --config=.release-it.prod.json
```

## Next Steps

### Learn More

- [Key Concept](key-concept.md) - แนวคิดหลัก
- [How It Works](how-it-works.md) - การทำงานภายใน
- [Features](features.md) - ฟีเจอร์ทั้งหมด

### Configuration

- [Configuration](configuration.md) - การตั้งค่า
- [Best Practices](best-practices.md) - แนวทางปฏิบัติ

### References

- [CLI Reference](../references/cli.md) - CLI commands
- [API Reference](../references/api.md) - Programmatic API
- [Config Reference](../references/configuration.md) - Configuration options

## Summary

| Step | Command |
|------|---------|
| **Install** | `npm install -D release-it` |
| **Config** | สร้าง `.release-it.json` |
| **Release** | `npm run release` |
| **CI Mode** | `npm run release -- --ci` |
| **Dry Run** | `npx release-it --dry-run` |