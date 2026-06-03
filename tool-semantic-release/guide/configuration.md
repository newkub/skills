# Configuration

## การสร้าง Config File

สร้างไฟล์ `.releaserc.json` ที่ root ของโปรเจกต์:

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

หรือเพิ่มใน `package.json`:

```json
{
  "name": "my-package",
  "version": "0.0.0-development",
  "release": {
    "branches": ["main"],
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/npm",
      "@semantic-release/github"
    ]
  }
}
```

## ตัวเลือก Configuration หลัก

### Branches

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `branches` | `array` | branches ที่จะ release |
| `branches` | `string` | branch เดียว |
| `name` | `string` | branch name |
| `prerelease` | `boolean` | pre-release version |

### Plugins

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `plugins` | `array` | รายการ plugins |
| `@semantic-release/commit-analyzer` | plugin | วิเคราะห์ commits |
| `@semantic-release/release-notes-generator` | plugin | สร้าง release notes |
| `@semantic-release/npm` | plugin | publish npm |
| `@semantic-release/github` | plugin | GitHub releases |

## ตัวอย่าง Config สมบูรณ์

```json
{
  "branches": [
    "main",
    "stable",
    {
      "name": "beta",
      "prerelease": true
    }
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
}
```
