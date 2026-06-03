# JSPM Key Concepts

## ES Modules (ESM)

ES Modules เป็นมาตรฐาน JavaScript สำหรับ import/export modules:

```javascript
// Named exports
export const foo = '"'"'bar'"'"';
export function hello() {}

// Default export
export default class App {}

// Import
import { foo, hello } from '"'"'./module.js'"'"';
import App from '"'"'./module.js'"'"';
```

## Import Maps

Import maps เป็น web standard ที่ช่วยให้ browser สามารถ resolve bare module specifiers:

```html
<script type="importmap">
{
  "imports": {
    "lit": "https://ga.jspm.io/npm:lit@3.3.0/index.js",
    "my-app": "./src/index.js"
  }
}
</script>
<script type="module">
  import "lit";  // Resolves to CDN URL
  import "my-app";  // Resolves to local file
</script>
```

## JSPM Injection Script

JSPM 4.0 ใช้ injection script แทน importmap.json โดยตรง (เนื่องจาก browser limitations):

```javascript
((map) => {
  const mapUrl = document.currentScript.src;
  const resolve = (imports) =>
    Object.fromEntries(
      Object.entries(imports).map(([k, v]) => 
        [k, new URL(v, mapUrl).href]
      )
    );
  document.head.appendChild(
    Object.assign(document.createElement("script"), {
      type: "importmap",
      innerHTML: JSON.stringify({
        imports: resolve(map.imports),
        scopes: Object.fromEntries(
          Object.entries(map.scopes).map(([k, v]) => [
            new URL(k, mapUrl).href,
            resolve(v),
          ])
        ),
      }),
    })
  );
})({
  imports: { /* ... */ },
  scopes: { /* ... */ },
});
```

## package.json as Manifest

JSPM ใช้ package.json เป็น manifest หลัก:

```json
{
  "name": "my-app",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./page2": "./src/page2.js"
  },
  "dependencies": {
    "lit": "^3.0.0"
  }
}
```

## Entry Points

Entry points ถูกกำหนดใน exports field และปรากฏใน top-level imports:

```javascript
// importmap.js
{
  "imports": {
    "my-app": "./src/index.ts",
    "my-app/page2": "./src/page2.js"
  }
}
```

## Scopes

Dependencies ที่ไม่ใช่ entry point จะอยู่ใน scopes:

```javascript
// importmap.js
{
  "scopes": {
    "./": {
      "lit": "https://ga.jspm.io/npm:lit@3.3.0/index.js"
    }
  }
}
```

## TypeScript Type Stripping

JSPM ทำ TypeScript type stripping โดยไม่ต้อง compile:

```typescript
// src/index.ts (with types)
import * as lit from "lit";

class MyElement extends lit.LitElement {
  static properties = {
    message: { type: String },
  };
  // ...
}

// ถูก strip เป็น JavaScript อัตโนมัติ
```

## Hot Module Replacement

JSPM serve มี built-in HMR ผ่าน Server-Side Events:

- ES Module Shims รับ events เมื่อไฟล์เปลี่ยน
- โหลด modules ที่ affected ใหม่
- รักษา application state ผ่าน import.meta.hot API

## CDN Providers

JSPM ใช้ jspm.io CDN เป็น default:

| Provider | URL |
|----------|-----|
| jspm.io | https://ga.jspm.io/ |
| esm.sh | https://esm.sh/ |
| unpkg | https://unpkg.com/ |

## Security

JSPM รองรับ import map integrity:

```html
<script 
  src="importmap.js" 
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```
