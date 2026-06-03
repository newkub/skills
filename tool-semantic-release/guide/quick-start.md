# Quick Start

## ขั้นตอนเริ่มต้น

### 1. ติดตั้ง semantic-release

```bash
npm install -D semantic-release
```

### 2. สร้าง Config File

สร้าง `.releaserc.json` ที่ root:

```json
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
}
```

### 3. ตั้งค่า Environment Variables

สำหรับ GitHub:
```bash
export GITHUB_TOKEN=ghp_xxx
export NPM_TOKEN=npm_xxx
```

### 4. ทดสอบด้วย Dry Run

```bash
npx semantic-release --dry-run
```

## ตัวอย่าง Conventional Commits

```bash
# Feature (minor version bump)
git commit -m "feat: add user login"

# Bug fix (patch version bump)
git commit -m "fix: resolve login issue"

# Breaking change (major version bump)
git commit -m "feat!: change API response format"

# With scope
git commit -m "feat(api): add new endpoint"
```

## ขั้นตอนถัดไป

- ดู [Key Concepts](key-concept.md) สำหรับความเข้าใจที่ลึกขึ้น
- ดู [Features](features.md) สำหรับฟีเจอร์ทั้งหมด
- ดู [Best Practices](best-practices.md) สำหรับแนวทางที่ดี
