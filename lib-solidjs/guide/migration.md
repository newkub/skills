# Migration

## Migrating from React

### Key Differences

- **Signals vs State** - Signals แทน useState
- **No Virtual DOM** - direct DOM manipulation
- **Reactivity** - fine-grained reactivity

### Migration Steps

1. Convert useState ไปเป็น createSignal
2. Convert useEffect ไปเป็น createEffect
3. Update JSX syntax
4. Test migration

## Migrating from Vue

- **Signals vs Refs** - Signals คล้าย Vue refs
- **Reactivity** - similar reactivity model
- **Component Lifecycle** - different lifecycle
