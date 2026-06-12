# Create SvelteKit App

Workflow for creating a SvelteKit application.

## Steps

1. **Create new project**
   ```bash
   npm create svelte@latest my-app
   ```

2. **Choose options**
   - Skeleton project
   - TypeScript
   - ESLint
   - Prettier
   - Playwright
   - Vitest

3. **Configure project**
   - Set up dependencies
   - Configure svelte.config.js
   - Set up environment variables

4. **Implement routes**
   - Create routes directory
   - Add page components
   - Add load functions

5. **Run development**
   ```bash
   cd my-app
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Example: Simple Route

```svelte
<!-- routes/+page.svelte -->
<script>
  let count = 0;
</script>

<main>
  <h1>Hello SvelteKit!</h1>
  <button on:click={() => count += 1}>
    Count: {count}
  </button>
</main>
```

## Best Practices

- Use load functions for data
- Follow Svelte patterns
- Optimize for SSR
- Use proper routing
