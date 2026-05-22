# JSPM Configuration

## package.json

package.json เป็น manifest หลักของ JSPM:

```json
{
  "name": "my-app",
  "version": "dev",
  "description": "My JSPM app",
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./page2": "./src/page2.js",
    "./utils/*": "./src/utils/*.js"
  },
  "dependencies": {
    "lit": "^3.0.0"
  }
}
```

### Exports Field

กำหนด entry points สำหรับ import map:

```json
{
  "exports": {
    ".": "./src/index.js",
    "./plugin": "./src/plugin.js",
    "./utils": "./src/utils/index.js",
    "./utils/*": "./src/utils/*.js"
  }
}
```

### Dependencies

```json
{
  "dependencies": {
    "lit": "^3.0.0",
    "react": "^18.0.0"
  }
}
```

## TypeScript Configuration

tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

## importmap.js

ไฟล์นี้ถูกสร้างโดย JSPM (เหมือน lockfile):

```javascript
((map) => {
  // ... injection code
})({
  imports: {
    "my-app": "./src/index.ts"
  },
  scopes: {
    "./": {
      "lit": "https://ga.jspm.io/npm:lit@3.3.0/index.js"
    },
    "https://ga.jspm.io/npm/lit@3.3.0/": {
      "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@2.1.0/"
    }
  }
});
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My App</title>
  <script src="importmap.js"></script>
  <script 
    async 
    crossorigin="anonymous"
    src="https://ga.jspm.io/npm:es-module-shims@2.5.1/dist/es-module-shims.js"
  ></script>
  <script type="module">
    import "my-app";
  </script>
</head>
<body></body>
</html>
```

## Custom Ports

```bash
jspm serve --port 8080
```

## Environment Variables

```bash
# Custom CDN provider
JSPM_PROVIDER=esm.sh jspm serve

# Custom output directory
JSPM_OUT=dist jspm build
```

## .gitignore

```
node_modules/
dist/
.env
*.local
```
