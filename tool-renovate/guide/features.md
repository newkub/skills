# All Features

## ฟีเจอร์หลัก

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Automated PRs** | สร้าง PR อัตโนมัติสำหรับ updates |
| **Multi-platform** | รองรับ GitHub, GitLab, Bitbucket, Azure |
| **Monorepo** | รองรับ workspaces, Lerna, npm/pnpm/yarn |
| **Security** | เปิด vulnerability alerts ได้ |

## ฟีเจอร์สำหรับ Package Management

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Lock File Updates** | update lock files อัตโนมัติ |
| **Range Strategy** | auto, pin, bump, replace |
| **Semantic Commits** | สร้าง commit messages ตาม semantic versioning |
| **Group Updates** | group หลาย updates รวมกันใน PR เดียว |

## การตั้งค่าเกี่ยวกับ PR

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Assignees** | กำหนดคนรับผิดชอบ PR |
| **Labels** | เพิ่ม labels ให้ PR เช่น `dependencies` |
| **Milestone** | กำหนด milestone |
| **Auto-merge** | merge อัตโนมัติถ้าผ่านเงื่อนไข |
| **Rebase** | rebase แทน merge ได้ |

## Branch Strategy

| Strategy | คำอธิบาย |
|----------|----------|
| **Separate PRs** | แยก PR สำหรับแต่ละ dependency |
| **Grouped PRs** | รวม PRs ตาม group หรือ ecosystem |
| **Branches** | ตั้งชื่อ branch pattern ได้ |

## Advanced Features

| ฟีเจอร์ | คำอธิบาย |
|---------|----------|
| **Replace Dependencies** | migrate จาก deprecated packages |
| **Custom Regex** | กำหนด regex สำหรับ custom managers |
| **GitHub Actions** | รองรับ update workflow files |
| **Docker** | update Dockerfile base images |
| **Kubernetes** | update helm charts และ kubectl |

## Configuration Presets

ใช้ presets เหมือน ESLint:

```json
{
  "extends": [
    "config:base",           // base config
    "group:allNonMajor",     // group non-major updates
    "schedule:weekly",      // weekly schedule
    ":automergeMinor"       // auto-merge minor updates
  ]
}
```

> ดูเพิ่มเติมที่ [Renovate Presets](https://docs.renovatebot.com/presets/)
