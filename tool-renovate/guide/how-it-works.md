# How It Works

## วงจรการทำงานของ Renovate

```
┌─────────────────────────────────────────────────────────────┐
│                     Repository                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  Scan        │ ──── │   Check      │ ──── │  Create │  │
│   │  Packages    │      │   Versions   │      │  PRs    │  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     Package Registry                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌──────────────┐      ┌──────────────┐      ┌─────────┐  │
│   │  npm registry│      │  PyPI        │      │  Rubygems│  │
│   │  GitHub API  │      │  Maven       │      │  Docker │  │
│   └──────────────┘      └──────────────┘      └─────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## ขั้นตอนการทำงาน

| Step | คำอธิบาย | Details |
|------|----------|---------|
| **1** | Repository Init | อ่าน config, ค้นหา package files |
| **2** | Package Lookup | ดึงเวอร์ชันปัจจุบันจาก lock files |
| **3** | Version Check | ตรวจสอบเวอร์ชันล่าสุดจาก registry |
| **4** | PR Creation | สร้าง PR พร้อม changelog, tests |
| **5** | Auto-merge | merge อัตโนมัติถ้าผ่านเงื่อนไข |

## การตั้งค่า Schedule

Renovate รองรับการกำหนดเวลาสร้าง PRs เพื่อลด noise:

```json
{
  "schedule": [
    "before 8am on Monday",
    "every weekend"
  ]
}
```

| Schedule Option | คำอธิบาย |
|-----------------|----------|
| `at any time` | ทำทันที (ไม่แนะนำ) |
| `before 8am` | ทำก่อน 8 โมงเช้า |
| `after 10pm` | ทำหลัง 22:00 |
| `every weekend` | ทำวันหยุดเสาร์-อาทิตย์ |
| `before 5am on the first day of the month` | ทำเดือนละครั้ง |

## Presets System

คล้ายกับ ESLint - ใช้ config ที่มีอยู่แล้วได้:

```json
{
  "extends": [
    "config:base",           // default config
    ":enableVulnerabilityAlerts",
    "group:allNonMajor"
  ]
}
```

| Preset | การใช้งาน |
|--------|----------|
| `config:base` | Default recommended config |
| `config:recommended` | Recommended settings |
| `group:monorepos` | Group monorepo dependencies |
| `:enableVulnerabilityAlerts` | เปิด security alerts |
