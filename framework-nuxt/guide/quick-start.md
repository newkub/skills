# Quick Start

## Create New Project

```bash
npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
npm install
```

## Start Development Server

```bash
npm run dev
```

เปิด browser ไปที่ http://localhost:3000

## Create Your First Page

สร้างไฟล์ `pages/index.vue`:

```vue
<template>
  <div>
    <h1>Welcome to Nuxt!</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0)

function increment() {
  count.value++
}
</script>
```

## Create a Component

สร้างไฟล์ `components/MyButton.vue`:

```vue
<template>
  <button class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background: #42b883;
  color: white;
  border-radius: 4px;
}
</style>
```

ใช้ component ใน page:

```vue
<template>
  <MyButton @click="handleClick">Click Me</MyButton>
</template>
```

## Data Fetching

```vue
<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/users')

function handleClick() {
  console.log('Button clicked!')
}
</script>
```

## Create API Route

สร้างไฟล์ `server/api/users.get.ts`:

```typescript
export default defineEventHandler(() => {
  return [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]
})
```

## Layouts

สร้างไฟล์ `layouts/default.vue`:

```vue
<template>
  <div>
    <header>My App</header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>
```

ใช้ layout ใน page:

```vue
<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
```

## Build for Production

```bash
# Build
npm run build

# Preview production build
npm run preview
```

## Static Site Generation

```bash
npm run generate
```

## Next Steps

- [Key Concepts](key-concept.md)
- [How It Works](how-it-works.md)
- [Best Practices](best-practices.md)
- [References](../references/)