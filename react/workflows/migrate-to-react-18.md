# Migrate to React 18

## Goal

Migrate React project จาก version เก่าไป React 18

## Steps

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

### 3. Update StrictMode

```javascript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### 4. Test New Features

- Concurrent rendering
- Automatic batching
- Transitions
- Suspense improvements

## Verification

รัน application และตรวจสอบว่าทำงานได้ปกติ
