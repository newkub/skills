# Compilation

## ภาพรวม

Svelte compiler แปลง `.svelte` files เป็น JavaScript ณ build time

## Compilation Process

### Input

```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>
  {count}
</button>
```

### Output

```javascript
// Generated JavaScript
import { SvelteComponent, init, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
  let button;
  let t0;
  
  return {
    c() {
      button = element("button");
      t0 = text(ctx[0]);
      button.addEventListener("click", click_handler);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
    },
    p(ctx, [dirty]) {
      if (dirty & 1) set_data(t0, ctx[0]);
    },
    d(detaching) {
      if (detaching) detach(button);
      button.removeEventListener("click", click_handler);
    }
  };
}

// ... more generated code
```

## Compiler Options

### Basic Options

```javascript
import { compile } from 'svelte/compiler';

const result = compile(source, {
  generate: 'dom', // 'dom' or 'ssr'
  dev: false,
  css: false,
  hydratable: false,
  customElement: false
});
```

### Options Explained

| Option | Description |
|--------|-------------|
| `generate` | Output format ('dom' or 'ssr') |
| `dev` | Enable dev mode |
| `css` | Extract CSS to separate file |
| `hydratable` | Enable hydration |
| `customElement` | Compile as custom element |

## Preprocessing

### Script Preprocessor

```javascript
import { preprocess } from 'svelte/compiler';

const processed = await preprocess(source, {
  script: ({ content, attributes }) => {
    if (attributes.lang === 'ts') {
      // Transform TypeScript
    }
  }
});
```

### Style Preprocessor

```javascript
const processed = await preprocess(source, {
  style: ({ content, attributes }) => {
    if (attributes.lang === 'scss') {
      // Transform SCSS
    }
  }
});
```

## Compilation Benefits

### Performance

- **No Virtual DOM**: Direct DOM manipulation
- **Smaller Bundle**: Less runtime code
- **Faster Runtime**: No diffing algorithm

### Developer Experience

- **Less Boilerplate**: Automatic reactivity
- **Type Safety**: TypeScript support
- **Better Errors**: Compile-time checks

## Build Integration

### Vite Integration

```javascript
// vite.config.js
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default {
  plugins: [svelte()]
};
```

### Rollup Integration

```javascript
// rollup.config.js
import svelte from 'rollup-plugin-svelte';

export default {
  plugins: [svelte()]
};
```

## Summary

Compilation concepts:
- Compile-time transformation
- No virtual DOM
- Compiler options
- Preprocessing
- Build integration
- Performance benefits
