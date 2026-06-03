# Installation

## Overview

วิธีการติดตั้ง TanStack Form สำหรับ framework ต่างๆ

## Package Managers

### npm

```bash
npm install @tanstack/react-form
```

### yarn

```bash
yarn add @tanstack/react-form
```

### pnpm

```bash
pnpm add @tanstack/react-form
```

### bun

```bash
bun add @tanstack/react-form
```

## Framework-specific Packages

| Framework | Package | Command |
|-----------|---------|---------|
| React | `@tanstack/react-form` | `npm install @tanstack/react-form` |
| Solid | `@tanstack/solid-form` | `npm install @tanstack/solid-form` |

## React Setup

### 1. Install Package

```bash
npm install @tanstack/react-form
```

### 2. Basic Usage

```tsx
import { useForm } from '@tanstack/react-form'

function MyForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: ({ value }) => {
      console.log(value)
    }
  })

  return (
    <form.Field
      name="email"
      children={(field) => (
        <input
          type="email"
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
        />
      )}
    />
  )
}
```

## Solid Setup

### 1. Install Package

```bash
npm install @tanstack/solid-form
```

### 2. Basic Usage

```tsx
import { createForm } from '@tanstack/solid-form'

function MyForm() {
  const [form, { Field, handleSubmit }] = createForm({
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: ({ value }) => {
      console.log(value)
    }
  })

  return (
    <Field name="email">
      {(field) => (
        <input
          type="email"
          value={field()}
          onInput={(e) => field(e.currentTarget.value)}
        />
      )}
    </Field>
  )
}
```

## TypeScript Setup

TanStack Form มาพร้อม TypeScript support โดยไม่ต้องตั้งค่าเพิ่มเติม

### tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler"
  }
}
```

## Validator Dependencies

### Zod (Recommended)

```bash
npm install zod
```

### Yup

```bash
npm install yup
```

### Valibot

```bash
npm install valibot
```

## CDN Usage

### ESM

```html
<script type="module">
  import { useForm } from 'https://esm.sh/@tanstack/react-form'
</script>
```

### UMD

```html
<script src="https://unpkg.com/@tanstack/react-form/umd/index.production.js"></script>
```

## Version Compatibility

| TanStack Form | React | Solid | TypeScript |
|---------------|-------|-------|------------|
| v1.x | 18+ | 1.7+ | 5.0+ |
| v1.x (legacy) | 16.8+ | - | 4.9+ |

## Peer Dependencies

确保已安装以下依赖：

```json
{
  "peerDependencies": {
    "react": ">=18",
    "solid-js": ">=1.7"
  }
}
```

## Verify Installation

```tsx
import { useForm } from '@tanstack/react-form'

// Should work without errors
const form = useForm({
  defaultValues: { test: '' }
})

console.log(form) // FormApi instance
```