# Ecosystem และ Plugins ของ Tauri

## Official Plugins

Tauri v2 มี official plugins ที่รองรับ use cases ทั่วไป

### Core Plugins

#### 1. File System Plugin

```bash
npm install @tauri-apps/plugin-fs
```

**Features**
- Read/write files
- Directory operations
- File metadata
- Watch for changes

**Usage**
```typescript
import { readTextFile, writeTextFile } from '@tauri-apps/plugin-fs'

const content = await readTextFile('path/to/file.txt')
await writeTextFile('path/to/file.txt', 'Hello World')
```

#### 2. Shell Plugin

```bash
npm install @tauri-apps/plugin-shell
```

**Features**
- Execute shell commands
- Open URLs
- Open files with default app

**Usage**
```typescript
import { open } from '@tauri-apps/plugin-shell'

await open('https://tauri.app')
await open('path/to/file.pdf')
```

#### 3. Dialog Plugin

```bash
npm install @tauri-apps/plugin-dialog
```

**Features**
- File dialogs (open, save)
- Message dialogs
- Confirm dialogs

**Usage**
```typescript
import { open, save } from '@tauri-apps/plugin-dialog'

const filePath = await open({
  multiple: false,
  filters: [{ name: 'Text', extensions: ['txt'] }]
})
```

#### 4. Notification Plugin

```bash
npm install @tauri-apps/plugin-notification
```

**Features**
- System notifications
- Custom sounds
- Action buttons

**Usage**
```typescript
import { sendNotification } from '@tauri-apps/plugin-notification'

await sendNotification({
  title: 'Hello',
  body: 'World'
})
```

#### 5. HTTP Plugin

```bash
npm install @tauri-apps/plugin-http
```

**Features**
- HTTP requests
- WebSocket support
- Custom headers

**Usage**
```typescript
import { fetch } from '@tauri-apps/plugin-http'

const response = await fetch('https://api.example.com')
const data = await response.json()
```

### Community Plugins

#### 1. SQL Plugin

```bash
npm install @tauri-apps/plugin-sql
```

**Features**
- SQLite database
- Query execution
- Transaction support

#### 2. Store Plugin

```bash
npm install @tauri-apps/plugin-store
```

**Features**
- Persistent key-value storage
- JSON serialization
- Cross-platform

#### 3. Global Shortcut Plugin

```bash
npm install @tauri-apps/plugin-global-shortcut
```

**Features**
- Register global hotkeys
- Keyboard shortcuts
- Cross-platform

## Frontend Frameworks

### Vue.js

```bash
npm create vue@latest my-app
cd my-app
npm install @tauri-apps/api
npm install -D @tauri-apps/cli
npm run tauri init
```

### React

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install @tauri-apps/api
npm install -D @tauri-apps/cli
npm run tauri init
```

### Svelte

```bash
npm create vite@latest my-app -- --template svelte
cd my-app
npm install @tauri-apps/api
npm install -D @tauri-apps/cli
npm run tauri init
```

### Solid.js

```bash
npm create vite@latest my-app -- --template solid
cd my-app
npm install @tauri-apps/api
npm install -D @tauri-apps/cli
npm run tauri init
```

## Build Tools

### Vite (Recommended)

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import tauri from '@tauri-apps/plugin-vite'

export default defineConfig({
  plugins: [tauri()]
})
```

### Webpack

```javascript
// webpack.config.js
const TauriPlugin = require('@tauri-apps/plugin-webpack')

module.exports = {
  plugins: [new TauriPlugin()]
}
```

## UI Libraries

### Shadcn UI + Tauri

```bash
npx shadcn-ui@latest init
npm install @tauri-apps/api
```

### Element Plus + Tauri

```bash
npm install element-plus
npm install @tauri-apps/api
```

### Ant Design + Tauri

```bash
npm install ant-design
npm install @tauri-apps/api
```

## Development Tools

### Tauri CLI

```bash
# Development
npm run tauri dev

# Build
npm run tauri build

# Info
npm run tauri info
```

### VS Code Extensions

- **Tauri** - Official Tauri support
- **rust-analyzer** - Rust language server
- **Volar** - Vue 3 support
- **ESLint** - JavaScript linting

## Testing

### Unit Testing

**Rust**
```bash
cargo test
```

**JavaScript**
```bash
npm test
```

### E2E Testing

```bash
npm install -D @playwright/test
npx playwright test
```

## Deployment

### Package Managers

**Windows**
- MSI installer
- NSIS installer

**macOS**
- DMG
- PKG
- App Store

**Linux**
- DEB
- AppImage
- RPM

### Auto-updates

```typescript
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'

const { shouldUpdate, manifest } = await checkUpdate()
if (shouldUpdate) {
  await installUpdate()
}
```

## Community Resources

### Official Resources

- [Tauri Website](https://tauri.app)
- [Documentation](https://tauri.app/v1/guides)
- [GitHub](https://github.com/tauri-apps/tauri)
- [Discord](https://discord.gg/tauri)

### Community Projects

- [Tauri Examples](https://github.com/tauri-apps/tauri/tree/dev/examples)
- [Awesome Tauri](https://github.com/tauri-apps/awesome-tauri)
- [Tauri Templates](https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/templates)

### Learning Resources

- [Tauri Tutorial](https://tauri.app/v1/guides/getting-started/setup)
- [Video Tutorials](https://www.youtube.com/results?search_query=tauri+tutorial)
- [Blog Posts](https://tauri.app/blog)

## Contributing

### Contributing to Tauri

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Creating Plugins

```bash
npm create tauri-plugin my-plugin
cd my-plugin
npm install
```

## Best Practices

### Plugin Selection

- Use official plugins when available
- Evaluate community plugins for maintenance
- Test plugins thoroughly before production

### Ecosystem Integration

- Keep dependencies updated
- Follow framework best practices
- Monitor security advisories
