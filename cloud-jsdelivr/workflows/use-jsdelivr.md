# Use jsDelivr

Workflow for using jsDelivr CDN in projects.

## Steps

1. **Determine the source** (npm, GitHub, or WordPress)
2. **Choose the appropriate URL format**
3. **Select the version** (exact, latest, or range)
4. **Configure the file path**
5. **Test the URL in browser**
6. **Implement in project**

## Example: Load npm package

```html
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

## Example: Use ES Modules

```javascript
import { createApp } from 'https://esm.run/vue@3';
```

## Example: Load from GitHub

```html
<script src="https://cdn.jsdelivr.net/gh/user/repo@version/file.js"></script>
```

## Best Practices

- Use exact versions for production
- Use source maps for debugging
- Combine files when possible
- Purge cache after updates
