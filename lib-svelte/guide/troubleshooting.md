# Troubleshooting

## ภาพรวม

ปัญหาที่พบบ่อยและวิธีแก้ไข

## Common Issues

### Reactivity Not Working

**Problem:**
```javascript
let count = 0;
count = 1; // UI ไม่ update
```

**Solution:**
```javascript
let count = 0;
$: count = 1; // ใช้ reactive statement
```

### Store Not Updating

**Problem:**
```javascript
const store = writable(0);
store.value = 1; // ไม่ work
```

**Solution:**
```javascript
const store = writable(0);
store.set(1); // ใช้ set method
// หรือ
store.update(n => n + 1); // ใช้ update
```

### Props Not Passing

**Problem:**
```svelte
<Child name="John" /> // name ไม่ถูกส่ง
```

**Solution:**
```svelte
<script>
  export let name; // ต้อง declare props
</script>
```

## Build Issues

### Compilation Errors

**Problem:**
```
Error: Unexpected token
```

**Solution:**
- Check syntax ใน `.svelte` files
- ตรวจสอบ closing tags
- Validate JavaScript syntax

### Import Errors

**Problem:**
```
Error: Module not found
```

**Solution:**
- Check import paths
- ตรวจสอบ file extensions
- Restart dev server

## Runtime Issues

### Undefined Variables

**Problem:**
```javascript
console.log(undefinedVar); // Error
```

**Solution:**
```javascript
// Check before use
if (typeof undefinedVar !== 'undefined') {
  console.log(undefinedVar);
}
```

### Async Issues

**Problem:**
```javascript
const data = await fetchData(); // Error ใน non-async context
```

**Solution:**
```javascript
async function loadData() {
  const data = await fetchData();
}
```

## Performance Issues

### Slow Rendering

**Problem:**
Components render ช้า

**Solution:**
- Split large components
- Use keyed each loops
- Avoid unnecessary reactivity
- Use lazy loading

### Memory Leaks

**Problem:**
Memory usage เพิ่มขึ้นเรื่อยๆ

**Solution:**
```javascript
import { onDestroy } from 'svelte';

let interval;

onMount(() => {
  interval = setInterval(() => {}, 1000);
});

onDestroy(() => {
  clearInterval(interval); // Cleanup
});
```

## Styling Issues

### Styles Not Applying

**Problem:**
Styles ไม่แสดงผล

**Solution:**
```svelte
<style>
  /* Scoped styles */
  div {
    color: red;
  }
</style>
```

### Global Styles

**Problem:**
ต้องการ global styles

**Solution:**
```svelte
<style global>
  body {
    margin: 0;
  }
</style>
```

## TypeScript Issues

### Type Errors

**Problem:**
TypeScript errors ใน Svelte components

**Solution:**
```svelte
<script lang="ts">
  let count: number = 0;
</script>
```

### Missing Types

**Problem:**
Missing type definitions

**Solution:**
```bash
bun add -D @types/node
```

## Debugging Tips

### Console Logging

```javascript
console.log('Debug:', value);
```

### DevTools

- ใช้ Svelte DevTools extension
- Inspect component state
- Track reactivity

### Source Maps

Enable source maps ใน build config:

```javascript
// vite.config.js
export default {
  build: {
    sourcemap: true
  }
};
```

## Getting Help

### Resources

- **Svelte Docs**: https://svelte.dev/docs
- **Svelte Discord**: https://discord.gg/svelte
- **Stack Overflow**: Tag with `svelte`

### Checklist

- [ ] Check console for errors
- [ ] Verify syntax
- [ ] Check imports
- [ ] Test in isolation
- [ ] Review recent changes
- [ ] Search existing issues

## Summary

Common fixes:
- ใช้ `$:` สำหรับ reactivity
- ใช้ `set/update` สำหรับ stores
- Declare props ด้วย `export let`
- Cleanup ใน `onDestroy`
- Use DevTools สำหรับ debugging
- Check official docs ก่อนถาม
