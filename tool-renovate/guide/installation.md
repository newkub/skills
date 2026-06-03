# Installation

## วิธีการติดตั้ง

### วิธีที่ 1: ผ่าน Renovate App (แนะนำ)

1. ไปที่ [Renovate GitHub App](https://github.com/apps/renovate)
2. คลิก "Install"
3. เลือก repositories ที่ต้องการ
4. Renovate จะสร้าง `renovate.json` ให้อัตโนมัติ

### วิธีที่ 2: ผ่าน npm

```bash
# ติดตั้งแบบ local
npm install renovate

# หรือใช้ npx
npx renovate --version

# ติดตั้งแบบ global
npm install -g renovate
```

### วิธีที่ 3: ผ่าน Docker

```bash
# รัน Renovate ใน Docker
docker run renovate/renovate:latest

# หรือใช้ docker-compose
docker-compose up -d renovate
```

## เวอร์ชันที่แนะนำ

| สิ่งที่ต้องมี | เวอร์ชัน |
|-------------|----------|
| **Node.js** | 18+ |
| **npm** | 8+ |

## การตรวจสอบการติดตั้ง

```bash
# ตรวจสอบเวอร์ชัน
npx renovate --version

# ตรวจสอบ config
npx renovate:config:validate

# รัน dry-run
npx renovate --dry-run
```

## Self-Hosted Configuration

```bash
# ตั้งค่า RENOVATE_TOKEN
export RENOVATE_TOKEN="ghp_xxx"

# ตั้งค่า RENOVATE_PLATFORM
export RENOVATE_PLATFORM="github"

# รัน renovate
npx renovate
```
