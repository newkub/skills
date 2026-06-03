# installation

## วิธีติดตั้ง (แนะนำ: mise)

```bash
# ติดตั้ง aube ผ่าน mise
mise use -g aube

# verify
aube --version
```

## วิธีอื่นๆ

### npm

```bash
npm install -g --ignore-scripts=false @endevco/aube
npx --ignore-scripts=false @endevco/aube --version
```

### Homebrew

```bash
brew install endevco/tap/aube
```

### ใน project

```bash
# เพิ่มใน project โดยใช้ mise
mise use aube

# หรือ npm
npm install -D @endevco/aube
```

## ตรวจสอบ PATH

```bash
aube --version
```

ถ้าไม่เจอ command ให้เช็คว่า mise/shims อยู่ใน PATH

## Requirements

- Node.js 16+ (แนะนำ 18+)
- รองรับ: macOS, Linux, Windows