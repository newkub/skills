# Quick Start

## ขั้นตอนเริ่มต้น

### 1. ติดตั้ง Renovate App

1. ไปที่ [Renovate GitHub App](https://github.com/apps/renovate)
2. คลิก "Install"
3. เลือก repositories

### 2. สร้าง Config File

สร้าง `renovate.json` ที่ root:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:base"]
}
```

### 3. Config พื้นฐานแนะนำ

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "config:base",
    ":automergeMinor",
    ":enableVulnerabilityAlerts"
  ],
  "labels": ["dependencies"],
  "schedule": ["every weekend"]
}
```

## การใช้งาน CLI

```bash
# รัน Renovate แบบ dry-run
npx renovate --dry-run

# รัน Renovate สำหรับ repository
npx renovate --repository=owner/repo

# รัน Renovate กับ token
RENOVATE_TOKEN=xxx npx renovate
```

## การตรวจสอบ Config

```bash
# ตรวจสอบว่า config ถูกต้อง
npx renovate:config:validate

# แสดง config ที่ถูก resolve
npx renovate:config:这套
```

## ขั้นตอนถัดไป

- ดู [Features](features.md) สำหรับฟีเจอร์ทั้งหมด
- ดู [Configuration](configuration.md) สำหรับตัวเลือกเพิ่มเติม
- ดู [Best Practices](best-practices.md) สำหรับแนวทางที่ดี
