# System APIs

## ภาพรวม

System APIs คือ interfaces ที่ให้เข้าถึง system-level functionality เช่น file system, network, shell, และ native features ของแต่ละ platform

## Available APIs

### 1. File System API

```typescript
import { readTextFile, writeTextFile, exists } from '@tauri-apps/plugin-fs'

// Read file
const content = await readTextFile('path/to/file.txt')

// Write file
await writeTextFile('path/to/file.txt', 'Hello World')

// Check if file exists
const fileExists = await exists('path/to/file.txt')
```

### 2. Shell API

```typescript
import { open, Command } from '@tauri-apps/plugin-shell'

// Open URL
await open('https://tauri.app')

// Open file
await open('path/to/file.pdf')

// Execute command
const command = Command.create('echo', ['Hello'])
const output = await command.execute()
console.log(output.stdout)
```

### 3. Dialog API

```typescript
import { open, save, message } from '@tauri-apps/plugin-dialog'

// Open file dialog
const filePath = await open({
  multiple: false,
  filters: [{ name: 'Text', extensions: ['txt'] }]
})

// Save file dialog
const savePath = await save({
  filters: [{ name: 'Text', extensions: ['txt'] }]
})

// Message dialog
await message('Operation completed', 'Success')
```

### 4. Notification API

```typescript
import { sendNotification } from '@tauri-apps/plugin-notification'

await sendNotification({
  title: 'Hello',
  body: 'World',
  icon: 'path/to/icon.png'
})
```

### 5. HTTP API

```typescript
import { fetch } from '@tauri-apps/plugin-http'

const response = await fetch('https://api.example.com/data')
const data = await response.json()
```

### 6. Window API

```typescript
import { getCurrentWindow } from '@tauri-apps/api/window'

const window = getCurrentWindow()

// Set title
await window.setTitle('My App')

// Resize
await window.setSize({ width: 800, height: 600 })

// Minimize
await window.minimize()

// Close
await window.close()
```

### 7. App API

```typescript
import { getVersion, getName } from '@tauri-apps/api/app'

const version = await getVersion()
const name = await getName()
```

### 8. Path API

```typescript
import { appDir, downloadDir, documentDir } from '@tauri-apps/api/path'

const appDirPath = await appDir()
const downloadDirPath = await downloadDir()
const documentDirPath = await documentDir()
```

### 9. Event API

```typescript
import { listen, emit } from '@tauri-apps/api/event'

// Listen to event
const unlisten = await listen('my-event', (event) => {
  console.log('Received:', event.payload)
})

// Emit event
await emit('my-event', { data: 'Hello' })
```

### 10. Clipboard API

```typescript
import { readText, writeText } from '@tauri-apps/api/clipboard'

// Read clipboard
const text = await readText()

// Write to clipboard
await writeText('Hello World')
```

## Platform-Specific APIs

### Windows

```typescript
import { isWindows } from '@tauri-apps/api/os'

if (await isWindows()) {
  // Windows-specific code
}
```

### macOS

```typescript
import { isMacos } from '@tauri-apps/api/os'

if (await isMacos()) {
  // macOS-specific code
}
```

### Linux

```typescript
import { isLinux } from '@tauri-apps/api/os'

if (await isLinux()) {
  // Linux-specific code
}
```

## Security Considerations

### 1. Capabilities

```json
// capabilities/default.json
{
  "identifier": "default",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "fs:allow-read-file",
    "fs:allow-write-file",
    "shell:allow-open",
    "dialog:allow-open"
  ]
}
```

### 2. Scoped Access

```json
{
  "permissions": [
    {
      "identifier": "fs:allow-read-file",
      "allow": [{ "path": "$HOME/documents/*" }]
    }
  ]
}
```

### 3. Permission Checks

```rust
#[tauri::command]
async fn check_permission() -> bool {
    // Check if permission is granted
    true
}
```

## Best Practices

### 1. Error Handling

```typescript
try {
  const content = await readTextFile('path/to/file.txt')
  console.log(content)
} catch (error) {
  console.error('Failed to read file:', error)
}
```

### 2. Async Operations

```typescript
// Always use await for async operations
const content = await readTextFile('path/to/file.txt')
```

### 3. Path Resolution

```typescript
import { join } from '@tauri-apps/api/path'

const appDir = await appDir()
const filePath = await join(appDir, 'data.txt')
```

### 4. Resource Cleanup

```typescript
// Always cleanup event listeners
const unlisten = await listen('event', handler)
// Later
unlisten()
```

## Common Use Cases

### 1. File Management

```typescript
import { readTextFile, writeTextFile, exists } from '@tauri-apps/plugin-fs'
import { join } from '@tauri-apps/api/path'

async function saveUserData(data: any) {
  const appDir = await appDir()
  const filePath = await join(appDir, 'user-data.json')
  await writeTextFile(filePath, JSON.stringify(data))
}

async function loadUserData() {
  const appDir = await appDir()
  const filePath = await join(appDir, 'user-data.json')
  
  if (await exists(filePath)) {
    const content = await readTextFile(filePath)
    return JSON.parse(content)
  }
  return null
}
```

### 2. Settings Management

```typescript
import { join } from '@tauri-apps/api/path'
import { readTextFile, writeTextFile } from '@tauri-apps/plugin-fs'

async function saveSetting(key: string, value: any) {
  const appDir = await appDir()
  const settingsPath = await join(appDir, 'settings.json')
  
  const content = await readTextFile(settingsPath)
  const settings = JSON.parse(content || '{}')
  settings[key] = value
  
  await writeTextFile(settingsPath, JSON.stringify(settings))
}
```

### 3. Download Management

```typescript
import { downloadDir } from '@tauri-apps/api/path'
import { writeBinaryFile } from '@tauri-apps/plugin-fs'

async function downloadFile(url: string, filename: string) {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  
  const downloadPath = await downloadDir()
  const filePath = await join(downloadPath, filename)
  
  await writeBinaryFile(filePath, new Uint8Array(buffer))
}
```

### 4. System Integration

```typescript
import { open } from '@tauri-apps/plugin-shell'

async function openInBrowser(url: string) {
  await open(url)
}

async function openInExplorer(path: string) {
  await open(path)
}
```

## Performance Tips

### 1. Batch Operations

```typescript
// Bad: Multiple individual calls
for (const file of files) {
  await readTextFile(file)
}

// Good: Batch when possible
const contents = await Promise.all(
  files.map(file => readTextFile(file))
)
```

### 2. Caching

```typescript
const cache = new Map()

async function getCachedFile(path: string) {
  if (cache.has(path)) {
    return cache.get(path)
  }
  
  const content = await readTextFile(path)
  cache.set(path, content)
  return content
}
```

### 3. Lazy Loading

```typescript
// Load resources only when needed
async function loadResource() {
  if (!resourceLoaded) {
    resource = await loadHeavyResource()
    resourceLoaded = true
  }
  return resource
}
```

## Troubleshooting

### 1. Permission Denied

**Cause**: Capability ไม่ได้ grant

**Solution**: เพิ่ม permission ใน capability file

### 2. Path Not Found

**Cause**: Path ไม่ถูกต้อง

**Solution**: ใช้ path API สำหรับ resolve paths

### 3. API Not Available

**Cause**: Plugin ไม่ได้ติดตั้ง

**Solution**: ติดตั้ง plugin ที่จำเป็น
