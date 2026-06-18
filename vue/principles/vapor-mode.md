# Vapor Mode Best Practices

## Overview

Vapor Mode เป็น optimization mode สำหรับ production ที่ลบ Virtual DOM ออกโดยสมบูรณ์ และ compile โดยตรงเป็น DOM operations ให้ performance ดีขึ้น 50-97% และลด bundle size 30-50% Vue 3.6 beta มี feature parity กับ Solid และ Svelte 5 ใน benchmarks

## When to Use Vapor Mode

### Recommended Use Cases

- Performance-critical components (dashboards, large lists, real-time data)
- Design system components ที่ render บ่อย
- Reducing bundle size สำหรับ production
- Small new apps (Vapor-only mode)
- Components ที่ไม่ต้องการ advanced features

### When NOT to Use

- Components ที่ใช้ Options API
- Components ที่ต้องการ render functions/JSX
- Components ที่ต้องการ `getCurrentInstance()`
- Components ที่ใช้ `app.config.globalProperties`
- Components ที่ต้องการ `@vue:xxx` lifecycle events
- Components ที่ต้องการ Suspense (ใน Vapor-only mode)
- Library components จนกว่า JSX stable

## Migration Strategy

### 1. Start Simple

เริ่มจาก components ที่ simple ก่อน:

```vue
<!-- Before -->
<script setup lang="ts">
const count = ref(0)
</script>

<!-- After -->
<script setup lang="ts" vapor>
const count = ref(0)
</script>
```

### 2. Update Compiler

Vue 3.6+ ต้องใช้ compiler ที่รองรับ Vapor Mode:

```json
{
  "dependencies": {
    "vue": "^3.6.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vue-tsc": "^2.0.0"
  }
}
```

### 3. Test Thoroughly

Test components อย่างละเอียดหลังเปลี่ยนเป็น Vapor Mode:

- Unit tests
- Integration tests
- E2E tests
- Performance benchmarks

### 4. Verify Features

ตรวจสอบว่า features ที่ใช้รองรับใน Vapor Mode:

- Composition API ✓
- Props/Emits ✓
- Slots ✓
- Directives ✓
- Pinia ✓
- Vue Router ✓
- Options API ✗
- getCurrentInstance() ✗
- Render functions/JSX ✗

## Best Practices

### Component Design

- ใช้ `<script setup>` เท่านั้น
- หลีกเลี่ยง Options API
- ใช้ Composition API อย่างเต็มที่
- ใช้ TypeScript สำหรับ type safety
- ใช้ compiler macros (defineModel, defineSlots, useTemplateRef)

### Performance Optimization

- ใช้ Vapor Mode สำหรับ components ที่ render บ่อย
- ใช้ร่วมกับ VDOM components ได้ (mixed mode)
- Benchmark performance ก่อนและหลังใช้ Vapor Mode
- Monitor bundle size reduction
- ใช้ `createVaporApp()` สำหรับ Vapor-only apps

### Testing

- Write tests สำหรับ Vapor Mode components
- Test behavior เหมือนกับ VDOM mode
- Test SSR compatibility
- Test hydration สำหรับ SSR applications
- Test mixed mode (Vapor + VDOM components)

### Code Organization

- Group Vapor Mode components แยกจาก VDOM components
- Document ว่า components ไหนใช้ Vapor Mode
- Use consistent naming conventions
- Maintain clear separation of concerns

## Common Pitfalls

### 1. Using Unsupported Features

```vue
<!-- Wrong -->
<script setup lang="ts" vapor>
const instance = getCurrentInstance() // Returns null
</script>

<!-- Right -->
<script setup lang="ts" vapor>
// Use composables instead
const { data } = useData()
</script>
```

### 2. Forgetting to Update Compiler

- Vue 3.6+ ต้องใช้ compiler ที่รองรับ
- อัปเดต `@vitejs/plugin-vue` และ `vue-tsc`
- Compiler เก่าจะไม่ recognize `vapor` keyword

### 3. Overusing Vapor Mode

- ไม่จำเป็นต้องใช้ทุก component
- ใช้เฉพาะที่ได้ประโยชน์จาก performance
- เริ่มจาก components ที่ critical
- Library authors ควร pin to classic mode จนกว่า JSX stable

## Monitoring

### Performance Metrics

- Bundle size reduction (30-50% for Vapor-only)
- Runtime performance improvement (50-97% faster updates)
- Memory usage (up to 10x less for static components)
- Render time (initial render 41% faster, re-renders 71% faster)

### Tools

- Chrome DevTools Performance
- Lighthouse
- Bundle analyzer
- Custom benchmarks
- Vue DevTools

## Checklist

- [ ] Component ใช้ Composition API เท่านั้น
- [ ] ไม่ใช้ Options API
- [ ] ไม่ใช้ getCurrentInstance()
- [ ] ไม่ใช้ render functions/JSX
- [ ] ไม่ใช้ app.config.globalProperties
- [ ] Compiler updated to 3.6+ compatible version
- [ ] Test ผ่านทุก test cases
- [ ] Performance improved (measure and verify)
- [ ] Bundle size reduced (measure and verify)
- [ ] Documentation updated
- [ ] Mixed mode tested (if applicable)
