# Configuration

## Store Creation

```javascript
import { atom, map, computed } from 'nanostores';

// Atom with initial value
const count = atom(0);

// Map with initial object
const user = map({ name: 'John', age: 30 });

// Computed from dependencies
const total = computed([price, quantity], (p, q) => p * q);
```

## DevTools Setup

```javascript
import { atom } from 'nanostores';
import { attachLogger } from '@nanostores/logger';

attachLogger(atom);
```

## Middleware

```javascript
import { onSet } from 'nanostores';

const store = atom(0);

onSet(store, ({ newValue, oldValue }) => {
  console.log(`Changed from ${oldValue} to ${newValue}`);
});
```

## Context Setup

```javascript
import { createContext } from 'nanostores';

export const StoreContext = createContext();
```

## React Provider

```jsx
import { StoreContext } from './context';
import { countStore, userStore } from './stores';

function App() {
  return (
    <StoreContext.Provider value={{ countStore, userStore }}>
      <Main />
    </StoreContext.Provider>
  );
}
```