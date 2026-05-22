# JSPM Troubleshooting

## Common Issues

### Import Map Not Working

**Problem:** Modules not loading

**Solutions:**

1. Check importmap.js exists:

```bash
ls importmap.js
```

2. Verify script loading order:

```html
<script src="importmap.js"></script>
<script src="https://ga.jspm.io/npm:es-module-shims@2.5.1/dist/es-module-shims.js"></script>
<script type="module">
  import "my-app";
</script>
```

3. Check browser supports import maps (Chrome 89+, Firefox 108+, Safari 15.4+)

### CORS Errors

**Problem:** CORS policy blocking requests

**Solutions:**

1. Use localhost, not file:// protocol
2. Ensure CDN supports CORS
3. Check ES Module Shims loaded correctly

### TypeScript Not Working

**Problem:** TypeScript types not stripped

**Solutions:**

1. Verify tsconfig.json exists:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext"
  }
}
```

2. Ensure source files have .ts extension
3. Restart jspm serve after changes

### Hot Reload Not Working

**Problem:** Changes not reflected

**Solutions:**

1. Check file is being saved
2. Use jspm serve (not jspm serve --static)
3. Check browser console for errors
4. Try hard refresh (Ctrl+Shift+R)

### Module Not Found

**Problem:** Cannot find module

**Solutions:**

1. Run jspm install to update importmap.js:

```bash
jspm install
```

2. Check package.json dependencies:

```json
{
  "dependencies": {
    "package-name": "^1.0.0"
  }
}
```

3. Verify exports field is correct:

```json
{
  "exports": {
    ".": "./src/index.js"
  }
}
```

### Port Already in Use

**Problem:** Cannot start server

```bash
Error: listen EADDRINUSE :::5776
```

**Solutions:**

1. Use different port:

```bash
jspm serve --port 3000
```

2. Kill existing process:

```bash
# Windows
netstat -ano | findstr :5776
taskkill /PID <pid> /F
```

### Import Map Scope Issues

**Problem:** Wrong module version loaded

**Solution:**

Check importmap.js scopes section - dependencies may be mapped differently in nested scopes.

### ES Module Shims Issues

**Problem:** Polyfill not working

**Solutions:**

1. Ensure loading before modules:

```html
<script async src="https://ga.jspm.io/npm:es-module-shims@2.5.1/dist/es-module-shims.js"></script>
```

2. Check browser version supports ESM basics
3. Try without shims if using Chrome 89+

## Debugging

### Check importmap.js Content

```javascript
((map) => {
  console.log("Import Map:", map);
})({
  imports: {},
  scopes: {}
});
```

### Browser DevTools

1. Open Network tab
2. Filter by "Import Map" or JS files
3. Check for 404 or CORS errors

### Verbose Mode

```bash
DEBUG=jspm:* jspm serve
```

## Getting Help

- Official Docs: https://jspm.org
- GitHub Issues: https://github.com/jspm/jspm.org
- Online Generator: https://generator.jspm.io
