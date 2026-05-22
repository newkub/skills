# JSPM Best Practices

## Project Setup

### Use package.json as Source of Truth

กำหนด dependencies และ entry points ใน package.json:

```json
{
  "name": "my-app",
  "type": "module",
  "exports": {
    ".": "./src/index.ts"
  },
  "dependencies": {
    "lit": "^3.0.0"
  }
}
```

### Define Entry Points Explicitly

```json
{
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*.ts"
  }
}
```

## Development

### Use jspm serve for Development

```bash
jspm serve
# ไม่ต้องรัน jspm install ก่อน - serve จะจัดการให้
```

### Hot Reloading

เขียน code ที่รองรับ HMR:

```typescript
if (import.meta.hot) {
  import.meta.hot.accept();
  
  // Or dispose old state
  import.meta.hot.dispose(() => {
    cleanup();
  });
}
```

## Production

### Build Before Deploy

```bash
jspm build
```

### Use Integrity Hashes

```html
<script 
  src="importmap.js" 
  integrity="sha384-abc123..."
  crossorigin="anonymous"
></script>
```

## Dependencies

### Pin Versions

```json
{
  "dependencies": {
    "lit": "^3.0.0"    // Allow minor updates
  }
}
```

### Update Dependencies

```bash
jspm install  # Updates importmap.js
```

## TypeScript

### Use Type Stripping

เขียน TypeScript ได้เลยโดยไม่ต้อง compile:

```typescript
// Write TypeScript
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

// ถูก strip เป็น JavaScript อัตโนมัติ
```

## Browser Compatibility

### Include ES Module Shims

แม้ว่าจะไม่จำเป็นสำหรับ Chrome แต่แนะนำให้ include:

```html
<script 
  async 
  crossorigin="anonymous" 
  src="https://ga.jspm.io/npm:es-module-shims@2.5.1/dist/es-module-shims.js"
></script>
```

## Security

### Verify CDN URLs

ใช้ SRI (Subresource Integrity):

```html
<script 
  src="importmap.js" 
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```

### Prefer Trusted CDNs

ใช้ jspm.io หรือ esm.sh ที่มี integrity hashes:

```javascript
// Good
"lit": "https://ga.jspm.io/npm:lit@3.3.0/index.js"

// Verify the CDN is trusted
```

## Performance

### Lazy Loading

```typescript
// Lazy load heavy components
const HeavyComponent = await import("./heavy.ts");
```

### Code Splitting

```json
{
  "exports": {
    ".": "./src/index.ts",
    "./lazy": "./src/lazy.ts"
  }
}
```

## File Structure

### Recommended Structure

```
my-app/
├── index.html
├── package.json
├── tsconfig.json
├── importmap.js (generated)
└── src/
    ├── index.ts
    ├── components/
    ├── utils/
    └── styles/
```

## Testing

### Simple Testing Setup

```typescript
// test/setup.ts
export async function render(html: string) {
  document.body.innerHTML = html;
  await Promise.resolve();
}

export function cleanup() {
  document.body.innerHTML = "";
}
```
