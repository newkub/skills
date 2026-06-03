# Installation

วิธีการติดตั้ง Qoder

## Editor Plugin Installation

### JetBrains IDEs

1. เปิด JetBrains IDE (IntelliJ IDEA, PyCharm, GoLand, etc.)
2. ไปที่ **Settings** → **Plugins** → **Marketplace**
3. ค้นหา "Qoder"
4. คลิก **Install**
5. Restart IDE

**Requirements:**
- JetBrains IDE version 2020.3 ขึ้นไป
- รองรับ: IntelliJ IDEA, Android Studio, PyCharm, GoLand, CLion, และอื่นๆ

### VS Code

1. เปิด VS Code
2. ไปที่ **Extensions** (Ctrl+Shift+X)
3. ค้นหา "Qoder"
4. คลิก **Install**

## CLI Installation

### Via npm

```bash
# Global installation
npm install -g qoder

# Or use npx
npx qoder@latest
```

### Via Direct Download

1. ไปที่ https://qoder.com/download
2. เลือก platform (Windows, macOS, Linux)
3. ดาวน์โหลด installer
4. ติดตั้งตามขั้นตอน

### Verification

```bash
# Check installation
qoder --version

# Show help
qoder --help
```

## Account Setup

### Sign Up

1. ไปที่ https://qoder.com/users/sign-up
2. สร้าง account
3. รับ 300 Credits ฟรีเมื่อลงทะเบียน

### Sign In

```bash
# CLI
qoder login

# Editor - ใช้ OAuth หรือ credentials ใน settings
```

## Remote Development Support

Qoder รองรับ remote development:

| Environment | Support |
|-------------|---------|
| **SSH** | ✅ Full support |
| **WSL** | ✅ Full support |
| **Dev Containers** | ✅ Full support |

## Post-Installation

### Initial Setup

1. เปิด Qoder (ใน IDE หรือ CLI)
2. Sign in ด้วย account
3. ตั้งค่า preferences (optional)
4. เริ่ม coding!

### Configuration

```bash
# Open config file
qoder config edit

# Or configure via IDE settings
```

## Uninstall

### IDE Plugin

1. ไปที่ **Settings** → **Plugins**
2. คลิกขวาที่ Qoder
3. เลือก **Uninstall**

### CLI

```bash
npm uninstall -g qoder
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Plugin not loading | Restart IDE, check version compatibility |
| CLI not found | Add to PATH, restart terminal |
| Login failed | Check credentials, network connection |
| Credits exhausted | Purchase add-on credits หรือ upgrade plan |