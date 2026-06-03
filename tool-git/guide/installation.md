# Installation

## ติดตั้ง Git บนระบบต่างๆ

### Windows

```bash
# วิธีที่ 1: ดาวน์โหลด installer
# ดาวน์โหลดจาก https://git-scm.com/download/win

# วิธีที่ 2: ใช้ package manager
winget install Git
```

### macOS

```bash
# วิธีที่ 1: ใช้ Homebrew
brew install git

# วิธีที่ 2: ดาวน์โหลด installer
# ดาวน์โหลดจาก https://git-scm.com/download/mac
```

### Linux

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install git

# Fedora
sudo dnf install git

# Arch Linux
sudo pacman -S git
```

## ตรวจสอบการติดตั้ง

```bash
# ตรวจสอบ version
git --version

# ตัวอย่าง output
# git version 2.43.0
```

## ตั้งค่าเริ่มต้น

```bash
# ตั้งชื่อผู้ใช้
git config --global user.name "Your Name"

# ตั้ง email
git config --global user.email "your.email@example.com"

# ตรวจสอบการตั้งค่า
git config --list
```

## ต้องการ

- Windows 7 ขึ้นไป หรือ macOS 10.9+ หรือ Linux
- Internet connection (สำหรับ clone remote repositories)