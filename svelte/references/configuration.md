# Configuration Reference

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

## Options

| Option | Description |
|--------|-------------|
| preprocess | Preprocessor config |
| compilerOptions | Svelte compiler options |
| extensions | File extensions |

## Environment Variables

| Variable | Description |
|----------|-------------|
| VITE_API_URL | API endpoint |
| NODE_ENV | Environment |

---

