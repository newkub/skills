# How Svelte Works

## ภาพรวม

Svelte เป็น compiler-based framework ที่ทำงานแตกต่างจาก frameworks อื่นๆ เช่น React หรือ Vue ที่ใช้ virtual DOM

## Compilation Process

### 1. Component Compilation

Svelte components ถูก compile จาก `.svelte` files เป็น JavaScript ที่มีประสิทธิภาพสูง

```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>
  Clicks: {count}
</button>
```

Compile เป็น:

```javascript
// ถูก compile ไปเป็น imperative JavaScript
// ไม่มี virtual DOM diffing
// มี direct DOM manipulation
```

### 2. Reactivity System

Svelte ใช้ compile-time reactivity แทน runtime reactivity

- **Reactive Declarations**: `$:` syntax
- **Reactive Statements**: อัตโนมัติติดตาม dependencies
- **No Virtual DOM**: Direct DOM updates

## Key Differences

### vs React

| Feature | React | Svelte |
|---------|-------|--------|
| Runtime | Virtual DOM | No Virtual DOM |
| Bundle Size | Larger | Smaller |
| Performance | Good | Excellent |
| Learning Curve | Steep | Gentle |

### vs Vue

| Feature | Vue | Svelte |
|---------|-----|--------|
| Reactivity | Runtime | Compile-time |
| Template | HTML-based | Svelte syntax |
| Bundle Size | Medium | Small |

## Performance Benefits

1. **No Virtual DOM** - Direct DOM manipulation
2. **Smaller Bundle** - Less JavaScript to download
3. **Faster Runtime** - No diffing algorithm
4. **Better Memory** - Less overhead

## Build Process

```
.svelte files → Svelte Compiler → JavaScript/CSS → Browser
```

## Summary

Svelte ทำงานโดยการ compile components ณ build time แทน runtime ทำให้:
- Bundle size เล็กลง
- Performance ดีขึ้น
- Code ที่อ่านง่ายขึ้น
- ไม่มี virtual DOM overhead
