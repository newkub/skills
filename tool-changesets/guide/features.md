# Features

## Core Features

| Feature | Description |
|---------|-------------|
| **Changeset Files** | สร้างไฟล์บันทึกการเปลี่ยนแปลงแต่ละ package |
| **Version Calculation** | คำนวณ semver version อัตโนมัติ |
| **CHANGELOG Generation** | สร้าง changelog จาก changeset files |
| **Monorepo Support** | รองรับ workspace หลาย packages |
| **GitHub Integration** | สร้าง GitHub Releases อัตโนมัติ |
| **CI/CD Ready** | ทำงานร่วมกับ GitHub Actions |

## Version Bump Types

| Type | Trigger | Example |
|------|---------|---------|
| **major** | Breaking changes | `1.0.0` → `2.0.0` |
| **minor** | New features | `1.0.0` → `1.1.0` |
| **patch** | Bug fixes | `1.0.0` → `1.0.1` |

## Configuration Features

| Feature | Description |
|---------|-------------|
| **Fixed Packages** | กำหนด packages ที่ต้อง version พร้อมกัน |
| **Linked Packages** | ผูก packages ให้มี version เดียวกัน |
| **Independent Mode** | แต่ละ package version แยกกัน |
| **Ignore Packages** | ไม่รวม packages บางตัวใน versioning |
| **Custom Changelog** | ใช้ custom changelog generator |

## CLI Features

| Command | Description |
|---------|-------------|
| `init` | สร้าง config เริ่มต้น |
| `add` | สร้าง changeset ใหม่ |
| `version` | คำนวณ version และสร้าง changelog |
| `publish` | publish packages ขึ้น registry |
| `status` | แสดง changeset ที่รอ version |
| `build` | build packages ก่อน publish |

## GitHub Bot Features

| Feature | Description |
|---------|-------------|
| **PR Comments** | แสดง version ที่จะเปลี่ยนใน PR |
| **Auto-merge** | merge PR เมื่อ version ถูกต้อง |
| **Release Creation** | สร้าง GitHub Release อัตโนมัติ |
| **Changelog Preview** | preview changelog ใน PR |

## Workflow Features

```
┌─────────────────────────────────────────────────────────────┐
│                 Development Workflow                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. Develop Feature                                          │
│     │                                                        │
│     ▼                                                        │
│  2. Create Changeset (bunx changeset)                       │
│     │                                                        │
│     ▼                                                        │
│  3. Open PR with Changeset                                   │
│     │                                                        │
│     ▼                                                        │
│  4. GitHub Bot Reviews & Comments                            │
│     │                                                        │
│     ▼                                                        │
│  5. Merge to Main                                            │
│     │                                                        │
│     ▼                                                        │
│  6. CI/CD Runs Version & Publish                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Changelog Plugins

| Plugin | Description |
|--------|-------------|
| `@changesets/changelog-git` | ใช้ git history |
| `@changesets/changelog-github` | ใช้ GitHub API ดึง PR info |
| Custom | เขียน plugin เอง |

## Release Configuration

| Option | Values | Description |
|--------|--------|-------------|
| `access` | `public`, `restricted` | Package visibility |
| `commit` | `boolean` | Commit version changes |
| `gitTag` | `boolean` | สร้าง git tag |
| `push` | `boolean` | Push changes |

## Advanced Features

| Feature | Description |
|---------|-------------|
| **Snapshot Releases** | สำหรับ testing pre-release versions |
| **Otterwise Support** | รองรับ otterwise format |
| **Pre-enteries** | สร้าง changeset ก่อน merge |
| **Multiple Registries** | publish ไปหลาย registries |