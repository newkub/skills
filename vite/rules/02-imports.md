# Import Rules

## Explicit Extensions

**ห้าม**ใช้ extension-less imports:

```typescript
// ❌ Bad
import Component from './Component'
import utils from './utils'

// ✅ Good
import Component from './Component.vue'
import utils from './utils.ts'
```

เหตุผล:

- ลด filesystem checks จาก resolve.extensions
- TypeScript `moduleResolution: "bundler"` รองรับ
- ชัดเจน ไม่สับสน

---

## หลีกเลี่ยง Barrel Files

**ห้าม**ใช้ barrel files (re-export files):

```typescript
// ❌ utils/index.ts - Barrel file
export * from './color.js'
export * from './date.js'
export * from './format.js'

// ❌ การใช้งาน
import { formatDate, formatColor } from '@/utils'

// ✅ Import ตรงจาก source
import { formatDate } from '@/utils/date.js'
import { formatColor } from '@/utils/color.js'
```

เหตุผล:

- Barrel files โหลดทุกไฟล์ใน directory แม้ใช้แค่บาง function
- เพิ่ม initial page load time
- เพิ่ม transform time ใน dev server

---

## Import Aliases

**แนะนำ**ให้ใช้ `@` alias สำหรับ src directory:

```typescript
// ✅ Good - Absolute import
import Button from '@/components/Button.vue'
import { useAuth } from '@/composables/useAuth'

// ❌ Bad - Deep relative import
import Button from '../../../../components/Button.vue'
```

---

## Side Effect Imports

จัดกลุ่ม side effect imports ไว้ด้านบน:

```typescript
// 1. Side effect imports (บนสุด)
import 'normalize.css'
import '@/styles/global.css'

// 2. External libraries
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 3. Internal imports
import App from './App.vue'
import router from './router'
```

---

## Dynamic Imports สำหรับ Code Splitting

ใช้ dynamic imports สำหรับ heavy components:

```typescript
// ✅ Lazy loading route components
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/reports',
    component: () => import('./views/Reports.vue')
  }
]

// ✅ Dynamic import ใน component
<script setup lang="ts">
const HeavyChart = defineAsyncComponent(() =>
  import('./HeavyChart.vue')
)
</script>
```

---

## Type-only Imports

ใช้ `type` keyword สำหรับ type imports:

```typescript
// ✅ Explicit type import
import type { User, Config } from './types'
import { type User, createUser } from './types'

// หรือใช้ "import type" แยก
import type { User } from './types'
import { createUser } from './types'
```

---

## Import Order Convention

เรียงลำดับ imports ดังนี้:

1. **Side effects** (`import 'normalize.css'`)
2. **Built-in modules** (`import path from 'path'`)
3. **External libraries** (Vue, React, Pinia)
4. **Internal absolute imports** (`@/components`, `@/utils`)
5. **Internal relative imports** (`./Component`, `../utils`)
6. **Types** (`import type { ... }`)

```typescript
// 1. Side effects
import 'normalize.css'

// 2. External
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 3. Absolute
import App from '@/App.vue'
import router from '@/router'

// 4. Relative
import Header from './Header.vue'
import { useAuth } from '../composables/useAuth'

// 5. Types
import type { User } from '@/types'
```
