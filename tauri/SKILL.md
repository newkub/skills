# Tauri

Tauri เป็น framework สำหรับสร้าง desktop applications ที่ใช้ web technologies สำหรับ frontend และ Rust สำหรับ backend มีคุณสมบัติหลักๆ ดังนี้:

- **Cross-platform**: รองรับ Windows, macOS, Linux
- **Small Bundle Size**: Bundle size เล็กกว่า Electron มาก
- **Security**: Rust backend ที่ปลอดภัย
- **Web Technologies**: ใช้ HTML, CSS, JavaScript สำหรับ UI
- **Fast**: Performance ดีกว่า Electron
- **Framework Agnostic**: รองรับ Vue, React, Svelte, Solid, etc.
- **MV2 & MV3**: รองรับทั้ง Manifest V2 และ V3

## สรุปเนื้อหา

| หมวดหมู่ | ไฟล์ | คำอธิบาย |
|---------|------|----------|
| **Guide** | guide/getting-started.md | เริ่มต้นใช้งาน Tauri |
| **Guide** | guide/setup.md | การติดตั้ง dependencies |
| **Guide** | guide/configuration.md | การตั้งค่า tauri.conf.json |
| **Guide** | guide/rust-backend.md | การเขียน Rust backend |
| **Guide** | guide/frontend-integration.md | การเชื่อมต่อ frontend กับ backend |
| **Reference** | reference/api.md | API reference |
| **Reference** | reference/commands.md | CLI commands |
| **Reference** | reference/plugins.md | Plugins reference |

## การใช้งาน

ใช้ Tauri เมื่อ:
- ต้องการ cross-platform desktop applications
- ต้องการ bundle size เล็ก
- ต้องการ performance ดีกว่า Electron
- ต้องการ security สูงด้วย Rust
- ต้องการใช้ web technologies สำหรับ UI

## ตัวอย่างเริ่มต้น

```bash
# Install CLI
npm install -g @tauri-apps/cli

# Create project
tauri init
```

```typescript
// src-tauri/src/main.rs
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

```typescript
// Invoke from frontend
import { invoke } from '@tauri-apps/api/tauri'

const result = await invoke('greet', { name: 'World' })
