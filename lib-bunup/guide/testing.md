# Testing

## Testing Bundles

### Test ESM Output

```typescript
import { library } from 'my-library';
```

### Test CJS Output

```javascript
const { library } = require('my-library');
```

### Test TypeScript Declarations

```typescript
import type { LibraryType } from 'my-library';
```

## CI Testing

```yaml
- name: Build
  run: bun run build

- name: Test
  run: bun test
```

## Type Checking

```bash
bun run build
bunx tsc --noEmit
```
