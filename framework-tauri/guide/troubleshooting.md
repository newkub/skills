# การแก้ปัญหาที่พบบ่อย

## Common Issues

### 1. Build Errors

#### Error: "error: linker `link.exe` not found"

**Cause**: Visual Studio Build Tools ไม่ได้ติดตั้งบน Windows

**Solution**:
```bash
# ติดตั้ง Visual Studio Build Tools
# Download: https://visualstudio.microsoft.com/downloads/
# เลือก "Desktop development with C++"
```

#### Error: "error: failed to run custom build command"

**Cause**: OpenSSL หรือ system dependencies ขาด

**Solution**:
```bash
# Windows
vcpkg install openssl:x64-windows-static

# macOS
brew install openssl

# Linux
sudo apt-get install libssl-dev pkg-config
```

### 2. Runtime Errors

#### Error: "Failed to resolve path"

**Cause**: Path ไม่ถูกต้องหรือไม่มี permission

**Solution**:
```rust
// ใช้ absolute paths
let path = std::path::PathBuf::from("/absolute/path/to/file");

// หรือ resolve relative to app directory
let app_dir = app.path_resolver().app_dir().unwrap();
let file_path = app_dir.join("data.txt");
```

#### Error: "IPC command not found"

**Cause**: Command ไม่ได้ register ใน invoke_handler

**Solution**:
```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            my_command,
            another_command
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 3. Frontend Issues

#### Error: "White screen on launch"

**Cause**: Frontend build path ไม่ถูกต้อง

**Solution**:
```json
// tauri.conf.json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devUrl": "http://localhost:5173",
    "frontendDist": "../dist"
  }
}
```

#### Error: "Hot reload not working"

**Cause**: Vite dev server ไม่ทำงาน

**Solution**:
```bash
# ตรวจสอบว่า dev server ทำงาน
npm run dev

# ตรวจสอบ port ใน tauri.conf.json
"devUrl": "http://localhost:5173"
```

### 4. Window Issues

#### Error: "Window not found"

**Cause**: Window label ไม่ตรงกัน

**Solution**:
```rust
// Rust
WindowBuilder::new(
    app,
    "main", // <- window label
    tauri::WindowUrl::App("index.html".into())
).build()?;

// Frontend
import { getCurrentWindow } from '@tauri-apps/api/window'
const window = getCurrentWindow() // Uses "main" by default
```

#### Error: "Window closes immediately"

**Cause**: Error ใน frontend หรือ Rust initialization

**Solution**:
```bash
# Run with verbose logging
npm run tauri dev -- --verbose

# Check terminal for error messages
```

### 5. File System Issues

#### Error: "Permission denied"

**Cause**: File system permissions ไม่เพียงพอ

**Solution**:
```json
// tauri.conf.json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "scope": ["$HOME/documents/*", "$DOWNLOAD/*"]
      }
    }
  }
}
```

#### Error: "File not found"

**Cause**: Relative path ไม่ถูกต้อง

**Solution**:
```rust
use tauri::api::path::resolve_path;

let path = resolve_path(
    &app.config(),
    &app.package_info(),
    "data.txt"
).expect("failed to resolve path");
```

### 6. Network Issues

#### Error: "CORS error"

**Cause**: Browser security blocking requests

**Solution**:
```json
// tauri.conf.json
{
  "tauri": {
    "allowlist": {
      "http": {
        "all": true,
        "request": true,
        "scope": ["https://api.example.com/*"]
      }
    }
  }
}
```

#### Error: "SSL certificate error"

**Cause**: Self-signed certificates หรือ certificate issues

**Solution**:
```rust
// ใช้ reqwest ด้วย dangerous_accept_invalid_certs (dev only)
let client = reqwest::Client::builder()
    .danger_accept_invalid_certs(true)
    .build()?;
```

### 7. Performance Issues

#### Issue: High CPU usage

**Cause**: Infinite loops หรือ inefficient code

**Solution**:
```rust
// Bad: Busy wait
while !condition {
    // Do nothing
}

// Good: Async wait
while !condition {
    tokio::time::sleep(Duration::from_millis(100)).await;
}
```

#### Issue: High memory usage

**Cause**: Memory leaks หรือ large allocations

**Solution**:
```rust
// Use weak references
use std::sync::{Arc, Weak};

struct MyStruct {
    data: Vec<u8>,
}

// Cleanup when done
drop(my_struct);
```

### 8. Platform-Specific Issues

#### Windows: "Antivirus blocking"

**Solution**:
- Add exception to antivirus
- Sign the application
- Use trusted installer

#### macOS: "App can't be opened"

**Solution**:
```bash
# Remove quarantine attribute
xattr -cr /path/to/MyApp.app

# Or allow in System Preferences > Security & Privacy
```

#### Linux: "Missing dependencies"

**Solution**:
```bash
# Check missing libraries
ldd ./my-app

# Install missing dependencies
sudo apt-get install libwebkit2gtk-4.0-37
```

## Debugging Tools

### 1. Logging

**Rust Logging**
```rust
use log::{info, error};

#[tauri::command]
fn my_command() {
    info!("Command started");
    // ... logic
    error!("Something went wrong");
}
```

**Frontend Logging**
```typescript
console.log('Debug info')
console.error('Error occurred')
```

### 2. DevTools

**Enable DevTools**
```rust
WindowBuilder::new(app, "main", tauri::WindowUrl::App("index.html".into()))
    .devtools(true) // Enable DevTools in dev mode
    .build()?;
```

### 3. Profiling

**Rust Profiling**
```bash
cargo install flamegraph
cargo flamegraph
```

**Frontend Profiling**
- Chrome DevTools Performance tab
- React DevTools Profiler

## Getting Help

### 1. Documentation

- [Tauri Documentation](https://tauri.app/v1/guides)
- [Rust Book](https://doc.rust-lang.org/book)
- [Framework Documentation]

### 2. Community

- [Tauri Discord](https://discord.gg/tauri)
- [GitHub Issues](https://github.com/tauri-apps/tauri/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/tauri)

### 3. Debugging Checklist

- [ ] Check error messages in terminal
- [ ] Enable verbose logging
- [ ] Test with minimal example
- [ ] Check dependencies versions
- [ ] Verify configuration files
- [ ] Test on different platforms
- [ ] Search existing issues
- [ ] Ask in community forums

## Prevention

### 1. Type Safety

```rust
// Use Result types
fn safe_function() -> Result<String, Error> {
    // ...
}

// Validate inputs
fn validate_input(input: &str) -> Result<(), Error> {
    if input.is_empty() {
        return Err(Error::InvalidInput);
    }
    Ok(())
}
```

### 2. Error Handling

```typescript
try {
  await invoke('command')
} catch (error) {
  console.error('Command failed:', error)
  // Show user-friendly error
}
```

### 3. Testing

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn test_function() {
        assert_eq!(my_function(), expected);
    }
}
```

### 4. Documentation

```rust
/// Performs X operation
/// 
/// # Arguments
/// * `param` - Description
/// 
/// # Returns
/// * `Result<String, Error>` - Description
fn documented_function(param: String) -> Result<String, Error> {
    // ...
}
```
