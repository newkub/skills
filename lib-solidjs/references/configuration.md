# configuration

## index.md

# Configuration Reference

## vite.config.ts

```typescript
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    open: true
  }
});
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "preserve",
    "jsxImportSource": "solid-js",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| VITE_API_URL | API endpoint |
| NODE_ENV | Environment |

---

