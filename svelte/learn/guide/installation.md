# Installation

## SvelteKit

```bash
bun create svelte@latest my-app
cd my-app
bun install
```

## Svelte Only

```bash
bun create vite@latest my-app -- --template svelte-ts
cd my-app
bun install
```

## Manual Setup

```bash
bun init -y
bun install svelte
bun install -D vite svelte-plugin-vite typescript
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