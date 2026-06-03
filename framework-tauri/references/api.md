# API Reference

## Core API (`@tauri-apps/api`)

### invoke

Call a Rust command from frontend.

```typescript
import { invoke } from '@tauri-apps/api/core';

// Call without arguments
const result = await invoke('greet');

// Call with arguments
const result = await invoke<string>('greet', { name: 'World' });
```

### emit / listen

Event system for frontend-backend communication.

```typescript
import { emit, listen } from '@tauri-apps/api/event';

// Emit from frontend
await emit('my-event', { data: 'hello' });

// Listen from frontend
const unlisten = await listen<{ data: string }>('my-event', (event) => {
  console.log(event.payload);
});

// Cleanup
unlisten();
```

### Window API

```typescript
import { getCurrentWindow } from '@tauri-apps/api/window';

const win = getCurrentWindow();

// Properties
win.label;          // Window label
win.title;          // Window title

// Methods
await win.setTitle('New Title');
await win.setSize({ width: 800, height: 600 });
await win.minimize();
await win.maximize();
await win.unmaximize();
await win.close();
await win.setFullscreen(true);
await win.setFocus();
```

### Event API

```typescript
import { getCurrentWindow } from '@tauri-apps/api/event';

const win = getCurrentWindow();

// Listen to window events
await win.onMoved((payload) => {
  console.log(payload.position);
});

await win.onResized((payload) => {
  console.log(payload.size);
});
```

## Plugin APIs

### fs Plugin

```typescript
import {
  readTextFile,
  writeTextFile,
  readDir,
  createDir,
  removeFile,
} from '@tauri-apps/plugin-fs';

// Read file
const content = await readTextFile('config.json');

// Write file
await writeTextFile('output.txt', 'Hello World');
```

### dialog Plugin

```typescript
import { open, save, message, ask, confirm } from '@tauri-apps/plugin-dialog';

// Open file dialog
const selected = await open({
  multiple: false,
  filters: [{ name: 'Text', extensions: ['txt', 'md'] }],
});

// Save file dialog
const path = await save({
  filters: [{ name: 'Text', extensions: ['txt'] }],
});

// Message dialog
await message('Hello!', { title: 'Greeting', kind: 'info' });
```

### http Plugin

```typescript
import { fetch } from '@tauri-apps/plugin-http';

const response = await fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key: 'value' }),
});

const data = await response.json();
```

### store Plugin

```typescript
import { load } from '@tauri-apps/plugin-store';

const store = await load('settings.json', { autoSave: true });

// Set value
await store.set('theme', 'dark');

// Get value
const theme = await store.get('theme');

// Delete value
await store.delete('theme');

// Save
await store.save();
```

### shell Plugin

```typescript
import { open as openUrl } from '@tauri-apps/plugin-shell';

// Open URL in default browser
await openUrl('https://tauri.app');

// Execute command
const output = await new Command('ls', ['-la']).execute();
```

## Rust Command Definition

```rust
use serde::{Deserialize, Serialize};
use tauri::Command;

#[derive(Serialize, Deserialize)]
pub struct User {
    pub name: String,
    pub age: u32,
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
async fn fetch_user(id: u32) -> Result<User, String> {
    // Async operation
    Ok(User { name: "John".into(), age: 30 })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, fetch_user])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## Event Payload Types

```typescript
// Window events
interface ResizeEvent {
  size: { width: number; height: number };
}

interface MoveEvent {
  position: { x: number; y: number };
}

// File drop event
interface FileDropEvent {
  paths: string[];
  position: { x: number; y: number };
}
```