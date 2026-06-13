---
description: สร้าง Svelte component ตาม best practices
---

## Goal

สร้าง Svelte component ที่มี structure ถูกต้องและ maintainable

## Steps

### 1. Create Component File

สร้างไฟล์ใหม่ใน `src/lib/components/`:

```bash
# src/lib/components/Button.svelte
```

### 2. Component Structure

```svelte
<script>
  // 1. Imports
  import { createEventDispatcher } from 'svelte';
  
  // 2. Props
  export let label = 'Click me';
  export let variant = 'primary';
  export let disabled = false;
  
  // 3. State
  let loading = false;
  
  // 4. Functions
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  function handleClick() {
    if (disabled || loading) return;
    dispatch('click');
  }
</script>

<button 
  class="button {variant}" 
  {disabled}
  on:click={handleClick}
>
  {#if loading}
    Loading...
  {:else}
    {label}
  {/if}
</button>

<style>
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .primary {
    background: blue;
    color: white;
  }
  
  .secondary {
    background: gray;
    color: white;
  }
</style>
```

### 3. Use Component

```svelte
<script>
  import Button from './lib/components/Button.svelte';
  
  function handleClick() {
    console.log('Clicked');
  }
</script>

<Button 
  label="Submit" 
  variant="primary" 
  on:click={handleClick} 
/>
```

## Best Practices

- **Naming**: PascalCase สำหรับ component names
- **Props**: ใช้ `export let` พร้อม default values
- **Events**: ใช้ `createEventDispatcher`
- **Styles**: Scoped styles ด้วย `<style>`
- **TypeScript**: เพิ่ม `lang="ts"` ถ้าใช้ TypeScript

## TypeScript Component

```svelte
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export interface Props {
    label?: string;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
  }
  
  export let label: Props['label'] = 'Click me';
  export let variant: Props['variant'] = 'primary';
  export let disabled: Props['disabled'] = false;
</script>
```

## Summary

สร้าง component:
1. สร้างไฟล์ `.svelte`
2. เขียน script, template, style
3. Define props ด้วย `export let`
4. Handle events ด้วย `createEventDispatcher`
5. Add scoped styles
6. ใช้ TypeScript ถ้าต้องการ
