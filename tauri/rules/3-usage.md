# Usage

## Description

การใช้งาน Tauri API และการสื่อสารระหว่าง frontend และ backend

## Rust Backend

### 1. Create Commands

สร้าง commands ใน `src-tauri/src/main.rs`:

```rust
use tauri::Manager;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
async fn fetch_data(url: String) -> Result<String, String> {
    let response = reqwest::get(&url)
        .await
        .map_err(|e| e.to_string())?;

    let text = response.text()
        .await
        .map_err(|e| e.to_string())?;

    Ok(text)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, fetch_data])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

### 2. Handle Events

สร้าง event listeners:

```rust
#[tauri::command]
fn listen_events(app: tauri::AppHandle) {
    let window = app.get_window("main").unwrap();

    window.emit("custom-event", "data from rust").unwrap();
}
```

## Frontend Integration

### 1. Invoke Commands

เรียก commands จาก frontend:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

// Greet command
const greet = async (name: string) => {
  const response = await invoke<string>('greet', { name })
  console.log(response)
}

// Fetch data
const fetchData = async (url: string) => {
  try {
    const data = await invoke<string>('fetch_data', { url })
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}
```

### 2. Listen to Events

รับ events จาก Rust:

```typescript
import { listen } from '@tauri-apps/api/event'

useEffect(() => {
  const unlisten = listen<string>('custom-event', (event) => {
    console.log('Received:', event.payload)
  })

  return () => {
    unlisten.then(fn => fn())
  }
}, [])
```

### 3. Window Management

จัดการ windows:

```typescript
import { appWindow } from '@tauri-apps/api/window'

// Minimize window
const minimize = async () => {
  await appWindow.minimize()
}

// Maximize window
const maximize = async () => {
  await appWindow.toggleMaximize()
}

// Close window
const close = async () => {
  await appWindow.close()
}
```

## File System Operations

### 1. Read Files

```typescript
import { readTextFile } from '@tauri-apps/api/fs'

const readFile = async (path: string) => {
  try {
    const contents = await readTextFile(path)
    return contents
  } catch (error) {
    console.error('Error reading file:', error)
  }
}
```

### 2. Write Files

```typescript
import { writeTextFile } from '@tauri-apps/api/fs'

const writeFile = async (path: string, contents: string) => {
  try {
    await writeTextFile(path, contents)
  } catch (error) {
    console.error('Error writing file:', error)
  }
}
```

## Examples

### Example 1: Simple Counter App

```rust
#[tauri::command]
fn increment(counter: i32) -> i32 {
    counter + 1
}

#[tauri::command]
fn decrement(counter: i32) -> i32 {
    counter - 1
}
```

```typescript
import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    invoke<number>('increment', { counter: count }).then(setCount)
  }

  const decrement = () => {
    invoke<number>('decrement', { counter: count }).then(setCount)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
```

### Example 2: File Explorer

```rust
#[tauri::command]
fn read_directory(path: String) -> Result<Vec<String>, String> {
    let entries = std::fs::read_dir(&path)
        .map_err(|e| e.to_string())?;

    let files: Vec<String> = entries
        .filter_map(|entry| entry.ok())
        .filter_map(|entry| entry.file_name().into_string().ok())
        .collect();

    Ok(files)
}
```

```typescript
import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

function FileExplorer() {
  const [files, setFiles] = useState<string[]>([])
  const [path, setPath] = useState('')

  const loadFiles = async () => {
    try {
      const fileList = await invoke<string[]>('read_directory', { path })
      setFiles(fileList)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <input 
        value={path} 
        onChange={(e) => setPath(e.target.value)} 
        placeholder="Enter path"
      />
      <button onClick={loadFiles}>Load</button>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  )
}
```

## Anti-Patterns

❌ **ใช้ blocking operations ใน commands**

- ทำให้ UI freeze

❌ **ไม่ handle errors**

- Application จะ crash

❌ **ส่งข้อมูลขนาดใหญ่ผ่าน IPC**

- ทำให้ performance แย่

## Verification

1. ทดสอบ commands ทำงาน

   ```bash
   npm run tauri dev
   ```

   เรียก commands จาก frontend ต้องได้ผลลัพธ์

2. ตรวจสอบ error handling
   ทดสอบกรณี error ต้อง handle ได้

3. ทดสอบ performance
   Operations ต้องไม่ทำให้ UI freeze
