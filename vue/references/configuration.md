# Configuration Reference

## Vite Config

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
        },
      },
    },
  },
});
```

### Vite Options

| Option | Description | Default |
|--------|-------------|---------|
| `plugins` | Vite plugins | - |
| `resolve.alias` | Path aliases | - |
| `server.port` | Dev server port | 5173 |
| `server.host` | Dev server host | localhost |
| `server.proxy` | Proxy configuration | - |
| `build.target` | Build target | modules |
| `build.sourcemap` | Generate sourcemap | false |
| `build.rollupOptions.output.manualChunks` | Manual chunk splitting | - |

## Vue Config

```javascript
// vue.config.js
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
};
```

### Vue Options

| Option | Description | Default |
|--------|-------------|---------|
| `publicPath` | Base URL for deployment | / |
| `outputDir` | Build output directory | dist |
| `assetsDir` | Static assets directory | static |
| `productionSourceMap` | Generate sourcemap in production | false |
| `devServer.port` | Dev server port | 8080 |
| `devServer.proxy` | Proxy configuration | - |

## TypeScript Config

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### TypeScript Options

| Option | Description | Default |
|--------|-------------|---------|
| `target` | Target ECMAScript version | ESNext |
| `module` | Module system | ESNext |
| `moduleResolution` | Module resolution strategy | bundler |
| `strict` | Enable strict type checking | true |
| `jsx` | JSX transform | preserve |
| `paths` | Path aliases | - |

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_TITLE` | Application title | Vue App |
| `VITE_API_URL` | API base URL | /api |
| `VITE_USE_MOCK` | Use mock data | false |

## Pinia Config

```typescript
// src/stores/index.ts
import { createPinia } from 'pinia';

export const pinia = createPinia();

pinia.use(({ store }) => {
  // Plugin logic
});
```

## Vue Router Config

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
```

## ESLint Config

```json
// .eslintrc.json
{
  "extends": [
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended"
  ],
  "rules": {
    "vue/multi-word-component-names": "off"
  }
}
```