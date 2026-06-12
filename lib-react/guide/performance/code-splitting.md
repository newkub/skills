# Code Splitting

## ภาพรวม

Techniques สำหรับ code splitting ใน React applications

## 1. React.lazy

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

## 2. Route-based Splitting

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

## 3. Dynamic Imports

```javascript
const loadModule = async () => {
  const module = await import('./heavyModule');
  module.doSomething();
};
```

## สรุป

Code splitting:
1. React.lazy - Lazy load components
2. Route-based splitting - Split ตาม routes
3. Dynamic imports - Load modules on demand
