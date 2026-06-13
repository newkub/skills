# Structure

## ภาพรวม

โครงสร้างโปรเจกต์ Svelte ที่แนะนำ

## Basic Structure

```
my-svelte-app/
├── src/
│   ├── lib/
│   │   └── components/
│   ├── routes/
│   ├── App.svelte
│   └── main.js
├── public/
│   └── favicon.png
├── package.json
├── vite.config.js
└── svelte.config.js
```

## Folder Organization

### src/lib/

สำหรับ reusable components และ utilities

```
src/lib/
├── components/
│   ├── Button.svelte
│   ├── Card.svelte
│   └── Modal.svelte
├── stores/
│   ├── user.js
│   └── theme.js
├── utils/
│   ├── format.js
│   └── validation.js
└── types/
    └── index.d.ts
```

### src/routes/

สำหรับ page components (ถ้าใช้ routing)

```
src/routes/
├── index.svelte
├── about.svelte
└── contact.svelte
```

## File Naming Conventions

### Components

- **PascalCase**: `Button.svelte`, `UserProfile.svelte`
- **Descriptive**: `UserProfileCard.svelte` ไม่ใช่ `Card.svelte`

### Utilities

- **camelCase**: `formatDate.js`, `validateEmail.js`
- **Prefix with action**: `getUsers.js`, `createUser.js`

### Stores

- **camelCase**: `userStore.js`, `themeStore.js`
- **Descriptive**: `currentUserStore.js`

## Component Structure

### Single File Component

```svelte
<script>
  // 1. Imports
  import { onMount } from 'svelte';
  
  // 2. Props
  export let title;
  
  // 3. State
  let count = 0;
  
  // 4. Derived values
  $: doubled = count * 2;
  
  // 5. Functions
  function increment() {
    count += 1;
  }
  
  // 6. Lifecycle
  onMount(() => {
    console.log('Mounted');
  });
</script>

<div>
  <h1>{title}</h1>
  <p>Count: {count}</p>
  <button on:click={increment}>Increment</button>
</div>

<style>
  /* Scoped styles */
  div {
    padding: 1rem;
  }
</style>
```

## Best Practices

### Separation of Concerns

- **Components**: UI และ user interactions
- **Stores**: Global state
- **Utils**: Pure functions
- **Types**: TypeScript definitions

### File Size

- **Small components**: < 100 lines
- **Medium components**: 100-300 lines
- **Large components**: > 300 lines (consider splitting)

### Folder Depth

- **Max depth**: 3-4 levels
- **Avoid**: Deep nesting like `src/lib/components/ui/buttons/primary`

## Summary

โครงสร้างที่แนะนำ:
- `src/lib/` สำหรับ reusable code
- `src/routes/` สำหรับ pages
- PascalCase สำหรับ components
- camelCase สำหรับ utilities/stores
- จำกัด file size และ folder depth
