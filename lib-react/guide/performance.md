# React Performance Optimization

## ภาพรวม

การ optimize performance ของ React applications เพื่อให้ทำงานได้รวดเร็วและมีประสิทธิภาพ

## Rendering Optimization

### 1. React.memo

ใช้สำหรับ prevent unnecessary re-renders

```javascript
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* expensive rendering */}</div>;
});
```

**เมื่อใช้:**
- Component ที่ render ช้า
- Component ที่ได้ props เหมือนเดิมบ่อยๆ
- Pure components

### 2. useMemo

Cache ผลลัพธ์ของ expensive calculations

```javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**เมื่อใช้:**
- Calculations ที่ใช้เวลานาน
- Object/Array ที่ใช้ใน dependency arrays
- Derived state

### 3. useCallback

Cache function references

```javascript
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**เมื่อใช้:**
- Functions ที่ส่งเป็น props ไป child components
- Functions ที่ใช้ใน dependency arrays
- Event handlers

## Code Splitting

### 1. React.lazy

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

### 2. Route-based Splitting

```javascript
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### 3. Dynamic Imports

```javascript
const loadModule = async () => {
  const module = await import('./heavyModule');
  module.doSomething();
};
```

## List Optimization

### 1. Virtualization

ใช้ `react-window` หรือ `react-virtualized` สำหรับ long lists

```bash
bun add react-window
```

```javascript
import { FixedSizeList } from 'react-window';

function Row({ index, style }) {
  return <div style={style}>Row {index}</div>;
}

function List() {
  return (
    <FixedSizeList
      height={400}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </FixedSizeList>
  );
}
```

### 2. Key Props

ใช้ stable keys สำหรับ list items

```javascript
// ❌ ไม่ดี
{items.map((item, index) => <Item key={index} />)}

// ✅ ดี
{items.map(item => <Item key={item.id} />)}
```

### 3. Pagination

แบ่งข้อมูลออกเป็น pages

```javascript
function PaginatedList({ items, itemsPerPage = 10 }) {
  const [page, setPage] = useState(0);
  
  const paginatedItems = items.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );
  
  return (
    <>
      {paginatedItems.map(item => <Item key={item.id} item={item} />)}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={setPage}
      />
    </>
  );
}
```

## State Optimization

### 1. State Colocation

วาง state ใกล้กับที่ใช้มากที่สุด

```javascript
// ❌ State อยู่ไกลเกินไป
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

// ✅ State อยู่ใกล้กับที่ใช้
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}
```

### 2. State Normalization

ใช้ normalized state สำหรับ complex data

```javascript
// ❌ Nested state
const [state, setState] = useState({
  users: [
    { id: 1, name: 'John', posts: [{ id: 1, title: 'Post 1' }] }
  ]
});

// ✅ Normalized state
const [state, setState] = useState({
  users: {
    byId: { 1: { id: 1, name: 'John' } },
    allIds: [1]
  },
  posts: {
    byId: { 1: { id: 1, title: 'Post 1', userId: 1 } },
    allIds: [1]
  }
});
```

### 3. useReducer

ใช้ reducer สำหรับ complex state logic

```javascript
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <button onClick={() => dispatch({ type: 'increment' })}>
    {state.count}
  </button>;
}
```

## Bundle Optimization

### 1. Tree Shaking

ใช้ ES modules และ avoid importing entire libraries

```javascript
// ❌ Import entire library
import _ from 'lodash';

// ✅ Import specific functions
import { debounce } from 'lodash-es';
```

### 2. Bundle Analysis

ใช้ tools สำหรับ analyze bundle size

```bash
bun add -D rollup-plugin-visualizer
```

### 3. Compression

ใช้ compression สำหรับ production builds

```javascript
// vite.config.ts
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    viteCompression()
  ]
});
```

## Network Optimization

### 1. Image Optimization

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

### 2. Caching

ใช้ service workers และ cache strategies

```javascript
// service-worker.js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

### 3. CDN

ใช้ CDN สำหรับ static assets

## Monitoring

### 1. React DevTools Profiler

ใช้ Profiler สำหรับ identify performance issues

### 2. Performance API

ใช้ Performance API สำหรับ measure render times

```javascript
function measureRender() {
  performance.mark('render-start');
  // render logic
  performance.mark('render-end');
  performance.measure('render', 'render-start', 'render-end');
}
```

### 3. Web Vitals

Monitor Core Web Vitals

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## สรุป

Performance optimization เป็น process ที่ต่อเนื่อง:
1. Identify bottlenecks ด้วย profiling tools
2. Apply optimizations ตามลำดับความสำคัญ
3. Measure impact ของแต่ละ optimization
4. Monitor performance อย่างต่อเนื่อง
