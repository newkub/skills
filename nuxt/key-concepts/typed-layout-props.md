# Typed Layout Props

## ภาพรวม

Pass props ไปยัง layouts โดยตรงจาก `definePageMeta` ด้วย full type safety (Nuxt 4.4+)

## การใช้งาน

### Define Layout Props

```vue
<!-- layouts/panel.vue -->
<script setup lang="ts">
defineProps<{
  sidebar?: boolean
  title?: string
}>()
</script>

<template>
  <div class="panel">
    <aside v-if="sidebar">Sidebar</aside>
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>
```

### Pass Props from Page

```vue
<!-- pages/dashboard.vue -->
<script setup lang="ts">
definePageMeta({
  layout: {
    name: 'panel',
    props: {
      sidebar: true,
      title: 'Dashboard',
    },
  },
})
</script>
```

## คุณสมบัติ

- **Full Type Safety**: Autocomplete และ type-checking ใน `definePageMeta`
- **No Workarounds**: ไม่ต้องใช้ `provide`/`inject`
- **Parameterized Layouts**: Layouts สามารถรับ props ต่างกันตาม page

## Benefits

- Layouts สามารถ parameterized ต่อ page
- Type safety เต็มรูปแบบ
- Cleaner code โดยไม่ต้องใช้ workarounds

## ดูเพิ่มเติม

- [Layout Props Documentation](https://nuxt.com/docs/4.x/api/components/nuxt-layout)
