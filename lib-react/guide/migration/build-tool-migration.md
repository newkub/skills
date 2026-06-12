# Build Tool Migration

## ภาพรวม

วิธีการ migrate ระหว่าง build tools

## Create React App to Vite

### 1. Install Vite

```bash
bun create vite my-app --template react
```

### 2. Move Files

```
Move src/ from CRA to Vite project
Move public/ to Vite project
```

### 3. Update Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
```

### 4. Update Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Webpack to Vite

### 1. Install Vite

```bash
bun add -D vite @vitejs/plugin-react
```

### 2. Create vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
```

### 3. Update Imports

```javascript
// ❌ Webpack
import logo from '@/assets/logo.png';

// ✅ Vite
import logo from '@/assets/logo.png';
```

## สรุป

Build tool migration:
1. Install new build tool
2. Move and reorganize files
3. Update configuration
4. Update scripts
5. Test thoroughly
