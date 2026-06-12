# Patterns

## Common Patterns ใน Vite Projects

Patterns ที่ใช้บ่อยในการพัฒนาโปรเจกต์ด้วย Vite

## Architecture Patterns

### 1. Feature-Based Architecture

จัดโครงสร้างตาม features แทนที่จะเป็น type-based

```text
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── api/
│   │   ├── types/
│   │   └── index.ts
│   ├── dashboard/
│   │   ├── components/
│   │   ├── api/
│   │   └── index.ts
│   └── settings/
│       ├── components/
│       ├── api/
│       └── index.ts
└── shared/
    ├── components/
    ├── utils/
    └── types/
```

**Benefits:**
- Easy to locate feature-related code
- Better for large teams
- Easier to delete features

### 2. Layered Architecture

แยก code ออกเป็น layers ชัดเจน

```text
src/
├── presentation/     # UI components
├── application/     # Business logic
├── domain/          # Core business rules
└── infrastructure/  # External services
```

**Benefits:**
- Clear separation of concerns
- Easy to test each layer
- Better maintainability

## Code Organization Patterns

### 1. Barrel Exports

ใช้ `index.ts` สำหรับ re-export

```typescript
// src/components/index.ts
export { default as Button } from './Button.vue'
export { default as Input } from './Input.vue'
export { default as Modal } from './Modal.vue'

// Usage
import { Button, Input, Modal } from '@/components'
```

### 2. Path Aliases

ตั้งค่า path aliases สำหรับ clean imports

```typescript
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
})
```

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}
```

### 3. Dynamic Imports

Lazy load components และ modules

```typescript
// Vue
const HeavyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)

// React
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// Router
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue'),
  },
]
```

## State Management Patterns

### 1. Composition API Pattern (Vue)

```typescript
// src/composables/useAuth.ts
import { ref, computed } from 'vue'

export function useAuth() {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  const login = async (credentials) => {
    const response = await api.login(credentials)
    user.value = response.data
  }

  const logout = () => {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
}
```

### 2. Custom Hooks Pattern (React)

```typescript
// src/hooks/useAuth.ts
import { useState, useCallback } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  const isAuthenticated = !!user

  const login = useCallback(async (credentials) => {
    const response = await api.login(credentials)
    setUser(response.data)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
}
```

### 3. Store Pattern (Pinia)

```typescript
// src/stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(credentials) {
      const response = await api.login(credentials)
      this.user = response.data
    },
    logout() {
      this.user = null
    },
  },
})
```

## API Patterns

### 1. API Client Pattern

```typescript
// src/api/client.ts
import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
})

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default client
```

### 2. Repository Pattern

```typescript
// src/api/repositories/user.ts
import client from './client'

export const userRepository = {
  async getAll() {
    const response = await client.get('/users')
    return response.data
  },

  async getById(id) {
    const response = await client.get(`/users/${id}`)
    return response.data
  },

  async create(data) {
    const response = await client.post('/users', data)
    return response.data
  },

  async update(id, data) {
    const response = await client.put(`/users/${id}`, data)
    return response.data
  },

  async delete(id) {
    const response = await client.delete(`/users/${id}`)
    return response.data
  },
}
```

### 3. Service Pattern

```typescript
// src/services/auth.ts
import { userRepository } from '../api/repositories/user'

export const authService = {
  async login(credentials) {
    const user = await userRepository.getByEmail(credentials.email)
    if (user && user.password === credentials.password) {
      return user
    }
    throw new Error('Invalid credentials')
  },

  async register(data) {
    return await userRepository.create(data)
  },
}
```

## Component Patterns

### 1. Container/Presentational Pattern

```vue
<!-- src/components/UserListContainer.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserList from './UserList.vue'
import { userRepository } from '@/api/repositories/user'

const users = ref([])

onMounted(async () => {
  users.value = await userRepository.getAll()
})
</script>

<template>
  <UserList :users="users" />
</template>
```

```vue
<!-- src/components/UserList.vue -->
<script setup lang="ts">
defineProps<{
  users: User[]
}>()
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>
```

### 2. Compound Components Pattern

```vue
<!-- src/components/Tabs.vue -->
<script setup lang="ts">
import { ref, provide } from 'vue'

const activeTab = ref(0)

provide('tabs', {
  activeTab,
  setActiveTab: (index: number) => {
    activeTab.value = index
  },
})
</script>

<template>
  <div class="tabs">
    <slot />
  </div>
</template>
```

```vue
<!-- src/components/Tab.vue -->
<script setup lang="ts">
import { inject } from 'vue'

const props = defineProps<{
  index: number
}>()

const tabs = inject('tabs') as any
</script>

<template>
  <button
    :class="{ active: tabs.activeTab === props.index }"
    @click="tabs.setActiveTab(props.index)"
  >
    <slot />
  </button>
</template>
```

### 3. Renderless Components Pattern

```vue
<!-- src/components/MouseTracker.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

const update = (event: MouseEvent) => {
  x.value = event.clientX
  y.value = event.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})

defineExpose({ x, y })
</script>

<template>
  <slot :x="x" :y="y" />
</template>
```

## Utility Patterns

### 1. Utility Functions

```typescript
// src/utils/date.ts
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

export function formatTime(date: Date): string {
  return date.toTimeString().split(' ')[0]
}

export function formatDateTime(date: Date): string {
  return `${formatDate(date)} ${formatTime(date)}`
}
```

### 2. Validation Utilities

```typescript
// src/utils/validation.ts
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function validatePassword(password: string): boolean {
  return password.length >= 8
}
```

### 3. Error Handling Utilities

```typescript
// src/utils/error.ts
export function handleError(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return 'An unknown error occurred'
}

export function logError(error: unknown): void {
  console.error('Error:', error)
}
```

## Configuration Patterns

### 1. Environment-Specific Config

```typescript
// src/config/index.ts
const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
}

export default config
```

### 2. Feature Flags

```typescript
// src/config/features.ts
const features = {
  newDashboard: import.meta.env.VITE_FEATURE_NEW_DASHBOARD === 'true',
  darkMode: import.meta.env.VITE_FEATURE_DARK_MODE === 'true',
}

export default features
```

## Performance Patterns

### 1. Code Splitting

```typescript
// Dynamic imports for heavy modules
const heavyModule = await import('./heavyModule')
```

### 2. Lazy Loading Images

```vue
<script setup lang="ts">
import { ref } from 'vue'

const imageLoaded = ref(false)

const loadImage = () => {
  imageLoaded.value = true
}
</script>

<template>
  <img
    v-if="imageLoaded"
    src="/heavy-image.jpg"
    @load="loadImage"
  />
  <div v-else class="placeholder">Loading...</div>
</template>
```

### 3. Memoization

```typescript
import { computed } from 'vue'

const expensiveValue = computed(() => {
  // Expensive computation
  return result
})
```
