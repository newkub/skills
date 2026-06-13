# Reactive Programming Principles

## ภาพรวม

หลักการ reactive programming ใน Svelte

## Declarative vs Imperative

### Declarative (Svelte Way)

```javascript
// ✅ Good - Declarative
$: doubled = count * 2;
```

### Imperative (Traditional Way)

```javascript
// ❌ Bad - Imperative
let doubled;
function updateDoubled() {
  doubled = count * 2;
}
count = 1;
updateDoubled();
```

## Single Source of Truth

### Centralized State

```javascript
// ✅ Good - Single source
import { user } from '../stores/user.js';

// ❌ Bad - Multiple sources
let user1 = getUserFromAPI();
let user2 = getUserFromLocalStorage();
```

## Data Flow

### Unidirectional Flow

```
State → View → User Action → State
```

### Avoid Two-way Binding Abuse

```javascript
// ✅ Good - Props down, events up
<Parent>
  <Child {value} on:change={handleChange} />
</Parent>

// ❌ Bad - Excessive two-way binding
<Parent>
  <Child bind:value={value} />
</Parent>
```

## Immutability

### Prefer Immutability

```javascript
// ✅ Good - Immutable
$: newItems = [...items, newItem];

// ❌ Bad - Mutable
items.push(newItem);
```

## Pure Functions

### Pure Reactive Statements

```javascript
// ✅ Good - Pure
$: total = price * quantity;

// ❌ Bad - Side effects
$: {
  total = price * quantity;
  saveToDatabase(total); // Side effect
}
```

## Separation of Concerns

### Separate State from UI

```javascript
// ✅ Good - State in store
import { count } from '../stores/count.js';

// ❌ Bad - State mixed with UI
let count = 0;
// ... UI logic
```

## Performance

### Avoid Unnecessary Reactivity

```javascript
// ✅ Good - Static
const PI = 3.14159;

// ❌ Bad - Unnecessary reactive
$: PI = 3.14159;
```

### Memoize Expensive Computations

```javascript
// ✅ Good - Derived store
const expensive = derived(source, $source => {
  return heavyCalculation($source);
});
```

## Summary

Reactive programming principles:
- ใช้ declarative แทน imperative
- Single source of truth
- Unidirectional data flow
- Prefer immutability
- Pure reactive statements
- Separate state from UI
- Avoid unnecessary reactivity
- Memoize expensive computations
