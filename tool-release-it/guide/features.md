# Features

## Purpose

รายการฟีเจอร์ทั้งหมดของ Release It สำหรับ automate versioning และ publishing

## Core Features

### 1. Version Bumping

| Feature | Description |
|---------|-------------|
| **Semantic Versioning** | Auto increment major/minor/patch |
| **Pre-releases** | alpha, beta, rc |
| **Custom Increment** | Custom version bumps |
| **Version Sources** | package.json, git tags, files |

### 2. Git Operations

| Feature | Description |
|---------|-------------|
| **Auto Commit** | Commit changes |
| **Auto Tag** | Create version tags |
| **Auto Push** | Push to remote |
| **Commit Messages** | Custom message templates |
| **Tag Names** | Custom tag format |

### 3. npm Publishing

| Feature | Description |
|---------|-------------|
| **Auto Publish** | Publish to npm registry |
| **Package Scope** | Support scoped packages |
| **Access** | public, restricted |
| **OTAP** | dist-tags (latest, next) |
| **Dry Run** | Test without publishing |

### 4. GitHub Releases

| Feature | Description |
|---------|-------------|
| **Auto Release** | Create GitHub releases |
| **Release Notes** | Custom release notes |
| **Assets** | Upload release assets |
| **Draft** | Create draft releases |
| **Prerelease** | Mark as prerelease |

### 5. GitLab Releases

| Feature | Description |
|---------|-------------|
| **Auto Release** | Create GitLab releases |
| **Assets** | Upload release assets |
| **Release Notes** | Custom release notes |

### 6. Changelog

| Feature | Description |
|---------|-------------|
| **Auto Generate** | Generate from git commits |
| **Conventional Commits** | Parse commit conventions |
| **Keep a Changelog** | Follow keepachangelog.com |
| **Custom Command** | Use custom changelog tool |

## Plugin System

### Official Plugins

| Plugin | Purpose |
|--------|---------|
| `@release-it/conventional-changelog` | Conventional changelog |
| `@release-it/keep-a-changelog` | Keep a changelog standard |
| `@release-it/bumper` | Bump any file |
| `@release-it-plugins/lerna-changelog` | Lerna monorepo |

### Community Plugins

| Plugin | Purpose |
|--------|---------|
| `@jcamp-code/release-it-changelogen` | Unjs changelogen |
| `release-it-calver-plugin` | Calendar versioning |
| `@j-ulrich/release-it-regex-bumper` | Regex version bumping |
| `@jcamp-code/release-it-dotnet` | .NET projects |
| `release-it-pnpm` | pnpm workspaces |

## Hooks System

### Hook Features

| Feature | Description |
|---------|-------------|
| **Before Hooks** | Run before each step |
| **After Hooks** | Run after each step |
| **Plugin Hooks** | Hook into specific plugins |
| **Array Commands** | Run multiple commands |
| **Template Variables** | Use config variables |

### Hook Commands

```javascript
{
  "hooks": {
    "before:init": ["npm run lint", "npm test"],
    "after:bump": "npm run build",
    "after:git:push": "echo Pushed!"
  }
}
```

## Pre-releases

### Pre-release Types

| Type | Example |
|------|---------|
| **alpha** | 1.0.0-alpha.1 |
| **beta** | 1.0.0-beta.1 |
| **rc** | 1.0.0-rc.1 |

### Pre-release Options

```bash
# Beta release
release-it --preRelease=beta

# Alpha release
release-it --preRelease=alpha

# Auto detect from branch
release-it --preRelease
```

## CI/CD Features

### CI Mode

```bash
# Fully automated
release-it --ci

# Only version prompt, rest automated
release-it --only-version
```

### Dry Run

```bash
# Show what would happen
release-it --dry-run
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `GITHUB_TOKEN` | GitHub API token |
| `GITLAB_TOKEN` | GitLab API token |
| `NPM_TOKEN` | npm publishing token |

## Configuration

### Config File Types

| Type | Filename |
|------|----------|
| JSON | `.release-it.json` |
| JSONC | `.release-it.jsonc` |
| JS | `.release-it.js` |
| package.json | `release-it` property |

### Config Options

```javascript
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

## Interactive Features

### Prompts

| Prompt | Description |
|--------|-------------|
| **Version** | Select version increment |
| **Changelog** | Preview changes |
| **Confirm** | Confirm release |
| **Git Push** | Confirm push |

### Options

| Option | Description |
|--------|-------------|
| `--ci` | Skip all prompts |
| `--dry-run` | Show without doing |
| `--only-version` | Only version prompt |

## Summary

| Category | Features |
|----------|----------|
| **Version** | semver, pre-release, custom |
| **Git** | commit, tag, push |
| **npm** | publish, dist-tags |
| **GitHub** | releases, assets, drafts |
| **GitLab** | releases, assets |
| **Changelog** | auto-gen, conventional |
| **Plugins** | extend functionality |
| **Hooks** | run custom commands |