---
name: javascript-performance-summary
description: สรุป best practices สำหรับ performance optimization ใน JavaScript
goal: ให้นักพัฒนาเขียน JavaScript code ที่มีประสิทธิภาพสูง
outcome: สามารถเขียน JavaScript code ที่ fast, efficient และ scalable
---

# Performance Best Practices

## Overview

Best practices สำหรับการปรับปรุงประสิทธิภาพ JavaScript code ทั้งใน browser และ Node.js

## Best Practices Summary

| Practice | Description | Priority | Example |
|----------|-------------|----------|---------|
| Use array methods over loops | Better performance and readability | High | `items.map(item => item * 2)` |
| Avoid memory leaks | Remove event listeners and intervals | High | `element.removeEventListener('click', handler)` |
| Use debouncing/throttling | Optimize event handlers | Medium | `const debouncedFn = debounce(fn, 300)` |
| Use lazy loading | Improve initial load time | Medium | `const LazyComponent = React.lazy(() => import('./Component'))` |
| Minimize DOM manipulation | Batch DOM updates | High | Use document fragments |
| Use requestAnimationFrame | Smooth animations | Medium | `requestAnimationFrame(updateAnimation)` |
| Optimize images and assets | Reduce file sizes | Medium | Use WebP format |
| Use caching strategies | Reduce network requests | High | Service Worker caching |
| Avoid blocking operations | Use async/await properly | High | `await fetchData()` |
| Use Web Workers for heavy tasks | Prevent UI blocking | Medium | `new Worker('worker.js')` |

## Implementation Guidelines

### High Priority Practices

1. **Use modern array methods** - `map`, `filter`, `reduce` over loops
2. **Avoid memory leaks** - Proper cleanup of event listeners
3. **Minimize DOM manipulation** - Batch updates
4. **Use caching strategies** - Service Workers, HTTP caching
5. **Avoid blocking operations** - Use async patterns

### Medium Priority Practices

1. **Use debouncing/throttling** - Optimize event handlers
2. **Use lazy loading** - Improve initial load time
3. **Use requestAnimationFrame** - Smooth animations
4. **Use Web Workers** - Heavy computation tasks

### Performance Checklist

#### Before Optimization

- [ ] Profile current performance
- [ ] Identify bottlenecks
- [ ] Set performance budgets

#### During Development

- [ ] Use efficient data structures
- [ ] Minimize DOM operations
- [ ] Implement proper cleanup
- [ ] Use async patterns correctly

#### After Development

- [ ] Run performance tests
- [ ] Check memory usage
- [ ] Verify load times
- [ ] Monitor in production

## Common Performance Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Slow initial load | Large bundle size | Code splitting, lazy loading |
| Memory leaks | Uncleaned event listeners | Proper cleanup |
| Janky animations | Synchronous operations | requestAnimationFrame |
| Slow DOM updates | Frequent manipulations | Batch updates |
| Network bottlenecks | Too many requests | Caching, bundling |

## Performance Tools

### Browser Tools

- **Chrome DevTools** - Performance profiling
- **Lighthouse** - Performance auditing
- **WebPageTest** - Real-world performance testing

### Node.js Tools

- **Node.js Profiler** - CPU and memory profiling
- **Clinic.js** - Performance diagnostics
- **0x** - Flame graph profiling

## Examples

### Efficient Array Operations

```javascript
// Good: Use array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);

// Bad: Manual loops
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
```

### DOM Optimization

```javascript
// Good: Batch DOM updates
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  fragment.appendChild(li);
});
document.getElementById('list').appendChild(fragment);

// Bad: Multiple DOM updates
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  document.getElementById('list').appendChild(li);
});
```

### Event Optimization

```javascript
// Good: Debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedSearch = debounce(searchAPI, 300);
searchInput.addEventListener('input', debouncedSearch);

// Good: Event delegation
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.matches('li')) {
    handleItemClick(e.target);
  }
});
```

### Memory Management

```javascript
// Good: Proper cleanup
class Component {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    this.element.addEventListener('click', this.handleClick);
  }

  destroy() {
    this.element.removeEventListener('click', this.handleClick);
    this.element = null;
  }
}

// Bad: Memory leak
class Component {
  constructor() {
    this.element.addEventListener('click', () => {
      // This creates a closure that keeps the component alive
    });
  }
}
```

### Async Optimization

```javascript
// Good: Parallel operations
async function fetchUserData() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);

  return { user, posts, comments };
}

// Bad: Sequential operations
async function fetchUserData() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();

  return { user, posts, comments };
}
```

### Web Workers

```javascript
// Main thread
const worker = new Worker('worker.js');

worker.postMessage({ data: largeDataSet });
worker.onmessage = (e) => {
  const result = e.data;
  updateUI(result);
};

// worker.js
self.onmessage = (e) => {
  const result = processLargeDataSet(e.data);
  self.postMessage(result);
};

function processLargeDataSet(data) {
  // Heavy computation here
  return processedData;
}
```

## Performance Metrics

### Key Metrics to Monitor

- **First Contentful Paint (FCP)** - When content first appears
- **Largest Contentful Paint (LCP)** - When main content loads
- **Time to Interactive (TTI)** - When page becomes interactive
- **Cumulative Layout Shift (CLS)** - Visual stability
- **First Input Delay (FID)** - Responsiveness to user input

### Memory Metrics

- **Heap size** - Memory usage over time
- **Garbage collection frequency** - GC performance impact
- **Memory leaks** - Unreleased memory

## Verification

1. ตรวจสอบว่าใช้ array methods แทน loops
2. ทดสอบว่าไม่มี memory leaks
3. ยืนยันว่า DOM operations ถูก batch
4. ตรวจสอบว่ามี proper cleanup
5. ทดสอบว่า async operations ไม่ blocking
6. ยืนยันว่ามี caching strategies
7. ตรวจสอบ performance metrics ใน production
