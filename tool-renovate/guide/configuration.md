# Configuration

## การสร้าง Config File

สร้างไฟล์ `renovate.json` ที่ root ของโปรเจกต์:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"]
}
```

หรือเพิ่มใน `package.json`:

```json
{
  "name": "my-project",
  "renovate": {
    "extends": ["config:recommended"]
  }
}
```

## ตัวเลือก Configuration หลัก

### Base Configuration

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `extends` | `array` | ใช้ presets ที่มีอยู่แล้ว |
| `labels` | `array` | labels สำหรับ PRs |
| `assignees` | `array` | คนรับผิดชอบ PR |
| `reviewers` | `array` | คนที่ต้อง review |

### Schedule Configuration

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `schedule` | `array` | กำหนดเวลาสร้าง PRs |
| `timezone` | `string` | timezone ที่ใช้ |

### Update Configuration

| Option | Type | คำอธิบาย |
|--------|------|----------|
| `rangeStrategy` | `string` | auto, pin, bump, replace |
| `automerge` | `boolean` | auto-merge PRs |
| `separateMajorMinor` | `boolean` | แยก major/minor updates |

## Package Rules

```json
{
  "packageRules": [
    {
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true
    },
    {
      "matchPackagePatterns": ["^@angular"]
    }
  ]
}
```

| Pattern | คำอธิบาย |
|---------|----------|
| `matchUpdateTypes` | minor, patch, major, pin |
| `matchPackagePatterns` | regex pattern สำหรับ package names |
| `matchPackages` | exact package names |
