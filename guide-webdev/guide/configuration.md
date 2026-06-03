# Configuration

## Overview

การตั้งค่า project และ tools สำหรับ web development

## Project Configuration Files

### 1. Package.json

```json
{
  "name": "my-web-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "test": "vitest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.2.0",
    "vite": "^5.0.0"
  }
}
```

### 2. TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "dom", "dom.iterable"],
    "module": "ESNext",
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
  "include": ["src"],
  "references": [{ "path": "./tsnode.paths.json" }]
}
```

### 3. Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

### 4. ESLint Configuration

```json
// .eslintrc.json
{
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

### 5. Prettier Configuration

```json
// .prettierrc
{
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_API_URL` | API endpoint | `http://localhost:3000` |
| `VITE_APP_TITLE` | App title | My Web App |
| `VITE_FEATURE_FLAGS` | Feature toggles | `true,false,true` |

```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=My Web App (Dev)

# .env.production
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My Web App
```

## Summary

| File | Purpose |
|------|---------|
| **package.json** | Dependencies และ scripts |
| **tsconfig.json** | TypeScript options |
| **vite.config.ts** | Build tool config |
| **.eslintrc.json** | Linting rules |
| **.prettierrc** | Formatting rules |
| **.env** | Environment variables |
