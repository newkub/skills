# Configuration

## Description

ตั้งค่า Tauri configuration ใน `tauri.conf.json` และ frontend configuration

## Tauri Configuration

### 1. Basic Configuration

แก้ไข `src-tauri/tauri.conf.json`:

```json
{
  "build": {
    "distDir": "../dist",
    "devPath": "http://localhost:5173"
  },
  "package": {
    "productName": "My App",
    "version": "1.0.0"
  },
  "tauri": {
    "bundle": {
      "identifier": "com.example.myapp",
      "icon": ["icons/32x32.png", "icons/128x128.png"]
    },
    "allowlist": {
      "all": false,
      "shell": {
        "all": false,
        "open": true
      }
    }
  }
}
```

### 2. Window Configuration

ตั้งค่า window properties:

```json
{
  "tauri": {
    "windows": [
      {
        "title": "My App",
        "width": 800,
        "height": 600,
        "resizable": true,
        "fullscreen": false,
        "decorations": true
      }
    ]
  }
}
```

### 3. Security Configuration

กำหนด allowlist อย่างเคร่งครัด:

```json
{
  "tauri": {
    "allowlist": {
      "fs": {
        "all": false,
        "readFile": true,
        "writeFile": true,
        "scope": ["$HOME/documents/*"]
      },
      "http": {
        "all": false,
        "request": true,
        "scope": ["https://api.example.com/*"]
      }
    }
  }
}
```

## Frontend Configuration

### 1. Vite Configuration

ตั้งค่า `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 5173,
    strictPort: true
  },
  envPrefix: ['VITE_', 'TAURI_']
})
```

### 2. TypeScript Configuration

ตั้งค่า `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## Examples

### Example 1: Production Build Configuration

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

### Example 2: Custom Window Configuration

```json
{
  "tauri": {
    "windows": [
      {
        "label": "main",
        "title": "My Application",
        "width": 1200,
        "height": 800,
        "minWidth": 800,
        "minHeight": 600,
        "resizable": true,
        "center": true,
        "decorations": true,
        "transparent": false,
        "alwaysOnTop": false,
        "skipTaskbar": false
      }
    ]
  }
}
```

## Anti-Patterns

❌ **ใช้ `allowlist.all: true`**

- เปิด security hole ที่ร้ายแรง

❌ **ไม่ระบุ scope สำหรับ file system**

- อนุญาตให้เข้าถึงไฟล์ทั้งหมด

❌ **ใช้ `devPath` ใน production**

- Application จะไม่ทำงานเมื่อ build

## Verification

1. ตรวจสอบ configuration syntax

   ```bash
   npm run tauri info
   ```

   ต้องไม่มี errors

2. ทดสอบ dev mode

   ```bash
   npm run tauri dev
   ```

   Application ต้องเปิดขึ้นมาได้

3. ทดสอบ production build

   ```bash
   npm run tauri build
   ```

   Build ต้องสำเร็จและสร้าง installer ได้
