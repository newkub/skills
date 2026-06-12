# Configuration

## svelte.config.js

```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    css: 'injected'
  }
};
```

## Vite Config

```typescript
import { defineConfig } from 'vite';
import { svelte } from 'svelte-plugin-vite';

export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000
  }
});
```

## TypeScript

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "target": "ESNext",
    "module": "ESNext",
    "strict": true
  }
}
```

## Environment

```bash
VITE_API_URL=https://api.example.com
```