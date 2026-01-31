# Tree-Shaking in VSCode Extensions

Optimize bundle size by importing only what you need from reactive-vscode.

## Principle

reactive-vscode is fully tree-shakeable. Import only the functions and types you use.

## Good Practices

### Import Specific Functions

```typescript
// Good: Import only what you need
import { defineConfig, defineExtension, useActiveTextEditor } from 'reactive-vscode'

// Bad: Import everything
import * as vscode from 'reactive-vscode'
```

### Use Named Exports

```typescript
// Good
import { useActiveTextEditor, useEditorDecorations } from 'reactive-vscode'

// Avoid
import vscode from 'reactive-vscode'
vscode.useActiveTextEditor()
```

### Lazy Load Heavy Features

```typescript
// Load heavy features only when needed
const loadHeavyFeature = () => import('reactive-vscode/heavy')

export = defineExtension(() => {
  // Use loadHeavyFeature() when needed
})
```

## Bundle Size Impact

- **Full import**: ~200KB minified
- **Typical extension**: ~20-50KB minified
- **Minimal extension**: ~5-10KB minified

## Verification

Check bundle size with:

```bash
npm run build
# Check dist/extension.js size
```

## Best Practices

1. **Import specific functions** not entire modules
2. **Use named exports** for better tree-shaking
3. **Lazy load heavy features** when possible
4. **Monitor bundle size** during development
5. **Use bundle analyzer** to identify large imports
