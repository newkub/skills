# Best Practices

## Changeset Writing

| Practice | Description |
|----------|-------------|
| **Be specific** | ระบุ package name ชัดเจน |
| **One change per changeset** | แต่ละ changeset สำหรับ 1 feature/fix |
| **Descriptive summary** | เขียน summary ที่เข้าใจง่าย |
| **Breaking changes** | ใช้ `major` และอธิบาย breaking change |

```md
# ✅ Good
---
"@my-org/core": minor
---

Add `useQuery` hook for data fetching

# ❌ Bad
---
"@my-org/core": patch
---

Update stuff
```

## Version Bump Guidelines

| Change Type | Bump | Example |
|-------------|------|---------|
| New feature | minor | `1.0.0` → `1.1.0` |
| Bug fix | patch | `1.0.0` → `1.0.1` |
| Breaking API | major | `1.0.0` → `2.0.0` |
| Internal refactor | patch | `1.0.0` → `1.0.1` |

## Monorepo Structure

```
monorepo/
├── .changeset/
│   ├── config.json
│   └── *.md          # Changesets
├── packages/
│   ├── pkg-a/        # Public packages
│   └── pkg-b/        # Public packages
└── internal/
    └── pkg-c/        # Internal packages (ใน ignore)
```

## CI/CD Best Practices

| Practice | Description |
|----------|-------------|
| **Use dry-run first** | ทดสอบก่อน run จริง |
| **Protect main branch** | ต้อง merge ผ่าน PR |
| **Use secrets** | เก็บ NPM_TOKEN ใน secrets |
| **Test locally** | รัน `changeset version` ก่อน push |

## GitHub Actions Setup

```yaml
# ✅ Good: Complete workflow
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
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

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Forgot to create changeset | ใช้ pre-enteries หรือ `--empty` |
| Wrong version bump | ลบ changeset และสร้างใหม่ |
| CHANGELOG ไม่อัพเดท | ตรวจสอบ config `changelog` |
| Publish ไม่สำเร็จ | ตรวจสอบ NPM_TOKEN permissions |

## Configuration Tips

| Tip | Description |
|-----|-------------|
| **Use linked for related packages** | version ตรงกันเสมอ |
| **Use fixed for shared code** | อัพเดทพร้อมกัน |
| **Set ignore for internal** | ไม่ต้อง publish เป็น public |
| **Use GitHub changelog** | ได้ rich PR links |

## Team Workflow

```
1. Developer creates feature branch
2. Opens PR with changeset
3. Bot comments version preview
4. Code review and merge
5. CI runs version + publish
6. GitHub Release created automatically
```