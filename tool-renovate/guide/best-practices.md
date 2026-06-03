# Best Practices

## Configuration

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ presets** | เริ่มจาก `config:base` แล้วปรับแต่ง |
| **กำหนด schedule** | ลด noise โดยกำหนดเวลาสร้าง PR |
| **ใช้ labels** | ทำให้ filter PRs ง่ายขึ้น |

## Security

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ :enableVulnerabilityAlerts** | เปิด security alerts |
| **ตั้งค่า :securityAudit** | รวม security audit |
| **กำหนด assignees** | ตรวจสอบ PRs ที่มีผลกระทบสูง |

## Performance

| Practice | คำอธิบาย |
|----------|----------|
| **ใช้ separateMajorMinor** | แยก major/minor updates |
| **group หลาย packages** | ลดจำนวน PRs |
| **ใช้ automerge** | ลด manual work |

## Common Pitfalls

| Pitfall | วิธีหลีกเลี่ยง |
|---------|---------------|
| **PRs เยอะเกินไป** | กำหนด schedule เช่น `every weekend` |
| **Merge conflicts** | ใช้ `rebaseWhen=behindbaseBranch` |
| **Auto-merge มากเกินไป** | เริ่มจาก minor/patch ก่อน |
| **Config ไม่ถูกต้อง** | ทดสอบด้วย `--dry-run` |

## Recommended Config

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "config:base",
    ":automergeMinor",
    ":enableVulnerabilityAlerts"
  ],
  "labels": ["dependencies"],
  "assignees": ["@owner"],
  "schedule": ["before 8am on Monday"]
}
```

## Self-Hosted Best Practices

```bash
# ตั้งค่า RENOVATE_TOKEN
export RENOVATE_TOKEN="ghp_xxx"

# ตั้งค่า RENOVATE_PLATFORM
export RENOVATE_PLATFORM="github"

# ตั้งค่า RENOVATE_AUTODISCOVER
export RENOVATE_AUTODISCOVER="true"
```
