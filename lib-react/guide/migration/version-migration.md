# Version Migration

## ภาพรวม

วิธีการ migrate ระหว่าง React versions

## React 17 to 18

### 1. Update Dependencies

```bash
bun add react@18 react-dom@18
```

### 2. Update Root Render

```javascript
// ❌ React 17
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// ✅ React 18
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### 3. New Features

**Concurrent Rendering:**
```javascript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**Automatic Batching:**
```javascript
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React 18 batches these updates automatically
}
```

**Transitions:**
```javascript
import { startTransition } from 'react';

startTransition(() => {
  setSearchQuery(query);
});
```

## สรุป

Version migration เป็น process ที่ต้องวางแผน:
1. Backup project ก่อนเริ่ม
2. Update dependencies
3. Update code ตาม breaking changes
4. Test thoroughly
