# Installation

## SvelteKit

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

## Svelte Only

```bash
npm create vite@latest my-app -- --template svelte-ts
cd my-app
npm install
```

## Manual Setup

```bash
npm init -y
npm install svelte
npm install -D vite svelte-plugin-vite typescript
```

## Vite Config

```typescript
import { defineConfig } from 'vite';
import { svelte } from 'svelte-plugin-vite';

export default defineConfig({
  plugins: [svelte()],
});
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)