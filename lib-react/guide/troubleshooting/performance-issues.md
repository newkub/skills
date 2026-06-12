# Performance Issues

## ภาพรวม

ปัญหา performance ที่พบบ่อยใน React applications

## 1. Slow Rendering

**Problem:** Component render ช้า

**Causes:**
- Large component trees
- Expensive calculations ใน render
- Unnecessary re-renders

**Solution:**
```javascript
// ❌ Slow rendering
function ExpensiveList({ items }) {
  const sorted = items.sort((a, b) => a.value - b.value); // Sorts on every render
  return <ul>{sorted.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}

// ✅ Fixed with useMemo
function ExpensiveList({ items }) {
  const sorted = useMemo(() => 
    items.sort((a, b) => a.value - b.value),
    [items]
  );
  return <ul>{sorted.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}
```

## 2. Large Bundle Size

**Problem:** Bundle ใหญ่เกินไป

**Causes:**
- Import ทั้ง library แทนที่จะ import เฉพาะฟังก์ชัน
- ไม่ใช้ code splitting
- Large dependencies

**Solution:**
```javascript
// ❌ Import entire library
import _ from 'lodash';

// ✅ Import specific functions
import { debounce } from 'lodash-es';

// ❌ No code splitting
import HeavyComponent from './HeavyComponent';

// ✅ Code splitting
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

## สรุป

Performance issues ที่พบบ่อย:
1. Slow rendering - ใช้ useMemo สำหรับ expensive calculations
2. Large bundle size - ใช้ tree shaking และ code splitting
