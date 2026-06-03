# create-page

## Create New Page

### 1. Create Page File

สร้างไฟล์ใน `pages/` directory:

```bash
# Create pages/about.vue
touch pages/about.vue
```

### 2. Add Page Content

```vue
<!-- pages/about.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <p>Page content here</p>
  </div>
</template>

<script setup lang="ts">
// Page logic here
</script>
```

### 3. Add Page Metadata

```vue
<script setup lang="ts">
definePageMeta({
  title: 'About Us',
  description: 'Learn more about us',
  layout: 'default'
})

useSeoMeta({
  title: 'About Us - My Site',
  ogTitle: 'About Us',
  description: 'Learn more about us'
})
</script>
```

## Dynamic Routes

### Create Dynamic Page

```bash
# pages/blog/[slug].vue
touch pages/blog/[slug].vue
```

```vue
<!-- pages/blog/[slug].vue -->
<template>
  <div>
    <h1>{{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug)
</script>
```

### Nested Dynamic Routes

```bash
# pages/blog/[year]/[month].vue
mkdir -p pages/blog/[year]
touch pages/blog/[year]/[month].vue
```

## Catch-all Routes

```bash
# pages/[...slug].vue
touch pages/[...slug].vue
```

```vue
<!-- pages/[...slug].vue -->
<script setup lang="ts">
const route = useRoute()
const segments = computed(() => route.params.slug)
</script>
```

## Page Transitions

```vue
<script setup lang="ts">
definePageMeta({
  pageTransition: { name: 'page', mode: 'out-in' }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
```

## Verify

- Route สร้างถูกต้องที่ `/about`
- เปิด http://localhost:3000/about