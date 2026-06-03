# How It Works

## Purpose

อธิบายการทำงานภายในของ Release It เพื่อให้เข้าใจ release flow และ hooks lifecycle

## Scope

- Release Flow
- Hooks Lifecycle
- Plugin System
- Execution Order

## Release Flow

```
+---------------------------+
|  1. Init                  |
|  - Check git status       |
|  - Validate config        |
+---------------------------+
           |
           v
+---------------------------+
|  2. Determine Version     |
|  - package.json version   |
|  - Git tags               |
|  - Default to 0.0.0       |
+---------------------------+
           |
           v
+---------------------------+
|  3. Changelog (optional)  |
|  - Generate from commits  |
|  - Show in prompt         |
+---------------------------+
           |
           v
+---------------------------+
|  4. User Confirmation     |
|  - Show version + changes |
|  - Confirm to proceed     |
+---------------------------+
           |
           v
+---------------------------+
|  5. Version Bump           |
|  - Update package.json    |
|  - Update other files     |
+---------------------------+
           |
           v
+---------------------------+
|  6. Git Operations        |
|  - Commit changes         |
|  - Create tag             |
|  - Push to remote         |
+---------------------------+
           |
           v
+---------------------------+
|  7. Publish (optional)    |
|  - npm publish            |
|  - GitHub release         |
|  - GitLab release         |
+---------------------------+
           |
           v
+---------------------------+
|  8. Complete              |
|  - Show summary           |
|  - Execute after:release  |
+---------------------------+
```

## Hooks Lifecycle

### Hook Types

| Hook | Description |
|------|-------------|
| `before:init` | Before anything starts |
| `beforeBump` | Before version bump |
| `before:version:bump` | Before each file bump |
| `after:version:bump` | After each file bump |
| `after:bump` | After all bumps |
| `beforeRelease` | Before publishing |
| `before:git:commit` | Before git commit |
| `after:git:commit` | After git commit |
| `before:git:tag` | Before git tag |
| `after:git:tag` | After git tag |
| `before:git:push` | Before git push |
| `after:git:push` | After git push |
| `before:github:release` | Before GitHub release |
| `after:github:release` | After GitHub release |
| `before:npm:publish` | Before npm publish |
| `after:npm:publish` | After npm publish |
| `after:release` | After everything |
| `afterRelease` | After release completed |

### Hook Examples

```javascript
{
  "hooks": {
    // Run before anything
    "before:init": ["npm run lint", "npm test"],
    
    // Run after version bump
    "after:bump": "npm run build",
    
    // Run after git push
    "after:git:push": "echo Pushed to origin",
    
    // Run after release
    "after:release": "echo Successfully released v${version}"
  }
}
```

### Hook with Plugin

```javascript
{
  "hooks": {
    // Hook into specific plugin
    "after:conventional-changelog:bump": "./scripts/update-version.sh",
    "before:github:release": "echo Preparing GitHub release"
  }
}
```

## Plugin System

### Built-in Plugins

| Plugin | Description |
|--------|-------------|
| `version` | Version bump |
| `git` | Git operations |
| `npm` | npm publishing |
| `github` | GitHub releases |
| `gitlab` | GitLab releases |

### Third-party Plugins

| Plugin | Package |
|--------|---------|
| Conventional Changelog | `@release-it/conventional-changelog` |
| Keep a Changelog | `@release-it/keep-a-changelog` |
| Bumper | `@release-it/bumper` |
| Lerna Changelog | `@release-it-plugins/lerna-changelog` |
| Changelogen | `@jcamp-code/release-it-changelogen` |

### Using Plugins

```bash
npm install -D @release-it/conventional-changelog
```

```javascript
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

## Execution Order

### Default Order

```
1. before:init
2. Version determination
3. Changelog generation
4. User prompt (interactive)
5. beforeBump
6. Version bump (all files)
7. after:bump
8. beforeRelease
9. Git: commit → tag → push
10. npm publish
11. GitHub release
12. GitLab release
13. after:release
```

### Hook Execution

```
before:init
    └── npm run lint
    └── npm test
        |
        v
beforeBump
        |
        v
Version bump (package.json)
        |
        v
after:bump
    └── npm run build
        |
        v
beforeRelease
        |
        v
Git commit → tag → push
        |
        v
npm publish
        |
        v
GitHub/GitLab release
        |
        v
after:release
```

## Configuration Variables

### Available Variables

| Variable | Description |
|----------|-------------|
| `${version}` | New version |
| `${latestVersion}` | Previous version |
| `${changelog}` | Generated changelog |
| `${name}` | Package name |
| `${repo.remote}` | Git remote URL |
| `${repo.owner}` | Repository owner |
| `${repo.repository}` | Repository name |
| `${branchName}` | Current branch |
| `${releaseUrl}` | Release URL |

### Variable Usage

```javascript
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}"
  },
  "hooks": {
    "after:release": "echo Released ${name} v${version}"
  }
}
```

## Summary

| Phase | Description |
|-------|-------------|
| **Init** | Check git, validate config |
| **Version** | Determine + bump version |
| **Changelog** | Generate release notes |
| **Git** | commit, tag, push |
| **Publish** | npm, GitHub, GitLab |
| **Hooks** | Run at each step |