# All Features

## Store Types

| Type | Description |
|------|-------------|
| atom() | Simple value store |
| map() | Object store with keys |
| computed() | Derived store |

## Atom

```javascript
import { atom } from 'nanostores';

const count = atom(0);
count.set(5);
count.subscribe(value => console.log(value));
```

## Map

```javascript
import { map } from 'nanostores';

const user = map({ name: 'John', active: true });
user.setKey('name', 'Jane');
user.setKey({ email: 'jane@example.com' });
```

## Computed

```javascript
import { computed } from 'nanostores';

const a = atom(1);
const b = atom(2);
const sum = computed([a, b], (a, b) => a + b);
```

## Mapping

```javascript
import { mapTemplate } from 'nanostores';

const store = mapTemplate((listen, emit) => {
  let value = 0;
  return {
    get: () => value,
    set: (v) => emit({ type: 'set', value: v }),
    increment: () => emit({ type: 'inc' }),
    [listen]: (action) => {
      if (action.type === 'set') value = action.value;
      if (action.type === 'inc') value++;
    }
  };
});
```

## Keys

| Method | Description |
|--------|-------------|
| store.get() | Get all values |
| store.setKey() | Set single key |
| store.set() | Set all values |
| store.subscribe() | Subscribe to changes |