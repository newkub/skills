# Installation

## NPM

```bash
npm install nanostores
```

## Yarn

```bash
yarn add nanostores
```

## Bun

```bash
bun add nanostores
```

## Framework Adapters

### React

```bash
npm install @nanostores/react
```

### Vue

```bash
npm install @nanostores/vue
```

### Solid

```bash
npm install @nanostores/solid
```

### Svelte

```bash
npm install @nanostores/svelte
```

## Verify Installation

```javascript
import { atom } from 'nanostores';
const count = atom(0);
console.log(count.get());
```

## CDN

```html
<script type="module">
  import { atom } from 'https://esm.sh/nanostores';
</script>
```

## Next Steps

- [Quick Start Guide](quick-start.md)
- [Key Concepts](key-concept.md)
- [Configuration](configuration.md)