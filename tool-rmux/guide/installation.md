# Installation

วิธีติดตั้ง RMUX บน Windows, macOS, และ Linux

## Installation Methods

### Prebuilt Binary (Recommended)

**Linux/macOS**
```bash
curl -fsSL https://rmux.io/install.sh | sh
```

**Windows (PowerShell)**
```powershell
irm https://rmux.io/install.ps1 | iex
```

### Cargo Install

```bash
cargo install rmux --locked
```

### Manual Download

ดาวน์โหลดจาก [GitHub Releases](https://github.com/Helvesec/rmux/releases) พร้อม SHA256 checksums

## Verification

ตรวจสอบการติดตั้ง:

```bash
rmux --version
```

## Requirements

- **Rust**: 1.70+ (สำหรับ cargo install)
- **OS**: Windows 10+, macOS 10.15+, Linux (glibc 2.17+)
- **Architecture**: x86_64, ARM64

## Configuration File

RMUX ใช้ config file ที่ `~/.rmux.conf` (เหมือน tmux)

สร้าง config file เริ่มต้น:

```bash
rmux source-file ~/.rmux.conf
```

## Uninstall

**Prebuilt Binary**
```bash
# Linux/macOS
rm /usr/local/bin/rmux

# Windows
Remove-Item $env:LOCALAPPDATA\rmux\rmux.exe
```

**Cargo**
```bash
cargo uninstall rmux
```
