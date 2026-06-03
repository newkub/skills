# Best Practices

## Purpose

แนวทางปฏิบัติที่ดีในการใช้งาน Release It เพื่อให้ได้ประสิทธิภาพและความปลอดภัยที่ดีที่สุด

## Scope

- Configuration
- Security
- CI/CD
- Hooks
- Monorepos

## Configuration Best Practices

### 1. Use Schema

```json
{
  "$schema": "https://unpkg.com/release-it@20/schema/release-it.json"
}
```

### 2. Descriptive Commit Messages

```json
{
  "git": {
    "commitMessage": "chore: release v${version}"
  }
}
```

### 3. Tag Format

```json
{
  "git": {
    "tagName": "v${version}"
  }
}
```

## Security Best Practices

### 1. Use Environment Variables

```bash
# Don't hardcode tokens
export GITHUB_TOKEN=your_token
export NPM_TOKEN=your_token
```

### 2. CI/CD Secrets

```yaml
# GitHub Actions
- name: Release
  run: npx release-it --ci
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### 3. Protect Main Branch

```bash
# Don't push to main directly
# Use PRs and protected branches
```

### 4. Dry Run First

```bash
# Always test with dry run
npx release-it --dry-run

# Then run for real
npx release-it --ci
```

## CI/CD Best Practices

### 1. CI Mode

```bash
# Use --ci for CI environments
npx release-it --ci
```

### 2. Only Version Prompt

```bash
# For semi-automated releases
npx release-it --only-version
```

### 3. Fail on Tests

```json
{
  "hooks": {
    "before:init": ["npm run lint", "npm test"]
  }
}
```

### 4. Skip Checks When Needed

```bash
# Skip version check from package.json
release-it --skipChecks
```

## Hooks Best Practices

### 1. Run Tests Before Release

```json
{
  "hooks": {
    "before:init": ["npm run lint", "npm run test"]
  }
}
```

### 2. Build After Bump

```json
{
  "hooks": {
    "after:bump": "npm run build"
  }
}
```

### 3. Notify After Release

```json
{
  "hooks": {
    "after:release": "echo Successfully released v${version}"
  }
}
```

### 4. Array Commands

```json
{
  "hooks": {
    "before:init": [
      "npm run lint",
      "npm run test",
      "npm run build"
    ]
  }
}
```

## Conventional Commits

### Use Conventional Changelog

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

### Commit Message Format

```
feat: add new feature
fix: fix bug
docs: update documentation
style: code style changes
refactor: code refactoring
test: add tests
chore: maintenance
```

## Version Management

### Semantic Versioning

| Increment | When |
|-----------|------|
| **major** | Breaking changes |
| **minor** | New features (backward compatible) |
| **patch** | Bug fixes |

### Pre-releases

```bash
# Beta
release-it --preRelease=beta

# Alpha
release-it --preRelease=alpha

# RC
release-it --preRelease=rc
```

## Monorepo Best Practices

### Lerna Changelog

```bash
npm install -D @release-it-plugins/lerna-changelog
```

```json
{
  "plugins": {
    "@release-it-plugins/lerna-changelog": {
      "infile": "CHANGELOG.md"
    }
  }
}
```

### Workspaces

```bash
npm install -D release-it-pnpm
```

## Common Pitfalls

### 1. Forget to Commit

```json
{
  "git": {
    "requireCommits": true
  }
}
```

### 2. Push Failed

```bash
# Retry without incrementing
release-it --no-increment --no-npm
```

### 3. Wrong Version Source

```json
{
  "npm": {
    "skipChecks": true
  }
}
```

### 4. Missing Token

```bash
# Set tokens before running
export GITHUB_TOKEN=your_token
export NPM_TOKEN=your_token
```

## Summary

| Category | Best Practice |
|----------|---------------|
| **Config** | Use schema, descriptive messages |
| **Security** | Use env vars, secrets in CI |
| **CI/CD** | Use --ci, dry run first |
| **Hooks** | Test before, build after |
| **Version** | Follow semver, pre-releases |
| **Pitfalls** | Commit, push, tokens |