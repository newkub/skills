# Quick Start

## Basic Atom

```javascript
import { atom } from 'nanostores';

const count = atom(0);
count.set(1);
console.log(count.get());
```

## Using in React

```jsx
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';

const count = atom(0);

function Counter() {
  const value = useStore(count);
  return <button onClick={() => count.set(value + 1)}>{value}</button>;
}
```

## Map Store

```javascript
import { map } from 'nanostores';

const user = map({ name: 'John', age: 30 });

user.setKey('name', 'Jane');
console.log(user.get());
```

## Computed Values

```javascript
import { computed } from 'nanostores';

const firstName = atom('John');
const lastName = atom('Doe');

const fullName = computed([firstName, lastName], (first, last) => {
  return `${first} ${last}`;
});
```

## Next Steps

- [Key Concepts](key-concept.md)
- [Best Practices](best-practices.md)
- [Configuration](configuration.md)