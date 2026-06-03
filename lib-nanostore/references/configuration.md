# configuration

## index.md

# Configuration Reference

## Store Config

```javascript
import { atom, map, computed } from 'nanostores';

// Atom - simple value
const count = atom(0);

// Map - object with keys
const user = map({ name: '', age: 0 });

// Computed - derived value
const doubled = computed([count], (c) => c * 2);
```

## Options

| Option | Type | Description |
|--------|------|-------------|
| initial | any | Initial value |
| keys | string[] | Map keys |
| deps | Store[] | Dependencies |

## Middleware

```javascript
import { onSet, onNotify } from 'nanostores';

onSet(store, ({ newValue, oldValue }) => {
  console.log(`Changed: ${oldValue} → ${newValue}`);
});
```

## DevTools Config

```javascript
import { attachLogger } from '@nanostores/logger';

attachLogger(store, {
  name: 'MyStore',
  enabled: true
});
```

---

