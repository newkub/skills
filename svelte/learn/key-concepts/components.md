# Components

## ภาพรวม

Svelte components เป็น single-file components ที่รวม logic, template, และ styles ไว้ด้วยกัน

## Component Structure

```svelte
<script>
  // Logic layer
</script>

<!-- Template layer -->
<div>
  <!-- UI -->
</div>

<style>
  /* Style layer */
</style>
```

## Props

### Declaring Props

```svelte
<script>
  export let name; // Required prop
  export let age = 18; // Optional with default
</script>
```

### Using Props

```svelte
<script>
  export let user;
</script>

<p>Hello, {user.name}</p>
```

## Events

### Dispatching Events

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  function handleClick() {
    dispatch('click', { data: 'value' });
  }
</script>

<button on:click={handleClick}>Click me</button>
```

### Listening to Events

```svelte
<script>
  import Child from './Child.svelte';
  
  function handleChildClick(event) {
    console.log(event.detail);
  }
</script>

<Child on:click={handleChildClick} />
```

## Slots

### Default Slot

```svelte
<!-- Parent.svelte -->
<Child>
  <p>This is slot content</p>
</Child>

<!-- Child.svelte -->
<slot />
```

### Named Slots

```svelte
<!-- Parent.svelte -->
<Child>
  <p slot="header">Header</p>
  <p slot="footer">Footer</p>
</Child>

<!-- Child.svelte -->
<slot name="header" />
<slot />
<slot name="footer" />
```

## Lifecycle

### onMount

```javascript
import { onMount } from 'svelte';

onMount(() => {
  console.log('Component mounted');
});
```

### onDestroy

```javascript
import { onDestroy } from 'svelte';

onDestroy(() => {
  console.log('Component destroyed');
});
```

## Component Composition

### Nested Components

```svelte
<script>
  import Header from './Header.svelte';
  import Content from './Content.svelte';
  import Footer from './Footer.svelte';
</script>

<Header />
<Content />
<Footer />
```

## Best Practices

- **Single Responsibility**: แต่ละ component ทำหน้าที่เดียว
- **Props Interface**: ใช้ TypeScript สำหรับ props
- **Event Naming**: ใช้ descriptive event names
- **Slot Usage**: ใช้ slots สำหรับ flexible composition
- **Cleanup**: ใช้ onDestroy สำหรับ cleanup

## Summary

Component concepts:
- Single-file structure
- Props ด้วย `export let`
- Events ด้วย `createEventDispatcher`
- Slots สำหรับ composition
- Lifecycle hooks
- Component composition
