# Best Practices

## Performance

| Practice | Description |
|----------|-------------|
| Use atoms | Prefer simple over complex |
| Lazy computation | Use computed only when needed |
| Unsubscribe | Always unsubscribe in cleanup |
| Batch updates | Group related changes |

## Code Organization

```
src/
├── stores/
│   ├── atoms.js
│   ├── maps.js
│   └── computed.js
├── components/
└── main.js
```

## Store Design

```javascript
// Good: Simple atom for single value
const theme = atom('dark');

// Good: Map for related values
const userStore = map({ name: '', email: '' });

// Good: Computed for derived values
const fullName = computed([firstName, lastName], (f, l) => `${f} ${l}`);
```

## React Integration

```jsx
function App() {
  const count = useStore(counterAtom);
  const doubled = useStore(computedAtom);

  return (
    <div>
      <span>{count}</span>
      <span>{doubled}</span>
    </div>
  );
}
```

## Cleanup

```javascript
const unsubscribe = store.subscribe(value => {
  console.log(value);
});

// Clean up when done
unsubscribe();
```