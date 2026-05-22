# Core Concepts

## Architecture

### 1. Multi-Process Architecture

Tauri ใช้ multi-process architecture เพื่อความปลอดภัยและประสิทธิภาพ:

- **Main Process**: Rust backend ที่จัดการ system-level operations
- **Renderer Process**: Frontend (web technologies) ที่ render UI
- **IPC Bridge**: สื่อสารระหว่าง processes ผ่าน typed IPC

### 2. WebView Integration

Tauri ใช้ WebView ของแต่ละ platform:

- **Windows**: WebView2 (Edge)
- **macOS**: WKWebView
- **Linux**: WebKitGTK

### 3. Rust Backend

Rust ทำหน้าที่เป็น backend ที่ปลอดภัยและมีประสิทธิภาพ:

- จัดการ file system operations
- ทำ network requests
- จัดการ system integrations
- ประมวลผล heavy computations

## Key Components

### 1. Tauri API

API ที่ให้บริการสำหรับการสื่อสารระหว่าง frontend และ backend:

- **Commands**: Functions ที่ Rust expose ให้ frontend เรียก
- **Events**: Event-driven communication จาก Rust ไป frontend
- **Window Management**: จัดการ application windows

### 2. Frontend Frameworks

Tauri รองรับหลาย frontend frameworks:

- React, Vue, Svelte, Solid
- Vanilla JavaScript
- หรือ frameworks อื่นๆ

### 3. Configuration Files

ไฟล์ configuration หลัก:

- `tauri.conf.json`: Tauri configuration
- `package.json`: Node.js dependencies
- `vite.config.ts`: Vite build configuration

## Communication Patterns

### 1. Command Pattern

Frontend เรียก Rust functions ผ่าน commands:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

const result = await invoke('command_name', { param: value })
```

```rust
#[tauri::command]
fn command_name(param: String) -> Result<String, String> {
    Ok(format!("Received: {}", param))
}
```

### 2. Event Pattern

Rust ส่ง events ไป frontend:

```rust
window.emit("event_name", payload)?;
```

```typescript
import { listen } from '@tauri-apps/api/event'

const unlisten = listen('event_name', (event) => {
  console.log(event.payload)
})
```

### 3. Bidirectional Communication

ผสม command และ event patterns:

```rust
#[tauri::command]
async fn process_data(data: String, window: tauri::Window) -> Result<(), String> {
    // Process data
    let result = process(&data)?;

    // Send result back via event
    window.emit("result", result)?;

    Ok(())
}
```

## Security Model

### 1. Sandboxing

Tauri ใช้ sandboxing เพื่อความปลอดภัย:

- Frontend ไม่สามารถเข้าถึง system resources โดยตรง
- ทุก operations ต้องผ่าน Rust backend
- Allowlist controls การเข้าถึง

### 2. Principle of Least Privilege

อนุญาตเฉพาะ permissions ที่จำเป็น:

- กำหนด scope สำหรับ file system
- ระบุ domains ที่อนุญาตสำหรับ HTTP
- ปิด features ที่ไม่ใช้

### 3. Type Safety

Typed IPC ช่วยป้องกัน errors:

- Rust types ถูก validate อัตโนมัติ
- TypeScript types สอดคล้องกับ Rust
- Compile-time type checking

## Performance Considerations

### 1. Async Operations

ใช้ async/await สำหรับ operations ที่ใช้เวลา:

```rust
#[tauri::command]
async fn fetch_data(url: String) -> Result<String, String> {
    let response = reqwest::get(&url).await?;
    Ok(response.text().await?)
}
```

### 2. Memory Management

Rust จัดการ memory อัตโนมัติ:

- Ownership system ป้องกัน memory leaks
- Zero-cost abstractions
- No garbage collection overhead

### 3. Bundle Size

Tauri ผลิต applications ที่มีขนาดเล็ก:

- ใช้ WebView ของ system
- ไม่ bundle entire browser
- Minimal dependencies

## Platform Differences

### 1. Windows

- WebView2 ต้องติดตั้ง (Windows 10+)
- MSVC compiler ต้องการ
- Specific window decorations

### 2. macOS

- WKWebView เป็น default
- Code signing จำเป็นสำหรับ distribution
- Specific menu bar behavior

### 3. Linux

- WebKitGTK ต้องติดตั้ง
- Package managers หลากหลาย
- System tray behavior แตกต่าง
