# How It Works

## Changesets Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    Changesets Workflow                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     │
│  │  Developer  │────▶│  changeset  │────▶│   version   │     │
│  │  creates    │     │   file      │     │  command    │     │
│  └─────────────┘     └─────────────┘     └─────────────┘     │
│                                              │               │
│                                              ▼               │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     │
│  │   GitHub    │◀────│  publish    │◀────│  changelog   │     │
│  │  Release    │     │  command    │     │  generated  │     │
│  └─────────────┘     └─────────────┘     └─────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Step-by-Step Process

```
1. Developer สร้าง changeset
   ↓
   .changeset/cool-unicorn.md
   ┌─────────────────────────────────┐
   │ ---
   │ "my-package": minor
   │ ---
   │ Add new feature
   └─────────────────────────────────┘
                │
                ▼
2. Run changeset version
   ↓
   - อ่านทุก changeset files
   - คำนวณ version ใหม่ (minor: 1.0.0 → 1.1.0)
   - อัพเดท package.json
   - สร้าง/อัพเดท CHANGELOG.md
   - commit changes
                │
                ▼
3. CI/CD รัน changeset publish
   ↓
   - build packages
   - publish to npm registry
   - create GitHub Release
```

## Version Calculation Logic

```
┌─────────────────────────────────────────────────────────────┐
│                   Version Calculation                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Changesets in .changeset/:                                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  feat-1.md: "pkg-a" - major                          │   │
│  │  feat-2.md: "pkg-a" - minor                          │   │
│  │  fix-1.md: "pkg-b" - patch                           │   │
│  └──────────────────────────────────────────────────────┘   │
│                              │                               │
│                              ▼                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  pkg-a: 1.0.0 → 2.0.0 (highest: major)               │   │
│  │  pkg-b: 1.0.0 → 1.0.1 (highest: patch)              │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## File System Changes

```
monorepo/
├── .changeset/
│   ├── config.json           # Configuration
│   ├── cool-unicorn.md       # Changeset file
│   └── ...
├── packages/
│   └── my-package/
│       ├── package.json      # Version ถูกอัพเดท
│       └── CHANGELOG.md      # ถูกสร้าง/อัพเดท
└── package.json              # Workspace config
```

## GitHub Actions Integration

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

## CHANGELOG Format

```md
# Changelog

## 1.1.0

### Minor Changes

- `abc123` - Add new feature (#123)

### Patch Changes

- `def456` - Fix bug (#124)
```

## Configuration Flow

```
.changeset/config.json
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│                      Config Options                          │
├─────────────────────────────────────────────────────────────┤
│  • fixed: packages ที่ version เปลี่ยนพร้อมกัน                │
│  • linked: packages ที่ version ผูกกัน                       │
│  • access: restricted (private) หรือ public                  │
│  • baseBranch: branch ที่ใช้เปรียบเทียบ                      │
│  • changelog: changelog generator plugin                     │
└─────────────────────────────────────────────────────────────┘
```