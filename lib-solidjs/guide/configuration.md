# Configuration

## Vite Config

```typescript
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000
  }
});
```

## TypeScript

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "preserve",
    "jsxImportSource": "solid-js"
  }
}
```

## Environment

```bash
VITE_API_URL=https://api.example.com
```

## Build

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```