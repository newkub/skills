# Common Issues

## Dev Server Issues

### Port Already in Use

**Error:** `Port 5173 is already in use`

**Solutions:**

```bash
# 1. หา process ที่ใช้ port
lsof -i :5173

# 2. Kill process
kill -9 <PID>

# หรือใช้ auto port
# vite.config.ts
export default defineConfig({
  server: {
    strictPort: false,  // หา port ว่างอัตโนมัติ
    port: 5173
  }
})
```

---

### HMR Not Working

**ปัญหา:** แก้ไขไฟล์แล้ว browser ไม่ update

**Solutions:**

1. **Check WebSocket Connection**
   - ดูใน browser console ว่ามี errors เกี่ยวกับ WebSocket หรือไม่
   - ตรวจสอบว่า proxy ไม่ block WebSocket

2. **Vite Config**

   ```typescript
   export default defineConfig({
     server: {
       hmr: {
         protocol: 'ws',
         host: 'localhost',
         port: 5173
       }
     }
   })
   ```

3. **Check for Syntax Errors**
   - Syntax errors อาจทำให้ HMR fail
   - ดูใน terminal ว่ามี errors หรือไม่

---

### Dependencies Not Found

**Error:** `Failed to resolve import "xxx" from "yyy"`

**Solutions:**

1. **Install missing dependency**

   ```bash
   bun add xxx
   ```

2. **Clear Vite cache**

   ```bash
   rm -rf node_modules/.vite
   bunx vite
   ```

3. **Force optimize**

   ```bash
   bunx vite --force
   ```

4. **Add to optimizeDeps**

   ```typescript
   export default defineConfig({
     optimizeDeps: {
       include: ['xxx']
     }
   })
   ```

---

## Preload Error Handling

**ปัญหา:** Failed to fetch dynamically imported module (หลัง deploy ใหม่)

**สาเหตุ:** User ที่เปิด site ก่อน deploy ใหม่ พยายามโหลด old chunks ที่ถูกลบไปแล้ว

**Solution:**

```typescript
// ใน entry file (main.ts หรือ main.js)
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault() // ไม่ throw error
  window.location.reload() // refresh หน้าเพื่อโหลด assets ใหม่
})
```

**Config ที่แนะนำ:**

```nginx
# ตั้งค่า Cache-Control บน HTML file
Cache-Control: no-cache
```

---

## Watch Mode Issues

### File Changes Not Detected (Linux)

**Error:** `ENOSPC: System limit for number of file watchers reached`

**Solution (Linux):**

```bash
# เพิ่ม limit ชั่วคราว
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl fs.inotify.max_user_instances=512

# หรือเพิ่มใน /etc/sysctl.conf เพื่อให้ถาวร
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
echo "fs.inotify.max_user_instances=512" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Out of Memory

**Error:** `JavaScript heap out of memory`

**Solutions:**

```bash
# เพิ่ม memory limit
node --max-old-space-size=4096 node_modules/.bin/vite build

# หรือใน package.json
{
  "scripts": {
    "build": "node --max-old-space-size=4096 node_modules/.bin/vite build"
  }
}
```

**Optimize build:**

```typescript
export default defineConfig({
  build: {
    sourcemap: false,
    minify: 'esbuild',  // เร็วกว่า terser
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router']
        }
      }
    }
  }
})
```

---

### Chunk Size Too Large

**Warning:** `(!) Some chunks are larger than 500 kBs`

**Solutions:**

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // แยก vendor
          'vendor-vue': ['vue', 'vue-router', 'pinia'],
          'vendor-ui': ['@headlessui/vue'],

          // แยกตาม feature
          'feature-dashboard': ['./src/views/Dashboard.vue'],
          'feature-reports': ['./src/views/Reports.vue']
        }
      }
    }
  }
})
```

---

### CSS Not Loading in Production

**ปัญหา:** CSS แสดงผลถูกต้องใน dev แต่ไม่โหลดใน production

**Solutions:**

1. **Check public path**

   ```typescript
   export default defineConfig({
     base: './',  // หรือ '/your-app/'
   })
   ```

2. **Enable CSS code split**

   ```typescript
   export default defineConfig({
     build: {
       cssCodeSplit: true
     }
   })
   ```

---

## TypeScript Issues

### Cannot find module

**Error:** `Cannot find module '@/components/Button.vue' or its corresponding type declarations`

**Solution:**

```typescript
// vite-env.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

### import.meta.env Types

**Error:** `Property 'VITE_XXX' does not exist on type 'ImportMetaEnv'`

**Solution:**

```typescript
// vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly DEV: boolean
  readonly PROD: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## Performance Issues

### Slow Dev Server Startup

**Solutions:**

1. **Reduce resolve.extensions**

   ```typescript
   export default defineConfig({
     resolve: {
       extensions: ['.ts', '.tsx', '.js', '.jsx']  // ลบที่ไม่ใช้
     }
   })
   ```

2. **Avoid barrel files**

   ```typescript
   // ❌ หลีกเลี่ยง
   import { something } from '@/utils'

   // ✅ ใช้ direct import
   import { something } from '@/utils/something.js'
   ```

3. **Use warmup**

   ```typescript
   export default defineConfig({
     server: {
       warmup: {
         clientFiles: [
           './src/App.vue',
           './src/router/index.ts'
         ]
       }
     }
   })
   ```

---

### Slow HMR

**Solutions:**

1. **Check plugins**
   - บาง plugins อาจทำงานช้า
   - ใช้ `vite-plugin-inspect` ตรวจสอบ

2. **Reduce transforms**
   - ลดจำนวน plugins ที่ transform files
   - ใช้ conditional loading

---

## Environment Variables Issues

### Variables Not Available

**ปัญหา:** `import.meta.env.VITE_XXX` เป็น `undefined`

**Solutions:**

1. **Check prefix**
   - ต้องขึ้นต้นด้วย `VITE_`

2. **Restart dev server**
   - Environment variables โหลดตอน start

3. **Check .env file location**
   - ต้องอยู่ใน project root

4. **Use loadEnv in config**

   ```typescript
   import { defineConfig, loadEnv } from 'vite'

   export default defineConfig(({ mode }) => {
     const env = loadEnv(mode, process.cwd(), '')
     return {
       define: {
         __API_URL__: JSON.stringify(env.VITE_API_URL)
       }
     }
   })
   ```
