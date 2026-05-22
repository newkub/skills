# Naming Conventions

## ไฟล์ Config

| File | ใช้เมื่อไหร่ |
|------|-------------|
| `vite.config.ts` | **แนะนำ** - TypeScript config พร้อม type checking |
| `vite.config.js` | JavaScript config (ถ้าไม่ใช้ TypeScript) |
| `vite.config.mjs` | ES modules config |
| `vite.config.cjs` | CommonJS config |

## ตั้งชื่อ Config ตาม Environment

```text
vite.config.ts          # หลัก
vite.dev.config.ts       # development only
vite.prod.config.ts      # production only
vite.test.config.ts      # testing
```

ใช้ `--config` flag เพื่อเลือก config:

```bash
bunx vite --config vite.prod.config.ts
```

---

## Entry Point Files

| ชื่อไฟล์ | จุดประสงค์ |
|----------|-----------|
| `index.html` | **MUST** - HTML entry point |
| `src/main.ts` | **แนะนำ** - Application entry |
| `src/App.vue` | **แนะนำ** - Root component (Vue) |
| `src/App.tsx` | **แนะนำ** - Root component (React) |

---

## Directory Naming

```text
src/
├── components/      # UI components
├── views/          # Page components
├── composables/    # Vue composables
├── hooks/          # React hooks
├── utils/          # Utility functions
├── types/          # TypeScript types
├── assets/         # Static assets
├── styles/         # Global styles
└── router/         # Routing config
```

---

## Environment Variables

| Prefix | ใช้เมื่อไหร่ |
|--------|-------------|
| `VITE_` | **MUST** - Expose ไป client-side |
| `PRIVATE_` | Server-side only |
| `SECRET_` | Server-side only |
| ไม่มี prefix | Server-side only |

ตัวอย่าง:

```env
# Client-side (ใช้ใน browser ได้)
VITE_API_URL=https://api.example.com
VITE_APP_NAME=MyApp

# Server-side (ใช้ใน Node.js เท่านั้น)
PRIVATE_API_KEY=secret_key_here
DATABASE_URL=postgres://localhost:5432/mydb
```

---

## Import Aliases

แนะนำให้ใช้ aliases ตามนี้:

```typescript
// Absolute imports
import Component from '@/components/Component.vue'
import { useUser } from '@/composables/useUser'
import { formatDate } from '@/utils/date'

// หลีกเลี่ยง relative path ที่ลึกเกินไป
import Component from '../../../../components/Component.vue' // Bad
```

---

## File Extensions

ใช้ explicit extensions สำหรับ imports:

```typescript
// Good
import Component from './Component.vue'
import utils from './utils.ts'
import styles from './styles.css'

// Bad - ต้อง resolve หลาย extensions
import Component from './Component'
```

ตั้งค่าใน `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true
  }
}
```
