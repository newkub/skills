# Configuration

## Config File Location

Changesets config อยู่ที่ `.changeset/config.json` หรือ `.changesetrc.json`

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `changelog` | string | `@changesets/changelog-git` | Changelog generator |
| `commit` | boolean | `false` | Auto commit version changes |
| `fixed` | array | `[]` | Packages เปลี่ยน version พร้อมกัน |
| `linked` | array | `[]` | Packages ที่ version ผูกกัน |
| `access` | string | `"restricted"` | Package access level |
| `baseBranch` | string | `"main"` | Base branch สำหรับ comparison |
| `updateInternalDependencies` | string | `"patch"` | Internal deps version bump |
| `ignore` | array | `[]` | Packages ที่จะ ignore |
| `gitTag` | boolean | `true` | Create git tags |
| `push` | boolean | `true` | Push to remote |

## Example Configurations

### Basic (Independent Versions)

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/changelog-git",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main"
}
```

### Fixed Packages

Packages ใน array จะเปลี่ยน version พร้อมกันเสมอ:

```json
{
  "fixed": [
    ["@my-org/shared", "@my-org/utils"]
  ]
}
```

### Linked Packages

Packages ใน array จะมี version เดียวกันเสมอ:

```json
{
  "linked": [
    ["@my-org/core", "@my-org/cli"]
  ]
}
```

### Private Packages

```json
{
  "access": "restricted",
  "ignore": ["@my-org/internal-tool"]
}
```

### Public Packages

```json
{
  "access": "public"
}
```

## GitHub Changelog

ใช้ GitHub API สำหรับ rich changelog:

```json
{
  "changelog": [
    "@changesets/changelog-github",
    { "repo": "username/repo" }
  ]
}
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_TOKEN` | GitHub API token | สำหรับ GitHub changelog |
| `NPM_TOKEN` | npm publish token | สำหรับ publish |
| `GITLAB_TOKEN` | GitLab API token | สำหรับ GitLab |
| `CI` | CI environment | สำหรับ CI detection |

## Package.json Configuration

เพิ่มใน root `package.json`:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/username/repo.git"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org"
  }
}
```

## CLI Options

```bash
# Override config options via CLI
bunx changeset version --no-commit
bunx changeset version --ignore="pkg-to-skip"
bunx changeset publish --no-git-tag
```