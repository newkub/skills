# Performance Patterns

## ภาพรวม

Design patterns สำหรับ performance optimization ใน React

## 1. Memoization Pattern

ใช้ memo เพื่อ prevent unnecessary re-renders

```javascript
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* expensive rendering */}</div>;
});
```

## 2. Lazy Loading Pattern

Lazy load components

```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
```

## 3. Virtual Scrolling Pattern

ใช้ virtual scrolling สำหรับ long lists

```javascript
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
}
```

## สรุป

Performance patterns ช่วยให้:
- ลด unnecessary re-renders
- ลด initial bundle size
- ปรับปรุง performance สำหรับ large lists
