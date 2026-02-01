# React Performance

## Description
การ optimize performance ของ React applications เพื่อให้ทำงานได้อย่างรวดเร็วและมีประสิทธิภาพ

## Why
Performance ที่ดีช่วยให้ผู้ใช้ได้รับประสบการณ์ที่ดีขึ้น และลด bounce rate

## Anti-patterns
❌ ไม่ optimize re-renders
❌ สร้าง objects ใหม่ใน render
❌ ไม่ใช้ lazy loading สำหรับ components ขนาดใหญ่

## Best Practices
✅ ใช้ React.memo สำหรับ component optimization
✅ ใช้ useMemo และ useCallback อย่างเหมาะสม
✅ ใช้ lazy loading สำหรับ code splitting

## Rules

### 1. Component Optimization
ใช้ `React.memo` สำหรับ components ที่ไม่ต้องการ re-render บ่อยๆ:

```tsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});
```

### 2. Memoization
ใช้ `useMemo` สำหรับ expensive calculations:

```tsx
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);
```

ใช้ `useCallback` สำหรับ functions:

```tsx
const handleClick = useCallback(() => {
  // handle click logic
}, [dependency]);
```

### 3. Code Splitting
ใช้ `React.lazy` สำหรับ lazy loading:

```tsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Usage with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### 4. Virtualization
ใช้ virtualization สำหรับ large lists:

```tsx
import { FixedSizeList } from 'react-window';

const VirtualizedList = ({ items }) => (
  <FixedSizeList
    height={600}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </FixedSizeList>
);
```

### 5. Bundle Optimization
- ใช้ dynamic imports สำหรับ large libraries
- ตั้งค่า webpack หรือ vite ให้เหมาะสม
- ใช้ tree shaking สำหรับ unused code

### 6. Image Optimization
- ใช้ lazy loading สำหรับ images
- ใช้ appropriate image formats
- ใช้ CDN สำหรับ static assets

## Impact
ถ้าไม่ทำตาม:
- Application ทำงานช้า
- User experience แย่ลง
- SEO performance ลดลง

## Verification
1. ใช้ React DevTools Profiler วัด performance
2. ตรวจสอบ bundle size ด้วย webpack-bundle-analyzer
3. ทดสอบ loading time ด้วย Lighthouse

## References
- [React Performance Best Practices](https://react.dev/learn/render-and-commit)
- [React Profiler API](https://react.dev/reference/react/Profiler)
- [Web Vitals](https://web.dev/vitals/)
