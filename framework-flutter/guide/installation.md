# Installation

## System Requirements

| Platform | Requirements |
|----------|--------------|
| **Windows** | Windows 10+, 64-bit, 4 GB RAM |
| **macOS** | macOS 10.14+, 64-bit |
| **Linux** | Ubuntu 18.04+, 64-bit |

## Installation Steps

### 1. Download Flutter SDK

Download จาก: https://docs.flutter.dev/get-started/install

```bash
# สำหรับ macOS/Linux - Clone Flutter repo
git clone https://github.com/flutter/flutter.git -b stable

# สำหรับ Windows - ดาวน์โหลด ZIP และ extract
```

### 2. Add to PATH

```bash
# macOS/Linux - เพิ่มใน ~/.bashrc หรือ ~/.zshrc
export PATH="$PATH:/path/to/flutter/bin"

# Windows - เพิ่มใน System Environment Variables
# Path: C:\path\to\flutter\bin
```

### 3. Verify Installation

```bash
# ตรวจสอบเวอร์ชัน
flutter --version

# ตรวจสอบ Flutter setup
flutter doctor
```

## IDE Setup

### VS Code

```bash
# Install Flutter extension
code --install-extension Dart-Code.flutter
```

### Android Studio / IntelliJ

```bash
# Install Flutter plugin
# File > Settings > Plugins > Flutter
```

## Platform-Specific Setup

### Android

| Step | Command |
|------|---------|
| Install Android SDK | Download Android Studio |
| Accept licenses | `flutter doctor --android-licenses` |
| Set ANDROID_HOME | `export ANDROID_HOME=~/Android/Sdk` |

### iOS (macOS only)

| Step | Command |
|------|---------|
| Install Xcode | Download from App Store |
| Install CocoaPods | `sudo gem install cocoapods` |
| Set developer account | Xcode > Preferences > Accounts |

### Web

```bash
# Enable web
flutter config --enable-web

# Check web devices
flutter devices
```

## Verification

```bash
# Run flutter doctor
flutter doctor -v

# Expected output
[✓] Flutter (Channel stable)
[✓] Android toolchain
[✓] Xcode
[✓] Chrome
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `flutter command not found` | เพิ่ม Flutter bin ใน PATH |
| `Android SDK not found` | ติดตั้ง Android Studio |
| `Xcode requires agreements` | `sudo xcodebuild -license` |