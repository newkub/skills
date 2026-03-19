# Project Structure Rules

## โครงสร้างไฟล์พื้นฐาน

### SPA Project Structure

```text
my-project/
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
├── package.json
├── tsconfig.json           # TypeScript config
├── .env                    # Environment variables
├── .env.local              # Local env (gitignored)
├── .env.[mode]             # Mode-specific env
├── public/                 # Static assets (ไม่ผ่าน build)
│   ├── favicon.ico
│   └── robots.txt
└── src/
    ├── main.ts             # Application entry
    ├── App.vue             # Root component
    ├── assets/             # Assets ที่ผ่าน build
    │   ├── logo.png
    │   └── styles/
    ├── components/         # UI components
    │   ├── common/         # Reusable components
    │   └── layout/         # Layout components
    ├── composables/        # Vue composables
    ├── hooks/              # React hooks
    ├── router/             # Routing config
    ├── stores/             # State management
    ├── utils/              # Utility functions
    │   ├── date.ts
    │   ├── http.ts
    │   └── validators.ts
    ├── types/              # TypeScript types
    └── views/              # Page components
```

### Library Project Structure

```text
my-lib/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── src/
    ├── index.ts            # Library entry
    ├── components/
    ├── composables/
    ├── utils/
    └── types/
└── dist/                   # Build output
```

---

## Directory Guidelines

### หลักการจัดโครงสร้าง

| Directory | ใช้สำหรับ | ตัวอย่าง |
|-----------|-----------|----------|
| `src/components/` | UI components ทั้งหมด | Button.vue, Card.vue |
| `src/components/common/` | Components ใช้ซ้ำได้ | BaseInput.vue |
| `src/components/layout/` | Layout components | Header.vue, Sidebar.vue |
| `src/composables/` | Vue composables | useAuth.ts, useFetch.ts |
| `src/hooks/` | React hooks | useAuth.ts, useLocalStorage.ts |
| `src/router/` | Routing logic | index.ts, routes.ts |
| `src/stores/` | State management | auth.ts, user.ts |
| `src/utils/` | Utility functions | date.ts, format.ts |
| `src/services/` | API services | api.ts, auth.service.ts |
| `src/types/` | TypeScript types | user.ts, api.ts |
| `src/views/` | Page components | Home.vue, About.vue |

---

## File Naming Conventions

### Components

```text
components/
├── Button.vue              # PascalCase
├── Card/
│   ├── Card.vue
│   ├── CardHeader.vue
│   └── CardFooter.vue
└── layout/
    ├── TheHeader.vue       # Layout ขึ้นต้นด้วย The
    └── TheFooter.vue
```

### Composables/Hooks

```text
composables/
├── useAuth.ts              # ขึ้นต้นด้วย use
├── useUser.ts
└── useFetch.ts
```

### Utilities

```text
utils/
├── date.ts                 # ชื่อสั้น สื่อความหมาย
├── http.ts
├── format.ts
└── validators.ts
```

---

## Import Aliases

ตั้งค่า aliases มาตรฐาน:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@router': path.resolve(__dirname, './src/router'),
      '@types': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})
```

### ใน TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@composables/*": ["./src/composables/*"],
      "@utils/*": ["./src/utils/*"],
      "@stores/*": ["./src/stores/*"],
      "@router/*": ["./src/router/*"],
      "@types/*": ["./src/types/*"],
      "@assets/*": ["./src/assets/*"]
    }
  }
}
```

---

## Static Assets

### public/ vs src/assets/

| Directory | ใช้เมื่อไหร่ | การใช้งาน |
|-----------|-------------|----------|
| `public/` | Files ที่ไม่ต้องผ่าน build | `/favicon.ico` |
| `src/assets/` | Files ที่ต้องผ่าน build | `import logo from './assets/logo.png'` |

### Asset Handling

```typescript
// ใน public/
<img src="/logo.png" />

// ใน src/assets/
import logo from './assets/logo.png'
<img :src="logo" />

// URL imports
import logoUrl from './assets/logo.png?url'
const logo = new URL('./assets/logo.png', import.meta.url).href
```
