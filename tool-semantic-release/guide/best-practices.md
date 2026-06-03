# Best Practices

## Commit Messages

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ conventional commits** | `feat:`, `fix:`, `docs:` prefixes |
| **อธิบายให้ชัดเจน** | commit message สื่อความหมาย |
| **ใช้ scope** | `feat(api):`, `fix(ui):` |
| **BREAKING CHANGE** | ใส่เครื่องหมาย `!` หรือ footer |

## Configuration

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ branches ที่ถูกต้อง** | main, stable, beta |
| **กำหนด plugins ที่จำเป็น** | ไม่ต้องใช้ทั้งหมด |
| **ใช้ dry-run ก่อน** | ทดสอบก่อนใช้งานจริง |

## CI/CD

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ secrets** | เก็บ tokens ใน CI secrets |
| **ตั้งค่า GIT_DEPTH=0** | ให้ CI clone ทั้งหมด |
| **รันหลัง build สำเร็จ** | รัน semantic-release หลัง tests |

## Common Pitfalls

| Pitfall | วิธีหลีกเลี่ยง |
|---------|---------------|
| **ไม่มี GITHUB_TOKEN** | ตั้งค่า env ใน CI |
| **commit ไม่ถูก format** | ใช้ commitlint ช่วย |
| **branch ผิด** | ตรวจสอบ branches config |
| **publish ผิด registry** | ตรวจสอบ .npmrc |

## Recommended Config

```json
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
}
```

## Environment Setup

```bash
# Required for GitHub
GITHUB_TOKEN=ghp_xxxx

# Required for npm
NPM_TOKEN=xxxx

# Debug mode
DEBUG=semantic-release:* npx semantic-release
```
