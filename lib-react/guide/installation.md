# Installation

## Vite

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

## Create React App

```bash
bunx create-react-app my-app --template typescript
cd my-app
npm start
```

## Manual Setup

```bash
mkdir my-app
cd my-app
npm init -y
npm install react react-dom
npm install -D vite @vitejs/plugin-react typescript
```

## Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)