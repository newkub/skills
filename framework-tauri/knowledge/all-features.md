# All Features

## Core Features

### 1. Cross-Platform Support
Tauri รองรับหลาย platforms:

- **Windows**: Windows 7 ขึ้นไป (ด้วย WebView2)
- **macOS**: macOS 10.13+ (ด้วย WKWebView)
- **Linux**: หลากหลาย distributions (ด้วย WebKitGTK)

### 2. WebView Integration
ใช้ WebView ของ system:

- ไม่ต้อง bundle browser
- ลดขนาด application
- ใช้ WebView ที่ปลอดภัยและอัปเดตอยู่เสมอ

### 3. Rust Backend
Backend ที่ปลอดภัยและมีประสิทธิภาพ:

- Memory safety ด้วย Rust
- High performance
- Zero-cost abstractions

## Frontend Features

### 1. Framework Support
รองรับหลาย frontend frameworks:

- React, Vue, Svelte, Solid
- Vanilla JavaScript/TypeScript
- หรือ frameworks อื่นๆ

### 2. Hot Module Replacement
Development ที่รวดเร็ว:

- Auto-reload เมื่อ code เปลี่ยน
- Preserve state ระหว่าง reloads
- Fast iteration

### 3. Modern Tooling
ใช้ tooling ที่ทันสมัย:

- Vite สำหรับ fast builds
- TypeScript support
- ESLint, Prettier integration

## System Integration

### 1. File System
จัดการ files และ directories:

```typescript
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs'

await readTextFile('path/to/file.txt')
await writeTextFile('path/to/file.txt', 'content')
```

### 2. HTTP Requests
ทำ network requests จาก Rust:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

const data = await invoke('http_request', { url: 'https://api.example.com/data' })
```

### 3. Shell Commands
เรียก shell commands:

```typescript
import { Command } from '@tauri-apps/api/shell'

const command = new Command('cmd', ['echo', 'hello'])
await command.execute()
```

### 4. System Tray
สร้าง system tray icons:

```typescript
import { TrayIconBuilder } from '@tauri-apps/api/tray'

const tray = new TrayIconBuilder('my-app', 'icon.png')
await tray.build()
```

### 5. Notifications
แสดง system notifications:

```typescript
import { sendNotification } from '@tauri-apps/api/notification'

sendNotification({ title: 'Hello', body: 'World' })
```

### 6. Global Shortcuts
ลงทะเบียน global shortcuts:

```typescript
import { register, unregister } from '@tauri-apps/api/globalShortcut'

await register('CommandOrControl+Shift+1', () => {
  console.log('Shortcut pressed')
})
```

## Window Management

### 1. Window Controls
จัดการ windows:

```typescript
import { appWindow } from '@tauri-apps/api/window'

await appWindow.minimize()
await appWindow.maximize()
await appWindow.close()
await appWindow.hide()
await appWindow.show()
```

### 2. Multiple Windows
สร้าง multiple windows:

```typescript
import { WebviewWindow } from '@tauri-apps/api/window'

const newWindow = new WebviewWindow('unique-id', {
  url: 'path/to/page.html',
  width: 800,
  height: 600
})
```

### 3. Window Events
รับ window events:

```typescript
import { appWindow } from '@tauri-apps/api/window'

const unlisten = await appWindow.onCloseRequested((event) => {
  event.preventDefault()
  console.log('Close prevented')
})
```

## IPC Communication

### 1. Commands
เรียก Rust functions จาก frontend:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

const result = await invoke('command_name', { param: value })
```

### 2. Events
รับ events จาก Rust:

```typescript
import { listen } from '@tauri-apps/api/event'

const unlisten = listen('event_name', (event) => {
  console.log(event.payload)
})
```

### 3. State Management
จัดการ shared state:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

// Get state
const state = await invoke('get_state')

// Update state
await invoke('update_state', { newState: value })
```

## Security Features

### 1. Allowlist
ควบคุม permissions:

```json
{
  "allowlist": {
    "fs": {
      "readFile": true,
      "scope": ["$HOME/documents/*"]
    }
  }
}
```

### 2. CSP Headers
Content Security Policy:

```json
{
  "tauri": {
    "security": {
      "csp": "default-src 'self'"
    }
  }
}
```

### 3. Asset Protocol
Secure asset loading:

```json
{
  "tauri": {
    "security": {
      "assetProtocol": {
        "enable": true,
        "scope": ["**"]
      }
    }
  }
}
```

## Build & Distribution

### 1. Build Configuration
ตั้งค่า build settings:

```json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devPath": "http://localhost:5173",
    "distDir": "../dist"
  }
}
```

### 2. Updater
Automatic updates:

```typescript
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'

const update = await checkUpdate()
if (update.shouldUpdate) {
  await installUpdate()
}
```

### 3. Code Signing
Sign applications:

```json
{
  "tauri": {
    "bundle": {
      "macOS": {
        "signingIdentity": "Developer ID Application: Name"
      },
      "windows": {
        "certificateThumbprint": "thumbprint"
      }
    }
  }
}
```

## Advanced Features

### 1. Custom Protocols
สร้าง custom protocols:

```rust
use tauri::Manager;

fn main() {
    tauri::Builder::default()
        .register_uri_scheme_protocol("custom", |app, request| {
            // Handle custom protocol
        })
        .run(tauri::generate_context!())
        .expect("error")
}
```

### 2. Plugins
ใช้ community plugins:

- `@tauri-apps/plugin-fs`: File system operations
- `@tauri-apps/plugin-http`: HTTP client
- `@tauri-apps/plugin-dialog`: Native dialogs
- `@tauri-apps/plugin-notification`: Notifications

### 3. CLI Arguments
รับ command line arguments:

```rust
#[tauri::command]
fn handle_args(args: Vec<String>) -> Vec<String> {
    args
}

fn main() {
    let args = std::env::args().collect();
    // Process args
}
```

### 4. Environment Variables
จัดการ environment variables:

```rust
use std::env;

#[tauri::command]
fn get_env_var(key: String) -> Option<String> {
    env::var(key).ok()
}
```

### 5. Database Integration
เชื่อมต่อ databases:

```rust
use rusqlite::{Connection, Result};

#[tauri::command]
fn query_database(query: String) -> Result<Vec<String>, String> {
    let conn = Connection::open("database.db")
        .map_err(|e| e.to_string())?;
    
    // Execute query
    Ok(results)
}
```

## Testing Features

### 1. Unit Testing
ทดสอบ Rust code:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_command() {
        assert_eq!(greet("World"), "Hello, World!");
    }
}
```

### 2. Integration Testing
ทดสอบ IPC communication:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

test('command works', async () => {
  const result = await invoke('command_name', { param: 'test' })
  expect(result).toBe('expected result')
})
```

### 3. E2E Testing
ทดสอบ application ทั้งหมด:

```typescript
import { test, expect } from '@playwright/test'

test('app works', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page.locator('h1')).toHaveText('Hello')
})
```
