# useAnnouncer

## ภาพรวม

Composable สำหรับประกาศข้อความไปยัง screen readers สำหรับ accessibility และ dynamic content announcements (Nuxt 4.4+)

## การใช้งาน

### Basic Usage

```vue
<script setup lang="ts">
const { polite, assertive } = useAnnouncer()

const { data, status } = await useFetch('/api/data')

watch(status, (newStatus) => {
  if (newStatus === 'pending') {
    polite('Loading data...')
  } else if (newStatus === 'success') {
    polite('Data loaded successfully')
  }
})
</script>
```

### Setup

เพิ่ม `<NuxtAnnouncer>` component ใน `app.vue`:

```vue
<template>
  <NuxtAnnouncer />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

## Politeness Levels

| Level | Description |
|-------|-------------|
| `off` | ปิดการประกาศ |
| `polite` | รอจนกว่า screen reader หยุดพูด (default) |
| `assertive` | ขัดจังหวะทันที |

## Use Cases

- Form validation messages
- Loading states และ async operations
- Toast notifications
- Search results
- Dynamic content changes ที่ไม่มี navigation

## ความแตกต่างจาก useRouteAnnouncer

- `useRouteAnnouncer`: ประกาศ route/page changes อัตโนมัติ
- `useAnnouncer`: ควบคุมการประกาศ manual สำหรับ in-page changes

## Best Practices

- ใช้เมื่อ content เปลี่ยนแบบ dynamic โดยไม่มี focus change
- สำหรับ interactions ส่วนใหญ่ควรใช้ native focus management แทน
- ใช้ร่วมกับ `useRouteAnnouncer` สำหรับ page-level announcements

## ดูเพิ่มเติม

- [useAnnouncer API](https://nuxt.com/docs/4.x/api/composables/use-announcer)
