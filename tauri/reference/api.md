# Tauri API Reference

## Frontend APIs

### invoke

เรียก Rust commands จาก frontend:

```typescript
import { invoke } from '@tauri-apps/api/tauri'

const result = await invoke('greet', { name: 'World' })
```

### Window APIs

```typescript
import { getCurrentWindow } from '@tauri-apps/api/window'

const appWindow = getCurrentWindow()
await appWindow.minimize()
await appWindow.maximize()
await appWindow.close()
```

### Dialog APIs

```typescript
import { open, save } from '@tauri-apps/api/dialog'

const filePath = await open({
  multiple: false,
  filters: [{ name: 'Text', extensions: ['txt'] }]
})
```

### File System APIs

```typescript
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs'

const content = await readTextFile('file.txt')
await writeTextFile('file.txt', 'Hello')
```

## Rust APIs

### Commands

```rust
#[tauri::command]
fn my_command() -> Result<(), String> {
    // implementation
}
```

### Events

```rust
app.emit("event-name", payload)?;
app.listen("event-name", |event| {
    println!("received event: {:?}", event);
});
```
