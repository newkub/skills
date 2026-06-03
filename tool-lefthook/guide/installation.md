# Installation

## ติดตั้ง Lefthook

### วิธีที่ 1: ใช้ npm (แนะนำ)

```bash
# ติดตั้งแบบ dev dependency
npm install --save-dev lefthook

# หรือใช้ yarn
yarn add --dev lefthook

# หรือใช้ pnpm
pnpm add --save-dev lefthook
```

### วิธีที่ 2: ใช้ Go

```bash
# ติดตั้งด้วย go install
go install github.com/evilmartians/lefthook@latest

# หรือ clone และ build
git clone https://github.com/evilmartians/lefthook.git
cd lefthook
go install
```

### วิธีที่ 3: ใช้ Homebrew (macOS/Linux)

```bash
brew install lefthook
```

### วิธีที่ 4: ใช้ Docker

```bash
# Pull image
docker pull evilmartians/lefthook
```

## ตรวจสอบการติดตั้ง

```bash
# ตรวจสอบ version
npx lefthook version

# หรือถ้าติดตั้งแบบ global
lefthook version
```

## เริ่มต้นใช้งานใน Project

```bash
# Initialize lefthook ใน project
npx lefthook install

# สำหรับ Go projects
lefthook install

# สำหรับ Ruby projects
lefthook install -b ruby
```

## ความต้องการของระบบ

| ระบบ | ข้อกำหนด |
|------|----------|
| Node.js | v14 ขึ้นไป |
| Go | v1.16 ขึ้นไป |
| Git | v2.0 ขึ้นไป |
| OS | Windows, macOS, Linux |

## ถัดไป

- [Quick Start](quick-start.md) - เริ่มต้นใช้งาน Lefthook
- [Configuration](configuration.md) - การตั้งค่า Lefthook