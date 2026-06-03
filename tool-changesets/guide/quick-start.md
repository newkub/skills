# Quick Start

## Create New Changeset

```bash
# 1. Run changeset CLI
bunx changeset

# 2. Select packages and version bump
? Please select a package: my-package
? Please select bump type: minor

# 3. Enter description
? Please enter summary: Add new feature
? Please enter extra details: (just press enter if none)
```

## Changeset File Example

ไฟล์จะถูกสร้างที่ `.changeset/`:

```md
---
"my-package": minor
---

Add new feature for better UX
```

## Version Packages

```bash
# 1. Version all packages with changesets
bunx changeset version

# 2. ดูผลลัพธ์
# - package.json versions ถูกอัพเดท
# - CHANGELOG.md ถูกสร้าง/อัพเดท
# - git commit ถูกสร้าง
```

## Publish Packages

```bash
# 1. Publish to npm
bunx changeset publish

# 2. หรือ CI/CD
# GitHub Actions จะรันเมื่อ push to main
```

## Typical Workflow

```bash
# Day 1: Add feature
git checkout -b feature/new-feature
bunx changeset add
git commit -m "feat: Add new feature"
git push

# Day 2: Review PR
# - Bot แสดง version preview
# - Merge PR

# Day 3: Release (on main)
bunx changeset version
bunx changeset publish
```

## Common Commands

| Command | Description |
|---------|-------------|
| `bunx changeset` | Create changeset |
| `bunx changeset version` | Apply version bumps |
| `bunx changeset publish` | Publish to npm |
| `bunx changeset status` | Show pending changesets |
| `bunx changeset diff` | Show diff of changes |

## GitHub Actions Example

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npx changeset version
      - run: npx changeset publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Next Steps

| Resource | Description |
|----------|-------------|
| [Key Concept](key-concept.md) | เข้าใจ concepts พื้นฐาน |
| [Features](features.md) | Features ทั้งหมด |
| [Configuration](configuration.md) | ตั้งค่าเพิ่มเติม |
| [Best Practices](best-practices.md) | แนวทางที่ดี |