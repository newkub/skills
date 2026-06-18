---
title: Renderer
description: Renderer สำหรับ handle routes ที่ไม่ match กับ API handlers
---

## What is Renderer?

Renderer เป็น special handler ที่ catch ทุก routes ที่ไม่ match กับ API หรือ route handlers ใดๆ ใช้สำหรับ:
- Server-Side Rendering (SSR)
- Serving Single-Page Applications (SPAs)
- Custom HTML responses

## Auto-detected Renderer

Nitro auto-detect `renderer.ts` ใน project root:

```typescript
// renderer.ts
export default defineRenderer((url) => {
  return new Response("Custom HTML");
});
```

## HTML Template

### Auto-detected index.html

ใช้ `index.html` ใน project root:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

### Custom HTML File

```typescript
export default defineConfig({
  renderer: "./custom.html"
});
```

### Static Templates

ใช้ Hypertext Preprocessor (experimental):

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  {{ content }}
</body>
</html>
```

## Custom Renderer Handler

```typescript
import { defineRenderer } from "nitro/renderer";

export default defineRenderer(async (url) => {
  const data = await $fetch(`/api/data${url.pathname}`);
  
  return new Response(`
    <html>
      <body>
        <h1>${data.title}</h1>
      </body>
    </html>
  `, {
    headers: { "Content-Type": "text/html" }
  });
});
```

## Renderer Priority

1. API routes (`api/`)
2. Route handlers (`routes/`)
3. Server entry (`server.ts`)
4. Renderer (`renderer.ts`)

## Vite Integration

### Development Mode

ใช้ Vite dev server สำหรับ HMR:

```typescript
export default defineConfig({
  renderer: "./renderer.ts"
});
```

### SSR with <!--ssr-outlet-->

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <div id="app"><!--ssr-outlet--></div>
  <script type="module" src="/client.ts"></script>
</body>
</html>
```

### Production Build

Renderer จะถูก build และ optimize สำหรับ production

## Use Cases

### Single-Page Application (SPA)

Serve SPA ที่ client-side routing:

```typescript
export default defineRenderer(() => {
  return new Response(
    readFileSync("./public/index.html", "utf-8"),
    { headers: { "Content-Type": "text/html" } }
  );
});
```

### Server-Side Rendering

Render components บน server:

```typescript
export default defineRenderer(async (url) => {
  const component = await renderComponent(url.pathname);
  return new Response(component, {
    headers: { "Content-Type": "text/html" }
  });
});
```

## Best Practices

- ใช้ renderer สำหรับ HTML responses เท่านั้น
- API routes ควรอยู่ใน `api/` หรือ `routes/`
- ใช้ caching สำหรับ rendered content ที่ static
- Handle errors gracefully ใน renderer
- ใช้ proper Content-Type headers
