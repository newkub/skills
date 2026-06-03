# JSPM All Features

## CLI Commands

### jspm init

สร้าง project ใหม่:

```bash
jspm init my-project
```

### jspm serve

Development server:

```bash
jspm serve
jspm serve --port 3000
jspm serve --static
jspm serve --open
```

### jspm install

ติดตั้ง dependencies:

```bash
jspm install
jspm install lit react vue
```

### jspm build

Build production:

```bash
jspm build
```

## Import Map Features

### Bare Module Specifiers

```javascript
import "lit";
import "react";
import "@tanstack/react-query";
```

### Subpath Imports

```javascript
import { html } from "lit";
import { createStore } from "zustand";
```

### Conditional Exports

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "default": "./dist/index.cjs"
    }
  }
}
```

### Scopes

```javascript
{
  "scopes": {
    "./": {
      "lit": "https://ga.jspm.io/npm:lit@3.3.0/"
    },
    "https://other-cdn.com/": {
      "react": "https://other-cdn.com/react.js"
    }
  }
}
```

## TypeScript Support

### Type Stripping

JSPM strips TypeScript types at runtime:

```typescript
// Working TypeScript
const greeting: string = "Hello";
const numbers: number[] = [1, 2, 3];

// Types are automatically removed
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

## CSS Modules

### Import CSS as Module

```typescript
import styles from "./button.css" with { type: "css" };

element.className = styles.primary;
document.adoptedStyleSheets.push(styles);
```

## Hot Module Replacement

### Built-in HMR

JSPM serve มี HMR ในตัว:

```javascript
// File changes trigger reload
if (import.meta.hot) {
  import.meta.hot.accept();
}
```

## CDN Providers

### Default: jspm.io

```javascript
"lit": "https://ga.jspm.io/npm:lit@3.3.0/index.js"
```

### esm.sh

```bash
JSPM_PROVIDER=esm.sh jspm serve
```

### Custom Provider

```bash
JSPM_PROVIDER=https://custom-cdn.com jspm serve
```

## Production Build

### jspm build

```bash
jspm build
# Output to dist/
```

### Production Output

- Optimized bundles
- Minified code
- Source maps (optional)
- CDN URLs preserved
