# Key Concept

## Purpose

แนวคิดหลักและหลักการทำงานของ Release It ที่ทำให้เป็น powerful release automation tool

## What is Release It?

Release It เป็น generic CLI tool สำหรับ automate versioning และ package publishing รองรับ:
- Version bump (semver)
- Git commit, tag, push
- Execute commands (hooks)
- GitHub/GitLab releases
- Changelog generation
- npm publishing
- Pre-releases

## Core Concepts

### 1. Version Bump

```bash
# Interactive
npx release-it

# Non-interactive (CI)
npx release-it --ci

# Pre-releases
npx release-it --preRelease=beta
```

### 2. Git Integration

```javascript
{
  "git": {
    "commitMessage": "chore: release v${version}",
    "tagName": "v${version}",
    "push": true
  }
}
```

### 3. npm Publishing

```javascript
{
  "npm": {
    "publish": true
  }
}
```

### 4. GitHub Releases

```javascript
{
  "github": {
    "release": true,
    "releaseName": "v${version}"
  }
}
```

### 5. Plugins

```bash
npm install -D @release-it/conventional-changelog
```

```javascript
{
  "plugins": {
    "@release-it/conventional-changelog": {
      "infile": "CHANGELOG.md"
    }
  }
}
```

### 6. Hooks

```javascript
{
  "hooks": {
    "before:init": ["npm run lint", "npm test"],
    "after:bump": "npm run build",
    "after:release": "echo Successfully released v${version}"
  }
}
```

## Version Determination

Release It ใช้วิธีการหา version ดังนี้:

1. **package.json** → ใช้ version จาก package.json
2. **Git tags** → ใช้ latest git tag
3. **Fallback** → ใช้ 0.0.0

### Skip Version from package.json

```javascript
{
  "npm": {
    "skipChecks": true
  }
}
```

## Interactive vs CI Mode

| Mode | Behavior |
|------|----------|
| **Interactive** | แสดง prompts ให้ยืนยันแต่ละขั้นตอน |
| **CI Mode** | ทำงานอัตโนมัติโดยไม่มี prompts (`--ci`) |
| **Dry Run** | แสดงสิ่งที่จะทำโดยไม่ทำจริง (`--dry-run`) |

## Configuration Files

### .release-it.json

```json
{
  "$schema": "https://unpkg.com/release-it@20/schema/release-it.json",
  "git": {
    "commitMessage": "chore: release v${version}"
  },
  "github": {
    "release": true
  }
}
```

### package.json

```json
{
  "release-it": {
    "git": {
      "commitMessage": "chore: release v${version}"
    }
  }
}
```

## When to Use

### Use Release It When:

| Scenario | Reason |
|----------|--------|
| **npm packages** | Auto version + publish |
| **GitHub releases** | Auto release notes |
| **CI/CD** | Automate release flow |
| **Monorepos** | Release multiple packages |
| **Conventional commits** | Auto changelog |

## Summary

| Concept | Description |
|---------|-------------|
| **Version Bump** | Auto semver increment |
| **Git** | commit, tag, push |
| **npm** | Publish to registry |
| **GitHub/GitLab** | Create releases |
| **Plugins** | Extend functionality |
| **Hooks** | Run custom commands |