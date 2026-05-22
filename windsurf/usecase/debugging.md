# Debugging with Windsurf

Use Cascade for efficient debugging and issue resolution.

## Debug Workflow

### 1. Describe Issue

```
"Debug the memory leak in image upload:
- Memory grows ~50MB per upload
- Doesn't get garbage collected
- Occurs in production only
- Affects large images (>5MB)"
```

### 2. Cascade Investigation

1. Reads relevant code
2. Identifies potential causes
3. Suggests investigation steps
4. Proposes fixes

### 3. Implement Fix

```
"Fix the memory leak by:
1. Properly disposing image buffers
2. Adding cleanup in useEffect
3. Implementing blob URL revoke
Test with 100 large images"
```

### 4. Verify

```
"Run memory profiler and verify:
1. Memory stable after upload
2. No heap growth
3. Garbage collection working"
```

## Common Debug Scenarios

### Memory Leaks

**Symptoms:**
- Memory grows over time
- Doesn't decrease after use
- Eventually crashes

**Investigation:**
```
"Find memory leaks in:
1. Event listeners not removed
2. Timers not cleared
3. Large data structures cached
4. Closures holding references"
```

**Fix Pattern:**
```typescript
// Before
useEffect(() => {
  window.addEventListener('resize', handleResize);
  // Missing cleanup
});

// After
useEffect(() => {
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### Race Conditions

**Symptoms:**
- Intermittent failures
- Order-dependent behavior
- Flaky tests

**Investigation:**
```
"Find race conditions in:
1. Async operations without await
2. State updates based on previous state
3. Multiple simultaneous API calls
4. Shared mutable state"
```

**Fix Pattern:**
```typescript
// Use useCallback with proper deps
const fetchData = useCallback(async () => {
  const result = await api.getData(id);
  setData(result);
}, [id]);

// Or use ref for latest value
const latestId = useRef(id);
latestId.current = id;
```

### API Errors

**Symptoms:**
- 4xx/5xx errors
- Timeout issues
- Data mismatches

**Investigation:**
```
"Debug API errors in user endpoint:
1. Check request format
2. Verify headers
3. Test with curl
4. Check server logs"
```

**Fix Pattern:**
```typescript
async function fetchUser(id: string) {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null;
    }
    throw new ApiError(error.message);
  }
}
```

## Debugging Techniques

### 1. Add Logging

```
"Add structured logging to:
1. API calls (request/response)
2. State changes
3. Error handlers
4. Performance timing
Use consistent format"
```

### 2. Use Breakpoints

In Cascade:
```
"Set breakpoints at:
1. Entry point of function
2. Before state change
3. Error catch blocks
4. Async operations"
```

### 3. Reproduce Issue

```
"Create test case to reproduce:
1. Exact input that causes error
2. Expected vs actual behavior
3. Minimal reproduction
4. Edge cases"
```

### 4. Isolate Problem

```
"Split complex operation:
1. Log each step
2. Identify last success
3. First failure is root cause
4. Fix and retest"
```

## Debug Output Patterns

### Structured Logging

```typescript
console.log({
  event: 'api_request',
  endpoint: '/users',
  params: { id: '123' },
  timestamp: new Date().toISOString()
});
```

### Error Context

```typescript
catch (error) {
  console.error({
    event: 'api_error',
    error: error.message,
    endpoint: '/users',
    status: error.response?.status,
    data: error.response?.data
  });
}
```

## Cascade Debug Commands

| Command | Use |
|---------|-----|
| `find memory leak` | Detect memory issues |
| `check for race conditions` | Async problems |
| `fix null pointer` | Null/undefined errors |
| `debug performance` | Slow operations |
| `trace error` | Follow error path |

## Debug Checklist

| Check | Description |
|-------|-------------|
| Reproduce | Can you trigger the bug? |
| Isolate | Found the exact cause? |
| Fix | Implemented solution? |
| Test | Does fix work? |
| Verify | No regression? |

## Common Fix Patterns

### Undefined/Null

```typescript
// Safe access
const value = obj?.property?.nested;

// Default value
const name = user?.name ?? 'Anonymous';

// Null check
if (user !== null && user !== undefined) { }
```

### Async Errors

```typescript
// Proper async handling
async function loadData() {
  try {
    setLoading(true);
    const data = await fetchData();
    setData(data);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
```

### State Updates

```typescript
// Functional update
setCount(prev => prev + 1);

// Batch updates
setState(prev => ({ ...prev, a: 1, b: 2 }));
```

## Best Practices

| Practice | Why |
|----------|-----|
| Minimal reproduction | Easier to debug |
| Log everything | Track flow |
| Check edge cases | Find hidden bugs |
| Write regression test | Prevent future bugs |
| Document fixes | Help future debugging |