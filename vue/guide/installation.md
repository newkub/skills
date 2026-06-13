# Installation

## Vue CLI

```bash
npm install -g @vue/cli
vue create my-project
cd my-project
npm run serve
```

## Vite (Recommended)

```bash
npm create vite@latest my-project -- --template vue-ts
cd my-project
npm install
npm run dev
```

## Nuxt.js

```bash
npx nuxi@latest init my-project
cd my-project
npm install
npm run dev
```

## Manual Setup

```bash
npm init -y
npm install vue
npm install -D vite @vitejs/plugin-vue typescript vue-tsc
```

## Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
});
```

## Project Structure

```
my-project/
├── src/
│   ├── components/
│   ├── views/
│   ├── stores/
│   ├── router/
│   ├── assets/
│   ├── App.vue
│   └── main.ts
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)