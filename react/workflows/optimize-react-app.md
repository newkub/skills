# Optimize React App

## Goal

Optimize React application สำหรับ performance ที่ดีขึ้น

## Steps

### 1. Code Splitting

ใช้ React.lazy สำหรับ lazy loading

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

### 2. Memoization

ใช้ React.memo, useMemo, และ useCallback

```javascript
const MemoizedComponent = React.memo(Component);

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

### 3. Virtual Scrolling

ใช้ react-window สำหรับ long lists

```bash
bun add react-window
```

### 4. Bundle Analysis

Analyze bundle size

```bash
bun add -D rollup-plugin-visualizer
```

### 5. Image Optimization

ใช้ modern image formats และ lazy loading

```javascript
<img
  src="image.webp"
  loading="lazy"
  width="800"
  height="600"
  alt="Description"
/>
```

## Verification

ใช้ React DevTools Profiler สำหรับ measure performance
