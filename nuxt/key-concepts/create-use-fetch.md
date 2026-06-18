# createUseFetch และ createUseAsyncData

## ภาพรวม

Factory functions สำหรับสร้าง custom instances ของ `useFetch` และ `useAsyncData` ด้วย default options ของตัวเอง (Nuxt 4.4+)

## การใช้งาน

### Simple Defaults

```ts
// composables/api.ts
export const useClientFetch = createUseFetch({
  server: false,
})
```

### Dynamic Defaults ด้วย Full Control

```ts
// composables/api.ts
export const useApiFetch = createUseFetch((currentOptions) => {
  const runtimeConfig = useRuntimeConfig()

  return {
    ...currentOptions,
    baseURL: currentOptions.baseURL ?? runtimeConfig.public.baseApiUrl,
  }
})
```

### การใช้งาน

```vue
<script setup lang="ts">
// ใช้เหมือน useFetch ปกติ - fully typed และ support ทุก options
const { data } = await useApiFetch('/users')
</script>
```

## คุณสมบัติ

- **Full Type Safety**: Custom instances มี type safety เต็มรูปแบบ
- **SSR Compatible**: ทำงานร่วมกับ SSR เหมือน `useFetch` และ `useAsyncData` ปกติ
- **Auto Registration**: Scan `composables/` directory และ register อัตโนมัติ
- **Option Merging**: Control วิธี merge options ระหว่าง defaults และ usage

## Use Cases

- API clients ด้วย baseURL และ headers ที่กำหนดเอง
- Client-only fetch instances
- Custom timeout และ retry logic
- Module authors ที่ต้องการ custom data fetching

## ดูเพิ่มเติม

- [createUseFetch API](https://nuxt.com/docs/4.x/api/composables/create-use-fetch)
- [createUseAsyncData API](https://nuxt.com/docs/4.x/api/composables/create-use-async-data)
