# TypeScript Integration Principles

## ภาพรวม

หลักการใช้ TypeScript กับ Svelte

## Enable TypeScript

### Setup

```bash
bun add -D typescript svelte-check
```

### Component with TypeScript

```svelte
<script lang="ts">
  let count: number = 0;
</script>
```

## Type Definitions

### Interface for Props

```svelte
<script lang="ts">
  export interface Props {
    user: User;
    onEdit?: (user: User) => void;
    variant?: 'card' | 'list';
  }
  
  export let user: Props['user'];
  export let onEdit: Props['onEdit'];
  export let variant: Props['variant'] = 'card';
</script>
```

## Type Safety in Stores

### Typed Stores

```typescript
// stores/user.ts
import { writable } from 'svelte/store';

interface User {
  id: string;
  name: string;
  email: string;
}

export const user = writable<User | null>(null);
```

### Using Typed Stores

```svelte
<script lang="ts">
  import { user } from '../stores/user';
  
  $: if ($user) {
    console.log($user.name); // Type-safe
  }
</script>
```

## Event Typing

### Typed Events

```svelte
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  interface Events {
    click: { data: string };
    change: { value: number };
  }
  
  const dispatch = createEventDispatcher<Events>();
  
  function handleClick() {
    dispatch('click', { data: 'value' }); // Type-safe
  }
</script>
```

## Generic Components

### Generic Props

```svelte
<script lang="ts" generics="T">
  export let items: T[];
  export let renderItem: (item: T) => string;
</script>

{#each items as item}
  {@html renderItem(item)}
{/each}
```

## Type Guards

### Runtime Type Checking

```typescript
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value
  );
}
```

## Strict Mode

### Enable Strict TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

## Type Checking

### Svelte Check

```bash
bun run check
```

### Watch Mode

```bash
bun run check:watch
```

## Best Practices

- **Always Type Props**: Define interfaces for props
- **Type Stores**: Use TypeScript for stores
- **Type Events**: Define event interfaces
- **Generic Components**: Use generics สำหรับ reusable components
- **Strict Mode**: Enable strict TypeScript
- **Type Guards**: Validate data at runtime
- **Regular Checks**: Run svelte-check regularly

## Summary

TypeScript principles:
- Enable TypeScript in components
- Define interfaces for props
- Type stores properly
- Type events
- Use generics for reusability
- Enable strict mode
- Run type checks regularly
