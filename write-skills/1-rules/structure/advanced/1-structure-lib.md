# Lib Structure

## โครงสร้างสำหรับ Library Code และ Shared Components

### File Structure

```
lib/
├── src/                        # Source code
│   ├── components/             # Reusable components
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── index.ts
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   └── Button.stories.tsx
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── index.ts
│   │   ├── forms/
│   │   │   ├── FormField/
│   │   │   ├── FormValidator/
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── Footer/
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks/                   # Custom hooks
│   │   ├── use-api.ts
│   │   ├── use-auth.ts
│   │   ├── use-local-storage.ts
│   │   ├── use-debounce.ts
│   │   └── index.ts
│   ├── utils/                   # Utility functions
│   │   ├── format.ts
│   │   ├── validation.ts
│   │   ├── date.ts
│   │   ├── string.ts
│   │   └── index.ts
│   ├── types/                   # TypeScript types
│   │   ├── api.ts
│   │   ├── user.ts
│   │   ├── common.ts
│   │   └── index.ts
│   ├── constants/               # Constants
│   │   ├── api-endpoints.ts
│   │   ├── error-messages.ts
│   │   ├── config.ts
│   │   └── index.ts
│   ├── services/                # Service layer
│   │   ├── api-client.ts
│   │   ├── auth-service.ts
│   │   ├── storage-service.ts
│   │   └── index.ts
│   └── index.ts                 # Main entry point
├── dist/                        # Build output
├── docs/                        # Documentation
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── README.md
├── tests/                       # Test files
│   ├── setup.ts
│   ├── mocks/
│   └── fixtures/
├── stories/                     # Storybook stories
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

### Library Components Table

| Category | Component | Props | Usage | Export |
|----------|-----------|-------|-------|--------|
| **UI Components** | Button | variant, size, disabled | Clickable actions | `@lib/ui/Button` |
| **UI Components** | Input | type, placeholder, validation | Form inputs | `@lib/ui/Input` |
| **UI Components** | Modal | isOpen, onClose, children | Dialog overlays | `@lib/ui/Modal` |
| **Form Components** | FormField | name, label, validation | Form fields | `@lib/forms/FormField` |
| **Form Components** | FormValidator | rules, errors | Form validation | `@lib/forms/FormValidator` |
| **Layout Components** | Header | navigation, user | Page header | `@lib/layout/Header` |
| **Layout Components** | Sidebar | menu, collapsed | Side navigation | `@lib/layout/Sidebar` |

### Hooks Table

| Hook | Purpose | Dependencies | Return |
|------|---------|---------------|--------|
| **use-api** | API calls | axios | data, loading, error |
| **use-auth** | Authentication | auth-service | user, login, logout |
| **use-local-storage** | Local storage | browser | value, setValue, remove |
| **use-debounce** | Debounce values | - | debouncedValue |
| **use-form** | Form state | - | values, errors, submit |

### Utility Functions Table

| Function | Purpose | Parameters | Return |
|----------|---------|------------|--------|
| **format** | Data formatting | value, type | string |
| **validation** | Input validation | value, rules | boolean |
| **date** | Date operations | date, operation | Date/string |
| **string** | String manipulation | string, operation | string |

### Component Example

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react'
import { cn } from '@/utils'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) => {
  return (
    <button
      className={cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        disabled && 'btn-disabled'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Hook Example

```typescript
// src/hooks/use-api.ts
import { useState, useEffect } from 'react'
import { apiClient } from '@/services/api-client'

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const result = await apiClient.get<T>(url)
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
```

### Build Configuration

```javascript
// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve(),
    typescript()
  ],
  external: ['react', 'react-dom']
}
```

### Package Configuration

```json
{
  "name": "@my-org/ui-lib",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./ui": "./dist/ui/index.js",
    "./hooks": "./dist/hooks/index.js",
    "./utils": "./dist/utils/index.js"
  },
  "scripts": {
    "build": "rollup -c",
    "dev": "rollup -c -w",
    "test": "vitest",
    "storybook": "storybook dev -p 6006"
  }
}
```

### Best Practices

1. **Component Design** - สร้าง components ที่ reusable และ composable
2. **Type Safety** - ใช้ TypeScript เต็มรูปแบบ
3. **Testing** - มี test สำหรับทุก components และ hooks
4. **Documentation** - มี docs และ stories สำหรับ components
5. **Tree Shaking** - ออกแบบให้ support tree shaking
6. **Version Management** - ใช้ semantic versioning
