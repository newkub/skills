# Integration

## ภาพรวม

Svelte สามารถเชื่อมต่อกับ tools และ libraries ต่างๆ ได้อย่างง่ายดาย

## Build Tools

### Vite

Vite เป็น build tool ที่แนะนำสำหรับ Svelte

```bash
bun create vite my-app -- --template svelte
cd my-app
bun install
bun run dev
```

### Rollup

Rollup เป็น default bundler สำหรับ Svelte

```javascript
// rollup.config.js
import svelte from 'rollup-plugin-svelte';

export default {
  plugins: [svelte()]
};
```

## TypeScript

### Setup

```bash
bun add -D typescript svelte-check
```

### Component with TypeScript

```svelte
<script lang="ts">
  let count: number = 0;
  
  function increment(): void {
    count += 1;
  }
</script>
```

## Testing

### Vitest

```bash
bun add -D vitest @testing-library/svelte
```

### Testing Library

```javascript
import { render, screen } from '@testing-library/svelte';
import Counter from './Counter.svelte';

test('increments counter', () => {
  render(Counter);
  const button = screen.getByRole('button');
  // test logic
});
```

## State Management

### Svelte Stores

```javascript
import { writable } from 'svelte/store';

export const count = writable(0);
```

### External Libraries

- **Redux**: ใช้ `svelte-redux` adapter
- **MobX**: ใช้ `mobx-svelte` integration
- **Zustand**: ใช้ `zustand-svelte` adapter

## Routing

### Svelte Router

```bash
bun add svelte-routing
```

```svelte
<script>
  import { Router, Route } from 'svelte-routing';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
</Router>
```

## CSS Frameworks

### Tailwind CSS

```bash
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

### Bootstrap

```bash
bun add bootstrap
```

```svelte
<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
</style>
```

## API Integration

### Fetch API

```javascript
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  return data;
}
```

### Axios

```bash
bun add axios
```

```javascript
import axios from 'axios';

async function fetchData() {
  const { data } = await axios.get('/api/data');
  return data;
}
```

## Summary

Svelte มี ecosystem ที่เข้ากันได้ดีกับ:
- Build tools: Vite, Rollup
- TypeScript: Full support
- Testing: Vitest, Testing Library
- State Management: Stores, external libraries
- Routing: svelte-routing
- CSS Frameworks: Tailwind, Bootstrap
- API: Fetch, Axios
