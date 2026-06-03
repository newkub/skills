# Installation

วิธีติดตั้ง Bunup

## Requirements

- [Bun](https://bun.sh) เวอร์ชันล่าสุด

## Install Bun

ถ้ายังไม่มี Bun, ติดตั้งก่อน:

```sh
# macOS / Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"

# หรือใช้ npm
npm install -g bun
```

## Install Bunup

### As Dev Dependency (Recommended)

```sh
# ในโปรเจกต์ที่มี package.json
bun add --dev bunup

# หรือใช้ npm
npm install --save-dev bunup

# หรือใช้ yarn
yarn add --dev bunup

# หรือใช้ pnpm
pnpm add --save-dev bunup
```

### Using bunx (No Install)

```sh
# รันโดยตรงโดยไม่ติดตั้ง
bunx bunup

# หรือกับ CLI
bunx @bunup/cli@latest create
```

## Verify Installation

```sh
# ตรวจสอบเวอร์ชัน
bunup --version

# หรือดู help
bunup --help
```

## Project Setup

### 1. Create package.json

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "bunup"
  }
}
```

### 2. Add TypeScript Config

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "declaration": true,
    "isolatedDeclarations": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### 3. Create Source Files

```
my-library/
├── src/
│   └── index.ts      # Entry point
├── package.json
├── tsconfig.json
└── bunup.config.ts   # Optional
```

### 4. Run Build

```sh
bun run build
```

## Update Bunup

```sh
# อัพเดท bunup
bun update bunup

# หรือใช้ npm
npm update bunup
```

## Uninstall

```sh
# ลบ bunup
bun remove bunup

# หรือใช้ npm
npm remove bunup
```