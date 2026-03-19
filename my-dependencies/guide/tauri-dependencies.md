# Tauri Dependencies

## Core

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/cli | Tauri CLI | `bun add -d @tauri-apps/cli` |
| @tauri-apps/api | JavaScript API | `bun add @tauri-apps/api` |
| @tauri-apps/plugin-shell | Shell plugin | `bun add @tauri-apps/plugin-shell` |

## System & OS

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/plugin-os | OS info | `bun add @tauri-apps/plugin-os` |
| @tauri-apps/plugin-process | Process info | `bun add @tauri-apps/plugin-process` |
| @tauri-apps/plugin-clipboard | Clipboard | `bun add @tauri-apps/plugin-clipboard` |
| @tauri-apps/plugin-notification | Notifications | `bun add @tauri-apps/plugin-notification` |
| @tauri-apps/plugin-global-shortcut | Global shortcuts | `bun add @tauri-apps/plugin-global-shortcut` |
| @tauri-apps/plugin-autostart | Autostart | `bun add @tauri-apps/plugin-autostart` |
| @tauri-apps/plugin-single-instance | Single instance | `bun add @tauri-apps/plugin-single-instance` |
| @tauri-apps/plugin-updater | Auto updater | `bun add @tauri-apps/plugin-updater` |
| @tauri-apps/plugin-deep-link | Deep linking | `bun add @tauri-apps/plugin-deep-link` |
| @tauri-apps/plugin-haptics | Haptics | `bun add @tauri-apps/plugin-haptics` |

## File System

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/plugin-fs | File system | `bun add @tauri-apps/plugin-fs` |
| @tauri-apps/plugin-upload | Upload | `bun add @tauri-apps/plugin-upload` |
| @tauri-apps/plugin-dialog | File dialogs | `bun add @tauri-apps/plugin-dialog` |

## Network & Data

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/plugin-http | HTTP client | `bun add @tauri-apps/plugin-http` |
| @tauri-apps/plugin-websocket | WebSocket | `bun add @tauri-apps/plugin-websocket` |
| @tauri-apps/plugin-sql | SQLite | `bun add @tauri-apps/plugin-sql` |
| @tauri-apps/plugin-store | Key-value store | `bun add @tauri-apps/plugin-store` |
| @tauri-apps/plugin-stronghold | Secure storage | `bun add @tauri-apps/plugin-stronghold` |
| @tauri-apps/plugin-biometric | Biometric auth | `bun add @tauri-apps/plugin-biometric` |

## Hardware

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/plugin-barcode-scanner | Barcode scanner | `bun add @tauri-apps/plugin-barcode-scanner` |
| @tauri-apps/plugin-nfc | NFC | `bun add @tauri-apps/plugin-nfc` |
| @tauri-apps/plugin-geolocation | Geolocation | `bun add @tauri-apps/plugin-geolocation` |

## Development

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| tauri-plugin-log | Logging | `bun add tauri-plugin-log` |
| tauri-plugin-devtools | Dev tools | `bun add tauri-plugin-devtools` |

## UI Frameworks (Frontend)

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/plugin-window-state | Window state | `bun add @tauri-apps/plugin-window-state` |

## React Integration

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/api | Core API | `bun add @tauri-apps/api` |
| react-tauri | React hooks | `bun add react-tauri` |

## Vue Integration

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/api | Core API | `bun add @tauri-apps/api` |
| vue-tauri | Vue composables | `bun add vue-tauri` |

## Security

| Package | ใช้สำหรับ | ติดตั้ง |
|---------|----------|---------|
| @tauri-apps/plugin-stronghold | Secure crypto storage | `bun add @tauri-apps/plugin-stronghold` |
| @tauri-apps/plugin-biometric | Biometric auth | `bun add @tauri-apps/plugin-biometric` |

## การตั้งค่า

### tauri.conf.json

```json
{
  "identifier": "com.example.app",
  "build": {
    "beforeBuildCommand": "bun run build",
    "beforeDevCommand": "bun run dev",
    "devUrl": "http://localhost:3000",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "My App",
        "width": 1200,
        "height": 800
      }
    ],
    "security": {
      "csp": "default-src 'self'; connect-src 'self' https://api.example.com"
    }
  },
  "bundle": {
    "active": true,
    "targets": ["dmg", "msi", "app", "appimage"],
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}
```

## คำแนะนำ

| หมวดหมู่ | แนะนำ |
|---------|-------|
| **Essential** | @tauri-apps/api, @tauri-apps/plugin-shell |
| **FS** | @tauri-apps/plugin-fs |
| **HTTP** | @tauri-apps/plugin-http |
| **Storage** | @tauri-apps/plugin-store |
| **Auth** | @tauri-apps/plugin-stronghold |
| **Updates** | @tauri-apps/plugin-updater |
| **Mobile** | @tauri-apps/plugin-barcode-scanner |

## คำสั่ง CLI

```bash
# สร้าง project
bun tauri create

# Dev server
bun tauri dev

# Build
bun tauri build

# Add plugin
bun tauri add shell
bun tauri add fs
bun tauri add http

# Icon
bun tauri icon

# Info
bun tauri info
```
