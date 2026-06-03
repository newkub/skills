# Installation

## Purpose

คู่มือการติดตั้ง Trae IDE

## System Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| **OS** | Windows 10, macOS 10.15, Ubuntu 18.04 | Latest |
| **RAM** | 4 GB | 8 GB+ |
| **Storage** | 500 MB | 1 GB+ |
| **Internet** | Required | Stable connection |

## Download Methods

### Official Website (Recommended)

```text
1. ไปที่ https://trae.ai
2. กดปุ่ม "Download" หรือ "Get Trae"
3. เลือก OS ของคุณ
4. ดาวน์โหลด installer
```

### Direct Download Links

| OS | Download Link |
|----|---------------|
| Windows | https://trae.ai (auto-detect) |
| macOS | https://trae.ai (auto-detect) |
| Linux | https://trae.ai (auto-detect) |

## Installation Steps

### Windows

```text
1. ดับเบิลคลิกไฟล์ .exe
2. กด "Next" ใน wizard
3. เลือก install location (optional)
4. กด "Install"
5. กด "Finish"
6. Trae จะเปิดขึ้นมาอัตโนมัติ
```

### macOS

```text
1. เปิดไฟล์ .dmg
2. ลาก Trae ไปที่ Applications
3. เปิด Launchpad แล้วคลิก Trae
4. (ครั้งแรก) ยืนยันการเปิด
```

### Linux

```text
# Debian/Ubuntu
sudo dpkg -i trae-*.deb

# หรือใช้ AppImage
chmod +x Trae-*.AppImage
./Trae-*.AppImage
```

## First Launch Setup

```
┌─────────────────────────────────────────────────────────┐
│                    Welcome to Trae                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Step 1: Sign In / Sign Up                              │
│  ──────────────────────────────────────                  │
│  [ ] I don't want to sign in (limited features)         │
│  [Sign In]  [Create Account]                            │
│                                                          │
│  Step 2: Choose Theme                                   │
│  ──────────────────────────────────────                  │
│  (•) Dark    ( ) Light    ( ) System                    │
│                                                          │
│  Step 3: Select Default AI Model                        │
│  ──────────────────────────────────────                  │
│  (•) Claude 3.5 Sonnet                                  │
│  ( ) Claude 3.7                                         │
│                                                          │
│                                  [Get Started]           │
└─────────────────────────────────────────────────────────┘
```

## Verify Installation

```bash
# ตรวจสอบว่า Trae เปิดได้
# ไปที่ Help → About Trae IDE
# ควรเห็น version number
```

## Post-Installation

| Task | Description |
|------|-------------|
| Configure AI | เลือก model และ preferences |
| Install Extensions | VS Code extensions ทำงานได้ |
| Import Settings | Import จาก VS Code ได้ |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Install fails | Run as Administrator |
| App doesn't start | Reinstall or check system reqs |
| No internet | AI features ต้องมี internet |

## Summary

| Step | Action |
|------|--------|
| 1. Download | จาก trae.ai |
| 2. Install | รัน installer ตาม OS |
| 3. Launch | เปิด Trae ครั้งแรก |
| 4. Setup | Sign in, choose theme, select AI model |