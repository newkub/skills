# Configuration

## Purpose

แนะนำการตั้งค่า configuration สำหรับ Release It เพื่อให้เหมาะกับโปรเจกต์ของคุณ

## Scope

- Config Files
- Git Options
- npm Options
- GitHub Options
- GitLab Options
- Plugins
- Hooks

## Config Files

### .release-it.json

```json
{
  "$schema": "https://unpkg.com/release-it@20/schema/release-it.json",
  "git": {},
  "npm": {},
  "github": {}
}
```

### package.json

```json
{
  "release-it": {
    "git": {},
    "npm": {},
    "github": {}
  }
}
```

## Git Options

### Basic Git

```json
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true
  }
}
```

### Git Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `commitMessage` | string | `Release v${version}` | Commit message |
| `tagName` | string | `v${version}` | Tag name |
| `push` | boolean | `true` | Push to remote |
| `pushArgs` | string | `--tags` | Push arguments |
| `requireCommits` | boolean | `false` | Require commits |
| `commitAll` | boolean | `true` | Stage all changes |
| `addFiles` | string[] | `[]` | Files to add |
| `changelog` | string | auto | Changelog command |

### Tag Options

```json
{
  "git": {
    "tagName": "v${version}",
    "tagMatch`": "v*",
    "requireTagMatching`: false
  }
}
```

## npm Options

### Basic npm

```json
{
  "npm": {
    "publish": true
  }
}
```

### npm Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `publish` | boolean | `true` | Publish to npm |
| `access` | string | `public` | public/restricted |
| `otp` | string | - | One-time password |
| `distTag` | string | `latest` | Distribution tag |
| `skipChecks` | boolean | `false` | Skip version check |
| `publishPath` | string | `.` | Package path |

### Scoped Packages

```json
{
  "npm": {
    "publish": true,
    "access": "public"
  }
}
```

## GitHub Options

### Basic GitHub

```json
{
  "github": {
    "release": true
  }
}
```

### GitHub Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `release` | boolean | `false` | Create release |
| `releaseName` | string | `v${version}` | Release name |
| `releaseNotes` | string | auto | Release notes |
| `draft` | boolean | `false` | Draft release |
| `prerelease` | boolean | `false` | Prerelease |
| `assets` | string[] | `[]` | Release assets |

### GitHub with Assets

```json
{
  "github": {
    "release": true,
    "assets": [
      "dist/*.js",
      "dist/*.css",
      "README.md"
    ]
  }
}
```

## GitLab Options

### Basic GitLab

```json
{
  "gitlab": {
    "release": true
  }
}
```

### GitLab Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `release` | boolean | `false` | Create release |
| `releaseName` | string | `v${version}` | Release name |
| `releaseNotes` | string | auto | Release notes |
| `milestones` | string[] | `[]` | Associated milestones |
| `assets` | object[] | `[]` | Release assets |

## Plugin Options

### Conventional Changelog

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

### Keep a Changelog

```bash
npm install -D @release-it/keep-a-changelog
```

```json
{
  "plugins": {
    "@release-it/keep-a-changelog": {
      "infile": "CHANGELOG.md"
    }
  }
}
```

## Hooks Options

### Hook Syntax

```json
{
  "hooks": {
    "before:init": ["npm run lint", "npm test"],
    "after:bump": "npm run build",
    "after:release": "echo Released v${version}"
  }
}
```

### Available Hooks

| Hook | Description |
|------|-------------|
| `before:init` | Before anything |
| `beforeBump` | Before version bump |
| `before:version:bump` | Before each file |
| `after:version:bump` | After each file |
| `after:bump` | After all bumps |
| `beforeRelease` | Before publish |
| `after:release` | After everything |

## Full Example

```json
{
  "$schema": "https://unpkg.com/release-it@20/schema/release-it.json",
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true,
    "changelog": "git log --oneline --pretty=medium ${lastTag}..HEAD"
  },
  "npm": {
    "publish": true,
    "access": "public"
  },
  "github": {
    "release": true,
    "releaseName": "v${version}"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md",
      "preset": {
        "name": "conventionalcommits"
      }
    }
  },
  "hooks": {
    "before:init": ["npm run lint"],
    "after:bump": "npm run build",
    "after:release": "echo Successfully released v${version}"
  }
}
```

## Summary

| Category | Options |
|----------|---------|
| **Git** | commit, tag, push, changelog |
| **npm** | publish, access, dist-tag |
| **GitHub** | release, assets, draft |
| **GitLab** | release, assets, milestones |
| **Plugins** | conventional-changelog, etc |
| **Hooks** | before/after each step |