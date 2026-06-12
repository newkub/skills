# Reactivity

## ภาพรวม

Reactivity system ของ Svelte ทำงานด้วย compile-time analysis แทน runtime reactivity

## Reactive Declarations

ใช้ `$:` syntax สำหรับ reactive statements

```javascript
let count = 0;

$: doubled = count * 2; // อัตโนมัติอัปเดตเมื่อ count เปลี่ยน
```

## Reactive Statements

### Simple Reactive

```javascript
$: console.log(count); // Log เมื่อ count เปลี่ยน
```

### Complex Reactive

```javascript
$: if (count > 10) {
  console.log('Count is high');
}
```

### Multiple Dependencies

```javascript
$: total = price * quantity; // Track price และ quantity
```

## Stores

### Writable Store

```javascript
import { writable } from 'svelte/store';

const count = writable(0);

// ใช้ใน component
$: console.log($count); // $ prefix สำหรับ store values
```

### Readable Store

```javascript
import { readable } from 'svelte/store';

const time = readable(new Date(), set => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});
```

### Derived Store

```javascript
import { derived } from 'svelte/store';

const doubled = derived(count, $count => $count * 2);
```

## Reactivity Rules

### What Triggers Reactivity

- **Assignment**: `count = 1`
- **Array methods**: `array.push()`, `array.splice()`
- **Store updates**: `store.set()`, `store.update()`

### What Doesn't Trigger

- **Property mutation**: `obj.prop = value` (ใช้ assignment แทน)
- **Array index assignment**: `array[0] = value` (ใช้ array methods)

## Best Practices

### Use Reactive for Derived Values

```javascript
// ✅ Good
$: total = price * quantity;

// ❌ Bad
function calculateTotal() {
  return price * quantity;
}
```

### Avoid Unnecessary Reactivity

```javascript
// ✅ Good - Static value
const PI = 3.14159;

// ❌ Bad - Unnecessary reactivity
$: PI = 3.14159;
```

## Summary

Reactivity ใน Svelte:
- ใช้ `$:` สำหรับ reactive declarations
- Compiler วิเคราะห์ dependencies อัตโนมัติ
- Stores ใช้ `$` prefix สำหรับ access values
- Track assignments และ array methods
- Avoid unnecessary reactivity
