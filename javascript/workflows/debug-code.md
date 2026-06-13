# Debug Code

## Overview

วิธี debugging JavaScript code ด้วย tools และ techniques ต่างๆ

## Console Debugging

### 1. Basic Console Methods

```javascript
console.log('Simple log');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');
console.debug('Debug message');
```

### 2. Console with Formatting

```javascript
const name = 'John';
const age = 25;

console.log('Name: %s, Age: %d', name, age);
console.log('Object: %o', { name, age });
console.log('JSON: %O', { name, age });
```

### 3. Console Groups

```javascript
console.group('User Data');
console.log('Name:', name);
console.log('Age:', age);
console.groupEnd();

console.groupCollapsed('Details');
console.log('Additional info');
console.groupEnd();
```

### 4. Console Table

```javascript
const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 }
];

console.table(users);
```

### 5. Console Time

```javascript
console.time('Operation');
// code to measure
console.timeEnd('Operation');
```

### 6. Console Assert

```javascript
const value = 5;
console.assert(value === 10, 'Value should be 10');
```

## Browser DevTools

### 1. Breakpoints

```javascript
// Set breakpoint in code
debugger;

const result = calculate();
console.log(result);
```

### 2. Conditional Breakpoints

```javascript
// Right-click on breakpoint > Edit breakpoint
// Add condition: value > 100
```

### 3. Watch Expressions

```javascript
// Add expressions to watch panel
// variableName
// object.property
// functionCall()
```

### 4. Call Stack

```javascript
function a() {
  b();
}

function b() {
  c();
}

function c() {
  debugger; // Check call stack here
}

a();
```

## Error Handling

### 1. Try-Catch with Logging

```javascript
try {
  const result = riskyOperation();
  console.log('Success:', result);
} catch (error) {
  console.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}
```

### 2. Global Error Handler

```javascript
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
```

### 3. Custom Error Logging

```javascript
class ErrorLogger {
  static log(error, context = {}) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
      timestamp: new Date().toISOString()
    };

    console.error('Error:', errorData);
    this.sendToMonitoring(errorData);
  }

  static sendToMonitoring(errorData) {
    // Send to error tracking service
  }
}
```

## Node.js Debugging

### 1. Node.js Inspector

```bash
# Run with inspect flag
node --inspect app.js

# Run with inspect-brk (break on start)
node --inspect-brk app.js
```

### 2. Chrome DevTools

```bash
# Open Chrome DevTools
chrome://inspect

# Click on "Inspect" for your Node.js process
```

### 3. VS Code Debugging

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

## Debugging Techniques

### 1. Binary Search Debugging

```javascript
function findBug(data) {
  console.log('Start debugging');
  console.log('Data length:', data.length);

  const mid = Math.floor(data.length / 2);
  console.log('Middle index:', mid);
  console.log('Middle value:', data[mid]);

  // Continue narrowing down
}
```

### 2. Logging State Changes

```javascript
let state = { count: 0 };

function increment() {
  console.log('Before:', state);
  state.count++;
  console.log('After:', state);
}
```

### 3. Tracing Function Calls

```javascript
function traceFunction(fn, name) {
  return function(...args) {
    console.log(`Calling ${name} with:`, args);
    const result = fn.apply(this, args);
    console.log(`${name} returned:`, result);
    return result;
  };
}

const tracedAdd = traceFunction((a, b) => a + b, 'add');
tracedAdd(5, 3);
```

### 4. Memory Profiling

```javascript
// Use Chrome DevTools Memory tab
// Take heap snapshots
// Compare snapshots to find memory leaks

// Or use Node.js
node --heap-prof app.js
```

## Common Debugging Scenarios

### 1. Undefined Variables

```javascript
// ❌ ผิด
console.log(myVariable); // undefined

// ✅ ถูก
const myVariable = 'value';
console.log(myVariable);
```

### 2. Type Errors

```javascript
// ❌ ผิด
const num = '5';
console.log(num + 10); // '510'

// ✅ ถูก
const num = Number('5');
console.log(num + 10); // 15
```

### 3. Async Issues

```javascript
// ❌ ผิด
let data;
fetchData().then(result => data = result);
console.log(data); // undefined

// ✅ ถูก
async function loadData() {
  const data = await fetchData();
  console.log(data);
}
```

### 4. Scope Issues

```javascript
// ❌ ผิด
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 5, 5, 5, 5, 5

// ✅ ถูก
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2, 3, 4
```

## Best Practices

### 1. ใช้ meaningful log messages

```javascript
// ✅ ถูก
console.log('User created:', { id: user.id, name: user.name });

// ❌ ผิด
console.log(user);
```

### 2. ลบ console.log ก่อน production

```javascript
// ✅ ถูก - ใช้ environment variable
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info');
}

// ❌ ผิด - console.log ใน production
console.log('Debug info');
```

### 3. ใช้ debugger อย่างระมัดระวัง

```javascript
// ✅ ถูก - ใช้เฉพาะ development
if (process.env.NODE_ENV === 'development') {
  debugger;
}

// ❌ ผิด - debugger ใน production
debugger;
```

### 4. ใช้ error tracking services

```javascript
// ✅ ถูก
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'your-dsn' });

try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}
```

## Debugging Tools

### 1. Chrome DevTools

- Sources panel - breakpoints, watch expressions
- Console panel - logging, debugging
- Network panel - API requests
- Performance panel - profiling
- Memory panel - memory leaks

### 2. VS Code Debugger

- Integrated debugging
- Breakpoints
- Watch variables
- Call stack
- Debug console

### 3. Node.js Inspector

- Built-in debugging
- Chrome DevTools integration
- Remote debugging

### 4. Third-party Tools

- Sentry - Error tracking
- LogRocket - Session replay
- Bugsnag - Error monitoring

## References

- [MDN: Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
