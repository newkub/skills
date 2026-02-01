# Security

## Description
กฎความปลอดภัยสำหรับการพัฒนา Tauri applications

## Core Security Principles

### 1. Principle of Least Privilege
อนุญาตเฉพาะ permissions ที่จำเป็นเท่านั้น

### 2. Validate All Inputs
ตรวจสอบข้อมูลทั้งหมดที่รับมาจาก frontend

### 3. Secure IPC Communication
ใช้ typed IPC และ validate data types

## Allowlist Configuration

### 1. Disable All by Default
```json
{
  "tauri": {
    "allowlist": {
      "all": false
    }
  }
}
```

### 2. Enable Specific Features
```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "all": false,
        "readFile": true,
        "writeFile": true,
        "scope": ["$HOME/documents/*", "$HOME/downloads/*"]
      },
      "http": {
        "all": false,
        "request": true,
        "scope": ["https://api.example.com/*"]
      },
      "shell": {
        "all": false,
        "open": true
      }
    }
  }
}
```

### 3. Path Validation
ใช้ path patterns ที่เคร่งครัด:

```json
{
  "scope": [
    "$HOME/documents/**/*.txt",
    "$HOME/downloads/*"
  ]
}
```

## Input Validation

### 1. Rust Side Validation
```rust
use std::path::Path;

#[tauri::command]
fn safe_write_file(path: String, content: String) -> Result<(), String> {
    // Validate path
    let path_obj = Path::new(&path);
    
    // ตรวจสอบว่า path อยู่ใน directory ที่อนุญาต
    if !path_obj.starts_with(std::env::var("HOME").unwrap_or_default()) {
        return Err("Access denied: Path outside home directory".to_string());
    }
    
    // Validate content size
    if content.len() > 1_000_000 {
        return Err("Content too large".to_string());
    }
    
    std::fs::write(path, content).map_err(|e| e.to_string())
}
```

### 2. Frontend Validation
```typescript
const validatePath = (path: string): boolean => {
  // ตรวจสอบ path format
  const validPattern = /^[a-zA-Z0-9_\-\/.]+$/
  return validPattern.test(path)
}

const validateContent = (content: string): boolean => {
  // ตรวจสอบ content size
  return content.length <= 1_000_000
}
```

## Security Best Practices

### 1. Never Use `allowlist.all: true`
```json
// ❌ อันตราย
{
  "allowlist": {
    "all": true
  }
}

// ✅ ปลอดภัย
{
  "allowlist": {
    "all": false,
    "fs": {
      "readFile": true,
      "scope": ["$HOME/documents/*"]
    }
  }
}
```

### 2. Sanitize User Input
```rust
use sanitize_html;

#[tauri::command]
fn save_html(content: String) -> Result<(), String> {
    let sanitized = sanitize_html::clean(&content);
    std::fs::write("output.html", sanitized)
        .map_err(|e| e.to_string())
}
```

### 3. Use HTTPS Only
```json
{
  "http": {
    "all": false,
    "request": true,
    "scope": ["https://api.example.com/*"]
  }
}
```

### 4. Validate File Types
```rust
#[tauri::command]
fn upload_file(path: String, content: Vec<u8>) -> Result<(), String> {
    // ตรวจสอบ file type
    let extension = std::path::Path::new(&path)
        .extension()
        .and_then(|e| e.to_str())
        .unwrap_or("");
    
    let allowed_extensions = ["txt", "json", "csv"];
    
    if !allowed_extensions.contains(&extension) {
        return Err("File type not allowed".to_string());
    }
    
    // ตรวจสอบ file size
    if content.len() > 10_000_000 {
        return Err("File too large".to_string());
    }
    
    std::fs::write(path, content).map_err(|e| e.to_string())
}
```

## Examples

### Example 1: Secure File Operations
```rust
#[tauri::command]
fn secure_file_operation(action: String, path: String, content: Option<String>) 
    -> Result<String, String> 
{
    // Validate path
    let valid_path = path.starts_with(&std::env::var("HOME").unwrap_or_default());
    if !valid_path {
        return Err("Invalid path".to_string());
    }
    
    match action.as_str() {
        "read" => {
            std::fs::read_to_string(&path).map_err(|e| e.to_string())
        }
        "write" => {
            if let Some(c) = content {
                if c.len() > 1_000_000 {
                    return Err("Content too large".to_string());
                }
                std::fs::write(&path, c).map_err(|e| e.to_string())?;
                Ok("File written".to_string())
            } else {
                Err("No content provided".to_string())
            }
        }
        _ => Err("Invalid action".to_string())
    }
}
```

### Example 2: Secure HTTP Requests
```rust
#[tauri::command]
async fn secure_request(url: String) -> Result<String, String> {
    // Validate URL
    if !url.starts_with("https://") {
        return Err("Only HTTPS allowed".to_string());
    }
    
    // Validate domain
    let allowed_domains = ["api.example.com", "cdn.example.com"];
    let domain = url.split("://")
        .nth(1)
        .and_then(|s| s.split('/').next())
        .unwrap_or("");
    
    if !allowed_domains.contains(&domain) {
        return Err("Domain not allowed".to_string());
    }
    
    let response = reqwest::get(&url)
        .await
        .map_err(|e| e.to_string())?;
    
    let text = response.text()
        .await
        .map_err(|e| e.to_string())?;
    
    Ok(text)
}
```

## Anti-Patterns

❌ **ใช้ `allowlist.all: true`**
- เปิด security hole ที่ร้ายแรง

❌ **ไม่ validate user input**
- อาจเกิด security vulnerabilities

❌ **ใช้ HTTP แทน HTTPS**
- ข้อมูลสามารถถูก intercept ได้

❌ **ไม่ระบุ scope สำหรับ file operations**
- อนุญาตให้เข้าถึงไฟล์ทั้งหมด

## Verification

1. ตรวจสอบ allowlist configuration
   ```bash
   cat src-tauri/tauri.conf.json | grep -A 20 "allowlist"
   ```
   ต้องไม่มี `"all": true`

2. ทดสอบ input validation
   ส่ง malicious input ต้องถูก reject

3. ตรวจสอบ path validation
   พยายามเข้าถึง path นอก scope ต้องถูก block

4. ทดสอบ HTTPS enforcement
   พยายามเรียก HTTP URLs ต้องถูก block
