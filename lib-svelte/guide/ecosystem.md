# Ecosystem

## ภาพรวม

Ecosystem และ tools ที่เกี่ยวข้องกับ Svelte

## Official Tools

### Svelte Compiler

Core compiler สำหรับ Svelte

```bash
bun add -D svelte
```

### SvelteKit

Official meta-framework สำหรับ Svelte

```bash
bun create svelte@latest my-app
```

### Svelte Compiler

```bash
bun add -D svelte
```

## Build Tools

### Vite

Recommended build tool

```bash
bun create vite my-app -- --template svelte
```

### Rollup

Default bundler

```bash
bun add -D rollup rollup-plugin-svelte
```

### Webpack

Alternative bundler

```bash
bun add -D webpack svelte-loader
```

## Testing

### Vitest

Unit testing framework

```bash
bun add -D vitest @testing-library/svelte
```

### Playwright

E2E testing

```bash
bun add -D @playwright/test
```

### Testing Library

Component testing

```bash
bun add -D @testing-library/svelte
```

## State Management

### Svelte Stores

Built-in state management

```javascript
import { writable, readable, derived } from 'svelte/store';
```

### External Libraries

- **svelte-writable-derived**: Enhanced stores
- **svelte-persisted-store**: LocalStorage persistence
- **svelte-subscribe**: Subscription management

## Routing

### svelte-routing

Client-side routing

```bash
bun add svelte-routing
```

### SvelteKit Routing

File-based routing ใน SvelteKit

## UI Libraries

### Skeleton UI

Component library

```bash
bun add @skeletonlabs/skeleton
```

### Skeleton UI

```bash
bun add @skeletonlabs/skeleton
```

### Carbon Components Svelte

IBM Carbon Design System

```bash
bun add carbon-components-svelte
```

### Smelte

Material Design components

```bash
bun add smelte
```

## Form Libraries

### Svelte Forms

Form validation

```bash
bun add svelte-forms-lib
```

### Felte

Form handling

```bash
bun add felte
```

## Animation

### Svelte Transitions

Built-in transitions

```svelte
<script>
  import { fade, fly } from 'svelte/transition';
</script>

<div transition:fade />
```

### Motion

Animation library

```bash
bun add svelte-motion
```

## Internationalization

### svelte-i18n

i18n library

```bash
bun add svelte-i18n
```

## Developer Tools

### Svelte DevTools

Browser extension

### Svelte VS Code

VS Code extension

## Summary

Ecosystem หลัก:
- **Build**: Vite, Rollup
- **Testing**: Vitest, Playwright
- **State**: Built-in stores
- **Routing**: svelte-routing, SvelteKit
- **UI**: Skeleton, Carbon, Smelte
- **Forms**: svelte-forms-lib, Felte
- **Animation**: Built-in, svelte-motion
- **i18n**: svelte-i18n
- **DevTools**: DevTools, VS Code extension
